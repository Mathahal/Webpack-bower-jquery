var webpack = require('webpack'),
    path = require('path'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin');

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
        loader: 'style!css!sass?includePaths[]=' + path.resolve(__dirname, "./node_modules/compass-mixins/lib")
      },
      {
        test: /\.jsx$/,
        exclude: /(application|node_modules|bootstrap|public_html|.git)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.js$/,
        exclude: /(application|node_modules|bootstrap|bower_components|.git)/,
        loader: 'uglify'
      }
    ]
  },
  resolve: {
    root: [ path.join(__dirname, 'bower_components') ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { screw_ie8: true, warnings: false }
    }),
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    ),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:8888/',
      files: ["./*.html", "./assets"]
    },{
      reload: true
    })
  ]
}
