import { Before, After } from "@cucumber/cucumber";
import { chromium,  Browser, Page } from "playwright";
import { ShopUnauthPage } from "../page-object/ShopUnauthPage";

let page: Page;
let browser: Browser;
let shopUnauthPage:ShopUnauthPage;

Before(async function () {
    browser = await chromium.launch({headless: false});
    page = await browser.newPage();
    shopUnauthPage.navigateToUnauthShopPage();
});

After(async function () {
   await browser.close();
});