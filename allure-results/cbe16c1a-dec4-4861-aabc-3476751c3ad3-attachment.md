# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visualTesting.spec.ts >> Visual testing
- Location: tests\visualTesting.spec.ts:14:5

# Error details

```
Error: A snapshot doesn't exist at C:\Users\pkroy\Videos\TSPWMayMor26\tests\visualTesting.spec.ts-snapshots\page-chromium-win32.png, writing actual.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - link "FlightAware logo" [ref=e5] [cursor=pointer]:
        - /url: https://www.flightaware.com/
        - img "FlightAware logo" [ref=e6]
      - navigation [ref=e7]:
        - list [ref=e8]:
          - listitem [ref=e9]:
            - group [ref=e10]:
              - generic "Products" [ref=e11] [cursor=pointer]
          - listitem [ref=e12]:
            - group [ref=e13]:
              - generic "Industries" [ref=e14] [cursor=pointer]
          - listitem [ref=e15]:
            - group [ref=e16]:
              - generic "ADS-B" [ref=e17] [cursor=pointer]
          - listitem [ref=e18]:
            - group [ref=e19]:
              - generic "Flight Tracking" [ref=e20] [cursor=pointer]
  - main [ref=e21]:
    - generic [ref=e22]:
      - generic:
        - img "hero background" [ref=e23]
        - link "Photo by Talon6" [ref=e24] [cursor=pointer]:
          - /url: https://www.flightaware.com/photos/view/317437-75ba0e2c637327f72c41808d11e95de7d986cab6/staffpicksmonth/sort/date/page/1
          - img [ref=e25]
          - generic [ref=e27]: Photo by Talon6
      - generic [ref=e28]:
        - heading "FlightAware is Central to Aviation" [level=1] [ref=e29]:
          - generic [ref=e30]: FlightAware
          - text: is Central to Aviation
        - generic [ref=e32]:
          - img [ref=e34]
          - generic [ref=e36]:
            - textbox [ref=e37]
            - generic:
              - generic: Search for
              - generic: flight
    - generic [ref=e38]:
      - generic [ref=e42]:
        - region "Map" [ref=e43]
        - link "© OpenStreetMap" [ref=e48] [cursor=pointer]:
          - /url: http://www.openstreetmap.org/copyright
      - generic [ref=e49]:
        - heading "Connect our global flight map to your digital platforms." [level=2] [ref=e50]
        - link "Optimize your experience" [ref=e51] [cursor=pointer]:
          - /url: https://www.flightaware.com/commercial/integrated-maps/
          - generic [ref=e52]:
            - text: Optimize your experience
            - img [ref=e53]
    - generic [ref=e56]:
      - generic [ref=e57]:
        - heading "Innovative products powered by best-in-class data." [level=2] [ref=e58]
        - heading "Elevate your business with AI-assisted technology from FlightAware Foresight." [level=3] [ref=e59]
        - link "Learn more about FlightAware Foresight" [ref=e60] [cursor=pointer]:
          - /url: https://www.flightaware.com/commercial/foresight/
          - generic [ref=e61]:
            - text: Learn more about FlightAware Foresight
            - img [ref=e62]
        - img "Elevate your business with AI-assisted technology from FlightAware Foresight." [ref=e65]
      - generic [ref=e67]:
        - heading "Delivering data to developers on demand." [level=2] [ref=e68]
        - heading "AeroAPI is a robust, query-based API giving developers access to a huge amount of FlightAware’s current and historical data." [level=3] [ref=e69]
        - link "Integrate AeroAPI into your platform" [ref=e70] [cursor=pointer]:
          - /url: https://www.flightaware.com/commercial/aeroapi/
          - generic [ref=e71]:
            - text: Integrate AeroAPI into your platform
            - img [ref=e72]
      - generic [ref=e76]:
        - heading "Unlock real-time global flight tracking and ADS-B flight data." [level=2] [ref=e77]
        - heading "Tap into the data feed inside FlightAware Firehose to access the status and information for all flights on the ground and in the air." [level=3] [ref=e78]
        - link "Discover more about FlightAware Firehose" [ref=e79] [cursor=pointer]:
          - /url: https://www.flightaware.com/commercial/firehose/
          - generic [ref=e80]:
            - text: Discover more about FlightAware Firehose
            - img [ref=e81]
      - link "See all products" [ref=e84] [cursor=pointer]:
        - /url: https://www.flightaware.com/commercial
        - generic [ref=e85]:
          - text: See all products
          - img [ref=e86]
    - generic [ref=e90]:
      - heading "Secure, private fleet tracking." [level=2] [ref=e91]
      - heading "Keep track of every aircraft in your private fleet—including helicopters—with customized monitoring packages tailored to operations of any size." [level=3] [ref=e92]
      - heading "Compare tiers" [level=4] [ref=e93]:
        - link "Compare tiers" [ref=e94] [cursor=pointer]:
          - /url: https://www.flightaware.com/commercial/global
          - generic [ref=e95]:
            - text: Compare tiers
            - img [ref=e96]
    - generic [ref=e99]:
      - heading "Watch the world take flight." [level=2] [ref=e100]
      - heading "Explore dynamic photos of aircraft taken and shared by the FlightAware community." [level=3] [ref=e101]
      - generic [ref=e102]:
        - img "Airbus A320 (EC-MQE)" [ref=e104]
        - img "Cessna Caravan (N558EX)" [ref=e106]
        - img "Gulfstream Aerospace Gulfstream G650 (N312AT)" [ref=e108]
        - img "Warbirds" [ref=e110]
        - img "Piper Tomahawk with Dog" [ref=e112]
        - img "Boeing 747-400 (PH-BFG)" [ref=e114]
        - img "Boeing 757-200" [ref=e116]
        - img "Boeing 777-200 (N852FD)" [ref=e118]
        - img "De Havilland Mosquito (N474PZ)" [ref=e120]
        - img "Boeing 787-8 (N787BA)" [ref=e122]
        - img "Canadair CL-415 SuperScooper (N385AC)" [ref=e124]
        - img "TFL3131" [ref=e126]
      - heading "See all photos" [level=4] [ref=e128]:
        - link "See all photos" [ref=e129] [cursor=pointer]:
          - /url: https://www.flightaware.com/photos
          - generic [ref=e130]:
            - text: See all photos
            - img [ref=e131]
    - generic [ref=e135]:
      - generic [ref=e136]:
        - heading "Worldwide tracking, in your hands." [level=2] [ref=e137]
        - paragraph [ref=e138]: Download the FlightAware app to stay up to date on the go.
        - img "apps-qr-code" [ref=e139]
      - generic [ref=e140]:
        - switch "iOS Android" [checked] [ref=e141] [cursor=pointer]:
          - generic [ref=e142]: iOS
          - generic [ref=e143]: Android
        - img "ios-center" [ref=e145]
    - generic [ref=e147]:
      - heading "Customize your tracking." [level=2] [ref=e148]
      - paragraph [ref=e149]: Create your free FlightAware account and unlock real-time tracking, custom alerts, and more.
      - link "Sign up" [ref=e151] [cursor=pointer]:
        - /url: https://login.flightaware.com/signup
  - contentinfo [ref=e152]:
    - generic [ref=e154]:
      - img "FlightAware logo" [ref=e156]
      - generic [ref=e157]:
        - navigation [ref=e159]:
          - heading "About" [level=6] [ref=e160]
          - list [ref=e161]:
            - listitem [ref=e162]:
              - link "About FlightAware" [ref=e163] [cursor=pointer]:
                - /url: https://www.flightaware.com/about/
            - listitem [ref=e164]:
              - link "Newsroom" [ref=e165] [cursor=pointer]:
                - /url: https://www.flightaware.com/news/
            - listitem [ref=e166]:
              - link "Advertise With Us" [ref=e167] [cursor=pointer]:
                - /url: https://www.flightaware.com/commercial/advertising/
            - listitem [ref=e168]:
              - link "Careers" [ref=e169] [cursor=pointer]:
                - /url: https://www.flightaware.com/about/careers/
            - listitem [ref=e170]:
              - link "Webinars" [ref=e171] [cursor=pointer]:
                - /url: https://go.flightaware.com/webinars
            - listitem [ref=e172]:
              - link "Blog" [ref=e173] [cursor=pointer]:
                - /url: https://blog.flightaware.com/
            - listitem [ref=e174]:
              - link "Engineering Blog" [ref=e175] [cursor=pointer]:
                - /url: https://flightaware.engineering/
            - listitem [ref=e176]:
              - link "Store" [ref=e177] [cursor=pointer]:
                - /url: https://flightaware.store/
        - generic [ref=e178]:
          - navigation [ref=e179]:
            - heading "Community" [level=6] [ref=e180]
            - list [ref=e181]:
              - listitem [ref=e182]:
                - link "Squawks" [ref=e183] [cursor=pointer]:
                  - /url: https://www.flightaware.com/squawks/
              - listitem [ref=e184]:
                - link "Discussion" [ref=e185] [cursor=pointer]:
                  - /url: https://discussions.flightaware.com/
              - listitem [ref=e186]:
                - link "Photos" [ref=e187] [cursor=pointer]:
                  - /url: https://www.flightaware.com/photos/
              - listitem [ref=e188]:
                - link "ADS-B Statistics" [ref=e189] [cursor=pointer]:
                  - /url: https://www.flightaware.com/adsb/stats/
          - navigation [ref=e190]:
            - heading "Tracking" [level=6] [ref=e191]
            - list [ref=e192]:
              - listitem [ref=e193]:
                - link "Flight Finder" [ref=e194] [cursor=pointer]:
                  - /url: https://www.flightaware.com/live/findflight/
              - listitem [ref=e195]:
                - link "IFR Route Analyzer" [ref=e196] [cursor=pointer]:
                  - /url: https://www.flightaware.com/statistics/ifr-route/
        - navigation [ref=e198]:
          - heading "Products" [level=6] [ref=e199]
          - list [ref=e200]:
            - listitem [ref=e201]:
              - link "AeroAPI" [ref=e202] [cursor=pointer]:
                - /url: https://www.flightaware.com/commercial/aeroapi/
            - listitem [ref=e203]:
              - link "FlightAware Firehose" [ref=e204] [cursor=pointer]:
                - /url: https://www.flightaware.com/commercial/firehose/
            - listitem [ref=e205]:
              - link "FlightAware Foresight" [ref=e206] [cursor=pointer]:
                - /url: https://www.flightaware.com/commercial/foresight/
            - listitem [ref=e207]:
              - link "Reports" [ref=e208] [cursor=pointer]:
                - /url: https://www.flightaware.com/commercial/reports/
            - listitem [ref=e209]:
              - link "Integrated Maps" [ref=e210] [cursor=pointer]:
                - /url: https://www.flightaware.com/commercial/integrated-maps/
            - listitem [ref=e211]:
              - link "FlightAware Aviator" [ref=e212] [cursor=pointer]:
                - /url: https://www.flightaware.com/commercial/aviator/
            - listitem [ref=e213]:
              - link "FlightAware Global" [ref=e214] [cursor=pointer]:
                - /url: https://www.flightaware.com/commercial/global/
            - listitem [ref=e215]:
              - link "FlightAware FBO Toolbox" [ref=e216] [cursor=pointer]:
                - /url: https://www.flightaware.com/commercial/fbo-toolbox/
            - listitem [ref=e217]:
              - link "FlightAware TV℠" [ref=e218] [cursor=pointer]:
                - /url: https://www.flightaware.com/commercial/tv/
            - listitem [ref=e219]:
              - link "GlobalBeacon" [ref=e220] [cursor=pointer]:
                - /url: https://www.flightaware.com/commercial/globalbeacon/
            - listitem [ref=e221]:
              - link "ADS-B Receivers" [ref=e222] [cursor=pointer]:
                - /url: https://www.flightaware.com/adsb/piaware/
        - generic [ref=e223]:
          - navigation [ref=e224]:
            - heading "Customer Service" [level=6] [ref=e225]
            - list [ref=e226]:
              - listitem [ref=e227]:
                - link "FAQs" [ref=e228] [cursor=pointer]:
                  - /url: https://www.flightaware.com/about/faq/
              - listitem [ref=e229]:
                - link "Contact Us" [ref=e230] [cursor=pointer]:
                  - /url: https://www.flightaware.com/about/contact/
          - generic [ref=e231]:
            - link "Get our mobile apps" [ref=e232] [cursor=pointer]:
              - /url: https://www.flightaware.com/apps
              - img [ref=e233]
              - text: Get our mobile apps
            - navigation [ref=e235]:
              - list [ref=e236]:
                - listitem [ref=e237]:
                  - link "Facebook" [ref=e238] [cursor=pointer]:
                    - /url: https://www.facebook.com/FlightAware
                    - img [ref=e239]
                - listitem [ref=e241]:
                  - link "Instagram" [ref=e242] [cursor=pointer]:
                    - /url: https://www.instagram.com/flightaware/
                    - img [ref=e243]
                - listitem [ref=e245]:
                  - link "LinkedIn" [ref=e246] [cursor=pointer]:
                    - /url: https://www.linkedin.com/company/flightaware/
                    - img [ref=e247]
                - listitem [ref=e249]:
                  - link "X" [ref=e250] [cursor=pointer]:
                    - /url: https://twitter.com/flightaware
                    - img [ref=e251]
      - separator [ref=e253]
      - navigation [ref=e254]:
        - list [ref=e255]:
          - listitem [ref=e256]: © 2026 FlightAware
          - listitem [ref=e257]:
            - text: /
            - link "Privacy" [ref=e258] [cursor=pointer]:
              - /url: https://www.flightaware.com/about/privacy
          - listitem [ref=e259]:
            - text: /
            - link "Terms of Use" [ref=e260] [cursor=pointer]:
              - /url: https://www.flightaware.com/about/terms-of-use
          - listitem [ref=e261]:
            - text: /
            - link "Cookie Settings" [ref=e262] [cursor=pointer]:
              - /url: "#"
  - alert [ref=e263]
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | 
  3  | test("Screenshot of the page", async({page})=>{
  4  |     await page.goto("https://testautomationpractice.blogspot.com/")
  5  |     await page.screenshot({path: 'screenshot/page.png'})
  6  | })
  7  | 
  8  | test("Full Screenshot of the page", async({page})=>{
  9  |     await page.goto("https://testautomationpractice.blogspot.com/")
  10 |     await page.screenshot({path: 'screenshot/fullPage.png', fullPage:true})
  11 | })
  12 | 
  13 | 
  14 | test("Visual testing", async({page})=>{
  15 |     await page.goto("https://www.flightaware.com/")
> 16 |     expect(await page.screenshot()).toMatchSnapshot("page.png")
     |                                     ^ Error: A snapshot doesn't exist at C:\Users\pkroy\Videos\TSPWMayMor26\tests\visualTesting.spec.ts-snapshots\page-chromium-win32.png, writing actual.
  17 | })
```