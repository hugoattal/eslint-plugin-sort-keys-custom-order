# eslint-plugin-sort-keys-custom-order

This plugin enforces alphabetically sorting keys in objects and typescript types with auto-fix. You can add a list of priority sorted keys for a custom sorting (like if you want "id" to be the first property).

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

```json
{
    "plugins": [
        "sort-keys-custom-order"
    ]
}
```


Then configure the rules you want to use under the rules section.

```js
module.exports = {
    /* ... */
    "rules": {
        // For JS object sorting
        "sort-keys-custom-order/object-keys": ["error", { "orderedKeys": [
            "id",
            "name",
            "title"
        ] }],
        // For TS type sorting
        "sort-keys-custom-order/type-keys": ["error", { "orderedKeys": [
            "id",
            "name",
            "title"
        ] }]
    }
    /* ... */
}
```

## Supported Rules

### sort-keys-custom-order/object-keys

Allow you to sort properties inside JS objects

### sort-keys-custom-order/type-keys

Allow you to sort properties inside TS types


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


