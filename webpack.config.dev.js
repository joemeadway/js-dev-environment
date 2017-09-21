import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true, //enables dubigging info
  devtool: 'inline-source-map', //number of dev tools -> comilation speed vs. quality
  noInfo: false, //display list of files being bundled - noisy command line
  entry: [ //can take array - entry points for application
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web', //target to bundle for (could set to 'node', 'electron' etc.)
  output: { //where should bundle be created? for dev build, won't create files, run in memory
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
		new HtmlWebpackPlugin({
			template:'src/index.html',
			inject: true
		})
	], //add to webpack - hot reload, linting, etc.
  module: {
    loaders: [ //what file types to handle?
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
