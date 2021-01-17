module.exports = {
    root: true,
    extends: ['@react-native-community'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', '@typescript-eslint/eslint-plugin', 'react-native', 'detox'],
    rules: {
        // 'no-shadow': 'off',
        // '@typescript-eslint/no-shadow': ['error'],
        // 'no-shadow': ['error', { builtinGlobals: false, hoist: 'functions', allow: [] }],
        // 'no-use-before-define': 'off',
        // 'consistent-return': 'off',
        // 'global-require': 'off',
        // '@typescript-eslint/no-use-before-define': ['off'],
        // '@typescript-eslint/interface-name-prefix': 'off',
        // '@typescript-eslint/explicit-function-return-type': 'off',
        // '@typescript-eslint/no-explicit-any': 'off',
        // 'no-console': 'off', // Remove after the architecture conclusion
        // 'no-prototype-builtins': 'off',
        // 'no-param-reassign': 'off',
        // 'import/no-cycle': 'off',
        // 'react/jsx-props-no-spreading': 'off',
    },
    overrides: [
        {
            files: ['*.e2e.js'],
            env: {
                'detox/detox': true,
                jest: true,
                'jest/globals': true,
            },
        },
    ],
};
