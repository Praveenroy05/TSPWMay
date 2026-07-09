import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import data from '../testdata/login.json'

let lp :LoginPage
test.beforeEach(async ({page})=>{
    lp = new LoginPage(page)
    await lp.launchURL(data.url)
})

test("@smoke Login into application using correct credentials", async ()=>{
    await lp.loginIntoApplication(data.username, data.password)
    await expect(lp.homePageIdentifier).toBeVisible()
})

test("@smoke @regression Validate login with incorrect credentials", async ()=>{
    await lp.loginIntoApplication(data.username, data.incorrectPassword)
    await expect(lp.errorMessage).toHaveText("Incorrect email or password.")
})



// Jenkins - server
// MCP-AI Agent
// API testing 
// Visual Testing

// AI - chatgpt
// LLM - Large Language Model

// MCP - Model Context Protocol 
// Agent - 
