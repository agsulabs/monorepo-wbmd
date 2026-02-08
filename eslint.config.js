// eslint.config.js
// Flat config for a pnpm/turbo TypeScript monorepo.
// Includes:
// - TypeScript linting everywhere
// - React linting only for apps/web
// - Prettier compatibility (disables conflicting formatting rules)

import js from '@eslint/js';
import globals from 'globals';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';

import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';

const TS_FILES = ['**/*.{ts,tsx,cts,mts}'];
const JS_FILES = ['**/*.{js,jsx,cjs,mjs}'];
const ALL_CODE_FILES = ['**/*.{ts,tsx,cts,mts,js,jsx,cjs,mjs}'];

export default [
  // Global ignores for the whole monorepo
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      '**/.turbo/**',
      '**/src-tauri/target/**',
      '**/src/gen/**', // your api-client generated SDK
    ],
  },

  // Base recommended rules
  js.configs.recommended,

  // Shared config for all code files
  {
    files: ALL_CODE_FILES,
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      import: importPlugin,
      'unused-imports': unusedImportsPlugin,
    },
    rules: {
      // Keep imports tidy
      'import/order': [
        'warn',
        {
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      // Auto-remove unused imports; keep unused vars visible
      'unused-imports/no-unused-imports': 'error',
    },
  },

  // TypeScript config
  {
    files: TS_FILES,
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        // Project-aware rules are optional; keep it simple & fast by default.
        // If you want type-aware linting later, we can add project references.
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      import: importPlugin,
      'unused-imports': unusedImportsPlugin,
    },
    rules: {
      ...tseslint.configs.recommended.rules,

      // Use TS version instead of base no-unused-vars
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      // Optional: safer defaults
      '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
    },
  },

  // React only for web app (adjust path if needed)
  {
    files: ['apps/web/**/*.{ts,tsx,js,jsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...jsxA11yPlugin.configs.recommended.rules,

      // React 17+ JSX transform
      'react/react-in-jsx-scope': 'off',
    },
  },

  // Node env for config files (metro/babel/jest/eslint/prettier etc.)
  {
    files: [
      '**/*.config.{js,cjs,mjs}',
      '**/*.rc.{js,cjs,mjs}',
      '**/{babel,metro,jest}.config.{js,cjs,mjs}',
      'apps/**/.eslintrc.{js,cjs,mjs}',
      'apps/**/.prettierrc.{js,cjs,mjs}',
    ],
    languageOptions: {
      globals: globals.node,
      sourceType: 'commonjs',
    },
  },

  // Jest env for tests
  {
    files: ['**/__tests__/**/*.{ts,tsx,js,jsx}', '**/*.{test,spec}.{ts,tsx,js,jsx}'],
    languageOptions: {
      globals: globals.jest,
    },
  },

  // Prettier compatibility layer: must be last
  prettier,
];
