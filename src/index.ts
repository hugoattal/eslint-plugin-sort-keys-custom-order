import type { ESLint, Linter } from "eslint";
import packageDefinition from "../package.json" with { type: "json" };
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

type TPlugin = ESLint.Plugin & {
    configs: {
        /** @deprecated Use `configs.recommended` instead */
        "flat/recommended": Linter.Config;
        recommended: Linter.Config;
    };
    rules: Record<keyof typeof rules, NonNullable<ESLint.Plugin["rules"]>[string]>;
};

// typescript-eslint's RuleModule isn't assignable to ESLint's own rule type, so expose ESLint types publicly
const base: Omit<TPlugin, "configs"> = {
    meta: {
        name: "eslint-plugin-sort-keys-custom-order",
        version: packageDefinition.version
    },
    processors: {},
    rules: rules as unknown as TPlugin["rules"]
};

const recommended: Linter.Config = {
    plugins: { "sort-keys-custom-order": base },
    rules: recommendedRules
};

const plugin: TPlugin = {
    ...base,
    configs: {
        "flat/recommended": recommended,
        recommended
    }
};

export default plugin;
