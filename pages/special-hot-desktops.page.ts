import { Page, Locator, expect } from '@playwright/test';

export default class SpecialHotDesktopsPage {
    private readonly addToCart: Locator;
    private readonly cart: Locator;
    private readonly emptyCart: Locator;

    constructor(public page: Page, private readonly baseURL: string) {
        this.addToCart = this.page.locator("//span[contains(text(),'Add to Cart')]");
        this.cart = this.page.locator("//div[@id='entry_217825']//a[@role='button']");
        this.emptyCart = this.page.locator("//p[contains(text(),'Your shopping cart is empty!')]");
    }

    async addFirstProductToCart() {
        await this.page.hover("//div[@class='image']/a", {
            strict: false
        });
        await this.page.locator("(//button[@title='Add to Cart'])")
            .nth(0).click();
    }

    
    async verifyCartIsNotEmpty() {
        await this.cart.click();
        await expect (this.emptyCart).toBeHidden;
    }
}