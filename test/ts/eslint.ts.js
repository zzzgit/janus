import tsParser from '@typescript-eslint/parser'
import ts from '../../ts.js'

export default [
	{
		ignores: ['**/*.js'],
	},
	...ts,
	{
		files: [
			'**/*.ts',
		],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: ['./tsconfig.json'],
				tsconfigRootDir: import.meta.dirname,
			},
		},
		rules: {

		},
	},
]
