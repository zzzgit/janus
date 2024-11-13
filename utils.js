const jsify = (configs)=> {
	return configs.map((config)=> {
		const result = { ...config }
		let files = config.files
		if (files == null){
			files = []
		}
		if (!Array.isArray(files)){
			files = [files]
		}
		files.push('**/*.js')
		let ignores = config.ignores
		if (ignores == null){
			ignores = []
		}
		if (!Array.isArray(ignores)){
			ignores = [ignores]
		}
		ignores.push('**/*.ts')
		return result
	})
}

const tsify = (configs)=> {
	return configs.map((config)=> {
		const result = { ...config }
		let files = config.files
		if (files == null){
			files = []
		}
		if (!Array.isArray(files)){
			files = [files]
		}
		files.push('**/*.ts')
		let ignores = config.ignores
		if (ignores == null){
			ignores = []
		}
		if (!Array.isArray(ignores)){
			ignores = [ignores]
		}
		ignores.push('**/*.js')
		return result
	})
}
export { jsify, tsify }
