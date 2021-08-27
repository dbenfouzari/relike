module.exports = {
  testPathIgnorePatterns: ["<rootDir>/packages/(?:.+?)/dist/", "<rootDir>/(.*)/node_modules"],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/test/testSetupFile.js"],
  testEnvironment: "jsdom",
};
