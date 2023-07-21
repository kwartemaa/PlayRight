import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/login-page";
const username = "standard_user"
const password = "secret_sauce"


test("valid login", async({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.goto();
    await loginPage.login(username,password)
    await expect(page.getByText('Products'), 'Login failed').toBeVisible();
})

