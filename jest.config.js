module.exports = {
  // Use ts-jest preset for TypeScript support
  preset: 'ts-jest',

  // Define the test environment, typically 'node' for backend testing
  testEnvironment: 'node',

  // Enable code coverage collection
  collectCoverage: true,

  // Specify the directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // Specify which files should have coverage information collected
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/index.ts',
  ],

  // Define the coverage thresholds for the project
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },

  // Specify module file extensions for importing
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // Define how different file types should be transformed
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },

  // Specify paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: [],

  // Automatically reset mock state before every test
  resetMocks: true,

  // Automatically restore mock state after every test
  restoreMocks: true,

  // The test match patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
};
