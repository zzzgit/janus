import stylisticJs from '@stylistic/eslint-plugin'

export default [
	{
		name: 'janus/stylistic/js',
		plugins: {
			'@stylistic': stylisticJs,
		},
		rules: {

			'@stylistic/indent': [2, 'tab'],

			'@stylistic/semi-spacing': [2,
				{
					before: false,
					after: true,
				}],

			'@stylistic/semi': [2, 'never'],
			'@stylistic/quotes': [2, 'single'],
			'@stylistic/quote-props': [2, 'as-needed'],
			'@stylistic/no-whitespace-before-property': [2],
			'@stylistic/space-before-blocks': [2, 'never'],
			'@stylistic/space-before-function-paren': [2, 'never'],
			'@stylistic/space-in-parens': [2, 'never'],
			'@stylistic/block-spacing': [2, 'always'],
			'@stylistic/no-mixed-spaces-and-tabs': [2, 'smart-tabs'],

			'@stylistic/no-trailing-spaces': [2,
				{
					ignoreComments: true,
				}],

			'@stylistic/spaced-comment': [2, 'always'],
			'@stylistic/object-curly-spacing': [2, 'always'],

			'@stylistic/comma-spacing': [2,
				{
					before: false, after: true,
				}],

			'@stylistic/no-multi-spaces': [2,
				{
					ignoreEOLComments: true,

					exceptions: {
						Property: false,
					},
				}],

			'@stylistic/space-infix-ops': [2,
				{
					int32Hint: false,
				}],

			'@stylistic/brace-style': [2,
				'1tbs',
				{
					allowSingleLine: true,
				}],

			'@stylistic/computed-property-spacing': [2,
				'never',
				{
					enforceForClassMembers: true,
				}],

			'@stylistic/space-unary-ops': [2,
				{
					words: true,
					nonwords: false,
				}],

			'@stylistic/dot-location': [2, 'property'],
			'@stylistic/array-element-newline': [2,
				{
					ArrayExpression: {
						consistent: true, multiline: true,
					},
					ArrayPattern: 'never',
				}],
			'@stylistic/arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
			'@stylistic/array-bracket-spacing': [2, 'never'],
			'@stylistic/array-bracket-newline': [2, 'consistent'],
			'@stylistic/no-multiple-empty-lines': [2,
				{
					max: 1,
					maxBOF: 0,
					maxEOF: 1,
				}],

			'@stylistic/key-spacing': [2,
				{
					beforeColon: false,
					afterColon: true,
					mode: 'strict',
				}],

			'@stylistic/object-curly-newline': [2,
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
			'@stylistic/eol-last': [2, 'always'],
			'@stylistic/function-call-spacing': [2, 'never'],
			'@stylistic/function-call-argument-newline': [2, 'never'],
			'@stylistic/comma-style': [2, 'last'],
			'@stylistic/comma-dangle': [2, 'always-multiline'],
			'@stylistic/arrow-spacing': [2, { before: false, after: true }],
			'@stylistic/function-paren-newline': [2, 'never'],
			'@stylistic/generator-star-spacing': [2,
				{
					before: true,
					after: false,
					anonymous: { before: true, after: false },
					named: { before: true, after: false },
					method: { before: true, after: false },
				}],
			'@stylistic/implicit-arrow-linebreak': [2, 'beside'],
			'@stylistic/newline-per-chained-call': [2, { ignoreChainWithDepth: 3 }],
			'@stylistic/new-parens': [2, 'always'],
			'@stylistic/multiline-ternary': [2, 'always-multiline'],
			'@stylistic/multiline-comment-style': 0,
			'@stylistic/max-statements-per-line': [2, { max: 3 }],
			'@stylistic/line-comment-position': [2, { position: 'above' }],
			'@stylistic/linebreak-style': 0,
			'@stylistic/nonblock-statement-body-position': [1],

			// here, need to ignore in comments
			// '@stylistic/no-tabs': [1, { allowIndentationTabs: true }],
			'@stylistic/no-tabs': 0,
			'@stylistic/no-extra-semi': [2],
			'@stylistic/no-floating-decimal': [1],
			'@stylistic/no-confusing-arrow': [2],
			'@stylistic/yield-star-spacing': [2, { before: true, after: false }],
			'@stylistic/one-var-declaration-per-line': [2, 'always'],
			'@stylistic/wrap-regex': [2],
			'@stylistic/wrap-iife': [2, 'inside', { functionPrototypeMethods: true }],
			'@stylistic/template-tag-spacing': [2, 'never'],
			'@stylistic/template-curly-spacing': [2, 'never'],
			'@stylistic/switch-colon-spacing': [2, { after: true, before: false }],
			'@stylistic/rest-spread-spacing': [2, 'never'],
			'@stylistic/semi-style': 0,
			'@stylistic/padding-line-between-statements': 0,
			'@stylistic/padded-blocks': [2,
				{
					blocks: 'never', classes: 'always', switches: 'never',
				}],
			'@stylistic/operator-linebreak': [2, 'none'],
			'@stylistic/object-property-newline': [2, { allowAllPropertiesOnSameLine: true }],
			'@stylistic/lines-between-class-members': [2, 'always'],
			'@stylistic/jsx-quotes': [2, 'prefer-single'],
			'@stylistic/keyword-spacing': 0,
			'@stylistic/no-extra-parens': [2, 'all', { nestedBinaryExpressions: true }],
			'@stylistic/no-mixed-operators': [1,
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
