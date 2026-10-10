import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests/e2e', workers: 1, timeout: 45000,
  use: { baseURL: 'http://127.0.0.1:4173', channel: process.env.PLAYWRIGHT_CHANNEL || 'chromium', trace: 'retain-on-failure' },
  webServer: {
    command: 'node server/index.js', url: 'http://127.0.0.1:4173/api/v1/health', reuseExistingServer: false,
    env: { NODE_ENV: 'test', APP_ORIGIN: 'http://127.0.0.1:4173', PORT: '4173', HOST: '127.0.0.1', DEV_AUTH: 'true', DATA_DIR: '.data/e2e', UPLOAD_DIR: '.data/e2e-uploads', DATABASE_URL: '' },
  },
});
