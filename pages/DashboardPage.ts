import { Locator, Page } from "@playwright/test";

export class DashboardPage{

    page:Page
    products: Locator
    addToCartSuccMsg: Locator
    viewPageProductName: Locator
    viewPageProductPrice: Locator
    homePageProductPrice : string

    constructor(page:Page){
        this.page = page
        this.products = this.page.locator("div.card-body")
        this.addToCartSuccMsg = this.page.locator("#toast-container")
        this.viewPageProductName = this.page.locator("div.rtl-text h2")
        this.viewPageProductPrice = this.page.locator("div.rtl-text h3")
        this.homePageProductPrice = ""
    }

    async searchProduct(){
        
    }



}