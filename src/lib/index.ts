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
    name: string | undefined,
    node: TProperty | undefined
    upper: TNodeStack<TProperty>,
} | undefined

export function getFixer<TMessageIds extends string, TOptions extends readonly unknown[], TProperty extends TSESTree.Property | TSESTree.TSPropertySignature>
(node: TProperty, nodeStack: TNodeStack<TProperty>, context: RuleContext<TMessageIds, TOptions>) {
    return (fixer: RuleFixer) => {
        const fixes: Array<RuleFix> = [];

        if (!nodeStack?.node) {
            return fixes;
        }

        const sourceCode = context.getSourceCode();
        swapProperty<TProperty>(sourceCode, fixes, fixer, node, nodeStack.node);

        return fixes;
    };
}

function swapProperty<TProperty extends TSESTree.Property | TSESTree.TSPropertySignature>
(sourceCode: Readonly<SourceCode>, fixes: Array<RuleFix>, fixer: RuleFixer, fromNode: TProperty, toNode: TProperty): void {

    const fromNodeRange = getNodeRange(fromNode);
    const fromNodeComma = getComma(fromNode);

    const toNodeRange = getNodeRange(toNode);
    const toNodeComma = getComma(toNode);

    if (!!fromNodeComma !== !!toNodeComma) {
        if (fromNodeComma) {
            const commaRange = {
                end: sourceCode.getIndexFromLoc(fromNodeComma.loc.end),
                start: sourceCode.getIndexFromLoc(fromNodeComma.loc.start)
            };

            fromNodeRange.end = Math.max(fromNodeRange.end, commaRange.end);

            const toNodeLastToken = sourceCode.getLastToken(toNode);
            if (!toNodeLastToken) {
                return;
            }
            const commaPosition = sourceCode.getIndexFromLoc(toNodeLastToken.loc.end);

            const fromNodeCodeBeforeComma = sourceCode.text.slice(fromNodeRange.start, commaRange.start);
            const fromNodeCodeAfterComma = sourceCode.text.slice(commaRange.end, fromNodeRange.end);

            const toNodeCodeBeforeComma = sourceCode.text.slice(toNodeRange.start, commaPosition);
            const toNodeCodeAfterComma = sourceCode.text.slice(commaPosition, toNodeRange.end);

            fixes.push(fixer.replaceTextRange([commaRange.end, fromNodeRange.end], toNodeCodeAfterComma));
            fixes.push(fixer.replaceTextRange([fromNodeRange.start, commaRange.start], toNodeCodeBeforeComma));
            fixes.push(fixer.replaceTextRange([commaPosition, toNodeRange.end], fromNodeCodeAfterComma));
            fixes.push(fixer.replaceTextRange([toNodeRange.start, commaPosition], fromNodeCodeBeforeComma));
        }
        else if (toNodeComma) {
            const commaRange = {
                end: sourceCode.getIndexFromLoc(toNodeComma.loc.end),
                start: sourceCode.getIndexFromLoc(toNodeComma.loc.start)
            };

            toNodeRange.end = Math.max(toNodeRange.end, commaRange.end);

            const fromNodeLastToken = sourceCode.getLastToken(fromNode);
            if (!fromNodeLastToken) {
                return;
            }
            const commaPosition = sourceCode.getIndexFromLoc(fromNodeLastToken.loc.end);

            const fromNodeCodeBeforeComma = sourceCode.text.slice(fromNodeRange.start, commaPosition);
            const fromNodeCodeAfterComma = sourceCode.text.slice(commaPosition, fromNodeRange.end);

            const toNodeCodeBeforeComma = sourceCode.text.slice(toNodeRange.start, commaRange.start);
            const toNodeCodeAfterComma = sourceCode.text.slice(commaRange.end, toNodeRange.end);

            fixes.push(fixer.replaceTextRange([commaPosition, fromNodeRange.end], toNodeCodeAfterComma));
            fixes.push(fixer.replaceTextRange([fromNodeRange.start, commaPosition], toNodeCodeBeforeComma));
            fixes.push(fixer.replaceTextRange([commaRange.end, toNodeRange.end], fromNodeCodeAfterComma));
            fixes.push(fixer.replaceTextRange([toNodeRange.start, commaRange.start], fromNodeCodeBeforeComma));
        }
    }
    else {
        const fromNodeCode = sourceCode.text.slice(fromNodeRange.start, fromNodeRange.end);
        const toNodeCode = sourceCode.text.slice(toNodeRange.start, toNodeRange.end);

        fixes.push(fixer.replaceTextRange([fromNodeRange.start, fromNodeRange.end], toNodeCode));
        fixes.push(fixer.replaceTextRange([toNodeRange.start, toNodeRange.end], fromNodeCode));
    }

    function getNodeRange(node: TProperty) {
        let nextToken = sourceCode.getTokenAfter(node);
        if (nextToken && nextToken.type === "Punctuator" && nextToken.value === ",") {
            nextToken = sourceCode.getTokenAfter(nextToken);
        }

        const prevToken = sourceCode.getTokenBefore(node);

        if (!prevToken || !nextToken) {
            throw Error("eslint-plugin-sort-keys-custom-order: Error while swapping properties");
        }

        const nodeLoc = {
            end: sourceCode.getLastToken(node)?.loc.end,
            start: sourceCode.getFirstToken(node)?.loc.start
        };

        if (!nodeLoc.start || !nodeLoc.end) {
            throw Error("eslint-plugin-sort-keys-custom-order: Error while swapping properties");
        }

        let start;

        if (prevToken.loc.end.line === nodeLoc.start.line) {
            start = sourceCode.getIndexFromLoc(nodeLoc.start);
        }
        else {
            start = sourceCode.lineStartIndices[prevToken.loc.end.line];
        }

        let end;
        if (nextToken.loc.start.line === nodeLoc.end.line) {
            end = sourceCode.getIndexFromLoc(nodeLoc.end);
        }
        else {
            end = sourceCode.lineStartIndices[node.loc.end.line];
        }

        return { end, start };
    }

    function getComma(node: TProperty) {
        const nextToken = sourceCode.getTokenAfter(node);
        if (nextToken && nextToken.type === "Punctuator" && nextToken.value === ",") {
            return nextToken;
        }
    }
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
