const { defineConfig } = require("cypress");
const { initPlugin } = require('cypress-plugin-snapshots/plugin');
module.exports = defineConfig({
  e2e: {

    baseUrl: 'https://app.roivenue.com/explore/process/',
    viewportHeight:1080,
    viewportWidth:1320,
    setupNodeEvents(on, config) {
      initPlugin(on, config);
      return config;
    },
  },
});
