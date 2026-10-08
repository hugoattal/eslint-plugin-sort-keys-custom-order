import { TSESLint, TSESTree } from "@typescript-eslint/utils";
import type { TMessageIds } from "./index";
import type { TOptions, TObjectSortingOptions, TSelector } from "./options";
import { getPropertyName, isSafeInitializer } from "@/lib/property";
import { checkOrder } from "@/lib/sort";

export function create(context: TSESLint.RuleContext<TMessageIds, TOptions>): TSESLint.RuleListener {
    return {
        ObjectExpression(node) {
            const canFix = node.properties.every(property => {
                if (property.type !== TSESTree.AST_NODE_TYPES.Property) {
                    return true;
                }
                return isSafeInitializer(property.value);
            });
            const options = getOptions(node, context.options[0] || {});
            checkOrder(context, node.properties, getName, "object-keys-error", canFix, options);
        },
        ObjectPattern(node) {
            // Defaults and getters can depend on destructuring evaluation order.
            checkOrder(context, node.properties, getName, "object-keys-error", false);
        }
    };
}

function getOptions(node: TSESTree.ObjectExpression, options: TObjectSortingOptions) {
    if (!options.selectors?.length) {
        return options;
    }
    let value: TSESTree.Node = node;
    let direct = true;
    while (value.parent) {
        const parent: TSESTree.Node = value.parent;
        if (
            parent.type === TSESTree.AST_NODE_TYPES.TSAsExpression ||
            parent.type === TSESTree.AST_NODE_TYPES.TSSatisfiesExpression ||
            parent.type === TSESTree.AST_NODE_TYPES.TSNonNullExpression ||
            parent.type === TSESTree.AST_NODE_TYPES.TSTypeAssertion
        ) {
            value = parent;
            continue;
        }
        const selector = options.selectors?.find(({ mode, target }) =>
            (direct || mode === "recursive") && matchesTarget(parent, value, target)
        );
        if (selector) {
            return { ...options, ...selector };
        }
        direct = false;
        value = parent;
    }
    return options;
}

function matchesTarget(parent: TSESTree.Node, value: TSESTree.Node, target: TSelector["target"]) {
    if (target.type === "property") {
        return parent.type === TSESTree.AST_NODE_TYPES.Property &&
            parent.value === value && getPropertyName(parent) === target.name;
    }
    return parent.type === TSESTree.AST_NODE_TYPES.CallExpression &&
        parent.arguments.some(argument => argument === value) &&
        parent.callee.type === TSESTree.AST_NODE_TYPES.Identifier && parent.callee.name === target.name;
}

function getName(node: TSESTree.Property | TSESTree.SpreadElement | TSESTree.RestElement) {
    if (node.type !== TSESTree.AST_NODE_TYPES.Property) {
        return;
    }
    return getPropertyName(node);
}
