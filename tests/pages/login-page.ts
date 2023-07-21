import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly userNameField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameField = page.getByPlaceholder("Username");
    this.passwordField = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button");
    
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username, password) {
    await this.userNameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

}