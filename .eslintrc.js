module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: 'prettier',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': 'error',
    'no-unused-expressions': 'off',
    'import/extensions': 'off',
    'default-param-last': 'off',
    'func-names': 'off'
  }
}
