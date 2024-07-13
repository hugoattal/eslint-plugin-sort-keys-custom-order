import { ValidTestCase, InvalidTestCase } from "@typescript-eslint/rule-tester";
import { TMessageIds, TOptions } from "./properties";

export const valid: Array<ValidTestCase<TOptions>> = [
    {
        code: "import {a,b,c} from 'test'"
    }
];

export const invalid: Array<InvalidTestCase<TMessageIds, TOptions>> = [
    {
        code: "import {b,a,c} from 'test'",
        errors: [{ messageId: "import-object-keys-error" }],
        output: "import {a,b,c} from 'test'"
    }
];
