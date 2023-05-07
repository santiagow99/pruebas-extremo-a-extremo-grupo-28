const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    USERNAME: "c.wilchesv@uniandes.edu.co",
    PASSWORD: "2TiSXG9VVvECnp",
  },
});
