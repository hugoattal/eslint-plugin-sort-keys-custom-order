import { RuleTester, type ValidTestCase, type InvalidTestCase } from "@typescript-eslint/rule-tester";
import { rule, type TMessageIds } from "./index";
import type { TOptions } from "@/lib/options";
import { expectSingleFix, expectInvalidOrderedKeys, expectFix } from "@/testing/lint";

const valid: Array<ValidTestCase<TOptions>> = [
    {
        code: "import {a,b,c} from 'test'"
    }
];

const invalid: Array<InvalidTestCase<TMessageIds, TOptions>> = [
    {
        code: "import {b,a,c} from 'test'",
        errors: [{ messageId: "import-object-keys-error" }],
        output: "import {a,b,c} from 'test'"
    }
];

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

    describe("aliases and modifiers", () => {
        it("preserves import aliases and type modifiers", () => {
            expectFix(
                "import-object-keys",
                "import Default, { type B as Bee, A as Ay } from 'source';",
                "import Default, { A as Ay, type B as Bee } from 'source';"
            );
        });
    });

    describe("complete sorting", () => {
        it("sorts 30 reversed members in one fix", () => {
            const keys = Array.from({ length: 30 }, (_, index) => `key${String(index).padStart(2, "0")}`);
            function wrap(names: Array<string>) {
                return `import { ${names.join(", ")} } from 'source';`;
            }
            expectSingleFix("import-object-keys", wrap([...keys].reverse()), wrap(keys));
        });
    });

    describe("option validation", () => {
        it("rejects non-string and duplicate orderedKeys", () => {
            expectInvalidOrderedKeys("import-object-keys");
        });
    });
});
