import { Page, Locator } from '@playwright/test';

export default class SpecialHotPage {
    private readonly desktops: Locator;
    private readonly laptops: Locator;
    private readonly tablets: Locator;

    constructor(public page: Page, private readonly baseURL: string) {
        this.desktops = this.page.locator("//div[@id='entry_212503']//a[contains(text(),'Desktops')]");
        this.laptops = this.page.locator("//div[@id='entry_212503']//a[contains(text(),'Laptops')]");
        this.tablets = this.page.locator("//div[@id='entry_212503']//a[contains(text(),'Tablets')]");
    }

    async clickOnDesktops() {
        await this.desktops.click();
    }

    async clickOnLaptops() {
        await this.laptops.click(); 
    }

    async clickOnTablets() {
        await this.tablets.click();
    }
}