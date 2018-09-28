// poi.config.js

module.exports = {
  configureWebpack(config, context) {
    config.externals = {
      vue: {
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue',
        root: 'Vue',
      },
    }

    return config
  },
}
