import tsjPreset from 'ts-jest/presets';

export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  moduleDirectories: ["<rootDir>node_modules/", "<rootDir>src/*"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  transform:tsjPreset.defaultsESM.transform,
  rootDir: "../../",
  roots: ["<rootDir>"],
  testEnvironment: "jsdom",
  testMatch: ["<rootDir>src/**/__tests__/**/*.[jt]s?(x)", "<rootDir>src/**/?(*.)+(spec|test).[tj]s?(x)"],
};