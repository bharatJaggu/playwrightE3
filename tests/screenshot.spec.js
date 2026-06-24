import{test , expect} from "@playwright/test"

//type 1 --> visible part of the screen will be taken as a screen shot 
test("screenshot 1" , async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/") ; 
    await page.screenshot({path:"page.png"}); 
})

//type 2 --> entire page will be taken as a screen shot 
test("screenshot 2" , async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/") ; 
    await page.screenshot({fullPage:true ,path:"page1.png"}); 
})

//type 3 --> particular element will be taken as a screen shot 
test("screenshot 3" , async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/") ; 
    await page.locator('img[alt="Tricentis Demo Web Shop"]').screenshot({path:"page2.png"})

})