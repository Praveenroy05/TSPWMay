// Shadow dom element - 

import {test, expect} from '@playwright/test'

test.only("Handling shadow dom element", async ({page})=>{
    await page.goto("https://letcode.in/shadow")

    await page.locator("#fname").fill("Shadow dom element")
    await expect(page.locator("#fname")).toHaveValue("Shadow dom element")
    await page.waitForTimeout(2000)
    await page.locator("#lname").fill("Last Name")
    await page.waitForTimeout(5000)

})