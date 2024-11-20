// import stylisticTs from '@stylistic/eslint-plugin-ts'
import tsParser from '@typescript-eslint/parser'
import js from './js.js'
import tseslint from 'typescript-eslint'

export default [
	...js,
	// ...tseslint.configs.stylisticTypeChecked,
	...tseslint.configs.recommendedTypeChecked,
	{
		plugins: {
			// '@stylistic/ts': stylisticTs,
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
