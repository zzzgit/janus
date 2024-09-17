import promise from 'eslint-plugin-promise'

export default [{
	plugins: {
		promise,
	},

	rules: {
		'promise/catch-or-return': 'error',
		'promise/no-return-wrap': 'error',
		'promise/param-names': 'error',
		'promise/always-return': 'error',
		'promise/no-native': 'off',
		'promise/no-nesting': 'error',
		'promise/no-promise-in-callback': 'error',
		'promise/no-callback-in-promise': 'error',
		'promise/avoid-new': 'off',
		'promise/no-new-statics': 'error',
		'promise/no-return-in-finally': 'error',
		'promise/valid-params': 'error',
		'promise/prefer-await-to-then': 'off',
		'promise/prefer-await-to-callbacks': 'error',
	},
}]
