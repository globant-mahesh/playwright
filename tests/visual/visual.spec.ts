import { test, expect } from '@playwright/test'
import { takeScreenShotOfPageAt, takeScreenShotOfElementAt, getRandomNumber, getRandomString } from '../../utils/helpers'
import { LoginPage } from '../../page-object/LoginPage';
import { ShopUnauthPage } from '../../page-object/ShopUnauthPage';
import { ProductDetailsPage } from '../../page-object/ProductDetailsPage';

test.describe.parallel.only("Visual Test Suite", () => {
    let loginPage: LoginPage
    let shopUnauthPage: ShopUnauthPage

    test.beforeEach("landing to AUT", async ({ page, browserName }) => {
        // test.skip(browserName === 'webkit', "Test not supported on webkit yet")
        loginPage = new LoginPage(page);
        shopUnauthPage = new ShopUnauthPage(page);
        await shopUnauthPage.navigateToUnauthShopPage();
    });

    test.skip("Navigating to Unauth PDP @VisualTest", async ({ page }) => {
        let pdp: ProductDetailsPage = new ProductDetailsPage(page);
        let shopUnauthPage: ShopUnauthPage = new ShopUnauthPage(page);

        await shopUnauthPage.navigateToUnauthPdp();
        await pdp.validatePlanNameOnPdp("Premium");
        await expect(page).toHaveScreenshot('premiumpdp.png');
    });

    test.skip("Navigating to Unauth DLP @VisualTest", async ({ page, browserName }, testInfo) => {
        test.skip(browserName === 'webkit', "Test not supported on webkit yet")
        let pdp: ProductDetailsPage = new ProductDetailsPage(page);
        let shopUnauthPage: ShopUnauthPage = new ShopUnauthPage(page);

        await shopUnauthPage.validateCardTagVisually();
        await shopUnauthPage.validateCardTagUsingPercy();
        // Test Info object for test description
        console.log(testInfo.title);
    });

    test.skip("Navigating to Unauth DLP use of fixme annotation @VisualTest", async ({ page, browserName }, testInfo) => {
        // test.fixme(browserName === 'webkit', "Test not supported on webkit yet")
        let pdp: ProductDetailsPage = new ProductDetailsPage(page);
        let shopUnauthPage: ShopUnauthPage = new ShopUnauthPage(page);

        await shopUnauthPage.validateCardTagVisually();
        await shopUnauthPage.validateCardTagUsingPercy();
        // Test Info object for test description
        console.log(testInfo.title);
    });

    test.skip("Retry failed test case @VisualTest", async ({ page, browserName }, testInfo) => {
        page.goto("http:google.com")
        // Test Info object for test description
        console.log(testInfo.title);
    });

    test.skip("Multiple tabs @VisualTest", async ({ browser }, testInfo) => {
        let browserContext = await browser.newContext();
        const tab1 = await browserContext.newPage();
        const tab2 = await browserContext.newPage();
        const tab3 = await browserContext.newPage();
        // Test Info object for test description
        await tab1.goto("https://www.chevrolet.com/ownercenter/onstar/learn");
        await tab2.goto("https://www.chevrolet.com/ownercenter/onstar/learn");
        await tab3.goto("https://www.chevrolet.com/ownercenter/onstar/learn");
    });

    test.only("Use of data helper @VisualTest", async() => {
        const num = await getRandomNumber();
        const str = await getRandomString();
        console.log(num, str);
    })
});
