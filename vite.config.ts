/// <reference types="vitest" />
import * as path from "path";
import { defineConfig, UserConfig } from "vite";
import dts from "vite-plugin-dts";
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
            },
            target: "esnext"
        },
        plugins: [
            dts()
        ],
        resolve: {
            alias
        }
    };

    config.test = {
        globals: true
    };

    return config;
});
