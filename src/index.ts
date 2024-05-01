import objectKeysRule from "./rules/objectKeys";
import typeKeysRule from "./rules/typeKeys";
import importObjectKeysRule from "./rules/importObject";
import exportObjectKeysRule from "./rules/exportObject";

export default {
    meta:{
        name: "eslint-plugin-sort-keys-custom-order",
        version: "2.0.0"
    },
    configs: {},
    rules: {
        "export-object-keys": exportObjectKeysRule,
        "import-object-keys": importObjectKeysRule,
        "object-keys": objectKeysRule,
        "type-keys": typeKeysRule
    },
    processors: {}
}
