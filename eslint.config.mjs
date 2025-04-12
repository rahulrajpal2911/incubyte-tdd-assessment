import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.ts"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.ts"],
    languageOptions: { globals: globals.browser },
  },
  globalIgnores(["dist", "node_modules"]),
  tseslint.configs.recommended,
]);
