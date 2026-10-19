import type { JSONSchema } from "@typescript-eslint/utils";

export type TSortingOptions = {
    orderedKeys?: Array<string>,
    sorting?: "asc" | "desc" | "none"
};

export type TRuleOptions = TSortingOptions & {
    ignore?: Array<string>
};

export type TOptions = [TRuleOptions?];

export const sortingProperties: JSONSchema.JSONSchema4ObjectSchema = {
    additionalProperties: false,
    properties: {
        orderedKeys: {
            items: { type: "string" },
            type: "array",
            uniqueItems: true
        },
        sorting: {
            enum: ["asc", "desc", "none"],
            type: "string"
        }
    },
    type: "object"
};

export const properties: JSONSchema.JSONSchema4ObjectSchema = {
    ...sortingProperties,
    properties: {
        ...sortingProperties.properties,
        ignore: {
            items: { type: "string" },
            type: "array"
        }
    }
};
