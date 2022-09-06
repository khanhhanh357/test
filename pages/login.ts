import { Page } from "@playwright/test";
import { Dashboard } from "./dashboard";
import { CommonPage } from "./page";

export type Credentials = {
    email: string;
    password: string;
  };
  
  export class LoginPage extends CommonPage {
    constructor(domain: string, page: Page) {
      super(domain, page);
    }
  
    async gotoLoginPage() {
      await this.gotoPath("sign-in");
      await this.page.waitForLoadState("networkidle");
    }
  
    /**
     * Fill email/password fields
     * @param credential email/password
     */
    async enterUserCredentials(info: Credentials) {
      await this.page
        .locator(`[placeholder="example\@email\.com"]`)
        .fill(info.email);
      await this.page.locator(`[placeholder="Password"]`).fill(info.password);
      await Promise.all([
        this.page.locator("(//button[@type='submit'])[1]").click(),
        this.page.waitForNavigation(),
      ]);
    }
  
    async selectShopbaseShop() {
      await this.page.waitForSelector(
        `//span[text()="test-khanh2.onshopbase.com"]`,
        { state: "visible" }
      );
      await this.page
        .locator(`//span[text()="test-khanh2.onshopbase.com"]`)
        .click();
      await this.page.waitForSelector(
        `//h2[contains(text(), "Congratulations")]`,
        { state: "visible" }
      );
    }

    async gotoDashboard(){
        await this.gotoPath(`apps`)
        await this.page.waitForNavigation({waitUntil: 'networkidle'});
        return new Dashboard(this.domain, this.page);
    }

  }
  