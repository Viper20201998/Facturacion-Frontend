import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

import prettierPlugin from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

export default tseslint.config(
	{ ignores: ['dist'] },
	{
		settings: {
			react: {
				version: 'detect',
			},
		},
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommended,
			eslintConfigPrettier,
		],
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			'prettier': prettierPlugin,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'prettier/prettier': 'error',
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true },
			],
			'semi': ['error', 'never'],
			'quotes': ['error', 'single'],
			'quote-props': ['error', 'consistent-as-needed'],
		},
	},
)
