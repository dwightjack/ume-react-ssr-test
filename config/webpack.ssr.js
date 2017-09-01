const merge = require('webpack-merge');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const PRODUCTION = process.env.NODE_ENV === 'production';

const paths = require('./paths');
const baseConfig = require('./webpack.base');

const plugins = [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
        __PRODUCTION__: PRODUCTION,
        __SERVER__: true,
        __CLIENT__: false,
        'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }
    }),

    new webpack.NamedModulesPlugin(),
    new webpack.NamedChunksPlugin()
];

const productionPlugins = [
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compressor: {
            warnings: false
        }
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: true
    })
];

module.exports = merge.smartStrategy({
    plugins: 'replace',
    node: 'replace'
})(baseConfig, {
    entry: {
        app: [
            './' + paths.toPath('src.assets/styles') + '/index.js'
        ]
    },

    target: 'node',

    output: {
        libraryTarget: 'commonjs2'
    },

    plugins: [
        ...plugins,
        ...(PRODUCTION ? productionPlugins : [])
    ],

    externals: nodeExternals({
        whitelist: /\.css$/
    }),

    node: {}

});