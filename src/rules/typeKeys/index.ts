import { TSESLint } from "@typescript-eslint/utils";
import properties, { TMessageIds, TOptions } from "./properties";
import { createRule } from "@/rules/typeKeys/rule";


const meta: TSESLint.RuleMetaData<TMessageIds> = {
    docs: {
        description: "Require type keys to be sorted with custom order",
        recommended: false,
        url: "https://github.com/hugoattal/eslint-plugin-sort-keys-custom-order"
    },
    fixable: "code",
    messages: {
        "type-keys-error": "Expected type keys to be in correct order. '{{thisName}}' should be before '{{prevName}}'."
    },
    schema: [properties],
    type: "suggestion"
};

const rule: TSESLint.RuleModule<TMessageIds, TOptions> = {
    create: createRule,
    meta
};

export default rule;
