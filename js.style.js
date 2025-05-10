import stylisticJs from '@stylistic/eslint-plugin-js'

export default [
	{
		plugins: {
			'@stylistic/js': stylisticJs,
		},
		rules: {

			'@stylistic/js/indent': [2, 'tab'],

			'@stylistic/js/semi-spacing': [2,
				{
					before: false,
					after: true,
				}],

			'@stylistic/js/semi': [2, 'never'],
			'@stylistic/js/quotes': [2, 'single'],
			'@stylistic/js/quote-props': [2, 'as-needed'],
			'@stylistic/js/no-whitespace-before-property': [2],
			'@stylistic/js/space-before-blocks': [2, 'never'],
			'@stylistic/js/space-before-function-paren': [2, 'never'],
			'@stylistic/js/space-in-parens': [2, 'never'],
			'@stylistic/js/block-spacing': [2, 'always'],
			'@stylistic/js/no-mixed-spaces-and-tabs': [2, 'smart-tabs'],

			'@stylistic/js/no-trailing-spaces': [2,
				{
					ignoreComments: true,
				}],

			'@stylistic/js/spaced-comment': [2, 'always'],
			'@stylistic/js/object-curly-spacing': [2, 'always'],

			'@stylistic/js/comma-spacing': [2,
				{
					before: false, after: true,
				}],

			'@stylistic/js/no-multi-spaces': [2,
				{
					ignoreEOLComments: true,

					exceptions: {
						Property: false,
					},
				}],

			'@stylistic/js/space-infix-ops': [2,
				{
					int32Hint: false,
				}],

			'@stylistic/js/brace-style': [2,
				'1tbs',
				{
					allowSingleLine: true,
				}],

			'@stylistic/js/computed-property-spacing': [2,
				'never',
				{
					enforceForClassMembers: true,
				}],

			'@stylistic/js/space-unary-ops': [2,
				{
					words: true,
					nonwords: false,
				}],

			'@stylistic/js/dot-location': [2, 'property'],
			'@stylistic/js/array-element-newline': [2,
				{
					ArrayExpression: {
						consistent: true, multiline: true,
					},
					ArrayPattern: 'never',
				}],
			'@stylistic/js/arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
			'@stylistic/js/array-bracket-spacing': [2, 'never'],
			'@stylistic/js/array-bracket-newline': [2, 'consistent'],
			'@stylistic/js/no-multiple-empty-lines': [2,
				{
					max: 1,
					maxBOF: 0,
					maxEOF: 1,
				}],

			'@stylistic/js/key-spacing': [2,
				{
					beforeColon: false,
					afterColon: true,
					mode: 'strict',
				}],

			'@stylistic/js/object-curly-newline': [2,
				{
					ObjectExpression: {
						multiline: true,
						consistent: true,
						minProperties: 3,
					},

					ObjectPattern: {
						multiline: true,
						consistent: true,
						minProperties: 3,
					},

					ImportDeclaration: {
						multiline: true,
						consistent: true,
						minProperties: 5,
					},

					ExportDeclaration: {
						multiline: true,
						consistent: true,
						minProperties: 3,
					},
				}],
			'@stylistic/js/eol-last': [2, 'always'],
			'@stylistic/js/function-call-spacing': [2, 'never'],
			'@stylistic/js/function-call-argument-newline': [2, 'never'],
			'@stylistic/js/comma-style': [2, 'last'],
			'@stylistic/js/comma-dangle': [2, 'always-multiline'],
			'@stylistic/js/arrow-spacing': [2, { before: false, after: true }],
			'@stylistic/js/function-paren-newline': [2, 'never'],
			'@stylistic/js/generator-star-spacing': [2,
				{
					before: true,
					after: false,
					anonymous: { before: true, after: false },
					named: { before: true, after: false },
					method: { before: true, after: false },
				}],
			'@stylistic/js/implicit-arrow-linebreak': [2, 'beside'],
			'@stylistic/js/newline-per-chained-call': [2, { ignoreChainWithDepth: 3 }],
			'@stylistic/js/new-parens': [2, 'always'],
			'@stylistic/js/multiline-ternary': [2, 'always-multiline'],
			'@stylistic/js/multiline-comment-style': 0,
			'@stylistic/js/max-statements-per-line': [2, { max: 3 }],
			'@stylistic/js/line-comment-position': [2, { position: 'above' }],
			'@stylistic/js/linebreak-style': 0,
			'@stylistic/js/nonblock-statement-body-position': [1],

			// here, need to ignore in comments
			// '@stylistic/js/no-tabs': [1, { allowIndentationTabs: true }],
			'@stylistic/js/no-tabs': 0,
			'@stylistic/js/no-extra-semi': [2],
			'@stylistic/js/no-floating-decimal': [1],
			'@stylistic/js/no-confusing-arrow': [2],
			'@stylistic/js/yield-star-spacing': [2, { before: true, after: false }],
			'@stylistic/js/one-var-declaration-per-line': [2, 'always'],
			'@stylistic/js/wrap-regex': [2],
			'@stylistic/js/wrap-iife': [2, 'inside', { functionPrototypeMethods: true }],
			'@stylistic/js/template-tag-spacing': [2, 'never'],
			'@stylistic/js/template-curly-spacing': [2, 'never'],
			'@stylistic/js/switch-colon-spacing': [2, { after: true, before: false }],
			'@stylistic/js/rest-spread-spacing': [2, 'never'],
			'@stylistic/js/semi-style': 0,
			'@stylistic/js/padding-line-between-statements': 0,
			'@stylistic/js/padded-blocks': [2,
				{
					blocks: 'never', classes: 'always', switches: 'never',
				}],
			'@stylistic/js/operator-linebreak': [2, 'none'],
			'@stylistic/js/object-property-newline': [2, { allowAllPropertiesOnSameLine: true }],
			'@stylistic/js/lines-between-class-members': [2, 'always'],
			'@stylistic/js/jsx-quotes': [2, 'prefer-single'],
			'@stylistic/js/keyword-spacing': 0,
			'@stylistic/js/no-extra-parens': [2, 'all', { nestedBinaryExpressions: true }],
			'@stylistic/js/no-mixed-operators': [1,
				{
					groups: [
						['+', '-', '*', '/', '%', '**'],
						['&', '|', '^', '~', '<<', '>>', '>>>'],
						['==', '!=', '===', '!==', '>', '>=', '<', '<='],
						['&&', '||'],
						['in', 'instanceof'],
					],
					allowSamePrecedence: true,
				}],

		},
	},

]
