require("babel-register");

module.exports = {
  silent: true,
  setupFiles: ["setupTest.js"],
  testRegex: "DO NOT RUN TESTS GLOBALLY",
  collectCoverageFrom: ["src/**/*.js}"],
  coverageReporters: ["json", "html", "text"],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  transformIgnorePatterns: ["<rootDir>/node_modules"],
  testPathIgnorePatterns: ["<rootDir>/node_modules"],
  projects: ["src"]
};
