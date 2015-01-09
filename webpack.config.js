module.exports = {
  entry: './browser.js',
  output: {
    path: __dirname,
    filename: 'static/bundle.js'
  },
  module: {
    loaders: [
      // { test: /\.json$/, loader: 'json-loader' },
      { test: /\.jsx$/, loader: 'jsx-loader?harmony' }
    ]
  }
};
