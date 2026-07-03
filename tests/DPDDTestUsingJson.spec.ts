import {test, expect} from '@playwright/test'
import { DashboardPage } from '../pages/DashboardPage'
import { LoginPage } from '../pages/LoginPage'
import products from '../testdata/product.json'


let lp:LoginPage
let dp: DashboardPage
test.beforeEach(async ({page})=>{
    lp = new LoginPage(page)
    dp = new DashboardPage(page)
})

for(let product of products){
    test(`Search and add the product to the cart for ${product.productName}`, async ()=>{
        await lp.launchURL(product.url)
        await lp.loginIntoApplication(product.email, product.password)
        await expect(lp.homePageIdentifier).toBeVisible()
        await dp.searchProduct(product.productName, 1)
        await expect(dp.addToCartSuccMsg).toHaveText("Product Added To Cart")
    })
}
