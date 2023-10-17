const { Given, When, Then } = require('@wdio/cucumber-framework');
const BrowserUtil = require('../../CommonUtils/BrowserUtil');
const ElementUtil = require('../../CommonUtils/ElementUtil');
const diamondere = require('../Configs/dmd_' + global.testEnv + '.js');
// const dmd = require('../Configs/dmd_' + global.testEnv + '.js');
const screen = require('../PageObjects/Reviewsscreeningpage');
const data = require('../TestData/CA.json');
const { start } = require('chromedriver');

Then(/^Ensure the Accredited Business icon is displayed$/, async() => {
	const reviewdisplay = new screen;
	await expect(reviewdisplay.lnkaccreditionicon).toExist();
});

When(/^I select Accredited and Aplus icon$/, () => {
	const reviewdisplay = new screen;
	reviewdisplay.selectaccreditionicon();
});
Then(/^Ensure it redirects to the Business bureau Diamondere certification$/, async() => {
	const reviewdisplay = await browser.getUrl();
	await expect(reviewdisplay).toEqual(data.Reviewsscreening.AccreditedBusinessURL);
});

Given(/^I enter into page 3 of any product has more than 6 reviews$/, () => {
	browser.url(diamondere.config.ReviewMorethan6URL);
});

Then(/^Ensure the Read Reviews text, product text and star rating along with the rating number for the product is displayed$/, async() => {
	const reviewdisplay = new screen;
	await expect(reviewdisplay.txtreadreviewsfor).toExist();
	await expect(reviewdisplay.txtproductreadreviewsfor).toExist();
	await expect(reviewdisplay.txtstarratingreadreviewsfor).toExist();
});

Then(/^Ensure the number of reviews given by the customers is displayed$/, async() => {
	const reviewdisplay = new screen;
	await expect(reviewdisplay.txtnumberofreviewsbycustomers).toExist();
});

Then(/^Ensure the star rating given by the customers is present in the review column$/, async() => {
	const reviewdisplay = new screen;
	await expect(reviewdisplay.txtstarratingfirstrow).toExist();
});

Then(/^Ensure all the customer details and their review details are present in the review column$/, async() => {
	const reviewdisplay = new screen;
	await expect(reviewdisplay.txtnamecustomerfirstrow).toExist();
	await expect(reviewdisplay.txtlocationcustomerfirstrow).toExist();
	await expect(reviewdisplay.txtdatecustomerfirstrow).toExist();
	await expect(reviewdisplay.txtreviewtitleandcommentsfirstrow).toExist();
});

Then(/^Ensure the View All Ring Reviews button is present$/, async() => {
	const reviewdisplay = new screen;
	await expect(reviewdisplay.btnViewAll).toExist();
});

When(/^I select View All Ring Reviews button$/, () => {
	const reviewdisplay = new screen;
	reviewdisplay.selectViewallRings();
});

Then(/^Ensure it redirects to the Diamondere rings review page$/, async() => {
	const reviewdisplay = await browser.getUrl();
	await expect(reviewdisplay).toEqual(data.Reviewsscreening.DiamondereRingsReviewURL);
});

Then(/^Ensure the heading Reviews for Diamondere rings is present$/, async() => {
	const reviewdisplay = new screen;
	await expect(reviewdisplay.txtReviewsforDiamondererings).toExist();
});

Then(/^Ensure total star rating and text is displayed$/, async() => {
	const reviewdisplay = new screen;
	await expect(reviewdisplay.txtstarratingReviewsforDiamondererings).toExist();
});

Then(/^Ensure the product image, rating, customer name, location, date, review title and review comments are displayed for the customer$/, async() => {
	const reviewdisplay = new screen;
	await expect(reviewdisplay.imgfirstrowReviewsforDiamondererings).toExist();
	await expect(reviewdisplay.txtstarfirstrowReviewsforDiamondererings).toExist();
	await expect(reviewdisplay.txtcustomerdetailsfirstrowReviewsforDiamondererings).toExist();
	await expect(reviewdisplay.txtreviewcommentsfirstrowReviewsforDiamondererings).toExist();
});

Given(/^I enter into page 3 of any product has less than 6 reviews$/, () => {
	browser.url(diamondere.config.ReviewLessthan6URL);
});

Then(/^Ensure Read reviews text for All Rings and star rating and the rating number and the total user reviews text are displayed$/, async() => {
	const reviewdisplay = new screen;
	await expect(reviewdisplay.txtReadRevforAllRings).toExist();
	await expect(reviewdisplay.txtRevByAllrings).toExist();
	await expect(reviewdisplay.txtstarRevByAll).toExist();
});

Then(/^Ensure all the details given by customers for all rings is present in the review column$/, async() => {
	const reviewdisplay = new screen;
	await expect(reviewdisplay.txtcustomerdetailsAllRings).toExist();
	await expect(reviewdisplay.txtreviewdetailsAllRings).toExist();
});

Given(/^I enter into page 3 of any product has no reviews$/, () => {
	browser.url(diamondere.config.NoreviewURL);
});

When(/^I scrolldown to the free global shipping section at the bottom$/, () => {
	const reviewdisplay = new screen;
	reviewdisplay.movetofreeglobal();
});