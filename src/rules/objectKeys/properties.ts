export default {
    type: "object",
    properties: {
        orderedKeys: {
            type: "array"
        }
    },
    additionalProperties: false
};

export type TOptions = Array<{
    orderedKeys: Array<string>
}>

export type TMessageIds = "object-keys-error"
