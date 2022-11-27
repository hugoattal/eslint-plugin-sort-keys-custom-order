import { TSESLint } from "@typescript-eslint/utils";
import { TMessageIds, TOptions } from "./properties";

export const valid: Array<TSESLint.ValidTestCase<TOptions>> = [
    {
        code: "import {a,b,c} from 'test'"
    }
];

export const invalid: Array<TSESLint.InvalidTestCase<TMessageIds, TOptions>> = [
    {
        code: "import {b,a,c} from 'test'",
        errors: [{ messageId: "import-object-keys-error" }],
        output: "import {a,b,c} from 'test'"
    }
];
