module.exports = {
	extends: [
		'../../ts.js', '../../node.js'
	],
	parser: '@typescript-eslint/parser', // should be already existing
	parserOptions: { // add this object
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
	},
	rules: {
	},
}
