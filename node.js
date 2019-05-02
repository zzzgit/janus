module.exports = {
	"env": {
		"node": true,
		"commonjs": true
	},
	"globals": {
		"Atomics": false,
		"SharedArrayBuffer": false
	},
	"plugins": ["eslint-plugin-node"],
	"rules": {
		"node/no-extraneous-import": "error",
		"node/no-extraneous-require": "error",
		"node/no-missing-import": "off",
		"node/no-missing-require": "off",
		"node/no-unpublished-bin": "error",
		"node/no-unpublished-import": "off",
		"node/no-unpublished-require": "off",
		"node/no-unsupported-features/es-builtins": "error",
		"node/no-unsupported-features/es-syntax": "off",
		"node/no-unsupported-features/node-builtins": "error",
		"node/process-exit-as-throw": "error",
		"node/shebang": "error",
		"node/no-deprecated-api": "error",
		"node/exports-style": "error",
		"node/prefer-global/buffer": "error",
		"node/prefer-global/console": "error",
		"node/prefer-global/process": "error",
		"node/prefer-global/text-decoder": "error",
		"node/prefer-global/text-encoder": "error",
		"node/prefer-global/url-search-params": "error",
		"node/prefer-global/url": "error",
	}
}
