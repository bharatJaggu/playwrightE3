import{test , expect} from "@playwright/test" ; 

test ("shoppers stack" , async ({page})=>{

    await page.goto("https://www.shoppersstack.com/") ; 
    await page.locator("#loginBtn").click() ; 
    await page.locator("#Email").fill("ami2026@gmail.com"); 
    await page.locator("#Password").fill("Ami@2026"); 
    await page.locator("#Login").click() ; 
    await page.locator('img[src="/static/media/men.77f063526a0f08ad75e8.webp"]').click();
    await page.locator(".featuredProducts_footerLeft__PmkNa").filter({hasText:"nike"}).first().click() ;
    await page.locator(".ProductDisplay_buyNow__4fwjt").click() ; 
    await page.waitForTimeout(10000) ; 

})