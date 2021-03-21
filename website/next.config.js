const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const path = require('path')

module.exports = {
	trailingSlash: true,
	webpackDevMiddleware: (config) => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300
		}
		return config
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	},
	/**
	 * Custom Webpack Config
	 * we have to remove this config after nextjs handle typing error by itself
	 * https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
	 */
	webpack(config, options) {
		const { dev, isServer } = options

		// Do not run type checking twice:
		if (dev && isServer) {
			config.plugins.push(new ForkTsCheckerWebpackPlugin())
		}

		return config
	}
}
