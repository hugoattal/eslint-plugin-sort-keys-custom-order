import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
    moduleNameMapper: { "@/(.*)": "<rootDir>/src/$1" },
    preset: "ts-jest",
    testEnvironment: "node",
    verbose: true
};

export default config;
