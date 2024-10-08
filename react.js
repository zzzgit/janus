import js from './js.js'
import browser from './browser.js'
import react from 'eslint-plugin-react'

const reactPlugin = react

export default [
	...js,
	...browser,
	reactPlugin.configs.flat.recommended,
	reactPlugin.configs.flat['jsx-runtime'],
	{
		plugins: {
			react,
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		rules: {
			'react/checked-requires-onchange-or-readonly': 2,
			'react/default-props-match-prop-types': [2, { allowRequiredDefaults: true }],
			'react/jsx-child-element-spacing': 'off',
			'react/jsx-equals-spacing': [2, 'never'],
			'react/jsx-curly-newline': [2, { multiline: 'consistent', singleline: 'consistent' }],
			'react/destructuring-assignment': [2, 'never'],
			'react/jsx-one-expression-per-line': [2, { allow: 'literal' }],
			'react/jsx-no-useless-fragment': 2,
			'react/jsx-newline': [2, { prevent: true }],
			'react/jsx-no-undef': 2,
			'react/jsx-no-target-blank': 2,
			'react/jsx-no-leaked-render': 0,
			'react/jsx-no-duplicate-props': 2,
			'react/jsx-indent-props': [2, 'tab'],
			'react/jsx-uses-vars': 2,
			'react/jsx-indent': [2, 'tab'],
			'react/jsx-no-constructed-context-values': 2,
			'react/jsx-no-script-url': 2,
			'react/jsx-curly-spacing': [2, { when: 'never' }],
			'react/jsx-handler-names': 2,
			'react/jsx-pascal-case': 2,
			'react/no-danger-with-children': 2,
			'react/jsx-wrap-multilines': [2,
				{
					declaration: 'parens-new-line',
					assignment: 'parens-new-line',
					return: 'parens-new-line',
					arrow: 'parens-new-line',
					condition: 'parens-new-line',
					logical: 'parens-new-line',
					prop: 'ignore',
				}],
			'react/no-access-state-in-setstate': 2,
			'react/no-string-refs': 2,
			'react/no-this-in-sfc': 2,
			'react/no-typos': 2,
			'react/no-find-dom-node': 2,
			'react/no-invalid-html-attribute': 2,
			'react/no-direct-mutation-state': 2,
			'react/no-did-update-set-state': 2,
			'react/no-did-mount-set-state': 2,
			'react/no-will-update-set-state': 2,
			'react/no-unused-state': 2,
			'react/no-unused-prop-types': 2,
			'react/no-unused-class-component-methods': 2,
			'react/sort-default-props': 2,
			'react/void-dom-elements-no-children': 2,
			'react/sort-prop-types': 2,
			'react/state-in-constructor': [2, 'always'],
			'react/no-unstable-nested-components': 2,
			'react/no-unsafe': 2,
			'react/style-prop-object': 2,
			'react/no-unknown-property': 2,
			'react/sort-comp': 2,
			'react/self-closing-comp': 2,
			'react/no-unescaped-entities': 2,
			'react/require-optimization': 2,
			'react/require-render-return': 2,
			'react/prefer-es6-class': 2,
			'react/static-property-placement': 2,
			'react/prop-types': 2,
			'react/prefer-exact-props': 2,
			'react/prefer-read-only-props': 2,
			'react/prefer-stateless-function': 2,
			'react/no-set-state': 2,
			'react/no-render-return-value': 2,
			'react/no-redundant-should-component-update': 2,
			'react/no-namespace': 2,
			'react/no-multi-comp': 2,
			'react/no-is-mounted': 2,
			'react/no-danger': 2,
			'react/no-array-index-key': 1,
			'react/no-adjacent-inline-elements': 2,
			'react/no-children-prop': 2,
			'react/no-arrow-function-lifecycle': 2,
			'react/jsx-filename-extension': [1, { allow: 'as-needed' }],
			'react/jsx-sort-props': 2,
			'react/jsx-fragments': [2, 'syntax'],
			'react/jsx-max-props-per-line': [2, { maximum: 4 }],
			'react/jsx-key': 2,
			'react/jsx-first-prop-new-line': 2,
			'react/jsx-props-no-multi-spaces': 2,
			'react/jsx-tag-spacing': [
				2,
				{
					closingSlash: 'never',
					beforeSelfClosing: 'always',
					afterOpening: 'never',
					beforeClosing: 'never',
				},
			],
			'react/button-has-type': [2,
				{
					button: true, submit: true, reset: true,
				}],
			'react/jsx-closing-tag-location': [2, 'tag-aligned'],
			'react/jsx-curly-brace-presence': [
				2,
				{
					propElementValues: 'always', props: 'ignore', children: 'ignore',
				},
			],
			'react/jsx-closing-bracket-location': [2],
			'react/jsx-boolean-value': [2, 'never'],
			'react/hook-use-state': [2, { allowDestructuredState: true }],
			'react/function-component-definition': 0,
			'react/forbid-prop-types': 0,
			'react/iframe-missing-sandbox': [2],
			'react/forbid-dom-props': [2],
		},
	},

]
