import { expect } from "@playwright/test";
import { test } from "../base/pomFixture";
import { URLS } from "../utils/constants";

import * as data from "../test-data/register-test-data.json"

test("Register Test", async ({ page, baseURL, registerPage }) => {
    await page.goto(`${baseURL}${URLS.ACCOUNT.REGISTER}`);
    await registerPage.enterFirstName(data.fistname);
    await registerPage.enterLastName(data.lastname);
    await registerPage.enterEmail(data.email);
    await registerPage.enterTelephone(data.phone_number);
    await registerPage.enterPassword(data.password);
    await registerPage.enterConfirmPassword(data.password);
    await registerPage.selectSubscribeNo();
    await registerPage.checkPrivacyPolicy();
    await registerPage.clickContinueBtn();
    expect(await page.title()).toBe("Your Account Has Been Created!");
    await page.screenshot({ path: './screenshots/register-tests/register.png' });
});

test('Register With Mismatched Passwords Test', async ({ page, baseURL, registerPage }) => {
    await page.goto(`${baseURL}${URLS.ACCOUNT.REGISTER}`);
    await registerPage.enterFirstName(data.fistname);
    await registerPage.enterLastName(data.lastname);
    await registerPage.enterEmail("example2@gmail.com");
    await registerPage.enterTelephone(data.phone_number);
    await registerPage.enterPassword(data.password);
    await registerPage.enterConfirmPassword("invalid-password");
    await registerPage.selectSubscribeNo();
    await registerPage.checkPrivacyPolicy();
    await registerPage.clickContinueBtn();
    const errorMessages = await registerPage.getErrorMessages();
    expect(errorMessages).toContain('Password confirmation does not match password!');
    await page.screenshot({ path: './screenshots/register-tests/register-mismatched-passwords.png' });
});

test('Register Without Agreeing to Privacy Policy Test', async ({ page, baseURL, registerPage }) => {
    await page.goto(`${baseURL}${URLS.ACCOUNT.REGISTER}`);
    await registerPage.enterFirstName(data.fistname);
    await registerPage.enterLastName(data.lastname);
    await registerPage.enterEmail(data.email);
    await registerPage.enterTelephone(data.phone_number);
    await registerPage.enterPassword(data.password);
    await registerPage.enterConfirmPassword(data.password);
    await registerPage.selectSubscribeNo();
    await registerPage.clickContinueBtn();
    const errorMessages = await registerPage.getErrorMessages();
    expect(errorMessages).toContain(' Warning: You must agree to the Privacy Policy!');
    await page.screenshot({ path: './screenshots/register-tests/register-without-agreeing-privacy-policy.png' });
});

test('Register With Previously Used Email Test', async ({ page, baseURL, registerPage }) => {
    await page.goto(`${baseURL}${URLS.ACCOUNT.REGISTER}`);
    await registerPage.enterFirstName(data.fistname);
    await registerPage.enterLastName(data.lastname);
    await registerPage.enterEmail("testexample3@example.com");
    await registerPage.enterTelephone(data.phone_number);
    await registerPage.enterPassword(data.password);
    await registerPage.enterConfirmPassword(data.password);
    await registerPage.selectSubscribeNo();
    await registerPage.checkPrivacyPolicy();
    await registerPage.clickContinueBtn();
    const errorMessages = await registerPage.getErrorMessages();
    expect(errorMessages).toContain(' Warning: E-Mail Address is already registered!');
    await page.screenshot({ path: './screenshots/register-tests/register-with-previously-used-email.png' });
});