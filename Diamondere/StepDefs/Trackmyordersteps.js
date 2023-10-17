const { Given, When, Then } = require('@wdio/cucumber-framework');
const BrowserUtil = require('../../CommonUtils/BrowserUtil');
const ElementUtil = require('../../CommonUtils/ElementUtil');
const diamondere = require('../Configs/dmd_' + global.testEnv + '.js');
const trackmyorder = require('../PageObjects/Trackmyorderpage')
const trackmyorderold = require('../PageObjects/RegistrationandLogin')
const dataold = require('../TestData/RegistrationandLogin.json');
const data = require('../TestData/Trackmyorder.json');
const TOM = require('../PageObjects/Trackmyorderpage');


Given(/^I select track my order under dropdown$/, () => {
	const track =  new trackmyorder;
    track.selectdrptrackmyorder();
});

Then(/^Ensure the Track my order page is displayed$/, async() => {
	const track =  await browser.getUrl();
    await expect(track).toEqual(data.Trackorder.TrackmyorderURL);
});

Then(/^Ensure the Track my order heading, Order number field, last name field and search button is displayed$/, async() => {
	const track =  new trackmyorder;
    await expect(track.txtheadingtrackmyorder).toExist();
    await expect(track.boxordernumber).toExist();
    await expect(track.boxlastname).toExist();
    await expect(track.btnsearch).toExist();
});

When(/^I enter last name in the respective field$/, () => {
	const track =  new trackmyorder;
    track.enterlastname();
});


When(/^I select search button$/, () => {
	const track =  new trackmyorder;
    track.selectsearchbutton();
});


Then(/^Ensure an error message is displayed under Order Id field in TOM$/, async() => {
	const track =  new trackmyorder;
    await expect(track.txtmandatordernumber).toExist();
});

When(/^I enter Order Id in the respective field$/, () => {
	const track =  new trackmyorder;
    track.enterOrderId();
});

Then(/^Ensure an error message is displayed under Last name field in TOM$/, async() => {
	const track =  new trackmyorder;
    await expect(track.txtmandatLastname).toExist();
});

Then(/^Ensure the order Id, status, date and estimated delivery are displayed$/, async() => {
	const track =  new trackmyorder;
    await expect(track.txtheadingOrderId).toExist();
    await expect(track.txtheadingOrderId).toExist();
    await expect(track.txtheadingOrderdate).toExist();
    await expect(track.txtheadingEstimateddelivery).toExist();
    await expect(track.txtmsgEstimatedDelivery).toExist();
});

Then(/^Ensure the order summary and order details are displayed$/, async() => {
	const track =  new trackmyorder;
    await expect(track.txtheadingOrdersummary).toExist();
    await expect(track.imgproductfirstroworderdetails).toExist();
    await expect(track.txtnameproductfirstroworderdetails).toExist();
    await expect(track.txtdetailsproductfirstroworderdetails).toExist();
    await expect(track.txtpriceproductfirstroworderdetails).toExist();
});

Then(/^Ensure the amount segregation section is displayed$/, async() => {
	const track =  new trackmyorder;
    await expect(track.txtsubtotal).toExist();
    await expect(track.txtsalestax).toExist();
    await expect(track.txtshipping).toExist();
    await expect(track.txtTotal).toExist();
    await expect(track.txtpaymentmethod).toExist();
    await expect(track.txtStripe).toExist();
});

Then(/^Ensure the Shipping and billing address section is displayed$/, async() => {
	const track =  new trackmyorder;
    await expect(track.txtheadingshippingandbilling).toExist();
    await expect(track.txtheadingshippingaddress).toExist();
    await expect(track.txtdetailsshippingaddress).toExist();
    await expect(track.txtheadingbillingaddress).toExist();
    await expect(track.txtdetailsbillingaddress).toExist();
});

When(/^I enter incorrect order Id and correct last name in their respective fields$/, () => {
	const track =  new trackmyorder;
    track.enterincorrectOrderId();
});

Then(/^Ensure an error message is displayed with no results found$/, async() => {
	const track =  new trackmyorder;
    await expect(track.txtheadingerrormessage).toExist();
    await expect(track.txtmsgerror).toExist();
});

When(/^I select close button in error popup in TOM$/, () => {
	const track =  new trackmyorder;
    track.selectclosebuttonTOM();
});

Then(/^Ensure an error message popup is closed in TOM$/, async() => {
	const track =  new trackmyorder;
    await expect(track.txtheadingerrormessage).not.toExist();
});

When(/^I enter correct order Id and incorrect last name in their respective fields$/, () => {
	const track =  new trackmyorder;
    track.enterincorrectLastname();
});

 






// Given(/^I select track my order under dropdown$/, () => {
// 	const track = new trackmyorderold;
//     track.selectddtrackmyorder();

// });

// Then(/^Ensure the Track my order page is displayed$/, () => {
// 	return true;
// });

// Then(/^Ensure the Track my order heading, Order number field, last name field and search button is displayed$/, () => {
// 	return true;
// });
