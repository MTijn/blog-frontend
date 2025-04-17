import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import vueeslint from 'eslint-plugin-vue';
import vueparser from 'vue-eslint-parser';
import globals from 'globals';

export default [
  eslint.configs.recommended,
  // Ignore dist directory (generated files)
  {
    ignores: ['dist/**/*']
  },
  // Configuration for Vue files
  {
    files: ['**/*.vue'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2020,
        process: 'readonly',
        global: 'readonly',
        setImmediate: 'readonly',
        Buffer: 'readonly',
        WorkerGlobalScope: 'readonly'
      },
      parser: vueparser,
      parserOptions: {
        parser: tsparser,
        sourceType: 'module',
        ecmaVersion: 2020,
        extraFileExtensions: ['.vue']
      }
    },
    plugins: {
      'vue': vueeslint,
      '@typescript-eslint': tseslint
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-reserved-component-names': 'error',
      'vue/component-definition-name-casing': ['error', 'PascalCase'],
      'vue/html-closing-bracket-newline': ['error', {
        'singleline': 'never',
        'multiline': 'always'
      }],
      'vue/html-indent': ['error', 2],
      'vue/html-quotes': ['error', 'double'],
      'vue/max-attributes-per-line': ['error', {
        'singleline': 3,
        'multiline': 1
      }]
    }
  },
  {
    // Configuration for TypeScript files
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2020,
        ...globals.node,
        process: 'readonly',
        global: 'readonly',
        setImmediate: 'readonly',
        Buffer: 'readonly',
        WorkerGlobalScope: 'readonly'
      },
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      '@typescript-eslint/no-explicit-any': 'off'
    }
  },
  {
    // Configuration for JavaScript files
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2020,
        ...globals.node,
        process: 'readonly',
        global: 'readonly',
        setImmediate: 'readonly',
        Buffer: 'readonly',
        WorkerGlobalScope: 'readonly'
      },
      ecmaVersion: 2020,
      sourceType: 'module'
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
  },
  {
    // Configuration for CommonJS files
    files: ['**/*.cjs', '**/vue.config.js'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.commonjs
      },
      ecmaVersion: 2020,
      sourceType: 'commonjs'
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
  }
]
