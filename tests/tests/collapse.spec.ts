import { test, expect } from '@playwright/test';

test('collapse test', async ({ page }) => {
  await page.goto('/collapse');
  const el = page.locator('#sw-collapse');
  expect(el).toBeHidden();
  expect(await el.getAttribute("class")).toContain("slidedown");
  await page.click('text=Close');
  expect(el).toContainText("Lorem ipsum");
  expect(await el.getAttribute("class")).toContain("slideup");
});