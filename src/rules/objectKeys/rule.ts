import { TSESLint, TSESTree } from "@typescript-eslint/utils";
import type { TMessageIds } from "./index";
import type { TOptions } from "@/lib/options";
import { getPropertyName, isSafeInitializer } from "@/lib/property";
import { checkOrder } from "@/lib/sort";

export function create(context: TSESLint.RuleContext<TMessageIds, TOptions>): TSESLint.RuleListener {
    return {
        ObjectExpression(node) {
            const canFix = node.properties.every(property => {
                if (property.type !== TSESTree.AST_NODE_TYPES.Property) {
                    return true;
                }
                return isSafeInitializer(property.value);
            });
            checkOrder(context, node.properties, getName, "object-keys-error", canFix);
        },
        ObjectPattern(node) {
            // Defaults and getters can depend on destructuring evaluation order.
            checkOrder(context, node.properties, getName, "object-keys-error", false);
        }
    };
}

function getName(node: TSESTree.Property | TSESTree.SpreadElement | TSESTree.RestElement) {
    if (node.type !== TSESTree.AST_NODE_TYPES.Property) {
        return;
    }
    return getPropertyName(node);
}
