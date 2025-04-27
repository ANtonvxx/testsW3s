/* HT, part2:
Go to http://uitestingplayground.com/autowait and investigate how it works. It’s a simulator for testing 
different cases for AQA when an element is not visible/enabled/editable etc. First of all 
you should go to this page, configurate scenario for testing and after than write test that will 
click on button. For example in your test you go to settings, select element, select state and click apply. 
After that you perform assertions using different methods from our lesson - 
page.locator().waitFor(), page.waitForSelector(), page.waitForTimeout(). For disabling auto waiting for click() method use click({force: true}) - 
it will not wait for elements state and we should do it manually. Check different elements states - visible, enabled with waitFor() method 
*/

import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('http://uitestingplayground.com/autowait'); 
})

test ("pageLocatorWaitFor", async ({page}) => {
   // await page.locator('div.btn btn-primary').waitFor({state: 'visible'});
    await page.locator('div.col-6').getByRole('button',{name:'Button'}).click();
})


test ("pageWaitForSelector", async ({page}) => {
    await page.waitForSelector('button#target')
    await page.locator('button#target').click();
})
    
test ("waitForTimeout", async ({page}) => {
    await page.waitForTimeout(7000)
})