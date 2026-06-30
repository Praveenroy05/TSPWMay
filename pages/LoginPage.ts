// Locators and methods related to login page

import { Locator , Page} from "@playwright/test";

export class LoginPage{

    // Locators
    page: Page
    email: Locator
    password: Locator
    loginBtn: Locator
    errorMessage: Locator
    homePageIdentifier: Locator

   constructor(page:Page){
    this.page = page // lp.page
    this.email = this.page.getByPlaceholder("email@example.com")
    this.password = this.page.getByPlaceholder("enter your passsword")
    this.loginBtn = this.page.locator("#login")
    this.errorMessage = this.page.locator("#toast-container")
    this.homePageIdentifier = this.page.locator("[routerlink='/dashboard/']")
   }


    async launchURL(url:string){
        await this.page.goto(url)
    }

    async loginIntoApplication(email:string, password:string){
        await this.email.fill(email)
        await this.password.fill(password)
        await this.loginBtn.click()
    }






}