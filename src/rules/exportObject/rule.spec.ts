import { TSESLint } from "@typescript-eslint/utils";
import { invalid, valid } from "./ruleTester";
import rule from "./index";

const ruleTesterConfig: TSESLint.RuleTesterConfig = {
    parser: require.resolve("@typescript-eslint/parser"),
    parserOptions: {
        sourceType: "module"
    }
};

describe("import-object-keys", () => {
    const ruleTester = new TSESLint.RuleTester(ruleTesterConfig);

    ruleTester.run("import-object-keys", rule, {
        invalid,
        valid
    });
});
