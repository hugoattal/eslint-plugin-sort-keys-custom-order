import { TSESLint } from "@typescript-eslint/utils";
import { TMessageIds, TOptions } from "./properties";

export const valid: Array<TSESLint.ValidTestCase<TOptions>> = [
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
        code: `const test ={
    async update({ name, password, username }: { name: string; password: { new: string; old: string }; username: string }) {
    }
};`
    }
];

export const invalid: Array<TSESLint.InvalidTestCase<TMessageIds, TOptions>> = [
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
