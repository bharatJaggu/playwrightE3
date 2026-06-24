import {test , expect} from "@playwright/test"; 

test("launch browser",async ({page})=>{

    await page.goto("https://demowebshop.tricentis.com/") ;// navigate to the url  

    await page.waitForTimeout(5000); 

} )

