const { Given, When, Then } = require('@wdio/cucumber-framework');
const BrowserUtil = require('../../CommonUtils/BrowserUtil');
const ElementUtil = require('../../CommonUtils/ElementUtil');
const dmd = require('../Configs/dmd_' + global.testEnv + '.js');
const Paymentoption = require('../PageObjects/paymentpage.js')
const pdata = require('../TestData/Payment.json');

//Given
//When
When(/^I enter Indian Phone in Shipping address$/, async() => { 
    const checkout = new Paymentoption; 
    await checkout.enterIndianPhoneShipping(); 
}); 
When(/^I enter working visa credit or debit card with mm and yy, cvc$/, async() => {
    const payment = new Paymentoption;
    await BrowserUtil.wait(3);
    await payment.enterCardNumber();
});
When(/^I click pay with your card button$/, async() => {
    const payment = new Paymentoption;
    await BrowserUtil.wait(3);
    await payment.clickpaywithYourCard();
});
When(/^I click paypal credit button$/, async() => {
    const paypalarea = new Paymentoption;
    await paypalarea.clickpaypalcreditbtn();
});
When(/^I click pay with paypal credit button$/, async() => {
    const paypalarea = new Paymentoption;
    await paypalarea.clickpaywithpaypalcreditbtn();
    await BrowserUtil.wait(7);
});
When(/^I click pay with credit or debit card$/, async() => {
    const paypalpaymentarea = new Paymentoption;
    paypalpaymentarea.clickPayWithcredorDebtbtn();
    await BrowserUtil.wait(6);
});
When(/^I enter usa mobile in mobile field$/, async() => {
    const payment = new Paymentoption;
    await payment.enterUSAMobile();
});
When(/^I enter working visa credit or debit card with mm and yy, cvc in paypal credit$/, async() => {
    const payment = new Paymentoption;
    await payment.enterpaypalcreditCardNum();
});
When(/^I click tickbox like shipping same as billing address$/, async() => {
    const payment = new Paymentoption;
    await payment.clicktckboxasbillingaddress();
});
When(/^I click create paypal account radio button$/, async() => {
    const payment = new Paymentoption;
    await payment.clickpaypalaccntradiobtn();
});
When(/^I click continue as guest in paypal$/, async() => {
    const payment = new Paymentoption;
    await payment.clickcontinueasguest();
});

When(/^I enter details in paypal checkout page and submit$/, async() => {
	const payment = new Paymentoption;
    await payment.paypalGuestCheckout();
});

When(/^I accept cookies if alert displayed$/, async() => {
    const payment = new Paymentoption;
    await payment.acceptCookies();
});

When(/^I click affirm radiobutton$/, async() => {
	const affirmarea = new Paymentoption;
    await affirmarea.clickaffirmradiobutton();
});

When(/^I click pay with affirm button$/, async() => {
	const affirmarea = new Paymentoption;
    await affirmarea.clickpaywithaffirmbutton();
    await BrowserUtil.wait(15);
});

When(/^I enter usa mobile and continue in affirm page$/, async() => {
	const affirmarea = new Paymentoption;
    await affirmarea.enterUSAMobileAffirm();
    await affirmarea.clickcontinuewithaffirm();
});

When(/^I enter 4 digit pin$/, async() => {
	const affirmarea = new Paymentoption;
    await affirmarea.enteraffirmpin();
});

When(/^I click 3 months options and click choose this plan button$/, async() => {
	const affirmarea = new Paymentoption;
    await affirmarea.click3monthinstallmentoption();
    await BrowserUtil.wait(3);
    await affirmarea.clickcontinuethisplan();
    await BrowserUtil.wait(5);
});

When(/^I click disclaimer and confirm button$/, async() => {
	const affirmarea = new Paymentoption;
    await affirmarea.clickautopay();
    await BrowserUtil.wait(3);
    await affirmarea.clickaffirmdisclaimer();
    await BrowserUtil.wait(2);
    await affirmarea.clickaffirmcomplete();
    await BrowserUtil.wait(6);
});

When(/^I click return to merchant$/, async() => {
	const affirmarea = new Paymentoption;
    await affirmarea.clickreturntomerchant();
});

When(/^I enter insuffient balance credit or debit card with mm and yy, cvc in paypal credit$/, async() => {
	const paypalcreditarea = new Paymentoption;
    await paypalcreditarea.enterinsuffientbalancecard();
});

When(/^I click cancel and return merchant link$/, async() => {
	const paypalcreditarea = new Paymentoption;
    await paypalcreditarea.clickcancelandreturnlink();
});
When(/^I click paypal button$/, async() => {
    const paypalarea = new Paymentoption;
    await paypalarea.clickPaypalRadiobtn();
});

When(/^I click pay with paypal button$/, async() => {
	const paypalarea = new Paymentoption;
    await paypalarea.clickpaywithpaypalbtn();
    await BrowserUtil.wait(10);
});
When(/^I enter working visa credit or debit card with mm and yy, cvc in paypal$/, async() => {
    const paypalarea = new Paymentoption;
    await paypalarea.enterpaypalcreditCardNum();
});

When(/^I enter insuffient balance credit or debit card with mm and yy, cvc in paypal$/, async() => {
	const paypalarea = new Paymentoption;
    await paypalarea.enterinsuffientbalancecard();
});

When(/^I click diamondere 3 month installment payment$/, async() => {
	const installmentarea = new Paymentoption;
    await installmentarea.clickdiamondereinstallmentradiobtn();
    await BrowserUtil.wait(4);
});

When(/^I click pay 1st installment button$/, async() => {
	const installmentarea = new Paymentoption;
    await installmentarea.clickpay1stinstallmentbtn();
});
When(/^I enter working visa credit or debit card with mm and yy, cvc in installment$/, async() => {
    const installmentarea = new Paymentoption;
    await installmentarea.enterCardNumbervisainstallment();
});

When(/^I enter working mastercard credit or debit card with mm and yy, cvc in installment$/, async() => {
	const installmentarea = new Paymentoption;
    await installmentarea.enterCardNumbermasterinstallment();
});


When(/^I enter working amex credit or debit card with mm and yy, cvc in installment$/, async() => {
	const installmentarea = new Paymentoption;
    await installmentarea.enterCardNumberamexinstallment();
});

When(/^I enter working dinerclub credit or debit card with mm and yy, cvc in installment$/, async() => {
	const installmentarea = new Paymentoption;
    await installmentarea.enterCardNumberdinerinstallment();
});

When(/^I enter invalid card number in installment$/, async() => {
	const invalidarea = new Paymentoption;
    await invalidarea.enterInvalidcardNumberinstallment();
});

When(/^I enter invalid cvv in installment$/, async() => {
	const invalidarea = new Paymentoption;
    await invalidarea.enterInvalidcardcvvinstallment();
});

When(/^I enter invalid mm and yy in installment$/, async() => {
	const invalidarea = new Paymentoption;
    await invalidarea.enterInvalidcardmmyyinstallment();
});

When(/^I enter working mastercard credit or debit card with mm and yy, cvc$/, async() => {
	const dccardarea = new Paymentoption;
    await dccardarea.enterCardNumbermaster();
});

When(/^I enter working amex credit or debit card with mm and yy, cvc$/, async() => {
	const dccardarea = new Paymentoption;
    await dccardarea.enterCardNumberamex();
});

When(/^I enter working dinerclub credit or debit card with mm and yy, cvc$/, async() => {
	const dccardarea = new Paymentoption;
    await dccardarea.enterCardNumberdiner();
});

When(/^I enter invalid card number$/, async() => {
	const dccardarea = new Paymentoption;
    await dccardarea.enterInvalidcardNumber();
});

When(/^I enter invalid mm and yy$/, async() => {
	const dccardarea = new Paymentoption;
    await dccardarea.enterInvalidmonth();
});

When(/^I enter invalid cvv$/, async() => {
	const dccardarea = new Paymentoption;
    await dccardarea.enterInvalidcvv();
});

When(/^I enter insuffient balance credit or debit card with mm and yy, cvc$/, async() => {
	const dccardarea = new Paymentoption;
    await dccardarea.enterinsuffientcard();
});

When(/^I enter generic decline credit or debit card with mm and yy, cvc$/, async() => {
	const dccardarea = new Paymentoption;
    await dccardarea.entergenericcard();
});

When(/^I enter lost credit or debit card with mm and yy, cvc$/, async() => {
	const dccardarea = new Paymentoption;
    await dccardarea.enterlostcard();
});

When(/^I enter processing error credit or debit card with mm and yy, cvc$/, async() => {
    const dccardarea = new Paymentoption;
    await dccardarea.enterprocessingcard();
});

When(/^I click cross button in error popup$/, async() => {
	const dccardarea = new Paymentoption;
    await dccardarea.clickcrossbtn();
});

When(/^I select credit or debit no saving$/, async() => {
	const creditnosaving = new Paymentoption;
    await creditnosaving.clicknosaving();
    await BrowserUtil.wait(3);
    await creditnosaving.clickwirepayment();
    await BrowserUtil.wait(3);
});

When(/^I click pay with wirepayment button$/, async() => {
	const wirepaymentarea = new Paymentoption;
    await BrowserUtil.wait(2);
    await wirepaymentarea.clickpaywithwirepaymentbtn();
    await BrowserUtil.wait(5);
});

When(/^I click go to payment link$/, async() => {
	const paymentarea = new Paymentoption;
    await paymentarea.clickgotopayment();
});

When(/^I want to clear local storage$/, async() => {
	const paymentarea = new Paymentoption;
    await paymentarea.clearlocalstorage();
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
    //await browser.reloadSession()
    //await browser.deleteAllCookies()
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




