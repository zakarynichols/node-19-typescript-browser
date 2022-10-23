/** @type {import('jest').Config} */
const config = {
  verbose: true,
  collectCoverage: true,
  roots: ["<rootDir>/build"],
  testEnvironment: "jsdom",
};

export default config;
