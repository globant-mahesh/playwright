import { Page, Locator, expect } from "@playwright/test";
import {AbstractPage} from "../page-object/AbstractPage"

export class Navbar extends AbstractPage{
    readonly page: Page;
    readonly signInLnk: Locator;
    readonly planNameTxt: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.planNameTxt = page.locator("div.plan-pricing-heading>p:visible");
    }

    async validatePlanNameOnPdp(planName: string) {
        // await page.pause();
        // await this.page.waitForSelector("div.plan-pricing-heading>p:visible")
        await this.planNameTxt.waitFor();
        await expect (this.planNameTxt).toContainText(planName);
    }

}