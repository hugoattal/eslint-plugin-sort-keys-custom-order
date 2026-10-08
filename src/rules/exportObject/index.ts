import { ESLintUtils } from "@typescript-eslint/utils";
import { properties, TOptions } from "@/lib/options";
import { create } from "./rule";
import { createRule } from "@/utils";

export type TMessageIds = "export-object-keys-error";

const meta: ESLintUtils.NamedCreateRuleMeta<TMessageIds, unknown, TOptions> = {
    defaultOptions: [],
    docs: {
        description: "Require export object keys to be sorted with custom order",
        url: "https://github.com/hugoattal/eslint-plugin-sort-keys-custom-order"
    },
    fixable: "code",
    messages: {
        "export-object-keys-error": "Expected export object keys to be in correct order. '{{thisName}}' should be before '{{prevName}}'."
    },
    schema: [properties],
    type: "suggestion"
};

export const rule = createRule({
    create,
    meta,
    name: "export-object-keys"
});
