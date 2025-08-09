import tsParser from '@typescript-eslint/parser'
import js from './js.js'
import tseslint from 'typescript-eslint'

export default [
	...js,
	...tseslint.configs.recommendedTypeChecked,
	{
		plugins: {
			'@typescript-eslint': tseslint.plugin,
		},
		languageOptions: {
			parser: tsParser,
		},
		rules: {
			'@typescript-eslint/restrict-template-expressions': 0,
		},
	},

]
