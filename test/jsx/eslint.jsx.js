import react from '../../react.js'

export default [

	...react.map(config=> ({
		...config,

		files: ['test/jsx/**/*.jsx'],

	})),
]
