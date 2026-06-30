// How to enter value inside the textbox
// How to click on an element

import {test, expect} from '@playwright/test'

test("Login into application using correct credentials", async function({page}){
    // Goto url
    // fill the username
    // fill the password
    // click on submit button
    // Validate if the logout button is displaying
    // Validate there should be an element which should have a text value as "logged in successfully"
    

    // goto(url:string) - Launch the url on the specified browser. URL should
    // have http/https.

    await page.goto("https://practicetestautomation.com/practice-test-login/")
    // Auto wait - Playwright by default waits for an element to be visible
    // enable , interactable on the page

    // fill("value") - It will enter the value inside the textbox.
    const username = await page.getByRole("textbox", {name:'Username'})

    await username.fill("student")
    // toHaveValue("value") - It check if the TEXTBOX/INPUT is having the value as
    //  "value"
    await expect(username).toHaveValue("student")
    // pressSequentially("value") - It enter the value character by character in the textbox
    await page.getByLabel("Password").pressSequentially("Password123")
    // click() - Click on an element
    await page.getByRole("button", {name:'Submit'}).click()

    // Validate if the logout button is displaying
    // toBeVisible() - It checks if the element is visible on the page or not
    await expect(page.locator(".wp-block-button a")).toBeVisible()

    // Validate there should be an element which should have a text value as "logged in successfully"
    // toHaveText("value") - exact same text as appearing on the web page
    // toContainText("value") - Contains text
    await expect.soft(page.locator("h1.post-title")).toHaveText("Logged In Successfully")
    await expect(page.locator("h1.post-title")).toContainText("Successfully")

    // text() = "Logged In Successfully"
    // contains(text(), "successfully")

})

test("Handling radio button and checkbox", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // click() - Click on an element
    // check() - It validate of the element is already checked/selected, if it is
    // not selected then only it will click on the element. Only for radio or checkbox.

    // uncheck() - It validate of the element is not already checked/selected, if it is
    // selected then only it will click on the element. Only for radio or checkbox

    await page.getByText("Female", {exact: true}).check()
    // toBeChecked() - It will validate if the radio/checkbox is selected or not
    await expect(page.getByText("Female", {exact: true})).toBeChecked()

    await page.getByLabel("Thursday").check()
    await expect(page.getByLabel("Thursday")).toBeChecked()

    await page.getByLabel("Thursday").uncheck()
    await expect(page.getByLabel("Thursday")).not.toBeChecked()


})

// text value of an element

test("Get the text value of an element", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // textContext() - Will return the text value of an element even if it is hidden on the page
    // innerText() - Will return the text valuue for visible element only.

    const text = await page.locator("h1.title").innerText()
    console.log(text)

    // count() - Which will return the total number of matching element with the locator


    // const count = await page.locator(".title").count()
    // console.log(count)

    // allTextContents()
    // allInnerTexts()
    
    const alltexts = await page.locator(".title").allTextContents()
    console.log(alltexts);
    
})