module.exports = {
	// "extends": [],
	"plugins": ['@stylistic/js'],
	"rules": {
		"prefer-const": ["error", {
			"destructuring": "any",
			"ignoreReadBeforeAssign": false
		}]
	},
}
