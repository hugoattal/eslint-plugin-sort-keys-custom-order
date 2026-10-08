# eslint-plugin-sort-keys-custom-order

Keep your most important keys first, and let ESLint sort the rest.

Sort JavaScript object properties, TypeScript type properties, and named imports and exports with a custom priority list. Put keys like `id` and `name` at the top, choose how the remaining keys are ordered, and apply safe changes with autofix.

With `orderedKeys: ["id", "name"]`, this object:

```js
const user = {
    role: "editor",
    name: "Alex",
    active: true,
    id: 42
};
```

Becomes:

```js
const user = {
    id: 42,
    name: "Alex",
    active: true,
    role: "editor"
};
```

## Contents

- [Quick start](#quick-start)
- [Choose your rules](#choose-your-rules)
- [TypeScript setup](#typescript-setup)
- [Sorting options](#sorting-options)
- [Object selectors](#object-selectors)
- [Autofix behavior](#autofix-behavior)
- [Development](#development)
- [Feedback and license](#feedback-and-license)

## Quick start

### 1. Install

```sh
npm install --save-dev eslint @typescript-eslint/utils eslint-plugin-sort-keys-custom-order
```

The current package requires ESLint `^10.0.0` and `@typescript-eslint/utils` `^8.0.0` as peer dependencies.

### 2. Configure ESLint

Add the plugin's recommended preset to your flat configuration:

```js
// eslint.config.js
import sortKeysCustomOrder from "eslint-plugin-sort-keys-custom-order";

export default [
    sortKeysCustomOrder.configs.recommended
];
```

This registers the plugin and enables all four rules at the `error` level. By default, keys are sorted alphabetically without a custom priority list. For TypeScript files, also configure a [TypeScript parser](#typescript-setup).

To put selected object keys first, add a rule override after the preset:

```js
// eslint.config.js
import sortKeysCustomOrder from "eslint-plugin-sort-keys-custom-order";

export default [
    sortKeysCustomOrder.configs.recommended,
    {
        rules: {
            "sort-keys-custom-order/object-keys": [
                "error",
                { orderedKeys: ["id", "name", "title"] }
            ]
        }
    }
];
```

Each rule has its own options. Customizing `object-keys` does not change the other rules.

### 3. Apply fixes

```sh
npx eslint . --fix
```

ESLint applies supported fixes and reports any remaining ordering issues. See [autofix behavior](#autofix-behavior) for cases that require manual changes.

## Choose your rules

Enable only the rules you need, or use the recommended preset to enable them all.

| Rule | What it sorts | Name used for sorting |
| --- | --- | --- |
| `sort-keys-custom-order/object-keys` | Object literals and object destructuring patterns | Property name |
| `sort-keys-custom-order/type-keys` | Property signatures in TypeScript interfaces and type literals | Property name |
| `sort-keys-custom-order/import-object-keys` | Named import specifiers | Imported name, before any alias |
| `sort-keys-custom-order/export-object-keys` | Named export specifiers | Exported name, after any alias |

To register the plugin and enable a single rule:

```js
// eslint.config.js
import sortKeysCustomOrder from "eslint-plugin-sort-keys-custom-order";

export default [
    {
        plugins: {
            "sort-keys-custom-order": sortKeysCustomOrder
        },
        rules: {
            "sort-keys-custom-order/object-keys": [
                "error",
                { orderedKeys: ["id", "name"], sorting: "asc" }
            ]
        }
    }
];
```

The import and export rules sort specifiers within a declaration; they do not reorder separate declarations. For example, with the default options:

```js
import { alpha as localAlpha, zebra } from "./values.js";

export { zebra as alpha, localAlpha as zebra };
```

Both lists are sorted: imports use the original names, while exports use the public names.

## TypeScript setup

The plugin does not configure a TypeScript parser. If your ESLint configuration already parses TypeScript, add the plugin to that configuration. Otherwise, install `typescript-eslint` and TypeScript:

```sh
npm install --save-dev typescript typescript-eslint
```

Then configure the parser for TypeScript files:

```js
// eslint.config.js
import sortKeysCustomOrder from "eslint-plugin-sort-keys-custom-order";
import tsEslint from "typescript-eslint";

export default [
    sortKeysCustomOrder.configs.recommended,
    {
        files: ["**/*.ts", "**/*.tsx"],
        languageOptions: {
            parser: tsEslint.parser
        },
        rules: {
            "sort-keys-custom-order/type-keys": [
                "error",
                { orderedKeys: ["id", "name"] }
            ]
        }
    }
];
```

With these options, both of the following are correctly ordered:

```ts
type TUser = {
    id: number;
    name: string;
    active: boolean;
    role: string;
};

interface User {
    id: number;
    name: string;
    active: boolean;
    role: string;
}
```

## Sorting options

All four rules accept the same base options:

| Option | Accepted values | Default | Behavior |
| --- | --- | --- | --- |
| `orderedKeys` | Array of unique strings | `[]` | Places listed keys first, in the exact order provided |
| `sorting` | `"asc"`, `"desc"`, or `"none"` | `"asc"` | Controls the order of keys not listed in `orderedKeys` |

Priority matching is case-sensitive. Alphabetical sorting is case-insensitive, uses string comparison, and preserves the original order of names that compare equally.

For an initial key order of `z, name, a, id, b`:

| Options | Result |
| --- | --- |
| Default options | `a, b, id, name, z` |
| `{ orderedKeys: ["id", "name"] }` | `id, name, a, b, z` |
| `{ orderedKeys: ["id", "name"], sorting: "desc" }` | `id, name, z, b, a` |
| `{ orderedKeys: ["id", "name"], sorting: "none" }` | `id, name, z, a, b` |
| `{ orderedKeys: [], sorting: "none" }` | `z, name, a, id, b` |

`sorting: "none"` keeps unlisted keys in their original relative order. Keys in `orderedKeys` still move to the front. Use an empty priority list with `"none"` to leave all keys in their original order.

These examples assume a single sortable segment. [Boundaries](#sortable-boundaries) can prevent keys from moving across part of a declaration.

## Object selectors

Use `selectors` on `object-keys` to give particular object literals different sorting options. For example, preserve a `layout` property's order while putting `id` first throughout arguments passed to `defineRecord`:

```js
"sort-keys-custom-order/object-keys": [
    "error",
    {
        orderedKeys: ["id", "name"],
        sorting: "asc",
        selectors: [
            {
                target: { type: "property", name: "layout" },
                mode: "direct",
                orderedKeys: [],
                sorting: "none"
            },
            {
                target: { type: "function", name: "defineRecord" },
                mode: "recursive",
                orderedKeys: ["id"],
                sorting: "none"
            }
        ]
    }
]
```

Place this rule entry inside your configuration's `rules` object.

### Targets and modes

| Setting | Matches |
| --- | --- |
| `target: { type: "property", name: "layout" }` | Values of properties named `layout`, at any nesting depth |
| `target: { type: "function", name: "defineRecord" }` | Any argument of a direct call to `defineRecord(...)` |
| `mode: "direct"` (default) | Only an object that is itself the property value or function argument |
| `mode: "recursive"` | That object and object literals nested anywhere within the value or argument, including inside arrays |

Property targets support identifier keys, quoted keys, and statically known computed keys. Dynamic computed keys do not match. Function targets match identifier calls such as `defineRecord(...)`; member calls such as `api.defineRecord(...)` do not match.

TypeScript assertions, non-null assertions, and `satisfies` expressions do not interfere with direct matching.

With the configuration above:

```js
const settings = {
    layout: {
        z: 1,
        a: 2,
        nested: { a: 1, z: 2 }
    }
};

defineRecord({
    id: 1,
    z: 2,
    a: 3,
    nested: { id: 4, z: 5, a: 6 }
});
```

The `layout` object's keys stay in their original order. Its nested object uses the global options because the selector uses `direct` mode. The `defineRecord` selector applies recursively: `id` comes first in both objects, and the remaining keys keep their relative order.

### How overrides are resolved

- The nearest matching target wins.
- If multiple selectors match that target, the first eligible selector in the array wins.
- Omitted `orderedKeys` or `sorting` values inherit the rule's global options, rather than an enclosing selector's options.
- Unmatched object literals and all destructuring patterns use the global options.
- Selectors change sorting preferences; autofix safety restrictions still apply.

## Autofix behavior

Sorting is stable: keys with equal priority keep their original relative order. Each sortable segment is fixed in one replacement, including long lists.

### Sortable boundaries

Spreads, unknown computed keys, and unsupported TypeScript members separate sortable segments. Properties never move across those boundaries.

For example, with default alphabetical sorting:

```js
// Before
const settings = { z: 1, a: 2, ...defaults, y: 3, b: 4 };

// After
const settings = { a: 2, z: 1, ...defaults, b: 4, y: 3 };
```

The spread stays in place, and each side is sorted independently. TypeScript methods, call signatures, and index signatures likewise act as boundaries rather than sortable properties.

TypeScript modifiers, optional markers, brackets, and member comments move with their property. Separators remain at their original positions.

### Cases that require manual changes

The plugin reports ordering issues without an automatic fix when reordering could affect evaluation:

- **Object destructuring:** default values and getter reads can depend on the order in which properties are accessed.
- **Object literals with potentially unsafe initializers:** calls, member reads, updates, and other expressions that may execute user code prevent autofix for that object.

Literal values, identifiers, arrays of safe values, and function definitions can be reordered. For example, an arrow function containing a call can move because defining it does not execute its body; a property initialized by a call requires manual handling.

## Development

Install dependencies using the repository's pnpm setup:

```sh
pnpm install
```

| Command | Purpose |
| --- | --- |
| `npm test -- --run` | Run rule and regression tests once |
| `npm test` | Run tests in watch mode |
| `npm run dev:test` | Open the Vitest UI |
| `npm run build` | Generate ESM and CommonJS bundles and TypeScript declarations |

Packaging runs the build automatically through `prepack`, which invokes pnpm. Test declarations are excluded from the published output.

## Feedback and license

Found an ordering case that needs attention? [Open an issue](https://github.com/hugoattal/eslint-plugin-sort-keys-custom-order/issues) with your rule configuration, a small input example, and the output you expected.

Licensed under ISC.
