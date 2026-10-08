import type { TSESLint, TSESTree } from "@typescript-eslint/utils";

function getMemberParts(sourceCode: Readonly<TSESLint.SourceCode>, node: TSESTree.Node) {
    const previousToken = sourceCode.getTokenBefore(node)!;
    const lastToken = sourceCode.getLastToken(node)!;
    const nextToken = sourceCode.getTokenAfter(node)!;
    let separator: TSESTree.Token | undefined;
    if (lastToken.value === "," || lastToken.value === ";") {
        separator = lastToken;
    }
    else if (nextToken.value === "," || nextToken.value === ";") {
        separator = nextToken;
    }

    const leadingComments = sourceCode.getCommentsBefore(node).filter(comment =>
        comment.loc.start.line > previousToken.loc.end.line || previousToken.value === "{"
    );
    const trailingComments = sourceCode.getCommentsAfter(separator || node).filter(comment =>
        comment.loc.start.line === lastToken.loc.end.line
    );
    const start = leadingComments[0]?.range[0] ?? node.range[0];
    const contentEnd = separator?.range[0] ?? node.range[1];
    const separatorEnd = separator?.range[1] ?? node.range[1];
    const end = trailingComments.at(-1)?.range[1] ?? separatorEnd;

    return {
        body: sourceCode.text.slice(start, contentEnd),
        end,
        separator: separator?.value || "",
        start,
        suffix: sourceCode.text.slice(separatorEnd, end)
    };
}

export function getSortedFix<TNode extends TSESTree.Node>(
    sourceCode: Readonly<TSESLint.SourceCode>, nodes: Array<TNode>, sortedNodes: Array<TNode>
) {
    const parts = nodes.map(node => getMemberParts(sourceCode, node));
    const partsByNode = new Map(nodes.map((node, index) => [node, parts[index]]));
    const replacement = sortedNodes.map((node, index) => {
        const moving = partsByNode.get(node)!;
        const slot = parts[index];
        let gap = "";
        if (index < parts.length - 1) {
            gap = sourceCode.text.slice(slot.end, parts[index + 1].start);
        }
        return moving.body + slot.separator + moving.suffix + gap;
    }).join("");

    return function fix(fixer: TSESLint.RuleFixer) {
        return fixer.replaceTextRange([parts[0].start, parts.at(-1)!.end], replacement);
    };
}
