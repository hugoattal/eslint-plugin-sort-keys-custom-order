import { ESLintUtils } from "@typescript-eslint/utils";
import { TMessageIds, properties } from "./properties";
import { create } from "./rule";
import { createRule } from "@/utils";

const meta: ESLintUtils.NamedCreateRuleMeta<TMessageIds> = {
    docs: {
        description: "Require type keys to be sorted with custom order",
        url: "https://github.com/hugoattal/eslint-plugin-sort-keys-custom-order"
    },
    fixable: "code",
    messages: {
        "type-keys-error": "Expected type keys to be in correct order. '{{thisName}}' should be before '{{prevName}}'."
    },
    schema: [properties],
    type: "suggestion"
};

export const rule = createRule({
    create,
    defaultOptions: [],
    meta,
    name: "type-keys"
});
