import { expect, Locator, Page } from "@playwright/test";

export class SauceDemoPage {

    page: Page
    username: Locator
    password: Locator
    loginBtn: Locator
    inventoryPage: Locator
    addToCartBtn: Locator
    cartLink: Locator
    checkoutBtn: Locator
    firstName: Locator
    lastName: Locator
    zipCode: Locator
    continueBtn: Locator
    finishBtn: Locator
    orderMessage: Locator

    constructor(page: Page) {
        this.page = page
        this.username = this.page.locator("#user-name")
        this.password = this.page.locator("#password")
        this.loginBtn = this.page.locator("#login-button")
        this.inventoryPage = this.page.locator(".inventory_list")
        this.addToCartBtn = this.page.locator("button")
        this.cartLink = this.page.locator(".shopping_cart_link")
        this.checkoutBtn = this.page.locator("#checkout")
        this.firstName = this.page.locator("#first-name")
        this.lastName = this.page.locator("#last-name")
        this.zipCode = this.page.locator("#postal-code")
        this.continueBtn = this.page.locator("#continue")
        this.finishBtn = this.page.locator("#finish")
        this.orderMessage = this.page.locator(".complete-header")
    }

    async launchURL(url: string) {
        await this.page.goto(url)
    }

    async loginIntoApplication(username: string, password: string) {
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }

    async addProductToCart(productName: string) {
        const productCard = this.page.locator(".inventory_item").filter({ hasText: productName })
        await productCard.getByRole("button", { name: /add to cart/i }).click()
    }

    async openCart() {
        await this.cartLink.click()
    }

    async clickCheckout() {
        await this.checkoutBtn.click()
    }

    async fillCheckoutDetails(firstName: string, lastName: string, zipCode: string) {
        await this.firstName.fill(firstName)
        await this.lastName.fill(lastName)
        await this.zipCode.fill(zipCode)
    }

    async continueCheckout() {
        await this.continueBtn.click()
    }

    async finishCheckout() {
        await this.finishBtn.click()
    }

    async verifyOrderConfirmation(message: string) {
        await expect(this.orderMessage).toHaveText(message)
    }
}
