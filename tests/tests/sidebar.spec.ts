import { test, expect } from '@playwright/test';

test('sidebar test', async ({ page }) => {
  await page.addInitScript(value => {
    window.localStorage.setItem('isOpened', "false")
  });
  await page.goto('/');
  const el = page.locator('#sw-sidebar');
  expect(await el.getAttribute("class")).not.toContain("opened")
  await page.click('#sidebar-control');
  expect(await el.getAttribute("class")).toContain("opened")
  await page.click('#sidebar-control');
  expect(await el.getAttribute("class")).not.toContain("opened")
});