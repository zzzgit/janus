import jest from 'eslint-plugin-jest'
import globals from 'globals'
import js from '@eslint/js'

export default [
	...js,
	jest.configs['flat/recommended'],
	{
		plugins: {
			jest,
		},

		languageOptions: {
			globals: {
				...globals.jest,
			},
		},

		rules: {
			'jest/consistent-test-it': 'off',

			'jest/expect-expect': ['error',
				{
					assertFunctionNames: ['expect'],
				}],

			'jest/prefer-lowercase-title': ['error',
				{
					ignore: [],
				}],

			'jest/no-alias-methods': 'error',
			'jest/no-disabled-tests': 'off',
			'jest/valid-title': 'error',
			'jest/no-focused-tests': 'off',
			'jest/no-hooks': 'off',
			'jest/no-identical-title': 'error',
			'jest/no-jasmine-globals': 'error',
			'jest/no-mocks-import': 'error',
			'jest/no-large-snapshots': 'off',
			'jest/no-done-callback': 'error',
			'jest/no-test-prefixes': 'error',
			'jest/no-test-return-statement': 'off',
			'jest/prefer-expect-assertions': 'off',
			'jest/prefer-spy-on': 'error',
			'jest/prefer-todo': 'error',
			'jest/prefer-strict-equal': 'warn',
			'jest/prefer-to-contain': 'error',
			'jest/prefer-called-with': 'error',
			'jest/prefer-to-be': 'error',
			'jest/prefer-expect-resolves': 'error',
			'jest/prefer-to-have-length': 'error',
			'jest/require-to-throw-message': 'off',
			'jest/valid-describe-callback': 'error',
			'jest/valid-expect-in-promise': 'error',
			'jest/valid-expect': 'error',
		},
	},
]
