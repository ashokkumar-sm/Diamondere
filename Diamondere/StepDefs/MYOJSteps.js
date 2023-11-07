const { Given, When, Then } = require('@wdio/cucumber-framework');
const BrowserUtil = require('../../CommonUtils/BrowserUtil');
const ElementUtil = require('../../CommonUtils/ElementUtil');
const dmd = require('../Configs/dmd_' + global.testEnv + '.js');
const MYOJ = require('../PageObjects/MYOJ');
const Page2 = require('../PageObjects/Page2');
const data = require('../TestData/MYOJ.json');
const context = require("../../CommonUtils/ScenarioContext")


When(/^I remove products if already added in cart$/, async() => {
	const makeCartEmpty = new MYOJ;
    await makeCartEmpty.removeDesignInCart();
});


//Scenario - 1
When(/^I select Start with a Diamond under Rings menu$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectRingsSwad();
});


Then(/^I ensure the Make Your Diamond Engagement Ring page is displayed with the banner$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.ringStartWithDiamondBanner).toExist();
    await expect(startWithADiamond.subHeadingStartWithDiamond).toExist();
    const ringsStartWithADiamond = await browser.getUrl();
    await expect(ringsStartWithADiamond).toEqual(data.StartWithADiamondLinks.Rings);
});


//Scenario - 2
When(/^I select Start with a Diamond under Engagement menu$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectEngagementSwad();
});


Then(/^I ensure the Make Your Diamond Engagement Ring page is displayed with the engagement banner$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.engagementSWADBanner).toExist();
    await expect(startWithADiamond.engagementSWADsubHeading).toExist();
    const earringsStartWithADiamond = await browser.getUrl();
    await expect(earringsStartWithADiamond).toEqual(data.StartWithADiamondLinks.Engagement);
});


//Scenario - 3
When(/^I select Start with a Diamond under Earrings menu$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectEarringsSwad();
});


Then(/^I ensure the Make Your Diamond Earrings page is displayed with the banner$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.earringsSWADBanner).toExist();
    await expect(startWithADiamond.earringsSWADsubHeading).toExist();
    const earringsStartWithADiamond = await browser.getUrl();
    await expect(earringsStartWithADiamond).toEqual(data.StartWithADiamondLinks.Earrings);
});


//Scenario - 4
When(/^I select Start with a Lab Diamond under Necklaces menu$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectNecklacesSwald();
});


Then(/^I ensure the Make Your Lab Diamond Necklaces page is displayed with the banner$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.necklacesSWLDBanner).toExist();
    await expect(startWithALabDiamond.necklacesSWLDsubHeading).toExist();
    const necklacesStartWithALabDiamond = await browser.getUrl();
    await expect(necklacesStartWithALabDiamond).toEqual(data.StartWithALabDiamondLinks.Necklaces);
});


//Scenario - 5
When(/^I select Start with a Lab Diamond under Men's menu$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectMensSwald();
});


Then(/^I ensure the Make Your Lab Diamond Men's Rings page is displayed with the banner$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.mensSWLDBanner).toExist();
    await expect(startWithALabDiamond.mensSWLDsubHeading).toExist();
    const mensStartWithALabDiamond = await browser.getUrl();
    await expect(mensStartWithALabDiamond).toEqual(data.StartWithALabDiamondLinks.Mens);
});


//Scenario - 6
Given(/^I browse Start with a Diamond page of Rings menu$/, async() => {
    await browser.url(dmd.config.ringsSWADUrl);
    await BrowserUtil.wait(5)
});


Then(/^I verify the presence of breadcrumb for rings and the number of available diamonds$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.sctnBreadcrumb).toExist();
    await expect(startWithADiamond.lnkHomeBreadcrumb).toExist();
    await expect(startWithADiamond.lnkLooseDiamondsBreadcrumb).toExist();
    await expect(startWithADiamond.lnkMakeYourDiamondEngagementRingBreadcrumb).toExist();
    await expect(startWithADiamond.txtNoOfDesigns).toExist();
});


When(/^I click Home and Loose Diamonds links in breadcrumb$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectLinkHome();
    await startWithADiamond.selectLinkLooseDiamonds();
});


Then(/^I ensure the links redirects to respective Home and Loose Diamonds page$/, async() => {
	const looseDiamonds = await browser.getUrl();
    await expect(looseDiamonds).toEqual(data.LooseDiamondsLinks.LooseDiamonds);
});


When(/^I browse Start with a Diamond page of Earrings menu$/, async() => {
    await browser.url(dmd.config.earringsSWADUrl);
    await BrowserUtil.wait(5)
});


Then(/^I verify the presence of breadcrumb for earrings and the number of available diamonds$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.sctnBreadcrumb).toExist();
    await expect(startWithADiamond.lnkHomeBreadcrumb).toExist();
    await expect(startWithADiamond.lnkLooseDiamondsBreadcrumb).toExist();
    await expect(startWithADiamond.lnkMakeYourDiamondEarringBreadcrumb).toExist();
    await expect(startWithADiamond.txtNoOfDesigns).toExist();
});


When(/^I browse Start with a Diamond page of Necklaces menu$/, async() => {
    await browser.url(dmd.config.necklacesSWADUrl);
    await BrowserUtil.wait(5)
});


Then(/^I verify the presence of breadcrumb for necklaces and the number of available diamonds$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.sctnBreadcrumb).toExist();
    await expect(startWithADiamond.lnkHomeBreadcrumb).toExist();
    await expect(startWithADiamond.lnkLooseDiamondsBreadcrumb).toExist();
    await expect(startWithADiamond.lnkMakeYourDiamondNecklaceBreadcrumb).toExist();
    await expect(startWithADiamond.txtNoOfDesigns).toExist();
});


When(/^I browse Start with a Diamond page of Men's menu$/, async() => {
    await browser.url(dmd.config.mensSWADUrl);
    await BrowserUtil.wait(5)
});


Then(/^I verify the presence of breadcrumb for men's rings and the number of available diamonds$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.sctnBreadcrumb).toExist();
    await expect(startWithADiamond.lnkHomeBreadcrumb).toExist();
    await expect(startWithADiamond.lnkLooseDiamondsBreadcrumb).toExist();
    await expect(startWithADiamond.lnkMakeYourDiamondMensRingBreadcrumb).toExist();
    await expect(startWithADiamond.txtNoOfDesigns).toExist();
});


//Sceanrio - 7
Given(/^I browse Start with a Lab Diamond page of Rings menu$/, async() => {
	await browser.url(dmd.config.ringsSWALDUrl);
    await BrowserUtil.wait(5)
});


Then(/^I verify the presence of breadcrumb for rings and the number of available lab diamonds$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.sctnBreadcrumb).toExist();
    await expect(startWithALabDiamond.lnkHomeBreadcrumb).toExist();
    await expect(startWithALabDiamond.lnkLooseLabDiamondsBreadcrumb).toExist();
    await expect(startWithALabDiamond.lnkMakeYourLabDiamondEngagementRingBreadcrumb).toExist();
    await expect(startWithALabDiamond.txtNoOfDesigns).toExist();
});


When(/^I click Home and Loose Lab Diamonds links in breadcrumb$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectLinkHome();
    await startWithALabDiamond.selectLinkLooseLabDiamonds();
});


Then(/^I ensure the links redirects to respective Home and Loose Lab Diamonds page$/, async() => {
	const looseLabDiamonds = await browser.getUrl();
    await expect(looseLabDiamonds).toEqual(data.LooseDiamondsLinks.LooseLabDiamonds)
});


When(/^I browse Start with a Lab Diamond page of Earrings menu$/, async() => {
	await browser.url(dmd.config.earringsSWALDUrl);
    await BrowserUtil.wait(5)
});


Then(/^I verify the presence of breadcrumb for earrings and the number of available lab diamonds$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.sctnBreadcrumb).toExist();
    await expect(startWithALabDiamond.lnkHomeBreadcrumb).toExist();
    await expect(startWithALabDiamond.lnkLooseLabDiamondsBreadcrumb).toExist();
    await expect(startWithALabDiamond.lnkMakeYourLabDiamondEarringBreadcrumb).toExist();
    await expect(startWithALabDiamond.txtNoOfDesigns).toExist();
});


When(/^I browse Start with a Lab Diamond page of Necklaces menu$/, async() => {
	await browser.url(dmd.config.necklacesSWALDUrl);
    await BrowserUtil.wait(5)
});


Then(/^I verify the presence of breadcrumb for necklaces and the number of available lab diamonds$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.sctnBreadcrumb).toExist();
    await expect(startWithALabDiamond.lnkHomeBreadcrumb).toExist();
    await expect(startWithALabDiamond.lnkLooseLabDiamondsBreadcrumb).toExist();
    await expect(startWithALabDiamond.lnkMakeYourLabDiamondNecklaceBreadcrumb).toExist();
    await expect(startWithALabDiamond.txtNoOfDesigns).toExist();
});


When(/^I browse Start with a Lab Diamond page of Men's menu$/, async() => {
	await browser.url(dmd.config.mensSWALDUrl);
    await BrowserUtil.wait(5)
});


Then(/^I verify the presence of breadcrumb for men's rings and the number of available lab diamonds$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.sctnBreadcrumb).toExist();
    await expect(startWithALabDiamond.lnkHomeBreadcrumb).toExist();
    await expect(startWithALabDiamond.lnkLooseLabDiamondsBreadcrumb).toExist();
    await expect(startWithALabDiamond.lnkMakeYourLabDiamondMensRingBreadcrumb).toExist();
    await expect(startWithALabDiamond.txtNoOfDesigns).toExist();
});


//Scenario - 8
Then(/^I verify the Diamond and Settings tab with diamond and ring icons$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.sctnHeadingTab).toExist();
    await expect(startWithADiamond.tabDiamondActive).toExist();
    await expect(startWithADiamond.imgDiamondIcon).toExist();
    await expect(startWithADiamond.tabSettingsInactive).toExist();
    await expect(startWithADiamond.imgRingIcon).toExist();
});


Then(/^I verify the Diamond and Settings tab with diamond and earring icons$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.sctnHeadingTab).toExist();
    await expect(startWithADiamond.tabDiamondActive).toExist();
    await expect(startWithADiamond.imgDiamondIcon).toExist();
    await expect(startWithADiamond.tabSettingsInactive).toExist();
    await expect(startWithADiamond.imgEarringIcon).toExist();
});


Then(/^I verify the Diamond and Settings tab with diamond and necklace icons$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.sctnHeadingTab).toExist();
    await expect(startWithADiamond.tabDiamondActive).toExist();
    await expect(startWithADiamond.imgDiamondIcon).toExist();
    await expect(startWithADiamond.tabSettingsInactive).toExist();
    await expect(startWithADiamond.imgNecklaceIcon).toExist();
});


Then(/^I verify the Diamond and Settings tab with diamond and men's ring icons$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.sctnHeadingTab).toExist();
    await expect(startWithADiamond.tabDiamondActive).toExist();
    await expect(startWithADiamond.imgDiamondIcon).toExist();
    await expect(startWithADiamond.tabSettingsInactive).toExist();
    await expect(startWithADiamond.imgMensRingIcon).toExist();
});


//Scenario - 9
Then(/^I verify the Lab Diamond and Settings tab with diamond and ring icons$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.sctnHeadingTab).toExist();
    await expect(startWithALabDiamond.tabDiamondActive).toExist();
    await expect(startWithALabDiamond.imgDiamondIcon).toExist();
    await expect(startWithALabDiamond.tabSettingsInactive).toExist();
    await expect(startWithALabDiamond.imgRingIcon).toExist();
});


Then(/^I verify the Lab Diamond and Settings tab with diamond and earring icons$/, async() => {
    const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.sctnHeadingTab).toExist();
    await expect(startWithALabDiamond.tabDiamondActive).toExist();
    await expect(startWithALabDiamond.imgDiamondIcon).toExist();
    await expect(startWithALabDiamond.tabSettingsInactive).toExist();
    await expect(startWithALabDiamond.imgEarringIcon).toExist();
});


Then(/^I verify the Lab Diamond and Settings tab with diamond and necklace icons$/, async() => {
    const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.sctnHeadingTab).toExist();
    await expect(startWithALabDiamond.tabDiamondActive).toExist();
    await expect(startWithALabDiamond.imgDiamondIcon).toExist();
    await expect(startWithALabDiamond.tabSettingsInactive).toExist();
    await expect(startWithALabDiamond.imgNecklaceIcon).toExist();
});


Then(/^I verify the Lab Diamond and Settings tab with diamond and men's ring icons$/, async() => {
    const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.sctnHeadingTab).toExist();
    await expect(startWithALabDiamond.tabDiamondActive).toExist();
    await expect(startWithALabDiamond.imgDiamondIcon).toExist();
    await expect(startWithALabDiamond.tabSettingsInactive).toExist();
    await expect(startWithALabDiamond.imgMensRingIcon).toExist();
});


//Scenario - 10
Then(/^I verify the Ways to Save More section along with the dropdown options for rings$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.sctnWaysToSaveMoreRings).toExist();
    await expect(startWithADiamond.lnkWaysToSaveMore).toExist();
    await expect(startWithADiamond.drpDeliveryDefault).toExist();
    await expect(startWithADiamond.optnStandardDelivery).toExist();
    await expect(startWithADiamond.optnEasyDelivery).toExist();
    await expect(startWithADiamond.drpBandDefault).toExist();
    await expect(startWithADiamond.drpPaymentDefault).toExist();
    await expect(startWithADiamond.optnCardPayment).toExist();
    await expect(startWithADiamond.optnWirePayment).toExist();
});


Then(/^I verify the Ways to Save More section along with the dropdown options for men's rings$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.sctnWaysToSaveMore).toExist();
    await expect(startWithADiamond.lnkWaysToSaveMore).toExist();
    await expect(startWithADiamond.drpDeliveryDefault).toExist();
    await expect(startWithADiamond.optnStandardDelivery).toExist();
    await expect(startWithADiamond.optnEasyDelivery).toExist();
    await expect(startWithADiamond.drpBandDefault).toExist();
    await expect(startWithADiamond.drpPaymentDefault).toExist();
    await expect(startWithADiamond.optnCardPayment).toExist();
    await expect(startWithADiamond.optnWirePayment).toExist();
});


//Scenario - 11
Then(/^I verify the Ways to Save More section along with the dropdown options$/, async() => {
    const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.sctnWaysToSaveMore).toExist();
    await expect(startWithALabDiamond.lnkWaysToSaveMore).toExist();
    await expect(startWithALabDiamond.drpDeliveryDefault).toExist();
    await expect(startWithALabDiamond.optnStandardDelivery).toExist();
    await expect(startWithALabDiamond.optnEasyDelivery).toExist();
    await expect(startWithALabDiamond.drpPaymentDefault).toExist();
    await expect(startWithALabDiamond.optnCardPayment).toExist();
    await expect(startWithALabDiamond.optnWirePayment).toExist();
});


//Scenario - 12
When(/^I hover over Ways to Save More text$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.hoverWaysToSaveMore();
});


Then(/^I verify the popup with possible ways to save for rings are displayed$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.popupWaysToSaveMore).toExist();
    await expect(startWithADiamond.popupTxtEasyDelivery).toExist();
    await expect(startWithADiamond.popupTxtWirePayment).toExist();
    await expect(startWithADiamond.popupTxtMatchingBands).toExist();
    await expect(startWithADiamond.popupTxtRing).toExist();
});


//Scenario - 13
Then(/^I verify the popup with possible ways to save are displayed$/, async() => {
    const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.popupWaysToSaveMore).toExist();
    await expect(startWithALabDiamond.popupTxtEasyDelivery).toExist();
    await expect(startWithALabDiamond.popupTxtWirePayment).toExist();
    await expect(startWithALabDiamond.popupTxtMatchingBands).not.toExist();
    await expect(startWithALabDiamond.popupTxtRing).not.toExist();
    await expect(startWithALabDiamond.popupTxtWomensBands).not.toExist();
    await expect(startWithALabDiamond.popupTxtMensRing).not.toExist();
});

//Scenario - 14
Then(/^I verify the popup with possible ways to save for men's rings are displayed$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.popupWaysToSaveMore).toExist();
    await expect(startWithADiamond.popupTxtEasyDelivery).toExist();
    await expect(startWithADiamond.popupTxtWirePayment).toExist();
    await expect(startWithADiamond.popupTxtWomensBands).toExist();
    await expect(startWithADiamond.popupTxtMensRing).toExist();
});


//Scenario - 15
Then(/^I verify the Bands selection options are not displayed in the Ways to Save More section$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.drpBandDefault).not.toExist();
    await expect(startWithADiamond.optnNoBand).not.toExist();
    await expect(startWithADiamond.optnMensBand).not.toExist();
    await expect(startWithADiamond.optnWomensBand).not.toExist();
    await expect(startWithADiamond.optnBothBands).not.toExist();
    await expect(startWithADiamond.optnAdditionalMensRing).not.toExist();
});


//Scenario - 16
When(/^I hover over Bands selection dropdown$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.hoverBandsSelection();
});


Then(/^I ensure the options are displayed for custom rings$/, async() => {
    const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.optnNoBand).toExist();
    await expect(startWithALabDiamond.optnMensBand).toExist();
    await expect(startWithALabDiamond.optnWomensBand).toExist();
    await expect(startWithALabDiamond.optnBothBands).toExist();
});


Then(/^I ensure the options are displayed for custom men's rings$/, async() => {
    const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.optnNoBand).toExist();
    await expect(startWithALabDiamond.optnWomensBand).toExist();
    await expect(startWithALabDiamond.optnAdditionalMensRing).toExist();
});


//Scenario - 17
Then(/^I ensure the Ways to Save More dropdowns are pre-selected with No Saving options$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.drpDeliveryDefault).toExist();
    await expect(startWithADiamond.drpBandDefault).toExist();
    await expect(startWithADiamond.drpPaymentDefault).toExist();
});


Then(/^I ensure the two Ways to Save More dropdowns are pre-selected with No Saving options$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.drpDeliveryDefault).toExist();
    await expect(startWithADiamond.drpPaymentDefault).toExist();
});


//Scenario - 18
Then(/^I verify the Saving column is not displayed when Standard delivery option is selected$/, async() => {
    const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.drpDeliveryDefault).toExist();
    await expect(startWithALabDiamond.tablesavingcolumn).not.toExist();
});


When(/^I select Easy delivery option under Ways to Save More$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectEasyDelivery();
});


Then(/^I ensure the Saving column is displayed in the diamond listing$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.drpEasyDelivery).toExist();
    await expect(startWithALabDiamond.tablesavingcolumn).toExist();
});


//Scenario - 19
When(/^I select Both Bands option under Ways to Save More$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.hoverBandsSelection();
    await startWithADiamond.selectBothBands();
});


Then(/^I ensure the men's and women's band tabs along with the icons are displayed$/, async() => {
    const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.tabWomensBandInactive).toExist();
    await expect(startWithADiamond.imgWomensBandIcon).toExist();
    await expect(startWithADiamond.tabBothBandsMensBandInactive).toExist();
    await expect(startWithADiamond.imgMensBandIcon).toExist();
});


//Scenario - 20
When(/^I select Men's Band option under Ways to Save More$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.hoverBandsSelection();
    await startWithALabDiamond.selectMensBands();
});


Then(/^I ensure the men's band tab along with the icon is displayed$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.tabMensBandInactive).toExist();
    await expect(startWithALabDiamond.imgMensBandIcon).toExist();
});


When(/^I select Women's Band option under Ways to Save More of same page$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.hoverMensBandSelection();
    await startWithALabDiamond.selectWomensBands();
});


When(/^I select Women's Band option under Ways to Save More$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.hoverBandsSelection();
    await startWithALabDiamond.selectWomensBands();
});


Then(/^I ensure the women's band tab along with the icon is displayed$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.tabWomensBandInactive).toExist();
    await expect(startWithALabDiamond.imgWomensBandIcon).toExist();
});


//Scenario - 21
When(/^I select multiple savings option under Ways to Save More$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.hoverBandsSelection();
    await startWithADiamond.selectBothBands();
    await startWithADiamond.selectEasyDelivery();
});


Then(/^I ensure the overall saving percentage is displayed$/, async() => {
    const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.drpBothBands).toExist();
    await expect(startWithADiamond.drpEasyDelivery).toExist();
    await expect(startWithADiamond.txtCurrentlySavingPercentage).toExist();
});


//Scenario - 22
Then(/^I ensure the overall saving percentage is not displayed$/, async() => {
    const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.drpDeliveryDefault).toExist();
    await expect(startWithADiamond.drpBandDefault).toExist();
    await expect(startWithADiamond.drpPaymentDefault).toExist();
    await expect(startWithADiamond.txtCurrentlySavingPercentage).not.toExist();
});


//Scenario - 23
Then(/^I ensure the MYOJ page updates from Earrings to Necklaces$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.necklacesSWLDBanner).toExist();
    await expect(startWithALabDiamond.necklacesSWLDsubHeading).toExist();
    const necklacesStartWithALabDiamond = await browser.getUrl();
    await expect(necklacesStartWithALabDiamond).toEqual(data.StartWithALabDiamondLinks.Necklaces);
});


//Scenario - 24
When(/^I select Oval shape filter$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectOvalShape();
});


Then(/^I ensure the option chosen in the Ways to Save More section is not changed$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.drpBothBands).toExist();
});


//Scenario - 25
Then(/^I ensure the few filters are present in the page$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.sctnFilters).toExist();
    await expect(startWithADiamond.gemstext).toExist();
    await expect(startWithADiamond.shapestext).toExist();
    await expect(startWithADiamond.pricetext).toExist();
    await expect(startWithADiamond.carattext).toExist();
    await expect(startWithADiamond.claritytext).toExist();
    await expect(startWithADiamond.colortext).toExist();
});


//Scenario - 26
When(/^I select More Filters button$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectMoreFilters();
});

When(/^I hover over each filter name$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.hoveringFilters();
});


Then(/^I ensure the preview text description is displayed$/, async() => {
    const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.certificatepopup).toExist();
});


//Scenario - 27
When(/^I hover over Clarity filter$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.hoveringClarityFilter();
});


When(/^I click View Details link in the preview of Clarity filter$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.clickClarityPopup();
});


Then(/^I ensure the Clarity popup with detailed description is displayed$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.popupclarityViewDetailsDDP).toExist();
});


When(/^I click the X button in the filter description popup$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.clickXPopup();
});


Then(/^I ensure the filter description popup is closed$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.popupDiamondDetail).not.toExist();
});


//Scenario - 28
When(/^I hover over Color filter$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.hoveringColorFilter();
});


When(/^I click View Details link in the preview of Color filter$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.clickColorPopup();
});


Then(/^I ensure the Color popup with detailed description is displayed$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.txtPopupColorViewDetailsDDP).toExist();
});


//Scenario - 29
When(/^I hover over Symmetry filter$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.hoveringSymmetryFilter();
});


When(/^I click View Details link in the preview of Symmetry filter$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.clickSymmetryPopup();
});


Then(/^I ensure the Symmetry popup with detailed description is displayed$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.popupSymmetryViewDetailsDDP).toExist();
});


//Scenario - 30
When(/^I hover over Cut filter$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.hoveringCutFilter();
});


When(/^I click View Details link in the preview of Cut filter$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.clickCutPopup();
});


Then(/^I ensure the Cut popup with detailed description is displayed$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.txtPopupCutViewDetailsDDP).toExist();
});


//Scenario - 31
Then(/^I ensure the filters are present in the page$/, async() => {
    const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.sctnFilters).toExist();
    await expect(startWithADiamond.gemstext).toExist();
    await expect(startWithADiamond.shapestext).toExist();
    await expect(startWithADiamond.pricetext).toExist();
    await expect(startWithADiamond.carattext).toExist();
    await expect(startWithADiamond.claritytext).toExist();
    await expect(startWithADiamond.colortext).toExist();
    await expect(startWithADiamond.symmetrytext).toExist();
    await expect(startWithADiamond.fluorescencetext).toExist();
    await expect(startWithADiamond.lengthtext).toExist();
    await expect(startWithADiamond.breadthtext).toExist();
    await expect(startWithADiamond.tabletext).toExist();
    await expect(startWithADiamond.depthtext).toExist();
    await expect(startWithADiamond.cuttext).toExist();
    await expect(startWithADiamond.polishtext).toExist();
    await expect(startWithADiamond.certificatetext).toExist();
});


//Scenario - 32
When(/^I select G color filter$/, async() => {
    const startWithADiamond = new MYOJ;
    await startWithADiamond.selectGColor();
});


Then(/^I ensure the listing display only the Oval shaped G to M colored diamonds$/, async() => {
    const startWithADiamond = await browser.getUrl();
    await expect(startWithADiamond).toEqual(data.Filters.OvalAndGEarrings);
});


When(/^I select Reset Filters button$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectResetFilters();
});


Then(/^I ensure the diamond listing updates to the default$/, async () => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.shapesroundactive).toExist();
});


//Scenario - 33
When(/^I get the number of available diamonds$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.getNoOfDiamonds();
});


Then(/^I ensure the diamond list and the number of available diamonds gets updated$/, async() => {
    let defaultDiamondsCount = await context.getValue('DiamondsCount')
    const startWithADiamond = await $('//span[@class="is-word-break-all p-l-3 p-r-3"]');
    const filteredDiamondsCount = await startWithADiamond.getText();
    await expect(defaultDiamondsCount).not.toEqual(filteredDiamondsCount)
});


//Scenario - 34
Then(/^I validate the presence of Gems filter with the icons, options and pre-selected lab diamond option$/, async() => {
    const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.gemstext).toExist();
    await expect(startWithALabDiamond.naturaldiamondbutton).toExist();
    await expect(startWithALabDiamond.naturaldiamondtext).toExist();
    await expect(startWithALabDiamond.activelabdiamondbutton).toExist();
    await expect(startWithALabDiamond.labdiamondtext).toExist();
});


When(/^I select Diamond gems filter$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectNaturalDiamond();
});


Then(/^I validate the presence of Gems filter with the icons, options and pre-selected diamond option$/, async() => {
    const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.gemstext).toExist();
    await expect(startWithADiamond.activenaturaldiamondbutton).toExist();
    await expect(startWithADiamond.naturaldiamondtext).toExist();
    await expect(startWithADiamond.labdiamondbutton).toExist();
    await expect(startWithADiamond.labdiamondtext).toExist();
});


When(/^I select Lab Diamond gems filter$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectLabDiamond();
});


//Scenario - 35
Then(/^I validate the presence of Shapes filter with the pre-selected option$/, async() => {
    const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.shapestext).toExist();
    await expect(startWithADiamond.shapesroundactive).toExist();
});


Then(/^I ensure the listing display only the Oval shaped diamonds for rings$/, async() => {
	const ringsStartWithADiamond = await browser.getUrl();
    await expect(ringsStartWithADiamond).toEqual(data.Filters.OvalRingDiamonds);
});


Then(/^I ensure the listing display only the Oval shaped diamonds for men's rings$/, async() => {
	const mensringsStartWithALabDiamond = await browser.getUrl();
    await expect(mensringsStartWithALabDiamond).toEqual(data.Filters.OvalMensRingDiamonds);
});


//Scenario - 36
Then(/^I validate the Shapes filter with the options for Rings$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.imglnkround).toExist();
    await expect(startWithADiamond.imglnkOval).toExist();
    await expect(startWithADiamond.imglnkPrincess).toExist();
    await expect(startWithADiamond.imglnkEmerald).toExist();
    await expect(startWithADiamond.imglnkHeart).toExist();
    await expect(startWithADiamond.imglnkCushion).toExist();
    await expect(startWithADiamond.imglnkPear).toExist();
    await expect(startWithADiamond.imglnkMarquise).toExist();
});


Then(/^I validate the Shapes filter with the options for Earrings$/, async() => {
    const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.imglnkround).toExist();
    await expect(startWithALabDiamond.imglnkOval).toExist();
    await expect(startWithALabDiamond.imglnkPrincess).toExist();
    await expect(startWithALabDiamond.imglnkEmerald).toExist();
    await expect(startWithALabDiamond.imglnkHeart).toExist();
    await expect(startWithALabDiamond.imglnkCushion).toExist();
    await expect(startWithALabDiamond.imglnkPear).toExist();
    await expect(startWithALabDiamond.imglnkTriangle).toExist();
});


Then(/^I validate the Shapes filter with the options for Necklaces$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.imglnkround).toExist();
    await expect(startWithADiamond.imglnkOval).toExist();
    await expect(startWithADiamond.imglnkPrincess).toExist();
    await expect(startWithADiamond.imglnkEmerald).toExist();
    await expect(startWithADiamond.imglnkHeart).toExist();
    await expect(startWithADiamond.imglnkCushion).toExist();
    await expect(startWithADiamond.imglnkPear).toExist();
    await expect(startWithADiamond.imglnkTriangle).toExist();
});


Then(/^I validate the Shapes filter with the options for Men's rings$/, async() => {
    const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.imglnkround).toExist();
    await expect(startWithALabDiamond.imglnkOval).toExist();
    await expect(startWithALabDiamond.imglnkPrincess).toExist();
    await expect(startWithALabDiamond.imglnkEmerald).toExist();
    await expect(startWithALabDiamond.imglnkCushion).toExist();
});


//Scenario - 37
When(/^I select the shapes available for Rings$/, async() => {
    const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.ringsLengthAndBreadth();
});


Then(/^I ensure the Length and Breadth ranges displays the pre-fixed range according to the shape selected for ring$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.defRingsMarquiseLength).toExist();
    await expect(startWithALabDiamond.defRingsMarquiseBreadth).toExist();
});


//Scenario - 38
When(/^I select the shapes available for Earrings$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.earringsLengthAndBreadth();
});


Then(/^I ensure the Length and Breadth ranges displays the pre-fixed range according to the shape selected for earring$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.defEarringsTriangleLength).toExist();
    await expect(startWithADiamond.defEarringsTriangleBreadth).toExist();
});


//Scenario - 39
When(/^I select the shapes available for Necklaces$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.necklacesLengthAndBreadth();
});


Then(/^I ensure the Length and Breadth ranges displays the pre-fixed range according to the shape selected for necklace$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.defNecklacesTriangleLength).toExist();
    await expect(startWithALabDiamond.defNecklacesTriangleBreadth).toExist();
});


//Scenario - 40
When(/^I select the shapes available for Men's rings$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.mensRingsLengthAndBreadth();
});


Then(/^I ensure the Length and Breadth ranges displays the pre-fixed range according to the shape selected for men's ring$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.defMensRingsCushionLength).toExist();
    await expect(startWithADiamond.defMensRingsCushionBreadth).toExist();
});


//Scenario - 41
Then(/^I Validate the price range filter with slider, slider thumbs, textboxes along with dollar symbol$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.pricedragleftbutton).toExist();
    await expect(startWithADiamond.pricedragrightbutton).toExist();
    await expect(startWithADiamond.priceslidertrack).toExist();
    await expect(startWithADiamond.priceleftbox).toExist();
    await expect(startWithADiamond.pricerightbox).toExist();
    await expect(startWithADiamond.priceleftbox$Symbol).toExist();
    await expect(startWithADiamond.pricerighttbox$Symbol).toExist();
});


//Scenario - 42
When(/^I drag the min and max Price filter sliders$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.dragPriceSlider();
});


Then(/^I ensure the diamond listing updates according to the dragged price range$/, async() => {
	const startWithADiamond = await browser.getUrl();
    await expect(startWithADiamond).toEqual(data.Filters.DraggedPriceUrl);
});


//Scenario - 43
When(/^I enter the min and max price range$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.enterPriceRange();
});

Then(/^I ensure the slider thumbs automatically points to the entered price range in the textbox$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.dropPriceLeftButton).toExist();
    await expect(startWithALabDiamond.dropPriceRightButton).toExist();
});


//Scenario - 44
Then(/^I ensure the pointed price range is displayed in textboxes$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.txtEnteredMinPrice).toExist();
    await expect(startWithALabDiamond.txtEnteredMaxPrice).toExist();
});


//Scenario - 45
Given(/^I browse Loose Diamonds page$/, async() => {
	await browser.url(dmd.config.looseDiamondsUrl);
    await BrowserUtil.wait(5)
});


Then(/^I ensure the min and max price range filter displays the pre-fixed range$/, async() => {
	const looseDiamonds = new MYOJ;
    await expect(looseDiamonds.txtFixedMinPrice).toExist();
    await expect(looseDiamonds.txtFixedMaxPrice).toExist();
});


//Scenario - 46
Given(/^I browse Loose Lab Diamonds page$/, async() => {
	await browser.url(dmd.config.looseLabDiamondsUrl);
    await BrowserUtil.wait(5)
});


Then(/^I ensure the diamond listing updates according to the entered price range$/, async() => {
    await BrowserUtil.wait(5)
	const looseLabDiamonds = await browser.getUrl();
    await expect(looseLabDiamonds).toEqual(data.Filters.EnteredPriceUrl);
});


//Scenario - 47
When(/^I enter min price lesser than 50$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.enterInvalidMinPrice();
});


Then(/^I ensure the invalid min price message is displayed$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.msgInvalidMinPrice).toExist();
});


//Scenario - 48
When(/^I enter max price greater than 99999$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.enterInvalidMaxPrice();
});

Then(/^I ensure the invalid max price message is displayed$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.msgInvalidMaxPrice).toExist();
});


//Scenario - 49
When(/^I enter alphabets and special characters in the price range textboxes$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.enterInvalidCharPrice();
});


Then(/^I ensure the input validation is implemented for price range textboxes$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.txtInvalidChar).not.toExist();
    await expect(startWithALabDiamond.msgInvalidChar).toExist();
});


//Scenario - 50
When(/^I enter decimal values in min and max price range textboxes$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.enterDecimalPrice();
});


Then(/^I ensure the invalid decimal price message is displayed$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.msgInvalidMinDecimalPrice).toExist();
    await expect(startWithALabDiamond.msgInvalidMaxDecimalPrice).toExist();
});


//Scenario - 51
When(/^I enter invalid min and max price range$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.enterInvalidMinPrice();
    await startWithALabDiamond.enterInvalidMaxPrice();
    await ElementUtil.click(startWithALabDiamond.pricerightbox, "Clicking max price box")
});


Then(/^I ensure the invalid price range message is displayed$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.msgInvalidMinPrice).toExist();
    await expect(startWithALabDiamond.msgInvalidMaxPrice).toExist();
});


Then(/^I ensure the invalid price message is automatically disappeared$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.msgInvalidMinPrice).not.toExist();
    await expect(startWithALabDiamond.msgInvalidMaxPrice).not.toExist();
});


//Scenario - 52
When(/^I select the increment button in the min price textbox$/, async() => {
	const looseDiamonds = new MYOJ;
    await looseDiamonds.selectIncrementPrice();
});


When(/^I select the decrement button in the max price textbox$/, async() => {
	const looseDiamonds = new MYOJ;
    await looseDiamonds.selectDecrementPrice();
});


Then(/^I ensure the diamond listing updates to the entered min and max price value$/, async() => {
	const looseDiamonds = await browser.getUrl();
    await expect(looseDiamonds).toEqual(data.Filters.IncrementAndDecrementPrice);
});


//Scenario - 53
Then(/^I Validate the carat range filter with slider, slider thumbs and textboxes$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.caratdragleftbutton).toExist();
    await expect(startWithADiamond.caratdragrightbutton).toExist();
    await expect(startWithADiamond.caratslidertrack).toExist();
    await expect(startWithADiamond.caratleftbox).toExist();
    await expect(startWithADiamond.caratrightbox).toExist();
});


//Scenario - 54
When(/^I drag the min and max Carat filter sliders$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.dragCaratSlider();
});


Then(/^I ensure the diamond listing updates according to the dragged carat range$/, async() => {
    await BrowserUtil.wait(5)
	const startWithADiamond = await browser.getUrl();
    await expect(startWithADiamond).toEqual(data.Filters.DraggedCaratUrl);
});


//Scenario - 55
When(/^I enter the min and max carat range$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.enterCaratRange();
});


Then(/^I ensure the slider thumbs automatically points to the entered carat range in the textbox$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.dropCaratLeftButton).toExist();
    await expect(startWithALabDiamond.dropCaratRightButton).toExist();
});


//Scenario - 56
Then(/^I ensure the pointed carat range is displayed in textboxes$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.txtEnteredMinCarat).toExist();
    await expect(startWithALabDiamond.txtEnteredMaxCarat).toExist();
});


//Scenario - 57
Then(/^I ensure the min and max carat range filter displays the pre-fixed range$/, async() => {
	const looseDiamonds = new MYOJ;
    await expect(looseDiamonds.txtFixedMinCarat).toExist();
    await expect(looseDiamonds.txtFixedMaxCarat).toExist();
});


//Scenario - 58
Then(/^I ensure the diamond listing updates according to the entered carat range$/, async() => {
    await BrowserUtil.wait(5)
	const looseLabDiamonds = await browser.getUrl();
    await expect(looseLabDiamonds).toEqual(data.Filters.EnteredCaratUrl);
});


//Scenario - 59
When(/^I enter min carat lesser than 0.2$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.enterInvalidMinCarat();
});


Then(/^I ensure the invalid min carat message is displayed$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.msgInvalidMinCarat).toExist();
});


//Scenario - 60
When(/^I enter max carat greater than 30$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.enterInvalidMaxCarat();
});


Then(/^I ensure the invalid max carat message is displayed$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.msgInvalidMaxCarat).toExist();
});


//Scenario - 61
When(/^I enter alphabets and special characters in the carat range textboxes$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.enterInvalidCharCarat();
});


Then(/^I ensure the input validation is implemented for carat range textboxes$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.txtInvalidChar).not.toExist();
    await expect(startWithALabDiamond.msgInvalidChar).toExist();
});


//Scenario - 62
When(/^I enter decimal values with two decimal places in carat range textboxes$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.enterDecimalCarat();
});


Then(/^I ensure the diamond listing updates according to the entered decimal carat range$/, async() => {
    await BrowserUtil.wait(5)
	const startWithALabDiamond = await browser.getUrl();
    await expect(startWithALabDiamond).toEqual(data.Filters.DecimalCaratUrl);
});


//Scenario - 63
When(/^I enter decimal values with more than two decimal places in carat range textboxes$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.enterInvalidDecimalCarat();
});


Then(/^I ensure the invalid decimal carat message is displayed$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.msgInvalidMinDecimalCarat).toExist();
    await expect(startWithALabDiamond.msgInvalidMaxDecimalCarat).toExist();
});


//Scenario - 64
When(/^I enter invalid min and max carat range$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.enterInvalidMinCarat();
    await startWithALabDiamond.enterInvalidMaxCarat();
    await ElementUtil.click(startWithALabDiamond.caratrightbox, "Clicking max carat box")
});


Then(/^I ensure the invalid carat range message is displayed$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.msgInvalidMinCarat).toExist();
    await expect(startWithALabDiamond.msgInvalidMaxCarat).toExist();
});


Then(/^I ensure the invalid carat message is automatically disappeared$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.msgInvalidMinCarat).not.toExist();
    await expect(startWithALabDiamond.msgInvalidMaxCarat).not.toExist();
});


//Scenario - 65
When(/^I select the increment button in the min carat textbox$/, async() => {
	const looseDiamonds = new MYOJ;
    await looseDiamonds.selectIncrementCarat();
});


When(/^I select the decrement button in the max carat textbox$/, async() => {
	const looseDiamonds = new MYOJ;
    await looseDiamonds.selectDecrementCarat();
});


Then(/^I ensure the diamond listing updates to the entered min and max carat value$/, async() => {
	const looseDiamonds = await browser.getUrl();
    await expect(looseDiamonds).toEqual(data.Filters.IncrementAndDecrementCarat);
});


//Scenario - 66
When(/^I drag the sliders to the left end$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectMoreFilters();
    await startWithADiamond.dragToLeftEnd();
});


Then(/^I ensure the specific option at the left end of the slider is selected and display results accordingly$/, async() => {
    await BrowserUtil.wait(5)
	const startWithADiamond = await browser.getUrl();
    await expect(startWithADiamond).toEqual(data.Filters.DragToLeftUrl);
});


//Scenario - 67
When(/^I drag the sliders to the right end$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectMoreFilters();
    await startWithADiamond.dragToRightEnd();
});

Then(/^I ensure the specific option at the right end of the slider is selected and display results accordingly$/, async() => {
    await BrowserUtil.wait(5)
	const startWithADiamond = await browser.getUrl();
    await expect(startWithADiamond).toEqual(data.Filters.DragToRightUrl);
});


//Scenario - 68
When(/^I scroll to clarity and color filter$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.scrollToClarityFilter();
});


Then(/^I ensure the clarity filter is displayed with slider, slider thumbs and scale markings$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.claritydragleftbutton).toExist();
    await expect(startWithADiamond.claritydragrightbutton).toExist();
    await expect(startWithADiamond.clarityslidertrack).toExist();
    await expect(startWithADiamond.clarityFLtext).toExist();
    await expect(startWithADiamond.clarityIFtext).toExist();
    await expect(startWithADiamond.clarityVVS1text).toExist();
    await expect(startWithADiamond.clarityVVS2text).toExist();
    await expect(startWithADiamond.clarityVS1text).toExist();
    await expect(startWithADiamond.clarityVS2text).toExist();
    await expect(startWithADiamond.claritySI1text).toExist();
    await expect(startWithADiamond.claritySI2text).toExist();
    await expect(startWithADiamond.claritySI3text).toExist();
    await expect(startWithADiamond.clarityI1text).toExist();
    await expect(startWithADiamond.clarityI2text).toExist();
    await expect(startWithADiamond.clarityI3text).toExist();
});


//Scenario - 69
When(/^I drag the min and max Clarity filter sliders$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.scrollToClarityFilter();
    await startWithALabDiamond.dragClaritySlider();
});


Then(/^I ensure the diamond listing updates according to the dragged clarity range$/, async() => {
    await BrowserUtil.wait(5)
	const startWithALabDiamond = await browser.getUrl();
    await expect(startWithALabDiamond).toEqual(data.Filters.DraggedClarityUrl);
});


//Scenario - 70
Then(/^I ensure the color filter is displayed with slider, slider thumbs and scale markings$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.colordragleftbutton).toExist();
    await expect(startWithADiamond.colordragrightbutton).toExist();
    await expect(startWithADiamond.colorslidertrack).toExist();
    await expect(startWithADiamond.colorDtext).toExist();
    await expect(startWithADiamond.colorEtext).toExist();
    await expect(startWithADiamond.colorFtext).toExist();
    await expect(startWithADiamond.colorGtext).toExist();
    await expect(startWithADiamond.colorHtext).toExist();
    await expect(startWithADiamond.colorItext).toExist();
    await expect(startWithADiamond.colorJtext).toExist();
    await expect(startWithADiamond.colorKtext).toExist();
    await expect(startWithADiamond.colorLtext).toExist();
    await expect(startWithADiamond.colorMtext).toExist();
});


//Scenario - 71
When(/^I drag the min and max Color filter sliders$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.scrollToClarityFilter();
    await startWithALabDiamond.dragColorSlider();
});


Then(/^I ensure the diamond listing updates according to the dragged color range$/, async() => {
    await BrowserUtil.wait(5)
	const startWithALabDiamond = await browser.getUrl();
    await expect(startWithALabDiamond).toEqual(data.Filters.DraggedColorUrl);
});


//Scenario - 72
Then(/^I ensure the symmetry filter is displayed with slider, slider thumbs and scale markings$/, async() => {
	const looseDiamonds = new MYOJ;
    await expect(looseDiamonds.symmetrydragleftbutton).toExist();
    await expect(looseDiamonds.symmetrydragrightbutton).toExist();
    await expect(looseDiamonds.symmetryslidertrack).toExist();
    await expect(looseDiamonds.symmetrygoodtext).toExist();
    await expect(looseDiamonds.symmetryverygoodtext).toExist();
    await expect(looseDiamonds.symmetryexcellenttext).toExist();
    await expect(looseDiamonds.symmetryidealtext).toExist();
});


//Scenario - 73
When(/^I drag the min and max Symmetry filter sliders$/, async() => {
	const looseLabDiamonds = new MYOJ;
    await looseLabDiamonds.selectMoreFilters();
    await looseLabDiamonds.scrollToSymmetryFilter();
    await looseLabDiamonds.dragSymmetrySlider();
});


Then(/^I ensure the diamond listing updates according to the dragged symmetry range$/, async() => {
	const looseLabDiamonds = await browser.getUrl();
    await expect(looseLabDiamonds).toEqual(data.Filters.DraggedSymmetryUrl);
});


//Scenario - 74
Then(/^I ensure the fluorescence filter is displayed with slider, slider thumbs and scale markings$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.fluorescencedragleftbutton).toExist();
    await expect(startWithALabDiamond.fluorescencedragrightbutton).toExist();
    await expect(startWithALabDiamond.fluorescenceslidertrack).toExist();
    await expect(startWithALabDiamond.fluorescencenonetext).toExist();
    await expect(startWithALabDiamond.fluorescencefainttext).toExist();
    await expect(startWithALabDiamond.fluorescencemediumtext).toExist();
    await expect(startWithALabDiamond.fluorescencestrongtext).toExist();
    await expect(startWithALabDiamond.fluorescenceverystrongtext).toExist();
});


//Scenario - 75
When(/^I drag the min and max Fluorescence filter sliders$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectMoreFilters();
    await startWithADiamond.scrollToSymmetryFilter();
    await startWithADiamond.dragFluorescenceSlider();
});


Then(/^I ensure the diamond listing updates according to the dragged fluorescence range$/, async() => {
    const startWithADiamond = await browser.getUrl();
    await expect(startWithADiamond).toEqual(data.Filters.DraggedFluorescenceUrl);
});


//Scenario - 76
Then(/^I Validate the length range filter with slider, slider thumbs and textboxes$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.lengthdragleftbutton).toExist();
    await expect(startWithADiamond.lengthdragrightbutton).toExist();
    await expect(startWithADiamond.lengthslidertrack).toExist();
    await expect(startWithADiamond.lengthleftbox).toExist();
    await expect(startWithADiamond.lengthrightbox).toExist();
});


//Scenario - 77
When(/^I drag the min and max Length filter sliders$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectMoreFilters();
    await startWithADiamond.dragLengthSlider();
});


Then(/^I ensure the diamond listing updates according to the dragged length range$/, async() => {
    await BrowserUtil.wait(5)
	const startWithADiamond = await browser.getUrl();
    await expect(startWithADiamond).toEqual(data.Filters.DraggedLengthUrl);
});


//Scenario - 78
When(/^I enter the min and max length range$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectMoreFilters();
    await startWithALabDiamond.scrollToLengthFilter();
    await startWithALabDiamond.enterLengthRange();
});


Then(/^I ensure the slider thumbs automatically points to the entered length range in the textbox$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.dropLengthLeftButton).toExist();
    await expect(startWithALabDiamond.dropLengthRightButton).toExist();
});


//Scenario - 79
Then(/^I ensure the pointed length range is displayed in textboxes$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.txtEnteredMinLength).toExist();
    await expect(startWithADiamond.txtEnteredMaxLength).toExist();
});


//Scenario - 80
Then(/^I ensure the diamond listing updates according to the entered length range$/, async() => {
	const startWithALabDiamond = await browser.getUrl();
    await expect(startWithALabDiamond).toEqual(data.Filters.EnteredLengthUrl);
});


//Scenario - 81
When(/^I enter min length lesser than 3$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectMoreFilters();
    await startWithADiamond.scrollToLengthFilter();
    await startWithADiamond.enterInvalidMinLength();
});


Then(/^I ensure the invalid min length message is displayed$/, async() => {
    await BrowserUtil.wait(5)
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.msgInvalidMinLength).toExist();
});


//Scenario - 82
When(/^I enter max length greater than 12$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectMoreFilters();
    await startWithALabDiamond.scrollToLengthFilter();
    await startWithALabDiamond.enterInvalidMaxLength();
});


Then(/^I ensure the invalid max length message is displayed$/, async() => {
    await BrowserUtil.wait(5)
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.msgInvalidMaxLength).toExist();
});


//Scenario - 83
When(/^I enter alphabets and special characters in the length range textboxes$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectMoreFilters();
    await startWithADiamond.scrollToLengthFilter();
    await startWithADiamond.enterInvalidCharLength();
});

Then(/^I ensure the input validation is implemented for length range textboxes$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.txtInvalidChar).not.toExist();
    await expect(startWithADiamond.msgInvalidChar).toExist();
});


//Scenario - 84
When(/^I enter decimal values with two decimal places in length range textboxes$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectMoreFilters();
    await startWithALabDiamond.scrollToLengthFilter();
    await startWithALabDiamond.enterDecimalLength();
});


Then(/^I ensure the diamond listing updates according to the entered decimal length range$/, async() => {
    await BrowserUtil.wait(5)
	const startWithALabDiamond = await browser.getUrl();
    await expect(startWithALabDiamond).toEqual(data.Filters.DecimalLengthUrl);
});


//Scenario - 85
When(/^I enter decimal values with more than two decimal places in length range textboxes$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectMoreFilters();
    await startWithADiamond.scrollToLengthFilter();
    await startWithADiamond.enterInvalidDecimalLength();
});


Then(/^I ensure the invalid decimal length message is displayed$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.msgInvalidMinDecimalLength).toExist();
    await expect(startWithADiamond.msgInvalidMaxDecimalLength).toExist();
});


//Scenario - 86
When(/^I enter invalid min and max length range$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectMoreFilters();
    await startWithALabDiamond.scrollToLengthFilter();
    await startWithALabDiamond.enterInvalidMinLength();
    await startWithALabDiamond.enterInvalidMaxLength();
    await ElementUtil.click(startWithALabDiamond.lengthrightbox, "Clicking max length box")
});


Then(/^I ensure the invalid length range message is displayed$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.msgInvalidMinLength).toExist();
    await expect(startWithALabDiamond.msgInvalidMaxLength).toExist();
});


When(/^I re-enter the min and max length range$/, async() => {
    const startWithALabDiamond = new MYOJ;
	await startWithALabDiamond.reEnterLengthRange();
});


Then(/^I ensure the invalid length message is automatically disappeared$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.msgInvalidMinLength).not.toExist();
    await expect(startWithALabDiamond.msgInvalidMaxLength).not.toExist();
});


//Scenario - 87
When(/^I select the increment button in the min length textbox$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectMoreFilters();
    await startWithADiamond.scrollToLengthFilter();
    await startWithADiamond.selectIncrementLength();
});


When(/^I select the decrement button in the max length textbox$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectDecrementLength();
});


Then(/^I ensure the diamond listing updates to the entered min and max length value$/, async() => {
    await BrowserUtil.wait(5)
    const startWithADiamond = await browser.getUrl();
    await expect(startWithADiamond).toEqual(data.Filters.IncrementAndDecrementLength);
});


//Scenario - 88
Then(/^I Validate the breadth range filter with slider, slider thumbs and textboxes$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.breadthdragleftbutton).toExist();
    await expect(startWithADiamond.breadthdragrightbutton).toExist();
    await expect(startWithADiamond.breadthslidertrack).toExist();
    await expect(startWithADiamond.breadthleftbox).toExist();
    await expect(startWithADiamond.breadthrightbox).toExist();
});


//Scenario - 89
When(/^I drag the min and max Breadth filter sliders$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectMoreFilters();
    await startWithADiamond.scrollToLengthFilter();
    await startWithADiamond.dragBreadthSlider();
});


Then(/^I ensure the diamond listing updates according to the dragged breadth range$/, async() => {
    await BrowserUtil.wait(5)
	const startWithADiamond = await browser.getUrl();
    await expect(startWithADiamond).toEqual(data.Filters.DraggedBreadthUrl);
});


//Scenario - 90
When(/^I enter the min and max breadth range$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectMoreFilters();
    await startWithALabDiamond.scrollToLengthFilter();
    await startWithALabDiamond.enterBreadthRange();
});


Then(/^I ensure the slider thumbs automatically points to the entered breadth range in the textbox$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.dropBreadthLeftButton).toExist();
    await expect(startWithALabDiamond.dropBreadthRightButton).toExist();
});


//Scenario - 91
Then(/^I ensure the pointed breadth range is displayed in textboxes$/, async() => {
    const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.txtEnteredMinBreadth).toExist();
    await expect(startWithALabDiamond.txtEnteredMaxBreadth).toExist();
});


//Scenario - 92
Then(/^I ensure the diamond listing updates according to the entered breadth range$/, async() => {
    await BrowserUtil.wait(5)
	const startWithADiamond = await browser.getUrl();
    await expect(startWithADiamond).toEqual(data.Filters.EnteredBreadthUrl);
});


//Scenario - 93
When(/^I enter min breadth lesser than 5$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectMoreFilters();
    await startWithADiamond.scrollToLengthFilter();
    await startWithADiamond.enterInvalidMinBreadth();
});


Then(/^I ensure the invalid min breadth message is displayed$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.msgInvalidMinBreadth).toExist();
});


//Scenario - 94
When(/^I enter max breadth greater than 8$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectMoreFilters();
    await startWithALabDiamond.scrollToLengthFilter();
    await startWithALabDiamond.enterInvalidMaxBreadth();
});


Then(/^I ensure the invalid max breadth message is displayed$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.msgInvalidMaxBreadth).toExist();
});


//Scenario - 95
When(/^I enter alphabets and special characters in the breadth range textboxes$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectMoreFilters();
    await startWithALabDiamond.scrollToLengthFilter();
    await startWithALabDiamond.enterInvalidCharBreadth();
});


Then(/^I ensure the input validation is implemented for breadth range textboxes$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.txtInvalidChar).not.toExist();
    await expect(startWithALabDiamond.msgInvalidChar).toExist();
});


//Scenario - 96
When(/^I enter decimal values with two decimal places in breadth range textboxes$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectMoreFilters();
    await startWithADiamond.scrollToLengthFilter();
    await startWithADiamond.enterDecimalBreadth();
});


Then(/^I ensure the diamond listing updates according to the entered decimal breadth range$/, async() => {
    await BrowserUtil.wait(5)
	const startWithADiamond = await browser.getUrl();
    await expect(startWithADiamond).toEqual(data.Filters.DecimalBreadthUrl);
});


//Scenario - 97
When(/^I enter decimal values with more than two decimal places in breadth range textboxes$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectMoreFilters();
    await startWithALabDiamond.scrollToLengthFilter();
    await startWithALabDiamond.enterInvalidDecimalBreadth();
});


Then(/^I ensure the invalid decimal breadth message is displayed$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.msgInvalidMinDecimalBreadth).toExist();
    await expect(startWithALabDiamond.msgInvalidMaxDecimalBreadth).toExist();
});


//Scenario - 98
When(/^I enter invalid min and max breadth range$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectMoreFilters();
    await startWithADiamond.scrollToLengthFilter();
    await startWithADiamond.enterInvalidMinBreadth();
    await startWithADiamond.enterInvalidMaxBreadth();
    await ElementUtil.click(startWithADiamond.breadthrightbox, "Clicking max breadth box")
});


When(/^I re-enter the min and max breadth range$/, async() => {
	const startWithADiamond = new MYOJ;
	await startWithADiamond.reEnterBreadthRange();
});


Then(/^I ensure the invalid breadth range message is displayed$/, async() => {
    const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.msgInvalidMinBreadth).toExist();
    await expect(startWithADiamond.msgInvalidMaxBreadth).toExist();
});


Then(/^I ensure the invalid breadth message is automatically disappeared$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.msgInvalidMinBreadth).not.toExist();
    await expect(startWithADiamond.msgInvalidMaxBreadth).not.toExist();
});


//Scenario - 99
When(/^I select the increment button in the min breadth textbox$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectMoreFilters();
    await startWithALabDiamond.scrollToLengthFilter();
    await startWithALabDiamond.selectIncrementBreadth();
});


When(/^I select the decrement button in the max breadth textbox$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectDecrementBreadth();
});


Then(/^I ensure the diamond listing updates to the entered min and max breadth value$/, async() => {
    await BrowserUtil.wait(5)
	const startWithALabDiamond = await browser.getUrl();
    await expect(startWithALabDiamond).toEqual(data.Filters.IncrementAndDecrementBreadth);
});


//Scenario - 100
Then(/^I Validate the table% range filter with slider, slider thumbs and textboxes$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.tabledragleftbutton).toExist();
    await expect(startWithADiamond.tabledragrightbutton).toExist();
    await expect(startWithADiamond.tableslidertrack).toExist();
    await expect(startWithADiamond.tableleftbox).toExist();
    await expect(startWithADiamond.tablerightbox).toExist();
});


//Scenario - 101
When(/^I drag the min and max Table% filter sliders$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectMoreFilters();
    await startWithADiamond.dragTableSlider();
});


Then(/^I ensure the diamond listing updates according to the dragged table% range$/, async() => {
    await BrowserUtil.wait(5)
	const startWithADiamond = await browser.getUrl();
    await expect(startWithADiamond).toEqual(data.Filters.DraggedTableUrl);
});


//Scenario - 102
When(/^I enter the min and max table% range$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectMoreFilters();
    await startWithALabDiamond.scrollToLengthFilter();
    await startWithALabDiamond.enterTableRange();
});


Then(/^I ensure the slider thumbs automatically points to the entered table% range in the textbox$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.dropTableLeftButton).toExist();
    await expect(startWithALabDiamond.dropTableRightButton).toExist();
});


//Scenario - 103
Then(/^I ensure the pointed table% range is displayed in textboxes$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.txtEnteredMinTable).toExist();
    await expect(startWithALabDiamond.txtEnteredMaxTable).toExist();
});


//Scenario - 104
Then(/^I ensure the min and max table% range filter displays the pre-fixed range$/, async() => {
    const looseDiamonds = new MYOJ;
    await expect(looseDiamonds.txtFixedMinTable).toExist();
    await expect(looseDiamonds.txtFixedMaxTable).toExist();
});


//Scenario - 105
Then(/^I ensure the diamond listing updates according to the entered table% range$/, async() => {
    await BrowserUtil.wait(5)
	const looseLabDiamonds = await browser.getUrl();
    await expect(looseLabDiamonds).toEqual(data.Filters.EnteredTableUrl);
});


//Scenario - 106
When(/^I enter min table% lesser than 1$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectMoreFilters();
    await startWithADiamond.scrollToLengthFilter();
    await startWithADiamond.enterInvalidMinTable();
});


Then(/^I ensure the invalid min table% message is displayed$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.msgInvalidMintablepercent).toExist();
});


//Scenario - 107
When(/^I enter max table% greater than 100$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectMoreFilters();
    await startWithADiamond.scrollToLengthFilter();
    await startWithADiamond.enterInvalidMaxTable();
});


Then(/^I ensure the invalid max table% message is displayed$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.msgInvalidMaxtablepercent).toExist();
});


//Scenario - 108
When(/^I enter alphabets and special characters in the table% range textboxes$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectMoreFilters();
    await startWithALabDiamond.scrollToLengthFilter();
    await startWithALabDiamond.enterInvalidCharTable();
});


Then(/^I ensure the input validation is implemented for table% range textboxes$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.txtInvalidChar).not.toExist();
    await expect(startWithALabDiamond.msgInvalidChar).toExist();
});


//Scenario - 109
When(/^I enter decimal values in min and max table% range textboxes$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectMoreFilters();
    await startWithALabDiamond.scrollToLengthFilter();
    await startWithALabDiamond.enterDecimalTable();
});


Then(/^I ensure the invalid table% decimal message is displayed$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.msgInvalidMinDecimalTable).toExist();
    await expect(startWithALabDiamond.msgInvalidMaxDecimalTable).toExist();
});


//Scenario - 110
When(/^I enter invalid min and max table% range$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectMoreFilters();
    await startWithADiamond.scrollToLengthFilter();
    await startWithADiamond.enterInvalidMinTable();
    await startWithADiamond.enterInvalidMaxTable();
    await ElementUtil.click(startWithADiamond.tablerightbox, "Clicking max table box")
});


When(/^I re-enter the min and max table% range$/, async() => {
	const startWithADiamond = new MYOJ;
	await startWithADiamond.reEnterTableRange();
});


Then(/^I ensure the invalid table% range message is displayed$/, async() => {
    const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.msgInvalidMintablepercent).toExist();
    await expect(startWithADiamond.msgInvalidMaxtablepercent).toExist();
});


Then(/^I ensure the invalid table% message is automatically disappeared$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.msgInvalidMintablepercent).not.toExist();
    await expect(startWithADiamond.msgInvalidMaxtablepercent).not.toExist();
});


//Scenario - 111
When(/^I select the increment button in the min table% textbox$/, async() => {
	const looseDiamonds = new MYOJ;
    await looseDiamonds.selectMoreFilters();
    await looseDiamonds.scrollToLengthFilter();
    await looseDiamonds.selectIncrementTable();
});


When(/^I select the decrement button in the max table% textbox$/, async() => {
	const looseDiamonds = new MYOJ;
    await looseDiamonds.selectDecrementTable();
});


Then(/^I ensure the diamond listing updates to the entered min and max table% value$/, async() => {
    await BrowserUtil.wait(5)
	const looseDiamonds = await browser.getUrl();
    await expect(looseDiamonds).toEqual(data.Filters.IncrementAndDecrementTable);
});


//Scenario - 112
Then(/^I Validate the depth% range filter with slider, slider thumbs and textboxes$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.depthdragleftbutton).toExist();
    await expect(startWithADiamond.depthdragrightbutton).toExist();
    await expect(startWithADiamond.depthslidertrack).toExist();
    await expect(startWithADiamond.depthleftbox).toExist();
    await expect(startWithADiamond.depthrightbox).toExist();
});


//Scenario - 113
When(/^I drag the min and max Depth% filter sliders$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectMoreFilters();
    await startWithADiamond.dragDepthSlider();
});


Then(/^I ensure the diamond listing updates according to the dragged depth% range$/, async() => {
    await BrowserUtil.wait(5)
	const startWithADiamond = await browser.getUrl();
    await expect(startWithADiamond).toEqual(data.Filters.DraggedDepthUrl);
});


//Scenario - 114
When(/^I enter the min and max depth% range$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectMoreFilters();
    await startWithALabDiamond.scrollToLengthFilter();
    await startWithALabDiamond.enterDepthRange();
});


Then(/^I ensure the slider thumbs automatically points to the entered depth% range in the textbox$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.dropDepthLeftButton).toExist();
    await expect(startWithALabDiamond.dropDepthRightButton).toExist();
});


//Scenario - 115
Then(/^I ensure the pointed depth% range is displayed in textboxes$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.txtEnteredMinDepth).toExist();
    await expect(startWithALabDiamond.txtEnteredMaxDepth).toExist();
});


//Scenario - 116
Then(/^I ensure the min and max depth% range filter displays the pre-fixed range$/, async() => {
	const looseDiamonds = new MYOJ;
    await expect(looseDiamonds.txtFixedMinDepth).toExist();
    await expect(looseDiamonds.txtFixedMaxDepth).toExist();
});


//Scenario - 117
Then(/^I ensure the diamond listing updates according to the entered depth% range$/, async() => {
    await BrowserUtil.wait(5)
	const looseLabDiamonds = await browser.getUrl();
    await expect(looseLabDiamonds).toEqual(data.Filters.EnteredDepthUrl);
});


//Scenario - 118
When(/^I enter min depth% lesser than 1$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectMoreFilters();
    await startWithADiamond.scrollToLengthFilter();
    await startWithADiamond.enterInvalidMinDepth();
});


Then(/^I ensure the invalid min depth% message is displayed$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.msgInvalidMindepthpercent).toExist();
});


//Scenario - 119
When(/^I enter max depth% greater than 100$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectMoreFilters();
    await startWithADiamond.scrollToLengthFilter();
    await startWithADiamond.enterInvalidMaxDepth();
});


Then(/^I ensure the invalid max depth% message is displayed$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.msgInvalidMaxdepthpercent).toExist();
});


//Scenario - 120
When(/^I enter alphabets and special characters in the depth% range textboxes$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectMoreFilters();
    await startWithALabDiamond.scrollToLengthFilter();
    await startWithALabDiamond.enterInvalidCharDepth();
});


Then(/^I ensure the input validation is implemented for depth% range textboxes$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.txtInvalidChar).not.toExist();
    await expect(startWithALabDiamond.msgInvalidChar).toExist();
});


//Scenario - 121
When(/^I enter decimal values in min and max depth% range textboxes$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectMoreFilters();
    await startWithALabDiamond.scrollToLengthFilter();
    await startWithALabDiamond.enterDecimalDepth();
});


Then(/^I ensure the invalid decimal depth% message is displayed$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.msgInvalidMinDecimalDepth).toExist();
    await expect(startWithALabDiamond.msgInvalidMaxDecimalDepth).toExist();
});


//Scenario - 122
When(/^I enter invalid min and max depth% range$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectMoreFilters();
    await startWithADiamond.scrollToLengthFilter();
    await startWithADiamond.enterInvalidMinDepth();
    await startWithADiamond.enterInvalidMaxDepth();
    await ElementUtil.click(startWithADiamond.depthrightbox, "Clicking max depth box")
});


When(/^I re-enter the min and max depth% range$/, async() => {
	const startWithADiamond = new MYOJ;
	await startWithADiamond.reEnterDepthRange();
});


Then(/^I ensure the invalid depth% range message is displayed$/, async() => {
    const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.msgInvalidMindepthpercent).toExist();
    await expect(startWithADiamond.msgInvalidMaxdepthpercent).toExist();
});


Then(/^I ensure the invalid depth% message is automatically disappeared$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.msgInvalidMindepthpercent).not.toExist();
    await expect(startWithADiamond.msgInvalidMaxdepthpercent).not.toExist();
});


//Scenario - 123
When(/^I select the increment button in the min depth% textbox$/, async() => {
	const looseDiamonds = new MYOJ;
    await looseDiamonds.selectMoreFilters();
    await looseDiamonds.scrollToLengthFilter();
    await looseDiamonds.selectIncrementDepth();
});


When(/^I select the decrement button in the max depth% textbox$/, async() => {
	const looseDiamonds = new MYOJ;
    await looseDiamonds.selectDecrementDepth();
});


Then(/^I ensure the diamond listing updates to the entered min and max depth% value$/, async() => {
    await BrowserUtil.wait(5)
    const looseDiamonds = await browser.getUrl();
    await expect(looseDiamonds).toEqual(data.Filters.IncrementAndDecrementDepth);
});


//Scenario - 124
Then(/^I ensure the cut filter is displayed with slider, slider thumbs and scale markings$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.cutdragleftbutton).toExist();
    await expect(startWithADiamond.cutdragrightbutton).toExist();
    await expect(startWithADiamond.cutslidertrack).toExist();
    await expect(startWithADiamond.cutgoodtext).toExist();
    await expect(startWithADiamond.cutverygoodtext).toExist();
    await expect(startWithADiamond.cutexcellenttext).toExist();
    await expect(startWithADiamond.cutidealtext).toExist();
});


//Scenario - 125
When(/^I drag the min and max Cut filter sliders$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectMoreFilters();
    await startWithALabDiamond.scrollToLengthFilter();
    await startWithALabDiamond.dragCutSlider();
});


Then(/^I ensure the diamond listing updates according to the dragged cut range$/, async() => {
    await BrowserUtil.wait(5)
	const startWithALabDiamond = await browser.getUrl();
    await expect(startWithALabDiamond).toEqual(data.Filters.DraggedCutUrl);
});


//Scenario - 126
When(/^I choose the list of shape filters$/, async() => {
	const looseDiamonds = new MYOJ;
    await looseDiamonds.selectMoreFilters();
    await looseDiamonds.scrollToBanner();
    await looseDiamonds.disabledCutFilter();
});


Then(/^I ensure the cut filter is disabled and cut column is not displayed in diamond listing table$/, async() => {
	const looseDiamonds = new MYOJ;
    await expect(looseDiamonds.cutdisabledslider).toExist();
    await expect(looseDiamonds.tablecutcolumn).not.toExist();
});


//Scenario - 127
Then(/^I ensure the polish filter is displayed with slider, slider thumbs and scale markings$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.polishdragleftbutton).toExist();
    await expect(startWithADiamond.polishdragrightbutton).toExist();
    await expect(startWithADiamond.polishslidertrack).toExist();
    await expect(startWithADiamond.polishgoodtext).toExist();
    await expect(startWithADiamond.polishverygoodtext).toExist();
    await expect(startWithADiamond.polishexcellenttext).toExist();
    await expect(startWithADiamond.polishidealtext).toExist();
});


//Scenario - 128
When(/^I drag the min and max Polish filter sliders$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectMoreFilters();
    await startWithALabDiamond.scrollToLengthFilter();
    await startWithALabDiamond.dragPolishSlider();
});


Then(/^I ensure the diamond listing updates according to the dragged polish range$/, async() => {
    await BrowserUtil.wait(5)
	const startWithALabDiamond = await browser.getUrl();
    await expect(startWithALabDiamond).toEqual(data.Filters.DraggedPolishUrl);
});


//Scenario - 129
Then(/^I ensure the Certificate filter is displayed with IGI and GIA checkboxes$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.certificateIGItext).toExist();
    await expect(startWithADiamond.btnIGICheckbox).toExist();
    await expect(startWithADiamond.certificateGIAtext).toExist();
    await expect(startWithADiamond.btnGIACheckbox).toExist();
});


//Scenario - 130
When(/^I uncheck the GIA option$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectMoreFilters();
    await startWithALabDiamond.scrollToLengthFilter();
    await startWithALabDiamond.uncheckGIA();
});


Then(/^I ensure only the IGI diamonds are displayed in the table$/, async() => {
    await BrowserUtil.wait(5)
	const startWithALabDiamond = await browser.getUrl();
    await expect(startWithALabDiamond).toEqual(data.Filters.UncheckGIAUrl);
});


//Scenario - 131
When(/^I uncheck the IGI option$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectMoreFilters();
    await startWithADiamond.scrollToLengthFilter();
    await startWithADiamond.uncheckIGI();
});


Then(/^I ensure only the GIA diamonds are displayed in the table$/, async() => {
    await BrowserUtil.wait(5)
	const startWithADiamond = await browser.getUrl();
    await expect(startWithADiamond).toEqual(data.Filters.UncheckIGIUrl);
});


//Scenario - 132
When(/^I uncheck the IGI certificate option$/, async() => {
	const startWithADiamond = new MYOJ;
    await BrowserUtil.wait(10)
    await startWithADiamond.uncheckIGI();
});


Then(/^I ensure both options got selected automatically$/, async() => {
    await BrowserUtil.wait(5)
	const startWithADiamond = await browser.getUrl();
    await expect(startWithADiamond).toEqual(data.LooseDiamondsLinks.LooseLabDiamonds);
});


//Scenario - 133
When(/^I apply multiple diamond filters$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectOvalShape();
    await startWithADiamond.enterPriceRange();
    await startWithADiamond.dragColorSlider();
    await startWithADiamond.selectMoreFilters();
    await startWithADiamond.scrollToGemsFilter();
    await startWithADiamond.dragSymmetrySlider();
    await startWithADiamond.enterTableRange();
    await startWithADiamond.uncheckIGI();
});


When(/^I refresh the page$/, async() => {
    await browser.refresh();
    await BrowserUtil.wait(5);
});


Then(/^I ensure the applied filters are retained$/, async() => {
    await BrowserUtil.wait(5)
	const startWithADiamond = await browser.getUrl();
    await expect(startWithADiamond).toEqual(data.Filters.MultipleFiltersUrl);
});


//Scenario - 134
When(/^I select Quick view dropdown$/, async() => {
	const looseLabDiamonds = new MYOJ;
    //await looseLabDiamonds.hoverLogo()
    await looseLabDiamonds.selectQuickView();
});


When(/^I select View Lab Diamond button$/, async() => {
	const looseLabDiamonds = new MYOJ;
    await looseLabDiamonds.selectViewLabDiamond();
});


When(/^I navigate back to the Loose Lab Diamonds page$/, async() => {
	await browser.back();
    await BrowserUtil.wait(5);
});


//Scenario - 135
When(/^I enter the min and max carat range as 30$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.enterCarat30();
});


Then(/^I ensure the Nothing here message is displayed in the table section$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.msgNothingHere).toExist();
});


//Scenario - 136
Then(/^I ensure the applied filters are not retained$/, async() => {
    await BrowserUtil.wait(5)
	const startWithALabDiamond = await browser.getUrl();
    await expect(startWithALabDiamond).toEqual(data.StartWithALabDiamondLinks.Necklaces);
});


//Scenario - 261
When(/^I select the available shapes of loose diamonds$/, async() => {
	const looseDiamonds = new MYOJ;
    await looseDiamonds.looseDiamondsLengthAndBreadth();
});


Then(/^I ensure the Length and Breadth ranges displays the pre-fixed range as 0 and 20 for all shapes$/, async() => {
	const looseDiamonds = new MYOJ;
    await expect(looseDiamonds.txtFixedMinLength).toExist();
    await expect(looseDiamonds.txtFixedMaxLength).toExist();
    await expect(looseDiamonds.txtFixedMinBreadth).toExist();
    await expect(looseDiamonds.txtFixedMaxBreadth).toExist();
});


//Scenario - 262
When(/^I enter same price in price range textboxes$/, async() => {
	const looseLabDiamonds = new MYOJ;
    await looseLabDiamonds.enterPrice1500();
});


Then(/^I ensure the results are updated according to the price entered$/, async() => {
    await BrowserUtil.wait(5)
	const looseLabDiamonds = await browser.getUrl();
    await expect(looseLabDiamonds).toEqual(data.Filters.Price1500Url);
});


//Scenario - 263
When(/^I enter min caratage in max textbox and max caratage in min textbox$/, async() => {
	const looseLabDiamonds = new MYOJ;
    await looseLabDiamonds.enterDifferentCaratRange();
});


Then(/^I ensure the values are automatically changed to the respective min and max textboxes and the results are updated automatically$/, async() => {
	const looseLabDiamonds = await browser.getUrl();
    await expect(looseLabDiamonds).toEqual(data.Filters.EnteredCaratUrl);
});


//Scenario - 137
Then(/^I ensure the All diamonds, Recently viewed and Compare tabs are present at the table header$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.Alldiamondstab).toExist();
    await expect(startWithADiamond.Recentlyviewedtab).toExist();
    await expect(startWithADiamond.Comparetab).toExist();
    await expect(startWithADiamond.sortbybutton).toExist();
    await expect(startWithADiamond.listview).toExist();
    await expect(startWithADiamond.galleryview).toExist();
    
});


//Scenario - 138
Then(/^I verify that the recently viewed tab shows the number as 1$/, async() => {
	const looseLabDiamonds = new MYOJ;
    await expect(looseLabDiamonds.Recentlyviewedtab1).toExist();
});


When(/^I select Recently Viewed tab$/, async() => {
	const looseLabDiamonds = new MYOJ;
    await looseLabDiamonds.scrollToListingNoFilters();
    await looseLabDiamonds.selectRecentlyViewed();
});


Then(/^I ensure the recently viewed diamond details are displayed in the tab$/, async() => {
	const looseLabDiamonds = new MYOJ;
    await expect(looseLabDiamonds.tablefirstrow).toExist();
});


//Scenario - 140
Then(/^I ensure the Sort by filter is disabled$/, async() => {
	const looseLabDiamonds = new MYOJ;
    await expect(looseLabDiamonds.disabledSortBy).toExist();
});


//Scenario - 141
When(/^I select five diamonds for comparison$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.scrollToListingNoFilters();
    await startWithADiamond.selectForCompare();
});


Then(/^I ensure that the compare tab shows the number as 5$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.Comparetab5).toExist();
});


//Scenario - 142
When(/^I select Compare tab$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.scrollToListingNoFilters();
    await startWithADiamond.selectCompareTab();
});


When(/^I click right and left arrow buttons$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectCaretCompare();
});


Then(/^I ensure that the diamond details of the selected diamonds are displayed$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.sctnCompareTable).toExist();
    await expect(startWithADiamond.sctnCompareColumn1).toExist();
    await expect(startWithADiamond.sctnCompareColumn2).toExist();
    await expect(startWithADiamond.sctnCompareColumn3).toExist();
    await expect(startWithADiamond.sctnCompareColumn4).toExist();
    await expect(startWithADiamond.sctnCompareColumn5).toExist();
});


//Scenario - 143
When(/^I select two diamonds for comparison$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.scrollToListingNoFilters();
    await startWithALabDiamond.selectTwoForCompare();
});


Then(/^I ensure both the diamond details are displayed in the compare tab$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.sctnCompareTable).toExist();
    await expect(startWithALabDiamond.sctnCompareColumn1).toExist();
    await expect(startWithALabDiamond.sctnCompareColumn2).toExist();
    await expect(startWithALabDiamond.imgEarring1Diamond1).toExist();
    await expect(startWithALabDiamond.imgEarring1Diamond2).toExist();
    await expect(startWithALabDiamond.imgEarring2Diamond1).toExist();
    await expect(startWithALabDiamond.imgEarring2Diamond2).toExist();
});


//Scenario - 144
When(/^I remove the first diamond column$/, async() => {
	const looseLabDiamonds = new MYOJ;
    await looseLabDiamonds.scrollToListingNoFilters();
    await looseLabDiamonds.removeFirstDiamond();
});


Then(/^I ensure the first diamond is removed from the compare table$/, async() => {
	const looseLabDiamonds = new MYOJ;
    await expect(looseLabDiamonds.sctnCompareColumn1).toExist();
    await expect(looseLabDiamonds.sctnCompareColumn2).toExist();
    await expect(looseLabDiamonds.sctnCompareColumn3).toExist();
    await expect(looseLabDiamonds.sctnCompareColumn4).toExist();
    await expect(looseLabDiamonds.sctnCompareColumn5).not.toExist();
});


//Scenario - 145
Then(/^I ensure the Sort by filter, List view and Gallery view are disabled$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.disabledSortBy).toExist();
    await expect(startWithADiamond.disabledListView).toExist();
    await expect(startWithADiamond.disabledGalleryView).toExist();
});


//Scenario - 146
Then(/^I verify the diamond details section in the compare table$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.txtComparePrice).toExist();
    await expect(startWithALabDiamond.txtCompareShape).toExist();
    await expect(startWithALabDiamond.txtCompareCarat).toExist();
    await expect(startWithALabDiamond.txtCompareColor).toExist();
    await expect(startWithALabDiamond.txtCompareCountry).toExist();
    await expect(startWithALabDiamond.txtCompareLabReport).toExist();
    await expect(startWithALabDiamond.txtCompareClarity).toExist();
    await expect(startWithALabDiamond.txtCompareCut).toExist();
    await expect(startWithALabDiamond.txtCompareTablePercent).toExist();
    await expect(startWithALabDiamond.txtCompareDepthPercent).toExist();
    await expect(startWithALabDiamond.txtComparePolish).toExist();
    await expect(startWithALabDiamond.txtCompareMeasurements).toExist();
    await expect(startWithALabDiamond.txtCompareType).toExist();
    await expect(startWithALabDiamond.txtCompareSymmetry).toExist();
    await expect(startWithALabDiamond.txtCompareFluorescence).toExist();
    await expect(startWithALabDiamond.txtCompareViewStone).toExist();
    await expect(startWithALabDiamond.lnkViewLabStone).toExist();
});


//Scenario - 147
When(/^I select View button of the first compared diamond$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectViewCompare();
});


Then(/^I ensure the diamond details page of necklaces is displayed$/, async() => {
	const startWithADiamond = new MYOJ;
    await BrowserUtil.wait(5)
    await expect(startWithADiamond.createYourOwnNecklace).toExist();
});


//Scenario - 149
When(/^I hover over the Sort by filter$/, async() => {
	const looseLabDiamonds = new MYOJ;
    await looseLabDiamonds.scrollToListingNoFilters();
    await looseLabDiamonds.hoverSortBy();
});


Then(/^I ensure the sortby dropdown shows the dropdown menu with options$/, async() => {
	const looseLabDiamonds = new MYOJ;
    await expect(looseLabDiamonds.sortbypricetext).toExist();
    await expect(looseLabDiamonds.sortbypricelowtohightext).toExist();
    await expect(looseLabDiamonds.sortbypricehightolowtext).toExist();
    await expect(looseLabDiamonds.sortbycarattext).toExist();
    await expect(looseLabDiamonds.sortbycaratlowtohightext).toExist();
    await expect(looseLabDiamonds.sortbycarathightolowtext).toExist();
    await expect(looseLabDiamonds.sortbyclaritytext).toExist();
    await expect(looseLabDiamonds.sortbyclaritylowtohightext).toExist();
    await expect(looseLabDiamonds.sortbyclarityhightolowtext).toExist();
    await expect(looseLabDiamonds.sortbycolortext).toExist();
    await expect(looseLabDiamonds.sortbycolorlowtohightext).toExist();
    await expect(looseLabDiamonds.sortbycolorhightolowtext).toExist();
});


//Scenario - 150
When(/^I select the filters in the dropdown$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.scrollToListingNoFilters();
    await startWithADiamond.selectSortByOption();
});


Then(/^I ensure the table sorts according to the filter chosen$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.activeCaratLowToHigh).toExist();
});


//Scenario - 151
When(/^I select gallery view button$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.scrollToListingNoFilters();
    await startWithALabDiamond.selectGalleryView();
});


Then(/^I ensure the list of diamonds are displayed in grid view format$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.gridFirstRow).toExist();
    await expect(startWithALabDiamond.imgFirstRowGridView).toExist();
    await expect(startWithALabDiamond.txtDiamondDetailsGridView).toExist();
    await expect(startWithALabDiamond.txtPriceDetailsGridView).toExist();
    await expect(startWithALabDiamond.btnCompareGridView).toExist();
});


Then(/^I ensure the list of both diamonds are displayed in grid view format$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.gridEarringFirstRow).toExist();
    await expect(startWithALabDiamond.imgFirstDiamondGridView).toExist();
    await expect(startWithALabDiamond.imgSecondDiamondGridView).toExist();
    await expect(startWithALabDiamond.txtFirstDiamondDetailsGridView).toExist();
    await expect(startWithALabDiamond.txtSecondDiamondDetailsGridView).toExist();
    await expect(startWithALabDiamond.txtFirstPriceDetailsGridView).toExist();
    await expect(startWithALabDiamond.txtSecondPriceDetailsGridView).toExist();
    await expect(startWithALabDiamond.txtFirstStrikedOutPriceGridView).toExist();
    await expect(startWithALabDiamond.txtSecondStrikedOutPriceGridView).toExist();
    await expect(startWithALabDiamond.btnEarringCompareGridView).toExist();
});


//Scenario - 152
When(/^I scroll to the diamond listing table$/, async() => {
    const startWithADiamond = new MYOJ;
    await startWithADiamond.scrollToListingNoFilters();
});


When(/^I select Quick view dropdown for earrings$/, async() => {
	const looseLabDiamonds = new MYOJ;
    await looseLabDiamonds.selectQuickViewEarrings();
});


Then(/^I ensure the diamond details and the expanded area are displayed$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.tableearringfirstrowexpandarea).toExist();
    await expect(startWithADiamond.tableearringfirstrowfirstdiamondexpandarea).toExist();
    await expect(startWithADiamond.tableearringfirstrowseconddiamondexpandarea).toExist();
    await expect(startWithADiamond.tablefirstdiamondimg).toExist();
    await expect(startWithADiamond.tablefirstdiamondproductinfoarea).toExist();
    //await expect(startWithADiamond.tablefirstdiamondstrikedpricearea).toExist();
    await expect(startWithADiamond.tableseconddiamondimg).toExist();
    await expect(startWithADiamond.tableseconddiamondproductinfoarea).toExist();
    //await expect(startWithADiamond.tableseconddiamondstrikedpricearea).toExist();
});


When(/^I select X button in the Quick view section$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.closeQuickView();
});


Then(/^I ensure the expanded area is closed$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.tableearringfirstrowexpandarea).not.toExist();
});


//Scenario - 153
Then(/^I ensure the diamond details page is displayed$/, async() => {
	const startWithADiamond = new MYOJ;
    await BrowserUtil.wait(5)
    await expect(startWithADiamond.LooseDiamondsDDPBanner).toExist();
});


//Scenario - 154
When(/^I select View Diamond button$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectViewDiamond();
});


Then(/^I ensure the icons are displayed in the diamond details page$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.iconDiamondShape).toExist();
    await expect(startWithADiamond.iconActiveShape).toExist();
    await expect(startWithADiamond.iconPlayVideo).toExist();
    //await expect(startWithADiamond.iconGIACertificate).toExist();
    //await expect(startWithADiamond.iconIGICertificate).toExist();
    await expect(startWithADiamond.iconTopView).toExist();
    await expect(startWithADiamond.iconSideView).toExist();
});


//Scenario - 155
Then(/^I ensure the image and the diamond details are present in the Diamond details page$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.mainImage).toExist();
    await expect(startWithALabDiamond.lnkgiaCertificate).toExist();
    await expect(startWithALabDiamond.txtCertificateName).toExist();
    await expect(startWithALabDiamond.diamondClarityDesc).toExist();
    await expect(startWithALabDiamond.cutDescription).toExist();
    await expect(startWithALabDiamond.priceDesc).toExist();
    await expect(startWithALabDiamond.strikedPriceDDP).toExist();
});


Then(/^I ensure the images and the diamond details are present for both diamonds in the Diamond details page$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.mainImage).toExist();
    await expect(startWithALabDiamond.igiCertificateEarring1).toExist();
    await expect(startWithALabDiamond.igiCertificateEarring2).toExist();
    await expect(startWithALabDiamond.txtCertificateNameEarring1).toExist();
    await expect(startWithALabDiamond.txtCertificateNameEarring2).toExist();
    await expect(startWithALabDiamond.diamondClarityDescEarring1).toExist();
    await expect(startWithALabDiamond.diamondClarityDescEarring2).toExist();
    await expect(startWithALabDiamond.cutDescriptionEarring1).toExist();
    await expect(startWithALabDiamond.cutDescriptionEarring2).toExist();
    await expect(startWithALabDiamond.priceDescEarring1).toExist();
    await expect(startWithALabDiamond.priceDescEarring2).toExist();
});


//Scenario - 156
Then(/^I ensure the Shape icon is selected as default in the Diamond details page$/, async() => {
	const looseDiamonds = new MYOJ;
    await expect(looseDiamonds.iconActiveShape).toExist();
});


//Scenario - 157
When(/^I click the Play Video icon$/, async() => {
	const looseLabDiamonds = new MYOJ;
    await looseLabDiamonds.selectPlayVideo();
});


Then(/^I ensure the video popup plays in the screen$/, async() => {
	const looseLabDiamonds = new MYOJ;
    await expect(looseLabDiamonds.popupPlayVideo).toExist();
});


//Scenario - 158
When(/^I click the view GIA certificate button$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectIconGIA();
});


//Scenario - 159
When(/^I click the view IGI certificate button$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectIconIGI();
});


//Scenario - 160
When(/^I select the Top View icon$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectIconTopView();
});


Then(/^I ensure the Top View image of the diamond is displayed$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.mainImageTopView).toExist();
});


When(/^I select the Side View icon$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectIconSideView();
});


Then(/^I ensure the Side View image of the diamond is displayed$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.mainImageSideView).toExist();
});


//Scenario - 161
When(/^I hover over each feature name$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.hoveringDiamondFeatures();
});


Then(/^I ensure the Your Diamond Details section includes all the Diamond features along with the tooltip content$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.fluorescenceTooltipDDP).toExist();
});


//Scenario - 162
When(/^I hover over features with detailed popup and click View Details$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.hoverViewDetailsDiamondFeatures();
});


Then(/^I ensure the respective diamond feature popup is displayed$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.popupSymmetryViewDetailsDDP).toExist();
});


//Scenario - 163
When(/^I scroll to Diamond Details section$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.scrollEarringDDP();
});


Then(/^I ensure the Diamond details of first diamond is displayed under Diamond Details - 1$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.txtEarringdiamondDetails1).toExist();
    await expect(startWithALabDiamond.iconCertificate1).toExist();
    await expect(startWithALabDiamond.txtdiamondDDP).toExist();
    await expect(startWithALabDiamond.txtColorDDP).toExist();
    await expect(startWithALabDiamond.txtPriceDDP).toExist();
    await expect(startWithALabDiamond.txtYourprice).toExist();
    await expect(startWithALabDiamond.txtcaratWeightDDP).toExist();
    await expect(startWithALabDiamond.txtShapeDDP).toExist();
    await expect(startWithALabDiamond.txtCutDDP).toExist();
    await expect(startWithALabDiamond.txtMeasurementDDP).toExist();
    await expect(startWithALabDiamond.txtOriginDDP).toExist();
    await expect(startWithALabDiamond.txtClarityDDP).toExist();
    await expect(startWithALabDiamond.txtTableDDP).toExist();
    await expect(startWithALabDiamond.txtDepthDDP).toExist();
    await expect(startWithALabDiamond.txtSymmetryDDP).toExist();
    await expect(startWithALabDiamond.txtPolishDDP).toExist();
    await expect(startWithALabDiamond.txtFluorescenceDDP).toExist();
    await expect(startWithALabDiamond.txtReportDDP).toExist();
    await expect(startWithALabDiamond.linkViewReportDDP).toExist();
});


When(/^I select Diamond Details - 2$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectDiamondDetails2();
});


Then(/^I ensure the Diamond details of second diamond is displayed under Diamond Details - 2$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.txtEarringdiamondDetails2).toExist();
    await expect(startWithALabDiamond.iconCertificate2).toExist();
    await expect(startWithALabDiamond.txtdiamondDDP).toExist();
    await expect(startWithALabDiamond.txtColorDDP).toExist();
    await expect(startWithALabDiamond.txtPriceDDP).toExist();
    await expect(startWithALabDiamond.txtYourprice).toExist();
    await expect(startWithALabDiamond.txtcaratWeightDDP).toExist();
    await expect(startWithALabDiamond.txtShapeDDP).toExist();
    await expect(startWithALabDiamond.txtCutDDP).toExist();
    await expect(startWithALabDiamond.txtMeasurementDDP).toExist();
    await expect(startWithALabDiamond.txtOriginDDP).toExist();
    await expect(startWithALabDiamond.txtClarityDDP).toExist();
    await expect(startWithALabDiamond.txtTableDDP).toExist();
    await expect(startWithALabDiamond.txtDepthDDP).toExist();
    await expect(startWithALabDiamond.txtSymmetryDDP).toExist();
    await expect(startWithALabDiamond.txtPolishDDP).toExist();
    await expect(startWithALabDiamond.txtFluorescenceDDP).toExist();
    await expect(startWithALabDiamond.txtReportDDP).toExist();
    await expect(startWithALabDiamond.linkViewReportDDP).toExist();
});


//Scenario - 166
Then(/^I ensure the Carat section with the details of the chosen diamond is displayed$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.sctnCarat).toExist();
    await expect(startWithADiamond.headingCarat).toExist();
    await expect(startWithADiamond.txtCaratSection).toExist();
    await expect(startWithADiamond.caratYourDiamondSection).toExist();
    await expect(startWithADiamond.caratScaleSection).toExist();
});


//Scenario - 167
When(/^I scroll to Cut section$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.scrollToCutSection();
});


Then(/^I ensure the Cut section with the details of the chosen diamond is displayed$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.sctnCut).toExist();
    await expect(startWithALabDiamond.headingCut).toExist();
    await expect(startWithALabDiamond.txtCutSection).toExist();
    await expect(startWithALabDiamond.cutYourDiamondSection).toExist();
    await expect(startWithALabDiamond.cutScaleSection).toExist();
});


//Scenario - 168
When(/^I scroll to Color section$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.scrollToColorSection();
});


Then(/^I ensure the Color section with the details of the chosen diamond is displayed$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.sctnColor).toExist();
    await expect(startWithADiamond.headingColor).toExist();
    await expect(startWithADiamond.txtColorSection).toExist();
    await expect(startWithADiamond.colorYourDiamondSection).toExist();
    await expect(startWithADiamond.colorScaleSection).toExist();
});


//Scenario - 169
When(/^I scroll to Clarity section$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.scrollToClaritySection();
});


Then(/^I ensure the Clarity section with the details of the chosen diamond is displayed$/, async() => {
	const looseLabDiamonds = new MYOJ;
    await expect(looseLabDiamonds.sctnClarity).toExist();
    await expect(looseLabDiamonds.headingClarity).toExist();
    await expect(looseLabDiamonds.txtClaritySection).toExist();
    await expect(looseLabDiamonds.clarityYourDiamondSection).toExist();
    await expect(looseLabDiamonds.clarityScaleSection).toExist();
});


//Scenario - 170
Then(/^I ensure the breadcrumb is present in the Diamond Details Page$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.sctnBreadcrumb).toExist();
    await expect(startWithADiamond.lnkHomeBreadcrumb).toExist();
    await expect(startWithADiamond.lnkLooseDiamondsBreadcrumb).toExist();
    await expect(startWithADiamond.lnkDiamondEarringBreadcrumb).toExist();
    await expect(startWithADiamond.lnkViewDetails).toExist();
});


When(/^I click View Details and Make Your Diamond Earring links in breadcrumb$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectLinksBreadcrumb();
});


Then(/^I ensure the Start with a Diamond page of Earrings menu is displayed$/, async() => {
	const startWithADiamond = await browser.getUrl();
    await expect(startWithADiamond).toEqual(data.StartWithADiamondLinks.Earrings);
});


//Scenario - 171
Then(/^I ensure the total number of pages in the table is represented at the bottom of the table$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.paginationarea).toExist();
    await expect(startWithALabDiamond.paginationlist).toExist();
    await expect(startWithALabDiamond.pagelefticon).toExist();
    await expect(startWithALabDiamond.pagenumberfield).toExist();
    await expect(startWithALabDiamond.pagerighticon).toExist();
});


//Scenario - 172
When(/^I click Page 3$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectPage3Button();
});


Then(/^I ensure the page 3 of the table is displayed$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.currentPage3).toExist();
});


//Scenario - 173
When(/^I enter 3 in the pagination textbox$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.enterPageNumber();
});


//Scenario - 174
When(/^I click Page 2$/, async() => {
	const looseDiamonds = new MYOJ;
    await looseDiamonds.selectPage2Button();
});


When(/^I click right caret icon$/, async() => {
	const looseDiamonds = new MYOJ;
    await looseDiamonds.selectRightCaretPage();
});


When(/^I click left caret icon$/, async() => {
	const looseDiamonds = new MYOJ;
    await looseDiamonds.selectLeftCaretPage();
});


Then(/^I ensure the page 2 of the table is displayed$/, async() => {
	const looseDiamonds = new MYOJ;
    await expect(looseDiamonds.currentPage2).toExist();
});


//Scenario - 175
When(/^I click Select Earring button$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectEarringDDP();
});


Then(/^I ensure the page 2 of earrings for the custom stone is displayed$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.earringsSWLDPage2Banner).toExist();
    await expect(startWithALabDiamond.earringsSWLDsubHeading).toExist();
});


When(/^I click Select Necklace button$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectNecklaceDDP();
});


Then(/^I ensure the page 2 of necklaces for the custom stone is displayed$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.necklacesSWADPage2Banner).toExist();
    await expect(startWithADiamond.necklacesSWADsubHeading).toExist();
});


When(/^I click Select Men's Ring button$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectMensRingDDP();
});


Then(/^I ensure the page 2 of men's rings for the custom stone is displayed$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.mensSWLDPage2Banner).toExist();
    await expect(startWithALabDiamond.mensSWLDsubHeading).toExist();
});


When(/^I click Select Ring button$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectRingDDP();
});


Then(/^I ensure the page 2 of rings for the custom stone is displayed$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.ringStartWithDiamondPage2Banner).toExist();
    await expect(startWithADiamond.subHeadingStartWithDiamond).toExist();
});


//Scenario - 176
Then(/^I verify the presence of breadcrumb and the number of available diamonds in page 2 rings$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.sctnBreadcrumb).toExist();
    await expect(startWithADiamond.lnkHomeBreadcrumb).toExist();
    await expect(startWithADiamond.lnkEngagementRingBreadcrumb).toExist();
    await expect(startWithADiamond.lnkMakeYourDiamondEngagementRingBreadcrumb).toExist();
    await expect(startWithADiamond.txtNoOfDesigns).toExist();
});


When(/^I click Make Your Diamond Engagement Ring and Engagement Ring links in breadcrumb$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectRingsBreadcrumb();
});


Then(/^I ensure the links redirects to respective Engagement Ring page$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.ringsCategoryBanner).toExist();
});


When(/^I browse back to Settings page$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.browseBack();
});


Then(/^I verify the presence of breadcrumb and the number of available diamonds in page 2 earrings$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.sctnBreadcrumb).toExist();
    await expect(startWithADiamond.lnkHomeBreadcrumb).toExist();
    await expect(startWithADiamond.lnkEarringsBreadcrumb).toExist();
    await expect(startWithADiamond.lnkMakeYourDiamondEarringBreadcrumb).toExist();
    await expect(startWithADiamond.txtNoOfDesigns).toExist();
});


When(/^I click Make Your Diamond Earring and Earrings links in breadcrumb$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectEarringsBreadcrumb();
});


Then(/^I ensure the links redirects to respective Earrings page$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.earringsCategoryBanner).toExist();
});


Then(/^I verify the presence of breadcrumb and the number of available diamonds in page 2 necklaces$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.sctnBreadcrumb).toExist();
    await expect(startWithADiamond.lnkHomeBreadcrumb).toExist();
    await expect(startWithADiamond.lnkNecklacesBreadcrumb).toExist();
    await expect(startWithADiamond.lnkMakeYourDiamondNecklaceBreadcrumb).toExist();
    await expect(startWithADiamond.txtNoOfDesigns).toExist();
});


When(/^I click Make Your Diamond Necklace and Necklaces links in breadcrumb$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectNecklacesBreadcrumb();
});


Then(/^I ensure the links redirects to respective Necklaces page$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.necklacesCategoryBanner).toExist();
});


Then(/^I verify the presence of breadcrumb and the number of available diamonds in page 2 men's rings$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.sctnBreadcrumb).toExist();
    await expect(startWithADiamond.lnkHomeBreadcrumb).toExist();
    await expect(startWithADiamond.lnkMensRingBreadcrumb).toExist();
    await expect(startWithADiamond.lnkMakeYourDiamondMensRingBreadcrumb).toExist();
    await expect(startWithADiamond.txtNoOfDesigns).toExist();
});


When(/^I click Make Your Diamond Men's Ring and Men's Rings links in breadcrumb$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectMensRingsBreadcrumb();
});


Then(/^I ensure the links redirects to respective Men's Rings page$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.mensRingsCategoryBanner).toExist();
});


//Scenario - 177
Then(/^I verify the presence of breadcrumb and the number of available lab diamonds in page 2 rings$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.sctnBreadcrumb).toExist();
    await expect(startWithALabDiamond.lnkHomeBreadcrumb).toExist();
    await expect(startWithALabDiamond.lnkEngagementRingBreadcrumb).toExist();
    await expect(startWithALabDiamond.lnkMakeYourLabDiamondEngagementRingBreadcrumb).toExist();
    await expect(startWithALabDiamond.txtNoOfDesigns).toExist();
});


When(/^I click Make Your Lab Diamond Engagement Ring and Engagement Ring links in breadcrumb$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectLabRingsBreadcrumb();
});


Then(/^I verify the presence of breadcrumb and the number of available lab diamonds in page 2 earrings$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.sctnBreadcrumb).toExist();
    await expect(startWithALabDiamond.lnkHomeBreadcrumb).toExist();
    await expect(startWithALabDiamond.lnkEarringsBreadcrumb).toExist();
    await expect(startWithALabDiamond.lnkMakeYourLabDiamondEarringBreadcrumb).toExist();
    await expect(startWithALabDiamond.txtNoOfDesigns).toExist();
});


When(/^I click Make Your Lab Diamond Earring and Earrings links in breadcrumb$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectLabEarringsBreadcrumb();
});


Then(/^I verify the presence of breadcrumb and the number of available lab diamonds in page 2 necklaces$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.sctnBreadcrumb).toExist();
    await expect(startWithALabDiamond.lnkHomeBreadcrumb).toExist();
    await expect(startWithALabDiamond.lnkNecklacesBreadcrumb).toExist();
    await expect(startWithALabDiamond.lnkMakeYourLabDiamondNecklaceBreadcrumb).toExist();
    await expect(startWithALabDiamond.txtNoOfDesigns).toExist();
});


When(/^I click Make Your Lab Diamond Necklace and Necklaces links in breadcrumb$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectLabNecklacesBreadcrumb();
});


Then(/^I verify the presence of breadcrumb and the number of available lab diamonds in page 2 men's rings$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.sctnBreadcrumb).toExist();
    await expect(startWithALabDiamond.lnkHomeBreadcrumb).toExist();
    await expect(startWithALabDiamond.lnkMensRingBreadcrumb).toExist();
    await expect(startWithALabDiamond.lnkMakeYourLabDiamondMensRingBreadcrumb).toExist();
    await expect(startWithALabDiamond.txtNoOfDesigns).toExist();
});


When(/^I click Make Your Lab Diamond Men's Ring and Men's Rings links in breadcrumb$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectLabMensRingsBreadcrumb();
});


//Scenario - 178
Then(/^I verify the Settings tab is enabled and pre-selected with Select link$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.tabSettingsActive).toExist();
    await expect(startWithALabDiamond.tabSettingsSelect).toExist();
});


//Scenario - 179
Then(/^I ensure the carat and price of the chosen diamond along with Change link is displayed in the Diamond tab$/, async() => {
	const startWithADiamond = new MYOJ;
    //await expect(startWithADiamond.tabDiamondActiveSWAS).toExist();
    await expect(startWithADiamond.tabDiamondCtsAndPriceDetails).toExist();
    await expect(startWithADiamond.tabDiamondChange).toExist();
    await expect(startWithADiamond.imgDiamondSelectedIcon).toExist();
});


Then(/^I ensure the carat and price of the chosen diamonds along with Change link are displayed in the Lab Diamond tab$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.tabDiamondClickable).toExist();
    await expect(startWithALabDiamond.tabLabDiamondCtsAndPriceDetails).toExist();
    await expect(startWithALabDiamond.tabLabDiamondChange).toExist();
    await expect(startWithALabDiamond.imgDiamondSelectedIcon).toExist();
});


//Scenario - 180
When(/^I click Change link in Diamond tab$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectChangeDiamond();
});


Then(/^I ensure it redirects to diamond listing page$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.tabDiamondClickable).not.toExist();
    await expect(startWithADiamond.tabDiamondCtsAndPriceDetails).not.toExist();
    await expect(startWithADiamond.tabDiamondChange).not.toExist();
    await expect(startWithADiamond.tabDiamondActive).toExist();
});


When(/^I click Change link in Lab Diamond tab$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectChangeLabDiamond();
});


Then(/^I ensure it redirects to lab diamond listing page$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.tabDiamondClickable).not.toExist();
    await expect(startWithALabDiamond.tabLabDiamondCtsAndPriceDetails).not.toExist();
    await expect(startWithALabDiamond.tabLabDiamondChange).not.toExist();
    await expect(startWithALabDiamond.tabDiamondActive).toExist();
});


//Scenario - 181
Then(/^I ensure the Ways to save more options are displayed and the Easy delivery option is selected in the page 2$/, async() => {
    const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.sctnWaysToSaveMore).toExist();
    await expect(startWithADiamond.lnkWaysToSaveMore).toExist();
    await expect(startWithADiamond.drpEasyDelivery).toExist();
    await expect(startWithADiamond.optnStandardDelivery).toExist();
    await expect(startWithADiamond.optnEasyDelivery).toExist();
    await expect(startWithADiamond.drpPaymentDefault).toExist();
    await expect(startWithADiamond.optnCardPayment).toExist();
    await expect(startWithADiamond.optnWirePayment).toExist();
});


When(/^I select Wire payment option under Ways to Save More$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectWirePayment();
});


Then(/^I ensure the Ways to save more options are displayed and the Wire payment option is selected in the page 2$/, async() => {
    const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.sctnWaysToSaveMore).toExist();
    await expect(startWithALabDiamond.lnkWaysToSaveMore).toExist();
    await expect(startWithALabDiamond.drpEasyDelivery).toExist();
    await expect(startWithALabDiamond.optnStandardDelivery).toExist();
    await expect(startWithALabDiamond.optnEasyDelivery).toExist();
    await expect(startWithALabDiamond.drpWirePayment).toExist();
    await expect(startWithALabDiamond.optnCardPayment).toExist();
    await expect(startWithALabDiamond.optnWirePayment).toExist();
});


//Scenario - 182
Then(/^I validate the Diamond tag in page 2$/, async() => {
    const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.tagDiamond).toExist();
});


Then(/^I validate the Lab Diamond and Engagement Rings tag in page 2$/, async() => {
    const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.tagLabDiamond).toExist();
    await expect(startWithALabDiamond.tagEngagementRings).toExist();
});


//Scenario - 183
Then(/^I validate the style, metal and sort by filters in page 2 of rings$/, async() => {
    const startWithALabDiamond = new Page2;
    await expect(startWithALabDiamond.sctnFilterTab).toExist();
    await expect(startWithALabDiamond.lnkFilterStyle).toExist();
    await expect(startWithALabDiamond.optnSolitaire).toExist();
    await expect(startWithALabDiamond.optnSidestone).toExist();
    await expect(startWithALabDiamond.optnHalo).toExist();
    await expect(startWithALabDiamond.optnVintage).toExist();
    await expect(startWithALabDiamond.optnThreeStone).toExist();
    await expect(startWithALabDiamond.optnBridalRingSet).toExist();
    await expect(startWithALabDiamond.optnCocktail).toExist();
    await expect(startWithALabDiamond.optnEngagementRings).toExist();
    await expect(startWithALabDiamond.optnWeddingRing).not.toExist();
    await expect(startWithALabDiamond.lnkFilterMetal).toExist();
    await expect(startWithALabDiamond.sctnPlatinum).toExist();
    await expect(startWithALabDiamond.sctn18k).toExist();
    await expect(startWithALabDiamond.sctn14k).toExist();
    await expect(startWithALabDiamond.sctn10k).toExist();
    await expect(startWithALabDiamond.sctnSterlingSilver).toExist();
    // await expect(startWithALabDiamond.lnkFilterSortBy).toExist();
    // await expect(startWithALabDiamond.optnMostPopular).toExist();
    // await expect(startWithALabDiamond.optnNewArrival).toExist();
    // await expect(startWithALabDiamond.optnPriceLowToHigh).toExist();
    // await expect(startWithALabDiamond.optnPriceHighToLow).toExist();
});


Then(/^I validate the style, metal and sort by filters in page 2 of earrings$/, async() => {
    const startWithADiamond = new Page2;
    await expect(startWithADiamond.sctnFilterTab).toExist();
    await expect(startWithADiamond.lnkFilterStyle).toExist();
    await expect(startWithADiamond.optnStuds).toExist();
    await expect(startWithADiamond.optnDrops).toExist();
    await expect(startWithADiamond.optnHoops).toExist();
    await expect(startWithADiamond.optnChandelier).toExist();
    await expect(startWithADiamond.optnHaloAndOthers).toExist();
    await expect(startWithADiamond.lnkFilterMetal).toExist();
    await expect(startWithADiamond.sctnPlatinum).toExist();
    await expect(startWithADiamond.sctn18k).toExist();
    await expect(startWithADiamond.sctn14k).toExist();
    await expect(startWithADiamond.sctn10k).toExist();
    await expect(startWithADiamond.sctnSterlingSilver).toExist();
    // await expect(startWithADiamond.lnkFilterSortBy).toExist();
    // await expect(startWithADiamond.optnMostPopular).toExist();
    // await expect(startWithADiamond.optnNewArrival).toExist();
    // await expect(startWithADiamond.optnPriceLowToHigh).toExist();
    // await expect(startWithADiamond.optnPriceHighToLow).toExist();
});


Then(/^I validate the style, metal and sort by filters in page 2 of necklaces$/, async() => {
    const startWithADiamond = new Page2;
    await expect(startWithADiamond.sctnFilterTab).toExist();
    await expect(startWithADiamond.lnkFilterStyle).toExist();
    await expect(startWithADiamond.optnNature).toExist();
    await expect(startWithADiamond.optnHeart).toExist();
    await expect(startWithADiamond.optnReligious).toExist();
    await expect(startWithADiamond.optnUnique).toExist();
    await expect(startWithADiamond.lnkFilterMetal).toExist();
    await expect(startWithADiamond.sctnPlatinum).toExist();
    await expect(startWithADiamond.sctn18k).toExist();
    await expect(startWithADiamond.sctn14k).toExist();
    await expect(startWithADiamond.sctn10k).toExist();
    await expect(startWithADiamond.sctnSterlingSilver).toExist();
    // await expect(startWithADiamond.lnkFilterSortBy).toExist();
    // await expect(startWithADiamond.optnMostPopular).toExist();
    // await expect(startWithADiamond.optnNewArrival).toExist();
    // await expect(startWithADiamond.optnPriceLowToHigh).toExist();
    // await expect(startWithADiamond.optnPriceHighToLow).toExist();
});


//Scenario - 184
Then(/^I ensure the style filter is not displayed in page 2 of men's rings$/, async() => {
    const startWithALabDiamond = new Page2;
    await expect(startWithALabDiamond.sctnFilterTab).toExist();
    await expect(startWithALabDiamond.lnkFilterStyle).not.toExist();
    await expect(startWithALabDiamond.lnkFilterMetal).toExist();
    await expect(startWithALabDiamond.sctnPlatinum).toExist();
    await expect(startWithALabDiamond.sctn18k).toExist();
    await expect(startWithALabDiamond.sctn14k).toExist();
    await expect(startWithALabDiamond.sctn10k).toExist();
    await expect(startWithALabDiamond.sctnSterlingSilver).toExist();
    // await expect(startWithALabDiamond.lnkFilterSortBy).toExist();
    // await expect(startWithALabDiamond.optnMostPopular).toExist();
    // await expect(startWithALabDiamond.optnNewArrival).toExist();
    // await expect(startWithALabDiamond.optnPriceLowToHigh).toExist();
    // await expect(startWithALabDiamond.optnPriceHighToLow).toExist();
});


//Scenario - 185
Then(/^I ensure the image, product name, price and short description of the product is displayed in page 2$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.sctnProductDisplay).toExist();
    await expect(startWithADiamond.imgProduct).toExist();
    await expect(startWithADiamond.txtProductName).toExist();
    await expect(startWithADiamond.txtPrice).toExist();
    await expect(startWithADiamond.txtShortProductDescription).toExist();
});


//Scenario - 186
Then(/^I ensure the actual price is striked out and the discounted price for the product is displayed$/, async() => {
    const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.txtPrice).toExist();
    await expect(startWithALabDiamond.txtStrikedOutPrice).toExist();
});


//Scenario - 187
Then(/^I ensure the diamond inline description is displayed in the page 2$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.sctnInlineDescription).toExist();
    await expect(startWithADiamond.headingInlineDescriptionDiamond).toExist();
    await expect(startWithADiamond.txtInlineDescriptionDiamond).toExist();
});


Then(/^I ensure the lab diamond inline description is displayed in the page 2$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.sctnInlineDescription).toExist();
    await expect(startWithALabDiamond.headingInlineDescriptionLabDiamond).toExist();
    await expect(startWithALabDiamond.txtInlineDescriptionLabDiamond).toExist();
});


//Scenario - 188
When(/^I click the star rating in the SEO section in page 2$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectStarRating();
});


Then(/^I ensure it redirects to custom rings reviews page$/, async() => {
    const startWithALabDiamond = await browser.getUrl();
    await expect(startWithALabDiamond).toEqual(data.Reviews.Rings);
});


Then(/^I ensure it redirects to custom earrings reviews page$/, async() => {
    const startWithADiamond = await browser.getUrl();
    await expect(startWithADiamond).toEqual(data.Reviews.Earrings);
});


Then(/^I ensure it redirects to custom necklaces reviews page$/, async() => {
    const startWithALabDiamond = await browser.getUrl();
    await expect(startWithALabDiamond).toEqual(data.Reviews.Necklaces);
});


Then(/^I ensure the SEO section is present in page 2 of men's rings$/, async() => {
    const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.sctnAboutOurCustomProducts).toExist();
});


//Scenario - 189
When(/^I select a product in page 2$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectProductPage2();
});


Then(/^I ensure the page 3 with the tab and ways to save more section is displayed$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.page3).toExist();
    await expect(startWithADiamond.sctnHeadingTab).toExist();
    await expect(startWithADiamond.imgDiamondSelectedIcon).toExist();
    await expect(startWithADiamond.tabDiamondClickable).toExist();
    await expect(startWithADiamond.tabDiamondCtsAndPriceDetails).toExist();
    await expect(startWithADiamond.tabDiamondChange).toExist();
    await expect(startWithADiamond.imgRingIcon).toExist();
    await expect(startWithADiamond.tabSettingsActive).toExist();
    await expect(startWithADiamond.tabSettingsSelect).toExist();
    await expect(startWithADiamond.lnkWaysToSaveMore).toExist();
    await expect(startWithADiamond.drpDeliveryDefault).toExist();
    await expect(startWithADiamond.drpBandDefault).toExist();
    await expect(startWithADiamond.drpPaymentDefault).toExist();
});


//Scenario - 190
Then(/^I ensure the page 3 of the product with the custom diamond is displayed with the image, description and price$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.txtShortProductDescriptionPage3).toExist();
    await expect(startWithALabDiamond.pricePage3).toExist();
    await expect(startWithALabDiamond.imgPage3).toExist();
    await expect(startWithALabDiamond.sctnProductPage3).toExist();
});


//Scenario - 191
Then(/^I ensure the discounted price for the product is displayed in page 3$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.txtStrikedOutPricePage3).toExist();
});


//Scenario - 192
Then(/^I ensure the product details section matches the details in product display with custom diamonds$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.txtTypeProductDetails).toExist();
    await expect(startWithALabDiamond.txtStoneName).toExist();
    await expect(startWithALabDiamond.txtStoneDetails).toExist();
});


//Scenario - 193
Then(/^I ensure the certificate link for the custom diamond is displayed$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.lnkDiamondCertificatePage3).toExist();
});


Then(/^I ensure the certificate links for both custom diamonds are displayed$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.lnkDiamond1CertificatePage3).toExist();
    await expect(startWithADiamond.lnkDiamond2CertificatePage3).toExist();
});


//Scenario - 194
Then(/^I ensure the request custom order button is not displayed and the add to cart button is displayed$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.btnReqCusOrder).not.toExist();
    await expect(startWithALabDiamond.btnAddToCart).toExist();
});


//Scenario - 195
When(/^I click Add to cart in page 3$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectAddToCart();
});


Then(/^I validate the order summary and absence of continue shopping button$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.popupOrderSummary).toExist();
    await expect(startWithALabDiamond.txtStrikedOutPriceInPopup).toExist();
    await expect(startWithALabDiamond.btnCheckOut).toExist();
    await expect(startWithALabDiamond.btnContinueShopping).not.toExist();
});


When(/^I click Checkout button$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectCheckOut();
});


Then(/^I ensure the product added to cart and redirects to shopping cart$/, async() => {
    const startWithALabDiamond = await browser.getUrl();
    await expect(startWithALabDiamond).toEqual(data.Cart.ShoppingCartUrl);
});


When(/^I select ring size$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.selectRingSize();
});


//Scenario - 196
Then(/^I ensure Select Women's Band button is displayed in page 3$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.btnAddToCart).not.toExist();
    await expect(startWithADiamond.btnSelectWomensBandPage3).toExist();
});


//Scenario - 197
When(/^I click Select Women's Band button$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.clickSelectWomensBand();
});


Then(/^I ensure it redirects to page 2 of matching women's bands and breadcrumb updates accordingly$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.mensSWSBanner).toExist();
    await expect(startWithALabDiamond.mensSWADsubHeading).toExist();
    await expect(startWithALabDiamond.sctnBreadcrumb).toExist();
    await expect(startWithALabDiamond.lnkHomeBreadcrumb).toExist();
    await expect(startWithALabDiamond.lnkMakeYourDiamondMensRingBreadcrumb).toExist();
});


//Scenario - 198
Then(/^I ensure the Women's Band tab is displayed with icon and disabled$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.imgWomensBandIcon).toExist();
    await expect(startWithALabDiamond.tabWomensBandInactive).toExist();
});


Then(/^I ensure the Women's Band tab is enabled and pre-selected after selecting a ring$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.imgWomensBandIcon).toExist();
    await expect(startWithALabDiamond.tabWomensBandActive).toExist();
});


//Scenario - 200
Then(/^I validate the Settings tab with the product name, price and Change link$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.tabSettingsClickableSWAS).toExist();
    await expect(startWithADiamond.tabSettingsNameAndPriceDetails).toExist();
    await expect(startWithADiamond.tabSettingsChange).toExist();
});


When(/^I click Change link in Settings tab$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectChangeSettings();
});


Then(/^I ensure it redirects to the page 3 of the setting chosen$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.page3).toExist();
    await expect(startWithADiamond.tabSettingsActive).toExist();
    await expect(startWithADiamond.tabSettingsNameAndPriceDetails).toExist();
    await expect(startWithADiamond.tabSettingsChange).toExist();
    await expect(startWithADiamond.tabWomensBandInactive).toExist();
    await expect(startWithADiamond.btnSelectWomensBandPage3).toExist();
});


//Scenario - 201
Then(/^I ensure the presence of ways to save more section, filters, product display, inline description and SEO section$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.lnkWaysToSaveMore).toExist();
    await expect(startWithALabDiamond.drpEasyDelivery).toExist();
    await expect(startWithALabDiamond.drpWomensBand).toExist();
    await expect(startWithALabDiamond.drpPaymentDefault).toExist();
    await expect(startWithALabDiamond.sctnFilterTab).toExist();
    await expect(startWithALabDiamond.sctnProductDisplay).toExist();
    await expect(startWithALabDiamond.imgProduct).toExist();
    await expect(startWithALabDiamond.txtProductName).toExist();
    await expect(startWithALabDiamond.txtPrice).toExist();
    await expect(startWithALabDiamond.txtShortProductDescription).toExist();
    await expect(startWithALabDiamond.sctnInlineDescription).toExist();
    await expect(startWithALabDiamond.sctnAboutOurCustomProducts).toExist();
    const startWithADiamond = new Page2;
    await expect(startWithADiamond.lnkFilterShape).toExist();
    await expect(startWithADiamond.lnkFilterSortBy).toExist();
});


//Scenario - 202
When(/^I hover other element in page$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.hoverLogin();
});


Then(/^I ensure the 14K White gold metal tag is displayed by default$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.tag14kWg).toExist();
    await expect(startWithALabDiamond.txtInlineDescription14kWg).toExist();
});


When(/^I go back to the page 3 of the chosen ring and choose 10K Black gold metal$/, async() => {
	await browser.back();
    const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.select10kBg();
});


When(/^I scroll down the page 2$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.scrollPage2()
});


Then(/^I ensure the 10K Black gold metal tag is displayed in the page 2 of matching women's bands$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.tag10kBg).toExist();
    await expect(startWithALabDiamond.txtInlineDescription10kBg).toExist();
});


//Scenario - 203
Then(/^I ensure the page 3 of women's band with the tab and ways to save more section is displayed$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.page3).toExist();
    await expect(startWithALabDiamond.pricePage3).toExist();
    await expect(startWithALabDiamond.imgPage3).toExist();
    await expect(startWithALabDiamond.sctnProductPage3).toExist();
    await expect(startWithALabDiamond.lnkWaysToSaveMore).toExist();
    await expect(startWithALabDiamond.drpDeliveryDefault).toExist();
    await expect(startWithALabDiamond.drpWomensBand).toExist();
    await expect(startWithALabDiamond.drpPaymentDefault).toExist();
});


//Scenario - 204
Then(/^I verify the matching womens band text in short description and product details section$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.txtShortDescWomensBand).toExist();
    await expect(startWithADiamond.headingProductDetailsWomensBand).toExist();
});


//Scenario - 205
When(/^I click Select Men's Band button$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.clickSelectMensBand();
});


Then(/^I verify the mens ring text in short description and product details section$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.txtShortDescMensBand).toExist();
    await expect(startWithADiamond.headingProductDetailsMensRing).toExist();
});


//Scenario - 206
When(/^I select Change link in the Women's Band tab$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectChangeWomensBand();
});


When(/^I change the metal type of women's band to 10K White gold metal$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.select10kWg();
});


When(/^I click cart icon$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectCart();
});


Then(/^I ensure the updated women's band is added to cart$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.cartWomensBandMetalType).toExist();
});


//Scenario - 207
Then(/^I ensure Select Men's Band button is displayed in page 3$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.btnAddToCart).not.toExist();
    await expect(startWithADiamond.btnSelectMensBandPage3).toExist();
});


//Scenario - 208
Then(/^I ensure it redirects to page 2 of matching men's bands and breadcrumb updates accordingly$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.ringStartWithDiamondPage2Banner).toExist();
    await expect(startWithALabDiamond.subHeadingStartWithDiamond).toExist();
    await expect(startWithALabDiamond.sctnBreadcrumb).toExist();
    await expect(startWithALabDiamond.lnkHomeBreadcrumb).toExist();
    await expect(startWithALabDiamond.lnkEngagementRingBreadcrumb).toExist();
    await expect(startWithALabDiamond.lnkMakeYourDiamondEngagementRingBreadcrumb).toExist();
});


//Scenario - 209
Then(/^I ensure the Men's Band tab is displayed with icon and disabled$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.imgMensBandIcon).toExist();
    await expect(startWithADiamond.tabMensBandInactive).toExist();
});


Then(/^I ensure the Men's Band tab is enabled and pre-selected after selecting a ring$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.imgMensBandIcon).toExist();
    await expect(startWithADiamond.tabMensBandActive).toExist();
});


//Scenario - 211
Then(/^I ensure it redirects from men's bands to the page 3 of the setting chosen$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.page3).toExist();
    await expect(startWithALabDiamond.tabSettingsActive).toExist();
    await expect(startWithALabDiamond.tabSettingsNameAndPriceDetails).toExist();
    await expect(startWithALabDiamond.tabSettingsChange).toExist();
    await expect(startWithALabDiamond.tabMensBandInactive).toExist();
    await expect(startWithALabDiamond.btnSelectMensBandPage3).toExist();
});


//Scenario - 212
Then(/^I ensure the presence of ways to save more section, multiple filters, product display, inline description and SEO section$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.lnkWaysToSaveMore).toExist();
    await expect(startWithALabDiamond.drpEasyDelivery).toExist();
    await expect(startWithALabDiamond.drpMensBand).toExist();
    await expect(startWithALabDiamond.drpPaymentDefault).toExist();
    await expect(startWithALabDiamond.sctnFilterTab).toExist();
    await expect(startWithALabDiamond.sctnProductDisplay).toExist();
    await expect(startWithALabDiamond.imgProduct).toExist();
    await expect(startWithALabDiamond.txtProductName).toExist();
    await expect(startWithALabDiamond.txtPrice).toExist();
    await expect(startWithALabDiamond.txtShortProductDescription).toExist();
    await expect(startWithALabDiamond.sctnInlineDescription).toExist();
    await expect(startWithALabDiamond.sctnAboutOurCustomProducts).toExist();
    const startWithADiamond = new Page2;
    await expect(startWithADiamond.lnkFilterStone).toExist();
    await expect(startWithADiamond.lnkFilterShape).toExist();
    await expect(startWithADiamond.lnkFilterCaratRange).toExist();
    await expect(startWithADiamond.lnkFilterMetal).toExist();
    await expect(startWithADiamond.lnkFilterSortBy).toExist();
});


Then(/^I ensure it redirects to men's rings reviews page$/, async() => {
    const startWithALabDiamond = await browser.getUrl();
    await expect(startWithALabDiamond).toEqual(data.Reviews.MensRings);
});


//Scenario - 213
When(/^I click Free 100 Day Returns link$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectFree100DayReturns();
});


Then(/^I ensure the Returns Text Link redirects to the respective page$/, async() => {
	const returnsText = await browser.getUrl();
    await expect(returnsText).toEqual(data.Reviews.ReturnspolicyMYOJ);
});


When(/^I browse back and select Free Global Shipping link$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectFreeGlobalShipping();
});


Then(/^I ensure the Free shipping Text Link redirects to the respective page$/, async() => {
	const returnsText = await browser.getUrl();
    await expect(returnsText).toEqual(data.Reviews.ShippingpolicyMYOJ);
});


When(/^I browse back and select Lab Certification link$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectLabCertification();
});


Then(/^I ensure Lab Certification Link redirects to the respective page$/, async() => {
    const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.whyChooseDiamondereCertification).toExist();
});


When(/^I browse back and select Free Resizing & Warranty link$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectFreeResizingAndWarranty();
});


Then(/^I ensure the Resizing Text Link redirects to the respective page$/, async() => {
	const returnsText = await browser.getUrl();
    await expect(returnsText).toEqual(data.Reviews.ResizingpolicyMYOJ);
});


//Scenario - 214
Then(/^I ensure the VVS Diamond tag is displayed$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.tagVVSDiamond).toExist();
    await expect(startWithADiamond.txtInlineDescriptionVVSDiamond).toExist();
});


When(/^I select Black Diamond under stone filter$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectBlackDiamond();
});


Then(/^I ensure Black Diamond men's rings are displayed$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.tagBlackDiamond).toExist();
});


When(/^I select VVS Diamond again under stone filter$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.reSelectVVSDiamond();
});


//Scenario - 215
Then(/^I ensure the page 3 of Men's band with the tab and ways to save more section is displayed$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.page3).toExist();
    await expect(startWithALabDiamond.pricePage3).toExist();
    await expect(startWithALabDiamond.imgPage3).toExist();
    await expect(startWithALabDiamond.sctnProductPage3).toExist();
    await expect(startWithALabDiamond.lnkWaysToSaveMore).toExist();
    await expect(startWithALabDiamond.drpDeliveryDefault).toExist();
    await expect(startWithALabDiamond.drpMensBand).toExist();
    await expect(startWithALabDiamond.drpPaymentDefault).toExist();
});


//Scenario - 217
When(/^I select Additional Men's Ring option under Ways to Save More$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectAdditionalMensRing();
});


Then(/^I ensure Add Another Men's Ring button is displayed in page 3$/, async() => {
    const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.btnAddToCart).not.toExist();
    await expect(startWithADiamond.btnAddAnotherMensRingPage3).toExist();
});


//Scenario - 218
When(/^I click Add Another Men's Ring button$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.clickAddAnotherMensRingBand();
});


Then(/^I ensure it redirects to Make Your Diamond Men's Rings page$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.mensSWSBanner).toExist();
    await expect(startWithALabDiamond.mensSWSSubHeading).toExist();
});


//Scenario - 219
Then(/^I ensure the presence of ways to save more section, heading tab, filters, product display with Setting Price text, inline description and SEO section$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.lnkWaysToSaveMore).toExist();
    await expect(startWithADiamond.drpDeliveryDefault).toExist();
    await expect(startWithADiamond.drpBandDefault).toExist();
    await expect(startWithADiamond.drpPaymentDefault).toExist();
    await expect(startWithADiamond.tabSettingsActiveAdditional).toExist();
    await expect(startWithADiamond.imgMensBandIcon).toExist();
    await expect(startWithADiamond.tabDiamondInactiveSWAS).toExist();
    await expect(startWithADiamond.sctnFilterTab).toExist();
    await expect(startWithADiamond.sctnProductDisplay).toExist();
    await expect(startWithADiamond.imgProduct).toExist();
    await expect(startWithADiamond.txtProductName).toExist();
    await expect(startWithADiamond.txtPrice).toExist();
    await expect(startWithADiamond.txtSettingPrice).toExist();
    await expect(startWithADiamond.txtShortProductDescription).toExist();
    await expect(startWithADiamond.sctnInlineDescription).toExist();
    await expect(startWithADiamond.sctnAboutOurCustomProducts).toExist();
    await expect(startWithADiamond.sctnFilterTab).toExist();
    const startWithALabDiamond = new Page2;
    await expect(startWithALabDiamond.lnkFilterStone).toExist();
    await expect(startWithALabDiamond.optnDiamond).toExist();
    await expect(startWithALabDiamond.optnVVSDiamond).toExist();
    await expect(startWithALabDiamond.optnLabDiamond).toExist();
    await expect(startWithALabDiamond.lnkFilterShape).toExist();
    await expect(startWithALabDiamond.lnkFilterMetal).toExist();
    await expect(startWithALabDiamond.lnkFilterSortBy).toExist();
});


//Scenario - 220
Then(/^I ensure the page 3 of additional men's ring with the tab and ways to save more section is displayed$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.lnkWaysToSaveMore).toExist();
    await expect(startWithALabDiamond.drpDeliveryDefault).toExist();
    await expect(startWithALabDiamond.drpBandDefault).toExist();
    await expect(startWithALabDiamond.drpPaymentDefault).toExist();
    await expect(startWithALabDiamond.tabSettingsActiveSWAS).toExist();
    await expect(startWithALabDiamond.tabDiamondInactiveSWAS).toExist();
    await expect(startWithALabDiamond.page3).toExist();
    await expect(startWithALabDiamond.pricePage3).toExist();
    await expect(startWithALabDiamond.imgPage3).toExist();
    await expect(startWithALabDiamond.sctnProductPage3).toExist();
    await expect(startWithALabDiamond.txtSettingPricePage3).toExist();
});


//Scenario - 221
Then(/^I ensure the custom diamond is selected by default in stone options and Add Diamond to complete message is displayed$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.txtShortProductDescriptionPage3).toExist();
    await expect(startWithADiamond.txtStoneName).toExist();
    await expect(startWithADiamond.txtStoneDetails).toExist();
    await expect(startWithADiamond.txtAddDiamondToComplete).toExist();
    await expect(startWithADiamond.txtTypeProductDetails).toExist();
    await expect(startWithADiamond.txtSizeProductDetails).toExist();
    await expect(startWithADiamond.txtWeightProductDetails).toExist();
});


//Scenario - 222
Then(/^I validate the presence of request custom order and Select Diamond buttons$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.btnReqCusOrder).toExist();
    await expect(startWithALabDiamond.btnSelectDiamondPage3).toExist();
});


When(/^I click Select Diamond button$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await startWithALabDiamond.clickSelectDiamond();
});


Then(/^I ensure it redirects to diamond listing page with the applicable filters and updated Settings tab$/, async() => {
	const startWithALabDiamond = new MYOJ;
    await expect(startWithALabDiamond.sctnBreadcrumb).toExist();
    await expect(startWithALabDiamond.lnkHomeBreadcrumb).toExist();
    await expect(startWithALabDiamond.lnkLooseDiamondsBreadcrumb).toExist();
    await expect(startWithALabDiamond.txtNoOfDesigns).toExist();
    await expect(startWithALabDiamond.tabSettingsClickableSWAS).toExist();
    await expect(startWithALabDiamond.tabSettingsNameAndPriceDetails).toExist();
    await expect(startWithALabDiamond.tabSettingsChange).toExist();
});


//Scenario - 223
Then(/^I ensure the Diamond tab is enabled and pre-selected after selecting a product$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.tabDiamondActiveSWAS).toExist();
});


Then(/^I ensure it redirects to the page 3 of the setting$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.btnSelectDiamondPage3).toExist();
    await expect(startWithADiamond.tabSettingsNameAndPriceDetails).toExist();
    await expect(startWithADiamond.tabSettingsChange).toExist();
});


//Scenario - 224
When(/^I click the Add Diamond and Checkout button in the diamond details page$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.clickAddDiamondAndCheckout();
});


Then(/^I ensure the details of the chosen diamond along with Change link is displayed in the Diamond tab$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.tabDiamondClickableSWAS).toExist();
    await expect(startWithADiamond.tabDiamondCtsAndPriceDetails).toExist();
    await expect(startWithADiamond.tabDiamondChange).toExist();
    await expect(startWithADiamond.imgDiamondSelectedIcon).toExist();
});


//Scenario - 225
When(/^I select Start with a Setting under Rings menu$/, async() => {
	const startWithASetting = new MYOJ;
    startWithASetting.selectRingsSwas();
});


Then(/^I ensure the Make Your Diamond Engagement Ring page is displayed for settings with the banner$/, async() => {
	const startWithASetting = new MYOJ;
    await expect(startWithASetting.ringsStartWithSetting).toExist();
    await expect(startWithASetting.ringsStartWithSettingSubHeading).toExist();
    const ringsStartWithASetting = await browser.getUrl();
    await expect(ringsStartWithASetting).toEqual(data.StartWithASettingLinks.Rings);
});


When(/^I select Start with a Setting under Engagement menu$/, async() => {
	const startWithASetting = new MYOJ;
    startWithASetting.selectEngagementSwas();
});


Then(/^I ensure the page is displayed for settings with the banner$/, async() => {
	const startWithASetting = new MYOJ;
    await expect(startWithASetting.engagementSWSBanner).toExist();
    await expect(startWithASetting.engagementSWSSubHeading).toExist();
    const ringsStartWithASetting = await browser.getUrl();
    await expect(ringsStartWithASetting).toEqual(data.StartWithASettingLinks.Engagement);
});


When(/^I select Start with a Setting under Earrings menu$/, async() => {
	const startWithASetting = new MYOJ;
    startWithASetting.selectEarringsSwas();
});


Then(/^I ensure the Make Your Diamond Earrings page is displayed for settings with the banner$/, async() => {
	const startWithASetting = new MYOJ;
    await expect(startWithASetting.earringsSWSBanner).toExist();
    await expect(startWithASetting.earringsSWSSubHeading).toExist();
    const ringsStartWithASetting = await browser.getUrl();
    await expect(ringsStartWithASetting).toEqual(data.StartWithASettingLinks.Earrings);
});


When(/^I select Start with a Setting under Necklaces menu$/, async() => {
	const startWithASetting = new MYOJ;
    startWithASetting.selectNecklacesSwas();
});


Then(/^I ensure the Make Your Diamond Necklaces page is displayed for settings with the banner$/, async() => {
	const startWithASetting = new MYOJ;
    await expect(startWithASetting.necklacesSWSBanner).toExist();
    await expect(startWithASetting.necklacesSWSSubHeading).toExist();
    const ringsStartWithASetting = await browser.getUrl();
    await expect(ringsStartWithASetting).toEqual(data.StartWithASettingLinks.Necklaces);
});


When(/^I select Start with a Setting under Men's menu$/, async() => {
	const startWithASetting = new MYOJ;
    startWithASetting.selectMensRingsSwas();
});


Then(/^I ensure the Make Your Diamond Men's Rings page is displayed for settings with the banner$/, async() => {
	const startWithASetting = new MYOJ;
    await expect(startWithASetting.mensSWSBanner).toExist();
    await expect(startWithASetting.mensSWSSubHeading).toExist();
    const ringsStartWithASetting = await browser.getUrl();
    await expect(ringsStartWithASetting).toEqual(data.StartWithASettingLinks.Mens);
});


//Scenario - 226
Given(/^I browse Start with a Setting page of Rings menu$/, async() => {
	await browser.url(dmd.config.ringsSWASUrl);
    await BrowserUtil.wait(8)
});


Then(/^I verify the Settings tab with icon is enabled and pre-selected and the diamond tab is disabled$/, async() => {
	const startWithASetting = new MYOJ;
    await expect(startWithASetting.sctnHeadingTab).toExist();
    await expect(startWithASetting.tabSettingsActiveSWAS).toExist();
    await expect(startWithASetting.tabDiamondInactiveSWAS).toExist();
    await expect(startWithASetting.imgDiamondIcon).toExist();
    await expect(startWithASetting.sctnBreadcrumb).toExist();
    await expect(startWithASetting.txtNoOfDesigns).toExist();
});


When(/^I click Home and Engagement Ring links in breadcrumb with available number of diamonds$/, async() => {
	const startWithASetting = new MYOJ;
    startWithASetting.selectLinkHome();
    startWithASetting.selectRingsBreadcrumb();
});


When(/^I browse Start with a Setting page of Earrings menu$/, async() => {
	await browser.url(dmd.config.earringsSWASUrl);
    await BrowserUtil.wait(8)
});


When(/^I click Home and Earrings links in breadcrumb with available number of diamonds$/, async() => {
	const startWithASetting = new MYOJ;
    startWithASetting.selectLinkHome();
    startWithASetting.selectEarringsBreadcrumb();
});


When(/^I browse Start with a Setting page of Necklaces menu$/, async() => {
	await browser.url(dmd.config.necklacesSWASUrl);
    await BrowserUtil.wait(8)
});


When(/^I click Home and Necklaces links in breadcrumb with available number of diamonds$/, async() => {
	const startWithASetting = new MYOJ;
    startWithASetting.selectLinkHome();
    startWithASetting.selectNecklacesBreadcrumb();
});


When(/^I browse Start with a Setting page of Men's menu$/, async() => {
	await browser.url(dmd.config.mensSWASUrl);
    await BrowserUtil.wait(8)
});


When(/^I click Home and Men's Rings links in breadcrumb with available number of diamonds$/, async() => {
	const startWithASetting = new MYOJ;
    startWithASetting.selectLinkHome();
    startWithASetting.selectMensRingsBreadcrumb();
});


//Scenario - 227
When(/^I scroll to product display$/, async() => {
	const startWithASetting = new MYOJ;
    startWithASetting.scrollToProduct();
});


Then(/^I ensure the price of the product in setting page reduces by 1.5%$/, async() => {
	const startWithASetting = new MYOJ;
    await expect(startWithASetting.txtStrikedOutPrice).toExist();
});


//Scenario - 228
Then(/^I ensure the presence of filters, product display, inline description and SEO section$/, async() => {
    const startWithASetting = new MYOJ;
    await expect(startWithASetting.sctnProductDisplay).toExist();
    await expect(startWithASetting.imgProduct).toExist();
    await expect(startWithASetting.txtProductName).toExist();
    await expect(startWithASetting.txtPrice).toExist();
    await expect(startWithASetting.txtShortProductDescription).toExist();
    await expect(startWithASetting.sctnInlineDescription).toExist();
    await expect(startWithASetting.sctnAboutOurCustomProducts).toExist();
    await expect(startWithASetting.sctnFilterTab).toExist();
    const startWithALabDiamond = new Page2;
    await expect(startWithALabDiamond.lnkFilterStyle).toExist();
    await expect(startWithALabDiamond.lnkFilterStone).toExist();
    await expect(startWithALabDiamond.optnDiamond).toExist();
    await expect(startWithALabDiamond.optnVVSDiamond).toExist();
    await expect(startWithALabDiamond.optnLabDiamond).toExist();
    await expect(startWithALabDiamond.lnkFilterShape).toExist();
    await expect(startWithALabDiamond.lnkFilterMetal).toExist();
    await expect(startWithALabDiamond.lnkFilterSortBy).toExist();
});


//Scenario - 229
Then(/^I ensure Setting Price is displayed in the product details$/, async() => {
	const startWithASetting = new MYOJ;
    await expect(startWithASetting.txtSettingPrice).toExist();
});


//Scenario - 230
Then(/^I ensure it redirects to page 3 of the chosen setting$/, async() => {
	const startWithASetting = new MYOJ;
    await expect(startWithASetting.page3).toExist();
    await expect(startWithASetting.txtShortProductDescriptionPage3).toExist();
    await expect(startWithASetting.pricePage3).toExist();
    await expect(startWithASetting.imgPage3).toExist();
    await expect(startWithASetting.sctnProductPage3).toExist();
    await expect(startWithASetting.txtSettingPricePage3).toExist();
});


//Scenario - 234
When(/^I click Select Men's Band button in Diamond Details Page$/, async() => {
	const startWithASetting = new MYOJ;
    startWithASetting.clickSelectMensBandDDP();
});


Then(/^I ensure it redirects to page 2 of men's bands with the heading tab and ways to save more sections$/, async() => {
	const startWithASetting = new MYOJ;
    await expect(startWithASetting.lnkWaysToSaveMore).toExist();
    await expect(startWithASetting.drpDeliveryDefault).toExist();
    await expect(startWithASetting.drpMensBand).toExist();
    //await expect(startWithASetting.drpPaymentDefault).toExist();
    await expect(startWithASetting.sctnHeadingTab).toExist();
    await expect(startWithASetting.tabSettingsClickableSWAS).toExist();
    await expect(startWithASetting.tabSettingsNameAndPriceDetails).toExist();
    await expect(startWithASetting.tabSettingsChange).toExist();
    //await expect(startWithASetting.tabDiamondClickableSWAS).toExist();
    await expect(startWithASetting.tabDiamondCtsAndPriceDetails).toExist();
    await expect(startWithASetting.tabDiamondChange).toExist();
    await expect(startWithASetting.imgMensBandIcon).toExist();
    await expect(startWithASetting.tabMensBandActive).toExist();
});


//Scenario - 235
Then(/^I ensure the presence of multiple filters, product display, inline description and SEO section$/, async() => {
	const startWithASetting = new MYOJ;
    await expect(startWithASetting.sctnFilterTab).toExist();
    await expect(startWithASetting.sctnProductDisplay).toExist();
    await expect(startWithASetting.imgProduct).toExist();
    await expect(startWithASetting.txtProductName).toExist();
    await expect(startWithASetting.txtPrice).toExist();
    await expect(startWithASetting.txtShortProductDescription).toExist();
    await expect(startWithASetting.sctnInlineDescription).toExist();
    await expect(startWithASetting.sctnAboutOurCustomProducts).toExist();
    const startWithALabDiamond = new Page2;
    await expect(startWithALabDiamond.lnkFilterStone).toExist();
    await expect(startWithALabDiamond.lnkFilterCaratRange).toExist();
    await expect(startWithALabDiamond.lnkFilterShape).toExist();
    await expect(startWithALabDiamond.lnkFilterMetal).toExist();
    await expect(startWithALabDiamond.lnkFilterSortBy).toExist();
});


//Scenario - 237
When(/^I go back to the page 3 of the chosen ring and choose 10K White gold metal$/, async() => {
	await browser.back();
    await BrowserUtil.wait(5)
    const startWithASetting = new MYOJ;
    startWithASetting.select10kWg();
});


Then(/^I ensure the Update Men's Band button is displayed$/, async() => {
	const startWithASetting = new MYOJ;
    await expect(startWithASetting.btnUpdateMensBand).toExist();
});


When(/^I click Update Men's Band button$/, async() => {
	const startWithASetting = new MYOJ;
    startWithASetting.selectUpdateMensBand();
});


Then(/^I ensure the updated men's band product is added to cart and redirects to shopping cart$/, async() => {
	const startWithASetting = new MYOJ;
    await expect(startWithASetting.cartMensBandMetalType).toExist();
});


//Scenario - 238
When(/^I click Select Women's Band button in Diamond Details Page$/, async() => {
	const startWithASetting = new MYOJ;
    startWithASetting.clickSelectWomensBandDDP();
});


Then(/^I ensure it redirects to page 2 of women's bands with the heading tab and ways to save more sections$/, async() => {
	const startWithASetting = new MYOJ;
    await expect(startWithASetting.lnkWaysToSaveMore).toExist();
    //await expect(startWithASetting.drpDeliveryDefault).toExist();
    await expect(startWithASetting.drpWomensBand).toExist();
    //await expect(startWithASetting.drpPaymentDefault).toExist();
    await expect(startWithASetting.sctnHeadingTab).toExist();
    await expect(startWithASetting.tabSettingsClickable).toExist();
    await expect(startWithASetting.tabSettingsNameAndPriceDetails).toExist();
    await expect(startWithASetting.tabSettingsChange).toExist();
    //await expect(startWithASetting.tabDiamondClickableSWAS).toExist();
    await expect(startWithASetting.tabDiamondCtsAndPriceDetails).toExist();
    await expect(startWithASetting.tabDiamondChange).toExist();
    await expect(startWithASetting.imgWomensBandIcon).toExist();
    await expect(startWithASetting.tabWomensBandActive).toExist();
});


//Scenario - 239
Then(/^I verify the presence of filters, product display, inline description and SEO section$/, async() => {
	const startWithASetting = new MYOJ;
    await expect(startWithASetting.sctnFilterTab).toExist();
    await expect(startWithASetting.sctnProductDisplay).toExist();
    await expect(startWithASetting.imgProduct).toExist();
    await expect(startWithASetting.txtProductName).toExist();
    await expect(startWithASetting.txtPrice).toExist();
    await expect(startWithASetting.txtShortProductDescription).toExist();
    await expect(startWithASetting.sctnInlineDescription).toExist();
    await expect(startWithASetting.sctnAboutOurCustomProducts).toExist();
    const startWithALabDiamond = new Page2;
    await expect(startWithALabDiamond.lnkFilterShape).toExist();
    await expect(startWithALabDiamond.lnkFilterSortBy).toExist();
});


//Scenario - 241
Then(/^I ensure the Update Women's Band button is displayed$/, async() => {
	const startWithASetting = new MYOJ;
    await expect(startWithASetting.btnUpdateWomensBand).toExist();
});


When(/^I click Update Women's Band button$/, async() => {
	const startWithASetting = new MYOJ;
    startWithASetting.selectUpdateWomensBand();
});


Then(/^I ensure the updated women's band product is added to cart and redirects to shopping cart$/, async() => {
	const startWithASetting = new MYOJ;
    await expect(startWithASetting.cartUpdatedWomensBand).toExist();
});


//Scenario - 243
When(/^I select Loose Diamonds in the breadcrumb$/, async() => {
	const looseDiamonds = new MYOJ;
    await looseDiamonds.selectLinkLooseDiamonds();
});


Then(/^I ensure the Loose Diamonds page is displayed with the filters and the diamond listing table$/, async() => {
	const looseDiamonds = new MYOJ;
    await expect(looseDiamonds.sctnFilters).toExist();
    await expect(looseDiamonds.Alldiamondstab).toExist();
    const looseLabDiamonds = await browser.getUrl();
    await expect(looseLabDiamonds).toEqual(data.LooseDiamondsLinks.LooseDiamonds);
});


When(/^I select Loose Lab Diamonds in the breadcrumb$/, async() => {
	const looseLabDiamonds = new MYOJ;
    await looseLabDiamonds.selectLinkLooseLabDiamonds();
});


Then(/^I ensure the Loose Lab Diamonds page is displayed with the filters and the diamond listing table$/, async() => {
	const looseLabDiamonds = new MYOJ;
    await expect(looseLabDiamonds.sctnFilters).toExist();
    await expect(looseLabDiamonds.AllLabdiamondstab).toExist();
    const looseDiamonds = await browser.getUrl();
    await expect(looseDiamonds).toEqual(data.LooseDiamondsLinks.LooseLabDiamonds);
});


//Scenario - 244
Then(/^I ensure the number of diamonds listed for the search is displayed near the breadcrumb$/, async() => {
	const looseLabDiamonds = new MYOJ;
    await expect(looseLabDiamonds.sctnBreadcrumb).toExist();
    await expect(looseLabDiamonds.lnkHomeBreadcrumb).toExist();
    await expect(looseLabDiamonds.txtNoOfDesigns).toExist();
});


//Scenario - 245
Then(/^I ensure the Ways to Save More text is not present with the filters$/, async() => {
	const looseLabDiamonds = new MYOJ;
    await expect(looseLabDiamonds.sctnWaysToSaveMore).not.toExist();
    await expect(looseLabDiamonds.lnkWaysToSaveMore).not.toExist();
    await expect(looseLabDiamonds.drpDeliveryDefault).not.toExist();
    await expect(looseLabDiamonds.drpPaymentDefault).not.toExist();
    await expect(looseLabDiamonds.drpBandDefault).not.toExist();
});


//Scenario - 246
When(/^I hover over each filter name in Loose Diamonds page$/, async() => {
	const looseLabDiamonds = new MYOJ;
    await looseLabDiamonds.hoveringFiltersLooseDiamonds();
});


//Scenario - 247
Then(/^I ensure the shape filter options are displayed$/, async() => {
	const looseLabDiamonds = new MYOJ;
    await expect(looseLabDiamonds.imglnkAsscher).toExist();
    await expect(looseLabDiamonds.imglnkBaguette).toExist();
    await expect(looseLabDiamonds.imglnkCushion).toExist();
    await expect(looseLabDiamonds.imglnkEmerald).toExist();
    await expect(looseLabDiamonds.imglnkHeart).toExist();
    await expect(looseLabDiamonds.imglnkHexagonal).toExist();
    await expect(looseLabDiamonds.imglnkMarquise).toExist();
    await expect(looseLabDiamonds.imglnkOval).toExist();
    await expect(looseLabDiamonds.imglnkPear).toExist();
    await expect(looseLabDiamonds.imglnkPrincess).toExist();
    await expect(looseLabDiamonds.imglnkRadiant).toExist();
    await expect(looseLabDiamonds.imglnkRosecut).toExist();
    await expect(looseLabDiamonds.imglnkTriangle).toExist();
    await expect(looseLabDiamonds.imglnkSquare).toExist();
    await expect(looseLabDiamonds.imglnkround).toExist();
});


//Scenario - 248
When(/^I click View Diamond button in the table$/, async() => {
	const looseDiamonds = new MYOJ;
    await looseDiamonds.clickViewDiamondButton();
});


Then(/^I ensure the Add to Cart, Select with Ring and Select with Necklace buttons are displayed in the Diamond details page$/, async() => {
	const looseLabDiamonds = new MYOJ;
    await expect(looseLabDiamonds.btnAddToCartLooseDiamonds).toExist();
    await expect(looseLabDiamonds.btnSelectWithRing).toExist();
    await expect(looseLabDiamonds.btnSelectWithNecklace).toExist();
});


//Scenario - 249
When(/^I select Add to Cart button in the Diamond Details Page$/, async() => {
	const looseLabDiamonds = new MYOJ;
    await looseLabDiamonds.selectAddToCartLooseDiamonds();
});


Then(/^I ensure the order summary popup is displayed$/, async() => {
	const looseLabDiamonds = new MYOJ;
    await expect(looseLabDiamonds.popupOrderSummary).toExist();
    await expect(looseLabDiamonds.imgLooseDiamondOrderSummary).toExist();
    await expect(looseLabDiamonds.txtLooseDiamondShapeOrderSummary).toExist();
    await expect(looseLabDiamonds.txtLooseDiamondPriceOrderSummary).toExist();
    await expect(looseLabDiamonds.txtLooseDiamondDetailsOrderSummary).toExist();
    await expect(looseLabDiamonds.btnCheckOut).toExist();
});


When(/^I select Select with Ring button in the Diamond Details Page$/, async() => {
	const looseLabDiamonds = new MYOJ;
    await looseLabDiamonds.clickSelectWithRing();
});


Then(/^I ensure the Start with a Setting page of Rings is displayed$/, async() => {
    const looseLabDiamonds = new MYOJ;
    await expect(looseLabDiamonds.ringStartLabDiamondPage2Banner).toExist();
    await expect(looseLabDiamonds.subHeadingStartLabDiamond).toExist();
});


When(/^I select Select with Necklace button in the Diamond Details Page$/, async() => {
	const looseLabDiamonds = new MYOJ;
    await looseLabDiamonds.clickSelectWithNecklace();
});


Then(/^I ensure the Start with a Setting page of Necklaces is displayed$/, async() => {
	const looseLabDiamonds = new MYOJ;
    await expect(looseLabDiamonds.necklacesSWADPage2Banner).toExist();
    await expect(looseLabDiamonds.necklacesSWADsubHeading).toExist();
});


//Scenario - 260
When(/^I click Change link in the Diamond tab from the page 3 of Women's Band$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectChangeDiamond();
});


When(/^I select Quick view dropdown of second row$/, async() => {
	const startWithADiamond = new MYOJ;
    await startWithADiamond.selectQuickViewRow2();
});


Then(/^I ensure Select Men's Band button is displayed in the Diamond Details Page$/, async() => {
	const startWithADiamond = new MYOJ;
    await expect(startWithADiamond.btnSelectMensBand).toExist();
});


Then(/^I ensure it redirects to page 2 of men's bands along with the heading tab and ways to save more sections$/, async() => {
	const startWithASetting = new MYOJ;
    await expect(startWithASetting.lnkWaysToSaveMore).toExist();
    await expect(startWithASetting.drpDeliveryDefault).toExist();
    await expect(startWithASetting.drpBothBands).toExist();
    await expect(startWithASetting.drpPaymentDefault).toExist();
    await expect(startWithASetting.sctnHeadingTab).toExist();
    await expect(startWithASetting.tabSettingsClickable).toExist();
    await expect(startWithASetting.tabSettingsNameAndPriceDetails).toExist();
    await expect(startWithASetting.tabSettingsChange).toExist();
    await expect(startWithASetting.tabDiamondClickable).toExist();
    await expect(startWithASetting.tabDiamondCtsAndPriceDetails).toExist();
    await expect(startWithASetting.tabDiamondChange).toExist();
    await expect(startWithASetting.tabWomensBandNameAndPriceDetails).toExist();
    await expect(startWithASetting.tabWomensBandChange).toExist();
    await expect(startWithASetting.tabBothBandsMensBandActive).toExist();
    await expect(startWithASetting.imgMensBandIcon).toExist();
});


//Scenario - 250
Given(/^I browse page 3 of ring Miya$/, async() => {
	await browser.url(dmd.config.PageThreeMiya_url);
    //await BrowserUtil.maximize();
    await BrowserUtil.wait(5)
});


When(/^I click Request Custom Order button in page 3$/, async() => {
	const reqcustom = new MYOJ;
    reqcustom.clickReqCustomBtn();
});


Then(/^I ensure it redirects to Request custom order page$/, async() => {
	const reqcustom = await browser.getUrl();
    await expect(reqcustom).toEqual(data.RequestCustomOrder.RequestCustomorderPage);
});


When(/^I browse page 3 of ring Miya with custom diamond$/, async() => {
	await browser.url(dmd.config.PageThreeCustomMiya_url);
    //await BrowserUtil.maximize();
    await BrowserUtil.wait(5)
});


When(/^I click Request Custom Order button$/, async() => {
	const reqcustom = new MYOJ;
    reqcustom.clickReqCustomBtn();
});


Then(/^I ensure it redirects to request custom order page$/, async() => {
	const reqcustom = await browser.getUrl();
    await expect(reqcustom).toEqual(data.RequestCustomOrder.RequestCustomorderPage);
});


Then(/^I ensure the image details in page 3 are present$/, async() => {
	const reqcustom = new MYOJ;
	await expect(reqcustom.imgMiyaPage3).toExist();
});


When(/^I click Request Custom Order link$/, async() => {
	const reqcustom = new MYOJ;
    reqcustom.clickReqCustomLnk();
});


Then(/^I verify the image present in the request custom order page is as same as the image in page 3$/, async() => {
	const reqcustom = new MYOJ;
	await expect(reqcustom.imgMiyaReqCusOrder).toExist();
});


Then(/^I validate the presence of heading, banner, text, image, product name, and the customization process banner$/,async () => {
	const reqcustom = new MYOJ;
	await expect(reqcustom.txtheadingcreatecustomdesign).toExist();
	await expect(reqcustom.boxbannercustomedesign).toExist();
	await expect(reqcustom.txtbelowbannercustom).toExist();
	await expect(reqcustom.imgproductcustom).toExist();
	await expect(reqcustom.txtbelowimgproductcustom).toExist();
	await expect(reqcustom.txtheadingcustomform).toExist();

});


Then(/^I verify the ring image present in the request custom order page is as same as the image in page 3$/, async() => {
	const reqcustom = new MYOJ;
	await expect(reqcustom.imgproductcustom).toExist();
});


Then(/^I ensure the Name field is displayed in the request custom order form$/, async() => {
	const reqcustom = new MYOJ;
	await expect(reqcustom.boxnamefieldcustom).toExist();
});


When(/^I enter name in the request custom order form$/, async() => {
	const reqcustom = new MYOJ;
	reqcustom.enterName();
});


When(/^I clear the entered data in name field$/, async() => {
	const reqcustom = new MYOJ;
	reqcustom.clearenteredName();
});


Then(/^I ensure the Name field is marked mandatory$/, async() => {
	const reqcustom = new MYOJ;
	await expect(reqcustom.boxnamemandatorycustom).toExist();
});


When(/^I enter special characters and numbers in the name field of request custom order$/, async() => {
	const reqcustom = new MYOJ;
	reqcustom.enterSpecName();
});


Then(/^I ensure the error validation message for the name field is displayed$/, async() => {
	const reqcustom = new MYOJ;
	await expect(reqcustom.boxnamevalidationcustom).toExist();
});


Then(/^I ensure the Email field is displayed in the request custom order form$/, async() => {
	const reqcustom = new MYOJ;
	await expect(reqcustom.boxemailfieldcustom).toExist();
});


When(/^I enter email in the request custom order form$/, async() => {
	const reqcustom = new MYOJ;
	reqcustom.enterEmail();
});


When(/^I clear the entered data in email field$/, async() => {
	const reqcustom = new MYOJ;
	reqcustom.clearenteredEmail();
});


Then(/^I ensure the Email field is marked mandatory$/, async() => {
	const reqcustom = new MYOJ;
	await expect(reqcustom.boxemailmandatorycustom).toExist();
});


When(/^I enter special characters and spaces in the email field$/, async() => {
	const reqcustom = new MYOJ;
	reqcustom.enterSpecEmail();
});


Then(/^I ensure the error validation message for the email field is displayed$/, async() => {
	const reqcustom = new MYOJ;
	await expect(reqcustom.boxemailvalidationcustom).toExist();
});


Then(/^I ensure the Phone field is displayed in the request custom order form$/, async() => {
	const reqcustom = new MYOJ;
	await expect(reqcustom.boxphonefieldcustom).toExist();
});


When(/^I enter phone number in the request custom order form$/, async() => {
	const reqcustom = new MYOJ;
	reqcustom.enterphoneNumber();
});


When(/^I clear the entered data in phone number field$/, async() => {
	const reqcustom = new MYOJ;
	reqcustom.clearenteredphoneNumber();
});


Then(/^I ensure the Phone field is marked mandatory$/, async() => {
	const reqcustom = new MYOJ;
	await expect(reqcustom.boxphonemandatorycustom).toExist();
});


When(/^I enter restricted characters in the Phone field$/, async() => {
	const reqcustom = new MYOJ;
	reqcustom.enterSpecphoneNumber();
});


Then(/^I ensure the error validation message for the phone field is displayed$/, async() => {
	const reqcustom = new MYOJ;
	await expect(reqcustom.boxphonevalidationcustom).toExist();
});


Then(/^I ensure the Customization Request field is displayed in the request custom order form$/, async() => {
	const reqcustom = new MYOJ;
	await expect(reqcustom.boxcustomrequestdescrip).toExist();
});


When(/^I enter Customization Request in the request custom order form$/, async() => {
	const reqcustom = new MYOJ;
	reqcustom.enterCustomReq();
});


When(/^I clear the entered data in Customization Request number field$/, async() => {
	const reqcustom = new MYOJ;
	reqcustom.clearenteredCustomReq();
});


Then(/^I ensure the Customization Request field is marked mandatory$/, async() => {
	const reqcustom = new MYOJ;
	await expect(reqcustom.boxcustomrequestmandatorydescrip).toExist();
});


Then(/^I ensure the upload image button with the accepted format is displayed$/, async() => {
	const reqcustom = new MYOJ;
	await expect(reqcustom.btnuploadimagecustom).toExist();
	await expect(reqcustom.txtimagerestrictioncustom).toExist();
	
});


When(/^I click Submit Customization Request button$/, async() => {
	const reqcustom = new MYOJ;
	reqcustom.clicksubmitCustom();
});


Then(/^I ensure the success popup for the submitted customization request is displayed$/, async() => {
	const reqcustom = new MYOJ;
	await expect(reqcustom.txtsuccesscustom).toExist();
	await expect(reqcustom.txtbelowsuccesscustom).toExist();

});


When(/^I upload image in request custom order form$/, async() => {
	const reqcustom = new MYOJ;
	reqcustom.uploadImageCustom();
});


When(/^I upload invalid image in request custom order form$/, async() => {
	const reqcustom = new MYOJ;
	reqcustom.uploadWrongImageCustom();
});


Then(/^I ensure the error popup for wrong upload is displayed$/, async() => {
	const contactUs = new MYOJ;
    await expect(contactUs.popupErrorWrongFileUpload).toExist();
});

