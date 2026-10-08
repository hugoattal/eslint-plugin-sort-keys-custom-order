import type { JSONSchema } from "@typescript-eslint/utils";
import { properties, type TSortingOptions } from "@/lib/options";

export type TSelector = TSortingOptions & {
    mode?: "direct" | "recursive",
    target: {
        type: "property" | "function",
        name: string
    }
};

export type TObjectSortingOptions = TSortingOptions & {
    selectors?: Array<TSelector>
};

export type TOptions = [TObjectSortingOptions?];

export const objectProperties: JSONSchema.JSONSchema4 = {
    ...properties,
    properties: {
        ...properties.properties,
        selectors: {
            items: {
                ...properties,
                properties: {
                    ...properties.properties,
                    mode: { enum: ["direct", "recursive"], type: "string" },
                    target: {
                        additionalProperties: false,
                        properties: {
                            name: { type: "string" },
                            type: { enum: ["property", "function"], type: "string" }
                        },
                        required: ["type", "name"],
                        type: "object"
                    }
                },
                required: ["target"]
            },
            type: "array"
        }
    }
};
