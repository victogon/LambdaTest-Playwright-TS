import { expect } from "@playwright/test";
import { test } from "../base/pomFixture";
import { URLS } from "../utils/constants";

import * as data from "../test-data/login-test-data.json"

test("Login Test", async ({ page, baseURL, loginPage }) => {
    await page.goto(`${baseURL}${URLS.ACCOUNT.LOGIN}`);
    await loginPage.enterEmail(data.email);
    await loginPage.enterPassword(data.password);
    await loginPage.clickLogin();
    await expect(page).toHaveURL(`${baseURL}${URLS.ACCOUNT.ACCOUNT}`);
    await page.screenshot({ path: './screenshots/login-tests/login.png' });
});

test("Logout Test", async ({ page, baseURL, loginPage, homePage }) => {
    await page.goto(`${baseURL}${URLS.ACCOUNT.LOGIN}`);
    await loginPage.enterEmail(data.email);
    await loginPage.enterPassword(data.password);
    await loginPage.clickLogin();
    await expect(page).toHaveURL(`${baseURL}${URLS.ACCOUNT.ACCOUNT}`);
    await homePage.hoverMyAccount();
    await homePage.clickLogout();
    expect(await page.title()).toBe("Account Logout");
    await page.screenshot({ path: './screenshots/login-tests/logout.png' });
});

test("New Customer - Continue Button Test", async ({ page, baseURL, loginPage }) => {
    await page.goto(`${baseURL}${URLS.ACCOUNT.LOGIN}`);
    await loginPage.clickContinueBtn();
    await expect(page).toHaveURL(`${baseURL}${URLS.ACCOUNT.REGISTER}`);
    await page.screenshot({ path: './screenshots/login-tests/continue-button.png' });
});

test("Forgotten Password Test", async ({ page, baseURL, loginPage }) => {
    await page.goto(`${baseURL}${URLS.ACCOUNT.LOGIN}`);
    await loginPage.clickForgotPassword();
    await expect(page).toHaveURL(`${baseURL}${URLS.ACCOUNT.FORGOTTEN_PASSWORD}`);
    await page.screenshot({ path: './screenshots/login-tests/forgotten-password.png' });
});

test("Login With Incorrect Email Test", async ({ page, baseURL, loginPage }) => {
    await page.goto(`${baseURL}${URLS.ACCOUNT.LOGIN}`);
    await loginPage.enterEmail("invalidemail@gmail.com");
    await loginPage.enterPassword(data.password);
    await loginPage.clickLogin();
    const errorMessage = await loginPage.getWrongEmailWarning();
    expect(errorMessage).toContain("Warning: No match for E-Mail Address and/or Password");
    await page.screenshot({ path: './screenshots/login-tests/incorrect-email.png' });
});