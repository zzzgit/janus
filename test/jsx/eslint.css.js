import css from '../../css.js'

export default [

	...css.map(config=> ({
		...config,
		files: ['test/jsx/**/*.jsx'],
	})),
]
