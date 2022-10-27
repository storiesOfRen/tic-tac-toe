import nextJest from 'next/jest';

const createJestConfig = nextJest({
    dir: './',
});

const customJestConfig = {
    preset: 'ts-jest',
    coverageReporters: ['lcov', 'text-summary', 'text'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: {
        '^@/components/(.*)$': '<rootDir>/components/$1',
        '^@/pages/(.*)$': '<rootDir>/pages/$1',
        '^@/lib/(.*)$': '<rootDir>/lib/$1',
    },
    testEnvironment: 'jest-environment-jsdom',
};

export default createJestConfig(customJestConfig);
