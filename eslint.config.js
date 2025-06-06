const { defineConfig, globalIgnores } = require("eslint/config");
const globals = require("globals");
const js = require("@eslint/js");
const prettier = require("eslint-plugin-prettier");

module.exports = defineConfig([
  globalIgnores([
    "node_modules",
    "dist",
    "coverage",
    "**/__tests__/**",
    "eslint.config.js",
    "jest.config.js",
    "prettier.config.js",
  ]),
	{ files: ["**/*.js"], languageOptions: { globals: { ...globals.node, ...globals.es2021, ...globals.browser }  } },
	{ files: ["**/*.js"], plugins: { js, prettier }, extends: ["js/recommended"], rules: { "prettier/prettier": "error" } },
]);
