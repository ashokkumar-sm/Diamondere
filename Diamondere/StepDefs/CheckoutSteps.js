const { Given, When, Then } = require('@wdio/cucumber-framework');
const BrowserUtil = require('../../CommonUtils/BrowserUtil');
const ElementUtil = require('../../CommonUtils/ElementUtil');
const dmd = require('../Configs/dmd_' + global.testEnv + '.js');
const Checkout = require('../PageObjects/Checkout')
const RegistrationandLogin = require('../PageObjects/RegistrationandLogin')
const data = require('../TestData/Checkout.json');


When(/^I browse page 3 of earring Vogue$/, () => {
	browser.url(dmd.config.VoguePage3)
    BrowserUtil.wait(5)
});


When(/^I click Add to cart for Vogue$/, () => {
	const checkout = new Checkout;
    checkout.addToCartVogue();
});


//1
Given(/^I click Diamondere checkout logo$/, () => {
	const checkout = new Checkout;
    checkout.clickLogo();
});


Then(/^I ensure it stays in the checkout page with other menus and various sections$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.logoDiamondere).toExist();
    await expect(checkout.txtCheckout).toExist();
    await expect(checkout.txtNeedAssistance).toExist();
    await expect(checkout.lnkReqCallBackCheckout).toExist();
    await expect(checkout.lnkEmailUsCheckout).toExist();
    await expect(checkout.tabNeedAssistance).toExist();
    await expect(checkout.tabLinkReqCallBack).toExist();
    await expect(checkout.tabLinkTollFreeContact).toExist();
    await expect(checkout.tabLinkEmailUs).toExist();
    await expect(checkout.sctnDisclaimer).toExist();
    await expect(checkout.lnkDisclaimer).toExist();
    await expect(checkout.sctnShippingAndBilling).toExist();
    await expect(checkout.headingShippingAndBilling).toExist();
    await expect(checkout.headingShippingAddress).toExist();
    await expect(checkout.headingBillingAddress).toExist();
    await expect(checkout.txtSameAsShipping).toExist();
    await expect(checkout.btnToggleSameAsShipping).toExist();
    await expect(checkout.headingPaymentOptions).toExist();
    await expect(checkout.sctnProductsInCart).toExist();
    await expect(checkout.sctnPriceDetails).toExist();
    await expect(checkout.txtJoinCustomers).toExist();
    await expect(checkout.sctnJoinCustomers).toExist();
    await expect(checkout.img5Star).toExist();
    await expect(checkout.txtSecureShpng).toExist();
    await expect(checkout.txt100Returns).toExist();
});


//2
Given(/^I move to Shipping Address section$/, () => {
	const checkout = new Checkout;
    checkout.moveToShippingAddress();
});


Then(/^I ensure the fields to fill in the shipping address are displayed$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.txtFirstNameShipping).toExist();
    await expect(checkout.txtLastNameShipping).toExist();
    await expect(checkout.txtEmailShipping).toExist();
    await expect(checkout.txtPhoneShipping).toExist();
    await expect(checkout.txtAddressShipping).toExist();
    await expect(checkout.txtAddressLine2Shipping).toExist();
    await expect(checkout.txtCityShipping).toExist();
    await expect(checkout.drpCountryShipping).toExist();
    await expect(checkout.drpStateShipping).toExist();
    await expect(checkout.txtZipShipping).toExist();
    await expect(checkout.btnContinueToPayment).toExist();
});


//3
Given(/^I verify the char limit and enter restricted characters in First Name field$/, () => {
	const checkout = new Checkout;
    checkout.enterSpecialCharFirstName();
});


Then(/^I ensure that the character validation message is not displayed$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.msgFieldErrors).not.toExist();
});


//4
Given(/^I verify the char limit and enter restricted characters in Last Name field$/, () => {
	const checkout = new Checkout;
    checkout.enterSpecialCharLastName();
});


//5
Given(/^I enter invalid email in the Email field$/, () => {
	const checkout = new Checkout;
    checkout.enterInvalidEmailShipping();
});


Then(/^I ensure the error format message is displayed$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.msgInvalidEmail).toExist();
});


//6
Given(/^I verify the char limit and enter restricted characters in Phone field$/, () => {
	const checkout = new Checkout;
    checkout.enterSpecialCharPhone();
});


Then(/^I ensure the character validation message for Phone field is displayed$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.msgInvalidPhone).toExist();
});


//7
Given(/^I verify the char limit and enter restricted characters in Address field$/, () => {
	const checkout = new Checkout;
    checkout.enterAddressShipping();
});


//8
Given(/^I verify the char limit and enter restricted characters in Address line 2 field$/, () => {
	const checkout = new Checkout;
    checkout.enterAddressLine2Shipping();
});


//9
Given(/^I verify the char limit and enter restricted characters in City field$/, () => {
	const checkout = new Checkout;
    checkout.enterCityShipping();
});


//10
Given(/^I select the Country field dropdown$/, () => {
	const checkout = new Checkout;
    checkout.selectCountryDropdown();
});


Then(/^I validate all the options under Country dropdown$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.optnUSShipping).toExist();
    await expect(checkout.optnAUShipping).toExist();
    await expect(checkout.optnCAShipping).toExist();
    await expect(checkout.optnINShipping).toExist();
});


//11
Then(/^I ensure the State field functions as a dropdown with the values of US states$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.optnCaliforniaShipping).toExist();
    await expect(checkout.optnSouthDakotaShipping).toExist();
});


When(/^I select Canada in the country dropdown$/, () => {
	const checkout = new Checkout;
    checkout.selectCanadaShipping();
});


Then(/^I ensure the State field functions as a dropdown with the values of Canada states$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.optnOntarioShipping).toExist();
});


//12
Given(/^I select India in the country dropdown$/, () => {
	const checkout = new Checkout;
    checkout.selectIndiaShipping();
});


When(/^I verify the char limit and enter restricted characters in State field$/, () => {
	const checkout = new Checkout;
    checkout.enterSpecialCharState();
});


//13
Given(/^I verify the char limit and enter restricted characters in Zip field$/, () => {
	const checkout = new Checkout;
    checkout.enterSpecialCharZip();
});


//14
Then(/^I ensure the mandatory field messages and popup are displayed$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.msgMandatoryFirstName).toExist();
    await expect(checkout.msgMandatoryLastName).toExist();
    await expect(checkout.msgMandatoryEmail).toExist();
    await expect(checkout.msgMandatoryPhone).toExist();
    await expect(checkout.msgMandatoryAddress).toExist();
    await expect(checkout.msgMandatoryCity).toExist();
    await expect(checkout.msgMandatoryState).toExist();
    await expect(checkout.msgMandatoryZip).toExist();
    await expect(checkout.popupMandatory).toExist();
    await expect(checkout.popupTextFillDetails).toExist();
    await expect(checkout.popupXbutton).toExist();
    await expect(checkout.popupMandatoryContent).toExist();
});


//15
Given(/^I enter First Name in Shipping address$/, () => {
	const checkout = new Checkout;
    checkout.enterFirstNameShipping();
});


When(/^I enter Last Name in Shipping address$/, () => {
	const checkout = new Checkout;
    checkout.enterLastNameShipping();
});


When(/^I enter Email in Shipping address$/, () => {
	const checkout = new Checkout;
    checkout.enterEmailShipping();
});


When(/^I enter Phone in Shipping address$/, () => {
	const checkout = new Checkout;
    checkout.enterPhoneShipping();
});


When(/^I enter Address in Shipping address$/, () => {
	const checkout = new Checkout;
    checkout.enterAddressShipping();
});


When(/^I enter Address line 2 in Shipping address$/, () => {
	const checkout = new Checkout;
    checkout.enterAddressLine2Shipping();
});


When(/^I enter City in Shipping address$/, () => {
	const checkout = new Checkout;
    checkout.enterCityShipping();
});


When(/^I select US in the country dropdown$/, () => {
	const checkout = new Checkout;
    checkout.selectUSShipping();
});


When(/^I select California in the state dropdown$/, () => {
	const checkout = new Checkout;
    checkout.selectCaliforniaShipping();
});


When(/^I enter Zip code in Shipping address$/, () => {
	const checkout = new Checkout;
    checkout.enterZipCodeShipping();
});


When(/^I click Continue To Payment button$/, () => {
	const checkout = new Checkout;
    checkout.clickContinueToPayment();
});


Then(/^I ensure the checked Shipping & Billing heading is displayed with all the entered details$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.headingCheckedShippingAndBilling).toExist();
    await expect(checkout.consolidatedshippingname).toExist();
    await expect(checkout.consolidatedshippingemail).toExist();
    await expect(checkout.consolidatedshippingaddress).toExist();
    await expect(checkout.consolidatedshippingcitystate).toExist();
    await expect(checkout.consolidatedshippingcountry).toExist();
    await expect(checkout.consolidatedshippingzip).toExist();
    await expect(checkout.consolidatedbillingname).toExist();
    await expect(checkout.consolidatedbillingemail).toExist();
    await expect(checkout.consolidatedbillingaddress).toExist();
    await expect(checkout.consolidatedbillingcitystate).toExist();
    await expect(checkout.consolidatedbillingcountry).toExist();
    await expect(checkout.consolidatedbillingzip).toExist();
});


//17
When(/^I select Continue To Payment button$/, () => {
	const checkout = new Checkout;
    checkout.continueToPaymentStateDrp();
});


Then(/^I ensure the error mandatory message and popup for State field is displayed$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.msgMandatoryState).toExist();
});


//18
Then(/^I ensure the details of Shipping & Billing sections are same$/, async() => {
    const shippingEmail = await $('//p[contains(text(),"Shipping Address")]/parent::div/div/p[2]');
	const shipEmail = await shippingEmail.getText();
    const billingEmail = await $('//p[contains(text(),"Billing Address")]/parent::div/div/p[2]');
	const billEmail = await billingEmail.getText();
	await expect(shipEmail).toEqual(billEmail);
    const shippingAddress = await $('//p[contains(text(),"Shipping Address")]/parent::div/div/p[3]');
	const shipAddress = await shippingAddress.getText();
    const billingAddress = await $('//p[contains(text(),"Billing Address")]/parent::div/div/p[3]');
	const billAddress = await billingAddress.getText();
	await expect(shipAddress).toEqual(billAddress);
    const shippingCityState = await $('//p[contains(text(),"Shipping Address")]/parent::div/div/p[4]');
	const shipCityState = await shippingCityState.getText();
    const billingCityState = await $('//p[contains(text(),"Billing Address")]/parent::div/div/p[4]');
	const billCityState = await billingCityState.getText();
	await expect(shipCityState).toEqual(billCityState);
    const shippingCountry = await $('//p[contains(text(),"Shipping Address")]/parent::div/div/p[5]');
	const shipCountry = await shippingCountry.getText();
    const billingCountry = await $('//p[contains(text(),"Billing Address")]/parent::div/div/p[5]');
	const billCountry = await billingCountry.getText();
	await expect(shipCountry).toEqual(billCountry);
    const shippingZip = await $('//p[contains(text(),"Shipping Address")]/parent::div/div/p[6]');
	const shipZip = await shippingZip.getText();
    const billingZip = await $('//p[contains(text(),"Billing Address")]/parent::div/div/p[6]');
	const billZip = await billingZip.getText();
	await expect(shipZip).toEqual(billZip);
    const shippingName = await $('//p[contains(text(),"Shipping Address")]/parent::div/div/p[1]');
	const shipName = await shippingName.getText();
    const billingName = await $('//p[contains(text(),"Billing Address")]/parent::div/div/p[1]');
	const billName = await billingName.getText();
	await expect(shipName).toEqual(billName);
});


//19
When(/^I click Edit under Shipping & Billing section$/, () => {
	const checkout = new Checkout;
    checkout.clickEditAddress();
});


When(/^I change the First Name to Diamondere$/, () => {
	const checkout = new Checkout;
    checkout.editName();
});


Then(/^I verify the edited name is displayed under Shipping & Billing section$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.txtEditedName).toExist();
});


//20
Given(/^I disable the Same as shipping address toggle button$/, () => {
	const checkout = new Checkout;
    checkout.disableToggle();
});


Then(/^I ensure the fields to fill in the billing address are displayed$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.txtFirstNameBilling).toExist();
    await expect(checkout.txtLastNameBilling).toExist();
    await expect(checkout.txtEmailBilling).toExist();
    await expect(checkout.txtPhoneBilling).toExist();
    await expect(checkout.txtAddressBilling).toExist();
    await expect(checkout.txtAddressLine2Billing).toExist();
    await expect(checkout.txtCityBilling).toExist();
    await expect(checkout.drpCountryBilling).toExist();
    await expect(checkout.drpStateBilling).toExist();
    await expect(checkout.txtZipBilling).toExist();
    await expect(checkout.btnContinueToPayment).toExist();
});


//21
When(/^I verify the char limit and enter restricted characters in First Name field of Billing section$/, () => {
	const checkout = new Checkout;
    checkout.enterSpecialCharFirstNameBill();
});


//22
When(/^I verify the char limit and enter restricted characters in Last Name field of Billing section$/, () => {
	const checkout = new Checkout;
    checkout.enterSpecialCharLastNameBill();
});


//23
When(/^I enter invalid email in the Email field of Billing section$/, () => {
	const checkout = new Checkout;
    checkout.enterInvalidEmailBilling();
});


//24
When(/^I verify the char limit and enter restricted characters in Phone field of Billing section$/, () => {
	const checkout = new Checkout;
    checkout.enterSpecialCharPhoneBill();
});


//25
When(/^I verify the char limit and enter restricted characters in Address field of Billing section$/, () => {
	const checkout = new Checkout;
    checkout.enterAddressBilling();
});


//26
When(/^I verify the char limit and enter restricted characters in Address line 2 field of Billing section$/, () => {
	const checkout = new Checkout;
    checkout.enterAddressLine2Billing();
});


//27
When(/^I verify the char limit and enter restricted characters in City field of Billing section$/, () => {
	const checkout = new Checkout;
    checkout.enterCityBilling();
});


//28
When(/^I select the Country field dropdown of Billing section$/, () => {
	const checkout = new Checkout;
    checkout.selectCountryDropdownBilling();
});


Then(/^I validate all the options under Country dropdown of Billing section$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.optnUSBilling).toExist();
    await expect(checkout.optnAUBilling).toExist();
    await expect(checkout.optnCABilling).toExist();
    await expect(checkout.optnINBilling).toExist();
});


//29
When(/^I select US in the country dropdown of Billing section$/, () => {
	const checkout = new Checkout;
    checkout.selectUSBilling();
});


Then(/^I ensure the State field functions as a dropdown with the values of US states of Billing section$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.optnCaliforniaBilling).toExist();
    await expect(checkout.optnSouthDakotaBilling).toExist();
});


When(/^I select Canada in the country dropdown of Billing section$/, () => {
	const checkout = new Checkout;
    checkout.selectCanadaBilling();
});


Then(/^I ensure the State field functions as a dropdown with the values of Canada states of Billing section$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.optnOntarioBilling).toExist();
});


//30
When(/^I select India in the country dropdown of Billing section$/, () => {
	const checkout = new Checkout;
    checkout.selectIndiaBilling();
});


When(/^I verify the char limit and enter restricted characters in State field of Billing section$/, () => {
	const checkout = new Checkout;
    checkout.enterSpecialCharStateBill();
});


//31
When(/^I verify the char limit and enter restricted characters in Zip field of Billing section$/, () => {
	const checkout = new Checkout;
    checkout.enterSpecialCharZipBill();
});


//33
When(/^I enter First Name in Billing address$/, () => {
	const checkout = new Checkout;
    checkout.enterFirstNameBilling();
});


When(/^I enter Last Name in Billing address$/, () => {
	const checkout = new Checkout;
    checkout.enterLastNameBilling();
});


When(/^I enter Email in Billing address$/, () => {
	const checkout = new Checkout;
    checkout.enterEmailBilling();
});


When(/^I enter Phone in Billing address$/, () => {
	const checkout = new Checkout;
    checkout.enterPhoneBilling();
});


When(/^I enter Address in Billing address$/, () => {
	const checkout = new Checkout;
    checkout.enterAddressBilling();
});


When(/^I enter Address line 2 in Billing address$/, () => {
	const checkout = new Checkout;
    checkout.enterAddressLine2Billing();
});


When(/^I enter City in Billing address$/, () => {
	const checkout = new Checkout;
    checkout.enterCityBilling();
});


When(/^I select California in the state dropdown of Billing section$/, () => {
	const checkout = new Checkout;
    checkout.selectCaliforniaBilling();
});


When(/^I enter Zip code in Billing address$/, () => {
	const checkout = new Checkout;
    checkout.enterZipCodeBilling();
});


//36
When(/^I select Ontario in the state dropdown of Billing section$/, () => {
	const checkout = new Checkout;
    checkout.selectOntarioBilling();
});


Then(/^I ensure the details of Shipping & Billing sections are different$/, async() => {
	const shippingName = await $('//p[contains(text(),"Shipping Address")]/parent::div/div/p[1]');
	const shipName = await shippingName.getText();
    const billingName = await $('//p[contains(text(),"Billing Address")]/parent::div/div/p[1]');
	const billName = await billingName.getText();
	await expect(shipName).not.toEqual(billName);
    const shippingEmail = await $('//p[contains(text(),"Shipping Address")]/parent::div/div/p[2]');
	const shipEmail = await shippingEmail.getText();
    const billingEmail = await $('//p[contains(text(),"Billing Address")]/parent::div/div/p[2]');
	const billEmail = await billingEmail.getText();
	await expect(shipEmail).not.toEqual(billEmail);
    const shippingAddress = await $('//p[contains(text(),"Shipping Address")]/parent::div/div/p[3]');
	const shipAddress = await shippingAddress.getText();
    const billingAddress = await $('//p[contains(text(),"Billing Address")]/parent::div/div/p[3]');
	const billAddress = await billingAddress.getText();
	await expect(shipAddress).not.toEqual(billAddress);
    const shippingCityState = await $('//p[contains(text(),"Shipping Address")]/parent::div/div/p[4]');
	const shipCityState = await shippingCityState.getText();
    const billingCityState = await $('//p[contains(text(),"Billing Address")]/parent::div/div/p[4]');
	const billCityState = await billingCityState.getText();
	await expect(shipCityState).not.toEqual(billCityState);
    const shippingCountry = await $('//p[contains(text(),"Shipping Address")]/parent::div/div/p[5]');
	const shipCountry = await shippingCountry.getText();
    const billingCountry = await $('//p[contains(text(),"Billing Address")]/parent::div/div/p[5]');
	const billCountry = await billingCountry.getText();
	await expect(shipCountry).not.toEqual(billCountry);
    const shippingZip = await $('//p[contains(text(),"Shipping Address")]/parent::div/div/p[6]');
	const shipZip = await shippingZip.getText();
    const billingZip = await $('//p[contains(text(),"Billing Address")]/parent::div/div/p[6]');
	const billZip = await billingZip.getText();
	await expect(shipZip).not.toEqual(billZip);
});


//37
When(/^I edit the entered email in Billing section$/, () => {
	const checkout = new Checkout;
    checkout.editEmail();
});


Then(/^I verify the edited email is displayed under Shipping & Billing section$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.txtEditedEmail).toExist();
});


//38
Given(/^I browse back to shopping cart page$/, () => {
	const checkout = new Checkout;
    checkout.browseBack();
});


When(/^I login to verify the checkout page$/, () => {
	const login = new RegistrationandLogin;
    login.enterCheckoutLogin();
    login.clickLoginbutton();
    BrowserUtil.wait(5)
});


Then(/^I validate the ring details with pre-selected protection plan$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.imgFlori).toExist();
    await expect(checkout.txtFlori).toExist();
    await expect(checkout.txtFloriDesc).toExist();
    await expect(checkout.txtFloriRingSize).toExist();
    await expect(checkout.txtPriceFlori).toExist();
    await expect(checkout.txtProtectionPlanFlori).toExist();
    await expect(checkout.lnkExtendFlori).toExist();
    await expect(checkout.btn3YearPlanFlori).toExist();
    await expect(checkout.btn5YearSelectedPlanFlori).toExist();
    await expect(checkout.btnLifetimePlanFlori).toExist();
});


When(/^I browse back and click logout$/, () => {
	const checkout = new Checkout;
    checkout.browseBack();
    const login = new RegistrationandLogin;
    login.hoverLogin();
    login.clickLogout();
});


//39
Then(/^I validate the necklace and chain details with protection plan options$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.imgLileas).toExist();
    await expect(checkout.txtLileas).toExist();
    await expect(checkout.txtLileasDesc).toExist();
    await expect(checkout.txtPriceLileas).toExist();
    await expect(checkout.txtProtectionPlanLileas).toExist();
    await expect(checkout.lnkExtendLileas).toExist();
    await expect(checkout.btn3YearPlanLileas).toExist();
    await expect(checkout.btn5YearPlanLileas).toExist();
    await expect(checkout.btnLifetimePlanLileas).toExist();
    await expect(checkout.imgChain).toExist();
    await expect(checkout.txtChainStyle).toExist();
    await expect(checkout.txtChainDesc).toExist();
    await expect(checkout.txtChainSize).toExist();
    await expect(checkout.txtChainPrice).toExist();
});


//40
Then(/^I validate the bracelet details with protection plan options$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.imgMavis).toExist();
    await expect(checkout.txtMavis).toExist();
    await expect(checkout.txtMavisDesc).toExist();
    await expect(checkout.txtMavisBraceletLength).toExist();
    await expect(checkout.txtMavisPrice).toExist();
});


//41
Then(/^I validate the earring details with pre-selected protection plan$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.imgVogue).toExist();
    await expect(checkout.txtVogue).toExist();
    await expect(checkout.txtVogueEarringBack).toExist();
    await expect(checkout.txtVogueCenterStone).toExist();
    await expect(checkout.txtVogueDesc).toExist();
    await expect(checkout.txtPriceVogue).toExist();
    await expect(checkout.txtProtectionPlanVogue).toExist();
    await expect(checkout.lnkExtendVogue).toExist();
    await expect(checkout.btn3YearSelectedPlanVogue).toExist();
    await expect(checkout.btn5YearPlanVogue).toExist();
    await expect(checkout.btnLifetimePlanVogue).toExist();
});


//42
When(/^I click Extend link$/, () => {
	const checkout = new Checkout;
    checkout.clickExtend();
});


Then(/^I ensure it redirects to the page of Extend$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.imgExtendHomepageLogo).toExist();
});


//43
Then(/^I ensure the protection plan options are available for the product$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.btn3YearPlanFlori).toExist();
    await expect(checkout.btn5YearSelectedPlanFlori).toExist();
    await expect(checkout.btnLifetimePlanFlori).toExist();
});


Then(/^I ensure the protection plan options are disabled and I validate the error message$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.btnProtectionPlanDisabled).toExist();
    await expect(checkout.msgProtectionPlanOnlyUS).toExist();
});


//44
Given(/^I move to Product Details section$/, () => {
	const checkout = new Checkout;
    checkout.moveToProductDetails();
});


Then(/^I verify the price details of the added product in cart$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.txtSubtotal).toExist();
    await expect(checkout.txtShippingCal).toExist();
    await expect(checkout.txtSalesTax).toExist();
    await expect(checkout.txtCertifcation).toExist();
    await expect(checkout.txtTotal).toExist();
    await expect(checkout.txtSubtotalAmount).toExist();
    await expect(checkout.txtShippingCalAmount).toExist();
    await expect(checkout.txtSalesTaxAmount).toExist();
    await expect(checkout.txtCertifcationAmount).toExist();
    await expect(checkout.txtTotalAmount).toExist();
});


//45
When(/^I scroll to price details section$/, () => {
	const checkout = new Checkout;
    checkout.scrollToPriceDetails();
});


Then(/^I ensure the expected delivery date and the disclaimer message is displayed$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.txtDelDate).toExist();
    //await expect(checkout.msgCustomDiamondDisclaimer).toExist();
});


//46
Then(/^I verify that the sales tax amount is generated for California and I validate the disclaimer message$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.txtSalesTaxAmountInDollars).toExist();
    await expect(checkout.msgDisclaimerSalesTax).toExist();
});


When(/^I select South Dakota in the state dropdown$/, () => {
	const checkout = new Checkout;
    checkout.selectSouthDakotaShipping();
});


Then(/^I verify that the sales tax amount is zero$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.txtSalesTaxAmountZero).toExist();
});


//47
Given(/^I select Australia in the country dropdown$/, () => {
	const checkout = new Checkout;
    checkout.selectAustraliaShipping();
});


Then(/^I verify the prepaid tax amount along with the disclaimer messages$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.txtPrepaidTaxOrDuty).toExist();
    await expect(checkout.msgDisclaimerPrepaidTax).toExist();
    await expect(checkout.msgDisclaimerCustomClearance).toExist();
});


//49
Then(/^I verify the presence of safe and secure checkout link and text$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.lnkSafeAndSecure).toExist();
    await expect(checkout.sctnSafeAndSecure).toExist();
});


When(/^I select the safe and secure link$/, () => {
	const checkout = new Checkout;
    checkout.clickSafeAndSecure();
});


Then(/^I ensure it redirects to the Digicert secure page$/, async() => {
	const checkout = await browser.getUrl()
    await expect(checkout).toEqual(dmd.config.DigicertUrl)
});


//50
Then(/^I verify the presence of footer and disclaimer link$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.sctnDisclaimer).toExist();
    await expect(checkout.lnkDisclaimer).toExist();
});


When(/^I select the Disclaimer link$/, () => {
	const checkout = new Checkout;
    checkout.clickDisclaimer();
});


Then(/^I ensure it redirects to the Disclaimer page of Diamondere$/, async() => {
	const checkout = await browser.getUrl()
    await expect(checkout).toEqual(dmd.config.DiamondereDisclaimerUrl)
});


//51
Given(/^I enter valid address details in Shipping & Billing section$/, () => {
	const checkout = new Checkout;
    checkout.enterFirstNameShipping();
    checkout.enterLastNameShipping();
    checkout.enterEmailShipping();
    checkout.enterPhoneShipping();
    checkout.enterAddressShipping();
    checkout.enterAddressLine2Shipping();
    checkout.enterCityShipping();
    checkout.selectUSShipping();
    checkout.selectCaliforniaShipping();
    checkout.enterZipCodeShipping();
});


Then(/^I ensure the payment options are displayed$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.sctnPaymentOptions).toExist();
});


//52
When(/^I remove the chosen 3 year plan in Earring$/, () => {
	const checkout = new Checkout;
    checkout.remove3YearPlan();
});


When(/^I select Lifetime protection plan$/, () => {
	const checkout = new Checkout;
    checkout.selectLifetimePlan();
});


Then(/^I ensure the lifetime protection plan has been added for the earring$/, async() => {
	const checkout = new Checkout;
    await expect(checkout.btnLifetimeSelectedPlanVogue).toExist();
});


When(/^I select 3 year protection plan again$/, () => {
	const checkout = new Checkout;
    checkout.select3YearPlan();
});


//53
Then(/^I ensure the name and email fields are blank for guest users$/, async() => {
	const checkoutFirstName = await $('//input[@name="shippingAddressFirstName"]');
    const txtFirstName = await checkoutFirstName.getValue();
    await expect(txtFirstName).not.toEqual(data.Shipping.FirstName);
    const checkoutLastName = await $('//input[@name="shippingAddressLastName"]');
    const txtLastName = await checkoutLastName.getValue();
    await expect(txtLastName).not.toEqual(data.Shipping.LastName);
    const checkoutEmail = await $('//input[@name="shippingAddressEmail"]');
    const txtEmail = await checkoutEmail.getValue();
    await expect(txtEmail).not.toEqual(data.Shipping.Email);
});


//54
Then(/^I verify the name and email are pre populated in the shipping address section$/, async() => {
	const checkoutFirstName = await $('//input[@name="shippingAddressFirstName"]');
    const txtFirstName = await checkoutFirstName.getValue();
    await expect(txtFirstName).toEqual(data.CheckoutLoggedIn.FirstName);
    const checkoutLastName = await $('//input[@name="shippingAddressLastName"]');
    const txtLastName = await checkoutLastName.getValue();
    await expect(txtLastName).toEqual(data.CheckoutLoggedIn.LastName);
    const checkoutEmail = await $('//input[@name="shippingAddressEmail"]');
    const txtEmail = await checkoutEmail.getValue();
    await expect(txtEmail).toEqual(data.CheckoutLoggedIn.Email);
});
