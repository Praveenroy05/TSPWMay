import {test, expect} from '@playwright/test'
import { DashboardPage } from '../pages/DashboardPage'
import { LoginPage } from '../pages/LoginPage'

let url = "https://rahulshettyacademy.com/client"
let email ="testnHNk@gmail.com"
let password= "Testing@1234"
let productName = "iphone 13 pro"

let lp:LoginPage
let dp: DashboardPage
test.beforeEach(async ({page})=>{
    lp = new LoginPage(page)
    dp = new DashboardPage(page)
    await lp.launchURL(url)
    await lp.loginIntoApplication(email, password)
    await expect(lp.homePageIdentifier).toBeVisible()
})


test("Search and add the product to the cart", async ({page})=>{
    await dp.searchProduct(productName, 1)
    await expect(dp.addToCartSuccMsg).toHaveText("Product Added To Cart")
})

test("Search and view the product details", async ({page})=>{
    await dp.searchProduct(productName, 0)
    await expect(dp.viewPageProductName).toHaveText(productName)
    await expect(dp.viewPageProductPrice).toHaveText(dp.homePageProductPrice)
})