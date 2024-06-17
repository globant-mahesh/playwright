import { Page, Locator, expect } from "@playwright/test";
import {AbstractPage} from "../page-object/AbstractPage"

export class LoginPage extends AbstractPage {
    readonly page: Page;
    readonly userNameTxt: Locator;
    readonly passwordTxt: Locator;
    readonly signInBtn: Locator;
    readonly errorTxt: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.userNameTxt = page.locator("#logonIdentifier:visible");
        this.passwordTxt = page.locator("#password");
        this.signInBtn = page.locator("#next");
        this.errorTxt = page.locator("div#emailErrContainer>span");
    }

    async loginWith(userName: string, password: string) {
        await this.userNameTxt.fill(userName)
        await this.passwordTxt.fill(password)
        await this.signInBtn.click()
    }

    async validateTheErrorMessage() {
        expect(this.errorTxt).toBeVisible()
    }
}