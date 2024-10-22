import { RuleTester } from "@typescript-eslint/rule-tester";
import { invalid, valid } from "./ruleTester";
import { rule } from "./index";

describe("type-keys", () => {
    const ruleTester = new RuleTester();

    ruleTester.run(
        "type-keys",
        rule,
        {
            invalid,
            valid
        }
    );
});
