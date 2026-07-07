// Hooks - Is a special type of method which perform setup and teardown process

// test.beforeAll(){...} - It will be executed before running any of the test cases. - DB connection
// test.beforeEach(){...} - It will be executed before running each and every test case. - Common steps of all the test - Precondition
// test()
// test.afterEach(){...} - It will be executed after running and each and every test cases.
// test.afterAll(){...} - It will be executed after execution of all the test cases. - Close DB connection

import {test, expect} from '@playwright/test'

test.beforeAll(async ()=>{
    console.log("Before All");
})

test.beforeEach(async ()=>{
    console.log("Before Each");
})

test.afterEach(async ()=>{
    console.log("After Each");
})

test.afterAll(async ()=>{
    console.log("After All");
})

test("Test1", async({page})=>{
     await page.goto("https://practicetestautomation.com/practice-test-login/")
    // Auto wait - Playwright by default waits for an element to be visible
    // enable , interactable on the page

    // fill("value") - It will enter the value inside the textbox.
    const username = await page.getByRole("textbox", {name:'Username'})

    await username.fill("student")
    await page.pause()
    // toHaveValue("value") - It check if the TEXTBOX/INPUT is having the value as
    //  "value"
    await expect(username).toHaveValue("student")
    // pressSequentially("value") - It enter the value character by character in the textbox
    await page.getByLabel("Password").pressSequentially("Password123")
    // click() - Click on an element
    await page.getByRole("button", {name:'Submit'}).click()
})

test("Test2", async()=>{
    console.log("Test2");
})

test("Test3", async()=>{
    console.log("Test3");
})
