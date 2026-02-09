module.exports = {
  root: true,
  extends: '@react-native',
  overrides: [
    {
      files: [
        '.eslintrc.js',
        '.prettierrc.js',
        'babel.config.js',
        'jest.config.js',
        'metro.config.js',
        '**/*.config.js',
      ],
      env: { node: true },
    },
    {
      files: [
        '**/__tests__/**/*.{js,jsx,ts,tsx}',
        '**/*.{spec,test}.{js,jsx,ts,tsx}',
      ],
      env: { jest: true },
    },
  ],
};
