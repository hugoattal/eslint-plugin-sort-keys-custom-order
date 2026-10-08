import { RuleTester, type ValidTestCase, type InvalidTestCase } from "@typescript-eslint/rule-tester";
import { rule, type TMessageIds } from "./index";
import type { TOptions } from "@/lib/options";
import { expectSingleFix, expectInvalidOrderedKeys, expectFix } from "@/testing/lint";

const valid: Array<ValidTestCase<TOptions>> = [
    {
        code: "type a = {a:1, b:2, c:3}"
    },
    {
        code: "type a = {b:1, a:2, c:3}",
        options: [{ orderedKeys: ["b"] }]
    },
    {
        code: "type a = {b:1, a:2, c:3}",
        options: [{ orderedKeys: ["b", "a"] }]
    },
    {
        code: "function a(): Promise<{a: string, b: string}> {}"
    }
];

const invalid: Array<InvalidTestCase<TMessageIds, TOptions>> = [
    {
        code: "type a = {b:1, a:2, c:3}",
        errors: [{ messageId: "type-keys-error" }],
        output: "type a = {a:2, b:1, c:3}"
    },
    {
        code: `type a = {
    b:1,
    a:2,
    c:3
}`,
        errors: [{ messageId: "type-keys-error" }],
        output: `type a = {
    a:2,
    b:1,
    c:3
}`
    },
    {
        code: "type a = {a:1, b:2, c:3}",
        errors: [{ messageId: "type-keys-error" }],
        options: [{ orderedKeys: ["b"] }],
        output: "type a = {b:2, a:1, c:3}"
    },
    {
        code: "type a = {a:1, b:2, c:3}",
        errors: [{ messageId: "type-keys-error" }],
        options: [{ orderedKeys: ["b", "a"] }],
        output: "type a = {b:2, a:1, c:3}"
    },
    {
        code: "interface a {b:1, a:2, c:3}",
        errors: [{ messageId: "type-keys-error" }],
        output: "interface a {a:2, b:1, c:3}"
    },
    {
        code: "function a(): Promise<{b: string, a: string}> {}",
        errors: [{ messageId: "type-keys-error" }],
        output: "function a(): Promise<{a: string, b: string}> {}"
    },
    {
        code: "const a: {b: string, a: string} = {}",
        errors: [{ messageId: "type-keys-error" }],
        output: "const a: {a: string, b: string} = {}"
    }
];

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

    describe("complete TypeScript members", () => {
        it.each([
            ["type T = { readonly b: number; a: string }", "type T = { a: string; readonly b: number }"],
            ["interface T { readonly b?: number; a: string }", "interface T { a: string; readonly b?: number }"],
            ['type T = { ["b"]: number; a: string }', 'type T = { a: string; ["b"]: number }'],
            ["type T = { b?; a }", "type T = { a; b? }"],
            ["type T = { b: number, a: string; }", "type T = { a: string, b: number; }"],
            ["type T = { b: number\n a: string\n}", "type T = { a: string\n b: number\n}"],
            ["type T = { b: { d: number; c: string }; a: boolean }", "type T = { a: boolean; b: { c: string; d: number } }"]
        ])("preserves syntax and modifiers: %s", (code, expected) => {
            expectFix("type-keys", code, expected);
        });

        it("keeps unsupported members as boundaries", () => {
            const code = "type T = { b: number; method(): void; a: string }";
            expectFix("type-keys", code, code);
        });

        it("moves documentation and inline comments with the member", () => {
            expectFix(
                "type-keys",
                "type T = {\n    /** b */\n    readonly b: number; // b\n    /** a */\n    a?: string; // a\n}",
                "type T = {\n    /** a */\n    a?: string; // a\n    /** b */\n    readonly b: number; // b\n}"
            );
        });
    });

    describe("complete sorting", () => {
        it("sorts 30 reversed members in one fix", () => {
            const keys = Array.from({ length: 30 }, (_, index) => `key${String(index).padStart(2, "0")}`);
            function wrap(names: Array<string>) {
                return `type T = { ${names.map(name => `${name}: number`).join("; ")} };`;
            }
            expectSingleFix("type-keys", wrap([...keys].reverse()), wrap(keys));
        });
    });

    describe("option validation", () => {
        it("rejects non-string and duplicate orderedKeys", () => {
            expectInvalidOrderedKeys("type-keys");
        });
    });
});
