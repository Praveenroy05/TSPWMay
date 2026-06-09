// Alert - "dialog" event appeared on the web page

// 1. Simple alert - Only one button
// 2. Confirm alert - Yes/No, Submit/Cancel
// 3. Prompt alert - Along with Yes/No - Input box as well

// dialog event - alerts
// popup event - Child window or tab

import {test, expect} from '@playwright/test'

test.only("Handling alerts", async ({page})=>{
    await page.goto("https://demoqa.com/alerts")

    // Before you click on the element which is responsible for generation of an
    // alert or dialog event, we need to wait for "dialog" event to appear on the
    // page. Because playwright handles the dialog event by self.

    // Dialog
    // dialog.accept() - To click on Ok/Submit/Yes
    // dialog.dismiss() - To click on Cancel/No
    // dialog.message() - To get the text displaying on the alert

    page.on("dialog", async (dialog)=>{
        await console.log(dialog.message())
        await dialog.accept("Testing")
    })

    await page.locator("#alertButton").click()

    await page.locator("#confirmButton").click()
    await expect(page.locator("#confirmResult")).toHaveText("You selected Ok")

    await page.locator("#promtButton").click()
    await expect(page.locator("#promptResult")).toHaveText("You entered Testing")

})