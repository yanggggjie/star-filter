module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],

    // 宽松的配置
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-empty-pattern": "off",
    "no-unused-vars": "off",
    // 箭头函数始终使用完整的return
    "arrow-parens": ["error", "always"],
    "arrow-body-style": ["error", "always"]
    // 箭头函数始终使用完整的return
  },
}
