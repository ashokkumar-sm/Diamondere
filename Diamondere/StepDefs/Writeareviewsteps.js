const { Given, When, Then } = require('@wdio/cucumber-framework');
const BrowserUtil = require('../../CommonUtils/BrowserUtil');
const ElementUtil = require('../../CommonUtils/ElementUtil');
const diamondere = require('../Configs/dmd_' + global.testEnv + '.js');
const reviewpop = require('../PageObjects/Writeareviewpage')
const data = require('../TestData/CA.json');
const { start } = require('chromedriver');


When(/^I enter into page 3 of any product$/, async() => {
	await browser.url(diamondere.config.Writeareviewpage3url);
    // await BrowserUtil.maximize();
});

When(/^I scrolldown to the read reviews section at the bottom$/, async() => {
	const writeareview = new reviewpop;
	await writeareview.movetoreadreview();
});

Then(/^Ensure the Recently purchased text is present$/, async() => {
	const writeareview = new reviewpop;
	await expect(writeareview.txtRecentlyPurchased).toExist();
});

Then(/^Ensure Write a review button is displayed$/, async() => {
	const writeareview = new reviewpop;
	await expect(writeareview.btnWriteAReview).toExist();
});

// Scenario 1:

Given(/^I select Write a review button$/, async() => {
	const writeareview = new reviewpop;
	await writeareview.selectbtnwriteareview();
});

Then(/^Ensure Write a review popup is displayed$/, async() => {
	const writeareview = new reviewpop;
	await expect(writeareview.popupWrtARev).toExist();
});

//Scenario 2:

Then(/^Ensure Product image and write a review for the product text heading is displayed$/, async() => {
	const writeareview = new reviewpop;
	await expect(writeareview.imgreviewpop).toExist();
	await expect(writeareview.txtWriteARev).toExist();
	await expect(writeareview.txtproductname).toExist();
});

//Scenario 3:

Then(/^Ensure Your star text and rating stars are displayed$/, async() => {
	const writeareview = new reviewpop;
	await expect(writeareview.txtUrRating).toExist();
	await expect(writeareview.starRating).toExist();
});

//Scenario 4:

When(/^I click any star$/, async() => {
	const writeareview = new reviewpop;
	await writeareview.selectstarrating();
});

Then(/^Ensure the stars are highlighted upto the selected star$/, async() => {
	const writeareview = new reviewpop;
	await expect(writeareview.fourstarrating).toExist();
});

//Scenario 5:

Then(/^Ensure the Name field is displayed$/, async() => {
	const writeareview = new reviewpop;
	await expect(writeareview.boxnameRevForm).toExist();
});

Then(/^Ensure the EmailId field is displayed$/, async() => {
	const writeareview = new reviewpop;
	await expect(writeareview.boxemailRevForm).toExist();
});

Then(/^Ensure the Location field is displayed$/, async() => {
	const writeareview = new reviewpop;
	await expect(writeareview.boxlocationRevForm).toExist();
});

Then(/^Ensure the Review title field is displayed$/, async() => {
	const writeareview = new reviewpop;
	await expect(writeareview.boxtitleRevForm).toExist();
});

Then(/^Ensure the Your Review comments field is displayed$/, async() => {
	const writeareview = new reviewpop;
	await expect(writeareview.boxurRevCommnts).toExist();
});

Then(/^Ensure the Submit your review button is displayed$/, async() => {
	const writeareview = new reviewpop;
	await expect(writeareview.btnSbmtRev).toExist();
});

//Scenario 6:

When(/^I enter any emailId in EmailId field$/, async() => {
	const writeareview = new reviewpop;
	await writeareview.enteremailIdreview();
});

When(/^I enter any Location in Location field$/, async() => {
	const writeareview = new reviewpop;
	await writeareview.enterlocationreview();
});

When(/^I enter any review title in Review title field$/, async() => {
	const writeareview = new reviewpop;
	await writeareview.enterReviewtitle();
});

When(/^I enter any review comments in Your Review comments field$/, async() => {
	const writeareview = new reviewpop;
	await writeareview.enterReviewcomments();
});

When(/^I select Submit your review button$/, async() => {
	const writeareview = new reviewpop;
	await writeareview.selectSubmitbutton();
});

Then(/^Ensure an error message is displayed under name field and form submission is unsuccessful$/, async() => {
	const writeareview = new reviewpop;
	await expect(writeareview.txtmsgMndtryName).toExist();
});

//Scenario 7:

When(/^I enter any name in Name field$/, async() => {
	const writeareview = new reviewpop;
	await writeareview.enternamereview();
});

Then(/^Ensure an error message is displayed under Star rating field and form submission is unsuccessful$/, async() => {
	const writeareview = new reviewpop;
	await expect(writeareview.txtmsgMndtryRating).toExist();
});

//Scenario 8:

Then(/^Ensure an error message is displayed under EmailId field and form submission is unsuccessful$/, async() => {
	const writeareview = new reviewpop;
	await expect(writeareview.txtmsgMndtryEmail).toExist();
});

//Scenario 9:

Then(/^Ensure an error message is displayed under Location field and form submission is unsuccessful$/, async() => {
	const writeareview = new reviewpop;
	await expect(writeareview.txtmsgMndtryLocatn).toExist();
});

//Scenario 10

Then(/^Ensure an error message is displayed under Review Title field and form submission is unsuccessful$/, async() => {
	const writeareview = new reviewpop;
	await expect(writeareview.txtmsgMndtryRevTitle).toExist();
});

//Scenario 11

Then(/^Ensure an error message is displayed under Your Review comments field and form submission is unsuccessful$/, async() => {
	const writeareview = new reviewpop;
	await expect(writeareview.txtmsgMndtryRevCmnts).toExist();
});

//Scenario 12

When(/^I enter any characters other than letters and space in Name field$/, async() => {
	const writeareview = new reviewpop;
	await writeareview.enterinvalidnamereview();
});

Then(/^Ensure a validation message is displayed under name field$/, async() => {
	const writeareview = new reviewpop;
	await expect(writeareview.txtmsgInvalidname).toExist();
});

//Scenario 13

When(/^I enter any emailid with space and avoid at sign in EmailId field$/, async() => {
	const writeareview = new reviewpop;
	await writeareview.enterinvalidemailIdreview();
});

Then(/^Ensure a validation message is displayed under EmailId field$/, async() => {
	const writeareview = new reviewpop;
	await expect(writeareview.txtmsgInvalidEmail).toExist();
});

//Scenario 14

When(/^I enter any apostrophe or hashtag or dollar or percent or asterisk or any invalid characters in Location field$/, async() => {
	const writeareview = new reviewpop;
	await writeareview.enterinvalidlocationreview();
});

Then(/^Ensure a validation message is displayed under Location field$/, async() => {
	const writeareview = new reviewpop;
	await expect(writeareview.txtmsgInvalidLoctn).toExist();
});

//Scenario 15

When(/^I enter any characters other than letters, numbers and space in Review title field$/, async() => {
	const writeareview = new reviewpop;
	await writeareview.enterinvalidReviewtitle();
});

Then(/^Ensure a validation message is displayed under Review Title field$/, async() => {
	const writeareview = new reviewpop;
	await expect(writeareview.txtmsgInvalidRevtitle).toExist();
});

//Scenario 16

When(/^I enter any characters other than letters, numbers and space in Your Review Comments field$/, async() => {
	const writeareview = new reviewpop;
	await writeareview.enterinvalidReviewcomments();
});

Then(/^Ensure a validation message is displayed under Your Review Comments field$/, async() => {
	const writeareview = new reviewpop;
	await expect(writeareview.txtmsgInvalidRevCmnts).toExist();
});

//Scenario 17

When(/^I enter any name more than 40 characters in Name field$/, async() => {
	const writeareview = new reviewpop;
	await writeareview.entermaxnamereview();
});

Then(/^Ensure the name field accepts only 40 characters$/, async() => {
	const writeareview = new reviewpop;
	const namelimit = await $('//input[@data-vv-name="writeReviewName"]')
	const checknametext = await namelimit.getText();
	await expect(checknametext).not.toEqual(data.WriteReview.MaxName);
});

//Scenario 18

When(/^I enter any emailId more than 40 characters in EmailId field$/, async() => {
	const writeareview = new reviewpop;
	await writeareview.entermaxemailreview();
});

Then(/^Ensure the emailId field accepts only 40 characters$/, async() => {
	const writeareview = new reviewpop;
	const emaillimit = await $('//input[@data-vv-name="writeReviewEmail"]')
	const checkemailtext = await emaillimit.getText();
	await expect(checkemailtext).not.toEqual(data.WriteReview.MaxEmailId);
});

//Scenario 19

When(/^I enter any location text more than 40 characters in location field$/, async() => {
	const writeareview = new reviewpop;
	await writeareview.entermaxlocationreview();
});

Then(/^Ensure the location field accepts only 40 characters$/, async() => {
	const writeareview = new reviewpop;
	const locationlimit = await $('//label[@for="review_location"]')
	const checklocationtext = await locationlimit.getText();
	await expect(checklocationtext).not.toEqual(data.WriteReview.MaxLocation);
});

//Scenario 20

When(/^I enter any text more than 40 characters in Review title field$/, async() => {
	const writeareview = new reviewpop;
	await writeareview.entermaxReviewtitle();
});

Then(/^Ensure the Review title field accepts only 40 characters$/, async() => {
	const writeareview = new reviewpop;
	const reviewtitlelimit = await $('//label[@for="review_title"]')
	const checktitletext = await reviewtitlelimit.getText();
	await expect(checktitletext).not.toEqual(data.WriteReview.MaxReviewtitle);
});

//Scenario 21

When(/^I enter any text more than 200 characters in Your Review Comments field$/, async() => {
	const writeareview = new reviewpop;
	await writeareview.entermaxReviewcomments();
});

Then(/^Ensure the Your Review Comments field accepts only 200 characters$/, async() => {
	const writeareview = new reviewpop;
	const reviewcommentslimit = await $('//textarea[@id="review_comments"]')
	const checkcommentstext = await reviewcommentslimit.getText();
	await expect(checkcommentstext).not.toEqual(data.WriteReview.MaxReviewComments);
});

//Scenario 22

When(/^select the remove button or icon at the top right of the popup$/, async() => {
	const writeareview = new reviewpop;
	await writeareview.selectClosebuttonWAR();
});

Then(/^Ensure the Write a review popup is closed$/, async() => {
	const writeareview = new reviewpop;
	await expect(writeareview.btnWriteAReview).toExist();
});

//Scenario 23

Then(/^Ensure a success message is displayed and the form submission is successful$/, async() => {
	const writeareview = new reviewpop;
	await expect(writeareview.txtheaderSuccessSubmtRev).toExist();
	await expect(writeareview.txtmsgSucc).toExist();
});

When(/^I select close button in success popup$/, async() => {
	const writeareview = new reviewpop;
	await writeareview.selectClosebuttonSuccess();
});

Then(/^Ensure the success popup is closed$/, async() => {
	const writeareview = new reviewpop;
	await expect(writeareview.txtheaderSuccessSubmtRev).not.toExist();
});






