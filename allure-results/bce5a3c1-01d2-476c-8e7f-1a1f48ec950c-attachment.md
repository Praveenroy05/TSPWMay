# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: annotations.spec.ts >> Test2
- Location: tests\annotations.spec.ts:27:6

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 20
Received: 25
```

# Test source

```ts
  1  | /*
  2  | 
  3  | test.skip() marks the test as irrelevant. Playwright does not run such a test. 
  4  | 
  5  | test.fail() marks the test as failing. Playwright will run this test and ensure 
  6  | it does indeed fail. If the test does not fail, Playwright will complain.
  7  | 
  8  | test.fixme() marks the test as failing. Playwright will not run this test, 
  9  | as opposed to the fail annotation. Use fixme when running the test is slow 
  10 | or crashes.
  11 | 
  12 | test.slow() marks the test as slow and triples the test timeout.
  13 | 
  14 | test.only() - Playwright will run only those test cases which you have marked
  15 | as test.only()
  16 | 
  17 | 
  18 | */
  19 | 
  20 | import {test,expect} from '@playwright/test'
  21 | 
  22 | test.skip("Test1", async()=>{
  23 |     console.log("Test1");
  24 |     
  25 | })
  26 | 
  27 | test.fail("Test2", async()=>{
  28 |     console.log("Test2");
> 29 |     expect(25).toBe(20)
     |                ^ Error: expect(received).toBe(expected) // Object.is equality
  30 |     
  31 | })
  32 | 
  33 | test("Test3", async()=>{
  34 |     console.log("Test3");
  35 |     
  36 | })
  37 | 
  38 | test("Test4", async()=>{
  39 |     console.log("Test4");
  40 |     
  41 | })
  42 | 
  43 | test("Test5", async()=>{
  44 |     console.log("Test5");
  45 |     
  46 | })
```