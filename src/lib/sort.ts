import type { TSESLint, TSESTree } from "@typescript-eslint/utils";
import type { TOptions, TSortingOptions } from "./options";
import { getOrderFunction } from "./order";
import { getSortedFix } from "./fix";

export function checkOrder<TNode extends TSESTree.Node, TMessageIds extends string>(
    context: TSESLint.RuleContext<TMessageIds, TOptions>,
    nodes: Array<TNode>,
    getName: (node: TNode) => string | undefined,
    messageId: TMessageIds,
    canFix = true,
    options: TSortingOptions = context.options[0] || {}
) {
    const compare = getOrderFunction(options);
    let segment: Array<{ name: string, node: TNode }> = [];
    for (const node of nodes) {
        const name = getName(node);
        if (!name) {
            reportSegment();
            segment = [];
            continue;
        }
        segment.push({ name, node });
    }
    reportSegment();

    function reportSegment() {
        const inversions: Array<number> = [];
        for (let index = 1; index < segment.length; index++) {
            if (compare(segment[index - 1].name, segment[index].name) > 0) {
                inversions.push(index);
            }
        }
        if (inversions.length === 0) {
            return;
        }
        let fix: ((fixer: TSESLint.RuleFixer) => TSESLint.RuleFix) | undefined;
        if (canFix) {
            const sorted = [...segment].sort((a, b) => compare(a.name, b.name));
            fix = getSortedFix(context.sourceCode, segment.map(member => member.node), sorted.map(member => member.node));
        }
        for (const index of inversions) {
            const member = segment[index];
            context.report({
                data: { prevName: segment[index - 1].name, thisName: member.name },
                fix,
                messageId,
                node: member.node
            });
            // One complete replacement per segment avoids overlapping fixes.
            fix = undefined;
        }
    }
}
