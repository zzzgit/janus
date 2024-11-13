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
		if(info?.files){
			let infoFiles = info.files
			if(!Array.isArray(infoFiles)){
				infoFiles = [infoFiles]
			}
			files = files.concat(infoFiles)
		}
		let ignores = config.ignores
		if (ignores == null){
			ignores = []
		}
		if (!Array.isArray(ignores)){
			ignores = [ignores]
		}
		ignores.push('**/*.ts')
		if(info?.ignores){
			let infoIgnores = info.ignores
			if(!Array.isArray(infoIgnores)){
				infoIgnores = [infoIgnores]
			}
			ignores = ignores.concat(infoIgnores)
		}
		return {...config, files , ignores }
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
		files.push('**/*.ts')
		if(info?.files){
			let infoFiles = info.files
			if(!Array.isArray(infoFiles)){
				infoFiles = [infoFiles]
			}
			files = files.concat(infoFiles)
		}
		let ignores = config.ignores
		if (ignores == null){
			ignores = []
		}
		if (!Array.isArray(ignores)){
			ignores = [ignores]
		}
		ignores.push('**/*.js')
		if(info?.ignores){
			let infoIgnores = info.ignores
			if(!Array.isArray(infoIgnores)){
				infoIgnores = [infoIgnores]
			}
			ignores = ignores.concat(infoIgnores)
		}
		return {...config, files , ignores }
	})
}
 
export { jsify , tsify }
