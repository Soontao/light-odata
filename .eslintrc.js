module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
    'jest': true
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
    'ecmaFeatures': {
      'impliedStrict': true,
      'objectLiteralDuplicateProperties': false
    }
  },
  'rules': {
    'array-bracket-spacing': ['error', 'never'],

    'camelcase': ['error', {
      'properties': 'never'
    }],

    '@typescript-eslint/ban-ts-comment': [0],
    '@typescript-eslint/no-explicit-any': [0],
    '@typescript-eslint/explicit-module-boundary-types': [0],

    'comma-dangle': ['error', 'never'],

    'curly': ['error', 'all'],

    'eol-last': ['error'],

    'indent': ['error', 2, {
      'SwitchCase': 1
    }],

    'keyword-spacing': ['error'],

    'max-len': ['error', {
      'code': 180,
      'ignoreComments': true,
      'ignoreRegExpLiterals': true
    }],


    'no-else-return': ['error'],

    'no-mixed-spaces-and-tabs': ['error'],

    'no-multiple-empty-lines': ['error'],

    'no-spaced-func': ['error'],

    'no-trailing-spaces': ['error'],

    'no-undef': ['error'],

    'no-unexpected-multiline': ['error'],

    'no-unused-vars': ['error', {
      'args': 'none',
      'vars': 'all'
    }],

    'quotes': ['error', 'single', {
      'allowTemplateLiterals': true,
      'avoidEscape': true
    }],

    'semi': ['error'],

    'space-before-blocks': ['error', 'always'],

    'space-before-function-paren': ['error', 'never'],

    'space-in-parens': ['error', 'never'],

    'space-unary-ops': ['error', {
      'nonwords': false,
      'overrides': {}
    }],

    // 'valid-jsdoc': ['error']

    // ECMAScript 6 rules

    'arrow-body-style': ['error', 'as-needed', {
      'requireReturnForObjectLiteral': false
    }],

    'arrow-parens': ['error', 'always'],

    'arrow-spacing': ['error', {
      'after': true,
      'before': true
    }],

    'no-class-assign': ['error'],

    'no-const-assign': ['error'],

    'no-duplicate-imports': ['error'],

    'no-new-symbol': ['error'],

    'no-useless-rename': ['error'],

    'no-var': ['error'],

    'object-shorthand': ['error', 'always', {
      'avoidQuotes': true,
      'ignoreConstructors': false
    }],

    'prefer-arrow-callback': ['error', {
      'allowNamedFunctions': false,
      'allowUnboundThis': true
    }],

    'prefer-const': ['error'],

    'prefer-rest-params': ['error'],

    'prefer-template': ['error'],

    'template-curly-spacing': ['error', 'never']
  }
};
