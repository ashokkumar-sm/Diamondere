const { Given, When, Then } = require('@wdio/cucumber-framework');
const BrowserUtil = require('../../CommonUtils/BrowserUtil');
const ElementUtil = require('../../CommonUtils/ElementUtil');
const diamondere = require('../Configs/dmd_' + global.testEnv + '.js');
const maywe = require('../PageObjects/Mayweassistyoupage')
const data = require('../TestData/CA.json');
const { start } = require('chromedriver');

//Background

Then(/^Ensure May we Assist you button is present$/, async() => {
	const assist = new maywe;
    await expect(assist.btnMayWeAssistYou).toExist;
});

//Scenario 1

Given(/^I select May we Assist you button$/, () => {
	const assist = new maywe;
    assist.selectbuttonmaywe();
});

Then(/^Ensure a customer care popup is displayed$/, async() => {
	const assist = new maywe;
    await expect(assist.popupMayWeAssistYou).toExist;
});

//Scenario 2

Then(/^Ensure remove icon is present$/, async() => {
	const assist = new maywe;
    await expect(assist.btnCloseMayWeAssistYou).toExist;
});

When(/^I select remove icon in the popup$/, () => {
	const assist = new maywe;
    assist.selectclosebutton();
});

//Scenario 3:

Then(/^Ensure the customer care popup is closed$/, async() => {
	const assist = new maywe;
    await expect(assist.btnMayWeAssistYou).toExist;
});

Then(/^Ensure the Diamondere logo is displayed$/, async() => {
	const assist = new maywe;
    await expect(assist.txtheadingDiamondereLogo).toExist;
});

Then(/^Ensure the Customer care text heading is displayed$/, async() => {
	const assist = new maywe;
    await expect(assist.txtheadingCustomerCare).toExist;
});

Then(/^Ensure the text below Customer care heading is displayed$/, async() => {
	const assist = new maywe;
    await expect(assist.txtinpopupMayWeAssistYou).toExist;
});

Then(/^Ensure the Name field is displayed in may we assist you popup$/, async() => {
	const assist = new maywe;
    await expect(assist.txtBoxAssistName).toExist;
});

Then(/^Ensure the EmailAddress field is displayed in may we assist you popup$/, async() => {
	const assist = new maywe;
    await expect(assist.txtBoxAssistEmail).toExist;
});

Then(/^Ensure Detail your query field is displayed in may we assist you popup$/, async() => {
	const assist = new maywe;
    await expect(assist.txtBoxAssistQuery).toExist;
});

Then(/^Ensure Submit button is displayed$/, async() => {
	const assist = new maywe;
    await expect(assist.btnAssistSubmit).toExist;
});

Then(/^Ensure cancel button is displayed$/, async() => {
	const assist = new maywe;
    await expect(assist.btnAssistCancel).toExist;
});

//Scenario 4:

When(/^I select cancel button$/, () => {
	const assist = new maywe;
    assist.selectcancelbuttonmaywe();
});

//Scenario 5:

When(/^I enter any email in EmailAddress field in may we assist you popup$/, () => {
	const assist = new maywe;
    assist.enteremailmaywe();
});

When(/^I enter any query in Detail your query field in may we assist you popup$/, () => {
	const assist = new maywe;
    assist.enterquerymaywe();
});

When(/^I select submit button in may we assist you popup$/, () => {
	const assist = new maywe;
    assist.selectsubmitbuttonmaywe();
});

Then(/^Ensure an error message is displayed under Name field and form submission is unsuccessful$/, async() => {
	const assist = new maywe;
    await expect(assist.txtmsgAssistNameMandatory).toExist;
});

//Scenario 6:

When(/^I enter any name in Name field in may we assist you popup$/, () => {
	const assist = new maywe;
    assist.enternamemaywe();
});

Then(/^Ensure an error message is displayed under EmailAddress field and form submission is unsuccessful$/, async() => {
	const assist = new maywe;
    await expect(assist.txtmsgAssistEmailMandatory).toExist;
});

//Scenario 7:

Then(/^Ensure an error message is displayed under Detail your query field and form submission is unsuccessful$/, async() => {
	const assist = new maywe;
    await expect(assist.txtmsgAssistQueryMandatory).toExist;
});

//Scenario 8:

When(/^I enter any characters other than letters and space in Name field in may we assist you popup$/, () => {
	const assist = new maywe;
    assist.enterinvalidnamemaywe();
});

Then(/^Ensure a validation message is displayed under Name field in may we assist you popup$/, async() => {
	const assist = new maywe;
    await expect(assist.txtmsgInvalidNamemaywe).toExist;
});

//Scenario 9:

When(/^I enter any emailid with space and avoid at sign in EmailAddress field in may we assist you popup$/, () => {
	const assist = new maywe;
    assist.enterinvalidemailmaywe();
});

Then(/^Ensure a validation message is displayed under EmailAddress field in may we assist you popup$/, async() => {
	const assist = new maywe;
    await expect(assist.txtmsgInvalidEmailIdmaywe).toExist;
});

//Scenario 10

When(/^I enter any invalid character like double quotation or square bracket in Detail your query field in may we assist you popup$/, () => {
	const assist = new maywe;
    assist.enterinvalidquerymaywe();
});

Then(/^Ensure a validation message is displayed under Detail your query field in may we assist you popup$/, async() => {
	const assist = new maywe;
    await expect(assist.txtmsgInvalidQuerymaywe).toExist;
});

//Scenario 11

When(/^I enter any design link Detail your query field in may we assist you popup$/, () => {
	const assist = new maywe;
    assist.enterdesignlinkinquerymaywe();
});

Then(/^Ensure a success message is displayed and form submission is successful in may we assist you popup$/, async() => {
	const assist = new maywe;
    await expect(assist.popupAssistSuccess).toExist;
});

//Scenario 12:

When(/^I enter any name more than 40 characters in Name field in may we assist you popup$/, () => {
	const assist = new maywe;
    assist.entermaxlimitnamemaywe();
});

Then(/^Ensure the Name field accepts only 40 characters in may we assist you popup$/, async() => {
	const assist = new maywe;
    const maxassistname = await $ ('//input[@id="assist_name"]');
    const checkassistnamelimit = await maxassistname.getText();
    await expect(checkassistnamelimit).not.toEqual(data.MayWeAssistyou.MaxNamemaywe);

}); 

//Scenario 13

When(/^I enter any query more than 200 characters in Detail your query field in may we assist you popup$/, () => {
	const assist = new maywe;
    assist.entermaxlimitquerymaywe();
});

Then(/^Ensure the Detail your query field accepts only 200 characters in may we assist you popup$/, async() => {
	const assist = new maywe;
    const maxassistquery = await $ ('//label[@for="assist_query"]');
    const checkassistquerylimit = await maxassistquery.getText();
    await expect(checkassistquerylimit).not.toEqual(data.MayWeAssistyou.MaxQuerymaywe);
});

//Scenario 14

When(/^I select close button in success popup in may we assist you$/, () => {
	const assist = new maywe;
    assist.selectclosebuttonsuccessassist();
});

Then(/^Ensure the success popup is closed in may we asssit you$/, async() => {
	const assist = new maywe;
    await expect(assist.popupAssistSuccess).not.toExist();
});




