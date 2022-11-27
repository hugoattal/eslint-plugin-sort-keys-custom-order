/// <reference types="vitest" />
import * as path from "path";
import { defineConfig, UserConfig } from "vite";
import packageDefinition from "./package.json";

const alias = {
    "@": path.resolve(__dirname, "src")
};

export default defineConfig(() => {
    const config: UserConfig = {
        build: {
            lib: {
                entry: "src/index.ts",
                fileName: "index",
                name: "eslint-plugin-sort-keys-custom-order"
            },
            rollupOptions: {
                external: [
                    ...Object.keys(packageDefinition.peerDependencies || {})
                ],
                output: {
                    globals: {
                        eslint: "eslint",
                        typescript: "typescript"
                    }
                }
            }
        },
        resolve: {
            alias
        }
    };

    config.test = {
        globals: true
    };

    return config;
});
