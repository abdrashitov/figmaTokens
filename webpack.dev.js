const path = require('path');
console.log('STARTING LOCALHOST SERVER...')

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle-[contenthash].js',
    publicPath: process.env.PUBLIC_URL
  },
  devtool: 'source-map',
  performance: {
    hints: false
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.(svg)([\?]?.*)$/,
        use: [
          {
            loader: 'file-loader?name=static/images/[name].[ext]'
          }
        ]
      },
      {
        test: /\.(png)([\?]?.*)$/,
        use: [
          {
            loader: 'file-loader?name=static/images/[name].[ext]'
          }
        ]
      }
    ]
  },
  devServer: {
    compress: false,
    port: '80',
    open: {
      target: ['/'],
      app: {
        name: 'firefox',
        //arguments: ['--incognito', '--new-window'],
      },
    },
    historyApiFallback: true,
    hot: true
  }
};