import type {Config} from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  preset: "ts-jest",
    testEnvironment: "node",
  transform: {
  "^.+\\.tsx?$": "ts-jest",
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
    roots: ["<rootDir>/src"],
//   // the following line is needed in order to grab modules from the
//   // src folder without the need to write them relatively
  moduleDirectories: ["node_modules", "src"],  
};
export default config;

// transformIgnorePatterns: ['<rootDir>/node_modules/'],

// module.exports = {
//     // It suggests that a map from ordinary regex to module names that permit to stub out assets with a single module
//        moduleNameMapper: {
//           "@root(.*)$": "<rootDir>/src/$1"
//     },
//   }


// module.exports = {
//     preset: "ts-jest",
//     testEnvironment: "node"
//   };

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// module.exports = {
//   preset: "ts-jest",

//   testEnvironment: "node",
//   roots: ["<rootDir>/src"],
//   // the following line is needed in order to grab modules from the
//   // src folder without the need to write them relatively
//   moduleDirectories: ["node_modules", "src"],
// };
