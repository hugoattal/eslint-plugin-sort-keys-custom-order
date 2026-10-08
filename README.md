# eslint-plugin-sort-keys-custom-order

This plugin enforces alphabetically sorting keys in objects and typescript types with auto-fix. You can add a list of priority sorted keys for custom sorting (ex: if you want "id" to be the first property).

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm install -D eslint
```

Next, install `eslint-plugin-sort-keys-custom-order`:

```
$ npm install -D eslint-plugin-sort-keys-custom-order
```


## Usage

Register the plugin in your ESLint flat configuration (`eslint.config.js`):

```js
// eslint.config.js
import sortKeysCustomOrder from "eslint-plugin-sort-keys-custom-order";

export default [{
    /* ... */
    plugins: {
        "sort-keys-custom-order": sortKeysCustomOrder
    }
    /* ... */
}]
```


Then configure the rules you want to use under the rules section.

```js
// eslint.config.js
export default [{
    /* ... */
    "rules": {
        // For JS objects sorting
        "sort-keys-custom-order/object-keys": [
            "error", { "orderedKeys": ["id", "name", "title"] }
        ],
        // For TS types sorting
        "sort-keys-custom-order/type-keys": [
            "error", { "orderedKeys": ["id", "name", "title"] }
        ]
    }
    /* ... */
}]
```

Or you can use the recommended configuration:

```js
// eslint.config.js
import sortKeysCustomOrder from "eslint-plugin-sort-keys-custom-order";

export default [
    /* ... */
    sortKeysCustomOrder.configs["flat/recommended"],
    /* ... */
]
```

## Configuration

`orderedKeys: Array<string>` : You can pass an array of unique string keys to the rule configuration. The rule will sort the keys in the order you provided.

`sorting: "asc" | "desc" | "none"` : You can pass the sorting order for the keys not in orderedKeys. Default is "asc".

Example:

```json
{
    "sort-keys-custom-order/object-keys": [
        "error", 
        { 
            "orderedKeys": ["id","name","title"],
            "sorting": "asc"
        }
    ]
}
```


## Supported Rules

### sort-keys-custom-order/object-keys

Allow you to sort properties inside JS objects

### sort-keys-custom-order/type-keys

Allow you to sort properties inside TS types

### sort-keys-custom-order/import-object-keys

Allow you to sort properties inside JS import objects

### sort-keys-custom-order/export-object-keys

Allow you to sort properties inside JS export objects


## Example

```js
// Bad
const module = {
    isValid: true,
    id: 1234,
    create: () => { doThing() },
    isRunning: false,
    name: "test",
    url: "https://google.com",
    isAvailable: true
}
```

```js
// Good
const module = {
    id: 1234,
    name: "test",
    create: () => { doThing() },
    isAvailable: true,
    isRunning: false,
    isValid: true,
    url: "https://google.com"
}
```



## Autofix safety

Sorting is stable: keys with equal priority retain their original order. Each sortable segment is fixed in one replacement, including long lists.

Spreads, unknown computed keys, and unsupported TypeScript members separate sortable segments. Properties are never moved across these boundaries. TypeScript modifiers, optional markers, brackets, and member comments move with their property; separators remain at their original positions.

Object destructuring is reported but never automatically reordered, because defaults and getter reads can depend on evaluation order. Object literals with initializers that may execute user code (including calls, member reads, and updates) are also reported without an automatic fix. Literal values, identifiers, arrays of safe values, and function definitions can be reordered.

## Development

Run `npm test -- --run` for the rule and regression tests. Run `npm run build` to generate the ESM/CommonJS bundles and declarations. Packaging runs the build automatically through `prepack`; test declarations are excluded from the published output.
