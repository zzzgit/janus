import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'
import js from './js.js'

export default defineConfig(...js, tseslint.configs.recommendedTypeChecked, {
	rules: {
		'@typescript-eslint/restrict-template-expressions': 0,
	},
})
