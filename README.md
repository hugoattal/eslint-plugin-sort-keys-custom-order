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

Add `sort-keys-custom-order` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

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
// .eslintrc.js
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

`orderedKeys: Array<string>` : You can pass an array of ordered keys to the rule configuration. The rule will sort the keys in the order you provided.

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


