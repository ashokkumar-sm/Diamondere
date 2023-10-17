const { Given, When, Then } = require('@wdio/cucumber-framework');
const BrowserUtil = require('../../CommonUtils/BrowserUtil');
const ElementUtil = require('../../CommonUtils/ElementUtil');
const dmd = require('../Configs/dmd_' + global.testEnv + '.js');
const ShoppingCart = require('../PageObjects/OrderHistory')
const data = require('../TestData/OrderHistory.json');


When(/^I click the Order history option from the dropdown$/, () => {
	const orderHistory = new ShoppingCart;
    orderHistory.clickOrderHistOptn();
});

Then(/^I ensure clicking the Order history option redirects to the order history page$/, async() => {
    const orderHistory = await browser.getUrl();
    await expect(orderHistory).toEqual(data.OrderHistory.OrderHistoryPage);
});


Then(/^I ensure the order history text and the order details card for each order is present$/, async() => {
	const orderHistory = new ShoppingCart;
    await expect(orderHistory.txtheadingorderhistory).toExist();
    await expect(orderHistory.orderDetailsCard).toExist();

});

Then(/^I ensure the order details,View detail link, shipping and billing address are present in the order details card$/,async () => {
	const orderHistory = new ShoppingCart;
    await expect(orderHistory.txtOrderID).toExist();
    await expect(orderHistory.txtexactorderIDvalue).toExist();
    await expect(orderHistory.txtOrderStatus).toExist();
    await expect(orderHistory.txtexactorderstatusvalue).toExist();
    await expect(orderHistory.txtOrderDate).toExist();
    await expect(orderHistory.txtexactorderDatevalue).toExist();
    await expect(orderHistory.lnkViewDetails).toExist();
    await expect(orderHistory.txtshippingaddress).toExist();
    await expect(orderHistory.txtheadingShippingaddress).toExist();
    await expect(orderHistory.txtbillingaddress).toExist();
    await expect(orderHistory.txtheadingBillingaddress).toExist();
});

When(/^I click the View Details link in the order details card$/, () => {
	const orderHistory = new ShoppingCart;
    orderHistory.clickViewDetails();
});

Then(/^I ensure clicking the View Details link in the order details card redirects to the order details page$/, async() => {
    const orderHistory = await browser.getUrl();
    await expect(orderHistory).toEqual(data.OrderHistory.OrderDetailsPage2);
});

Given(/^I browse the first Order Details page$/, () => {
	browser.url(dmd.config.OrderDetailsPage1);
    BrowserUtil.wait(5)
});

Then(/^I ensure the Order Details,Order ID,Order Status and order date are present$/, async() => {
	const orderHistory = new ShoppingCart;
    await expect(orderHistory.txtheadingorderdetails).toExist();
    await expect(orderHistory.txtOrderID).toExist();
    await expect(orderHistory.txtOrderStatus).toExist();
    await expect(orderHistory.txtOrderDate).toExist();
    await expect(orderHistory.txtsectionorderdetails).toExist();

});

Then(/^I ensure the order summary text is present in the Order summary section$/,async () => {
	const orderHistory = new ShoppingCart;
    await expect(orderHistory.txtheadingOrderSummary).toExist();
});


Then(/^I ensure the ordered products image,description and price is present$/, async() => {
	const orderHistory = new ShoppingCart;
    await expect(orderHistory.img1OrderHistPageOne).toExist();
    await expect(orderHistory.nameprod1).toExist();
    await expect(orderHistory.txtprod1).toExist();
    await expect(orderHistory.priceprod1).toExist();
    await expect(orderHistory.img2OrderHistPageOne).toExist();
    await expect(orderHistory.txtprod2).toExist();
    await expect(orderHistory.priceprod2).toExist();
    await expect(orderHistory.img3OrderHistPageOne).toExist();
    await expect(orderHistory.txtprod3).toExist();
    await expect(orderHistory.priceprod3).toExist();
    await expect(orderHistory.img4OrderHistPageOne).toExist();
    await expect(orderHistory.txtprod4).toExist();
    await expect(orderHistory.priceprod4).toExist();
   

});

Then(/^I ensure the bracelet length text is present$/, async() => {
    const orderHistory = new ShoppingCart;
    await expect(orderHistory.txtbraceletlength).toExist();
});

Then(/^I ensure the subtotal,sales tax,shipping and total text along with the price are present$/,async () => {
    const orderHistory = new ShoppingCart;
    await expect(orderHistory.txtSubtotal).toExist();
    await expect(orderHistory.txtTotal).toExist();
    await expect(orderHistory.txtSalesTax).toExist();
    await expect(orderHistory.txtShipping).toExist();
    // await expect(orderHistory.txtInstall).toExist();
    // await expect(orderHistory.txtPendingAmt).toExist();
    //await expect(orderHistory.txtTax).toExist();
    
});

Then(/^I ensure the payment type and payment method text are present$/, async() => {
    const orderHistory = new ShoppingCart;
    await expect(orderHistory.txtpayment).toExist();
    await expect(orderHistory.txtpaymentName).toExist();
});

When(/^I move to the address section in the order details page$/, () => {
    const orderHistory = new ShoppingCart;
    orderHistory.moveToaddressSection();
});

Then(/^shipping and billing information text,shipping and billing address are present$/, async() => {
    const orderHistory = new ShoppingCart;
    await expect(orderHistory.txtxshipandBillAdd).toExist();
    await expect(orderHistory.txtheadingShippingaddress).toExist();
    await expect(orderHistory.txtheadingBillingaddress).toExist();
});

Given(/^I browse the second Order Details page$/, () => {
        browser.url(dmd.config.OrderDetailsPage2);
        BrowserUtil.wait(5)
});

Then(/^I ensure the chain size text is present$/, async() => {
	const orderHistory = new ShoppingCart;
    await expect(orderHistory.imgChain).toExist();
    await expect(orderHistory.txtChainSize).toExist();
    await expect(orderHistory.txtChainInch).toExist();
    await expect(orderHistory.txtpayment).toExist();
    await expect(orderHistory.txtpaymentNamePaypal).toExist();

});
Then(/^I ensure the payment type and payment method text are present in the second order details page$/, async() => {
	const orderHistory = new ShoppingCart;
    await expect(orderHistory.txtpayment).toExist();
    await expect(orderHistory.txtpaymentNamePaypal).toExist();
});

Given(/^I browse the third Order Details page$/, () => {
    browser.url(dmd.config.OrderDetailsPage3);
    BrowserUtil.wait(5)
});

Then(/^I ensure the engraving text and extend plan are present$/,async () => {
	const orderHistory = new ShoppingCart;
    await expect(orderHistory.txtEngrave).toExist();
    await expect(orderHistory.lnkExtend).toExist();
    
});

When(/^I move to the Rayce ring$/, () => {
	const orderHistory = new ShoppingCart;
    orderHistory.movetoRayceRing();
});

Then(/^I ensure the His and Her ring text are present$/,async () => {
	const orderHistory = new ShoppingCart;
    await expect(orderHistory.txtHerRingSize).toExist();
    await expect(orderHistory.txtHisRingSize).toExist();
});

When(/^I click the extend link in the third order details page$/, () => {
	const orderHistory = new ShoppingCart;
    orderHistory.clickExtend();

});

Then(/^I ensure clicking the extend link redirects to the extend page$/,async () => {
    const footer = await browser.getUrl();
	await expect(footer).toEqual(dmd.config.ExtendPage);
    browser.switchWindow(dmd.config.OrderDetailsPage3);
});

Then(/^I ensure the protection plan,payment type and payment method text are present in the third order details page$/, async() => {
	const orderHistory = new ShoppingCart;
    await expect(orderHistory.txtProtectnplan).toExist();
    await expect(orderHistory.txtpayment).toExist();
    await expect(orderHistory.txtpaymentName).toExist();
});


