import { ValidTestCase, InvalidTestCase } from "@typescript-eslint/rule-tester";
import { TMessageIds, TOptions } from "./properties";

export const valid: Array<ValidTestCase<TOptions>> = [
    {
        code: "export {a,b,c}"
    }
];

export const invalid: Array<InvalidTestCase<TMessageIds, TOptions>> = [
    {
        code: "export {b,a,c}",
        errors: [{ messageId: "export-object-keys-error" }],
        output: "export {a,b,c}"
    }
];
