// https://stylelint.io/user-guide/configure
module.exports = {
  root: true,
  plugins: [
    'stylelint-order', //
    'stylelint-scss',
  ],
  overrides: [
    // 配置此令其 lint vue 文件
    {
      files: '**/*.vue',
      customSyntax: 'postcss-html',
    },
    // 配置此令其 lint scss 文件
    {
      files: '**/*.scss',
      customSyntax: 'postcss-scss',
    },
  ],
  extends: [
    'stylelint-config-standard-scss', //
    'stylelint-config-recess-order',
  ],
  reportDescriptionlessDisables: true,
  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,
  defaultSeverity: 'warning',
  rules: {
    'color-hex-alpha': 'never',
    'function-disallowed-list': ['rgba', 'hsla'],
  },
};
