import { test, expect } from '@playwright/test';


test('Check My Learning is visible after login state reuse', async ({ page }) => {

    await page.goto('https://www.w3schools.com/');
    await expect(page.locator('svg[xmlns="http://www.w3.org/2000/svg"]')).toBeVisible();

});