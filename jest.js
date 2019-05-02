module.exports = {
	"env": {
		jest: true
	},
	"plugins": ["jest"],
	"rules": {
		"jest/consistent-test-it": "off",
		"jest/expect-expect": [
			"error",
			{
				"assertFunctionNames": ["expect"]
			}
		],
		"jest/lowercase-name": "error",
		"jest/no-alias-methods": "error",
		"jest/no-disabled-tests": "off",
		"jest/no-empty-title": "error",
		"jest/no-focused-tests": "off",
		"jest/no-hooks": "off",
		"jest/no-identical-title": "error",
		"jest/no-jasmine-globals": "error",
		"jest/no-jest-import": "error",
		"jest/no-mocks-import": "error",
		"jest/no-large-snapshots": "off",
		"jest/no-test-callback": "error",
		"jest/no-test-prefixes": "error",
		"jest/no-test-return-statement": "off",
		"jest/no-truthy-falsy": "error",
		"jest/prefer-expect-assertions": "off",
		"jest/prefer-spy-on": "error",
		"jest/prefer-strict-equal": "warn",
		"jest/prefer-to-be-null": "error",
		"jest/prefer-to-be-undefined": "error",
		"jest/prefer-to-contain": "error",
		"jest/prefer-to-have-length": "error",
		"jest/prefer-inline-snapshots": "error",
		"jest/require-tothrow-message": "off",
		"jest/valid-describe": "error",
		"jest/valid-expect-in-promise": "error",
		"jest/valid-expect": "error",
		"jest/prefer-todo": "error",
		"jest/prefer-called-with": "error"
	}
}
