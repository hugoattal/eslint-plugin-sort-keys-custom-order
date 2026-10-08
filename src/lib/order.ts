import type { TSortingOptions } from "./options";

export function getOrderFunction({ orderedKeys = [], sorting = "asc" }: TSortingOptions) {
    const priorities = new Map(orderedKeys.map((key, index) => [key, index]));

    return function compareNames(a: string, b: string): number {
        const priorityA = priorities.get(a);
        const priorityB = priorities.get(b);
        if (priorityA !== undefined && priorityB !== undefined) {
            return priorityA - priorityB;
        }
        if (priorityA !== undefined) {
            return -1;
        }
        if (priorityB !== undefined) {
            return 1;
        }
        if (sorting === "none") {
            return 0;
        }
        const nameA = a.toLowerCase();
        const nameB = b.toLowerCase();
        if (nameA === nameB) {
            return 0;
        }
        if (sorting === "desc") {
            return nameA > nameB ? -1 : 1;
        }
        return nameA < nameB ? -1 : 1;
    };
}
