import { ConfigWithExtends } from "typescript-eslint";
import { rule as objectKeysRule } from "./rules/objectKeys";
import { rule as typeKeysRule } from "./rules/typeKeys";
import { rule as importObjectKeysRule } from "./rules/importObject";
import { rule as exportObjectKeysRule } from "./rules/exportObject";

const recommendedRules = {
    "sort-keys-custom-order/export-object-keys": "error",
    "sort-keys-custom-order/import-object-keys": "error",
    "sort-keys-custom-order/object-keys": "error",
    "sort-keys-custom-order/type-keys": "error"
} as const;

const rules = {
    "export-object-keys": exportObjectKeysRule,
    "import-object-keys": importObjectKeysRule,
    "object-keys": objectKeysRule,
    "type-keys": typeKeysRule
};

const base = {
    meta: {
        name: "eslint-plugin-sort-keys-custom-order",
        version: "2.0.1"
    },
    processors: {},
    rules
};

export default {
    ...base,
    configs: {
        "flat/recommended": {
            plugins: { "sort-keys-custom-order": base },
            rules: recommendedRules
        },
        recommended: {
            plugins: ["sort-keys-custom-order"],
            rules: recommendedRules
        }
    }
};
