const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "dwkr51",
  e2e: {
    baseUrl: "http://qamid.tmweb.ru",
    setupNodeEvents(on, config) {},
  },
});
