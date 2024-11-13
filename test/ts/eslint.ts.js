import tsParser from '@typescript-eslint/parser'
import ts from '../../ts.js'
// import {tsify} from '../../utils.js'

export default [
	...ts,
	{
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: ['./tsconfig.json'],
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
]
