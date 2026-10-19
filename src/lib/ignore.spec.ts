import { TSESLint } from "@typescript-eslint/utils";
import tsEslint from "typescript-eslint";
import plugin from "../index";

type TRuleName = keyof typeof plugin.rules;

const samples: Record<TRuleName, string> = {
    "export-object-keys": "const a = 1, b = 2; export { b, a };",
    "import-object-keys": "import { b, a } from \"./values.js\";",
    "object-keys": "const value = { b: 1, a: 2 };",
    "type-keys": "type T = { b: number; a: string };"
};

function lint(ruleName: TRuleName, filename: string, ignore?: Array<string>) {
    return new TSESLint.Linter({ cwd: "/project" }).verify(samples[ruleName], [{
        files: ["**/*.ts"],
        languageOptions: { parser: tsEslint.parser, sourceType: "module" },
        plugins: { sorting: plugin },
        rules: { [`sorting/${ ruleName }`]: ["error", { ignore }] }
    }], { filename });
}

describe("ignore option", () => {
    for (const ruleName of Object.keys(samples) as Array<TRuleName>) {
        describe(ruleName, () => {
            it("skips files matching an ignore pattern", () => {
                expect(lint(ruleName, "/project/folder/deep/nested/file.ts", ["folder/**/*.ts"])).toEqual([]);
            });

            it("still lints files that do not match", () => {
                expect(lint(ruleName, "/project/other/file.ts", ["folder/**/*.ts"])).toHaveLength(1);
                expect(lint(ruleName, "/project/folder/file.js.ts", ["folder/**/*.json"])).toHaveLength(1);
            });

            it("lints everything without ignore patterns", () => {
                expect(lint(ruleName, "/project/folder/file.ts")).toHaveLength(1);
            });
        });
    }

    it("rejects ignore on selectors", () => {
        expect(() => new TSESLint.Linter().verify("const value = {};", [{
            plugins: { sorting: plugin },
            rules: { "sorting/object-keys": ["error", { selectors: [{ ignore: ["**"], target: { name: "a", type: "property" } }] }] }
        }])).toThrow();
    });
});
