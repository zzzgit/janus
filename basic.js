module.exports = {
	"parserOptions": {
		"ecmaVersion": "latest",
		// "sourceType": module,
	},
	"env": {
		"es6": true,
	},
	"extends": ['eslint:recommended', "./unicorn", "./array", "./promise"],
	"rules": {
		"indent": ["error", "tab"],
		"linebreak-style": "off",
		"object-curly-spacing": ["error", "never"],
		"array-bracket-spacing": ["error", "never"],
		"quotes": "off",
		"semi": ["error", "never"],
		"no-extra-semi": "error",
		"no-useless-escape": "warn",
		"space-before-function-paren": ["error", {"anonymous": "never", "named": "never", "asyncArrow": "always"}],
		"no-console": "off",
		"camelcase": "off",
		"brace-style": ["error", "1tbs", {"allowSingleLine": true}],
		"no-var": "error",
		"max-len": "off",
		"arrow-parens": ["error", "as-needed", {"requireForBlockBody": true}],
		"no-trailing-spaces": ["error", {"skipBlankLines": false, "ignoreComments": false}],
		"func-call-spacing": ["error", "never"],
		"space-in-parens": ["error", "never"],
		"space-unary-ops": ["error", {"words": true, "nonwords": false}],
		"keyword-spacing": ["error", {"before": true, "after": true}],
		"space-infix-ops": ["error", {"int32Hint": false}],
		"no-multi-spaces": ["error", {"ignoreEOLComments": false, "exceptions": {"Property": false}}],
		"newline-per-chained-call": ["error", {"ignoreChainWithDepth": 2}],
		"no-extra-parens": ["error", "all", {"ignoreJSX": "all"}],
		"comma-spacing": ["error", {"before": false, "after": true}],
		"no-tabs": "off",
		"eol-last": ["error", "always"],
		"lines-between-class-members": ["error", "always"],
		"no-multiple-empty-lines": ["error", {"max": 2, "maxEOF": 1}],
		"no-unused-vars": ["error", {"vars": "all", "args": "after-used", "ignoreRestSiblings": false}],
		"comma-style": ["error", "last"],
		"prefer-destructuring": ["error", {
			"VariableDeclarator": {
				"array": true,
				"object": true,
			},
			"AssignmentExpression": {
				"array": true,
				"object": true,
			},
		},
		{
			"enforceForRenamedProperties": false,
		}],
	},
}
