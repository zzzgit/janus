import arrayFunc from 'eslint-plugin-array-func'

export default [{
	name: 'janus/array',
	plugins: {
		'array-func': arrayFunc,
	},
	rules: {
		'array-func/from-map': 'error',
		'array-func/no-unnecessary-this-arg': 'error',
		'array-func/prefer-array-from': 'off',
		'array-func/avoid-reverse': 'error',
		'array-func/prefer-flat-map': 'error',
		'array-func/prefer-flat': 'error',
	},
}]
