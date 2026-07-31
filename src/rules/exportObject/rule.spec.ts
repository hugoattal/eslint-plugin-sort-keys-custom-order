import { RuleTester } from "@typescript-eslint/rule-tester";
import { invalid, valid } from "./ruleTester";
import { TMessageIds, TOptions } from "./properties";
import { rule } from "./index";

describe("export-object-keys", () => {
    const ruleTester = new RuleTester();

    ruleTester.run<TMessageIds, TOptions>(
        "export-object-keys",
        rule,
        {
            invalid,
            valid
        }
    );
});
