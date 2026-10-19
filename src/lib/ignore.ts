import * as path from "node:path";
import type { TSESLint } from "@typescript-eslint/utils";
import type { TRuleOptions } from "./options";

export function isIgnored(context: TSESLint.RuleContext<string, [TRuleOptions?]>) {
    const patterns = context.options[0]?.ignore;
    if (!patterns?.length) {
        return false;
    }
    const filename = path.relative(context.cwd, context.filename).replaceAll("\\", "/");
    return patterns.some(pattern => path.matchesGlob(filename, pattern));
}
