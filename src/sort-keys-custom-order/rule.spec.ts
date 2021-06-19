import { Linter, RuleTester } from "eslint";
import { invalid, valid } from "./ruleTester";
import rule from "./";

const ruleTesterConfig: Linter.Config = {
    parser: require.resolve("@typescript-eslint/parser"),
    parserOptions: {
        sourceType: "module"
    }
};

describe("sort-keys-custom-order", () => {
    const ruleTester = new RuleTester(ruleTesterConfig);

    ruleTester.run("sort-keys-custom-order", rule, {
        valid,
        invalid
    });
});
