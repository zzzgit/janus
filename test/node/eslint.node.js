import js from '../../js.js'
import node from '../../node.js'
import globals from 'globals'

export default [
	...js,
	...node,
].map(config=> ({
	...config,
	languageOptions: {
		globals: globals.node,
	},
	files: ['test/node/**/*.cjs'],

}))
