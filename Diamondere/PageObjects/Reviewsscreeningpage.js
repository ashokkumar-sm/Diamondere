const ElementUtil = require('../../CommonUtils/ElementUtil');
const BrowserUtil = require('../../CommonUtils/BrowserUtil');
const data = require('../TestData/CA.json');
const context = require('../../CommonUtils/ScenarioContext');
const diamondere = require('../Configs/dmd_' + global.testEnv + '.js');

class reviewscreening {

   get lnkaccreditionicon() {
      return $('//a[@title="Diamondere-inc In CA"]')
   }

   get txtreadreviewsfor() {
      return $('//p[@class="subtitle is-size-7"]')
   }

   get txtproductreadreviewsfor() {
      return $('//p[@class="title is-size-4 is-uppercase"]')
   }

   get txtstarratingreadreviewsfor() {
      return $('//p[@class="title is-size-4 is-uppercase"]//following::span[@class="vue-star-rating vue-star-rating-inline"]')
   }

   get txtnumberofreviewsbycustomers() {
      return $('//p[@class="subtitle is-size-6 has-text-primary"]')
   }

   get txtstarratingfirstrow() {
      return $('//div[@class="columns ratings p-b-10"][1]/div[1]/span')
   }

   get txtnamecustomerfirstrow() {
      return $('//div[@class="columns ratings p-b-10"][1]//p[@itemprop="author"]')
   }
   get txtlocationcustomerfirstrow() {
      return $('//div[@class="columns ratings p-b-10"][1]//p[@itemprop="author"]/following::p[@class="is-size-7"][1]')
   }
   get txtdatecustomerfirstrow() {
      return $('//div[@class="columns ratings p-b-10"][1]//p[@itemprop="author"]/following::p[@class="is-size-7"][2]')
   }
   get txtreviewtitleandcommentsfirstrow() {
      return $('//div[@class="columns ratings p-b-10"][1]//p[@itemprop="author"]/following::div[@class="column p-t-0 is-5"][1]')
   }

   get btnViewAll() {
      return $('//a[@class="button is-uppercase overflow-text-dots" and contains(text(),"View all")]')
   }

   get txtReviewsforDiamondererings() {
      return $('//h1[@class="is-size-4 has-text-weight-semibold has-text-primary is-uppercase"]')
   }

   get txtstarratingReviewsforDiamondererings() {
      return $('//div[@class="has-text-primary has-text-weight-semibold m-t-20 m-b-20"]')
   }

   get imgfirstrowReviewsforDiamondererings() {
      return $('//section[@id="diamondere-page"][1]//div[@class="m-b-10"][1]/div[@class="columns is-gapless border-b-black p-b-25"]/div[@class="column is-2"][1]')
   }

   get txtstarfirstrowReviewsforDiamondererings() {
      return $('//section[@id="diamondere-page"][1]//div[@class="m-b-10"][1]//div[@class="column is-2 m-l-10"][1]//span[@class="material-icons md-14 has-text-primary"]')
   }

   get txtcustomerdetailsfirstrowReviewsforDiamondererings() {
      return $('//section[@id="diamondere-page"][1]//div[@class="m-b-10"][1]//div[@class="column is-3 is-size-7"]')
   }

   get txtreviewtitlefirstrowReviewsforDiamondererings() {
      return $('//section[@id="diamondere-page"][1]//div[@class="m-b-10"][1]//div[@class="column"]/p[@class="is-size-6 is-uppercase p-b-5 is-uppercase"]')
   }

   get txtreviewcommentsfirstrowReviewsforDiamondererings() {
      return $('//section[@id="diamondere-page"][1]//div[@class="m-b-10"][1]//div[@class="column"]/p[@class="is-size-7"]')
   }

   get txtReadRevforAllRings() {
      return $('//p[@class="title is-size-4 is-uppercase" and contains(text(),"ALL")]')
   }

   get txtRevByAllrings() {
      return $('//p[@class="subtitle is-size-7 has-text-primary" and contains(text(),"REVIEWED")]')
   }

   get txtstarRevByAll() {
      return $('//div[@class="columns ratings"][1]//div[@class="column p-t-0 is-3"]//span[@class="vue-star-rating"]')
   }

   get txtcustomerdetailsAllRings() {
      return $('//div[@class="columns ratings"][1]//div[@class="column p-t-0 is-3"]//span[@class="vue-star-rating"]/parent::div/following-sibling::div[@class="column p-t-0 is-4"]')
   }

   get txtreviewdetailsAllRings() {
      return $('//div[@class="columns ratings"][1]//div[@class="column p-t-0 is-3"]//span[@class="vue-star-rating"]/parent::div/following-sibling::div[@class="column p-t-0 is-4"]/following-sibling::div')
   }

   get sctnfreeGlobalshippingpage3() {
      return $('//div[@class="columns is-gapless p-15 is-centered"]')
   }

   async selectaccreditionicon() {
      await ElementUtil.click(this.lnkaccreditionicon, "Select accredition icon");
      await BrowserUtil.wait(8);
      await browser.switchWindow(data.Reviewsscreening.AccreditedBusinessURL)
      await BrowserUtil.wait(2);
   }

   async selectViewallRings() {
      await ElementUtil.click(this.btnViewAll, "Select View All rings");
      await BrowserUtil.wait(5);
      await browser.switchWindow(data.Reviewsscreening.DiamondereRingsReviewURL)
   }

   async movetofreeglobal() {
      await ElementUtil.scrollIntoView(this.sctnfreeGlobalshippingpage3, "Move down to the free global section in page 3")
   }



}

module.exports = reviewscreening