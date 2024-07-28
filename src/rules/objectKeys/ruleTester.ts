import { ValidTestCase, InvalidTestCase } from "@typescript-eslint/rule-tester";
import { TMessageIds, TOptions } from "./properties";

export const valid: Array<ValidTestCase<TOptions>> = [
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

export const invalid: Array<InvalidTestCase<TMessageIds, TOptions>> = [
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
