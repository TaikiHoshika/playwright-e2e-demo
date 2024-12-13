import { test, expect } from "@playwright/test";

test('check meta tags', async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page).toHaveTitle("React App");

  await expect(page.locator('meta[charset="utf-8"]')).not.toBeNull();
});
