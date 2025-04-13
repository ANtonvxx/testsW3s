import { test, expect } from '@playwright/test';

test.beforeEach( async ({page}) => {
    await page.goto('https://www.w3schools.com/');
});

// test('getByText', async ({page}) => {
//     await page.getByText(`Not Sure Where To Begin?`).click();

//     await expect(page.getByText(`To become a web developer`)).toBeVisible();
// });


//HT: getByRole, getByText, getByLabel, getByTitle, getByAltText, getByPlaceholder.

test('getByRole',async({page}) => {
    await page.getByRole('link', {name:'Video Tutorial'}).click();

    await page.getByText("HTML Video Tutorial").isVisible();
   
})

test('getByText',async({page}) => {
    await page.getByText('/ Sign Up').first().isVisible()
})

test('getByLabel',async({page}) => {
    await page.getByLabel('Sign Up to Improve Your Learning Experience').first().click();
  //  await expect(page.getByPlaceholder('email')).toBeVisible();
    await expect(page.getByRole('textbox',{name:'email'})).toBeVisible();
})

test('getByTitle',async({page})=>{
    await page.getByTitle('Our Services').click();
    await expect(page.getByText('Free Tutorials')).toBeVisible();
})

test('getByAltText',async({page})=>{
    //???

})

test('getByPlaceholder',async({page}) =>{
    await page.getByTitle('Our Services').click();
    await expect (page.getByPlaceholder('Filter...')).toBeVisible();
})