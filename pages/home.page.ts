import { Page, Locator } from '@playwright/test';
import { URLS } from '../utils/constants';

export default class HomePage {
    private readonly shopByCategory: Locator;
    private readonly home: Locator;
    private readonly specialHot: Locator;
    private readonly blog: Locator;
    private readonly megaMenu: Locator;
    private readonly addOns: Locator;
    private readonly myAccount: Locator;
    private readonly login: Locator;
    private readonly register: Locator;
    private readonly logout: Locator;

    constructor(public readonly page: Page, private readonly baseURL: string) { 
        this.shopByCategory = this.page.locator("//div[@id='entry_217833']//a[@aria-label='Shop by Category']");
        this.home = this.page.locator("//span[contains(text(),'Home')]");
        this.specialHot = this.page.locator("//ul[@class='navbar-nav horizontal']//span[contains(text(),'Special')]");
        this.blog = this.page.locator("//ul[@class='navbar-nav horizontal']//span[contains(text(),'Blog')]");
        this.megaMenu = this.page.locator("//span[contains(text(),'Mega Menu')]");
        this.addOns = this.page.locator("//span[contains(text(),'AddOns')]");
        this.myAccount = this.page.locator("//ul[@class='navbar-nav horizontal']//span[contains(text(),'My account')]");
        this.login = this.page.locator("//span[contains(text(),'Login')]");
        this.register = this.page.locator("//span[contains(text(),'Register')]");
        this.logout = this.page.locator("//span[contains(text(),'Logout')]");
    }

    async navigate() {
        await this.page.goto(`${this.baseURL}${URLS.HOME.ROOT}`);
    }

    async clickShopByCategory() {
        await this.shopByCategory.click();
    }

    async clickHome() {
        await this.home.click();
    }

    async clickSpecialHot() {
        await this.specialHot.click();
    }

    async clickBlog() {
        await this.blog.click();
    }

    async hoverMegaMenu() {
        await this.megaMenu.hover();
    }

    async hoverAddOns() {
        await this.addOns.hover();
    }

    async hoverMyAccount() {
        await this.myAccount.hover();
    }

    async clickLogin() {
        await this.hoverMyAccount();
        await this.login.click();
    }

    async clickRegister() {
        await this.hoverMyAccount();
        await this.register.click();
    }

    async clickLogout() {
        await this.logout.click();
    }
}