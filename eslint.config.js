import js from './test/js/eslint.js.js'
import react from './test/jsx/eslint.jsx.js'
import node from './test/node/eslint.node.js'
import ts from './test/ts/eslint.ts.js'

export default [...js, ...react,  ...node, ...ts]
// export default [...jsify(js), ...jsify(react), ...jsify(node), ...tsify(ts)]
