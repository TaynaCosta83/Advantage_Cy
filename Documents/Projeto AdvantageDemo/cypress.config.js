const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  defaultCommandTimeout: 50000,
  e2e: {
    'baseUrl':'https://advantageonlineshopping.com',
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor",cucumber())
    },
  },
});