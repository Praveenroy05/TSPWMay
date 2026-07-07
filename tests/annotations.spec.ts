/*

test.skip() marks the test as irrelevant. Playwright does not run such a test. 

test.fail() marks the test as failing. Playwright will run this test and ensure 
it does indeed fail. If the test does not fail, Playwright will complain.

test.fixme() marks the test as failing. Playwright will not run this test, 
as opposed to the fail annotation. Use fixme when running the test is slow 
or crashes.

test.slow() marks the test as slow and triples the test timeout.

test.only() - Playwright will run only those test cases which you have marked
as test.only()


*/

import {test,expect} from '@playwright/test'

test.skip("Test1", async()=>{
    console.log("Test1");
    
})

test.fail("Test2", async()=>{
    console.log("Test2");
    expect(25).toBe(20)  
})

test("Test3", async()=>{
    console.log("Test3");
    
})

test("Test4", async()=>{
    console.log("Test4");
    
})

test("Test5", async({page})=>{
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
    await page.getByLabel("Pass").pressSequentially("Password123")
    // click() - Click on an element
    await page.getByRole("button", {name:'Submit'}).click()
})