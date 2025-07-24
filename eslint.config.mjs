import globals from "globals"
import js from "@eslint/js"

export default [
js.configs.recommended,
{
  files: ["**/*.{js,mjs,cjs}"],
  ignores: ["node_modules/**", "dist/**", "build/**", "coverage/**", "docs/**"],
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    globals: {
      ...globals.node,
      ...globals.es2023,
      ...globals.jest
    }
  },
  rules: {
    "strict": ["error", "global"],
    "no-unused-vars": "error",
    "no-console": "warn",
    "curly": "error",
    "no-var": "error",
    "eol-last": ["error", "always"],
    "no-trailing-spaces": "error",
  }
}
]
