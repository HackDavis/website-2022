module.exports = { 
    parser: 'babel-eslint',
    extends: ['prettier'],
    plugins: ['prettier'],
    rules: { 
        'semi': 'error',
        'comma-dangle': 'error',
        'jsx-a11y/anchor-is-valid': 'off',
        'prettier/prettier': [ 
            'warn',
            {
                usePrettierrc: true,
                endOfLine: 'auto'
            }
        ]
    },
    ignorePatterns: ['*.d.ts']
};