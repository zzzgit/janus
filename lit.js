module.exports = {
	plugins: ['eslint-plugin-lit'],
	rules: {
		'lit/attribute-value-entities': 'error',
		'lit/binding-positions': 'error',
		'lit/no-duplicate-template-bindings': 'error',
		'lit/no-invalid-escape-sequences': 'error',
		'lit/no-invalid-html': 'error',
		'lit/no-legacy-template-syntax': 'error',
		'lit/no-private-properties': 'warn',
		'lit/no-property-change-update': 'error',
		'lit/no-template-arrow': 'error',
		'lit/no-template-bind': 'off',
		'lit/no-template-map': 'warn',
		'lit/no-useless-template-literals': 'error',
		'lit/no-value-attribute': 'error',
	},
}
