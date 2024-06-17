import {test, expect} from '@playwright/test' 
import {takeScreenShotOfPageAt, takeScreenShotOfElementAt} from './helpers'

test.describe.parallel.only("Regression Test Suite", () => {
    test.beforeEach("landing to AUT", async({page})=>{
        await page.goto("https://www.chevrolet.com/ownercenter/onstar/learn");
    })

    test('Validating DLP card', async({page}) => {
        const cardTagElement = await page.locator("div .popular-text");
        await expect(cardTagElement).toContainText('Most Popular');
        console.log("Hello " + cardTagElement);
    })
    
    test.only("Navigating to Unauth PDP @IntegrationTest", async({page}) => {
        await page.click("a.gb-primary-button:visible");
        // await page.click('text="View Details"');
        const planName = await page.locator("div.plan-pricing-heading>p:visible")
        await page.pause();
        await expect (planName).toContainText("Premium");
    });

    // only annotation for test
    test.only("Sign in on DLP link", async({page}) => {
        await page.click("text='Sign in'");
        // await page.click('text="View Details"');
        await page.fill("#logonIdentifier:visible", "usar_actmanlnk824231@mailinator.com");
        await page.fill("#password", "Test_1234");
        await page.click("#next");
        const cardTagElement = await page.locator("div .popular-text");
        await expect(cardTagElement).toContainText('Most Popular');
        console.log("Hello " + cardTagElement);
    });
    
    // only annotation for test
    test.only('Validating DLP @IntegrationTest', async({page}) => {
        await page.screenshot({path:"screenshots/dlp.png", fullPage:true})
        await expect(page).toHaveURL("https://www.chevrolet.com/ownercenter/onstar/learn")
        await expect(page).toHaveTitle("Shop OnStar and Chevrolet Connected Services")
        const cardTagElement = await page.locator("div .popular-text");
        // await cardTagElement.screenshot({path:"screenshots/dlp.png", fullPage:true})
        // await cardTagElement.screenshot({path:"screenshots/dlpcardtag.png"});
        await takeScreenShotOfElementAt("screenshots/dlpcardtag.png", cardTagElement);
        await takeScreenShotOfPageAt("screenshots/dlp.png", page);
        await expect(cardTagElement).toContainText('Most Popular');
        const contentAreaHeadingElement = await page.locator(".content-area>div.headline-text");
        await expect(contentAreaHeadingElement).toContainText('Welcome to OnStar');
        const contentDescriptionElement = await page.locator(".content-area>div.description-text");
        await expect(contentDescriptionElement).toBeVisible();
        console.log("Hello " + cardTagElement);
    })
})
