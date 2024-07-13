import { ESLintUtils } from "@typescript-eslint/utils";


export const createRule = ESLintUtils.RuleCreator(
    name => `https://github.com/hugoattal/eslint-plugin-sort-keys-custom-order#${ name }`
);
