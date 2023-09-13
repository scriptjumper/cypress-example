/* eslint-disable global-require */
// eslint-disable-next-line import/no-extraneous-dependencies
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  numTestsKeptInMemory: 15,
  defaultCommandTimeout: 15000,
  env: {
    apiUrl: "https://www.sovtech.co.uk",
    device: "desktop",
    email: "",
    password: "",
  },
  retries: {
    runMode: 1,
    openMode: 0,
  },
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36",
  viewportHeight: 768,
  viewportWidth: 1266,
  e2e: {
    setupNodeEvents: function (on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    baseUrl: "https://www.sovtech.co.uk",
  },
});
