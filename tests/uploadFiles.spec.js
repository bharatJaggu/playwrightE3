import {test , expect} from "@playwright/test" ; 

test.skip("upload file", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/"); 

    await page.locator("#singleFileInput").setInputFiles("playwright notes .pdf"); 

    await page.waitForTimeout(10000); 

})

test("upload multiple file", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/"); 

    await page.locator("#multipleFilesInput").setInputFiles(["playwright notes .pdf","Git-GitHub.pdf" ]); 

    await page.waitForTimeout(10000); 

})