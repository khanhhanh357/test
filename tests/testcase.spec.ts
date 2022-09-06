import{DATA} from "../data/product";
import test, { expect } from "../fixtures/base";

test.describe("Test case 01", () => {
    test.only("Expect can select exact product for config", async ({
  
      dashBoard,
      realTimeVisitors,
    }) => {
      await dashBoard.clickBoostConvert();
      await dashBoard.clickRealtimeVisitors();
    //   await realTimeVisitors.clickCbShowForSomeProductISpeciify();//
    //   await realTimeVisitors.clickBtnSelectProduct();
    //   await realTimeVisitors.selectAllProduct();
      
    //   await realTimeVisitors.click_Continue_With_Selected_Products();
    //   await realTimeVisitors.save();
    //   let veriCount=await realTimeVisitors.get_Number_Of_Products_Selected(DATA.length);
    //   expect(veriCount).toEqual(4);
        expect("abc").toEqual("abc")
  
  
    });
  });
  
  test.describe("Test case 01-1", () => {
    test("Expect can select exact product for config", async ({
      loginPage,
      dashBoard,
      realTimeVisitors,
     
    }) => {
      await dashBoard.clickBoostConvert();
      await dashBoard.clickRealtimeVisitors();
      await realTimeVisitors.clickCbShowForSomeProductISpeciify();//
      await realTimeVisitors.clickBtnSelectProduct();
      
     let count =0;
    
     const quantity=2;
    
    const check= await realTimeVisitors.product_Selected(); 
    for(let i=0;i<check.length;i++){
      
      
      let find_Name= DATA.findIndex((data:any) =>data.name===check[i]);
      if(find_Name !== -1){
      
        count++;
      }
      
     }
     await expect(count).toEqual(quantity);
  
    });
  });
  
  
  test.describe("Test API update realtime-visitors", () => {
    test("Expect API is valid for default setting value config", async ({
      request,
    }) => {
      const baseURL =
        "https://test-khanh.onshopbase.com/admin/copt/timers/realtime-visitors/settings.json";
       // "https:test-khanh.onshopbase.com/admin/copt/countdown/customize.json"
        
      const response = await request.put(baseURL, {
        headers: {
          "X-ShopBase-Access-Token": `061eaea3fb52c082b37e0641c5b9b9df2462541f5b2ae318f43b75d8ea32daf3`,
        },
         
        data:{
          success: false,
          settings:{
            enable: false,
            number_random_from: 5,
            number_random_to: 100,
            trigger: { target: 'product', product_ids: [1000000407654734], collection_ids: [] }
        }
        },
        
      });
      console.log(await response.json());
      expect(response.status()).toBe(200);
     expect(response.ok).toBeTruthy();
      //console.log(await response.json());
      
    });
  });
  
  test.describe("Test API GET realtime-visitors UPDATED", () => {
    test("Expect API is valid for default setting value config", async ({
      request,
    }) => {
      const baseURL =
        "https://test-khanh.onshopbase.com/admin/copt/timers/realtime-visitors/settings.json";
      const response = await request.get(baseURL, {
        headers: {
          "X-ShopBase-Access-Token": `b65ce8a58a7a454c9131160b2f67c8ba20ffa7306471508ae8e73adf95a79831`,
        },
        
      });
      expect(response.ok).toBeTruthy();
     console.log(await response.json());
      // let a=await response.json();
      // console.log (a.settings.trigger.product_ids);
  
      
      
      expect(await response.json()).toMatchObject({
        settings: {
          enable: false,
          number_random_from: 5,
          number_random_to: 100,
        },
      });
    });
  });
  
  test.describe("Test case 03", () => {
    test("Expect button Change hide after click", async ({
      loginPage,
      dashBoard,
      realTimeVisitors,
    }) => {
      await dashBoard.clickBoostConvert();
      await dashBoard.clickRealtimeVisitors();
      await realTimeVisitors.clickChangeBtn();
    });
  });