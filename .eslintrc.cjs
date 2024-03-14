/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    // https://eslint.vuejs.org/rules/
    'plugin:vue/vue3-recommended',
    // https://eslint.org/docs/latest/rules/
    'eslint:recommended',
    // https://github.com/prettier/eslint-plugin-prettier
    'plugin:prettier/recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
};
