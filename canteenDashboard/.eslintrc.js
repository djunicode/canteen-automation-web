module.exports = {
  env: {
      browser: true,
      es6: true,
  },
  extends: 'airbnb',
  globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
  },
  settings: {
      'import/resolver': {
            node: {
                paths: ["src",],
            },
      },
  },
  parser: "babel-eslint",
  parserOptions: {
      ecmaFeatures: {
          jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
  },
  plugins: [
      'react',
      'import'
  ],
  rules: {
      "react/jsx-closing-bracket-location": 0,
      "react/jsx-first-prop-new-line": 0,
      "react/jsx-max-props-per-line": 0,
      "react/jsx-one-expression-per-line": 0,
      "react/jsx-indent": 0,
      "react/destructuring-assignment": 0,
      "react/prefer-stateless-function": 0,
      "react/sort-comp": 0,
      "react/self-closing-comp": 0,
      "react/no-array-index-key": 0,
      "react/forbid-prop-types": 0,
      "arrow-body-style": 0,
      "quote-props": 0,
      "max-len": 0,
      "camelcase": 0,
      "spaced-comment": 0,
      "consistent-return": 0,
      "no-console": 0,
      "no-unused-vars": 1,
      "import/prefer-default-export": 0,
      "import/order": 0,
  },
};
