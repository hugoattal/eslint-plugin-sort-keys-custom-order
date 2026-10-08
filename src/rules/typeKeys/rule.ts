import { TSESLint, TSESTree } from "@typescript-eslint/utils";
import type { TMessageIds } from "./index";
import type { TOptions } from "@/lib/options";
import { getPropertyName } from "@/lib/property";
import { checkOrder } from "@/lib/sort";

export function create(context: TSESLint.RuleContext<TMessageIds, TOptions>): TSESLint.RuleListener {
    return {
        TSInterfaceBody(node) {
            checkOrder(context, node.body, getName, "type-keys-error");
        },
        TSTypeLiteral(node) {
            checkOrder(context, node.members, getName, "type-keys-error");
        }
    };
}

function getName(node: TSESTree.TypeElement) {
    if (node.type !== TSESTree.AST_NODE_TYPES.TSPropertySignature) {
        return;
    }
    return getPropertyName(node);
}
