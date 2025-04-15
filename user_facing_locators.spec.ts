import { test, expect } from '@playwright/test';

test.beforeEach( async ({page}) => {
    await page.goto('https://www.w3schools.com/');
});

// test('getByText', async ({page}) => {
//     await page.getByText(`Not Sure Where To Begin?`).click();

//     await expect(page.getByText(`To become a web developer`)).toBeVisible();
// });


//HT: getByRole, getByText, getByLabel, getByTitle, getByAltText, getByPlaceholder.

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