var path = require('path');
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "production",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    
    module: {
        rules: [
        {
            test: /\.js$/,
            include: path.resolve(__dirname, 'src'),
            exclude: /(node_modules|bower_components|build)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, {
            test: /\.*css$/,
            use : [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.svg/,
            use : '@svgr/webpack'
        }
        ]
    },
    externals: {
        'react': 'commonjs react' 
    }
};

