module.exports = {
	"parserOptions": {
		"ecmaVersion": 2019,
		// "sourceType": module
	},
	"env": {
		"es6": true
	},
	extends: ['eslint:recommended', 'google'],
	rules: {
		"indent": ["error", "tab"],
		"linebreak-style": "off",
		"quotes": "off",
		"semi": ["error", "never"],
		"no-useless-escape": "warn",
		"space-before-function-paren": ["error", { "anonymous": "never", "named": "never", "asyncArrow": "always" }],
		"no-console": "off",
		"camelcase": "off",
		"no-var": "error",
		"max-len": "off",
		"arrow-parens": ["error", "as-needed", {"requireForBlockBody": true}],
		"no-trailing-spaces": ["error", {"skipBlankLines": false, "ignoreComments": true}],
		"require-jsdoc": "off",
		"space-in-parens": ["error", "never"],
		"space-unary-ops": ["error", { "words": true, "nonwords": false }],
		"keyword-spacing": ["error", { "before": true, "after": true }],
		"space-infix-ops": ["error", { "int32Hint": false }],
		"no-multi-spaces": ["error", { "ignoreEOLComments": false, "exceptions": { "Property": false }}],
		"newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2}],
		"no-extra-parens": ["error", "all", { "ignoreJSX": "all"}],
		"no-tabs": "off",
		"eol-last": ["error", "always"],
	}
}
