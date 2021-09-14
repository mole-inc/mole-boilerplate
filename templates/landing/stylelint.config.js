module.exports = {
  plugins: ['stylelint-prettier'],
  extends: ['stylelint-prettier/recommended', 'stylelint-config-prettier'],
  ignoreFiles: ['**/node_modules/**'],
  rules: {
    'prettier/prettier': true,
  },
}
