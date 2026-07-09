import { test, expect } from '@playwright/test'
import { SauceDemoPage } from '../pages/SauceDemoPage'

test('@regression Sauce demo checkout flow', async ({ page }) => {
    const sauceDemoPage = new SauceDemoPage(page)
    const username = 'standard_user'
    const password = 'secret_sauce'
    const firstName = `Auto${Math.floor(Math.random() * 100000)}`
    const lastName = `User${Math.floor(Math.random() * 100000)}`
    const zipCode = `${Math.floor(10000 + Math.random() * 90000)}`

    await sauceDemoPage.launchURL('https://www.saucedemo.com/')
    await sauceDemoPage.loginIntoApplication(username, password)
    await expect(sauceDemoPage.inventoryPage).toBeVisible()

    await sauceDemoPage.addProductToCart('Sauce Labs Backpack')
    await sauceDemoPage.openCart()
    await sauceDemoPage.clickCheckout()
    await sauceDemoPage.fillCheckoutDetails(firstName, lastName, zipCode)
    await sauceDemoPage.continueCheckout()
    await sauceDemoPage.finishCheckout()
    await sauceDemoPage.verifyOrderConfirmation('Thank you for your order!')
})
