import { TSESLint, TSESTree } from "@typescript-eslint/utils";
import { TMessageIds, TOptions } from "./properties";
import { getFixer, getOrderFunction, getPropertyName, TNodeStack } from "@/lib";

export function create(context: TSESLint.RuleContext<TMessageIds, TOptions>): TSESLint.RuleListener {
    let nodeStack: TNodeStack<TSESTree.TSPropertySignature>;

    const isInOrder = getOrderFunction(context.options[0]?.orderedKeys, context.options[0]?.sorting);

    return {
        TSInterfaceDeclaration() {
            nodeStack = {
                name: undefined,
                node: undefined,
                upper: nodeStack
            };
        },
        "TSInterfaceDeclaration:exit"() {
            if (!nodeStack) {
                return;
            }

            nodeStack = nodeStack.upper;
        },
        TSPropertySignature(node) {
            if (!nodeStack) {
                return;
            }

            const prevNodeStack: TNodeStack<TSESTree.TSPropertySignature> = {
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
                    messageId: "type-keys-error",
                    node
                });
            }
        },
        TSTypeLiteral() {
            nodeStack = {
                name: undefined,
                node: undefined,
                upper: nodeStack
            };
        },
        "TSTypeLiteral:exit"() {
            if (!nodeStack) {
                return;
            }

            nodeStack = nodeStack.upper;
        }
    };
}
