import { Page } from "@playwright/test"; 
import { CommonPage } from "./page";
import { RealTimeVisitors } from "./realTimeVisitors";

export class Dashboard extends CommonPage{
    constructor(domain: string, page: Page){
        super(domain, page);
    }

    async clickBoostConvert(){
        await Promise.all([
            this.page.locator(`//p[contains(text(),"Boost Convert")]`).click(),
            this.page.waitForSelector(`//h2[contains(text(),"Pop types")]`, {
              state: "visible",
            }),
          ]);
    }

    async clickRealtimeVisitors() {
        await Promise.all([
          this.page.locator(`//a[contains(text(),"Real-time visitors")]`).click(),
          this.page.waitForSelector(`//h2[contains(text(),"Real-time visitors")]`, {
            state: `visible`,
          }),
        ]);
        return new RealTimeVisitors(this.domain, this.page);
      } 
}