const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const BUILD = path.resolve(__dirname, '../dist');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-souce-map',
	devServer: {
		contentBase: BUILD,
		proxy: {
			'/api': 'http://localhost:8000',
		},
	},
	output: {
		path: BUILD,
	},
	devtool: 'source-map',
});
