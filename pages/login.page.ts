import { Page, Locator } from '@playwright/test';

export default class LoginPage {
    private readonly email: Locator;
    private readonly password: Locator;
    private readonly loginBtn: Locator;
    private readonly continueBtn: Locator;
    private readonly forgotPassword: Locator;
    private readonly wrongEmailWarning: Locator;

    constructor(public page: Page, private readonly baseURL: string) { 
        this.email = this.page.locator("#input-email");
        this.password = this.page.locator("#input-password");
        this.loginBtn = this.page.locator("//input[@type='submit']");
        this.continueBtn = this.page.locator("//a[contains(text(),'Continue')]");
        this.forgotPassword = this.page.locator("//div[@class='form-group']//a[contains(text(),'Forgotten Password')]");
        this.wrongEmailWarning = this.page.locator(".alert.alert-danger");
    }

    async enterEmail(email: string) {
        await this.email.fill(email);
    }

    async enterPassword(password: string) {
        await this.password.fill(password);
    }

    async clickLogin() {
        await this.loginBtn.click();
    }

    async clickContinueBtn() {
        await this.continueBtn.click();
    }

    async clickForgotPassword() {
        await this.forgotPassword.click();
    }

    async getWrongEmailWarning(): Promise<string> {
        await this.wrongEmailWarning.waitFor({ state: 'visible' });
        const warning = await this.wrongEmailWarning.textContent();
        return warning || 'Warning message not found';
    }
}