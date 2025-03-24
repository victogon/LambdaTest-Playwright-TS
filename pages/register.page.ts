import { Page, Locator } from '@playwright/test';

export default class RegisterPage {
    private readonly firstName: Locator;
    private readonly lastName: Locator;
    private readonly email: Locator;
    private readonly telephone: Locator;
    private readonly password: Locator;
    private readonly confirmPassword: Locator;
    private readonly subscribeYes: Locator;
    private readonly subscribeNo: Locator;
    private readonly privacyPolicy: Locator;
    private readonly continueBtn: Locator;
    private readonly errorMessage: Locator;

    constructor(public page: Page, private readonly baseURL: string) { 
        this.firstName = this.page.locator("#input-firstname");
        this.lastName = this.page.locator("#input-lastname");
        this.email = this.page.locator("#input-email");
        this.telephone = this.page.locator("#input-telephone");
        this.password = this.page.locator("#input-password");
        this.confirmPassword = this.page.locator("#input-confirm");
        this.subscribeYes = this.page.locator("//label[@for='input-newsletter-yes']");
        this.subscribeNo = this.page.locator("//label[@for='input-newsletter-no']");
        this.privacyPolicy = this.page.locator("//label[@for='input-agree']");
        this.continueBtn = this.page.locator("//input[@type='submit']");
        this.errorMessage = this.page.locator(".text-danger, .alert.alert-danger");
    }

    async enterFirstName(firstName: string) {
        await this.firstName.fill(firstName);
    }

    async enterLastName(lastName: string) {
        await this.lastName.fill(lastName);
    }

    async enterEmail(email: string) {
        await this.email.fill(email);
    }

    async enterTelephone(telephone: string) {
        await this.telephone.fill(telephone);
    }

    async enterPassword(password: string) {
        await this.password.fill(password);
    }

    async enterConfirmPassword(confirmPassword: string) {
        await this.confirmPassword.fill(confirmPassword);
    }

    async selectSubscribeYes() {
        await this.subscribeYes.click();
    }

    async selectSubscribeNo() {
        await this.subscribeNo.click();
    }

    async checkPrivacyPolicy() {
        await this.privacyPolicy.check();
    }

    async clickContinueBtn() {
        await this.continueBtn.click();
    }

    async getErrorMessages() {
        return await (this.errorMessage).allTextContents();
    }
}

