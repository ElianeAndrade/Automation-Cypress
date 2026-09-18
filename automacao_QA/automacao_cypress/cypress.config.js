const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://staging.Nome_Instituição.com.br/', //default
    env: {
      //HOM_URL: "https://hom.Nome_Instituição.com.br/",
      STG_URL: "https://staging.Nome_Instituição.com.br/",
      PROD_URL: "https://www.Nome_Instituição.com.br",
    },
    experimentalMemoryManagement: true,

    supportFile: 'cypress/support/e2e.js',
    chromeWebSecurity: false,
    numTestsKeptInMemory: 1,
    experimentalMemoryManagement: true,
    defaultCommandTimeout: 30000, 
    viewportWidth: 1366,
    viewportHeight: 768,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      charts: true,
      reporterPageTitle: 'Relatório de Testes Cypress',
      overwrite: false,
      html: true,
      json: true,
      embeddedScreenshots: true,
      inlineAssets: true
    },
  },
})

