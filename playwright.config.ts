import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // コンフィグファイルを起点としたテストフォルダの相対パス
  testDir: './tests',
  // テストの並列実行
  fullyParallel: true,
  // test.only アノテーションが付いている場合、エラーで終了させる
  forbidOnly: !!process.env.CI,
  // テストごとの再試行回数の最大値
  retries: process.env.CI ? 2 : 0,
  // テストの並列処理に使用するワーカープロセスの最大同時実行数
  workers: process.env.CI ? 1 : undefined,
  // 使用するレポーター
  reporter: 'html',
  // テスト環境やブラウザを設定するためのオプション
  use: {
    // await page.goto('/') のように使用するためのベースのURL
    baseURL: 'http://localhost:3000/',

    // 失敗したテストを再試行する際にトレースを収集する
    trace: 'on-first-retry',
  },

  // テストで使用するブラウザ
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  // テスト実行時に起動するサーバー
  webServer: {
     command: 'yarn run start',
     url: 'http://127.0.0.1:3000',
     reuseExistingServer: !process.env.CI,
  },
});
