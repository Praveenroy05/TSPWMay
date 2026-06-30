// File Upload

import {test, expect} from '@playwright/test'
import path from 'path'

test("Handling File Uploads", async ({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    // setInputFiles(["Path of the file"]) - It will upload the file to 
    // the element <input type="file">

    console.log(__dirname) //C:\Users\pkroy\Videos\TSPWMayMor26\tests

    const filePath1 = path.join(__dirname, "../testdata/AILLM.jpg")
    const filePath2 = path.join(__dirname, "../testdata/AILLM1.jpg")

    console.log(filePath1) // C:\Users\pkroy\Videos\TSPWMayMor26\testdata\AILLM.jpg
    

    // await page.locator("#filesToUpload").
    //      setInputFiles(["testdata/AILLM.jpg","testdata/AILLM1.jpg"])

    await page.locator("#filesToUpload").
         setInputFiles([filePath1, filePath2])

    await expect(page.locator("#fileList li").nth(0)).toContainText("AILLM.jpg")
    await expect(page.locator("#fileList li").nth(1)).toContainText("AILLM1.jpg")



})