import { TSESLint } from "@typescript-eslint/utils";
import { TMessageIds, TOptions } from "./properties";

export const valid: Array<TSESLint.ValidTestCase<TOptions>> = [
    {
        code: "export {a,b,c}"
    }
];

export const invalid: Array<TSESLint.InvalidTestCase<TMessageIds, TOptions>> = [
    {
        code: "export {b,a,c}",
        errors: [{ messageId: "export-object-keys-error" }],
        output: "export {a,b,c}"
    }
];
