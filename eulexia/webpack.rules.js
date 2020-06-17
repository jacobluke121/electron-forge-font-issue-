const path = require('path');

module.exports = [
	// Add support for native node modules
	{
		test: /\.node$/,
		use: 'node-loader',
	},
	{
		test: /\.(js|jsx)$/,
		exclude: /(node_modules|.webpack)/,
		loaders: [{
			loader: 'babel-loader'
		}]
	},
	{
		test: /\.css$/,
		use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
	},
	{
		test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
		use: [
			{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'fonts/'
				}
			}
		]
	},
]
