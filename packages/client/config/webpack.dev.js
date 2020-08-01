const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const BUILD = path.resolve(__dirname, '../dist');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-souce-map',
	devServer: {
		contentBase: BUILD,
	},
	output: {
		path: BUILD,
	},
	devtool: 'source-map',
});
