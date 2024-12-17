import { test, expect } from "@playwright/test";

test('check meta tags', async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await expect(page.locator('meta[charset="utf-8"]')).not.toBeNull();
  await expect(page.locator('title')).not.toBeNull();
  await expect(page.locator('meta[property="og:title"]')).not.toBeNull();
  await expect(page.locator('meta[property="og:description"]')).not.toBeNull();
  await expect(page.locator('meta[property="og:image"]')).not.toBeNull();
  await expect(page.locator('meta[property="og:type"]')).not.toBeNull();
  await expect(page.locator('meta[property="og:url"]')).not.toBeNull();
});
