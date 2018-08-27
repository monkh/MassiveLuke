module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./wwwroot/js/site.ts",
    output: {
        filename: "bundle.js"
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [{
            test: /\.js$/, // include .js files
            enforce: "pre", // preload the jshint loader
            exclude: /node_modules/, // exclude any and all files in the node_modules folder
            use: [{
                loader: "ts-loader",
                options: {
                    camelcase: true,
                    emitErrors: false,
                    failOnHint: false
                }
            }]
        }]
    }
};
