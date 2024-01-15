const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "gehzho",
  e2e: {
    baseUrl: "http://qamid.tmweb.ru",
    setupNodeEvents(on, config) {},
  },
});
