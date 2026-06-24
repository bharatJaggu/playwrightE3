import{test , expect} from "@playwright/test" ; 

test("select multiple options" , async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/"); 
    // syntax 
    // await page.selectOption(selector , value)
    await page.selectOption('#colors',['Red','Green','Yellow']); 

    await page.waitForTimeout(10000); 
})