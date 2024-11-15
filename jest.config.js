module.exports = {
    // Specifies the root of your project
    roots: ["<rootDir>/src", "<rootDir>/tests"],
  
    // Test file extensions
    testMatch: [
      "**/__tests__/**/*.[jt]s?(x)",
      "**/?(*.)+(spec|test).[jt]s?(x)"
    ],
  
    // Specifies the test environment
    testEnvironment: "node", // Use "jsdom" for browser-like environment
  
    // Code coverage configuration
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: ["json", "lcov", "text", "clover"],
  
    // Transpilation settings (e.g., if using TypeScript)
    transform: {
      "^.+\\.tsx?$": "ts-jest", // Use ts-jest for TypeScript
    },
  
    // Modules that need mocking
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy", // For mocking styles
    },
  
    // Path aliases (optional, if used in your project)
    moduleDirectories: ["node_modules", "src"],
  
    // Clear mocks between tests
    clearMocks: true,
  
    // Setup files (if you need to run code before each test)
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Optional
  
    // Watch mode behavior
    watchPlugins: [
      "jest-watch-typeahead/filename",
      "jest-watch-typeahead/testname",
    ],
  };
  