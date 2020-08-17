const webpack = require("webpack");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        game: "./src/client/game.ts"
    },
    output: {
      path: path.resolve(__dirname, "public/js"),
      filename: "[name].js"
    },
    resolve: {
      extensions: [".ts", ".js"],
      modules: [path.resolve(__dirname, "src"), "node_modules"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
        })
    ]
};