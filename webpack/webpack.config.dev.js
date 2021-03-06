const Path = require("path");
const Webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	devtool: "cheap-eval-source-map",
	plugins: [
		new Webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("development")
		})
	],
	module: {
		rules: [
			{
				test: /\.(js)$/,
				include: Path.resolve(__dirname, "../src/client"),
				enforce: "pre",
				loader: "eslint-loader",
				options: {
					emitWarning: true,
				}
			},
			{
				test: /\.(js)$/,
				include: Path.resolve(__dirname, "../src/client"),
				loader: "babel-loader"
			}
		]
	}
});