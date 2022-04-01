import { test, expect } from '@playwright/test';

test('base test', async ({ page }) => {
  await page.addInitScript(value => {
    window.localStorage.setItem('isDarkMode', "false")
  });
  await page.goto('/switch');
  const el = page.locator('#toplevel');
  const body = page.locator('body');
  expect(await el.getAttribute("class")).not.toContain("dark")
  await page.click('text=Dark mode');
  expect(await el.getAttribute("class")).toContain("dark")
  expect(await body.getAttribute("class")).toBe("bg-background-dark text-foreground-dark")
});