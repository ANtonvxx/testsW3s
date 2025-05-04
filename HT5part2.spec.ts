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


test ("checkingInput", async ({page}) =>{
    //choose 'Input' value from the dropdown
    await page.getByLabel ("Choose an element type").selectOption('input');   

    //Mark/unmark a bunch of checkboxes with setting
    await page.getByText ('Visible').check();
    await page.getByText ('Enabled').check();
    await page.locator ('.form-check-label').getByText('Editable').uncheck();
    await page.getByText ('On Top').uncheck();
    await page.getByText ('Non Zero Size').uncheck(); 

    //Click the 'Apply for 10 seconds' button
    await page.locator('#applyButton10').click();

    //Assertion that Input is readOnly (is not Editable)
    await expect (page.locator('#target')).toHaveAttribute('readonly');

    //Assertion that Input is Zero size   
    await expect (page.locator('#target')).toHaveCSS('width', '0px');

    //Show the actual size of #target input in console log
    //console.log (await page.locator('#target').evaluate((el) => getComputedStyle(el).width)); //0px

    //Assertion that text was entered (enter value to the Input and check that it was correctly entered)
    await page.locator ('#target').fill('Some test text');
    await expect (page.locator('#target')).toHaveValue('Some test text');
//    await page.getByRole('heading', { name: 'Playground' }).locator ('#target').fill('Some test text'); //- why doesn't this work? (with getByRole)    

    await page.waitForTimeout (1000);
})