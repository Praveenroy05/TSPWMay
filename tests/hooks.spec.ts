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

test("Test1", async()=>{
    console.log("Test1");
})

test("Test2", async()=>{
    console.log("Test2");
})

test("Test3", async()=>{
    console.log("Test3");
})
