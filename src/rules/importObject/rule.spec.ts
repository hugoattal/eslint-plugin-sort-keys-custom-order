import { RuleTester } from "@typescript-eslint/rule-tester";
import { invalid, valid } from "./ruleTester";
import { rule } from "./index";

describe("import-object-keys", () => {
    const ruleTester = new RuleTester();

    ruleTester.run(
        "import-object-keys",
        rule,
        {
            invalid,
            valid
        }
    );
});
