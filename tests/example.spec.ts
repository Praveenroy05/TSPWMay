import { test, expect } from '@playwright/test';


// Fixture - Is a special type of object which helps us in term of performing
// setup and tear down process

// page, browser, context and request

test('get started link',   async function({ page }){

  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

});

// Promise - Pending, success, rejected

// async- await  - goes together

// await  is NOT to wait for an element on the webpage but to finish the step and
// then only move to the next step for the execution
// auto wait inside PW - It waits for element to be available on the webpage


// How to write the test case in Playwright

