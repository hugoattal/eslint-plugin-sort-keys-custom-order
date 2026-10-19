import * as path from "node:path";
import { defineConfig } from "vitest/config";
import dts from "unplugin-dts/vite";
import packageDefinition from "./package.json" with { type: "json" };

export default defineConfig({
    build: {
        lib: {
            entry: "src/index.ts",
            fileName: "index",
            name: "eslint-plugin-sort-keys-custom-order"
        },
        rollupOptions: {
            external: [...Object.keys(packageDefinition.peerDependencies), "node:path"],
            output: {
                globals: {
                    "@typescript-eslint/utils": "typescriptEslintUtils",
                    "node:path": "path"
                }
            }
        },
        target: "esnext"
    },
    plugins: [
        dts({ entryRoot: "src", exclude: ["src/**/*.spec.ts", "src/testing/**"] })
    ],
    resolve: {
        alias: { "@": path.resolve(import.meta.dirname, "src") }
    },
    test: {
        globals: true
    }
});
