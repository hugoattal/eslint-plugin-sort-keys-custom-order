export default {
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

