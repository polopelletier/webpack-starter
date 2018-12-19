const Path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const entriesJSON = require("../config/entries.json");

// TODO: Lodash
const entries = {};
Object.keys(entriesJSON).forEach(function(key) {
	entries[key] = Path.resolve(process.cwd(), entriesJSON[key].filename);
});

module.exports = {
	entry: entries,
	output: {
		path: Path.join(__dirname, "../build"),
		filename: "js/[name].js",
		chunkFilename: "js/[name].chunk.js"
	},
	optimization: {
		splitChunks: {
			chunks: "all",
			name: false
		}
	},
	plugins: [
		new CleanWebpackPlugin(["build"], { root: Path.resolve(__dirname, "..") }),
		new CopyWebpackPlugin([
			{ from: Path.resolve(__dirname, "../public"), to: "public" }
		])
	],
	resolve: {
		alias: {
			"~": Path.resolve(__dirname, "../src/client")
		}
	},
	module: {
		rules: [
			{
				test: /\.mjs$/,
				include: /node_modules/,
				type: "javascript/auto"
			},
			{
				test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
						useRelativePath: true
					}
				}
			},
		]
	}
};