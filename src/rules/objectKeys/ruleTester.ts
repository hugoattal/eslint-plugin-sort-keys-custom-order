import { ValidTestCase, InvalidTestCase } from "@typescript-eslint/experimental-utils/dist/ts-eslint";
import { TMessageIds, TOptions } from "./properties";

export const valid: Array<ValidTestCase<TOptions>> = [
    {
        code: "const a = {a:1, b:2, c:3}"
    },
    {
        code: "const a = {b:1, a:2, c:3}",
        options: [{ orderedKeys: ["b"] }]
    },
    {
        code: "const a = {b:1, a:2, c:3}",
        options: [{ orderedKeys: ["b", "a"] }]
    }
];

export const invalid: Array<InvalidTestCase<TMessageIds, TOptions>> = [
    {
        code: "const a = {b:1, a:2, c:3}",
        output: "const a = {a:2, b:1, c:3}",
        errors: [{ messageId: "object-keys-error" }]
    },
    {
        code: "const a = {a:1, b:2, c:3}",
        output: "const a = {b:2, a:1, c:3}",
        errors: [{ messageId: "object-keys-error" }],
        options: [{ orderedKeys: ["b"] }]
    },
    {
        code: "const a = {a:1, b:2, c:3}",
        output: "const a = {b:2, a:1, c:3}",
        errors: [{ messageId: "object-keys-error" }],
        options: [{ orderedKeys: ["b", "a"] }]
    },
    {
        code: `const a = {
    // a
    a:1,
    // b
    b:2,
    c:3,
}`,
        output: `const a = {
    // b
    b:2,
    // a
    a:1,
    c:3,
}`,
        errors: [{ messageId: "object-keys-error" }],
        options: [{ orderedKeys: ["b", "a"] }]
    }
];
