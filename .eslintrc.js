module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript"
    ],
    parserOptions: {
        ecmaVersion: 2020,
        parser: "@typescript-eslint/parser"
    },
    plugins: [
        "@typescript-eslint",
        "import",
        "sort-keys-custom-order"
    ],
    root: true,
    rules: {
        "@typescript-eslint/type-annotation-spacing": ["error"],
        "array-bracket-spacing": ["error", "never"],
        "arrow-spacing": ["error"],
        "brace-style": ["error", "stroustrup"],
        "comma-dangle": ["error", "never"],
        "eol-last": ["error", "always"],
        "eqeqeq": ["error", "always"],
        "import/order": ["error"],
        "indent": ["error", 4],
        "key-spacing": ["error"],
        "keyword-spacing": ["error"],
        "no-multi-spaces": ["error"],
        "object-curly-spacing": ["error", "always"],
        "prefer-template": "error",
        "quotes": ["error", "double", { "allowTemplateLiterals": true }],
        "semi": ["error", "always"],
        "sort-keys-custom-order/object-keys": ["error"],
        "sort-keys-custom-order/type-keys": ["error"],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": ["error"],
        "template-curly-spacing": ["error", "always"]
    },
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import/resolver": {
            "alias": {
                "extensions": [".js", ".ts"],
                map: [
                    ["@", "./src"]
                ]
            },
            "typescript": {}
        }
    }
};
