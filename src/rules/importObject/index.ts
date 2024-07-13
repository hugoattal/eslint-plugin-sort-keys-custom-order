import { ESLintUtils } from "@typescript-eslint/utils";
import { TMessageIds, properties } from "./properties";
import { create } from "./rule";
import { createRule } from "@/utils";

const meta: ESLintUtils.NamedCreateRuleMeta<TMessageIds> = {
    docs: {
        description: "Require import object keys to be sorted with custom order",
        url: "https://github.com/hugoattal/eslint-plugin-sort-keys-custom-order"
    },
    fixable: "code",
    messages: {
        "import-object-keys-error": "Expected import object keys to be in correct order. '{{thisName}}' should be before '{{prevName}}'."
    },
    schema: [properties],
    type: "suggestion"
};

export const rule = createRule({
    create,
    defaultOptions: [],
    meta,
    name: "import-object-keys"
});

