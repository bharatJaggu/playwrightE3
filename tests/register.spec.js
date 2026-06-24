import {test , expect} from "@playwright/test"; 

test("register @ demo webshop" , async({page})=>{
    // navigate to url 
    await page.goto("https://demowebshop.tricentis.com/") ; 
    // click on register 
    await page.locator(".ico-register").click(); 
    // click on gender male 
    await page.locator("#gender-male").check(); 
    // fill the first name 
    await page.locator("#FirstName").fill("Bharat"); 
    //fill the last name 
    await page.locator("#LastName").type("H S"); 
    // fill the email ]
    await page.locator("#Email").fill("hsbharat123@gmail.com"); 
    //fill the password 
    await page.locator("#Password").type("Bharat@1234"); 
    //fill the confirm password field 
    await page.locator("#ConfirmPassword").fill("Bharat@1234");
    
  
    //click on register button 
    await page.locator("#register-button").click() ;
    await page.waitForTimeout(5000);  
})

