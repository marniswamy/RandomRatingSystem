require("babel-register");

module.exports = {
  silent: true,
  testRegex: "DO NOT RUN TESTS GLOBALLY",
  collectCoverageFrom: ["src/**/*.js}", "!src/index.tsx"],
  coverageReporters: ["json", "html", "text"],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  testResultsProcessor: "jest-teamcity-reporter",
  testPathIgnorePatterns: ["<rootDir>/node_modules"],
  projects: ["src"]
};
