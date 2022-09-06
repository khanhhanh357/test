import { test as baseTest } from "@playwright/test";
import { Dashboard } from "../pages/dashboard";
import { LoginPage } from "../pages/login";
import { RealTimeVisitors } from "../pages/realTimeVisitors";


const _test = baseTest.extend<{
    loginPage: LoginPage;
    dashBoard: Dashboard;
    realTimeVisitors: RealTimeVisitors;
    
  
  
  }>({
    loginPage: async ({ page }, use) => {
      const loginDomain: string =  process.env.SHOPBASE_LOGIN_DOMAIN!;
      console.log(loginDomain);
      const loginPage = new LoginPage(loginDomain, page);
      await loginPage.gotoLoginPage();
      await loginPage.enterUserCredentials({
       
        email: "khanhhanh357@gmail.com",
        password: "Khanh@123",
      });
      await loginPage.selectShopbaseShop();
      await use(loginPage);
    },
  
    dashBoard: async ({ loginPage }, use) => {
        const dashBoard=await loginPage.gotoDashboard();
      
      await use(dashBoard);
    },
    realTimeVisitors: async ({ dashBoard }, use) => {
        const realTimeVisitors=await dashBoard.clickRealtimeVisitors();
      await use(realTimeVisitors);
    },
    // productdetail: async({ page},use)=>{
    //   const productDomain: string =process.env.STORE_DOMAIN!;
    //   const productDetailPage=new ProductDetail(productDomain,page);
    //   await use( productDetailPage);
    // }
  });
  
  export default _test;
  export const expect = _test.expect;
  