/* HT, part1:
Set timeouts for your project: 35s for test, 16s for expect, 25s for actions
On Techmagic main page click on the arrow from the first card using filter() method
*/

import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('https://www.techmagic.co/'); 
})

test('useFilterMethod',async({page}) => { //click Arrow using filter() method
    await page.locator(`.blog-slide`).filter({hasText: 'Revolutionising Banking'}).getByAltText('arrow').click();
    //await page.locator('div.blog-slide').filter({hasText: 'Revolutionising Banking'}).locator('img[alt="arrow"]').click();
})
