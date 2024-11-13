const jsify = (configs)=> {
	return configs.map(config=> ({
		...config,
		files: config.files || ['**/*.js'],
		ignores: config.ignores || ['**/*.ts'],
	}))
}

const tsify = (configs)=> {
	return configs.map(config=> ({
		...config,
		files: config.files || ['**/*.ts'],
		ignores: config.ignores || ['**/*.js'],
	}))
}

export { jsify, tsify }
