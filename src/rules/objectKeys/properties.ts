import type { JSONSchema } from "@typescript-eslint/utils";

export const properties: JSONSchema.JSONSchema4 = {
    additionalProperties: false,
    properties: {
        orderedKeys: {
            type: "array"
        },
        sorting: {
            enum: ["asc", "desc", "none"],
            type: "string"
        }
    },
    type: "object"
};

export type TOptions = Array<{
    orderedKeys?: Array<string>,
    sorting?: "asc" | "desc" | "none"
}>

export type TMessageIds = "object-keys-error"

