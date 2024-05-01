import sortKeysCustomOrder from "eslint-plugin-sort-keys-custom-order";
import tsEslint from "typescript-eslint";
import importX from "eslint-plugin-import-x";

export default tsEslint.config(
    {
        extends: [tsEslint.configs.base],
        files: ["**/*.js", "**/*.ts", "**/*.tsx"],
        plugins: {
            "import-x": importX,
            "sort-keys-custom-order": sortKeysCustomOrder
        },
        rules: {
            "@typescript-eslint/type-annotation-spacing": ["error"],
            "array-bracket-spacing": ["error", "never"],
            "arrow-spacing": ["error"],
            "brace-style": ["error", "stroustrup"],
            "comma-dangle": ["error", "never"],
            "eol-last": ["error", "always"],
            "eqeqeq": ["error", "always"],
            "import-x/order": ["error"],
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
        }
    }
);
