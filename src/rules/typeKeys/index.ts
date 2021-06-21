import { RuleModule, RuleMetaData } from "@typescript-eslint/experimental-utils/dist/ts-eslint";
import properties, { TMessageIds, TOptions } from "./properties";
import { createRule } from "@/rules/typeKeys/rule";


const meta: RuleMetaData<TMessageIds> = {
    type: "suggestion",
    fixable: "code",
    docs: {
        description: "Require type keys to be sorted with custom order",
        category: "Stylistic Issues",
        recommended: false,
        url: "https://github.com/hugoattal/eslint-plugin-sort-keys-custom-order"
    },
    schema: [properties],
    messages: {
        "type-keys-error": "Expected type keys to be in correct order. '{{thisName}}' should be before '{{prevName}}'."
    }
};

const rule: RuleModule<TMessageIds, TOptions> = {
    meta,
    create: createRule
};

export default rule;
