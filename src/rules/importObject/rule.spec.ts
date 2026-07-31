import { RuleTester } from "@typescript-eslint/rule-tester";
import { invalid, valid } from "./ruleTester";
import { rule } from "./index";
import { TMessageIds, TOptions } from "@/rules/importObject/properties";

describe("import-object-keys", () => {
    const ruleTester = new RuleTester();

    ruleTester.run<TMessageIds, TOptions>(
        "import-object-keys",
        rule,
        {
            invalid,
            valid
        }
    );
});
