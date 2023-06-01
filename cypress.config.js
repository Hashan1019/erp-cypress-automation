const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({

  env: {
    url: 'http://20.198.233.3:5090/',
  },
  reporter: 'cypress-mochawesome-reporter',
  pageLoadTimeout: 80000,
  defaultCommandTimeout: 80000,
  viewportWidth: 1366,
  viewportHeight: 768,
  //projectId: "mne8zc",

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
