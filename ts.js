import tseslint from 'typescript-eslint'
import stylisticTs from '@stylistic/eslint-plugin-ts'
import tsParser from '@typescript-eslint/parser'
// import js from './js.js'

export default [
	// ...js,
	...tseslint.configs.recommended,

	{
		plugins: {
			'@ts': tseslint,
			'@stylistic/ts': stylisticTs,
		},

		languageOptions: {
			parser: tsParser,
		},

		rules: {
			'@ts/adjacent-overload-signatures': 'error',
			'@ts/array-type': 'error',
			'@ts/await-thenable': 'error',

			'@ts/explicit-function-return-type': ['error',
				{
					allowExpressions: true,
				}],

			'@ts/explicit-member-accessibility': ['error',
				{
					accessibility: 'no-public',
				}],

			'@ts/member-ordering': 'off',
			'@ts/no-array-constructor': 'error',
			'@ts/no-empty-interface': 'error',
			'@ts/no-explicit-any': 'error',

			'@ts/no-extraneous-class': ['error',
				{
					allowConstructorOnly: false,
					allowEmpty: false,
					allowStaticOnly: true,
					allowWithDecorator: true,
				}],

			'@ts/no-for-in-array': 'error',
			'@ts/no-inferrable-types': 'off',
			'@ts/prefer-readonly': 'off',
			'@ts/no-misused-new': 'error',

			'@ts/ban-ts-comment': ['error',
				{
					'ts-expect-error': 'allow-with-description',
					'ts-ignore': true,
					'ts-nocheck': true,
					'ts-check': false,
					minimumDescriptionLength: 3,
				}],

			'@ts/no-namespace': 'error',
			'@ts/no-non-null-assertion': 'error',
			'@ts/no-require-imports': 'off',

			'@ts/no-this-alias': ['error',
				{
					allowDestructuring: true,
				}],

			'@ts/no-unnecessary-qualifier': 'warn',
			'@ts/no-unnecessary-type-assertion': 'error',

			'@ts/no-unused-vars': ['error',
				{
					vars: 'all',
					args: 'after-used',
					ignoreRestSiblings: false,
				}],

			'@ts/no-use-before-define': 'off',
			'@ts/no-useless-constructor': 'error',
			'@ts/no-var-requires': 'off',
			'@ts/prefer-for-of': 'error',
			'@ts/prefer-function-type': 'error',
			'@ts/prefer-namespace-keyword': 'error',
			'@ts/promise-function-async': 'off',
			'@ts/restrict-plus-operands': 'off',

			'@ts/unbound-method': ['error',
				{
					ignoreStatic: true,
				}],

			'@ts/unified-signatures': 'warn',
			'@ts/prefer-optional-chain': 'error',
			'@stylistic/ts/no-extra-semi': 'error',
		},
	},
]
