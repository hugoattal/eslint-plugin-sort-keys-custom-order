import { RuleTester, RuleTesterConfig } from "@typescript-eslint/experimental-utils/dist/ts-eslint";
import { invalid, valid } from "./ruleTester";
import rule from "./index";

const ruleTesterConfig: RuleTesterConfig = {
    parser: require.resolve("@typescript-eslint/parser"),
    parserOptions: {
        sourceType: "module"
    }
};

describe("type-keys", () => {
    const ruleTester = new RuleTester(ruleTesterConfig);

    ruleTester.run("type-keys", rule, {
        valid,
        invalid
    });
});
