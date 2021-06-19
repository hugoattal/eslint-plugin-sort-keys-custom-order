import { RuleTester } from "eslint";

export const valid: Array<RuleTester.ValidTestCase> = [
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

export const invalid: Array<RuleTester.InvalidTestCase> = [
    {
        code: "const a = {b:1, a:2, c:3}",
        output: "const a = {a:2, b:1, c:3}",
        errors: [{ messageId: "sort-keys-custom-order-error" }]
    },
    {
        code: "const a = {a:1, b:2, c:3}",
        output: "const a = {b:2, a:1, c:3}",
        errors: [{ messageId: "sort-keys-custom-order-error" }],
        options: [{ orderedKeys: ["b"] }]
    },
    {
        code: "const a = {a:1, b:2, c:3}",
        output: "const a = {b:2, a:1, c:3}",
        errors: [{ messageId: "sort-keys-custom-order-error" }],
        options: [{ orderedKeys: ["b", "a"] }]
    }
];
