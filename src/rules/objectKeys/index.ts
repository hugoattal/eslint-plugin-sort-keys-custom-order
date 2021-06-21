import { RuleMetaData, RuleModule } from "@typescript-eslint/experimental-utils/dist/ts-eslint";
import properties, { TMessageIds, TOptions } from "./properties";
import { createRule } from "./rule";

const meta: RuleMetaData<TMessageIds> = {
    type: "suggestion",
    fixable: "code",
    docs: {
        description: "Require object keys to be sorted with custom order",
        category: "Stylistic Issues",
        recommended: false,
        url: "https://github.com/hugoattal/eslint-plugin-sort-keys-custom-order"
    },
    schema: [properties],
    messages: {
        "object-keys-error": "Expected object keys to be in correct order. '{{thisName}}' should be before '{{prevName}}'."
    }
};

const rule: RuleModule<TMessageIds, TOptions> = {
    meta,
    create: createRule
};

export default rule;
