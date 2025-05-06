import {test, expect} from '@playwright/test';
import {headerMenu} from './PageObject/homePage';
import { before } from 'node:test';


test.beforeEach (async ({page}) =>  {
    const homePage = new headerMenu(page);
    await homePage.goToHomePage();
})

test ('checkSomeHeaderItems', async ({page}) => {
    const homePage = new headerMenu(page);
    await homePage.goToHomePage();
    await homePage.clickLogo();
    await expect (homePage.logo).toBeVisible();
    await homePage.clickTutorials();
})

test ('checkSearch', async ({page}) => {
    const homePage = new headerMenu(page);
    await homePage.searchField(); //check that search field is functional
    await page.locator ('#tnb-google-search-input').clear();
    await page.locator ('#tnb-google-search-input').fill('Java display variables');
    await page.getByRole('link', { name: 'Java display variables' }).click()
    await expect (page.getByRole('heading',{name: 'Java Print Variables'})).toBeVisible();
})


