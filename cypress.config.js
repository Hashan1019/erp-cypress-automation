const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  chromeWebSecurity: false,
  env: {
    url: 'http://20.198.233.3:5090/',
    apidomain: 'http://20.198.233.3:6010'
  },
  reporter: 'cypress-mochawesome-reporter',
  pageLoadTimeout: 100000,
  defaultCommandTimeout: 100000,
  viewportWidth: 1366,
  viewportHeight: 768,
  projectId: "jvf8ej",
  abortOnAssertionFailure: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      allureWriter(on, config);
      return config;
      cy.viewport(1280, 720);

    },
  },

});
