import { RuleTester, RuleTesterConfig } from "@typescript-eslint/rule-tester";
import { invalid, valid } from "./ruleTester";
import { rule } from "./index";

const ruleTesterConfig: RuleTesterConfig = {
    parser: "@typescript-eslint/parser"
};

describe("type-keys", () => {
    const ruleTester = new RuleTester(ruleTesterConfig);

    ruleTester.run(
        "type-keys",
        rule,
        {
            invalid,
            valid
        }
    );
});
