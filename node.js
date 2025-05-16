import node from 'eslint-plugin-n'
import globals from 'globals'

export default [
	node.configs['flat/recommended-script'],
	{
		name: "janus/node",
		languageOptions: {
			globals: {
				...globals.node,
				...globals.commonjs,
				...Object.fromEntries(Object.entries(globals.browser).map(([key])=> [key, 'off'])),
				Atomics: false,
				SharedArrayBuffer: false,
			},
			sourceType: 'commonjs',
		},

		rules: {
			'n/no-extraneous-import': 'error',
			'n/no-extraneous-require': 'error',
			'n/no-missing-import': 'off',
			'n/no-missing-require': 'off',
			'n/no-unpublished-bin': 'error',
			'n/no-unpublished-import': 'off',
			'n/no-unpublished-require': 'off',
			'n/no-unsupported-features/es-builtins': 'error',
			'n/no-unsupported-features/es-syntax': 'off',
			'n/no-unsupported-features/node-builtins': 'error',
			'n/process-exit-as-throw': 'error',
			'n/shebang': 'error',
			'n/no-deprecated-api': 'error',
			'n/exports-style': 'error',
			'n/prefer-global/buffer': 'error',
			'n/prefer-global/console': 'error',
			'n/prefer-global/process': 'error',
			'n/prefer-global/text-decoder': 'error',
			'n/prefer-global/text-encoder': 'error',
			'n/prefer-global/url-search-params': 'error',
			'n/prefer-global/url': 'error',
		},
	},
]
