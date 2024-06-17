import { Page, Locator, expect } from "@playwright/test";
import  percySnapshot from "@percy/playwright";
import {AbstractPage} from "../page-object/AbstractPage"

export class ShopUnauthPage extends AbstractPage {
    readonly page: Page;
    readonly signInLnk: Locator;
    readonly viewDetailsFirstBtn: Locator;
    readonly cardTagTxt: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.signInLnk = page.locator("text='Sign in'");
        this.viewDetailsFirstBtn = page.locator("a.gb-primary-button[role=link]");
        this.cardTagTxt = page.locator("div .popular-text");
    }

    async navigateToUnauthShopPage() {
        await this.page.goto("https://www.chevrolet.com/ownercenter/onstar/learn");
        await this.page.waitForURL("https://www.chevrolet.com/ownercenter/onstar/learn")
    }

    async navigateToSignInPageUsingLink() {
        await this.signInLnk.click();
        // this.page.waitForSelector("#logonIdentifier");
    }

    async navigateToUnauthPdp() {
        await this.viewDetailsFirstBtn.click()
    }

    async validateCardTagVisually() {
        await expect(this.cardTagTxt).toHaveScreenshot('bundledcardtag.png');
    }

    async validateCardTagUsingPercy() {
        await percySnapshot(this.page, 'Unauth Shop Page');
    }
}