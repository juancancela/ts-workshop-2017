const root = require('app-root-path').path;

module.exports = {
    entry: `${root}/src/start.ts`,
    target: 'node',
    externals: [
        /^[a-z\-0-9]+$/ // Ignore node_modules folder
    ],
    output: {
        filename: 'app.js',
        path: `${root}/build`,
        libraryTarget: "commonjs"
    },
    resolve: {
        // Add in `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
    },
    resolveLoader: {
        root: [`${root}/node_modules`]
    },
    module: {
        loaders: [{
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            test: /\.tsx?$/,
            exclude: 'node_modules',
            loader: 'ts-loader'
        }]
    },
    devtool: '#source-map'
};