import { TSESLint, TSESTree } from "@typescript-eslint/utils";
import type { TMessageIds } from "./index";
import type { TOptions } from "@/lib/options";
import { checkOrder } from "@/lib/sort";

export function create(context: TSESLint.RuleContext<TMessageIds, TOptions>): TSESLint.RuleListener {
    return {
        ImportDeclaration(node) {
            checkOrder(context, node.specifiers, getName, "import-object-keys-error");
        }
    };
}

function getName(node: TSESTree.ImportClause) {
    if (node.type === TSESTree.AST_NODE_TYPES.ImportSpecifier && node.imported.type === TSESTree.AST_NODE_TYPES.Identifier) {
        return node.imported.name;
    }
}
