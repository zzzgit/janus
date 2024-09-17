import js from './test/js/eslint.js.js'
import css from './test/jsx/eslint.css.js'
import react from './test/jsx/eslint.jsx.js'
// import jss from './js.js'
import ts from './test/ts/eslint.ts.js'
import node from './test/node/eslint.node.js'
// import globals from 'globals'

// const generic = jss.map(config=> ({
// 	...config,
// 	languageOptions: {
// 		globals: globals.node,
// 	},
// }))

export default [...js, ...react, ...css, ...ts, ...node]

// console.log([...generic, ...react, ...css, ...ts][2])
