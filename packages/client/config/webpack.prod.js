const path = require('path');
const glob = require('glob');
const { IgnorePlugin } = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const BUILD = path.resolve(__dirname, '../dist');

module.exports = merge(common, {
	mode: 'production',
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
});
