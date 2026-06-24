// this is my main test file 

import {test , expect} from "@playwright/test"; 

import { login } from "./login";
import { cart } from "./cartPage";

test("pom test framework" , async ({page})=>{
   // login 
    const newLogin = new login(page); 
    await newLogin.gotoPage()
    await newLogin.loginPage('bharat1234@gmail.com', 'Bharat@123'); 
    const message = await page.locator(".ico-logout")
    expect(message).toHaveText("Log out"); 
    //add health book to cart 
    const cartPage = new cart(page); 
    await cartPage.addBookCart() ; 
    const  cartMessage = await page.locator(".content"); 
    expect(cartMessage).toContainText("The product has been added to your  "); 


})