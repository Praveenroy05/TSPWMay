/*

API - Application Programming Interface

// Web Application

// Frontend - JS/TS, Angular/React/Vue,...
// Backend - Java/Python/Php/.net,...
// Database - SQL, MySQL, MongoDB, PostgreS,...


API - {"":""}

// GET, POST, PUT, DELETE, PATCH

// Status - 200, 201, 400, 403, 404, 500, 503

1. Request Format:

URL - https://rahulshettyacademy.com/api/ecom/auth/login
HTTP METHOD - POST
Request Headers - Meta data - Additional Information - {key: value}
Body - Payload  - {
    "userEmail": "testnHNk@gmail.com",
    "userPassword": "Testing@1234"
}

2. Response Format:

Status Code - 200
Response Header - key:value
Response body - JSON



URL -  https://rahulshettyacademy.com/api/ecom/auth/login
Method  - Post
Body - Payoad - {
    "userEmail": "testnHNk@gmail.com",
    "userPassword": "Testing@1234"
}

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmQ0Njc1NWFlMmFmZDRjMGI2Mjg2YmMiLCJ1c2VyRW1haWwiOiJ0ZXN0bkhOa0BnbWFpbC5jb20iLCJ1c2VyTW9iaWxlIjoxMjM0NTY3ODkwLCJ1c2VyUm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNzgzOTA5NTIwLCJleHAiOjE4MTU0NjcxMjB9.PahKaXJ5uL1xH4IOkx1cGEWnSc9Q95q4rNMhHXZ5c_o",
    "userId": "66d46755ae2afd4c0b6286bc",
    "message": "Login Successfully"
}



*/

// page, browser, request
import {test,expect} from '@playwright/test'

const loginURL = "https://rahulshettyacademy.com/api/ecom/auth/login"
const loginPayload = {
    "userEmail": "testnHNk@gmail.com",
    "userPassword": "Testing@1234"
}


test("API automation validation", async ({request})=>{

    const response = await request.post(loginURL,
    {
        data: loginPayload,
    })
       // headers: {}

    console.log(await response.json());
    


})