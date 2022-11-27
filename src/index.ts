import objectKeysRule from "./rules/objectKeys";
import typeKeysRule from "./rules/typeKeys";
import importObjectKeysRule from "./rules/importObject";
import exportObjectKeysRule from "./rules/exportObject";

export const rules = {
    "export-object-keys": exportObjectKeysRule,
    "import-object-keys": importObjectKeysRule,
    "object-keys": objectKeysRule,
    "type-keys": typeKeysRule
};
