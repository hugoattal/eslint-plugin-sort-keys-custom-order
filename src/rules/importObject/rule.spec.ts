import { RuleTester, RuleTesterConfig } from "@typescript-eslint/rule-tester";
import { invalid, valid } from "./ruleTester";
import { rule } from "./index";

const ruleTesterConfig: RuleTesterConfig = {
    parser: "@typescript-eslint/parser"
};

describe("import-object-keys", () => {
    const ruleTester = new RuleTester(ruleTesterConfig);

    ruleTester.run(
        "import-object-keys",
        rule,
        {
            invalid,
            valid
        }
    );
});
