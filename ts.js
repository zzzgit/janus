module.exports = {
	parserOptions: {
	},
	globals: {
	},
	extends: ['./js', 'plugin:@typescript-eslint/recommended'], // 'eslint:recommended'
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', '@stylistic/ts'],
	rules: {
		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/array-type': 'error',
		'@typescript-eslint/await-thenable': 'error',
		'@typescript-eslint/ban-types': 'error',
		'@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
		'@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'no-public' }],
		'@typescript-eslint/member-ordering': 'off',
		'@typescript-eslint/no-array-constructor': 'error',
		'@typescript-eslint/no-empty-interface': 'error',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-extraneous-class': ['error', {
			allowConstructorOnly: false, allowEmpty: false, allowStaticOnly: true, allowWithDecorator: true
		}],
		'@typescript-eslint/no-for-in-array': 'error',
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/prefer-readonly': 'off',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/ban-ts-comment': ['error', {
			'ts-expect-error': 'allow-with-description',
			'ts-ignore': true,
			'ts-nocheck': true,
			'ts-check': false,
			minimumDescriptionLength: 3,
		}],
		'@typescript-eslint/no-namespace': 'error',
		'@typescript-eslint/no-non-null-assertion': 'error',
		'@typescript-eslint/no-require-imports': 'off',
		'@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true }],
		'@typescript-eslint/no-unnecessary-qualifier': 'warn',
		'@typescript-eslint/no-unnecessary-type-assertion': 'error',
		'@typescript-eslint/no-unused-vars': ['error', {
			vars: 'all', args: 'after-used', ignoreRestSiblings: false
		}],
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/no-useless-constructor': 'error',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/prefer-function-type': 'error',
		'@typescript-eslint/prefer-namespace-keyword': 'error',
		'@typescript-eslint/promise-function-async': 'off',
		'@typescript-eslint/restrict-plus-operands': 'off',
		'@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
		'@typescript-eslint/unified-signatures': 'warn',
		'@typescript-eslint/prefer-optional-chain': 'error',

	},
}
