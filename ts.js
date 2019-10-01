module.exports = {
	"parserOptions": {
	},
	"globals": {
	},
	"extends": ["./basic.js"],
	"parser": "@typescript-eslint/parser",
	"plugins": ["@typescript-eslint"],
	"rules": {
		"@typescript-eslint/adjacent-overload-signatures": "error",
		"@typescript-eslint/array-type": "error",
		"@typescript-eslint/await-thenable": "error",
		"@typescript-eslint/ban-types": "error",
		"@typescript-eslint/ban-ts-ignore": "error",
		"@typescript-eslint/camelcase": "off",
		"@typescript-eslint/class-name-casing": "error",
		"@typescript-eslint/explicit-function-return-type": ["error", { "allowExpressions": true }],
		"@typescript-eslint/explicit-member-accessibility": "off",
		"@typescript-eslint/generic-type-naming": "off",
		"@typescript-eslint/indent": "off",
		"@typescript-eslint/interface-name-prefix": "off",
		"@typescript-eslint/member-delimiter-style": ["error", { "multiline": { "delimiter": "none", "requireLast": true }, "singleline": { "delimiter": "semi", "requireLast": false } }],
		"@typescript-eslint/member-naming": "error",
		"@typescript-eslint/member-ordering": "off",
		"@typescript-eslint/no-array-constructor": "error",
		"@typescript-eslint/no-empty-interface": "error",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-extraneous-class": "error",
		"@typescript-eslint/no-for-in-array": "error",
		"@typescript-eslint/no-inferrable-types": "off",
		"@typescript-eslint/no-misused-new": "error",
		"@typescript-eslint/no-namespace": "error",
		"@typescript-eslint/no-non-null-assertion": "error",
		"@typescript-eslint/no-parameter-properties": "error",
		"@typescript-eslint/no-require-imports": "off",
		'@typescript-eslint/no-this-alias': ["error", { allowDestructuring: true }],
		"@typescript-eslint/no-type-alias": ["error", { "allowAliases": "in-unions-and-intersections", "allowCallbacks": "always" }],
		"@typescript-eslint/no-unnecessary-qualifier": "warn",
		"@typescript-eslint/no-unnecessary-type-assertion": "error",
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
		"no-undef": "off",
		"@typescript-eslint/no-use-before-define": "off",
		"@typescript-eslint/no-useless-constructor": "error",
		"@typescript-eslint/no-var-requires": "off",
		"@typescript-eslint/prefer-for-of": "error",
		"@typescript-eslint/prefer-function-type": "error",
		"@typescript-eslint/prefer-namespace-keyword": "error",
		"@typescript-eslint/promise-function-async": "off",
		"@typescript-eslint/restrict-plus-operands": "off",
		"@typescript-eslint/type-annotation-spacing": "off",
		'@typescript-eslint/unbound-method': ["error", { 'ignoreStatic': true }],
		'@typescript-eslint/unified-signatures': "warn",
	}
}
