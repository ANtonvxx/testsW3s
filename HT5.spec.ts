/* HT:
Set timeouts for your project: 35s for test, 16s for expect, 25s for actions
On Techmagic main page click on the arrow from the first card using filter() method

Go to http://uitestingplayground.com/autowait and investigate how it works. It’s a simulator for testing 
different cases for AQA when an element is not visible/enabled/editable etc. First of all 
you should go to this page, configurate scenario for testing and after than write test that w
ill click on button. For example in your test you go to settings, select element, select state and click apply. 
After that you perform assertions using different methods from our lesson - 
page.locator().waitFor(), page.waitForSelector(), page.waitForTimeout(). For disabling auto waiting for click() method use click({force: true}) - 
it will not wait for elements state and we should do it manually. Check different elements states - visible, enabled with waitFor() method 
*/

import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('https://www.techmagic.co/'); 
})

test('useFilterMethod',async({page}) => { //click Arrow using filter() method
    await page.locator('div.blog-slide').filter({hasText: 'Revolutionising Banking'}).locator('img[alt="arrow"]').click();
 //   expect (page.locator('div.articlePerson_bio').filter({hasText: 'Director of FinTech at TechMagic'})).toBeVisible();
})
