import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

let url = "https://rahulshettyacademy.com/client"
let email ="testnHNk@gmail.com"
let password= "Testing@1234"
let incorrectPassword= "Test"


let lp :LoginPage
test.beforeEach(async ({page})=>{
    lp = new LoginPage(page)
    await lp.launchURL(url)
})

test("Login into application using correct credentials",{tag:'@smoke'}, async ()=>{
    await lp.loginIntoApplication(email, password)
    await expect(lp.homePageIdentifier).toBeVisible()
})

test("Validate login with incorrect credentials", {tag: ['@smoke', '@regression']}, async ()=>{
    await lp.loginIntoApplication(email, incorrectPassword)
    await expect(lp.errorMessage).toHaveText("Incorrect email or password.")
})

// Hooks

let i = [10,20]


