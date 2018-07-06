//describes everything we want webpack to do to ready them for production

//import webpack
var webpack = require("webpack");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: "dist/assets",
		filename: "bundle.js",
		publicPath: "assets"
	},
	devServer: {  //similar to httpster, but refresh reloads - hot reloading
		inline: true,
		contentBase: './dist',
		port: 3000
	},
	module: {
		loaders: [
			{
				test: /\.js$/, //where to search - all files with.js
				exclude: /(node_modules)/, //dont look in these files
				loader: ["babel-loader"],
				query: {
					presets: ["latest", "stage-0", "react"]
				}
			},
				{
					test: /\.json$/, //where to search - all files with.json
					exclude: /(node_modules)/, //dont look in these files
					loader: "json-loader"
				}
		]
	}
}
