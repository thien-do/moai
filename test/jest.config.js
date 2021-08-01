/* eslint-env node */

// https://jestjs.io/docs/configuration
module.exports = {
	preset: "ts-jest",
	collectCoverage: true,
	coverageDirectory: "coverage",
	coverageProvider: "v8",
	testEnvironment: "jsdom",
	testMatch: ["**/*.ts?(x)"],
	testPathIgnorePatterns: [
		"/node_modules/",
		"<rootDir>/src/config/",
		".utils.tsx?$",
	],
	setupFilesAfterEnv: ["<rootDir>/src/config/jest-setup.ts"],
	resetMocks: true,
	restoreMocks: true,
};
