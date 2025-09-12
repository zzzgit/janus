import ts from '../../ts.js'
import { tsify } from '../../utils.js'

export default tsify([
	...ts,
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				// tsconfigRootDir: import.meta.dirname,
			},
		},
	},
])
