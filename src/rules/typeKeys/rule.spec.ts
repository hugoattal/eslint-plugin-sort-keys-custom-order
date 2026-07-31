import { RuleTester } from "@typescript-eslint/rule-tester";
import { invalid, valid } from "./ruleTester";
import { rule } from "./index";
import { TMessageIds, TOptions } from "@/rules/typeKeys/properties";

describe("type-keys", () => {
    const ruleTester = new RuleTester();

    ruleTester.run<TMessageIds, TOptions>(
        "type-keys",
        rule,
        {
            invalid,
            valid
        }
    );
});
