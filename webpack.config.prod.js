import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';


export default {
	debug: true, //enables dubigging info
	devtool: 'source-map', //number of dev tools -> comilation speed vs. quality
	noInfo: false, //display list of files being bundled - noisy command line
	entry: {//can take array - entry points for application
		main: path.resolve(__dirname, 'src/index'),
		vendor:path.resolve(__dirname, 'src/vendor')
	},
	target: 'web', //target to bundle for (could set to 'node', 'electron' etc.)
	output: { //where should bundle be created? for dev build, won't create files, run in memory
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].[chunkhash].js'
	},
	plugins: [
		new ExtractTextPlugin('[name].[contenthash].css'),

		new WebpackMd5Hash(),

		new webpack.optimize.CommonsChunkPlugin({
			name:'vendor'
		}),
		new HtmlWebpackPlugin({
			template:'src/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true
			},
			inject: true,
			trackJSToken:'token'
		}),
		new webpack.optimize.DedupePlugin(), //remove duplicate packages
		new webpack.optimize.UglifyJsPlugin() //minify
	], //add to webpack - hot reload, linting, etc.
	module: {
		loaders: [ //what file types to handle?
			{test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
			{test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
		]
	}
}
