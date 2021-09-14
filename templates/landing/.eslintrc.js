module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', 'import', 'unused-imports', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-constant-condition': 'off',
    'import/no-unresolved': 'off',
    'sort-imports': 0,
    'import/order': [2, { alphabetize: { order: 'asc' } }],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
}
