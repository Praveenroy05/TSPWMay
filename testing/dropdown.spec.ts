// Drop down - 

// 2 Types of DD

// 1. Static drop down - The value will never change - Gender/Country
    // a. Single select DD
    // b. Multi select DD


// 2. Dynamic drop down - The value will be changable - Electronics 
    // a. Single select DD
    // b. Multi select DD

// Developement of DD element

// 1. <select> tag
// 2. NON select tag - div, span, li, ul, ....


// 1. DD Developed using <select> tag

// Step by step procedure to select the value from the DD

// 1. Launch the url
// 2. Locate the drop down element by writing the locator
// 3. Get the value from the drop down using - selectOption("value", {label or value or index})
// Example:- page.locator("#dd").selectOption("AU", {label:'Australia'} or {index:5})
// OR {value:'AU'}

// 4. If the drop down is multi-select - selectOption(["AU", "BS", "IND"] OR [{...}])


//************************************************* */

// 2. DD developed using NON select tag
// Step by step procedure to select the value from the DD


// 1. Launch the url
// 2. Locate the drop down element by writing the locator
// 3. Click on the drop down element identified in step #2
// 4. Identify and click on the element that you want to select from the drop down

import {test, expect} from '@playwright/test'

test(" Drop down developed using SELECT tag handling", async ({page})=>{
    // 1. Launch the url
    await page.goto("https://practice.expandtesting.com/dropdown")

    // 2. Locate the drop down element by writing the locator
    const countryDD = await page.locator("#country")


    // Get the value from the drop down using - 
    // selectOption("value", {label or value or index})

    await countryDD.selectOption("AR")
    // toHaveValue()
    await expect(countryDD).toHaveValue("AR")
    await countryDD.selectOption({value: 'IE'})
    await countryDD.selectOption({label:'Maldives'})
    await countryDD.selectOption({index: 159})

    await page.goto("https://demoqa.com/select-menu")
    const carDD = await page.locator("#cars")
    await carDD.selectOption(["volvo", "opel"])
    await expect(carDD).toHaveValues(["volvo", "opel"])

    await carDD.selectOption([{value:'audi'}, {index: 2}, {label:'Saab'}])

})

// Mouse Operations