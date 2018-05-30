module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
    sourceType: 'module',
  },
  plugins: ['vue'],
  extends: ['airbnb', 'plugin:vue/essential', 'prettier'],
  rules: {
    'no-param-reassign': 'off',
    semi: 'off',
    'linebreak-style': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  globals: {
    document: true,
    window: true,
    chrome: true,
    Vue: true,
  },
}
