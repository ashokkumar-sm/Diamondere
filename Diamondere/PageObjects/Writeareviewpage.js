const ElementUtil = require('../../CommonUtils/ElementUtil');
const BrowserUtil = require('../../CommonUtils/BrowserUtil');
const data = require('../TestData/CA.json');
const context = require('../../CommonUtils/ScenarioContext');

class writereview{

    get txtReadReview() {
        return $('//span[@class="read-reviews-text"]')
    }

    get txtRecentlyPurchased() {
        return $('//p[contains(text(),"RECENTLY PURCHASED THE")]')
    }

    get btnWriteAReview() {
        return $('//button[@class="button is-pulled-right-tablet m-t-5 is-inline-block-tablet"]')
    }

    get popupWrtARev() {
        return $('//div[@class="card-content"]')
    }

    get imgreviewpop(){
        return $('//div[@class="has-text-centered m-b-10"]/img')
    }
 
    get txtWriteARev() {
        return $('//p[@id="reviewForm" and contains(text(),"Write a Review For")]')
    }

    get txtproductname() {
        return $('//div[@class="has-text-centered m-b-10"]//p[contains(text(),"Danette")]')
    }

    get txtUrRating() {
        return $('//p[@class="has-text-weight-semibold" and contains(text(),"Your rating")]')
    }

    get starRating() {
        return $('//div[@class="m-b-15"]//span[4]//*[name()="svg"]')///four rating//
    }

    get fourstarrating(){
        return $('//p[@class="has-text-weight-semibold"]//span[@aria-label="Rating-4 of 5"]')
    }

    get boxnameRevForm() {
        return $('//input[@data-vv-name="writeReviewName"]')
    }

    get boxemailRevForm() {
        return $('//input[@data-vv-name="writeReviewEmail"]')
    }

    get boxlocationRevForm() {
        return $('//input[@id="review_location"]')
    }
    get boxtitleRevForm() {
        return $('//input[@id="review_title"]')
    }

    get boxurRevCommnts() {
        return $('//textarea[@id="review_comments"]')
    }
    get btnSbmtRev() {
        return $('//button[@type="submit"]')
    }

    get txtmsgMndtryRating() {
        return $('//p[@class="is-size-7 has-text-danger" and contains(text(),"Please enter your rating")]')
    }

    get txtmsgMndtryName() {
        return $('//p[contains(text(),"Please enter your name")]')
    }

    get txtmsgMndtryEmail() {
        return $('//p[contains(text(),"Please enter your Email Address")]')
    }

    get txtmsgMndtryLocatn() {
        return $('//p[contains(text(),"Please enter your location")]')
    }

    get txtmsgMndtryRevTitle() {
        return $('//p[contains(text(),"Please enter the subject")]')
    }

    get txtmsgMndtryRevCmnts() {
        return $('//p[contains(text(),"Please enter comments")]')
    }

    get txtmsgInvalidname() {
        return $('//p[contains(text(),"Please do not input any characters other than lett")]')
    }

    get txtmsgInvalidEmail() {
        return $('//p[contains(text(),"The Email Address format is invalid (A valid email")]')
    }

    get txtmsgInvalidLoctn() {
        return $('//div[@class="column p-b-0-touch m-b-10-touch"]//p[@class="help is-danger"][contains(text(),"Please do not input any characters other than lett")]')
    }

    get txtmsgInvalidRevtitle() {
        return $('//div[@class="field-container m-b-14 m-b-10-touch"]//p[@class="help is-danger"][contains(text(),"Please do not input any characters other than lett")]')
    }

    get txtmsgInvalidRevCmnts() {
        return $('//div[@class="field-container m-b-25"]//p[@class="help is-danger"][contains(text(),"Please do not input any characters other than lett")]')
    }

    get btnCloseWAR() {
        return $('//span[@class="material-icons md-17"][contains(text(),"")]')
    }

    get txtheaderSuccessSubmtRev() {
        return $('//header[@class="message-header"]//p[contains(text(),"Success")]')
    }

    get txtmsgSucc() {
        return $('//p[contains(text(),"Your review comment has been saved.")]')
    }
    
    get btnCloseSucc() {
        return $('//button[@aria-label="Close"]')
    }

    movetoreadreview(){
        ElementUtil.scrollIntoView(this.txtReadReview, "Scroll down to Read review text")
    }

    selectbtnwriteareview(){
        ElementUtil.click(this.btnWriteAReview, "Select the write a review button")
    }

    selectstarrating(){
        ElementUtil.click(this.starRating, "Select the star rating")
    }

    enternamereview(){
        ElementUtil.sendText(this.boxnameRevForm,data.WriteReview.Name,"Send name in name field")
    }

    enteremailIdreview(){
        ElementUtil.sendText(this.boxemailRevForm,data.WriteReview.EmailId,"Send emailId in emailId field")
    }

    enterlocationreview(){
        ElementUtil.sendText(this.boxlocationRevForm,data.WriteReview.Location,"Send Location in Location field")
    }

    enterReviewtitle(){
        ElementUtil.sendText(this.boxtitleRevForm,data.WriteReview.ReviewTitle,"Send review title in respective field")
    }

    enterReviewcomments(){
        ElementUtil.sendText(this.boxurRevCommnts,data.WriteReview.ReviewComments,"Send review comments in respective field")
    }

    selectSubmitbutton(){
        ElementUtil.waitForClickable(this.btnSbmtRev, 50, "wait for page load")
        ElementUtil.forceClick(this.btnSbmtRev,"Click on Submit button")
    }

    enterinvalidnamereview(){
        ElementUtil.sendText(this.boxnameRevForm,data.WriteReview.InvalidName,"Send invalid name in name field")
    }

    enterinvalidemailIdreview(){
        ElementUtil.sendText(this.boxemailRevForm,data.WriteReview.InvalidEmailId,"Send invalid emailId in emailId field")
    }

    enterinvalidlocationreview(){
        ElementUtil.sendText(this.boxlocationRevForm,data.WriteReview.InvalidLocation,"Send Invalid Location in Location field")
    }

    enterinvalidReviewtitle(){
        ElementUtil.sendText(this.boxtitleRevForm,data.WriteReview.InvalidReviewTitle,"Send Invalid review title in respective field")
    }

    enterinvalidReviewcomments(){
        ElementUtil.sendText(this.boxurRevCommnts,data.WriteReview.InvalidReviewComments,"Send invalid review comments in respective field")
    }

    entermaxnamereview(){
        ElementUtil.sendText(this.boxnameRevForm,data.WriteReview.MaxName,"Send more than 40 characters in name field")
    }
    
    entermaxemailreview(){
        ElementUtil.sendText(this.boxemailRevForm,data.WriteReview.MaxEmailId,"Send more than 40 characters in email field")
    }

    entermaxlocationreview(){
        ElementUtil.sendText(this.boxlocationRevForm,data.WriteReview.MaxLocation,"Send more than 40 characters in Location field")
    }

    entermaxReviewtitle(){
        ElementUtil.sendText(this.boxtitleRevForm,data.WriteReview.MaxReviewtitle,"Send  more than 40 characters in review title field")
    }

    entermaxReviewcomments(){
        ElementUtil.sendText(this.boxurRevCommnts,data.WriteReview.MaxReviewComments,"Send more than 200 characters in respective field")
    }

    selectClosebuttonWAR(){
        ElementUtil.click(this.btnCloseWAR,"Click on Close button in Write a review popup")
    }

    selectClosebuttonSuccess(){
        ElementUtil.click(this.btnCloseSucc,"Click on Close button in Success popup")
    }

}
module.exports= writereview