module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  ignoreFiles: ['**/node_modules/**', '.next/', 'lib/prism/**'],
  rules: {
    'function-no-unknown': null,
    'at-rule-no-unknown': null,
  },
};
