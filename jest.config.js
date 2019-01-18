'use strict';

module.exports = {
  rootDir: __dirname,
  displayName: 'test',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*'],
  moduleNameMapper: {
    '^packages/(.+)': '<rootDir>/packages/$1/src',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'mjs', 'json'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },
};
