import { TSESLint } from "@typescript-eslint/utils";
import { TMessageIds, TOptions } from "./properties";

export const valid: Array<TSESLint.ValidTestCase<TOptions>> = [
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
    }
];

export const invalid: Array<TSESLint.InvalidTestCase<TMessageIds, TOptions>> = [
    {
        code: "type a = {b:1, a:2, c:3}",
        errors: [{ messageId: "type-keys-error" }],
        output: "type a = {a:2, b:1, c:3}"
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
    }
];

