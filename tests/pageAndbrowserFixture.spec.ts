import {test, expect} from '@playwright/test'

// Title of the test case should be unique in the same

// 

test("Title of the test case", async function({page}){

    // await launch the url
    // await fill the username
    // await fill the password
    // await click on login button
    // await validate if the login is successfull or not
   
})

test("Title", async function ({browser}){

    const context = await browser.newContext() // creates an instance of a browser
    const page = await context.newPage()
})

// 1. browser fixture will not automatically launch the browser
// Whereas Page fixture will automatically laucnh the browserand create a new page on the browser

// 2. page fixture will ONLY identify a single page on the browser where as browser
// can create multiple pages on the browser


// JS & TS both are asynchronous

// Pure JS & TS - JS & TS itself handle the asynchrounous






// async- await
// page and browser fixture