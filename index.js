module.exports = {
    extends: ['eslint-config-airbnb'].map(require.resolve),
    parser: 'babel-eslint',
    globals: {
      window: false,
      document: false,
      fetch: false,
      location: false,
    },
    rules: {
      // 这条是 5.0.0 新加的方法
      // 'max-lines-per-function': ['error', { 'max': 50, 'skipBlankLines': true }],
      'max-lines': ['error', { 'max': 200, 'skipComments': true, 'skipBlankLines': true }],
      'no-param-reassign': ['off'],
      'lines-between-class-members': ['off'],
      'comma-dangle': ['error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      }],
  
      'react/jsx-no-target-blank': ['off'],
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
      'react/jsx-key': ['error'],
      'react/jsx-max-depth': ['error', { 'max': 5 }],
      'react/jsx-wrap-multilines': ['error', {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line'
      }],
      'react/prefer-stateless-function': ['off'],
      'react/forbid-prop-types': ['off'],
      'react/require-default-props': ['off'],
      'react/jsx-filename-extension': ['off'],
  
      'jsx-a11y/no-static-element-interactions': ['off'],
  
      'import/no-unresolved': ['off'],
      'import/no-webpack-loader-syntax': ['off'],
    },
  };
  