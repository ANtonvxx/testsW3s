/* 
    2. Try to create test with uploading file to your work project (or you can use this meme generator)
*/

import {test, expect} from '@playwright/test';   
import path from 'path';  
/* Importing 'path' module from Node.js library
| Функція           | Що робить                                       |
| ----------------- | ----------------------------------------------- |
| `path.join()`     | Склеює частини шляху з правильним `/` або `\`   |
| `path.resolve()`  | Формує абсолютний шлях                          |
| `path.basename()` | Повертає ім’я файлу з повного шляху             |
| `path.dirname()`  | Повертає директорію з повного шляху             |
| `path.extname()`  | Повертає розширення файлу (`.jpg`, `.ts`, тощо) |
*/

test ("fileUpload", async ({page}) =>{

    await page.goto('https://www.iloveimg.com/meme-generator');
    
    // Start waiting for file chooser before clicking. Note no await.
    const fileChooserPromise = page.waitForEvent('filechooser');
    
    await page.getByText('Upload image').click();
    
    const fileChooser = await fileChooserPromise;
    
    //We're choosing local image from the /assets folder, created in our /testW3s folder for tests 
    await fileChooser.setFiles(path.resolve(__dirname, 'assets/6.png'));
    /* 
    P.S. We can use path.resolve and path.join. The difference is:
    | Метод          | Абсолютний шлях? | Поводження з абсолютними аргументами | Для чого краще                |
    | -------------- | ---------------- | ------------------------------------ | ----------------------------- |
    | `path.resolve` | Так              | Ігнорує попередні, якщо є абсолютний | Файлова система, Playwright   |
    | `path.join`    | Ні (залежить)    | Просто зʼєднує                       | Логіка шляхів у межах проєкту |
    JPT recommends to use `path.resolve` because it guarantees the absolute path is always created
    */

    await expect(page.getByText('Meme editor')).toBeVisible();    
})