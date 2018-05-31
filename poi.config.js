const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  configureWebpack(config, context) {
    config.plugins.push(new VueLoaderPlugin())
    return config
  },
}
