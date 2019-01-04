
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

var config = {
	mode: 'development', 
	entry: './src/index.js',
	output: {
		//path: path.resolve(__dirname, '/dist'),
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js', 
		publicPath: '/'
	},
	devServer: {
		contentBase: __dirname +  '/dist',
		port: 8000
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './index.html',
			filename: './index.html'
		})
	]
};
module.exports = config;

