module.exports = {
  extends: [
    'standard',
    'plugin:react/recommended'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    jsx: true
  },
  ecmaFeatures: {
    modules: true,
    blockBindings: true,
    arrowFunctions: true,
    objectLiteralShorthandMethods: true,
    objectLiteralShorthandProperties: true,
    templateStrings: true
  },
  env: {
    es6: true,
    browser: true,
    node: true
  },
  globals: {
    document: false
  }
}
