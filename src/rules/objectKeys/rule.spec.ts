import { RuleTester, type ValidTestCase, type InvalidTestCase } from "@typescript-eslint/rule-tester";
import { rule, type TMessageIds } from "./index";
import type { TOptions } from "@/lib/options";
import { expectSingleFix, expectInvalidOrderedKeys, expectFix, expectNoFix } from "@/testing/lint";

const valid: Array<ValidTestCase<TOptions>> = [
    {
        code: "const a = {a:1,b:2,c:3}"
    },
    {
        code: "const a = {b:1,a:2,c:3}",
        options: [{ orderedKeys: ["b"] }]
    },
    {
        code: "const a = {b:1,a:2,c:3}",
        options: [{ orderedKeys: ["b", "a"] }]
    },
    {
        code: "const a = {b:1,c:2,a:3}",
        options: [{ orderedKeys: ["b"], sorting: "none" }]
    },
    {
        code: `const test ={
    async update({ name, password, username }: { name: string; password: { new: string; old: string }; username: string }) {
    }
};`
    }
];

const invalid: Array<InvalidTestCase<TMessageIds, TOptions>> = [
    {
        code: "const a = {b:2,a:1,c:3}",
        errors: [{ messageId: "object-keys-error" }],
        output: "const a = {a:1,b:2,c:3}"
    },
    {
        code: "const a = {a:1,c:3,b:2}",
        errors: [{ messageId: "object-keys-error" }],
        output: "const a = {a:1,b:2,c:3}"
    },
    {
        code: "const a = {a:1,b:2,c:3}",
        errors: [{ messageId: "object-keys-error" }],
        options: [{ orderedKeys: ["b"] }],
        output: "const a = {b:2,a:1,c:3}"
    },
    {
        code: "const a = {a:1,b:2,c:3}",
        errors: [{ messageId: "object-keys-error" }],
        options: [{ orderedKeys: ["b", "a"] }],
        output: "const a = {b:2,a:1,c:3}"
    },
    {
        code: "const a = {c:1,b:2,a:3}",
        errors: [{ messageId: "object-keys-error" }],
        options: [{ orderedKeys: ["b"], sorting: "none" }],
        output: "const a = {b:2,c:1,a:3}"
    },
    {
        code: `const a = {
    a:1,
    c:3,
    b:2
}`,
        errors: [{ messageId: "object-keys-error" }],
        output: `const a = {
    a:1,
    b:2,
    c:3
}`
    },
    {
        code: `const a = {
    // b1
    // b2
    b:2,
    // a1
    // a2
    a:1,
    c:3
}`,
        errors: [{ messageId: "object-keys-error" }],
        output: `const a = {
    // a1
    // a2
    a:1,
    // b1
    // b2
    b:2,
    c:3
}`
    },
    {
        code: `const a = {
    b:2, // b
    a:1, // a
    c:3
}`,
        errors: [{ messageId: "object-keys-error" }],
        output: `const a = {
    a:1, // a
    b:2, // b
    c:3
}`
    }
];

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

    describe("autofix safety", () => {
        it("does not reorder across a spread", () => {
            const code = "const value = { b: 1, ...source, a: 3 };";
            expectFix("object-keys", code, code);
        });

        it("sorts both sides of a spread independently", () => {
            expectFix("object-keys", "const value = { d: 4, c: 3, ...source, b: 2, a: 1 };", "const value = { c: 3, d: 4, ...source, a: 1, b: 2 };");
        });

        it("does not cross unknown computed keys", () => {
            const code = "const value = { b: 1, [key]: 2, a: 3 };";
            expectFix("object-keys", code, code);
        });

        it("reports destructuring without changing default evaluation order", () => {
            expectNoFix("object-keys", "const { b = 1, a = b } = {};");
        });

        it("does not reorder destructuring getter reads", () => {
            expectNoFix("object-keys", "const { b, a } = source;");
        });

        it.each([
            "const value = { b: next(), a: next() };",
            "const value = { b: source.value, a: 1 };",
            "const value = { b: ++counter, a: 1 };",
            "const value = { b: { value: next() }, a: 1 };",
            "const value = { b: [...source], a: 1 };"
        ])("withholds fixes for side effects: %s", code => {
            expectNoFix("object-keys", code);
        });

        it("still sorts function and literal initializers", () => {
            expectFix("object-keys", "const value = { b: () => next(), a: [1, 2] };", "const value = { a: [1, 2], b: () => next() };");
        });

        it("sorts nested containers independently", () => {
            expectFix("object-keys", "const value = { b: { d: 4, c: 3 }, a: 1 };", "const value = { a: 1, b: { c: 3, d: 4 } };");
        });
    });

    describe("stable sorting and comments", () => {
        it("preserves unlisted order with sorting none", () => {
            expectFix(
                "object-keys",
                "const value = { z: 1, b: 2, y: 3, a: 4 };",
                "const value = { a: 4, b: 2, z: 1, y: 3 };",
                { orderedKeys: ["a", "b"], sorting: "none" }
            );
        });

        it("preserves the order of equal folded names", () => {
            expectFix("object-keys", "const value = { b: 1, a: 2, A: 3 };", "const value = { a: 2, A: 3, b: 1 };");
        });

        it("sorts descending", () => {
            expectFix("object-keys", "const value = { a: 1, b: 2, c: 3 };", "const value = { c: 3, b: 2, a: 1 };", { sorting: "desc" });
        });

        it("preserves duplicate key order", () => {
            expectFix("object-keys", "const value = { b: 1, a: 2, b: 3 };", "const value = { a: 2, b: 1, b: 3 };");
        });

        it.each([
            ["const value = {\n b: 2, // b\n a: 1 // a\n};", "const value = {\n a: 1, // a\n b: 2 // b\n};"],
            ["const value = { b: 2 /* b */, a: 1 };", "const value = { a: 1, b: 2 /* b */ };"],
            ["const value = {\r\n b: 2,\r\n a: 1,\r\n};", "const value = {\r\n a: 1,\r\n b: 2,\r\n};"]
        ])("preserves separators, comments, and line endings: %s", (code, expected) => {
            expectFix("object-keys", code, expected);
        });
    });

    describe("complete sorting", () => {
        it("sorts 30 reversed members in one fix", () => {
            const keys = Array.from({ length: 30 }, (_, index) => `key${String(index).padStart(2, "0")}`);
            function wrap(names: Array<string>) {
                return `const value = { ${names.map(name => `${name}: 1`).join(", ")} };`;
            }
            expectSingleFix("object-keys", wrap([...keys].reverse()), wrap(keys));
        });
    });

    describe("option validation", () => {
        it("rejects non-string and duplicate orderedKeys", () => {
            expectInvalidOrderedKeys("object-keys");
        });
    });
});
