var webpack = require('webpack'),
    path = require('path')

module.exports = {
  entry: {
    entry: path.join( __dirname, './assets/entry.js' )
  },
  output: {
    path: path.join( __dirname, './build/' ),
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.sass$/,
        exclude: /(application|node_modules|bootstrap|public_html|.git)/,
        loader: 'style!css!sass'
      },
      {
        test: /\.jsx$/,
        exclude: /(application|node_modules|bootstrap|public_html|.git)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    root: [ path.join(__dirname, 'bower_components') ]
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    )
  ]
}
