import { expect } from "@playwright/test";
import { test } from "../base/pomFixture";
import { URLS } from "../utils/constants";

test("Add To Cart Test", async ({ page, baseURL, specialHotPage, specialHotDesktopsPage }) => {
    await page.goto(`${baseURL}${URLS.HOME.SPECIAL_HOT}`);
    await specialHotPage.clickOnDesktops();
    await specialHotDesktopsPage.addFirstProductToCart();
    await specialHotDesktopsPage.verifyCartIsNotEmpty();
    await page.screenshot({ path: './screenshots/add-to-cart-tests/add-to-cart.png' });
});