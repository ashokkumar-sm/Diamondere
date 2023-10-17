const { Given, When, Then } = require('@wdio/cucumber-framework');
const BrowserUtil = require('../../CommonUtils/BrowserUtil');
const ElementUtil = require('../../CommonUtils/ElementUtil');
const dmd = require('../Configs/dmd_' + global.testEnv + '.js');
const Paymentoption = require('../PageObjects/paymentpage.js')
const pdata = require('../TestData/Payment.json');

//Given
//When
When(/^I enter Indian Phone in Shipping address$/, () => { 
    const checkout = new Paymentoption; 
    checkout.enterIndianPhoneShipping(); 
}); 
When(/^I enter working visa credit or debit card with mm and yy, cvc$/, () => {
    const payment = new Paymentoption;
    BrowserUtil.wait(3);
    payment.enterCardNumber();
});
When(/^I click pay with your card button$/, () => {
    const payment = new Paymentoption;
    BrowserUtil.wait(3);
    payment.clickpaywithYourCard();
});
When(/^I click paypal credit button$/, () => {
    const paypalarea = new Paymentoption;
    paypalarea.clickpaypalcreditbtn();
});
When(/^I click pay with paypal credit button$/, () => {
    const paypalarea = new Paymentoption;
    paypalarea.clickpaywithpaypalcreditbtn();
    BrowserUtil.wait(7);
});
When(/^I click pay with credit or debit card$/, () => {
    const paypalpaymentarea = new Paymentoption;
    paypalpaymentarea.clickPayWithcredorDebtbtn();
    BrowserUtil.wait(6);
});
When(/^I enter usa mobile in mobile field$/, () => {
    const payment = new Paymentoption;
    payment.enterUSAMobile();
});
When(/^I enter working visa credit or debit card with mm and yy, cvc in paypal credit$/, () => {
    const payment = new Paymentoption;
    payment.enterpaypalcreditCardNum();
});
When(/^I click tickbox like shipping same as billing address$/, () => {
    const payment = new Paymentoption;
    payment.clicktckboxasbillingaddress();
});
When(/^I click create paypal account radio button$/, () => {
    const payment = new Paymentoption;
    payment.clickpaypalaccntradiobtn();
});
When(/^I click continue as guest in paypal$/, () => {
    const payment = new Paymentoption;
    payment.clickcontinueasguest();
});

When(/^I enter details in paypal checkout page and submit$/, () => {
	const payment = new Paymentoption;
    payment.paypalGuestCheckout();
});

When(/^I accept cookies if alert displayed$/, () => {
    const payment = new Paymentoption;
    payment.acceptCookies();
});

When(/^I click affirm radiobutton$/, () => {
	const affirmarea = new Paymentoption;
    affirmarea.clickaffirmradiobutton();
});

When(/^I click pay with affirm button$/, () => {
	const affirmarea = new Paymentoption;
    affirmarea.clickpaywithaffirmbutton();
    BrowserUtil.wait(15);
});

When(/^I enter usa mobile and continue in affirm page$/, () => {
	const affirmarea = new Paymentoption;
    affirmarea.enterUSAMobileAffirm();
    affirmarea.clickcontinuewithaffirm();
});

When(/^I enter 4 digit pin$/, () => {
	const affirmarea = new Paymentoption;
    affirmarea.enteraffirmpin();
});

When(/^I click 3 months options and click choose this plan button$/, () => {
	const affirmarea = new Paymentoption;
    affirmarea.click3monthinstallmentoption();
    BrowserUtil.wait(3);
    affirmarea.clickcontinuethisplan();
    BrowserUtil.wait(5);
});

When(/^I click disclaimer and confirm button$/, () => {
	const affirmarea = new Paymentoption;
    affirmarea.clickautopay();
    BrowserUtil.wait(3);
    affirmarea.clickaffirmdisclaimer();
    BrowserUtil.wait(2);
    affirmarea.clickaffirmcomplete();
    BrowserUtil.wait(6);
});

When(/^I click return to merchant$/, () => {
	const affirmarea = new Paymentoption;
    affirmarea.clickreturntomerchant();
});

When(/^I enter insuffient balance credit or debit card with mm and yy, cvc in paypal credit$/, () => {
	const paypalcreditarea = new Paymentoption;
    paypalcreditarea.enterinsuffientbalancecard();
});

When(/^I click cancel and return merchant link$/, () => {
	const paypalcreditarea = new Paymentoption;
    paypalcreditarea.clickcancelandreturnlink();
});
When(/^I click paypal button$/, () => {
    const paypalarea = new Paymentoption;
    paypalarea.clickPaypalRadiobtn();
});

When(/^I click pay with paypal button$/, () => {
	const paypalarea = new Paymentoption;
    paypalarea.clickpaywithpaypalbtn();
    BrowserUtil.wait(10);
});
When(/^I enter working visa credit or debit card with mm and yy, cvc in paypal$/, () => {
    const paypalarea = new Paymentoption;
    paypalarea.enterpaypalcreditCardNum();
});

When(/^I enter insuffient balance credit or debit card with mm and yy, cvc in paypal$/, () => {
	const paypalarea = new Paymentoption;
    paypalarea.enterinsuffientbalancecard();
});

When(/^I click diamondere 3 month installment payment$/, () => {
	const installmentarea = new Paymentoption;
    installmentarea.clickdiamondereinstallmentradiobtn();
    BrowserUtil.wait(4);
});

When(/^I click pay 1st installment button$/, () => {
	const installmentarea = new Paymentoption;
    installmentarea.clickpay1stinstallmentbtn();
});
When(/^I enter working visa credit or debit card with mm and yy, cvc in installment$/, () => {
    const installmentarea = new Paymentoption;
    installmentarea.enterCardNumbervisainstallment();
});

When(/^I enter working mastercard credit or debit card with mm and yy, cvc in installment$/, () => {
	const installmentarea = new Paymentoption;
    installmentarea.enterCardNumbermasterinstallment();
});


When(/^I enter working amex credit or debit card with mm and yy, cvc in installment$/, () => {
	const installmentarea = new Paymentoption;
    installmentarea.enterCardNumberamexinstallment();
});

When(/^I enter working dinerclub credit or debit card with mm and yy, cvc in installment$/, () => {
	const installmentarea = new Paymentoption;
    installmentarea.enterCardNumberdinerinstallment();
});

When(/^I enter invalid card number in installment$/, () => {
	const invalidarea = new Paymentoption;
    invalidarea.enterInvalidcardNumberinstallment();
});

When(/^I enter invalid cvv in installment$/, () => {
	const invalidarea = new Paymentoption;
    invalidarea.enterInvalidcardcvvinstallment();
});

When(/^I enter invalid mm and yy in installment$/, () => {
	const invalidarea = new Paymentoption;
    invalidarea.enterInvalidcardmmyyinstallment();
});

When(/^I enter working mastercard credit or debit card with mm and yy, cvc$/, () => {
	const dccardarea = new Paymentoption;
    dccardarea.enterCardNumbermaster();
});

When(/^I enter working amex credit or debit card with mm and yy, cvc$/, () => {
	const dccardarea = new Paymentoption;
    dccardarea.enterCardNumberamex();
});

When(/^I enter working dinerclub credit or debit card with mm and yy, cvc$/, () => {
	const dccardarea = new Paymentoption;
    dccardarea.enterCardNumberdiner();
});

When(/^I enter invalid card number$/, () => {
	const dccardarea = new Paymentoption;
    dccardarea.enterInvalidcardNumber();
});

When(/^I enter invalid mm and yy$/, () => {
	const dccardarea = new Paymentoption;
    dccardarea.enterInvalidmonth();
});

When(/^I enter invalid cvv$/, () => {
	const dccardarea = new Paymentoption;
    dccardarea.enterInvalidcvv();
});

When(/^I enter insuffient balance credit or debit card with mm and yy, cvc$/, () => {
	const dccardarea = new Paymentoption;
    dccardarea.enterinsuffientcard();
});

When(/^I enter generic decline credit or debit card with mm and yy, cvc$/, () => {
	const dccardarea = new Paymentoption;
    dccardarea.entergenericcard();
});

When(/^I enter lost credit or debit card with mm and yy, cvc$/, () => {
	const dccardarea = new Paymentoption;
    dccardarea.enterlostcard();
});

When(/^I enter processing error credit or debit card with mm and yy, cvc$/, () => {
    const dccardarea = new Paymentoption;
    dccardarea.enterprocessingcard();
});

When(/^I click cross button in error popup$/, () => {
	const dccardarea = new Paymentoption;
    dccardarea.clickcrossbtn();
});

When(/^I select credit or debit no saving$/, () => {
	const creditnosaving = new Paymentoption;
    creditnosaving.clicknosaving();
    BrowserUtil.wait(3);
    creditnosaving.clickwirepayment();
    BrowserUtil.wait(3);
});

When(/^I click pay with wirepayment button$/, () => {
	const wirepaymentarea = new Paymentoption;
    BrowserUtil.wait(2);
    wirepaymentarea.clickpaywithwirepaymentbtn();
    BrowserUtil.wait(5);
});

When(/^I click go to payment link$/, () => {
	const paymentarea = new Paymentoption;
    paymentarea.clickgotopayment();
});

When(/^I want to clear local storage$/, () => {
	const paymentarea = new Paymentoption;
    paymentarea.clearlocalstorage();
});

//Then

Then(/^I ensure payment option text is displayed$/, async() => {
    const payment = new Paymentoption;
    await expect(payment.paymentoptiontext).toExist();
});

Then(/^I ensure paypal, paypal credit, affirm and diamondere 3 installment month is displayed$/, async() => {
	const payment = new Paymentoption;
    await expect(payment.radiopaypal).toExist();
    await expect(payment.radiopaypalcredit).toExist();
    await expect(payment.radioaffirm).toExist();
    await expect(payment.radiothreepayment).toExist();
});


Then(/^I ensure credit card field mm and yy, cvc and pay with your card button is displayed$/, async() => {
    const payment = new Paymentoption;
    await expect(payment.creditordebittext).toExist();
    await expect(payment.radiocreditordebit).toExist();
});


Then(/^I ensure order placed information like orderid will be displayed$/, async () => {
    const payment = new Paymentoption;
    await expect(payment.paymentdonepopup).toExist();
    await expect(payment.paymentdoneinvoiceid).toExist();
    await expect(payment.btnTrackYourOrder).toExist()
});

Then(/^I ensure pay with paypal credit button is displayed$/, async () => {
    const paypalarea = new Paymentoption;
    await expect(paypalarea.paywithpaypalcreditbutton).toExist();
});

Then(/^I ensure pay with affirm button is displayed$/, async() => {
	const affirmarea = new Paymentoption;
    await expect(affirmarea.paywithaffirmbutton).toExist();
});

Then(/^I ensure invalid mobile number text and return to merchant button is displayed$/, async() => {
	const affirmarea = new Paymentoption;
    await expect(affirmarea.affirminvalidnumbertext).toExist();
});

Then(/^I ensure go to payment link is displayed$/, async() => {
	const paymentarea = new Paymentoption;
    await expect(paymentarea.gotopaymentpage).toExist();
});

Then(/^I ensure error message is displayed in paypal credit$/, async() => {
	const paypalcreditarea = new Paymentoption;
    await expect(paypalcreditarea.paypalerrormessage).toExist();
});

Then(/^I ensure cancel and return merchant is displayed in paypal credit$/, async() => {
	const paypalcreditarea = new Paymentoption;
    await expect(paypalcreditarea.paypalcancelarea).toExist();
});

Then(/^I ensure pay with paypal button is displayed$/, async() => {
	const paypalarea = new Paymentoption;
    await expect(paypalarea.paywithpaypalbutton).toExist();
});

Then(/^I ensure error message is displayed in paypal$/, async() => {
	const paypalarea = new Paymentoption;
    await expect(paypalarea.paypalerrormessage).toExist();
});

Then(/^I ensure cancel and return merchant is displayed in paypal$/, async() => {
	const paypalarea = new Paymentoption;
    await expect(paypalarea.paypalcancelarea).toExist();
});

Then(/^I ensure enter card details text will displayed$/, async() => {
	const paymentarea = new Paymentoption;
    await expect(paymentarea.installmententerdetailerror).toExist();
    //browser.reloadSession()
    //browser.deleteAllCookies()
    //await browser.deleteCookies() 
});

Then(/^I ensure your card has insuffient funds popup is displayed$/, async() => {
	const creditcardarea = new Paymentoption;
    await expect(creditcardarea.txtinsufficientfund).toExist();
});


Then(/^I ensure your card was declined popup is displayed$/, async() => {
	const creditcardarea = new Paymentoption;
    await expect(creditcardarea.txtlostcard).toExist();
});

Then(/^I ensure An error occurred while processing your card popup is displayed$/,async() => {
	const creditcardarea = new Paymentoption;
    await expect(creditcardarea.txtprocessingerror).toExist();
});

Then(/^I ensure popup is not displayed$/, async() => {
	const creditcardarea = new Paymentoption;
    await expect(creditcardarea.txtinsufficientfund).not.toExist();
});

Then(/^I ensure pay with wirepayment button is displayed$/, async() => {
	const creditcardarea = new Paymentoption;
    await expect(creditcardarea.wirepaymenttext).toExist();
    await expect(creditcardarea.radiowirepayment).toExist();
    await expect(creditcardarea.wirepaymentpaymentdetails).toExist();
    await expect(creditcardarea.paywithwirepaymentbutton).toExist();
});

Then(/^I ensure checkout page is redirected$/, async() => {
    const paymentarea  = await browser.getUrl()
	await expect(paymentarea).toEqual(pdata.OrderHistory.checkoutpage);
});




