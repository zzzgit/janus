import globals from 'globals'

export default [
	{
		name: 'janus/browser',
		languageOptions: {
			globals: {
				...globals.browser,
			},
		},
	},
]
