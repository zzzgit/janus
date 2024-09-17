import css from 'eslint-plugin-css'

export default [
	css.configs['flat/recommended'],
	{
		name: 'css.js/rules',
		plugins: {
			css,
		},
		rules: {
			'css/no-dupe-properties': 2,
			'css/no-shorthand-property-overrides': 2,
			'css/no-unknown-property': 2,
			'css/no-unknown-unit': 2,
			'css/no-invalid-color-hex': 2,
			'css/no-length-zero-unit': [2],
			'css/no-useless-color-alpha': 2,
			'css/prefer-reduce-shorthand-property-box-values': 2,
			'css/named-color': [2, 'always'],
			'css/color-hex-style': [2, 'RRGGBB'],
			'css/no-number-trailing-zeros': 2,
			'css/number-leading-zero': [2, 'never'],
			'css/property-casing': [2, 'camelCase'],
		},
	},
]
