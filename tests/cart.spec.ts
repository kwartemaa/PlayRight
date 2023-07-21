import {expect, test} from '@playwright/test'
import { ProductPage } from './pages/products-page'
import { LoginPage } from './pages/login-page'
const username = "standard_user"
const password = "secret_sauce"

test.beforeEach(async ({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.goto()
    await loginPage.login(username, password)
})


test("adding three products to cart and navigate to cart page", async({page})=>{
    const pdtPage = new ProductPage(page)
    await pdtPage.addProducts()
    await page.mouse.up();
    // await expect(page.getByLabel("remove-sauce-labs-onesie")).toBeVisible()
    await expect(page.getByText('3', { exact: true })).toBeVisible();
    pdtPage.navigateToCartPage()
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');  
    // await expect(page.url).toBe("https://www.saucedemo.com/cart.html")
    await expect(page.getByText('Sauce Labs Backpack', { exact: true })).toBeVisible();
    await expect(page.getByText('Sauce Labs Bolt T-Shirt', { exact: true })).toBeVisible();
    await expect(page.getByText('Sauce Labs Onesie', { exact: true })).toBeVisible();
})


