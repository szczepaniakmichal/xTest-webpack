const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 5001;
const PROXY = `http://${HOST}:${PORT}`;

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../', 'build')
  },
  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, '../', 'public'),
    port: 5001,
    // inline: true,
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(sass|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|png|svg|gif|jpeg)$/,
        use: 'file-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            ["@babel/preset-env", { useBuiltIns: 'usage', corejs: "2.0.0" }]
          ],
          plugins: [
            "@babel/plugin-proposal-class-properties"
          ]
        }
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/templates/index.html",
      title: "nowa aplikacja"
    }),
    new BrowserSyncPlugin(
        // BrowserSync options
        {
          host: HOST,
          port: PORT,
          proxy: PROXY
        },
        // plugin options
        {
          // prevent BrowserSync from reloading the page
          // and let Webpack Dev Server take care of this
          reload: true
        }
    ),
  ],
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  }
}
