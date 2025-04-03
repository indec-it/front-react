/* eslint-disable global-require */
process.loadEnvFile();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const fs = require('fs');
const webpack = require('webpack');

const {NODE_ENV, PORT, BASE_URL} = process.env;

const isProduction = NODE_ENV === 'production';

const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          plugins: [!isProduction && require.resolve('react-refresh/babel')].filter(Boolean)
        }
      }
    ]
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader', 'postcss-loader']
  },
  {
    test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
    type: 'asset/resource'
  },
  {
    test: /\.(woff(2)?|eot|ttf|otf)$/,
    type: 'asset/inline'
  }
];

const plugins = [
  new HtmlWebpackPlugin({
    template: 'public/index.html',
    title: require('./package.json').description,
    favicon: 'public/favicon.png',
    hash: true
  }),
  new webpack.DefinePlugin({
    BASE_URL: JSON.stringify(BASE_URL)
  })
];

const buildAlias = () => {
  const alias = {'@root': __dirname};
  const directories = fs.readdirSync(path.resolve(__dirname, 'src'));
  directories.forEach(dir => {
    const directory = path.resolve(__dirname, 'src', dir);
    if (fs.statSync(directory).isDirectory()) {
      alias[`@/${dir}`] = directory;
    }
  });
  return alias;
};

module.exports = () => {
  if (!isProduction) {
    plugins.push(new ReactRefreshWebpackPlugin());
  }
  return {
    devtool: isProduction ? false : 'source-map',
    entry: './index.js',
    output: {
      filename: isProduction ? '[name].[contenthash].js' : '[name].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      publicPath: '/'
    },
    plugins,
    resolve: {
      alias: buildAlias()
    },
    module: {rules},
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    devServer: {
      open: true,
      port: PORT,
      compress: true,
      client: {
        overlay: true,
        progress: true
      },
      hot: true,
      historyApiFallback: true
    }
  };
};
