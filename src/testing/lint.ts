import { TSESLint } from "@typescript-eslint/utils";
import tsEslint from "typescript-eslint";
import plugin from "../index";
import type { TObjectSortingOptions } from "../rules/objectKeys/options";

type TRuleName = keyof typeof plugin.rules;

function getConfig(ruleName: TRuleName, options: TObjectSortingOptions): Array<TSESLint.FlatConfig.Config> {
    return [{
        languageOptions: { parser: tsEslint.parser },
        plugins: { sorting: plugin },
        rules: { [`sorting/${ruleName}`]: ["error", options] }
    }];
}

export function expectFix(ruleName: TRuleName, code: string, expected: string, options: TObjectSortingOptions = {}) {
    const linter = new TSESLint.Linter();
    const config = getConfig(ruleName, options);
    const result = linter.verifyAndFix(code, config, {});
    expect(result.output).toBe(expected);
    expect(result.messages).toEqual([]);
    expect(linter.verifyAndFix(result.output, config, {}).fixed).toBe(false);
}

export function expectNoFix(ruleName: TRuleName, code: string, options: TObjectSortingOptions = {}) {
    const result = new TSESLint.Linter().verifyAndFix(code, getConfig(ruleName, options), {});
    expect(result.output).toBe(code);
    expect(result.fixed).toBe(false);
    expect(result.messages.some(message => message.ruleId === `sorting/${ruleName}`)).toBe(true);
}

export function expectSingleFix(ruleName: TRuleName, code: string, expected: string) {
    const messages = new TSESLint.Linter().verify(code, getConfig(ruleName, {}));
    const fixes = messages.filter(message => message.fix);
    expect(fixes).toHaveLength(1);
    const fix = fixes[0].fix!;
    expect(code.slice(0, fix.range[0]) + fix.text + code.slice(fix.range[1])).toBe(expected);
    expectFix(ruleName, code, expected);
}

export function expectInvalidOrderedKeys(ruleName: TRuleName) {
    const linter = new TSESLint.Linter();
    for (const orderedKeys of [[123], ["id", "id"], [{}]]) {
        expect(() => linter.verify("const value = {};", [{
            plugins: { sorting: plugin },
            rules: { [`sorting/${ruleName}`]: ["error", { orderedKeys }] }
        }])).toThrow();
    }
}
