import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-object/LoginPage';
import { ShopUnauthPage } from '../../page-object/ShopUnauthPage';
import { ProductDetailsPage } from '../../page-object/ProductDetailsPage';

test.describe.parallel.only("E2E Test Suite", () => {
    let loginPage:LoginPage
    let shopUnauthPage:ShopUnauthPage

    test.beforeEach("landing to AUT", async ({ page }) => {
        loginPage = new LoginPage(page);
        shopUnauthPage = new ShopUnauthPage(page);
        await shopUnauthPage.navigateToUnauthShopPage();
    });

    test.skip("Sign in on DLP link with invalid cred @E2ETest", async ({ page }) => {
        // await page.click("text='Sign in'");
        // // await page.click('text="View Details"');
        // await page.fill("#logonIdentifier:visible", "invalid user");
        // await page.fill("#password", "invalid password");
        // await page.click("#next");
        // const errorElement = await page.locator("span[text='Please enter a valid email address.']");
        // const errorElement = await page.locator("div#emailErrContainer>span");
        // await expect(errorElement).toBeVisible();
        await shopUnauthPage.navigateToSignInPageUsingLink();
        await loginPage.loginWith("invalid user", "invalid password")
        await loginPage.validateTheErrorMessage();
    });

    test.skip("Sign in on DLP link with valid creds @E2ETest", async ({ page }) => {
        await page.click("text='Sign in'");
        // await page.click('text="View Details"');
        await page.fill("#logonIdentifier:visible", "usar_actmanlnk824231@mailinator.com");
        await page.fill("#password", "Test_1234");
        await page.click("#next");
        await page.waitForSelector("div .popular-text");
        const cardTagElement = await page.locator("div .popular-text");
        await expect(cardTagElement).toContainText('Most Popular');
        console.log("Hello " + cardTagElement);
    });

    test.only("Navigating to Unauth PDP @E2ETest", async({page}) => {
        let pdp:ProductDetailsPage = new ProductDetailsPage(page);
        let shopUnauthPage:ShopUnauthPage = new ShopUnauthPage(page)

        await shopUnauthPage.navigateToUnauthPdp()
        // await page.click("a.gb-primary-button:visible");
        // await page.click('text="View Details"');
        // await page.waitForSelector("div.plan-pricing-heading>p:visible")
        // const planName = await page.locator("div.plan-pricing-heading>p:visible")
        // await page.pause();
        // await expect (planName).toContainText("Premium");
        await pdp.validatePlanNameOnPdp("Premium")
        // await page.click("button.buy-button");
        // await page.waitForSelector("#logonIdentifier:visible");
    });
})
