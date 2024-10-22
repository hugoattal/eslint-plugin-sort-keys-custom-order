import { RuleTester } from "@typescript-eslint/rule-tester";
import { invalid, valid } from "./ruleTester";
import { rule } from "./index";

describe("object-keys", () => {
    const ruleTester = new RuleTester();

    ruleTester.run(
        "object-keys",
        rule,
        {
            invalid,
            valid
        }
    );
});
