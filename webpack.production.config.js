var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');

module.exports = {
	entry: [
		'./index.jsx' // Your appʼs entry point
	],
	output: {
		path: path.join(__dirname, 'example'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: loaders
	}
};