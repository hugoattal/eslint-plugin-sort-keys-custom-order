import { ValidTestCase, InvalidTestCase } from "@typescript-eslint/rule-tester";
import { TMessageIds, TOptions } from "./properties";

export const valid: Array<ValidTestCase<TOptions>> = [
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

export const invalid: Array<InvalidTestCase<TMessageIds, TOptions>> = [
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

