module.exports = {
  'testTimeout': 60 * 1000,
  'transform': {
    '.(ts|tsx)': 'ts-jest'
  },
  'collectCoverageFrom': [
    'src/**/*.ts'
  ],
  'transformIgnorePatterns': [
    '/tests/resources',
    '/node_modules/'
  ],
  'coveragePathIgnorePatterns': [
    '/tests/',
    '/node_modules/',
    '/src/cli',
    '/src/generator'
  ],
  'testEnvironment': 'node',
  'testRegex': 'tests/.*\\.spec\\.ts$',
  'moduleFileExtensions': [
    'ts',
    'js',
    'json'
  ]
};
