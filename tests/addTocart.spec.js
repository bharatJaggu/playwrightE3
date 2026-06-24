import {test , expect } from "@playwright/test"
test.use({storageState: 'auth.json'}) ; 


test ("add to cart" , async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
    await page.waitForTimeout(5000); 
})