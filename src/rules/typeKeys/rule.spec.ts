import { TSESLint } from "@typescript-eslint/utils";
import { invalid, valid } from "./ruleTester";
import rule from "./index";

const ruleTesterConfig: TSESLint.RuleTesterConfig = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "module"
    }
};

describe("type-keys", () => {
    const ruleTester = new TSESLint.RuleTester(ruleTesterConfig);

    ruleTester.run("type-keys", rule, {
        invalid,
        valid
    });
});
