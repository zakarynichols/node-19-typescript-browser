/** @type {import('jest').Config} */
const config = {
  verbose: true,
  collectCoverage: true,
  roots: ["<rootDir>/public/build"],
  testEnvironment: "jsdom",
};

export default config;
