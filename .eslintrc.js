module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@wordpress/eslint-plugin/recommended',
    'plugin:eslint-comments/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {}
};
