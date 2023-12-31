module.exports = {
    root: true,
    env: {
        browser: true,
        amd: true,
        node: true,
        es6: true,
    },
    extends: ['next', 'next/core-web-vitals'],
    rules: {
        // 'prettier/prettier': 'error',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 0,
        'no-unused-vars': 0,
        'react/no-unescaped-entities': 0,
    },
}
