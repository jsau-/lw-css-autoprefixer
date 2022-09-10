module.exports = {
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['./src/**/*.+(ts)', '!./src/index.ts'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  errorOnDeprecated: true,
  maxConcurrency: 1,
  preset: 'ts-jest',
  testMatch: [
    '<rootDir>/test/**/?(*.)+(test).+(ts|tsx|js)'
  ],
  transform: {
    '^.+\\.(ts)$': 'ts-jest',
  },
  verbose: true,
};
