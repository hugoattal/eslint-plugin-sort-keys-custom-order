import { TSESLint, TSESTree } from "@typescript-eslint/utils";
import { TMessageIds, TOptions } from "./properties";
import { getFixer, getOrderFunction, getPropertyName, TNodeStack } from "@/lib";

export function create(context: TSESLint.RuleContext<TMessageIds, TOptions>): TSESLint.RuleListener {
    let nodeStack: TNodeStack<TSESTree.Property>;

    const isInOrder = getOrderFunction(context.options[0]?.orderedKeys, context.options[0]?.sorting);

    return {
        ObjectExpression() {
            nodeStack = {
                name: undefined,
                node: undefined,
                upper: nodeStack
            };
        },
        "ObjectExpression:exit"() {
            if (!nodeStack) {
                return;
            }

            nodeStack = nodeStack.upper;
        },
        ObjectPattern() {
            nodeStack = {
                name: undefined,
                node: undefined,
                upper: nodeStack
            };
        },
        "ObjectPattern:exit"() {
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
                name: nodeStack.name,
                node: nodeStack.node,
                upper: nodeStack
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
                    data: {
                        prevName: prevNodeStack.name,
                        thisName
                    },
                    fix: getFixer(node, prevNodeStack, context),
                    loc: node.key.loc,
                    messageId: "object-keys-error",
                    node
                });
            }
        }
    };
}


