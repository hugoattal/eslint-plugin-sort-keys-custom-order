import { TSESTree } from "@typescript-eslint/utils";

export function getPropertyName(node: TSESTree.Property | TSESTree.TSPropertySignature): string | undefined {
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

// Only reorder initializers whose evaluation cannot call user code.
export function isSafeInitializer(node: TSESTree.Node): boolean {
    switch (node.type) {
    case "Literal":
    case "Identifier":
    case "FunctionExpression":
    case "ArrowFunctionExpression":
        return true;
    case "TemplateLiteral":
        return node.expressions.length === 0;
    case "ArrayExpression":
        return node.elements.every(element => element === null || isSafeInitializer(element));
    case "ObjectExpression":
        return node.properties.every(property => {
            if (property.type !== TSESTree.AST_NODE_TYPES.Property || property.computed) {
                return false;
            }
            return isSafeInitializer(property.value);
        });
    case "TSAsExpression":
    case "TSSatisfiesExpression":
    case "TSNonNullExpression":
    case "TSTypeAssertion":
        return isSafeInitializer(node.expression);
    default:
        return false;
    }
}
