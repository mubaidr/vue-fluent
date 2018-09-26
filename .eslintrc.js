module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  plugins: ['vue'],
  extends: ['standard', 'plugin:vue/recommended', 'prettier'],
  rules: {
    'linebreak-style': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': 'off',
    'vue/no-reserved-keys': 'off',
    semi: 'off',
    'comma-dangle': 'off',
    'vue/require-default-prop': 'off',
  },
  globals: {
    document: true,
    window: true,
    chrome: true,
    Vue: true,
  },
}
