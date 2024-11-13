import tseslint from 'typescript-eslint'
// import stylisticTs from '@stylistic/eslint-plugin-ts'
import tsParser from '@typescript-eslint/parser'
import js from './js.js'

export default [
	...js,
	...tseslint.configs.recommendedTypeChecked,
	// ...tseslint.configs.stylisticTypeChecked,
	{
		plugins: {
			// '@stylistic/ts': stylisticTs,
			'@typescript-eslint': tseslint.plugin,
		},
		languageOptions: {
			parser: tsParser,
		},
		rules: {
		},
	},

]
