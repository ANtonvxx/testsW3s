import { expect, type Page, type Locator } from '@playwright/test';

export class headerMenu {
    constructor (public page: Page){}


    //To make the below scheme work, we've executed the following 2 commands:
    // npm install -g typescript
    // tsc --init
    //, which Installed the latest ts version AND created tsconfig file
    public logo = this.page.locator ('#w3-logo');
    public tutorials = this.page.getByRole('button', { name: 'Tutorials' });
    public search = this.page.locator ('#tnb-google-search-input');;
    public signUp = this.page.locator ('div[@class= "tnb-right-section"]').locator('[title="Sign Up to Improve Your Learning Experience"]');

    async goToHomePage(){
        await this.page.goto('https://www.w3schools.com');
    }

    async clickLogo(){
        await this.logo.click();
    }

    async clickTutorials(){ 
        await this.tutorials.click();
    }

    async searchField(){ 
        await this.search.click();
    }

    async clickSignup(){
        await this.signUp.click();
    }

}