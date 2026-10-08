import { RuleTester, type ValidTestCase, type InvalidTestCase } from "@typescript-eslint/rule-tester";
import { rule, type TMessageIds } from "./index";
import type { TOptions } from "@/lib/options";
import { expectSingleFix, expectInvalidOrderedKeys, expectFix } from "@/testing/lint";

const valid: Array<ValidTestCase<TOptions>> = [
    {
        code: "export {a,b,c}"
    }
];

const invalid: Array<InvalidTestCase<TMessageIds, TOptions>> = [
    {
        code: "export {b,a,c}",
        errors: [{ messageId: "export-object-keys-error" }],
        output: "export {a,b,c}"
    }
];

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

    describe("aliases and modifiers", () => {
        it("preserves export aliases", () => {
            expectFix("export-object-keys", "export { a as b, b as a } from 'source';", "export { b as a, a as b } from 'source';");
        });
    });

    describe("complete sorting", () => {
        it("sorts 30 reversed members in one fix", () => {
            const keys = Array.from({ length: 30 }, (_, index) => `key${String(index).padStart(2, "0")}`);
            function wrap(names: Array<string>) {
                return `export { ${names.join(", ")} } from 'source';`;
            }
            expectSingleFix("export-object-keys", wrap([...keys].reverse()), wrap(keys));
        });
    });

    describe("option validation", () => {
        it("rejects non-string and duplicate orderedKeys", () => {
            expectInvalidOrderedKeys("export-object-keys");
        });
    });
});
