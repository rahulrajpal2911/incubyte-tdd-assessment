import type { Config } from "jest";

const config: Config = {
  verbose: true,
  testMatch: ["**/tests/**/*.test.ts"], // Looks for tests in tests folder
  watchPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"], // Optional: Ignore watching these
};

export default config;
