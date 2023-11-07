const { Given, When, Then } = require('@wdio/cucumber-framework');
const dmd = require('../Configs/dmd_' + global.testEnv + '.js');
const endpoints = require('../PageObjects/API');
const apiCalls = require('../../CommonUtils/CommonAPI')
const context = require('../../CommonUtils/ScenarioContext');
const BrowserUtil = require('../../CommonUtils/BrowserUtil');


Given(/^I call the registration API endpoint$/, async() => {
	const regAPI = new endpoints;
    await regAPI.callRegAPI();

});


Then(/^I verify the response of the registration API$/, async() => {
    let statusCode = context.getValue('statusCode')
    if (statusCode == 200 || statusCode == 201) {
        const getJson = await apiCalls.getResponseBodyJson();

        console.log(getJson)

        const getSuccessStatus = await getJson.response.success;
        await expect(getSuccessStatus).toBe(true)
    }
});


Given(/^I call the login API endpoint$/, async() => {
	const loginAPI = new endpoints;
    await loginAPI.callLoginAPI();
});


Then(/^I verify the response of the login API$/, async() => {
    let statusCode = context.getValue('statusCode')
    if (statusCode == 200 || statusCode == 201) {
        const getJson = await apiCalls.getResponseBodyJson();

        console.log(getJson)

        const getSuccessStatus = await getJson.response.success;
        await expect(getSuccessStatus).toBe(true)
    }
});


When(/^I get the AuthToken for the loggedin user$/, async() => {
	const loginAPI = new endpoints;
    await loginAPI.getAuthToken();
});


Given(/^I call the Add to Cart API endpoint$/, async() => {
	const addToCartAPI = new endpoints;
    await addToCartAPI.callAddProductsAPI();
});


Then(/^I verify the response of the Add to Cart API$/, async() => {
	let statusCode = context.getValue('statusCode')
    if (statusCode == 200 || statusCode == 201) {
        const getJson = await apiCalls.getResponseBodyJson();

        console.log(getJson)

        const getID = await getJson.response.id;
        context.setValue('ID', getID)
        console.log('ID:', getID)
    }
    await BrowserUtil.wait(10)
});


