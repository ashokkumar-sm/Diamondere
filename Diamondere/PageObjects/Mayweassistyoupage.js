const ElementUtil = require('../../CommonUtils/ElementUtil');
const BrowserUtil = require('../../CommonUtils/BrowserUtil');
const diamondere = require('../Configs/dmd_' + global.testEnv + '.js');
const data = require('../TestData/CA.json');
const context = require('../../CommonUtils/ScenarioContext');

class mayweassist{

    get btnMayWeAssistYou() {
        return $ ('//div[@class="chat-circle is-hidden-mobile"]')
    }

    get popupMayWeAssistYou() {
        return $ ('//div[@id="chatform"]')
    }

    get btnCloseMayWeAssistYou() {
        return $ ('//div[@aria-label="close button"]')
    }

    get txtheadingDiamondereLogo() {
        return $ ('//img[@alt="Diamondere"]')
    }

    get txtheadingCustomerCare() {
        return $ ('//p[@class="m-t-25"]')
    }

    get txtinpopupMayWeAssistYou() {
        return $ ('//p[@class="m-t-15 is-size-7 letter-space-0"]')
    }

    get txtBoxAssistName() {
        return $ ('//input[@id="assist_name"]')
    }
    get txtBoxAssistEmail() {
        return $ ('//input[@id="assist_email"]')
    }
    get txtBoxAssistQuery() {
        return $ ('//textarea[@id="assist_query"]')
    }

    get btnAssistSubmit() {
        return $ ('//button[text()="SUBMIT"]')
    }

    get btnAssistCancel() {
        return $ ('//button[contains(text(),"CANCEL")]')
    }

    get txtmsgAssistNameMandatory() {
        return $ ('//label[@for="assist_name"]/parent::div//p[text()=" All fields are mandatory "]')
    }

    get txtmsgAssistEmailMandatory() {
        return $ ('//label[@for="assist_email"]/parent::div//p[text()=" All fields are mandatory "]')
    }

    get txtmsgAssistQueryMandatory() {
        return $ ('//label[@for="assist_query"]/parent::div//p[text()=" All fields are mandatory "]')
    }

    get txtmsgInvalidNamemaywe() {
        return $ ('//p[text()=" Please do not input any characters other than letters and space "]')
    }

    get txtmsgInvalidEmailIdmaywe(){
        return $('//p[contains(text(),"The Email Address format is invalid")]')
    }

    get txtmsgInvalidQuerymaywe(){
        return $('//p[contains(text(),"Please do not input any characters other than letters, numbers, special characters and space")]')
    }

    get popupAssistSuccess() {
        return $ ('//p[contains(text(),"Diamondere consultant will email")]')
    }

    get btncloseAssistSuccess(){
        return $('//button[@class="delete"]')
    }

    selectbuttonmaywe(){
        ElementUtil.waitForClickable(this.btnMayWeAssistYou, 50, "wait for page load")
        ElementUtil.click(this.btnMayWeAssistYou,"Select May we Assist you button")
    }

    selectclosebutton(){
        ElementUtil.waitForClickable(this.btnCloseMayWeAssistYou, 50, "wait for page load")
        ElementUtil.click(this.btnCloseMayWeAssistYou,"Select close button")
    }

    selectsubmitbuttonmaywe(){
        ElementUtil.waitForClickable(this.btnAssistSubmit, 50, "wait for page load")
        ElementUtil.click(this.btnAssistSubmit,"Select Submit button")
    }

    selectcancelbuttonmaywe(){
        ElementUtil.waitForClickable(this.btnAssistCancel, 50, "wait for page load")
        ElementUtil.click(this.btnAssistCancel,"Select cancel button")
    }

    enternamemaywe(){
        ElementUtil.waitForClickable(this.txtBoxAssistName, 50, "wait for page load")
        ElementUtil.sendText(this.txtBoxAssistName,data.MayWeAssistyou.Namemaywe,"Enter name in name field")
    }

    enteremailmaywe(){
        ElementUtil.sendText(this.txtBoxAssistEmail,data.MayWeAssistyou.EmailAddressmaywe,"Enter email address in emailId field")
    }

    enterquerymaywe(){
        ElementUtil.sendText(this.txtBoxAssistQuery,data.MayWeAssistyou.Querymaywe,"Enter your query in query field")
    }

    enterinvalidnamemaywe(){
        ElementUtil.waitForClickable(this.txtBoxAssistName, 50, "wait for page load")
        ElementUtil.sendText(this.txtBoxAssistName,data.MayWeAssistyou.Invalidnamemaywe,"Enter invalid name in name field")
    }

    enterinvalidemailmaywe(){
        ElementUtil.sendText(this.txtBoxAssistEmail,data.MayWeAssistyou.InvalidEmailIdmaywe,"Enter invalid email address in emailId field")
    }

    enterinvalidquerymaywe(){
        ElementUtil.sendText(this.txtBoxAssistQuery,data.MayWeAssistyou.InvalidQuerymaywe,"Enter invalid query in query field")
    }

    enterdesignlinkinquerymaywe(){
        ElementUtil.sendText(this.txtBoxAssistQuery,diamondere.config.Designlinkforqueryfield,"Enter Design link in query field")
    }

    entermaxlimitnamemaywe(){
        ElementUtil.waitForClickable(this.txtBoxAssistName, 50, "wait for page load")
        ElementUtil.sendText(this.txtBoxAssistName,data.MayWeAssistyou.MaxNamemaywe,"Enter more than 40 characters in name field")
    }

    entermaxlimitquerymaywe(){
        ElementUtil.sendText(this.txtBoxAssistQuery,data.MayWeAssistyou.MaxQuerymaywe,"Enter more than 200 characters in query field")
    }

    selectclosebuttonsuccessassist(){
        ElementUtil.waitForClickable(this.btncloseAssistSuccess, 50, "wait for page load")
        ElementUtil.click(this.btncloseAssistSuccess,"Select close button in Success popup")
    }









}
module.exports= mayweassist