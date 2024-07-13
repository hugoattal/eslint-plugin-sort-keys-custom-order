import type { JSONSchema } from "@typescript-eslint/utils";

export const properties: JSONSchema.JSONSchema4 = {
    additionalProperties: false,
    properties: {
        orderedKeys: {
            type: "array"
        }
    },
    type: "object"
};

export type TOptions = Array<{
    orderedKeys: Array<string>
}>

export type TMessageIds = "export-object-keys-error"

