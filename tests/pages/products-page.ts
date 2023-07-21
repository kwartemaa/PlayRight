import { expect, Locator, Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly pdtBackpack: Locator;
  readonly pdtOnesie: Locator;
  readonly pdtTShirt: Locator;
  readonly cart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pdtBackpack = page.locator("#add-to-cart-sauce-labs-backpack");
    this.pdtOnesie = page.locator("#add-to-cart-sauce-labs-onesie");
    this.pdtTShirt = page.locator("#add-to-cart-sauce-labs-bolt-t-shirt");
    this.cart = page.locator("//a[@class='shopping_cart_link']");
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async addProducts() {
    await this.pdtBackpack.click();
    await this.pdtOnesie.click();
    await this.pdtTShirt.click();
  }

  async navigateToCartPage(){
    await this.cart.click();
  }

}