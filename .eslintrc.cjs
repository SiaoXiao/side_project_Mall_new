module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard', 'plugin:vue/vue3-essential', 'prettier', './.eslintrc-auto-import.json'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: [
          'Modal',
          'index',
          'Breadcrumbs',
          'Loading',
          'Table',
          'about',
          '[...all]',
          'finish',
          'delivery',
          'private',
          'chiffon',
          'cupcake',
          'goods',
          'hot',
          'macaron',
          'other',
          'return',
          'like',
          'order',
          'login',
          'discount',
          'homepage'
        ]
      }
    ]
  }
}
