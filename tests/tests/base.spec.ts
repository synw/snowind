import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle("Snowind - Home");
  const title = page.locator('#main-page-title');
  await expect(title).toHaveText('Snowind');
});