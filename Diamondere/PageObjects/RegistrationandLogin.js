const ElementUtil = require('../../CommonUtils/ElementUtil');
const BrowserUtil = require('../../CommonUtils/BrowserUtil');
const data = require('../TestData/RegistrationandLogin.json');
const context = require('../../CommonUtils/ScenarioContext')

class RegistrationandLogin {


    //Registration Form    

    get headingRegister() {
        return $('//h3[text()="Register"]')
    }


    get sctnRegisterForm() {
        return $('//form[@data-vv-scope="register"]')
    }


    get txtBoxFirstName() {
        return $('//input[@name="registerFirstName"]')
    }


    get txtBoxLastName() {
        return $('//input[@name="registerLastName"]')
    }


    get txtBoxEmail() {
        return $('//input[@name="registerEmail"]')
    }


    get txtPassword() {
        return $('//input[@name="registerPassword"]')
    }


    get sctnTermsOfUse() {
        return $('//label[@class="checkbox"]')
    }


    get btnAgreeTermsOfUse() {
        return $('//input[@name="registerconditionAccepted"]')
    }


    get lnkTermsOfUse() {
        return $('//a[@title="Terms Of Use"]')
    }


    get btnRegister() {
        return $('//button[contains(text(),"REGISTER")]')
    }


    get txtFieldsMandatory() {
        return $('//div[contains(text(),"Fields marked *")]')
    }


    get msgFirstNameMandatory() {
        return $('//p[text()=" Please enter the First Name "]')
    }


    get msgLastNameMandatory() {
        return $('//p[text()=" Please enter the Last Name "]')
    }

    get msgEmailMandatory() {
        return $('//p[text()=" Please enter the Email Address "]')
    }

    get msgInvalidName() {
        return $('//p[text()=" Please do not input any characters other than letters and space "]')
    }

    get msgInvalidEmail() {
        return $('//p[contains(text(),"Email Address format is invalid")]')
    }


    get msgPasswordMandatory() {
        return $('//p[text()=" Please enter the Password "]')
    }


    get msgInvalidPassword() {
        return $('//p[text()=" Please do not input any characters other than letters, numbers, special characters and space "]')
    }


    get msgAgreeTermsOfUseMandatory() {
        return $('//p[text()=" Please ensure that your have accepted the Terms and Conditions "]')
    }


    get popupErrorAlreadyRegistered() {
        return $('//p[contains(text(),"Email Id is already registered")]')
    }


    get popupXBtn() {
        return $('//button[@aria-label="Close"]')
    }





    //Welcome screen
    get txtWelcome() {
        return $('//p[@class="is-size-4 is-hidden-mobile register-page-font"]')
    }


    get txtThankYouForJoining() {
        return $('//p[@class="has-text-weight-normal register-page-font"]')
    }


    get imgWelcomeScreen() {
        return $('//img[@alt="Thank you for joining"]')
    }


    get lnkFreeReturns() {
        return $('//div[@class="register-tile"]//a[@title="Free 100 Day Returns"]')
    }


    get lnkComplimentaryShipping() {
        return $('//div[@class="register-tile"]//a[@title="COMPLIMENTARY GLOBAL SHIPPING"]')
    }


    get lnkResizing() {
        return $('//div[@class="register-tile"]//a[@title="100 DAY RESIZING"]')
    }


    get lnkComplimentaryEngraving() {
        return $('//a[@title="COMPLIMENTARY ENGRAVING"]')
    }


    get btnStartCreating() {
        return $('//button[contains(text(),"START CREATING YOUR JEWELRY")]')
    }


    get sctnMenuAndLinks() {
        return $('//div[@class="columns is-hidden-mobile p-b-40 p-t-60 m-l-100 m-r-100 m-l-20-touch m-r-20-touch m-t-0"]')
    }


    get txtRings() {
        return $('//p[text()=" Rings "]')
    }


    get lnkSapphireRings() {
        return $('//a[contains(text(),"Sapphire Rings")]')
    }


    get lnkRubyRings() {
        return $('//a[contains(text(),"Ruby Rings")]')
    }


    get lnkEmeraldRings() {
        return $('//a[contains(text(),"Emerald Rings")]')
    }


    get txtEngagement() {
        return $('//p[text()=" Engagement "]')
    }


    get lnkSolitaireRings() {
        return $('//a[contains(text(),"Solitaire Rings")]')
    }


    get lnkVintageInspired() {
        return $('//a[contains(text(),"Vintage Inspired")]')
    }


    get lnkPlatinumRings() {
        return $('//a[contains(text(),"Platinum Rings")]')
    }


    get txtNecklaces() {
        return $('//p[text()=" Necklaces "]')
    }


    get lnkHeartPendants() {
        return $('//a[contains(text(),"Heart Pendants")]')
    }


    get lnkUniquePendants() {
        return $('//a[contains(text(),"Unique Pendants")]')
    }


    get lnkSapphireNecklaces() {
        return $('//a[contains(text(),"Sapphire Necklaces")]')
    }


    get txtEarrings() {
        return $('//p[text()=" Earrings "]')
    }


    get lnkStudEarrings() {
        return $('//a[contains(text(),"Stud Earrings")]')
    }


    get lnkDropEarrings() {
        return $('//a[contains(text(),"Drop Earrings")]')
    }


    get lnkChandelierEarrings() {
        return $('//a[contains(text(),"Chandelier Earrings")]')
    }


    get txtMens() {
        return $('//p[text()=" Men\'s "]')
    }


    get lnkMensDiamondRings() {
        return $('//a[contains(text(),"Men\'s Diamond Rings")]')
    }


    get lnkMensWeddingRings() {
        return $('//a[contains(text(),"Men\'s Wedding Rings")]')
    }


    get lnkCufflinks() {
        return $('//a[contains(text(),"Cufflinks")]')
    }


    get sctnFiveStarRating() {
        return $('//div[@class="column has-text-right has-text-centered-mobile m-r-25 m-r-0-mob"]')
    }


    get sctnGIADiamonds() {
        return $('//div[@class="column has-text-centered-mobile m-l-25 m-t-20-mob m-l-0-mob"]')
    }

    get sctnFooter() {
        return $('//div[@class="has-text-centered"]');
    }


    //login


    get loginIconHome() {
        return $('//a[@title="Login / Sign Up"]')
    }
    get loggedIconHome(){
        return $('//span[@class="material-icons is-pulled-left is-size-4 m-r-5 has-text-primary"]')
    }
    get loginHeading() {
        return $('//h3[@class="has-text-centered title has-text-grey" and text()="Login"]')
    }
    get loginSection() {
        return $('//form[@data-vv-scope="login"]')
    }
    get loginEmail() {
        return $('//input[@id="login_email"]')
    }
    get loginPW() {
        return $('//input[@name="loginPassword"]')
    }
    get loginIdMandatoryMsg() {
        return $('//p[contains(text(),"Please enter Login Id")]')
    }
    get loginPWMandatoryMsg() {
        return $('//p[contains(text(),"Please enter Password")]')
    }
    get loginValidMsg() {
        return $('//p[contains(text(),"The Email Address format is invalid (A valid email")]')
    }
    get pwErrorMsg() {
        return $('//article[@class="message is-danger"]//p[contains(text(),"Invalid credentials provided.")]')
    }
    get btnLogin() {
        return $('//button[contains(text(),"LOGIN")]')
    }
    get logindrpDown() {
        return $('//div[@class="dropdown is-hoverable is-hidden-touch is-right has-text-primary header-contactus"]//div[@class="dropdown-content"]')
    }
    get drpdownLoginTMO() {
        return $('//div[@class="dropdown-content"]//a[@title="TRACK MY ORDER"]')
    }
    get drpdownLoginOH() {
        return $('//div[@class="dropdown-content"]//a[@title="ORDER HISTORY"]')
    }
    get drpdownLogout() {
        return $('//div[@class="dropdown-content"]//span[text()="LOGOUT"]')
    }


    //forgot password


    get lnkForgotPW() {
        return $('//span[@class="call-to-action has-text-info" and contains(text(),"Forgot Password")]')
    }
    get sectionForgotPW() {
        return $('//div[@class="p-5"]//div[@class="is-flex"]')
    }
    get txtForgotPW() {
        return $('//p[contains(text(),"Tell us the e-mail address you shared with us while")]')
    }
    get emailAddress() {
        return $('//input[@id="contact_us_email"]')
    }
    get errormsgEmail() {
        return $('//p[@class="help is-danger" and contains(text(),"The Email Address format is invalid")]')
    }
    get captchaEmail() {
        return $('//div[@class="recaptcha-checkbox-border"]')
    }
    get btnSubmit() {
        return $('//button[@class="button is-block is-info is-large is-fullwidth" and contains(text(),"SUBMIT")]')
    }
    get msgSuccessFPW() {
        return $('//p[contains(text(),"An email with reset password link")]')
    }
    get btnCloseFPW() {
        return $('//button[@aria-label="Close"]')
    }
    get unregEmail(){
        return $('//p[contains(text(),"If email is registered, you will get a reset link.")]')
    }



    //Reset password


    get sectionResetPW() {
        return $('//div[@class="box"]')
    }
    get sectionResetPW() {
        return $('//h3[@id="reset-password"]')
    }
    get newPW() {
        return $('//input[@name="newPassword"]')
    }
    get msgnewResetPW() {
        return $('//p[contains(text(),"Please enter the Password")]')
    }
    get confirmPW() {
        return $('//label[@for="confirm_pass"]')
    }
    get msgConfirmResetPW() {
        return $('//p[@class="help is-danger" and contains(text(),"Please enter the Confirm Password")]')
    }
    get msgnotmatchPW() {
        return $('//p[@class="help is-danger" and contains(text(),"The password and re-entered password must match")]')
    }
    get btnSubmitResetPW() {
        return $('//button[@class="button is-block is-info is-large is-fullwidth" and contains(text(),"SUBMIT")]')
    }
    get msglinkExpiredResetPW() {
        return $('//p[contains(text(),"Provided link is expired or not valid.")]')
    }
    get btnCloseResetPW() {
        return $('//button[@aria-label="Close"]')
    }
    get ringsmenu() {
        return $('//div[@class="is-uppercase top-link navbar-link"]//div[@class="touch-cat"]//span[text()="rings"]')
    }

    get ringsdiamond() {
        return $('//a[@href="/rings/diamond-rings"]//div[@class="subtitle-font menu-filter-icon-header diamond"]//p//span[text()="Diamond"]')
    }
    get floriring(){
        return $('//p[text()="Flori"]')
    }
    get selectdrpdown(){
        return $('//p[contains(text(),"Select")]')
    }
    get slctringsizedrpdwn(){
        return $('//div[@id="ringSize"]/div/div/div/span/select[@name="ringSize"]')
    }
    get ringsizeUk(){
        return $('//option[contains(text(),"US 3 - UK & AU F")]')
    }
    get btnaddtocart(){
        return $('//button[@class="button wd-45 is-inline-block m-r-5 is-info has-text-weight-medium" and contains(text(),"ADD TO CART")]')
    }
    get btnchkout(){
        return $('//button[@class="button m-t-5 m-b-5 is-info is-inline-block has-text-weight-medium is-fullwidth"and contains(text(),"CHECKOUT")]')
    }
    get shpbagSC(){
        return $('//span[@class="cart-badge" and text()="1"]')
    }

    get lblCartCount() {
        return $('//span[@class="cart-badge"]')
    }

    get btnFirstRemove() {
        return $('(//p[@class="is-flex is-justify-content-center is-align-items-center" and contains(text(),"Remove")])[1]')
    }
  

/////////////////////////////////////////////////////////////////////////
    
    async clickLogin(){
        await ElementUtil.click(this.loginIconHome, "click login icon");
        await BrowserUtil.wait(5);
        await ElementUtil.waitForClickable(this.txtBoxFirstName, 55, "wait fo page load")
    }

    async enterRegFields(){
        await ElementUtil.sendText(this.txtBoxFirstName,data.RegandLoginlinks.RegistrationFirstName, "Enter First Name")
        await ElementUtil.sendText(this.txtBoxLastName,data.RegandLoginlinks.RegistrationLastName,"Enter last Name")
        let randomInt = Math.floor(Math.random() * 99999)
        let email = 'diamonderetest' + randomInt + '@gmail.com'
        await ElementUtil.sendText(this.txtBoxEmail, email, "Entering the email for registration");
        await ElementUtil.sendText(this.txtPassword,data.RegandLoginlinks.RegistrationPassword,"Enter password")
    }
    async termsOfUseLink(){
        await ElementUtil.click(this.lnkTermsOfUse,"click terms of use link")
        await BrowserUtil.wait(5);
    }
    async clicktermsOfUsebtn(){
        await ElementUtil.click(this.btnAgreeTermsOfUse," click button terms of use")
        await BrowserUtil.wait(5);
    }
    async clickRegisterbtn(){
        await ElementUtil.click(this.btnRegister,"click terms of use checkbox")
        await BrowserUtil.wait(10);
    }
    async clickFreeReturn(){
        await ElementUtil.click(this.lnkFreeReturns,"click free returns link")
        await BrowserUtil.wait(5);
        
    }
    async clickglobalshipping(){
        await ElementUtil.click(this.lnkComplimentaryShipping,"click shipping")
        await BrowserUtil.wait(5);
    }
    async clickresizing(){
        await ElementUtil.click(this.lnkResizing,"click resizing")
        await BrowserUtil.wait(5);
    }
    async clickengraving(){
        await ElementUtil.click(this.lnkComplimentaryEngraving,"click engraving")
        await BrowserUtil.wait(5);
    }
    async clickstartCrtJewel(){
        await ElementUtil.click(this.btnStartCreating,"click Start creating your jewelery")
        await BrowserUtil.wait(5);
    }
    async clickEmeraldRings(){
        await ElementUtil.click(this.lnkEmeraldRings,"click emerald rings")
        await BrowserUtil.wait(5);
    }
    async clickSolitaire(){
        await ElementUtil.click(this.lnkSolitaireRings,"click solitaire rings")
        await BrowserUtil.wait(5);
    }
    async clickHeartpendant(){
        await ElementUtil.click(this.lnkHeartPendants,"click heart pendants")
        await BrowserUtil.wait(5);
    }
    async clickChandEarring(){
        await ElementUtil.click(this.lnkChandelierEarrings,"click chandlier earrings")
        await BrowserUtil.wait(5);
    }
    async clickCufflinks(){
        await ElementUtil.click(this.lnkCufflinks,"click cufflinks")
        await BrowserUtil.wait(5);
    }
    async enterSpecFirstname(){
        await ElementUtil.sendText(this.txtBoxFirstName,data.RegandLoginlinks.SpecCharacterFirstName,"enterlogin first name")
    }
    async enterSpecLastname(){
        await ElementUtil.sendText(this.txtBoxLastName,data.RegandLoginlinks.SpecCharacterLastName,"enterlogin lastname")
    }
    async enterSpecEmail(){
        await ElementUtil.sendText(this.txtBoxEmail,data.RegandLoginlinks.SpecCharacterEmail,"enterlogin email")
    }
    async mandatoryFields(){
        await ElementUtil.click(this.btnRegister,"click regiter button")
    }
    async enterCredLogin(){
        await ElementUtil.sendText(this.loginEmail,data.RegandLoginlinks.LoginEmail,"enterlogin credentials")
        await ElementUtil.sendText(this.loginPW,data.RegandLoginlinks.RegistrationPassword,"enterlogin credentials")
        await BrowserUtil.wait(3);
    }
    async clickLoginbutton(){
        await ElementUtil.click(this.btnLogin,"click register button")
        await BrowserUtil.wait(8);
    }
    async clickLoginAndWait() {
        await ElementUtil.click(this.btnLogin,"click register button")
        await BrowserUtil.wait(3);
        await ElementUtil.waitForDisplayed(this.shpbagSC, 50, "wait for page load")
    }
    async hoverLogin(){
        await ElementUtil.mouseHover(this.loggedIconHome,"Hover over Login icon") 
    }
    async clickLogout(){
        await ElementUtil.click(this.drpdownLogout,"click logout button") 
        await BrowserUtil.wait(5);
    }
    async enterSpecCharLogin(){
        await ElementUtil.sendText(this.loginEmail,data.RegandLoginlinks.SpecCharacterEmail, "enter spc chracters")
       
    }
    async enterInvalidLogin(){
        await ElementUtil.sendText(this.loginEmail,data.RegandLoginlinks.InvalidMail,"enter invalid mail")
        await ElementUtil.sendText(this.loginPW,data.RegandLoginlinks.SpecCharacterEmail,"enter spc chracters")
    }
    async clickInvalidLogin(){
        await ElementUtil.click(this.btnLogin,"click login button") 
        await BrowserUtil.wait(5);
    }
    async entervalidEmailLogin(){
        await ElementUtil.sendText(this.loginEmail,data.RegandLoginlinks.LoginEmail,"enter mail")
        await ElementUtil.sendText(this.loginPW,data.RegandLoginlinks.InvalidPW," enter invalid PW")
    }
    async clickForgotPWLink(){
        await ElementUtil.click(this.lnkForgotPW,"click login button") 
        await BrowserUtil.wait(5);
    }
    async enteremailForgot(){
        await ElementUtil.sendText(this.emailAddress,data.RegandLoginlinks.LoginEmail,"enter mail")
    }
    async enterSpecEmail(){
        await ElementUtil.sendText(this.emailAddress,data.RegandLoginlinks.SpecCharacterEmail,"enter spc chracters")
    }
    async clickSubmitFrgtPw(){
        await ElementUtil.click(this.btnSubmit,"click submit button in forgot password form") 
        await BrowserUtil.wait(5);
    }
    async clickCloseFpw(){
        await ElementUtil.click(this.btnCloseFPW,"click close button ") 
        await BrowserUtil.wait(5);
    }
    async enterUnregEmailFPw(){
        await ElementUtil.sendText(this.emailAddress,data.RegandLoginlinks.UnregisteredEmail,"enter unregistred email")
    }
    async ringsmainmenu(){
        await ElementUtil.click(this.ringsmenu,"click rings menu") 
        await BrowserUtil.wait(5);
    }
    async slctDiaRing(){
        await ElementUtil.click(this.ringsdiamond,"click diamond rings") 
        await BrowserUtil.wait(5);
    }
    async slctFloriRing(){
        await ElementUtil.click(this.floriring,"click flori diamond rings") 
        await BrowserUtil.wait(5);
    }
    async slctSelectDropdwn(){
        await ElementUtil.click(this.selectdrpdown,"click diamond rings") 
        await BrowserUtil.wait(5);
    }
    async slctRingSizeDropdown(){
        await ElementUtil.click(this.slctringsizedrpdwn,"click diamond rings") 
        await BrowserUtil.wait(5);
    }
    async slctUSRing(){
        await ElementUtil.click(this.ringsizeUk,"click diamond rings") 
        await BrowserUtil.wait(5);
    }
    async clickAddtocart(){
        await ElementUtil.click(this.btnaddtocart,"click diamond rings") 
        await BrowserUtil.wait(5);
    }
    async clickCheckout(){
        await ElementUtil.click(this.btnchkout,"click diamond rings") 
        await BrowserUtil.wait(5);
    }

    async selectProfile() {
        let checkLoggedin = await ElementUtil.isVisible(this.loggedIconHome, "check user is loggedin");
        if (checkLoggedin == true) {
            this.hoverLogin();
            this.clickLogout();
        } 
    }

    async enterCheckoutLogin() {
        const registeredEmailUsingAPI = context.getValue('registeredEmail')
        await ElementUtil.sendText(this.loginEmail, registeredEmailUsingAPI,"enterlogin credentials")
        await ElementUtil.sendText(this.loginPW,data.RegandLoginlinks.CheckoutPassword,"enterlogin credentials")
    }
    
    async removedesigninLogin() {
        let cartCountVisible = await ElementUtil.isVisible(this.lblCartCount, "Check the cart value");
        
        while (cartCountVisible) {
            await ElementUtil.waitForClickable(this.btnFirstRemove, 20, "wait for page load");
            await ElementUtil.click(this.btnFirstRemove, "select remove");
            await BrowserUtil.wait(5);

            cartCountVisible = await ElementUtil.isVisible(this.lblCartCount, "Check the cart value");
        }
    }
}
module.exports = RegistrationandLogin

