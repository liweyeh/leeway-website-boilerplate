// jest.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest');
const createJestConfig = nextJest({
	dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	moduleDirectories: ['node_modules', '<rootDir>/'],
	testEnvironment: 'jest-environment-jsdom',
	modulePathIgnorePatterns: [`./cypress/*`],
	snapshotResolver: './snapshotResolver.js',
	moduleNameMapper: {
		'@/(.*)$': ['<rootDir>/$1'],

		'^@const$': ['<rootDir>/constants/index'],
		'^@const/(.*)$': ['<rootDir>/constants/$1'],

		'^@components$': ['<rootDir>/components/index'],
		'^@components/(.*)$': ['<rootDir>/components/$1'],

		'^@specific/(.*)$': ['<rootDir>/components/specific/$1'],
		'^@specific': ['<rootDir>/components/specific/index'],

		'^@general/(.*)$': ['<rootDir>/components/general/$1'],
		'^@general': ['<rootDir>/components/general/index'],

		'^@context/(.*)$': ['<rootDir>/context/$1'],
		'^@context$': ['<rootDir>/context'],

		'^@pages/(.*)$': ['<rootDir>/pages/$1'],

		'^@public$': ['<rootDir>/public/index'],
		'^@public/(.*)$': ['<rootDir>/public/$1'],

		'^@types$': ['<rootDir>/types/index'],
		'^@types/(.*)$': ['<rootDir>/types/$1'],

		'^@utils$': ['<rootDir>/utils/index'],
		'^@utils/(.*)$': ['<rootDir>/utils/$1'],
	},
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
