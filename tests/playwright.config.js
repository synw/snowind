const { devices } = require('@playwright/test');/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  workers: 2,
  retries: 0,
  use: {
    baseURL: 'http://localhost:3000/',
    headless: false,
    viewport: { width: 1280, height: 720 },
    launchOptions: {
      slowMo: 1500,
    },
    //video: "on",
    storageState: 'teststorage.state.json',
  },
  webServer: {
    command: 'yarn dev',
    port: 3000,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    /*{
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    // Test against mobile viewports.
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },*/
  ],
};

module.exports = config;