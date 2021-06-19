import { Rule } from "eslint";
import { Property } from "estree";

type TStack = {
    upper: TStack,
    prevName: string | undefined,
    prevNode: Property | undefined
} | undefined

export function createRule(context: Rule.RuleContext): Rule.RuleListener {
    let stack: TStack = undefined;

    function isInOrder(a: string, b: string) {
        const orderedKeys = context.options[0]?.orderedKeys;
        if (orderedKeys) {
            const isAOrderedKeys = orderedKeys.includes(a);
            const isBOrderedKeys = orderedKeys.includes(b);

            if (isAOrderedKeys && !isBOrderedKeys) {
                return true;
            }

            if (!isAOrderedKeys && isBOrderedKeys) {
                return false;
            }

            if (isAOrderedKeys && isBOrderedKeys) {
                return orderedKeys.indexOf(a) <= orderedKeys.indexOf(b);
            }
        }

        return a.toLowerCase() <= b.toLowerCase();
    }

    return {
        ObjectExpression() {
            stack = {
                upper: stack,
                prevName: undefined,
                prevNode: undefined
            };
        },
        "ObjectExpression:exit"() {
            if (!stack) {
                return;
            }

            stack = stack.upper;
        },
        Property(node) {
            if (!stack) {
                return;
            }

            const prevName = stack.prevName;
            const prevNode = stack.prevNode;
            const thisName = getPropertyName(node);

            if (thisName) {
                stack.prevName = thisName;
                stack.prevNode = node || prevNode;
            }

            if (!prevName || !thisName) {
                return;
            }

            if (!isInOrder(prevName, thisName)) {
                if (!node.key.loc) {
                    return;
                }

                context.report({
                    node,
                    loc: node.key.loc,
                    messageId: "sort-keys-custom-order-error",
                    data: {
                        thisName,
                        prevName
                    },
                    fix
                });
            }

            function fix(fixer: Rule.RuleFixer) {
                const fixes: Array<Rule.Fix> = [];

                if (!prevNode) {
                    return fixes;
                }

                const sourceCode = context.getSourceCode();
                const moveProperty = (fromNode: Property, toNode: Property) => {
                    const prevText = sourceCode.getText(fromNode);
                    const thisComments = sourceCode.getCommentsBefore(fromNode);
                    for (const thisComment of thisComments) {
                        fixes.push(fixer.insertTextBefore(toNode, `${ sourceCode.getText(thisComment as any) }\n`));
                        fixes.push(fixer.remove(thisComment as any));
                    }
                    fixes.push(fixer.replaceText(toNode, prevText));
                };
                moveProperty(node, prevNode);
                moveProperty(prevNode, node);
                return fixes;
            }
        }
    };
}

function getPropertyName(node: Property): string | undefined {
    switch (node.key.type) {
    case "Literal":
        return String(node.key.value);
    case "TemplateLiteral":
        if (node.key.expressions.length === 0 && node.key.quasis.length === 1) {
            return node.key.quasis[0].value.cooked || undefined;
        }
        break;
    case "Identifier":
        if (!node.computed) {
            return node.key.name;
        }
        break;
    }
}
