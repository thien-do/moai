/* eslint-env node */

// https://jestjs.io/docs/configuration
// eslint-disable-next-line
module.exports = {
	collectCoverage: true,
	coverageDirectory: "coverage",
	coverageProvider: "v8",
	testEnvironment: "jsdom",
	testMatch: ["<rootDir>/src/**/*.test.ts?(x)"],
	setupFilesAfterEnv: ["<rootDir>/src/config/jest-setup.js"],
	resetMocks: true,
	restoreMocks: true,
	transform: {
		"^.+\\.(ts|js|tsx|jsx)$": "@swc/jest",
	},
};
