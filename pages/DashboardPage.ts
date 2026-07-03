import { Locator, Page } from "@playwright/test";

export class DashboardPage{

    page:Page
    products: Locator
    addToCartSuccMsg: Locator
    viewPageProductName: Locator
    viewPageProductPrice: Locator
    homePageProductPrice : string | null

    constructor(page:Page){
        this.page = page
        this.products = this.page.locator("div.card-body")
        this.addToCartSuccMsg = this.page.locator("#toast-container")
        this.viewPageProductName = this.page.locator("div.rtl-text h2")
        this.viewPageProductPrice = this.page.locator("div.rtl-text h3")
        this.homePageProductPrice = ""
    }

    // async searchProduct(productName:string, index:number){
    //     await this.products.last().waitFor()
    //     const countOfProduct = await this.products.count() // Returns the total number of matching elements
    //     for(let i=0; i<countOfProduct; i++){
    //         const productText= await this.products.nth(i).locator("b").textContent()
    //         if(productText == productName){
    //             this.homePageProductPrice = await this.products.nth(i).locator("div.text-muted").textContent()
    //             await this.products.nth(i).locator("button").nth(index).click()
    //             break
    //         }
    //     }  
    // }

    // filter() - Filter out the value depending on the criteria
    

    async searchProduct(productName:string, index:number){
        await this.products.last().waitFor()
        this.homePageProductPrice = await this.products.filter({hasText:`${productName}`}).locator("div.text-muted").textContent()
        await this.products.filter({hasText:`${productName}`}).locator("button").nth(index).click()
    }

}