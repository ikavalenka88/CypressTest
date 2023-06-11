const { defineConfig } = require("cypress");
module.exports = defineConfig({
  projectId: '3ajb5p',
  // projectId: '3ajb5p',
  e2e: {
    setupNodeEvents(on, config) {
      baseUrl: "https://next.privat24.ua";
      // implement node event listeners here
    },
      "excludeSpecPattern" : [
        "**/1-getting-started/.*.js",
        "**/2-advanced-examples/.*.js"
    ]
  },
  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
