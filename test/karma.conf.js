var postcssImport = require('postcss-import')
var postcssCustomProperties = require('postcss-custom-properties')
var postcssImportantly = require('postcss-importantly')

module.exports = function (config) {
  config.set({
    basePath: '../',
    browsers: [
      'Firefox'
    ],
    files: [
      'test/karma.tests.js'
    ],

    frameworks: [ 'chai', 'mocha' ],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-firefox-launcher',
      'karma-opera-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-webpack'
    ],

    preprocessors: {
      'test/karma.tests.js': [ 'webpack' ]
    },

    reporters: [ 'mocha' ],
    singleRun: true,
    logLevel: config.LOG_INFO,
    webpack: {
      module: {
        loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: /node_modules/,
          query: {
            cacheDirectory: true,
          },
        },
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader!postcss-loader'
          },
          {
            test: /\.json$/,
            loader: 'json'
          }
        ]
      },
      postcss: function () {
        return [
          postcssImport,
          postcssCustomProperties,
          postcssImportantly,
        ]
      }
    },


    webpackMiddleware: {
      noInfo: true
    },

    client: {
      mocha: {
        reporter: 'html',
        ui: 'bdd'
      },
      captureConsole: true,
    }

  })
}

