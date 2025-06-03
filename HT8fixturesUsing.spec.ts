import { test, expect } from './HT8fixturesAdding.js';




test.describe('@smoke',() => { 
  
    test('My learning page', async ({ loggedInHomePage }) => { 
    //Щоб цей тест запустити в храміумі:
    //npx playwright test -g "My learning page" --project=chromium --headed  
    const page = loggedInHomePage.page;
    await expect(page.locator('svg[xmlns="http://www.w3.org/2000/svg"]')).toBeVisible();
  });
})