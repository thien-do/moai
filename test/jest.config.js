/* eslint-env node */

// https://jestjs.io/docs/configuration
module.exports = {
	collectCoverage: true,
	coverageDirectory: "coverage",
	coverageProvider: "v8",
	testEnvironment: "jsdom",
	testMatch: ["**/dist/**/*.test.js?(x)"],
	setupFilesAfterEnv: ["<rootDir>/dist/config/jest-setup.js"],
	resetMocks: true,
	restoreMocks: true,
};
