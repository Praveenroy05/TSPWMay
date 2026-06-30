// Multiple windows / Tabs - "popup" event 

import {test, expect} from '@playwright/test'

test("Handling windows", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Windows.html")

    const page1 =  page.waitForEvent("popup")
    
    await page.locator("#Tabbed button").click()
    // Promise - pending, successful, rejected
    const newPage = await page1
    // console.log(newPage)

    await newPage.getByText("Downloads", {exact:true}).click()
    await expect(newPage.locator("h2#bindings")).toContainText("WebDriver Language Bindings")

    await page.bringToFront()

    await page.getByText("Home", {exact:true}).click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()

})

// Class 
// Objects

