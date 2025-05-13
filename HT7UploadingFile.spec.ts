/* 
2. Try to create test with uploading file to your work project (or you can use this meme generator)
*/

import {test, expect} from '@playwright/test';   
import path from 'path';


test ("fileUpload", async ({page}) =>{

    await page.goto('https://www.iloveimg.com/meme-generator');
    
    // Start waiting for file chooser before clicking. Note no await.
    const fileChooserPromise = page.waitForEvent('filechooser');

    await page.getByText('Upload image').click();
    
    const fileChooser = await fileChooserPromise;
    
    await fileChooser.setFiles(path.join(__dirname, 'assets/6.png'));

    await expect(page.getByText('Meme editor')).toBeVisible();

})