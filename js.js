import js from '@eslint/js'
import jsStyle from './js.style.js'
import unicorn from './unicorn.js'
import array from './array.js'
import promise from './promise.js'

export default [
	{
		languageOptions: {
			ecmaVersion: 'latest',
		},
	},
	js.configs.recommended,
	...jsStyle,
	...unicorn,
	...array,
	...promise,
	{
		rules: {
			'no-var': 2,

			'no-else-return': [2,
				{
					allowElseIf: true,
				}],

			curly: [2, 'all'],

			'prefer-const': [2,
				{
					destructuring: 'any',
					ignoreReadBeforeAssign: false,
				}],

			'sort-imports': [2,
				{
					ignoreCase: false,
					ignoreDeclarationSort: true,
					ignoreMemberSort: false,
					memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
					allowSeparatedGroups: false,
				}],

			'no-duplicate-imports': [2],
			'no-unmodified-loop-condition': 2,
			'no-unreachable-loop': 2,
			'no-use-before-define': 0,
			'no-useless-assignment': 2,
			'require-atomic-updates': 2,
			'no-template-curly-in-string': 1,
			'no-self-compare': 2,
			'no-promise-executor-return': 2,
			'no-inner-declarations': 2,
			'no-constructor-return': 2,
			'no-await-in-loop': 2,
			'array-callback-return': 2,
			'no-unused-vars': [2,
				{
					vars: 'all',
					args: 'after-used',
					caughtErrors: 'all',
					ignoreRestSiblings: false,
					argsIgnorePattern: '^_',
					reportUsedIgnorePattern: true,
				}],
		},

	},

]
