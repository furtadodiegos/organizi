module.exports = {
    preset: 'react-native',
    setupFiles: ['./src/configs/__tests__/setup.ts'],
    modulePathIgnorePatterns: ['<rootDir>/src/configs/'],
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
    clearMocks: true,
    transformIgnorePatterns: ['node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts, tsx, js, jsx}'],
    coverageDirectory: '__coverage__',
};
