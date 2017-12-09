var path = require('path');

module.exports = {
  entry: {
    entry: './src/js/index.js'
  },
  output: {
    filename: 'index_bundle.js',
    path: path.resolve(__dirname, 'dist/js')
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src/js')
      ],
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    },{
        test : /\.css$/,
        use : [
            'style-loader','css-loader'
        ]
    }]
  },
  devtool: 'source-map'
};