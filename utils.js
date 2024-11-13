const jsify = (configs, {ignores, files})=> {
	return configs.map((config)=> {
		let filesResult = config.files
		if (filesResult == null){
			filesResult = []
		}
		if (!Array.isArray(filesResult)){
			filesResult = [filesResult]
		}
		filesResult.push('**/*.js')
		if(files){
			if(!Array.isArray(files)){
				files = [files]
			}
			filesResult = filesResult.concat(files)
		}
		let ignoresResults = config.ignores
		if (ignoresResults == null){
			ignoresResults = []
		}
		if (!Array.isArray(ignoresResults)){
			ignoresResults = [ignoresResults]
		}
		ignoresResults.push('**/*.ts')
		if(ignores){
			if(!Array.isArray(ignores)){
				ignores = [ignores]
			}
			ignoresResults = ignoresResults.concat(ignores)
		}
		return {...config, files: filesResult, ignores: ignoresResult}
	})
}

const tsify = (configs, {ignores, files})=> {
	return configs.map((config)=> {
		let filesResult = config.files
		if (filesResult == null){
			filesResult = []
		}
		if (!Array.isArray(filesResult)){
			filesResult = [filesResult]
		}
		filesResult.push('**/*.ts')
		if(files){
			if(!Array.isArray(files)){
				files = [files]
			}
			filesResult = filesResult.concat(files)
		}
		let ignoresResults = config.ignores
		if (ignoresResults == null){
			ignoresResults = []
		}
		if (!Array.isArray(ignoresResults)){
			ignoresResults = [ignoresResults]
		}
		ignoresResults.push('**/*.js')
		if(ignores){
			if(!Array.isArray(ignores)){
				ignores = [ignores]
			}
			ignoresResults = ignoresResults.concat(ignores)
		}
		return {...config, files: filesResult, ignores: ignoresResult}
	})
}
export { jsify, tsify }
