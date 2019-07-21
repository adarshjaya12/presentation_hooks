 var path = require('path');
 var webpack = require('webpack');

 module.exports =[{
        entry: {
            global: './src/Index.tsx'
        },
        output: {
            filename: 'bundle.js',
            path: __dirname + '/static/'
        },
        devtool: 'source-map',
        resolve: {
            extensions: ['.ts', '.tsx', '.js']
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader'
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    query: {
                        presets: [
                            [
                                'env',
                                {
                                    targets: {
                                        browsers: ['ie >= 11']
                                    }
                                }
                            ]
                        ]
                    }
                }                
            ]
        },
        plugins: [
            new webpack.ProvidePlugin({
                Promise: 'es6-promise'
            })
        ]
}];
