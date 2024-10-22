import { RuleTester } from "@typescript-eslint/rule-tester";
import { invalid, valid } from "./ruleTester";
import { rule } from "./index";

describe("export-object-keys", () => {
    const ruleTester = new RuleTester();

    ruleTester.run(
        "export-object-keys",
        rule,
        {
            invalid,
            valid
        }
    );
});
