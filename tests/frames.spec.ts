// Frames - 

/*

<html> - page

    <iframe> - const framePage = page.frameLocator()

        <html>
        </html>

    </iframe>

</html>



*/

import {test, expect} from '@playwright/test'

test.only("Handling windows", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html")

    const framePage = page.frameLocator("#Single iframe")

    await framePage.locator("div.col-xs-6 input").first().fill("Testing")
    await expect(framePage.locator("div.col-xs-6 input").first()).toHaveValue("Testing")

    await page.getByText("Iframe with in an Iframe").click()

    const outerFrame = page.frameLocator("#Multiple iframe")
    const innerFrame = outerFrame.frameLocator("div.iframe-container iframe")

    await innerFrame.locator("[type='text']").first().fill("Nested Frame")
    await expect(innerFrame.locator("[type='text']").first()).toHaveValue("Nested Frame")

    await page.getByText("Home", {exact:true}).click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()
})