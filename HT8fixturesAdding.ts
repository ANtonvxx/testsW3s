import { test as base } from '@playwright/test';
import { HeaderComponent } from './PageObject/header-component';
import { HeaderLoginModal } from './PageObject/header-login-modal';
import { headerMenu } from './PageObject/home-page';


type LoginFixture = {
  loggedInHomePage: headerMenu;
};


export const test = base.extend<LoginFixture>({
  loggedInHomePage: async ({ page }, use) => {
    await page.goto('https://www.w3schools.com/');

    const header = new HeaderComponent(page);

    await header.clickSignIn();

    const modal = new HeaderLoginModal(page);
    await modal.fillEmail('bobbylain@yopmail.com');
    await modal.fillPassword('Testing1_');
    await modal.clickSignInButton();

    // Опціонально: дочекатися якоїсь ознаки, що логін успішний
    await page.waitForSelector('text=My learning');

    await use(new headerMenu (page));

  },
});

export { expect } from '@playwright/test';