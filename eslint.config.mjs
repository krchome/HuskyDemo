import globals from 'globals';
import pluginJs from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';

export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  prettierConfig,
  {
    rules: {
      semi: ['error', 'always'], // Enforce semicolons
      quotes: ['error', 'single'], // Prefer single quotes
    },
  },
];
