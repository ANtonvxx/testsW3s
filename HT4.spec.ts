// HT:
// Playwright user-facing locators
// Presentation
// Code from lesson - link
// Official documentation - link
// YT tutorial - link 
// ______________________________________________________
// Home tasks:
// Try to find different elements on https://www.w3schools.com using all methods for user-facing locators - getByRole, getByText, getByLabel, getByTitle, getByAltText, getByPlaceholder. Create separate test for each method (as in my example), but do not use the same elements from my example
// Create new branch, push your code to repo and create Pull request


import { test, expect } from '@playwright/test';

test.beforeEach( async ({page}) => {
    await page.goto('https://www.w3schools.com/');
});

test('getByRole',async({page}) => { //Search by role (Elements > Accessibility tab)
    await page.getByRole('link', {name:'Video Tutorial'}).click();

    await page.getByText("HTML Video Tutorial").isVisible();
   
})

test('getByText',async({page}) => { //Search by any text
    await page.getByText('/ Sign Up').first().isVisible()
})

test('getByLabel',async({page}) => { //Search by Label text
    await page.getByLabel('Home link').click();
    await page.reload();
    console.log('Page reloaded')
})

test('getByTitle',async({page})=>{ //Search by 
    let a='W3Schools offers'
    await page.getByTitle('Our Services').click();
    await expect(page.getByText(a)).toBeVisible();
    console.log(a+' text is visible')
})

test('getByAltText',async({page})=>{ //Search by image
    await page.getByAltText('Dynamic Spaces').first().isVisible();
    
})

test('getByPlaceholder',async({page}) =>{
//    await page.getByTitle('Our Services').click();
    await (page.getByPlaceholder('Search...')).first().fill('Hello everybody');
    await expect (page.getByText('Hello everybody')).toBeVisible();
})