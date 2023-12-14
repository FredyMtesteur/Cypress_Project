const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'vvf23o',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
