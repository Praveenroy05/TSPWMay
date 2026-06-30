import { test, expect } from '@playwright/test';


// Fixture - Is a special type of object which helps us in term of performing
// setup and tear down process

// page, browser, context and request

test('get started link',   async function({ page }){

  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();



  page.getByText("Test login", {exact:true}).first()
  page.getByLabel("Tuesday", {exact:true})
  page.getByPlaceholder("name@example.com", {exact:true})
  page.getByAltText("logo image", {exact:true})
  page.getByTitle("Tooltip text", {exact:true})
  page.getByTestId("product-grid").last()

  page.getByRole('heading', {name:'Student Registration Form'}).nth(1)
  page.getByRole('button', {name:'Submit'})
  page.getByRole('textbox', {name:'Username'})
  page.getByRole('link', {name:'Home'})
  page.getByRole('checkbox', {name: 'Tuesday'})
  page.getByRole('radio', {name: 'Male'})


});

// Promise - Pending, success, rejected

// async- await  - goes together

// await  is NOT to wait for an element on the webpage but to finish the step and
// then only move to the next step for the execution
// auto wait inside PW - It waits for element to be available on the webpage


// How to write the test case in Playwright

