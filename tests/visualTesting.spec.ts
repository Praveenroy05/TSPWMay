import {test,expect} from '@playwright/test'

test("Screenshot of the page", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.screenshot({path: 'screenshot/page.png'})
})

test("Full Screenshot of the page", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.screenshot({path: 'screenshot/fullPage.png', fullPage:true})
})


test("Visual testing", async({page})=>{
    await page.goto("https://www.flightaware.com/")
    await page.waitForTimeout(2000)
    expect(await page.screenshot()).toMatchSnapshot("page.png")
})