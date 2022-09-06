import { defineConfig } from 'cypress';

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 720,
    viewportWidth: 1280
  },
});
