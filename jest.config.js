module.exports = {
  testPathIgnorePatterns: ["<rootDir>/packages/(?:.+?)/dist/", "<rootDir>/(.*)/node_modules"],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/test/testSetupFile.js"],
  testEnvironment: "jsdom",
};
