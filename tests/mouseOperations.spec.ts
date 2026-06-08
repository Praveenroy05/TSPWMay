// click - click()
// double click - dblclick()
// right click - click({button:'right'})
// scrolling - scrollIntoViewIfNeeded()
// Mouse Hover - hover()
// Drag and drop - Locator.dragTo(Locator)

import {test, expect} from '@playwright/test'

test(" Handling double click and right click", async ({page})=>{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")

    // double click - dblclick()
    await page.getByText("Double-Click Me To See Alert", {exact:true}).dblclick()

    // Right click - click({button:'right})
    await page.getByText("right click me", {exact:true}).click({button:'right'})
    await page.waitForTimeout(2000)
    await page.getByText("Paste", {exact:true}).click()

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByText("Copy Text", {exact:true}).dblclick()
    await expect(page.locator("#field2")).toHaveValue("Hello World!")
    
    // Note: Playwright by default dismiss any type of alert that appear on the page

})


test("Hanlding scroll on the page", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // scrollIntoViewIfNeeded()
    // await page.getByText("Download Files", {exact:true}).scrollIntoViewIfNeeded()
    await page.getByText("Download Files", {exact:true}).click()
    await page.locator("#input1").fill("Testing")

    await page.locator("#inputText").fill("Scroll up")
    await expect(page.locator("#inputText")).toHaveValue("Scroll up")

    // Note: Playwright by default perform the scrolling on the web page
})

test("Handling mouse hover for an element", async ({page})=>{
    await page.goto("https://www.spicejet.com/")

    // hover()  - Hover over an element
    await page.getByText("Travel Policies", {exact:true}).hover()

    await page.getByTestId("test-id-Baggage Information").click()
})


test.only("Handling drag and drop operations", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const sourceElement = page.locator("#draggable")
    const targetElement = page.locator("#droppable")

    // locator.dragTo(locator)

    //await sourceElement.dragTo(targetElement)

    await sourceElement.hover()
    await page.mouse.down()
    await targetElement.hover()
    await page.mouse.up()

    await expect(page.locator("#droppable p")).toHaveText("Dropped!")
})

