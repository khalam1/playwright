import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly url: string = 'https://ncino.my.site.com/login';

  // Element selectors
  private usernameSelector = '#username';
  private passwordSelector = '#password';
  private loginButtonSelector = '#Login';

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto(this.url);
  }

  async enterUsername(username: string) {
    await this.page.fill(this.usernameSelector, username);
  }

  async enterPassword(password: string) {
    await this.page.fill(this.passwordSelector, password);
  }

  async clickLogin() {
    await this.page.click(this.loginButtonSelector);
  }

  // New method to perform login
  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  // Additional methods can be added here for other interactions or validations
}
