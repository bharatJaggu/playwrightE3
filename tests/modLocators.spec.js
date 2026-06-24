import { test , expect } from "@playwright/test" ; 


test("modern locators" , async ({page})=>{

    await page.goto("https://demowebshop.tricentis.com/") ; 
    await page.getByRole("link", {name : "Log in"}).click() ; 
    await page.getByLabel("Email:").fill("hsbharat123@gmail.com"); 
    await page.getByLabel("Password:").fill("Bharat@1234") ; 
    await page.getByRole("button" , {name :"Log in"}).click() ; 
    // assertion to check whether the logout is visible or not after logging in 
    let loggedIn = await page.locator(".ico-logout") ; 
    expect (loggedIn).toHaveText("Log out") ;
    await page.locator("#small-searchterms").fill("gift card"); 
    await page.getByRole("button", {name:"Search"}).click() ; 
    // assertion to check whether the searched element is having the given name or not 
    let cardName = await page.getByRole("link", {name:"$100 Physical Gift Card"}).last(); 
    expect(cardName).toHaveText("$100 Physical Gift Card"); 
    await page.waitForTimeout(10000); 
})