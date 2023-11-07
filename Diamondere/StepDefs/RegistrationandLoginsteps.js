const { Given, When, Then } = require('@wdio/cucumber-framework');
const BrowserUtil = require('../../CommonUtils/BrowserUtil');
const ElementUtil = require('../../CommonUtils/ElementUtil');
const dmd = require('../Configs/dmd_' + global.testEnv + '.js');
const RegistrationandLogin = require('../PageObjects/RegistrationandLogin')
const data = require('../TestData/RegistrationandLogin.json');


Given(/^I click the Login and Signup icon in the Homepage$/, async() => {
	const loginsignup= new RegistrationandLogin;
    await loginsignup.clickLogin();
});

Then(/^I ensure clicking the Login and Signup icon opens the Login Register page$/, async() => {
	const loginsignup = await browser.getUrl();
    await expect(loginsignup).toEqual(data.RegandLoginlinks.LoginPage);
});

Then(/^I ensure the Login and Register sections are displayed$/, async() => {
	const loginsignup = new RegistrationandLogin;
    await expect(loginsignup.loginHeading).toExist();
    await expect(loginsignup.loginSection).toExist();
    await expect(loginsignup.headingRegister).toExist();
    await expect(loginsignup.sctnRegisterForm).toExist();
});

Given(/^I browse Solace ring in page 2$/, async() => {
	await browser.url(dmd.config.PageTwo_url);
    //await BrowserUtil.maximize();
});

Then(/^I ensure the Login and Signup icon is present in page 2$/, async() => {
	const loginsignuppage2 = new RegistrationandLogin;
    await expect(loginsignuppage2.loginIconHome).toExist();
});


Given(/^I browse Solace ring in page 3$/, async() => {
	await browser.url(dmd.config.PageThree_url);
    //await BrowserUtil.maximize();
});

Then(/^I ensure the Login and Signup icon is present in page 3$/, async() => {
	const loginsignuppage3 = new RegistrationandLogin;
    await expect(loginsignuppage3.loginIconHome).toExist();
});


Given(/^I browse Solace ring the shopping cart page$/, async() => {
	await browser.url(dmd.config.Shoppingcart_url);
    //await BrowserUtil.maximize();
});

Then(/^I ensure Login and Signup icon is present in the shopping cart page$/,async () => {
	const loginsignupscpage = new RegistrationandLogin;
    await expect(loginsignupscpage.loginIconHome).toExist();
});


Then(/^I ensure the Register text, First Name, Last Name,Email and Password fields are displayed$/, async() => {
	const regsection = new RegistrationandLogin;
    await expect(regsection.loginIconHome).toExist();
    await expect(regsection.sctnRegisterForm).toExist();
    await expect(regsection.txtBoxFirstName).toExist();
    await expect(regsection.txtBoxLastName).toExist();
    await expect(regsection.txtBoxEmail).toExist();
    await expect(regsection.txtPassword).toExist();

});

When(/^I enter the first name, last name,Email and password in the respective fields in the register form$/, async() => {
	const regfieldsentry = new RegistrationandLogin;
    await regfieldsentry.enterRegFields();
});

Then(/^I ensure the Terms of use section is present$/, async() => {
	const regfieldsentry = new RegistrationandLogin;
    await expect(regfieldsentry.sctnTermsOfUse).toExist();
});

When(/^I click the Terms of use link$/, async() => {
	const regfieldsentry = new RegistrationandLogin;
    await regfieldsentry.termsOfUseLink();
});

Then(/^I ensure clicking the terms of use link redirects to the expected page$/, async() => {
	const regfieldsentry = await browser.getUrl();
    await expect(regfieldsentry).toEqual(data.RegandLoginlinks.TermsofUsePage);
    await browser.back();
});

When(/^I click the Terms and use checkbox$/, async() => {
	const regfieldsentry = new RegistrationandLogin;
    await regfieldsentry.clicktermsOfUsebtn();
});

When(/^I click the Register button$/, async() => {
	const regfieldsentry = new RegistrationandLogin;
    await regfieldsentry.clickRegisterbtn();
    
});

Then(/^I ensure the welcome page is displayed$/, async() => {
	const regfieldsentry = await browser.getUrl();
    await expect(regfieldsentry).toEqual(data.RegandLoginlinks.RegistrationSuccessPage);
});
    
Given(/^I browse welcome screen$/, async() => {
	await browser.url(dmd.config.RegSuccessPage_url);
    await BrowserUtil.maximize();
});

Then(/^I ensure the welcome page is displayed with welcome components,categories and links,and footer section present$/, async() => {
	const welcmpage= new RegistrationandLogin;
    //await expect(welcmpage.txtWelcome).toExist();
    await expect(welcmpage.txtThankYouForJoining).toExist();
    await expect(welcmpage.imgWelcomeScreen).toExist();
    await expect(welcmpage.sctnGIADiamonds).toExist();
    await expect(welcmpage.sctnFiveStarRating).toExist();
    await expect(welcmpage.sctnFooter).toExist();

});

When(/^I click the FREE 100 DAY RETURNS link in the welcome page$/, async() => {
	const welcmpage= new RegistrationandLogin;
    await welcmpage.clickFreeReturn();
});

Then(/^I ensure the link redirects to the return policy page$/,async () => {
	const welcmpage = await browser.getUrl();
    await expect(welcmpage).toEqual(data.RegandLoginlinks.Free100DaysReturn);
    await browser.back();
});

When(/^I click the complimentary global shipping link in the welcome page$/, async() => {
	const welcmpage= new RegistrationandLogin;
    await welcmpage.clickglobalshipping();
});

Then(/^I ensure the link redirects to the shipping policy page$/,async () => {
	const regfieldsentry = await browser.getUrl();
    await expect(regfieldsentry).toEqual(data.RegandLoginlinks.ComplimenratyGlobalShipping);
    await browser.back();
});

When(/^I click the free 100 day resizing link in the welcome page$/, async() => {
	const welcmpage= new RegistrationandLogin;
    await welcmpage.clickresizing();
});

Then(/^I ensure the link redirects to the free resizing page$/,async () => {
	const regfieldsentry = await browser.getUrl();
    await expect(regfieldsentry).toEqual(data.RegandLoginlinks.FreeResizing);
    await browser.back();
});

When(/^I click the complimentary engraving link in the welcome page$/, async() => {
	const welcmpage= new RegistrationandLogin;
    await welcmpage.clickengraving();
});

Then(/^I ensure the link redirects to the engraving page$/, async() => {
	const regfieldsentry = await browser.getUrl();
    await expect(regfieldsentry).toEqual(data.RegandLoginlinks.ComplimentaryEngraving);
    await browser.back();
});

When(/^I click the Start creating your jewelery button$/, async() => {
	const welcmpage= new RegistrationandLogin;
    await welcmpage.clickstartCrtJewel();
});

Then(/^I ensure clicking the Start creating your jewelery button redirects to the rings page$/,async () => {
	const regfieldsentry = await browser.getUrl();
    await expect(regfieldsentry).toEqual(data.RegandLoginlinks.AllRings);
});


Then(/^I ensure the Rings text ,Sapphire Rings,Ruby Rings and Emerald Rings links are present$/,async () => {
	const ringstext= new RegistrationandLogin;
    await expect(ringstext.txtRings).toExist();
    await expect(ringstext.lnkSapphireRings).toExist();
    await expect(ringstext.lnkEmeraldRings).toExist();
    await expect(ringstext.lnkRubyRings).toExist();
});

When(/^I click the Emerald rings under rings category$/, async() => {
	const ringstext= new RegistrationandLogin;
    await ringstext.clickEmeraldRings();
});

Then(/^I ensure clicking the emerald rings move to the emerald rings page$/,async () => {
	const ringstext = await browser.getUrl();
    await expect(ringstext).toEqual(data.RegandLoginlinks.EmeraldRings);
});

Then(/^I ensure the engagement text,Solitaire Rings,Vintage Inspired and Platinum Rings links are present$/,async () => {
	const engagetext= new RegistrationandLogin;
    await expect(engagetext.txtEngagement).toExist();
    await expect(engagetext.lnkSolitaireRings).toExist();
    await expect(engagetext.lnkVintageInspired).toExist();
    await expect(engagetext.lnkPlatinumRings).toExist();

});

When(/^I click the Solitaire Rings under rings category$/, async() => {
	const engagetext= new RegistrationandLogin;
    await engagetext.clickSolitaire();
});

Then(/^I ensure clicking the Solitaire Rings move to the Solitaire Rings page$/,async () => {
	const engagetext = await browser.getUrl();
    await expect(engagetext).toEqual(data.RegandLoginlinks.SolitaireRings);
});

Then(/^I ensure the necklaces text, Heart, Unique and Sapphire pendants links are present$/, async() => {
	const necktext= new RegistrationandLogin;
    await expect(necktext.txtNecklaces).toExist();
    await expect(necktext.lnkHeartPendants).toExist();
    await expect(necktext.lnkUniquePendants).toExist();
    await expect(necktext.lnkSapphireNecklaces).toExist();
});

When(/^I click the Heart pendants under necklaces category$/, async() => {
	const necktext= new RegistrationandLogin;
    await necktext.clickHeartpendant();
});

Then(/^I ensure clicking the Heart pendants move to the Heart pendants page$/, async() => {
	const necktext = await browser.getUrl();
    await expect(necktext).toEqual(data.RegandLoginlinks.HeartPendants);
});

Then(/^I ensure the earrings text,Stud Earrings,Drop Earrings and Chandelier Earrings links are present$/, async() => {
	const necktext= new RegistrationandLogin;
    await expect(necktext.txtEarrings).toExist();
    await expect(necktext.lnkStudEarrings).toExist();
    await expect(necktext.lnkDropEarrings).toExist();
    await expect(necktext.lnkChandelierEarrings).toExist();
   
});

When(/^I click the Chandelier Earrings under rings category$/, async() => {
	const necktext= new RegistrationandLogin;
    await necktext.clickChandEarring();
});

Then(/^I ensure clicking the Chandelier Earrings move to the Chandelier Earrings page$/, async() => {
	const necktext = await browser.getUrl();
    await expect(necktext).toEqual(data.RegandLoginlinks.Chandlierearrings);
});


Then(/^I ensure the Mens text, Men's Diamond Rings,Men's Wedding Rings and Cufflinks links are present$/, async() => {
    const necktext= new RegistrationandLogin;
    await expect(necktext.txtMens).toExist();
    await expect(necktext.lnkMensDiamondRings).toExist();
    await expect(necktext.lnkMensWeddingRings).toExist();
    await expect(necktext.lnkCufflinks).toExist();
});

When(/^I click the  under Cufflinks Mens category$/, async() => {
	const necktext= new RegistrationandLogin;
    await necktext.clickCufflinks();
});

Then(/^I ensure clicking the Cufflinks move to the Cufflinks page$/, async() => {
	const necktext = await browser.getUrl();
    await expect(necktext).toEqual(data.RegandLoginlinks.Cufflinks);
});


When(/^I enter the special characters, numbers in the First name field in the register form$/, async() => {
	const negScene = new RegistrationandLogin;
    await negScene.enterSpecFirstname();
});

Then(/^I ensure the invalid error message for the first name field is displayed$/,async() => {
	const negScene = new RegistrationandLogin;
    await expect(negScene.msgInvalidName).toExist();
});

When(/^I enter the  in the Last name field in the register form$/, async() => {
	const negScene = new RegistrationandLogin;
    await negScene.enterSpecLastname();
});

Then(/^I ensure the invalid error message for the last name field is displayed$/, async() => {
	const negScene = new RegistrationandLogin;
    await expect(negScene.msgInvalidName).toExist();
});

When(/^I enter the Email in the email field in the register form$/, async() => {
	const negScene = new RegistrationandLogin;
    await negScene.enterSpecEmail();
});

Then(/^I ensure the invalid error message for the email field is displayed$/, async() => {
	const negScene = new RegistrationandLogin;
    await expect(negScene.msgInvalidEmail).toExist();
});

When(/^I click the register button without entering fields$/, async() => {
	const negScene = new RegistrationandLogin;
    await negScene.mandatoryFields();
});

Then(/^I ensure the mandatory field validation for the fields are displayed$/, async() => {
	const negScene = new RegistrationandLogin;
    await expect(negScene.msgFirstNameMandatory).toExist();
    await expect(negScene.msgLastNameMandatory).toExist();
    await expect(negScene.msgEmailMandatory).toExist();
    await expect(negScene.msgPasswordMandatory).toExist();
    await expect(negScene.msgAgreeTermsOfUseMandatory).toExist();
    
});

Then(/^I ensure the Login text,Email and Password fields are displayed at the top of the login section$/, async() => {
	const login = new RegistrationandLogin;
    await expect(login.loginHeading).toExist();
    await expect(login.loginSection).toExist();
    await expect(login.loginEmail).toExist();
    await expect(login.loginPW).toExist();
    
});

When(/^I enter the Email and Password fields in the login form$/, async() => {
	const login = new RegistrationandLogin;
    await login.enterCredLogin();
});

Then(/^I click the login button$/, async() => {
	const login = new RegistrationandLogin;
    await login.clickLoginbutton();
});

Then(/^I ensure the login button returns to the Homepage of the diamondere$/, async() => {
	const login = await browser.getUrl();
    await expect(login).toEqual(data.RegandLoginlinks.HomePage);
});


When(/^I hover on Login and Signup icon$/, async() => {
	const login = new RegistrationandLogin;
    await login.hoverLogin();
});

Then(/^I ensure the track my order, order history and logout options are visible$/, async() => {
	const login = new RegistrationandLogin;
    await expect(login.logindrpDown).toExist();
    await expect(login.drpdownLoginOH).toExist();
    await expect(login.drpdownLoginTMO).toExist();
    await expect(login.drpdownLogout).toExist();
});


When(/^I click the Logout option$/, async() => {
	const login = new RegistrationandLogin;
    await login.clickLogout();
});

Then(/^I ensure the user stays in the Homepage of Diamondere$/,async () => {
	const login = await browser.getUrl();
    await expect(login).toEqual(data.RegandLoginlinks.HomePage);
});


When(/^I enter the special characters in the email field in the login form$/, async() => {
	const login = new RegistrationandLogin;
    await login.enterSpecCharLogin();
});

Then(/^I ensure the mandatory field validation for the email field is displayed$/,async () => {
	const login = new RegistrationandLogin;
    await expect(login.loginValidMsg).toExist();
});

When(/^I enter the invalid email and password in the respective fields in the login form$/, async() => {
	const login = new RegistrationandLogin;
    await login.enterInvalidLogin();
});

Then(/^I click Login button using an unregistered login$/, async() => {
	const login = new RegistrationandLogin;
    await login.clickInvalidLogin();
});

Then(/^I ensure the invalid login credentials error message is displayed$/,async () => {
	const login = new RegistrationandLogin;
    await expect(login.pwErrorMsg).toExist();
});

When(/^I enter the valid email and invalid password in the respective fields in the login form$/, async() => {
	const login = new RegistrationandLogin;
    await login.entervalidEmailLogin();
});

Then(/^I click Login button using an invalid password$/, async() => {
	const login = new RegistrationandLogin;
    await login.clickInvalidLogin();
});

When(/^I click the Forgot password link$/, async() => {
	const login = new RegistrationandLogin;
    await login.clickForgotPWLink();
});

Then(/^I ensure the Forgot password link redirects to the forgot password page$/, async() => {
	const login = await browser.getUrl();
    await expect(login).toEqual(data.RegandLoginlinks.ForgotPasswordPage);
});

Then(/^I ensure the forgot password text,email box are present$/, async() => {
	const login = new RegistrationandLogin;
    await expect(login.sectionForgotPW).toExist();
    await expect(login.txtForgotPW).toExist();
    await expect(login.emailAddress).toExist();
   
    
});

Then(/^I enter the registered email in the Email address field$/, async() => {
	const login = new RegistrationandLogin;
    await login.enteremailForgot();
});

When(/^I click the submit button in the Forgot password form$/, async() => {
	const frgtpw = new RegistrationandLogin;
    await frgtpw.clickSubmitFrgtPw();
});

Then(/^I ensure the success message is displayed in the screen$/, async() => {
	const frgtpw = new RegistrationandLogin;
    await expect(frgtpw.msgSuccessFPW).toExist();
});

When(/^I enter the special characters, numbers in the Email address field in the forgot password form$/, async() => {
	const login = new RegistrationandLogin;
    await login.enterSpecEmail();
});

Then(/^I ensure the field validation message for the email address field is displayed$/,async () => {
	const login = new RegistrationandLogin;
    await expect(login.errormsgEmail).toExist();
});

When(/^I enter the unregistered email in the Email address field$/, async() => {
	const login = new RegistrationandLogin;
    await login.enterUnregEmailFPw();
});

When(/^I click submit button in the Forgot password form$/, async() => {
	const frgtpw = new RegistrationandLogin;
    await frgtpw.clickSubmitFrgtPw();
});

Then(/^I ensure the error message for the invalid email address is displayed$/, async() => {
	const login = new RegistrationandLogin;
    await expect(login.unregEmail).toExist();
});

///////////////////////////////

Given(/^I click the rings menu$/, async() => {
	const shopbag = new RegistrationandLogin;
    await shopbag.ringsmainmenu();
});

Then(/^I select the Diamond rings from the submenu$/, async() => {
	const shopbag = new RegistrationandLogin;
    await shopbag.slctDiaRing();

});

Then(/^I select the Flori ring$/, async() => {
	const shopbag = new RegistrationandLogin;
    await shopbag.slctFloriRing();

});

When(/^I click the select ring-size dropdown$/, async() => {
	const shopbag = new RegistrationandLogin;
    await shopbag.slctSelectDropdwn();

});

Then(/^I Click the ring size dropdown$/, async() => {
	const shopbag = new RegistrationandLogin;
    await shopbag.slctRingSizeDropdown();
});

Then(/^I select the US3-UK& AU-F ring size$/, async() => {
	const shopbag = new RegistrationandLogin;
    await shopbag.slctUSRing();
});

Then(/^I click the Add to cart button$/, async() => {
	const shopbag = new RegistrationandLogin;
    await shopbag.clickAddtocart();
});

Then(/^I click the checkout button$/, async() => {
	const shopbag = new RegistrationandLogin;
    await shopbag.clickCheckout();
});

Then(/^I ensure the shopping cart page is displayed with the order quantity mentioned in the bag icon and login icon present$/, async() => {
	const shopbag = new RegistrationandLogin;
    await expect(shopbag.shpbagSC).toExist();
});

When(/^I click the login signup icon in the shopping cart page$/, async() => {
	const shopbag = new RegistrationandLogin;
    await shopbag.clickLogin();
});

Then(/^I ensure the login register page opens$/, async() => {
	const shopbag = new RegistrationandLogin;
    await expect(shopbag.loginHeading).toExist();
    await expect(shopbag.loginSection).toExist();
});

When(/^I enter the Registered Email and password in the respective fields$/, async() => {
	const shopbag = new RegistrationandLogin;
    await shopbag.enterCredLogin();
});


When(/^I click the Login Button$/, async() => {
	const shopbag = new RegistrationandLogin;
    await shopbag.clickLoginAndWait();
});


When(/^I click the Login button$/, async() => {
	const shopbag = new RegistrationandLogin;
    await shopbag.clickLoginbutton();
});

Then(/^I ensure the shopping cart page is displayed with the order quantity mentioned in the bag icon$/,async () => {
	const shopbag = new RegistrationandLogin;
    await expect(shopbag.shpbagSC).toExist();
});


When(/^I click logout$/, async() => {
	const login = new RegistrationandLogin;
    await login.hoverLogin();
    await login.clickLogout();
});

When(/^I click remove button for the login$/, async() => {
    const login = new RegistrationandLogin;
    await login.removedesigninLogin();
});