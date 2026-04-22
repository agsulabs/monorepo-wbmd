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
const ALL_CODE_FILES = ['**/*.{ts,tsx,cts,mts,js,jsx,cjs,mjs}'];

export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      '**/.turbo/**',
      '**/src-tauri/target/**',
      '**/src/gen/**',
    ],
  },

  js.configs.recommended,

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
      'import/order': [
        'warn',
        {
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      'unused-imports/no-unused-imports': 'error',

      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: [
                '@monorepo/web',
                '@monorepo/web/*',
                '@monorepo/desktop',
                '@monorepo/desktop/*',
                '@monorepo/backend',
                '@monorepo/backend/*',
                '@monorepo/mobile',
                '@monorepo/mobile/*',
              ],
              message:
                'Apps must not import other apps directly. Move shared code to packages/* and import from there.',
            },
            {
              group: ['@monorepo/api-client/*'],
              message:
                'Do not use deep imports from @monorepo/api-client. Import only from the package root public API.',
            },
            {
              group: ['@monorepo/contracts/*'],
              message:
                'Do not use deep imports from @monorepo/contracts. Import only from the package root public API.',
            },
            {
              group: ['@env'],
              message: 'Do not import @env outside the mobile config layer.',
            },
          ],
        },
      ],
    },
  },

  {
    files: TS_FILES,
    languageOptions: {
      parser: tsParser,
      parserOptions: {
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

      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
    },
  },

  {
    files: ['apps/web/**/*.{ts,tsx,js,jsx}', 'apps/desktop/**/*.{ts,tsx,js,jsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },
    languageOptions: {
      globals: globals.browser,
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
      'react/react-in-jsx-scope': 'off',
    },
  },

  {
    files: ['apps/mobile/shared/config/api.ts'],
    rules: {
      'no-restricted-imports': 'off',
    },
  },

  {
    files: [
      '**/*.config.{js,cjs,mjs,ts}',
      '**/*.rc.{js,cjs,mjs}',
      '**/{babel,metro,jest}.config.{js,cjs,mjs,ts}',
      'apps/**/.eslintrc.{js,cjs,mjs}',
      'apps/**/.prettierrc.{js,cjs,mjs}',
    ],
    languageOptions: {
      globals: globals.node,
      sourceType: 'module',
    },
  },

  {
    files: ['packages/**/scripts/**/*.{js,mjs,ts}'],
    languageOptions: {
      globals: globals.node,
      sourceType: 'module',
    },
  },

  {
    files: ['packages/api-client/src/**/*.js'],
    languageOptions: {
      globals: globals.node,
      sourceType: 'commonjs',
    },
  },

  {
    files: ['**/__tests__/**/*.{ts,tsx,js,jsx}', '**/*.{test,spec}.{ts,tsx,js,jsx}'],
    languageOptions: {
      globals: globals.jest,
    },
  },

  prettier,
];
