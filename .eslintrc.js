// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  extends: [
    'standard',
    'plugin:vue/recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    //vue-recommended
    'vue/max-attributes-per-line': [2, {
      singleline: 3,
      multiline: {
        max: 3,
        allowFirstLine: true
      }
    }]
  }
}
