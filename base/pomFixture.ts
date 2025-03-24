import { test as baseTest } from "@playwright/test";
import RegisterPage from "../pages/register.page"
import LoginPage from "../pages/login.page"
import HomePage from "../pages/home.page"
import SpecialHotPage from "../pages/special-hot.page"
import SpecialHotDesktopsPage from "../pages/special-hot-desktops.page"

type pages = {
    registerPage: RegisterPage;
    loginPage: LoginPage;
    homePage: HomePage;
    specialHotPage: SpecialHotPage
    specialHotDesktopsPage: SpecialHotDesktopsPage
}

const testPages = baseTest.extend<pages>({
    registerPage: async ({ page, baseURL }, use) => {
        await use(new RegisterPage(page, baseURL as string));
    },
    loginPage: async ({ page, baseURL }, use) => {
        await use(new LoginPage(page, baseURL as string));
    },
    homePage: async ({ page, baseURL }, use) => {
        await use(new HomePage(page, baseURL as string));
    },
    specialHotPage: async ({ page, baseURL }, use) => {
        await use(new SpecialHotPage(page, baseURL as string));
    },
    specialHotDesktopsPage: async ({ page, baseURL }, use) => {
        await use(new SpecialHotDesktopsPage(page, baseURL as string));
    },
});

export const test = testPages;