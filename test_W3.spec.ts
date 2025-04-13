import { test, expect } from '@playwright/test';


test ('java tutorial',async({page}) =>{
    const javaTitle = page.locator ('a.ga-nav[title="Java Tutorial"]');
    
    //Go to the W3Schools website
    await page.goto ('https://www.w3schools.com/');

    //Click the 'Java'header button
    await javaTitle.click()

    await expect (page.locator('span.color_h1',{hasText: 'Tutorial'})).toBeVisible()
})




