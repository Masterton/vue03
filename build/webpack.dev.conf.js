const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf.js');

module.exports = merge(baseWebpackConfig, {
    // devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    }
});