module.exports = {
    // It suggests that a map from ordinary regex to module names that permit to stub out assets with a single module
    moduleNameMapper: {
          "@root(.*)$": "<rootDir>/src/$1"
    },
    modulePaths: ['<rootDir>/src/'],
    "transform": {
      "\\.[jt]sx?$": "babel-jest"
    },
    transformIgnorePatterns: ['node_modules/(?!@callsites)/']
  }