/** @type {import('jest').Config} */
export default {
  verbose: true,
  collectCoverage: true,
  roots: ["<rootDir>/public/build"],
  testEnvironment: "jsdom",
};
