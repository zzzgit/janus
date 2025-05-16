// 目前的策略：使用js的stylistic规则，不用ts的stylistic规则

// import stylisticTs from '@stylistic/eslint-plugin-ts'
import tsParser from '@typescript-eslint/parser'
import js from './js.js'
import tseslint from 'typescript-eslint'

// exclude stylistic/js from '@stylistic/eslint-plugin-js'	
// const jsCopy = js.filter(item => item.name !== 'janus/stylistic/js')

export default [
	...js,
	// ...tseslint.configs.stylisticTypeChecked,
	...tseslint.configs.recommendedTypeChecked,
	{
		plugins: {
			// '@stylistic/ts': stylisticTs,
			'@typescript-eslint': tseslint.plugin,
		},
		languageOptions: {
			parser: tsParser,
		},
		rules: {
			'@typescript-eslint/restrict-template-expressions': 0,
		},
	},

]
