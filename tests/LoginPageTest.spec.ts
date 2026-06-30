import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

let url = "https://rahulshettyacademy.com/client"
let email ="testnHNk@gmail.com"
let password= "Testing@1234"
let incorrectPassword= "Test"



test("Validate login with correct credentials", async ({page})=>{
    const lp = new LoginPage(page)
    await lp.launchURL(url)
    await lp.loginIntoApplication(email, password)
    await expect(lp.homePageIdentifier).toBeVisible()
})

test("Validate login with incorrect credentials", async ({page})=>{
    const lp = new LoginPage(page)
    await lp.launchURL(url)
    await lp.loginIntoApplication(email, incorrectPassword)
    await expect(lp.errorMessage).toHaveText("Incorrect email or password.")
})

// Hooks


