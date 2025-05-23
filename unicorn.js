import unicorn from 'eslint-plugin-unicorn'

export default [{
	name: 'janus/unicorn',
	plugins: {
		unicorn,
	},

	rules: {
		'unicorn/catch-error-name': 'off',
		'unicorn/custom-error-definition': 'off',
		'unicorn/error-message': 'error',
		'unicorn/escape-case': 'error',
		'unicorn/explicit-length-check': 'off',
		'unicorn/filename-case': 'off',
		'unicorn/new-for-builtins': 'error',
		'unicorn/no-abusive-eslint-disable': 'error',
		'unicorn/no-console-spaces': 'error',
		'unicorn/no-for-loop': 'error',
		'unicorn/no-hex-escape': 'error',
		'unicorn/no-new-buffer': 'error',
		'unicorn/no-process-exit': 'error',
		'unicorn/no-unreadable-array-destructuring': 'error',
		'unicorn/no-unused-properties': 'off',
		'unicorn/no-zero-fractions': 'error',
		'unicorn/number-literal-case': 'error',
		'unicorn/prefer-add-event-listener': 'error',
		'unicorn/prefer-includes': 'error',
		'unicorn/prefer-query-selector': 'error',
		'unicorn/prefer-spread': 'error',
		'unicorn/prefer-type-error': 'off',
		'unicorn/prevent-abbreviations': 'off',
		'unicorn/throw-new-error': 'error',
	},
}]
