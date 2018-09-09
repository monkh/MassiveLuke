const path = require('path');
const DESTINATION = path.resolve(__dirname, './wwwroot/js/');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./wwwroot/js/site.ts",
    output: {
        filename: "site.js",
        path: DESTINATION
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [{
            test: /\.ts$/, // include .js files
            enforce: "pre", // preload the jshint loader
            exclude: /node_modules/, // exclude any and all files in the node_modules folder
            use: [{
                loader: "ts-loader"
            }]
        }]
    }
};
