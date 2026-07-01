import {test, expect} from '@playwright/test'
import { DashboardPage } from '../pages/DashboardPage'

test("Search and add the product to the cart", async ({page})=>{
    const dp = new DashboardPage(page)
})