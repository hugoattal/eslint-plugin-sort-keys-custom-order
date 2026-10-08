import { TSESLint, TSESTree } from "@typescript-eslint/utils";
import type { TMessageIds } from "./index";
import type { TOptions } from "@/lib/options";
import { checkOrder } from "@/lib/sort";

export function create(context: TSESLint.RuleContext<TMessageIds, TOptions>): TSESLint.RuleListener {
    return {
        ExportNamedDeclaration(node) {
            checkOrder(context, node.specifiers, getName, "export-object-keys-error");
        }
    };
}

function getName(node: TSESTree.ExportSpecifier) {
    if (node.exported.type === TSESTree.AST_NODE_TYPES.Identifier) {
        return node.exported.name;
    }
}
