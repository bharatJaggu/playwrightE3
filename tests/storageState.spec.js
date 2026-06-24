import{test , expect} from "@playwright/test"

test("end to end test", async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/") ; 
    await page.locator(".ico-login").click() ; 
    await page.locator("#Email").fill("hsbharat123@gmail.com"); 
    await page.locator("#Password").fill("Bharat@1234"); 
    await page.locator(".login-button").click() ; 
    await page.context().storageState({path:'auth.json'}); 
})

