import js from '../../js.js'
import globals from 'globals'

export default [
	...js,
].map(config=> ({
	...config,
	languageOptions: {
		globals: globals.node,
	},
	files: ['**/*.js'],

}))
