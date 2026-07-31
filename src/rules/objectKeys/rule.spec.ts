import { RuleTester } from "@typescript-eslint/rule-tester";
import { invalid, valid } from "./ruleTester";
import { rule } from "./index";
import { TMessageIds, TOptions } from "@/rules/objectKeys/properties";

describe("object-keys", () => {
    const ruleTester = new RuleTester();

    ruleTester.run<TMessageIds, TOptions>(
        "object-keys",
        rule,
        {
            invalid,
            valid
        }
    );
});
