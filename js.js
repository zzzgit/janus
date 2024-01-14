module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 'latest',
		// "sourceType": module,
	},
	env: {
		es6: true,
	},
	plugins: ['@stylistic/js'],
	extends: ['eslint:recommended', './unicorn', './array', './promise',],
	// "plugins": ['@stylistic/js'],
	rules: {
		'no-var': 'error',
		'no-unused-vars': ['warn'],
		'no-else-return': ['error', { allowElseIf: true }],
		curly: ['error', 'all'],
		'prefer-const': ['error', {
			destructuring: 'any',
			ignoreReadBeforeAssign: false
		}],
		'sort-imports': ['error', {
			ignoreCase: false, ignoreDeclarationSort: true, ignoreMemberSort: false, memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'], allowSeparatedGroups: false
		}],
		'@stylistic/js/indent': ['error', 'tab'],
		'@stylistic/js/semi-spacing': ['error', {
			before: false, after: true
		}],
		'@stylistic/js/semi': ['error', 'never'],
		'@stylistic/js/quotes': ['error', 'single'],
		'@stylistic/js/quote-props': ['error', 'as-needed'],
		'@stylistic/js/no-whitespace-before-property': ['error'],
		'@stylistic/js/space-before-blocks': ['error', 'never'],
		'@stylistic/js/space-before-function-paren': ['error', 'never'],
		'@stylistic/js/space-in-parens': ['error', 'never'],
		'@stylistic/js/block-spacing': ['error', 'always'],
		'@stylistic/js/no-mixed-spaces-and-tabs': ['error'],
		'@stylistic/js/no-trailing-spaces': ['error', { ignoreComments: true }],
		'@stylistic/js/spaced-comment': ['error', 'always'],
		'@stylistic/js/object-curly-spacing': ['error', 'always'],
		'@stylistic/js/comma-spacing': ['error', { before: false }],
		'@stylistic/js/no-multi-spaces': ['error', { ignoreEOLComments: true, exceptions: { Property: false } }],
		'@stylistic/js/space-infix-ops': ['error', { int32Hint: false }],
		'@stylistic/js/brace-style': ['error', '1tbs', { allowSingleLine: true }],
		'@stylistic/js/computed-property-spacing': ['error', 'never', { enforceForClassMembers: true }],
		'@stylistic/js/space-unary-ops': ['error', { words: true, nonwords: false }],
		'@stylistic/js/array-bracket-spacing': ['error', 'never'],
		'@stylistic/js/no-multiple-empty-lines': ['error', {
			max: 1, maxBOF: 0, maxEOF: 1
		}],
		'@stylistic/js/key-spacing': ['error', {
			beforeColon: false, afterColon: true, mode: 'strict'
		}],
		'@stylistic/js/object-curly-newline': ['error', {
			ObjectExpression: {
				multiline: true, consistent: true, minProperties: 3
			},
			ObjectPattern: {
				multiline: true, consistent: true, minProperties: 3
			},
			ImportDeclaration: {
				multiline: true, consistent: true, minProperties: 5
			},
			ExportDeclaration: {
				multiline: true, consistent: true, minProperties: 3
			}
		}],
	},
}
