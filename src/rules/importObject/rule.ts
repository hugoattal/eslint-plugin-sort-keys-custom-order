import { TSESLint, TSESTree } from "@typescript-eslint/utils";
import { TMessageIds, TOptions } from "./properties";
import { getFixer, getOrderFunction, TNodeStack } from "@/lib";

export function create(context: TSESLint.RuleContext<TMessageIds, TOptions>): TSESLint.RuleListener {
    let nodeStack: TNodeStack<TSESTree.ImportSpecifier>;

    const isInOrder = getOrderFunction(context.options[0]?.orderedKeys);

    return {
        ImportDeclaration() {
            nodeStack = {
                upper: nodeStack
            };
        },
        "ImportDeclaration:exit"() {
            if (!nodeStack) {
                return;
            }

            nodeStack = nodeStack.upper;
        },
        ImportSpecifier(node) {
            if (!nodeStack) {
                return;
            }

            const prevNodeStack: TNodeStack<TSESTree.ImportSpecifier> = {
                name: nodeStack.name,
                node: nodeStack.node,
                upper: nodeStack
            };

            const thisName = node.imported.name;

            if (thisName) {
                nodeStack.name = thisName;
                nodeStack.node = node || prevNodeStack.node;
            }

            if (!prevNodeStack.name || !thisName) {
                return;
            }

            if (!isInOrder(prevNodeStack.name, thisName)) {
                if (!node.loc) {
                    return;
                }

                context.report({
                    data: {
                        prevName: prevNodeStack.name,
                        thisName
                    },
                    fix: getFixer(node, prevNodeStack, context),
                    loc: node.loc,
                    messageId: "import-object-keys-error",
                    node
                });
            }
        }
    };
}


