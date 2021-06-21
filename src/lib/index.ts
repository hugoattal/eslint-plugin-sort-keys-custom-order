import { RuleContext, RuleFix, RuleFixer, SourceCode } from "@typescript-eslint/experimental-utils/dist/ts-eslint";
import { TSESTree } from "@typescript-eslint/experimental-utils/dist/ts-estree";

export function getOrderFunction(orderedKeys: Array<string> | undefined): (a: string, b: string) => boolean {
    return (a: string, b: string) => {
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
    };
}

export type TNodeStack<TProperty extends TSESTree.Property | TSESTree.TSPropertySignature> = {
    upper: TNodeStack<TProperty>,
    name: string | undefined,
    node: TProperty| undefined
} | undefined

export function getFixer<TMessageIds extends string, TOptions extends readonly unknown[], TProperty extends TSESTree.Property | TSESTree.TSPropertySignature>
(node: TProperty, nodeStack: TNodeStack<TProperty>, context: RuleContext<TMessageIds,TOptions>) {
    return (fixer: RuleFixer) => {
        const fixes: Array<RuleFix> = [];

        if (!nodeStack?.node) {
            return fixes;
        }

        const sourceCode = context.getSourceCode();
        moveProperty<TProperty>(sourceCode, fixes, fixer, node, nodeStack.node);
        moveProperty<TProperty>(sourceCode, fixes, fixer, nodeStack.node, node);

        return fixes;
    };
}

function moveProperty<TProperty extends TSESTree.Property | TSESTree.TSPropertySignature>
(sourceCode: Readonly<SourceCode>, fixes: Array<RuleFix>, fixer: RuleFixer, fromNode: TProperty, toNode: TProperty): void {
    const prevText = sourceCode.getText(fromNode);
    const leadingComments = sourceCode.getCommentsBefore(fromNode);
    console.log(sourceCode.getTokenBefore(fromNode));

    for (const leadingComment of leadingComments) {
        fixes.push(fixer.insertTextBefore(toNode, `${ sourceCode.getText(leadingComment as any) }\n`));
        fixes.push(fixer.remove(leadingComment));
    }

    fixes.push(fixer.replaceText(toNode, prevText));
}

export function getPropertyName<TProperty extends TSESTree.Property | TSESTree.TSPropertySignature>(node: TProperty): string | undefined {
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
