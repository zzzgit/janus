const jsify = (configs, info)=> {
	return configs.map((config)=> {
		let files = config.files
		if (files == null){
			files = []
		}
		if (!Array.isArray(files)){
			files = [files]
		}
		files.push('**/*.js')
		files.push('**/*.jsx')
		files.push('**/*.mjs')
		if(info?.files){
			let infoFiles = info.files
			if(!Array.isArray(infoFiles)){
				infoFiles = [infoFiles]
			}
			files = [...files, ...infoFiles]
		}
		let ignores = config.ignores
		if (ignores == null){
			ignores = []
		}
		if (!Array.isArray(ignores)){
			ignores = [ignores]
		}
		ignores.push('**/*.ts')
		ignores.push('**/*.tsx')
		if(info?.ignores){
			let infoIgnores = info.ignores
			if(!Array.isArray(infoIgnores)){
				infoIgnores = [infoIgnores]
			}
			ignores = [...ignores, ...infoIgnores]
		}
		return {
			...config, files, ignores,
		}
	})
}
const tsify = (configs, info)=> {
	return configs.map((config)=> {
		let files = config.files
		if (files == null){
			files = []
		}
		if (!Array.isArray(files)){
			files = [files]
		}
		files.push('**/*.ts', '**/*.tsx')
		if(info?.files){
			let infoFiles = info.files
			if(!Array.isArray(infoFiles)){
				infoFiles = [infoFiles]
			}
			files = [...files, ...infoFiles]
		}
		let ignores = config.ignores
		if (ignores == null){
			ignores = []
		}
		if (!Array.isArray(ignores)){
			ignores = [ignores]
		}
		ignores.push('**/*.js', '**/*.jsx')
		if(info?.ignores){
			let infoIgnores = info.ignores
			if(!Array.isArray(infoIgnores)){
				infoIgnores = [infoIgnores]
			}
			ignores = [...ignores, ...infoIgnores]
		}
		return {
			...config, files, ignores,
		}
	})
}

export { jsify, tsify }
