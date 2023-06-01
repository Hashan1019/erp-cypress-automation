const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({

  env: {
    //url: 'http://20.198.233.3:5090/',
    url: 'http://20.198.233.3:5090/signin'
  },
  reporter: 'cypress-mochawesome-reporter',
  pageLoadTimeout: 500000,
  defaultCommandTimeout: 500000,
  viewportWidth: 1366,
  viewportHeight: 768,
  projectId: "jvf8ej",

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
