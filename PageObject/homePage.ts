import { expect, type Page, type Locator } from '@playwright/test';

export class headerMenu {
    readonly page: Page;
    readonly logo: Locator;
    readonly tutorials: Locator;
    readonly search: Locator;
    readonly signUp: Locator

    constructor (page: Page){
        this.page = page;
        this.logo = page.locator ('#w3-logo');
        this.tutorials = page.getByRole('button', { name: 'Tutorials' });
        this.search = page.locator ('#tnb-google-search-input');
        this.signUp = page.locator ('div[@class= "tnb-right-section"]').locator('[title="Sign Up to Improve Your Learning Experience"]');
    }

    async goToHomePage(){
        await this.page.goto('https://www.w3schools.com');
    }

    async clickLogo(){
        await this.logo.click();
        await expect (this.logo).toBeVisible();
    }

    async clickTutorials(){ 
        await this.tutorials.click();
        await expect (this.page.getByLabel('Menu for tutorials').getByRole('heading', { name: 'JavaScript' })).toBeVisible();
        await this.page.getByLabel('Menu for tutorials').getByRole('link', { name: 'Learn JavaScript' }).click();
        await expect (this.page.getByRole('heading', { name: 'JavaScript Tutorial' })).toBeVisible();
        await this.page.getByRole('link', { name: 'Next ❯' }).first().click();
    }

    async searchField(){ 
        await this.search.fill('Test text');
        await expect (this.search).toHaveValue('Test text');
    }

    async clickSignup(){
        await this.signUp.click();
        await expect (this.page.locator ('text="Email me with news and updates"')).toBeVisible();
    }

}