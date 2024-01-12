const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "m6x7ip",
  e2e: {
    baseUrl: "http://qamid.tmweb.ru",
    setupNodeEvents(on, config) {},
  },
});
