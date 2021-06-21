import { RuleListener, RuleContext } from "@typescript-eslint/experimental-utils/dist/ts-eslint";
import { TSESTree } from "@typescript-eslint/experimental-utils/dist/ts-estree";
import { TMessageIds, TOptions } from "./properties";
import { getFixer, getOrderFunction, getPropertyName, TNodeStack } from "@/lib";

export function createRule(context: RuleContext<TMessageIds, TOptions>): RuleListener {
    let nodeStack: TNodeStack<TSESTree.Property>;

    const isInOrder = getOrderFunction(context.options[0]?.orderedKeys);

    return {
        ObjectExpression() {
            nodeStack = {
                upper: nodeStack,
                name: undefined,
                node: undefined
            };
        },
        "ObjectExpression:exit"() {
            if (!nodeStack) {
                return;
            }

            nodeStack = nodeStack.upper;
        },
        Property(node) {
            if (!nodeStack) {
                return;
            }

            const prevNodeStack: TNodeStack<TSESTree.Property> = {
                upper: nodeStack,
                name: nodeStack.name,
                node: nodeStack.node
            };

            const thisName = getPropertyName(node);

            if (thisName) {
                nodeStack.name = thisName;
                nodeStack.node = node || prevNodeStack.node;
            }

            if (!prevNodeStack.name || !thisName) {
                return;
            }

            if (!isInOrder(prevNodeStack.name, thisName)) {
                if (!node.key.loc) {
                    return;
                }

                context.report({
                    node,
                    loc: node.key.loc,
                    messageId: "object-keys-error",
                    data: {
                        thisName,
                        prevName: prevNodeStack.name
                    },
                    fix: getFixer(node, prevNodeStack, context)
                });
            }
        }
    };
}
