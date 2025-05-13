// eslint.config.js
import eslintPluginImport from 'eslint-plugin-import'
import typescript from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-config-prettier'

export default [
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
                project: './tsconfig.json'
            }
        },
        plugins: {
            '@typescript-eslint': typescript,
            import: eslintPluginImport
        },
        rules: {
            // TypeScript Best Practices
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/consistent-type-imports': 'error',

            // Import Sorting & Hygiene
            'import/order': [
                'error',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                    'newlines-between': 'always'
                }
            ],

            // General Best Practices
            'no-console': 'warn',
            'no-unused-vars': 'off' // handled by TS rule
        }
    },
    {
        rules: {
            ...prettier.rules
        }
    }
]
