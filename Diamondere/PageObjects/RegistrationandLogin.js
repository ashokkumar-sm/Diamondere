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
    
    clickLogin(){
        ElementUtil.click(this.loginIconHome, "click login icon");
        BrowserUtil.wait(5);
        ElementUtil.waitForClickable(this.txtBoxFirstName, 55, "wait fo page load")
    }
    enterRegFields(){
        ElementUtil.sendText(this.txtBoxFirstName,data.RegandLoginlinks.RegistrationFirstName, "Enter First Name")
        ElementUtil.sendText(this.txtBoxLastName,data.RegandLoginlinks.RegistrationLastName,"Enter last Name")
        let randomInt = Math.floor(Math.random() * 99999)
        let email = 'diamonderetest' + randomInt + '@gmail.com'
        ElementUtil.sendText(this.txtBoxEmail, email, "Entering the email for registration");
        ElementUtil.sendText(this.txtPassword,data.RegandLoginlinks.RegistrationPassword,"Enter password")
    }
    termsOfUseLink(){
        ElementUtil.click(this.lnkTermsOfUse,"click terms of use link")
        BrowserUtil.wait(5);
    }
    clicktermsOfUsebtn(){
        ElementUtil.click(this.btnAgreeTermsOfUse," click button terms of use")
        BrowserUtil.wait(5);
    }
    clickRegisterbtn(){
        ElementUtil.click(this.btnRegister,"click terms of use checkbox")
        BrowserUtil.wait(10);
    }
    clickFreeReturn(){
        ElementUtil.click(this.lnkFreeReturns,"click free returns link")
        BrowserUtil.wait(5);
        
    }
    clickglobalshipping(){
        ElementUtil.click(this.lnkComplimentaryShipping,"click shipping")
        BrowserUtil.wait(5);
    }
    clickresizing(){
        ElementUtil.click(this.lnkResizing,"click resizing")
        BrowserUtil.wait(5);
    }
    clickengraving(){
        ElementUtil.click(this.lnkComplimentaryEngraving,"click engraving")
        BrowserUtil.wait(5);
    }
    clickstartCrtJewel(){
        ElementUtil.click(this.btnStartCreating,"click Start creating your jewelery")
        BrowserUtil.wait(5);
    }
    clickEmeraldRings(){
        ElementUtil.click(this.lnkEmeraldRings,"click emerald rings")
        BrowserUtil.wait(5);
    }
    clickSolitaire(){
        ElementUtil.click(this.lnkSolitaireRings,"click solitaire rings")
        BrowserUtil.wait(5);
    }
    clickHeartpendant(){
        ElementUtil.click(this.lnkHeartPendants,"click heart pendants")
        BrowserUtil.wait(5);
    }
    clickChandEarring(){
        ElementUtil.click(this.lnkChandelierEarrings,"click chandlier earrings")
        BrowserUtil.wait(5);
    }
    clickCufflinks(){
        ElementUtil.click(this.lnkCufflinks,"click cufflinks")
        BrowserUtil.wait(5);
    }
    enterSpecFirstname(){
        ElementUtil.sendText(this.txtBoxFirstName,data.RegandLoginlinks.SpecCharacterFirstName,"enterlogin first name")
    }
    enterSpecLastname(){
        ElementUtil.sendText(this.txtBoxLastName,data.RegandLoginlinks.SpecCharacterLastName,"enterlogin lastname")
    }
    enterSpecEmail(){
        ElementUtil.sendText(this.txtBoxEmail,data.RegandLoginlinks.SpecCharacterEmail,"enterlogin email")
    }
    mandatoryFields(){
        ElementUtil.click(this.btnRegister,"click regiter button")
    }
    enterCredLogin(){
        ElementUtil.sendText(this.loginEmail,data.RegandLoginlinks.LoginEmail,"enterlogin credentials")
        ElementUtil.sendText(this.loginPW,data.RegandLoginlinks.RegistrationPassword,"enterlogin credentials")
        BrowserUtil.wait(3);
    }
    clickLoginbutton(){
        ElementUtil.click(this.btnLogin,"click register button")
        BrowserUtil.wait(8);
    }
    clickLoginAndWait() {
        ElementUtil.click(this.btnLogin,"click register button")
        BrowserUtil.wait(3);
        ElementUtil.waitForDisplayed(this.shpbagSC, 50, "wait for page load")
    }
    hoverLogin(){
        ElementUtil.mouseHover(this.loggedIconHome,"Hover over Login icon") 
    }
    clickLogout(){
        ElementUtil.click(this.drpdownLogout,"click logout button") 
        BrowserUtil.wait(5);
    }
    enterSpecCharLogin(){
        ElementUtil.sendText(this.loginEmail,data.RegandLoginlinks.SpecCharacterEmail, "enter spc chracters")
       
    }
    enterInvalidLogin(){
        ElementUtil.sendText(this.loginEmail,data.RegandLoginlinks.InvalidMail,"enter invalid mail")
        ElementUtil.sendText(this.loginPW,data.RegandLoginlinks.SpecCharacterEmail,"enter spc chracters")
    }
    clickInvalidLogin(){
        ElementUtil.click(this.btnLogin,"click login button") 
        BrowserUtil.wait(5);
    }
    entervalidEmailLogin(){
        ElementUtil.sendText(this.loginEmail,data.RegandLoginlinks.LoginEmail,"enter mail")
        ElementUtil.sendText(this.loginPW,data.RegandLoginlinks.InvalidPW," enter invalid PW")
    }
    clickForgotPWLink(){
        ElementUtil.click(this.lnkForgotPW,"click login button") 
        BrowserUtil.wait(5);
    }
    enteremailForgot(){
        ElementUtil.sendText(this.emailAddress,data.RegandLoginlinks.LoginEmail,"enter mail")
    }
    enterSpecEmail(){
        ElementUtil.sendText(this.emailAddress,data.RegandLoginlinks.SpecCharacterEmail,"enter spc chracters")
    }
    clickSubmitFrgtPw(){
        ElementUtil.click(this.btnSubmit,"click submit button in forgot password form") 
        BrowserUtil.wait(5);
    }
    clickCloseFpw(){
        ElementUtil.click(this.btnCloseFPW,"click close button ") 
        BrowserUtil.wait(5);
    }
    enterUnregEmailFPw(){
        ElementUtil.sendText(this.emailAddress,data.RegandLoginlinks.UnregisteredEmail,"enter unregistred email")
    }
    ringsmainmenu(){
        ElementUtil.click(this.ringsmenu,"click rings menu") 
        BrowserUtil.wait(5);
    }
    slctDiaRing(){
        ElementUtil.click(this.ringsdiamond,"click diamond rings") 
        BrowserUtil.wait(5);
    }
    slctFloriRing(){
        ElementUtil.click(this.floriring,"click flori diamond rings") 
        BrowserUtil.wait(5);
    }
    slctSelectDropdwn(){
        ElementUtil.click(this.selectdrpdown,"click diamond rings") 
        BrowserUtil.wait(5);
    }
    slctRingSizeDropdown(){
        ElementUtil.click(this.slctringsizedrpdwn,"click diamond rings") 
        BrowserUtil.wait(5);
    }
    slctUSRing(){
        ElementUtil.click(this.ringsizeUk,"click diamond rings") 
        BrowserUtil.wait(5);
    }
    clickAddtocart(){
        ElementUtil.click(this.btnaddtocart,"click diamond rings") 
        BrowserUtil.wait(5);
    }
    clickCheckout(){
        ElementUtil.click(this.btnchkout,"click diamond rings") 
        BrowserUtil.wait(5);
    }

    selectProfile() {
        let checkLoggedin = ElementUtil.isVisible(this.loggedIconHome, "check user is loggedin");
        if (checkLoggedin == true) {
            this.hoverLogin();
            this.clickLogout();
        } 
    }

    enterCheckoutLogin() {
        ElementUtil.sendText(this.loginEmail,data.RegandLoginlinks.CheckoutEmail,"enterlogin credentials")
        ElementUtil.sendText(this.loginPW,data.RegandLoginlinks.CheckoutPassword,"enterlogin credentials")
    }
    
    removedesigninLogin() {
        while (ElementUtil.isVisible(this.lblCartCount, "Check the cart value")) {
            let removeLink = ElementUtil.isVisible(this.btnFirstRemove, "Check for remove button");

            if (removeLink) {
                ElementUtil.waitForClickable(this.btnFirstRemove, 20, "wait for page load")
                ElementUtil.click(this.btnFirstRemove, "select remove");
                BrowserUtil.wait(5);
            }
        }
    }
}
module.exports = RegistrationandLogin

