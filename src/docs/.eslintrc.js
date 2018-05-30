module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['vue'],
  extends: ['@vue/airbnb', 'plugin:vue/essential', 'prettier'],
  rules: {
    semi: 'off',
    'linebreak-style': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
