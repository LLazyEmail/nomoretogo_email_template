/* eslint-disable */
export default {
  displayName: 'write',
  preset: '../../jest.preset.js',
  // preset: "ts-jest",
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.[ts]$': 'ts-jest',
    // '^.+\\.[tj]s$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/packages/write',
};
