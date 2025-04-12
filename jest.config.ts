// jest.config.ts
import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  transform: {
    "^.+\\.(ts)$": "ts-jest", // Transpile TypeScript files using ts-jest
  },
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js"],
  preset: "ts-jest",
  reporters: [
    "default",
    [
      "./node_modules/jest-html-reporter",
      {
        pageTitle: "TDD Assessment Test Report",
        includeFailureMsg: true,
        includeConsoleLog: true,
      },
    ],
  ],
};

export default config;
