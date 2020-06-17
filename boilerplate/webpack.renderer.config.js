const rules = require('./webpack.rules');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const assets = ["fonts"]

module.exports = {
	// Put your normal webpack config below here
	module: {
		rules,
	},
	resolve: {
		extensions: ['.js', '.jsx', '.css', '.woff'],
	},
	plugins: assets.map(asset => {
		return new CopyWebpackPlugin({
										 patterns : [
											 {
												 from: path.resolve(__dirname, 'static', asset),
												 to: path.resolve(__dirname, '.webpack/renderer', asset)
											 }
											 ]
									 });
	}),
}
