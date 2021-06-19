import { Rule } from "eslint";
import properties from "./properties";
import { createRule } from "@/sort-keys-custom-order/rule";

const meta: Rule.RuleMetaData = {
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
        "sort-keys-custom-order-error": "Expected object keys to be in correct order. '{{thisName}}' should be before '{{prevName}}'."
    }
};

const rule: Rule.RuleModule = {
    meta,
    create: createRule
};



export default rule;
