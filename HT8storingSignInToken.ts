//Try to setup authentication with stored state
//the content of Login json from this script will be stored in "storageState.json"  file
//to run this script:
//npx ts-node HT8storingSignInToken.ts


import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.w3schools.com/');

  // Дії для логіну
  await page.click('text=Sign In');
  await page.fill('input[id="tnb-login-dropdown-email"]', 'bobbylain@yopmail.com');
  await page.fill('input[id="tnb-login-dropdown-password"]', 'Testing1_');
  await page.click('button:has-text("Sign In")');

  // Зберігаємо сесію
  await context.storageState({ path: 'storageState.json' });

  await browser.close();
})();