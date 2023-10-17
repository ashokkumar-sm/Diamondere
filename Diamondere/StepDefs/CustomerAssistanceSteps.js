const { Given, When, Then } = require('@wdio/cucumber-framework');
const BrowserUtil = require('../../CommonUtils/BrowserUtil');
const ElementUtil = require('../../CommonUtils/ElementUtil');
const dmd = require('../Configs/dmd_' + global.testEnv + '.js');
const CustomerAssistance = require('../PageObjects/CustomerAssistance');
const data = require('../TestData/CustomerAssistance.json')
const context = require("../../CommonUtils/ScenarioContext");
const RegistrationandLogin = require('../PageObjects/RegistrationandLogin');


When(/^I logout if already logged in$/, () => {
	const logout = new RegistrationandLogin
    logout.selectProfile();
});

//REQUEST CALL BACK
//Scenario - 1
When(/^I select Request Call Back option$/, () => {
	const requestCallBack = new CustomerAssistance;
    requestCallBack.selectRequestCallBack();
});


Then(/^I ensure it redirects to the Request Call Back page$/, async() => {
	const requestCallBack = await browser.getUrl();
    await expect (requestCallBack).toEqual(dmd.config.requestCallBackUrl)
});


//Scenario - 2
Given(/^I browse Request Call Back page$/, () => {
	browser.url(dmd.config.requestCallBackUrl);
});


Then(/^I verify the presence of header, may we assist you and footer sections$/, async() => {
	const requestCallBack = new CustomerAssistance;
    await expect(requestCallBack.headerDiamondere).toExist();
    await expect(requestCallBack.btnMayWeAssistYou).toExist();
    await expect(requestCallBack.sctnFooter).toExist();
});


//Scenario - 3
Then(/^I verify the presence of banner and Request Call Back heading$/, async() => {
	const requestCallBack = new CustomerAssistance;
    await expect(requestCallBack.imgBanner).toExist();
    await expect(requestCallBack.headingReqCallBack).toExist();
    await expect(requestCallBack.sctnReqCallBackForm).toExist();
});


//Scenario - 4
Then(/^I verify the presence of Toll Free Number and Email ID$/, async() => {
	const requestCallBack = new CustomerAssistance;
    await expect(requestCallBack.sctnTollFreeNumber).toExist();
    await expect(requestCallBack.lnkTollFreeNumber).toExist();
    await expect(requestCallBack.sctnDiamondereEmailDetails).toExist();
    await expect(requestCallBack.lnkDiamondereEmailID).toExist();
});


//Scenario - 5
Then(/^I validate the presence of Name, Phone number, Email fields and Request Call Back button$/, async() => {
	const requestCallBack = new CustomerAssistance;
    await expect(requestCallBack.txtBoxName).toExist();
    await expect(requestCallBack.txtBoxPhone).toExist();
    await expect(requestCallBack.txtBoxEmail).toExist();
    await expect(requestCallBack.btnReqCallBack).toExist();
});


//Scenario - 6
Then(/^I ensure the name and email are pre-populated in the page$/, async() => {
    const requestCallBackName = await $('//input[@id="contact_us_name"]');
    const txtName = await requestCallBackName.getValue();
    await expect(txtName).toEqual(data.RequestCallBack.txtNameLoggedIn);
    const requestCallBackEmail = await $('//input[@id="contact_us_email"]');
    const txtEmail = await requestCallBackEmail.getValue();
    await expect(txtEmail).toEqual(data.RequestCallBack.txtEmailLoggedIn);
});


//Scenario - 7
Then(/^I ensure the name and email fields are blank in the page$/, async() => {
	const requestCallBackName = await $('//input[@id="contact_us_name"]');
    const txtName = await requestCallBackName.getValue();
    await expect(txtName).not.toEqual(data.RequestCallBack.txtNameLoggedIn);
    const requestCallBackEmail = await $('//input[@id="contact_us_email"]');
    const txtEmail = await requestCallBackEmail.getValue();
    await expect(txtEmail).not.toEqual(data.RequestCallBack.txtEmailLoggedIn);
});


//Scenario - 8
When(/^I enter name in the form$/, () => {
	const requestCallBack = new CustomerAssistance;
    requestCallBack.enterNameRCB();
});


When(/^I enter phone in the form$/, () => {
	const requestCallBack = new CustomerAssistance;
    requestCallBack.enterPhoneRCB();
});


When(/^I enter email in the form$/, () => {
	const requestCallBack = new CustomerAssistance;
    requestCallBack.enterEmailRCB();
});


When(/^I click Request Call Back button$/, () => {
	const requestCallBack = new CustomerAssistance;
    requestCallBack.selectBtnRCB();
});


Then(/^I ensure the request has been registered success popup is displayed$/, async() => {
	const requestCallBack = new CustomerAssistance;
    await expect(requestCallBack.popupSuccess).toExist();
    await expect(requestCallBack.popupSuccessText).toExist();
});


//Scenario - 9
Then(/^I ensure the mandatory message is displayed under Name field$/, async() => {
	const requestCallBack = new CustomerAssistance;
    await expect(requestCallBack.msgNameMandatory).toExist();
});


//Scenario - 10
When(/^I enter special characters and numbers in the name field$/, () => {
	const requestCallBack = new CustomerAssistance;
    requestCallBack.enterInvalidNameRCB();
});


Then(/^I ensure the character validation message for the name field is displayed$/, async() => {
	const requestCallBack = new CustomerAssistance;
    await expect(requestCallBack.msgNameMandatory).toExist();
});


//Scenario - 11
Then(/^I ensure the mandatory message is displayed under Phone field$/, async() => {
	const requestCallBack = new CustomerAssistance;
    await expect(requestCallBack.msgPhoneMandatory).toExist();
});


//Scenario - 12
When(/^I enter restricted special characters and alphabets in the phone field$/, () => {
	const requestCallBack = new CustomerAssistance;
    requestCallBack.enterInvalidPhoneRCB();
});


Then(/^I ensure the character validation message for the phone field is displayed$/, async() => {
	const requestCallBack = new CustomerAssistance;
    await expect(requestCallBack.msgInvalidPhone).toExist();
});


//Scenario - 13
When(/^I enter phone number with country code in the form$/, () => {
	const requestCallBack = new CustomerAssistance;
    requestCallBack.enterCCPhoneRCB();
});


//Scenario - 15
When(/^I enter invalid email address in the form$/, () => {
	const requestCallBack = new CustomerAssistance;
    requestCallBack.enterInvalidEmailRCB();
});


Then(/^I ensure the format validation message for the email field is displayed$/, async() => {
	const requestCallBack = new CustomerAssistance;
    await expect(requestCallBack.msgInvalidEmail).toExist();
});


//Scenario - 16
When(/^I click Add to cart in page 3 of Miya$/, () => {
	const requestCallBack = new CustomerAssistance;
    requestCallBack.clickAddToCartMiya();
});


When(/^I click Proceed to Payment in Shopping Cart Page$/, () => {
	const requestCallBack = new CustomerAssistance;
    requestCallBack.clickProceedToPayment();
});


When(/^I click the request call back link$/, () => {
	const requestCallBack = new CustomerAssistance;
    requestCallBack.selectReqCallBackLink();
});


When(/^I click the request call back link in checkout page$/, () => {
	const requestCallBack = new CustomerAssistance;
    requestCallBack.clickReqCallBackLink();
});


Then(/^I ensure it opens the request call back page in a popup$/, async() => {
	const requestCallBack = new CustomerAssistance;
    await expect(requestCallBack.imgLogoInPopup).toExist();
    await expect(requestCallBack.imgBanner).toExist();
    await expect(requestCallBack.headingReqCallBack).toExist();
    await expect(requestCallBack.sctnReqCallBackForm).toExist();
    await expect(requestCallBack.txtBoxName).toExist();
    await expect(requestCallBack.txtBoxPhone).toExist();
    await expect(requestCallBack.txtBoxEmail).toExist();
    await expect(requestCallBack.btnReqCallBack).toExist();
    await expect(requestCallBack.sctnTollFreeNumber).toExist();
    await expect(requestCallBack.lnkTollFreeNumber).toExist();
    await expect(requestCallBack.sctnDiamondereEmailDetails).toExist();
    await expect(requestCallBack.lnkDiamondereEmailID).toExist();
});


When(/^I click the X button in the popup$/, () => {
	const requestCallBack = new CustomerAssistance;
    //BrowserUtil.switchToDefaultContent();
    requestCallBack.closeReqCallBackPopup();
});


Then(/^I ensure the popup is closed$/, async() => {
	const requestCallBack = new CustomerAssistance;
    await expect(requestCallBack.popupContactForm).not.toExist();
});


//Scenario - 18
When(/^I enter name with more than 40 characters in the form$/, () => {
	const requestCallBack = new CustomerAssistance;
    requestCallBack.enterExceedCharLimitNameRCB();
});


Then(/^I ensure the name field accepts only 40 characters in the form$/, async() => {
	const requestCallBackName = await $('//input[@id="contact_us_name"]');
    const ExceedLimittxtName = await requestCallBackName.getValue();
    await expect(ExceedLimittxtName).not.toEqual(data.RequestCallBack.ExceedCharLimitName);
});


//Scenario - 19
When(/^I enter phone number with more than 15 characters in the form$/, () => {
	const requestCallBack = new CustomerAssistance;
    requestCallBack.enterExceedCharLimitPhoneRCB();
});


Then(/^I ensure the phone field accepts only 15 characters in the form$/, async() => {
	const requestCallBackPhone = await $('//input[@id="contact_us_phone"]');
    const ExceedLimittxtPhone = await requestCallBackPhone.getValue();
    await expect(ExceedLimittxtPhone).not.toEqual(data.RequestCallBack.ExceedCharLimitPhone);
});


//Scenario - 20
When(/^I enter email with more than 40 characters in Request Call Back form$/, () => {
	const requestCallBack = new CustomerAssistance;
    requestCallBack.enterExceedCharLimitEmailRCB();
});


Then(/^I ensure the email field accepts only 40 characters in Request Call Back form$/, async() => {
	const requestCallBackEmail = await $('//input[@id="contact_us_email"]');
    const ExceedLimittxtEmail = await requestCallBackEmail.getValue();
    await expect(ExceedLimittxtEmail).not.toEqual(data.RequestCallBack.ExceedCharLimitEmail);
});


//CONTACT US
//Scenario - 1
When(/^I select Write To Us option$/, () => {
	const contactUs = new CustomerAssistance;
    contactUs.selectWriteToUs();
});


Then(/^I ensure it redirects to the Contact Us page$/, async() => {
	const contactUs = await browser.getUrl();
    await expect (contactUs).toEqual(dmd.config.contactUsUrl)
});


When(/^I browse back and click Contact Us link in the footer$/, () => {
	const contactUs = new CustomerAssistance;
    contactUs.selectContactUs();
});


//Scenario - 2
Given(/^I browse Contact Us page$/, () => {
	browser.url(dmd.config.contactUsUrl);
});


Then(/^I validate the presence of various fields in the Contact Us page$/, async() => {
	const contactUs = new CustomerAssistance;
    await expect(contactUs.headingContactUs).toExist();
    await expect(contactUs.sctnFormContactUs).toExist();
    await expect(contactUs.txtBoxName).toExist();
    await expect(contactUs.txtBoxEmail).toExist();
    await expect(contactUs.txtBoxPhone).toExist();
    await expect(contactUs.txtBoxMessage).toExist();
    await expect(contactUs.btnUploadImage).toExist();
    await expect(contactUs.txtFileFormat).toExist();
    await expect(contactUs.btnSubmitContactForm).toExist();
});


//Scenario - 4
When(/^I enter message in Contact Us form$/, () => {
	const contactUs = new CustomerAssistance;
    contactUs.enterMessage();
});


When(/^I upload image in Contact Us form$/, () => {
	const contactUs = new CustomerAssistance;
    contactUs.uploadImage();
});


When(/^I click Submit Contact Form button$/, () => {
	const contactUs = new CustomerAssistance;
    contactUs.clickSubmitContactForm();
});


//Scenario - 5
When(/^I enter special characters and numbers in the name field in Contact Us page$/, () => {
	const contactUs = new CustomerAssistance;
    contactUs.enterInvalidNameRCB();
});

//Scenario - 6
Then(/^I ensure the mandatory message is displayed under Email field$/, async() => {
	const contactUs = new CustomerAssistance;
    await expect(contactUs.msgEmailMandatory).toExist();
});


//Scenario - 12
When(/^I enter restricted characters in message field$/, () => {
	const contactUs = new CustomerAssistance;
    contactUs.enterRestrictedChar();
});


Then(/^I ensure the regex validation message for the message field is displayed in Contact Us form$/, async() => {
	const contactUs = new CustomerAssistance;
    await expect(contactUs.msgInvalidMessage).toExist();
});


//Scenario - 15
Then(/^I validate the details in the description box of Contact Us page$/, async() => {
    const contactUs = new CustomerAssistance;
    await expect(contactUs.sctnInstructionsContactUs).toExist();
    await expect(contactUs.txtHappyToAssistYou).toExist();
    await expect(contactUs.sctnEmailUs).toExist();
    await expect(contactUs.lnkEmailUsNow).toExist();
    await expect(contactUs.sctnCallUs).toExist();
    await expect(contactUs.lnkOrRequestACallBack).toExist();
    await expect(contactUs.sctnStartADesign).toExist();
    await expect(contactUs.lnkLearnMoreStartADesign).toExist();
    await expect(contactUs.sctnCorporateAddress).toExist();
});


//Scenario - 17
Then(/^I verify the presence of Contact Number and Email ID$/, async() => {
    const contactUs = new CustomerAssistance;
    await expect(contactUs.lnkDiamondereEmailID).toExist();
    await expect(contactUs.lnkCallUsNumber).toExist();
});


//Scenario - 18
When(/^I click Email Us Now link in the description box$/, () => {
	const contactUs = new CustomerAssistance;
    contactUs.clickEmailUsNowLink();
});


//Scenario - 19
When(/^I click Or request a call back link in the description box$/, () => {
	const contactUs = new CustomerAssistance;
    contactUs.clickOrRequestACallBack();
});


//Scenario - 20
When(/^I click Learn More link in the description box$/, () => {
	const contactUs = new CustomerAssistance;
    contactUs.clickLearnMoreStartADesignLink();
});


Then(/^I ensure it redirects to the Request Custom Order page$/, async() => {
	const contactUs = await browser.getUrl();
    await expect (contactUs).toEqual(dmd.config.requestCustomOrderUrl)
});


//Scenario - 21
Then(/^I verify the presence of Get to Know Us section$/, async() => {
	const contactUs = new CustomerAssistance;
    await expect(contactUs.sctnGetToKnowUs).toExist();
});


//Scenario - 22
When(/^I select the FAQ 1$/, () => {
	const contactUs = new CustomerAssistance;
    contactUs.expandFAQ1();
});


Then(/^I ensure the answer is displayed in the expansion area with a Read More link$/, async() => {
	const contactUs = new CustomerAssistance;
    await expect(contactUs.txtAnsFAQ1).toExist();
    await expect(contactUs.lnkReadMoreFAQ1).toExist();
});


//Scenario - 23
Then(/^I validate the Why Choose Diamondere section$/, async() => {
	const contactUs = new CustomerAssistance;
    await expect(contactUs.sctnWhyChooseDiamondere).toExist();
    await expect(contactUs.headingWhyChooseDiamondere).toExist();
    await expect(contactUs.sctnLegacyOfExcellence).toExist();
    await expect(contactUs.sctnCustomMade).toExist();
    await expect(contactUs.sctnFairPrices).toExist();
    await expect(contactUs.sctnResizing).toExist();
});


When(/^I click Learn More under Legacy of Excellence$/, () => {
	const contactUs = new CustomerAssistance;
    contactUs.clickLearnMoreLegacyOfExcellence();
});


When(/^I click Learn More under Custom-Made$/, () => {
	const contactUs = new CustomerAssistance;
    contactUs.clickLearnMoreCustomMade();
});


When(/^I click Learn More under Fair Prices$/, () => {
	const contactUs = new CustomerAssistance;
    contactUs.clickLearnMoreFairPrices();
});


When(/^I click Learn More under Resizing$/, () => {
	const contactUs = new CustomerAssistance;
    contactUs.clickLearnMoreResizing();
});


Then(/^I ensure clicking the Resizing Text Link redirects to the Resizing page$/, async() => {
	const contactUs = await browser.getUrl();
    await expect (contactUs).toEqual(dmd.config.resizingStagingUrl)
});


//Scenario - 24
Then(/^I validate the Come be inspired section$/, async() => {
	const contactUs = new CustomerAssistance;
    await expect(contactUs.sctnInspiredOnInstagram).toExist();
    await expect(contactUs.headingInspiredOnInstagram).toExist();
    await expect(contactUs.sctnInstagramImageLinks).toExist();
    await expect(contactUs.lnkImageInstagram).toExist();
});


When(/^I click an image under Come be inspired section$/, () => {
	const contactUs = new CustomerAssistance;
    contactUs.clickImageInstagram();
});


//Scenario - 25
When(/^I click the Email Us Now link$/, () => {
	const contactUs = new CustomerAssistance;
    contactUs.selectEmailUsNowLinkCheckout();
});


When(/^I click the Email Us Now link in checkout page$/, () => {
	const contactUs = new CustomerAssistance;
    contactUs.clickEmailUsNowLinkCheckout();
});


Then(/^I ensure it opens the contact us page in a popup$/, async() => {
	const contactUs = new CustomerAssistance;
    await expect(contactUs.imgLogoInPopup).toExist();
    await expect(contactUs.headingContactUs).toExist();
    await expect(contactUs.sctnInstructionsContactUs).toExist();
    await expect(contactUs.txtHappyToAssistYou).toExist();
    await expect(contactUs.sctnEmailUs).toExist();
    await expect(contactUs.lnkDiamondereEmailID).toExist();
    await expect(contactUs.lnkEmailUsNow).toExist();
    await expect(contactUs.sctnCallUs).toExist();
    await expect(contactUs.lnkCallUsNumber).toExist();
    await expect(contactUs.lnkOrRequestACallBack).toExist();
    await expect(contactUs.sctnStartADesign).toExist();
    await expect(contactUs.lnkLearnMoreStartADesign).toExist();
    await expect(contactUs.sctnCorporateAddress).toExist();
    await expect(contactUs.sctnFormContactUs).toExist();
    await expect(contactUs.txtBoxName).toExist();
    await expect(contactUs.txtBoxEmail).toExist();
    await expect(contactUs.txtBoxPhone).toExist();
    await expect(contactUs.txtBoxMessage).toExist();
    await expect(contactUs.btnUploadImage).toExist();
    await expect(contactUs.txtFileFormat).toExist();
    await expect(contactUs.btnSubmitContactForm).toExist();
});


//Scenario - 27
When(/^I upload image of invalid format in Contact Us form$/, () => {
	const contactUs = new CustomerAssistance;
    contactUs.uploadInvalidImageFormat();
});


Then(/^I ensure the invalid format of image error message is displayed$/, async() => {
	const contactUs = new CustomerAssistance;
    await expect(contactUs.popupErrorWrongFileUpload).toExist();
});


//Scenario - 30
Then(/^I ensure the message field has a character limit of 400 characters in Contact Us form$/, async() => {
	const contactUs = new CustomerAssistance;
    await expect(contactUs.textCharLimitMessageInvisible).toExist();
});


//JOIN DIAMONDERE COMMUNITY
//Scenario - 1
Given(/^I scroll to footer section$/, () => {
	const joinDmdCommunity = new CustomerAssistance;
    joinDmdCommunity.scrollToFooter();
});


Then(/^I verify the Join Diamondere Community section$/, async() => {
	const joinDmdCommunity = new CustomerAssistance;
    await expect(joinDmdCommunity.headingJoinDCommunity).toExist();
    await expect(joinDmdCommunity.txtJoinDCommunity).toExist();
    await expect(joinDmdCommunity.txtBoxEmailJoinDCommunity).toExist();
    await expect(joinDmdCommunity.btnSubmitJoinDCommunity).toExist();
});


When(/^I click Email field under Join Diamondere Community section$/, () => {
	const joinDmdCommunity = new CustomerAssistance;
    joinDmdCommunity.clickEmailJoinDmdCommunity();
});


Then(/^I ensure it redirects to a new mailchimp page with all the fields$/, async() => {
	const dmdCommunity = await browser.getUrl();
    await expect(dmdCommunity).toEqual(dmd.config.joinDiamondereCommunityUrl)
    const joinDmdCommunity = new CustomerAssistance;
    await expect(joinDmdCommunity.imgDiamondereLogo).toExist();
    await expect(joinDmdCommunity.headingLetsStayConnected).toExist();
    await expect(joinDmdCommunity.txtJoinOurEmailList).toExist();
    await expect(joinDmdCommunity.sctnJoinDCommnityForm).toExist();
    await expect(joinDmdCommunity.lblEmailAddress).toExist();
    await expect(joinDmdCommunity.txtBoxEmailAddress).toExist();
    await expect(joinDmdCommunity.lblFirstName).toExist();
    await expect(joinDmdCommunity.txtBoxFirstName).toExist();
    await expect(joinDmdCommunity.lblBirthday).toExist();
    await expect(joinDmdCommunity.txtBoxBirthMonth).toExist();
    await expect(joinDmdCommunity.txtBoxBirthDate).toExist();
    await expect(joinDmdCommunity.btnSignMeUp).toExist();
});


//Scenario - 2
Given(/^I browse Join Diamondere Community page$/, () => {
	browser.url(dmd.config.joinDiamondereCommunityUrl)
});


When(/^I enter email in Join Diamondere Community form$/, () => {
	const joinDmdCommunity = new CustomerAssistance;
    joinDmdCommunity.enterEmailJoinDmd();
});


When(/^I enter first name in Join Diamondere Community form$/, () => {
	const joinDmdCommunity = new CustomerAssistance;
    joinDmdCommunity.enterFirstNameJoinDmd();
});


When(/^I enter birth month in Join Diamondere Community form$/, () => {
	const joinDmdCommunity = new CustomerAssistance;
    joinDmdCommunity.enterBirthMonthJoinDmd();
});


When(/^I enter birth date in Join Diamondere Community form$/, () => {
	const joinDmdCommunity = new CustomerAssistance;
    joinDmdCommunity.enterBirthDateJoinDmd();
});


When(/^I click Sign Me Up button$/, () => {
	const joinDmdCommunity = new CustomerAssistance;
    joinDmdCommunity.clickSignMeUp();
});


Then(/^I ensure the success message is displayed in Join Diamondere Community form$/, async() => {
    const joinDmdCommunity = new CustomerAssistance;
    await expect(joinDmdCommunity.msgSuccessSubmit).toExist();
});


//Scenario - 3
When(/^I enter invalid email address in Join Diamondere Community form$/, () => {
	const joinDmdCommunity = new CustomerAssistance;
    joinDmdCommunity.enterInvalidEmailJoinDmd();
});


Then(/^I ensure the format validation message for the email field is displayed in Join Diamondere Community form$/, async() => {
    const joinDmdCommunity = new CustomerAssistance;
    await expect(joinDmdCommunity.msgInvalidEmailAddress).toExist();
});


//Scenario - 4
When(/^I enter special characters and numbers in the first name field in Join Diamondere Community form$/, () => {
	const joinDmdCommunity = new CustomerAssistance;
    joinDmdCommunity.enterInvalidNameJoinDmd();
});


Then(/^I ensure the character validation message for the first name field is displayed in Join Diamondere Community form$/, async() => {
    const joinDmdCommunity = new CustomerAssistance;
    await expect(joinDmdCommunity.msgInvalidName).toExist();
});


//Scenario - 5
When(/^I enter special characters and alphabets in the birth month and date fields in Join Diamondere Community form$/, () => {
	const joinDmdCommunity = new CustomerAssistance;
    joinDmdCommunity.enterInvalidBirthDayJoinDmd();
});


Then(/^I ensure the character validation message for the birthday fields is displayed in Join Diamondere Community form$/, async() => {
	const joinDmdCommunity = new CustomerAssistance;
    await expect(joinDmdCommunity.msgInvalidBirthday).toExist();
});


//Scenario - 6
Then(/^I ensure the mandatory message is displayed under email field in Join Diamondere Community form$/, async() => {
	const joinDmdCommunity = new CustomerAssistance;
    await expect(joinDmdCommunity.msgEmailAddressRequired).toExist();
});


//Scenario - 7
Then(/^I ensure the mandatory message is displayed under first name field in Join Diamondere Community form$/, async() => {
	const joinDmdCommunity = new CustomerAssistance;
    await expect(joinDmdCommunity.msgFirstNameRequired).toExist();
});


//Scenario - 9
When(/^I enter number greater than 12 in month field$/, () => {
	const joinDmdCommunity = new CustomerAssistance;
    joinDmdCommunity.enterInvalidBirthMonth();
});


//Scenario - 10
When(/^I enter number greater than 31 in date field$/, () => {
	const joinDmdCommunity = new CustomerAssistance;
    joinDmdCommunity.enterInvalidBirthDate();
});


//Scenario - 11
When(/^I refresh the page, re-enter the same details and click Sign me up$/, () => {
    const joinDmdCommunity = new CustomerAssistance;
    browser.refresh();
    joinDmdCommunity.enterEmailJoinDmd();
    joinDmdCommunity.enterFirstNameJoinDmd();
    joinDmdCommunity.enterBirthMonthJoinDmd();
    joinDmdCommunity.enterBirthDateJoinDmd();
    joinDmdCommunity.clickSignMeUp();
});


Then(/^I ensure the already registered error message is displayed$/, async() => {
	const joinDmdCommunity = new CustomerAssistance;
    await expect(joinDmdCommunity.msgErrorEmailAddress).toExist();
});

//Scenario - 15
When(/^I enter already registered email in Join Diamondere Community form$/, () => {
	const joinDmdCommunity = new CustomerAssistance;
    joinDmdCommunity.enteralreadyRegEmail()
});


//SHARE PRODUCT VIA EMAIL

//Scenario - 1
Then(/^I verify the social share plugins in page 3$/, async() => {
	const shareProduct = new CustomerAssistance;
    await expect(shareProduct.sctnSocialShares).toExist();
    await expect(shareProduct.lnkEmailThisDesign).toExist();
    await expect(shareProduct.lnkPinThisDesign).toExist();
    await expect(shareProduct.lnkFBShareThisDesign).toExist();
});


When(/^I click Email icon in page 3$/, () => {
	const shareProduct = new CustomerAssistance;
    shareProduct.clickEmailIconPage3();
});


Then(/^I ensure page redirects to Share Product page with all the sections$/, async() => {
	const shareProduct = new CustomerAssistance;
    await expect(shareProduct.sctnShareProductForm).toExist();
});


//Scenario - 3
Then(/^I verify the ring image present in the Share Product page is as same as the image in page 3$/, async() => {
	const shareProduct = new CustomerAssistance;
    await expect(shareProduct.imgMiyaShareProduct).toExist();
});


//Scenario - 4
Then(/^I validate the presence of fields and button in Share Product page$/, async() => {
	const shareProduct = new CustomerAssistance;
    await expect(shareProduct.imgProductToBeShared).toExist();
    await expect(shareProduct.txtTellAFriend).toExist();
    await expect(shareProduct.txtProductToBeSharedName).toExist();
    await expect(shareProduct.txtBoxYourName).toExist();
    await expect(shareProduct.txtBoxYourEmail).toExist();
    await expect(shareProduct.txtBoxYourFriendName).toExist();
    await expect(shareProduct.txtBoxYourFriendEmail).toExist();
    await expect(shareProduct.btnSendToAFriend).toExist();
});


//Scenario - 5
Then(/^I ensure the name and email are pre-populated in Share Product page$/, async() => {
	const shareProductName = await $('//input[@name="tellAfriends"]');
    const txtName = await shareProductName.getValue();
    await expect(txtName).toEqual(data.RequestCallBack.txtNameLoggedIn);
    const shareProductEmail = await $('//input[@name="tellAfriendEmail"]');
    const txtEmail = await shareProductEmail.getValue();
    await expect(txtEmail).toEqual(data.RequestCallBack.txtEmailLoggedIn);
});


//Scenario - 6
Then(/^I ensure the name and email fields are blank in Share Product page$/, async() => {
	const shareProductName = await $('//input[@name="tellAfriends"]');
    const txtName = await shareProductName.getValue();
    await expect(txtName).not.toEqual(data.RequestCallBack.txtNameLoggedIn);
    const shareProductEmail = await $('//input[@name="tellAfriendEmail"]');
    const txtEmail = await shareProductEmail.getValue();
    await expect(txtEmail).not.toEqual(data.RequestCallBack.txtEmailLoggedIn);
});


//Scenario - 7
When(/^I enter email in your email field of Share Product form$/, () => {
	const shareProduct = new CustomerAssistance;
    shareProduct.enterYourEmail();
});


When(/^I enter name in your friend's name field of Share Product form$/, () => {
	const shareProduct = new CustomerAssistance;
    shareProduct.enterYourFriendName();
});


When(/^I enter email in your friend's email field of Share Product form$/, () => {
	const shareProduct = new CustomerAssistance;
    shareProduct.enterYourFriendEmail();
});


When(/^I click Send to a friend button$/, () => {
	const shareProduct = new CustomerAssistance;
    shareProduct.clickSendToAFriend();
});


//Scenario - 8
When(/^I enter special characters, numbers and spaces without alphabets in the your name field in Share Product form$/, () => {
	const shareProduct = new CustomerAssistance;
    shareProduct.enterInvalidYourName();
});


//Scenario - 9
When(/^I enter name in your name field of Share Product form$/, () => {
	const shareProduct = new CustomerAssistance;
    shareProduct.enterYourName();
});


Then(/^I ensure the success message is displayed in Share Product form$/, async() => {
	const shareProduct = new CustomerAssistance;
    await expect(shareProduct.popupShareSuccess).toExist();
});


//Scenario - 10
Then(/^I ensure the mandatory message is displayed under your friend's name field in Share Product form$/, async() => {
	const shareProduct = new CustomerAssistance;
    await expect(shareProduct.msgFriendNameMandatory).toExist();
});


//Scenario - 11
When(/^I enter special characters, numbers and spaces without alphabets in the your friend's name field in Share Product form$/, () => {
	const shareProduct = new CustomerAssistance;
    shareProduct.enterInvalidYourFriendName();
});


//Scenario - 13
When(/^I enter invalid email address in Share Product form$/, () => {
	const shareProduct = new CustomerAssistance;
    shareProduct.enterInvalidYourEmail();
});


//Scenario - 14
Then(/^I ensure the mandatory message is displayed under your friend's email field in Share Product form$/, async() => {
	const shareProduct = new CustomerAssistance;
    await expect(shareProduct.msgFriendEmailMandatory).toExist();
});


//Scenario - 15
When(/^I enter invalid email address in your friend's email field of Share Product form$/, () => {
	const shareProduct = new CustomerAssistance;
    shareProduct.enterInvalidYourFriendEmail();
});


//Scenario - 16
When(/^I enter same email in your friend's email field of Share Product form$/, () => {
	const shareProduct = new CustomerAssistance;
    shareProduct.enterSameEmail();
});


//Scenario - 17
When(/^I enter name with more than 40 characters in your name field of Share Product form$/, () => {
	const shareProduct = new CustomerAssistance;
    shareProduct.enterExceedCharLimitYourName();
});


Then(/^I ensure the your name field accepts only 40 characters in Share Product form$/, async() => {
	const shareProductYourName = await $('//input[@name="tellAfriends"]');
    const ExceedLimitYourName = await shareProductYourName.getValue();
    await expect(ExceedLimitYourName).not.toEqual(data.RequestCallBack.ExceedCharLimitName);
});


//Scenario - 18
When(/^I enter name with more than 40 characters in your friend's name field of Share Product form$/, () => {
	const shareProduct = new CustomerAssistance;
    shareProduct.enterExceedCharLimitYourFriendName();
});


Then(/^I ensure the your friend's name field accepts only 40 characters in Share Product form$/, async() => {
	const shareProductYourFriendName = await $('//input[@name="tellAfriends"]');
    const ExceedLimitYourFriendName = await shareProductYourFriendName.getValue();
    await expect(ExceedLimitYourFriendName).not.toEqual(data.RequestCallBack.ExceedCharLimitName);
});