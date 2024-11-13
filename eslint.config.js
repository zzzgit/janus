import js from './test/js/eslint.js.js'
import css from './test/jsx/eslint.css.js'
import react from './test/jsx/eslint.jsx.js'
import node from './test/node/eslint.node.js'
import ts from './test/ts/eslint.ts.js'

export default [...js, ...react, ...css, ...node, ...ts]
// export default [...jsify(js), ...jsify(react), ...jsify(css), ...jsify(node), ...tsify(ts)]
