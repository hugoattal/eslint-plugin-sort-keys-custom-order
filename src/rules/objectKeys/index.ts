import { RuleMetaData, RuleModule } from "@typescript-eslint/experimental-utils/dist/ts-eslint";
import properties, { TMessageIds, TOptions } from "./properties";
import { createRule } from "./rule";

const meta: RuleMetaData<TMessageIds> = {
    docs: {
        category: "Stylistic Issues",
        description: "Require object keys to be sorted with custom order",
        recommended: false,
        url: "https://github.com/hugoattal/eslint-plugin-sort-keys-custom-order"
    },
    fixable: "code",
    messages: {
        "object-keys-error": "Expected object keys to be in correct order. '{{thisName}}' should be before '{{prevName}}'."
    },
    schema: [properties],
    type: "suggestion"
};

const rule: RuleModule<TMessageIds, TOptions> = {
    create: createRule,
    meta
};

export default rule;

