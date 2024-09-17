import ts from '../../ts.js'
import tsParser from '@typescript-eslint/parser'

import node from '../../node.js'

export default[
	...ts,
	...node,
].map(config=> ({
	...config,
	languageOptions: {
		// 这里重复了，但是只能这样写
		parser: tsParser,
		parserOptions: {
			project: ['./tsconfig.json'],
			tsconfigRootDir: import.meta.dirname,
		},
	},
	files: ['test/ts/**/*.ts'],
}))
