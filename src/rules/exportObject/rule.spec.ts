import { RuleTester, RuleTesterConfig } from "@typescript-eslint/rule-tester";
import { invalid, valid } from "./ruleTester";
import { rule } from "./index";

const ruleTesterConfig: RuleTesterConfig = {
    parser: "@typescript-eslint/parser"
};

describe("export-object-keys", () => {
    const ruleTester = new RuleTester(ruleTesterConfig);

    ruleTester.run(
        "export-object-keys",
        rule,
        {
            invalid,
            valid
        }
    );
});
