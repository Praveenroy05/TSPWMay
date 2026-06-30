import {test, expect} from '@playwright/test'
import path from 'path'

test("Handling file download", async ({page})=>{
    await page.goto("https://demoqa.com/upload-download")

    const downloadResult = page.waitForEvent("download")
    // console.log(downloadResult)
    
    await page.locator("#downloadButton").click()

    const download = await downloadResult
    // console.log(download);

    const downloadDir = path.join(__dirname, "../downloads")
    // C:\Users\pkroy\Videos\TSPWMayMor26\downloads\AILLM.jpg

    // suggestedFilename() - Return the filename of the downloaded file

    const fileName = await download.suggestedFilename()

    const filePath = await path.join(downloadDir, fileName)
    console.log(filePath);// C:\Users\pkroy\Videos\TSPWMayMor26\downloads\sampleFile.jpeg
    

    // saveAs(fielPath) - It will copy the filpath in you system
    await download.saveAs(filePath)

    await expect(filePath).toContain(fileName)

    

    // Handle calendar date
})