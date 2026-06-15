import {test, expect} from '@playwright/test'


test("Calendar Handling", async({page})=>{
    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")

    const day = "15"
    const month = "May"
    const year = "2027"

    await page.locator(".ui-datepicker-trigger").click()

    const monthPicker = page.locator(".ui-datepicker-month")
    const yearPicker = page.locator(".ui-datepicker-year")

    while(true){
        if((await monthPicker.textContent() === month) && (await yearPicker.textContent() === year))
        {
            await page.getByText(day, {exact:true}).click()
            break;
        }
        else{
            await page.getByText("Next", {exact:true}).click()
        }
    }

    await page.waitForTimeout(2000)

})