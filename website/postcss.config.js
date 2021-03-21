module.exports = {
	plugins: {
		'postcss-import': {},
		autoprefixer: {},
		tailwindcss: { config: './tailwindcss-config.js' },
		'postcss-flexbugs-fixes': {},
		'postcss-preset-env': {
			autoprefixer: {
				flexbox: 'no-2009'
			},
			stage: 3,
			features: {
				'custom-properties': false
			}
		}
	}
}
