// Framework - It is a design principle. Set of guidlines.

// POM - Page Object Model. It is a design pattern. It is a class which represents 
// the page of the application. It contains the locators and method of a specific page.

// Page Object Model is a design pattern used in software testing to represent 
// a web page as an object. It is a way to organise and manage the interaction with 
// a web page by creating the properties (variable - locators) and methods 
// (Actions - loginIntoApplication(), launchURL(),....) of that particular page.


// This appraoch helps us in reducing the code duplication, improve readability 
// and maintainability by encapsulating the page-specific properties and methods 
// inside a particular page.

// LoginPage.ts - Locators and Methods related to Login Page ONLY


// POM framework from scrach:

// There are different layers that we have to create:


// 1. PAGE LAYER - Will create a package or folder(pages). Different class you will create it over here.
// LoginPage.ts, DashboardPage.ts, ..... These classes will consists of locator and methods related to specific class.
// email, password, loginBtn - loginIntoApplication(), invalidLogin()


// 2. TEST LAYER - Will create a package or folder (tests). Pure test case and assertion.
// We will call the locators and methods from the page class to the test files.
// LoginPageTest.spec.ts, DashboardPageTest.spec.ts, ...

// 3. TEST DATA LAYER - Json/Excel/.env - TestData.json, TestData.xlsx, qa.env, prod.env

// 4. CONFIGURATION LAYER - playwright.config.ts - Global Configuration file

// 5. UTILS LAYERS - We will crete a utils folder. Custom Function - screenshot(), scrollDown(),
// getDataFromExcel()

// 6. REPORT LAYER - HTML/Allure - We do not have to create it separately.





