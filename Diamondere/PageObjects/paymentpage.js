const BrowserUtil = require('../../CommonUtils/BrowserUtil');
const ElementUtil = require('../../CommonUtils/ElementUtil');
const data = require('../TestData/Checkout.json');
const pdata = require('../TestData/Payment.json');

class payment {

    //Payment Option
    get paymentoptiontext() {
        return $('//p[contains(text(),"PAYMENT OPTION")]')
    }
    get creditordebittext() {
        return $('//span[contains(text(),"Credit or Debit Card")]')
    }
    get radiocreditordebit() {
        return $('//input[@value="creditCard"]/parent::label/span[@class="check is-info"]')
    }
    //Debit or credit card
    get paywithcardbutton() {
        return $('//button[contains(text(),"Pay with your Card")]')
    }
    get creditordebitcardnumberfield(){
        return $('//input[@class="InputElement is-empty Input Input--empty"]')
    }
    get framecreditcard(){
        return $('(//div[@class="p-b-20"])[1]//iframe[@title="Secure card payment input frame"]')
    }
    // Checking the negative scenorios of payment 
    // 1. Generic decline
    get txtheadingPaymenterrors() {
        return $('//header[@class="message-header"]')
    }
    get txtcarddeclined() {
        return $('//li[contains(text(),"Your card was declined.")]')
    }
    get btnclosesymbol() {
        return $('//button[@class="delete"]')

    }
    //2. Insufficient funds
    get txtinsufficientfund() {
        return $('//li[contains(text(),"Your card has insufficient funds.")]')
    }
    get btncloseinsufficientfund(){
        return $('//button[@aria-label="Close"]')
    }
    //3. Lost card
    get txtlostcard() {
        return $('//li[contains(text(),"Your card was declined.")]')
    }
    //4. Stolen card
    get txtstolencard() {
        return $('//li[contains(text(),"Your card was declined.")]')
    }
    //5. Expired card
    get txtexpiredcard() {
        return $('//li[contains(text(),"Your card has expired.")]')
    }
    // 6. Incorrect incorrectCVV
    get txtincorrectCVV() {
        return $('//li[contains(text(),"Your card\'s security code is incorrect.")]')
    }
    // 7. Processing error decline
    get txtprocessingerror() {
        return $('//li[contains(text(),"An error occurred while processing your card")]')
    }
    // 8. Incorrect number decline

    get txtincorrectcardnumber() {
        return $('//button[contains(text(),"Pay with your Card")]//following-sibling::p[contains(text(),"Please enter card details")]')
    }
    // 9. Attaching this card to a Customer object succeeds, but attempts to charge the customer fail.
    get txtchargingfailed() {
        return $('//li[contains(text(),"Your card was declined.")]')
    }
    //paypal
    get radiopaypal() {
        return $('//input[@value="paypal"]/parent::label/span[@class="check is-info"]')
    }
    get paywithpaypalbutton() {
        return $('(//button[contains(text(),"Pay with Paypal")])[1]')
    }
    get radiopaypalcredit() {
        return $('//input[@value="paypalCredit"]/parent::label/span[@class="check is-info"]')
    }
    get paywithpaypalcreditbutton() {
        return $('//button[contains(text(),"Pay with Paypal Credit")]')
    }
    //Paypal-page
    get paypalloginbtn(){
        return $('//button[@id="btnLogin"]')
    }
    get paypalpaywithDandCcardbtn(){
        return $('//button[@id="createAccount"]')
    }
    get paypalmobilenumber(){
        return $('//input[@id="phone"]')
    }
    get paypalcardnumber(){
        return $('//input[@id="cardNumber"]')
    }
    get paypalmonth(){
        return $('//input[@id="cardExpiry"]')
    }
    get paypalcvv(){
        return $('//input[@id="cardCvv"]')
    }
    get paypalsameasbillingtickbox(){
        return $('//label[@for="shipToBilling"]')
    }
    get paypalcreateaccounttickbox(){
        return $('//label[@class="ppvx_switch__state___2-11-4 xo-ui-onboard"]')
    }
    get paypalcontasguestbutton(){
        return $('//button[contains(text(),"Continue as Guest")]')
    }
    get paypalerrormessage(){
        return $('//div[@id="page-level-error-message"]')
    }
    get paypalcancelarea(){
        return $('//a[contains(text(),"Cancel and return to merchant")]')
    }
    get paypalCheckoutCard() {
        return $('//input[@id="cc"] ')
    }
    get paypalCheckoutExpiry() {
        return $('//input[@id="expiry_value"]')
    }
    get paypalCheckoutCVV() {
        return $('//input[@id="cvv"]')
    }
    get paypalCheckoutCity() {
        return $('//input[@id="billingCity"]')
    }
    get paypalCheckoutZip() {
        return $('//input[@id="billingPostalCode"]')
    }
    get paypalCheckoutCheckbox() {
        return $('//label[@for="shipToBilling"]')
        //return $('//input[@id="shipToBilling"]')
    }
    get paypalCheckoutTelephone() {
        return $('//input[@id="telephone"]')
    }
    get paypalCheckoutSubmit() {
        return $('//button[@id="pomaSubmit"]')
    }
    get paypalCookiesAccept() {
        return $('//button[@id="acceptAllButton"]')
    }
    get paypalCookiesDecline() {
        return $('//button[@id="bannerDeclineButton"]')
    }
    //Affirm
    get affirmtext() {
        return $('//div[@class="otherCards affirmCard"]')
    }
    get radioaffirm() {
        return $('//input[@value="affirm"]/parent::label/span[@class="check is-info"]')
    }
    get paywithaffirmbutton() {
        return $('//button[contains(text(),"Pay with Affirm")]')
    }
    //Affirm-page
    get affirmPinPopupClose() {
        return $('(//button[@data-testid="modal-close-button"])[2]')
    }
    get txtPhoneShipping(){
        return $('//input[@name="shippingAddressTelephone"]')
    }
    get affirmmobile(){
        return $('//input[@data-testid="phone-number-field"]')
    }
    get affirmcontinuebtn(){
        return $('//button[@data-testid="submit-button"]')
    }
    get affirmpassfield(){
        return $('//input[@autocomplete="one-time-code"]')
    }
    get affirm1stoption(){
        return $('(//div[@data-testid="indicator"])[1]')
    }
    get affirmchooseoption(){
        return $('//button[@data-testid="continue-with-selected-term-button"]')
    }
    get affirmautopayradiobtn(){
        return $('//div[@data-testid="indicator"]')
    }
    get affirmdisclaimer(){
        return $('//div[@data-testid="disclosure-checkbox-indicator"]')
    }
    get affirmconfirm(){
        return $('//button[@data-testid="submit-button"]')
    }
    get affirminvalidnumbertext(){
        return $('//h1[contains(text(),"You provided an invalid shipping phone number.")]')
    }
    get affirmgotomerchant(){
        return $('//button[@id="rtm-button"]')
    }
    get affirmframe(){
        return $('//iframe[@id="affirm-error-modal"]')
    }
    //DiamondereInstallment
    get threepaymenttext() {
        return $('//span[contains(text(),"3 Month Installment Payment")]')
    }
    get radiothreepayment() {
        return $('//input[@value="installtionaPlan"]/parent::label/span[@class="check is-info"]')
    }
    get payfirstinstallmentbutton() {
        return $('//button[@class="button has-text-weight-medium is-info is-inline-block-tablet is-uppercase"]/span[contains(text(),"1")]')
    }
    get frameinstallmentcard(){
        return $('(//div[@class="p-b-20"])[4]//iframe[@title="Secure card payment input frame"]')
    }
    get installmententerdetailerror(){
        return $('//div[@id="creditEMI"]//p[contains(text(),"Please enter card details")]')
    }
    //wirepayment -- myoj
    get creditordebitnosaving(){
        return $('//div[contains(text(),"Credit/Debit cards")]/parent::div')
    }
    get wirepaymentbtn(){
        return $('//span[contains(text(),"Wire Payment")]')
    }
    //wirepayment -checkout
    get wirepaymenttext() {
        return $('//span[contains(text(),"Wire Payment")]')
    }
    get radiowirepayment() {
        return $('//input[@value="wire"]/parent::label/span[@class="check is-info"]')
    }
    get wirepaymentpaymentdetails() {
        return $('//div[@class="m-b-15"]')
    }
    get paywithwirepaymentbutton() {
        return $('//button[contains(text(),"Pay with Wire Payment")]')
    }

    //After payment
    get gotopaymentpage(){
        return $('//a[contains(text(),"Payment Page")]')
    } 
    get paymentdonepopup() {
        return $('//div[@class="m-l-15 m-r-15"]')
    }
    get paymentdoneinvoiceid() {
        return $('//div[@class="m-l-15 m-r-15"]/div/div[@class="shipping-heading has-text-weight-medium p-t-10 p-b-10"]')
    }
    get btnTrackYourOrder() {
        return $('//a[contains(text(),"TRACK YOUR ORDER")]')
    }


    enterCardNumber(){
        let getWindowName= browser.getWindowHandle()
        BrowserUtil.wait(3)
        BrowserUtil.switchToFrame(this.framecreditcard,"clickcreditcardno")
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.VisacardNumber)
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.ValidMonth)
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.ValidCVC)
        browser.switchToWindow(getWindowName)
    }
    clickpaywithYourCard(){
        ElementUtil.click(this.paywithcardbutton, "Click Pay with card")
        BrowserUtil.wait(10)
    }
    clickpaypalcreditbtn(){
        ElementUtil.click(this.radiopaypalcredit,"click paypalcredit radiobtn")
    }
    clickpaywithpaypalcreditbtn(){
        ElementUtil.click(this.paywithpaypalcreditbutton,"click paywithpaypalcredit btn")
    }
    clickPayWithcredorDebtbtn(){
        ElementUtil.scrollIntoView(this.paypalloginbtn,"scroll to paywithcredordebtbtn in paypal")
        BrowserUtil.wait(5)
        ElementUtil.click(this.paypalpaywithDandCcardbtn,"click paywithcredordebtbtn in paypal")
    }
    enterUSAMobile(){
        ElementUtil.sendText(this.paypalmobilenumber,pdata.OrderHistory['USA mobile'])
    }
    enterpaypalcreditCardNum(){
        ElementUtil.sendText(this.paypalcardnumber,pdata.OrderHistory.PayPalVisa)
        ElementUtil.sendText(this.paypalmonth,pdata.OrderHistory.ValidMonth)
        ElementUtil.sendText(this.paypalcvv,pdata.OrderHistory.ValidCVC)
    }
    clicktckboxasbillingaddress(){
        ElementUtil.click(this.paypalsameasbillingtickbox, "Click paypal same as billing tickbox")
    }
    clickpaypalaccntradiobtn(){
        ElementUtil.scrollIntoView(this.paypalsameasbillingtickbox,"Scroll to same as billing tickbox")
        ElementUtil.click(this.paypalcreateaccounttickbox, "Click paypal create account tickbox")
    }
    clickcontinueasguest(){
        ElementUtil.click(this.paypalcontasguestbutton, "Click paypal continue as guest")
        BrowserUtil.wait(15);
        //ElementUtil.waitForDisplayed(this.paymentdonepopup, 50, "wait for page load")
    }
    paypalGuestCheckout() {
        ElementUtil.waitForClickable(this.paypalCheckoutCard, 60, "wait for page load")
        ElementUtil.sendText(this.paypalCheckoutCard, pdata.OrderHistory.PayPalVisa, "Enter VISA card number")
        ElementUtil.waitForClickable(this.paypalCheckoutExpiry, 5, "wait for page load")
        ElementUtil.sendText(this.paypalCheckoutExpiry, pdata.OrderHistory.ValidMonth, "Enter expiry")
        ElementUtil.waitForClickable(this.paypalCheckoutCVV, 5, "wait for page load")
        ElementUtil.sendText(this.paypalCheckoutCVV, pdata.OrderHistory.ValidCVC, "Enter CVV")
        ElementUtil.waitForClickable(this.paypalCheckoutCity, 5, "wait for page load")
        ElementUtil.click(this.paypalCheckoutCity, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.paypalCheckoutCity, pdata.OrderHistory.PayPalCity, "Enter city")
        ElementUtil.waitForClickable(this.paypalCheckoutZip, 5, "wait for page load")
        ElementUtil.click(this.paypalCheckoutZip, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.paypalCheckoutZip, pdata.OrderHistory.PayPalZip, "Enter zip code")
        ElementUtil.scrollIntoView(this.paypalCheckoutCity, "Scroll to bottom")
        ElementUtil.forceClick(this.paypalCheckoutCheckbox, "Click ship to billing checkbox")
        ElementUtil.waitForClickable(this.paypalCheckoutTelephone, 5, "wait for page load")
        ElementUtil.sendText(this.paypalCheckoutTelephone, pdata.OrderHistory['USA mobile'], "Entering telephone")
        ElementUtil.waitForClickable(this.paypalCheckoutSubmit, 5, "wait for page load")
        ElementUtil.click(this.paypalCheckoutSubmit, "Click submit")
        BrowserUtil.wait(15)
        ElementUtil.waitForDisplayed(this.paymentdonepopup, 60, "wait for page load")
    }
    clickaffirmradiobutton(){
        ElementUtil.click(this.radioaffirm,"click affirm radio button")
    }
    clickpaywithaffirmbutton(){
        ElementUtil.waitForClickable(this.paywithaffirmbutton, 20, "wait for page load")
        ElementUtil.click(this.paywithaffirmbutton,"click pay with affirm button")
        BrowserUtil.wait(5);
    }
    enterIndianPhoneShipping() {
        ElementUtil.sendText(this.txtPhoneShipping, pdata.OrderHistory.IndianMobile, "Entering Indian phone")
    }
    enterUSAMobileAffirm(){
        ElementUtil.sendText(this.affirmmobile,pdata.OrderHistory['USA mobile'])
    }
    clickcontinuewithaffirm(){
        ElementUtil.click(this.affirmcontinuebtn,"clic continue with affirm")
    }
    enteraffirmpin(){
        ElementUtil.sendText(this.affirmpassfield,pdata.OrderHistory['Affirm pin'])
        BrowserUtil.wait(6)
    }
    click3monthinstallmentoption(){
        ElementUtil.click(this.affirm1stoption,"click affirm 3 month installment option")
    }
    clickcontinuethisplan(){
        ElementUtil.click(this.affirmchooseoption,"click affirm continue btn")
    }
    clickautopay(){
        ElementUtil.click(this.affirmautopayradiobtn,"click affirm autopay radio button")
    }
    clickaffirmdisclaimer(){
        ElementUtil.click(this.affirmdisclaimer,"click affirm disclaimer")
    }
    clickaffirmcomplete(){
        ElementUtil.click(this.affirmconfirm,"click affirm confirm")
    }
    clickreturntomerchant(){
        let getWindowName= browser.getWindowHandle()
        BrowserUtil.wait(3)
        BrowserUtil.switchToFrame(this.affirmframe,"click affirmframe")
        ElementUtil.forceClick(this.affirmgotomerchant,"click affirm go to merchant")
        browser.switchToWindow(getWindowName)
        
    }
    enterinsuffientbalancecard(){
        ElementUtil.sendText(this.paypalcardnumber,pdata.OrderHistory.Insufficientfund)
        ElementUtil.sendText(this.paypalmonth,pdata.OrderHistory.ValidMonth)
        ElementUtil.sendText(this.paypalcvv,pdata.OrderHistory.ValidCVC)
    }
    clickcancelandreturnlink(){
        ElementUtil.click(this.paypalcancelarea,"click affirm confirm")
    }
    clickPaypalRadiobtn(){
        ElementUtil.click(this.radiopaypal,"click paypal radiobutton")
    }
    clickpaywithpaypalbtn(){
        ElementUtil.click(this.paywithpaypalbutton,"click pay with paypal btn")
    }
    clickdiamondereinstallmentradiobtn(){
        ElementUtil.click(this.radiothreepayment,"click diamondere installment radio btn")
    }
    clickpay1stinstallmentbtn(){
        ElementUtil.click(this.payfirstinstallmentbutton,"click pay 1st installment")
    }
    enterCardNumbervisainstallment(){
        let getWindowName= browser.getWindowHandle()
        BrowserUtil.wait(3)
        BrowserUtil.switchToFrame(this.frameinstallmentcard,"clickframeinstallment")
        ElementUtil.waitForEnabled(this.creditordebitcardnumberfield, 10, "wait for element");
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.VisacardNumber)
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.ValidMonth)
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.ValidCVC)
        browser.switchToWindow(getWindowName) 
    }
    enterCardNumbermasterinstallment(){
        let getWindowName= browser.getWindowHandle()
        BrowserUtil.wait(3)
        BrowserUtil.switchToFrame(this.frameinstallmentcard,"clickframeinstallment")
        ElementUtil.waitForEnabled(this.creditordebitcardnumberfield, 10, "wait for element");
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.MasterCardNumber)
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.ValidMonth)
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.ValidCVC)
        browser.switchToWindow(getWindowName) 
    }
    enterCardNumberamexinstallment(){
        let getWindowName= browser.getWindowHandle()
        BrowserUtil.wait(3)
        BrowserUtil.switchToFrame(this.frameinstallmentcard,"clickframeinstallment")
        ElementUtil.waitForEnabled(this.creditordebitcardnumberfield, 10, "wait for element");
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.AmexcardNumber)
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.ValidMonth)
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.AmexCVV)
        browser.switchToWindow(getWindowName) 
    }
    enterCardNumberdinerinstallment(){
        let getWindowName= browser.getWindowHandle()
        BrowserUtil.wait(3)
        BrowserUtil.switchToFrame(this.frameinstallmentcard,"clickframeinstallment")
        ElementUtil.waitForEnabled(this.creditordebitcardnumberfield, 10, "wait for element");
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.DinnersClubCardNumber)
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.ValidMonth)
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.ValidCVC)
        browser.switchToWindow(getWindowName) 
    }
    enterInvalidcardNumberinstallment(){
        let getWindowName= browser.getWindowHandle()
        BrowserUtil.wait(3)
        BrowserUtil.switchToFrame(this.frameinstallmentcard,"clickframeinstallment")
        ElementUtil.waitForEnabled(this.creditordebitcardnumberfield, 10, "wait for element");
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.InvalidCard)
        browser.switchToWindow(getWindowName) 
    }
    enterInvalidcardcvvinstallment(){
        let getWindowName= browser.getWindowHandle()
        BrowserUtil.wait(3)
        BrowserUtil.switchToFrame(this.frameinstallmentcard,"clickframeinstallment")
        ElementUtil.waitForEnabled(this.creditordebitcardnumberfield, 10, "wait for element");
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.VisacardNumber)
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.ValidMonth)
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.InvalidCVV)
        browser.switchToWindow(getWindowName) 
    }
    enterInvalidcardmmyyinstallment(){
        let getWindowName= browser.getWindowHandle()
        BrowserUtil.wait(3)
        BrowserUtil.switchToFrame(this.frameinstallmentcard,"clickframeinstallment")
        ElementUtil.waitForEnabled(this.creditordebitcardnumberfield, 10, "wait for element");
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.VisacardNumber)
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.InvalidMonthYear)
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.ValidCVC)
        browser.switchToWindow(getWindowName) 
    }
    enterCardNumbermaster(){
        let getWindowName= browser.getWindowHandle()
        BrowserUtil.wait(3)
        BrowserUtil.switchToFrame(this.framecreditcard,"clickframeinstallment")
        ElementUtil.waitForEnabled(this.creditordebitcardnumberfield, 10, "wait for element");
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.MasterCardNumber)
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.ValidMonth)
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.ValidCVC)
        browser.switchToWindow(getWindowName)  
    }
    enterCardNumberamex(){
        let getWindowName= browser.getWindowHandle()
        BrowserUtil.wait(3)
        BrowserUtil.switchToFrame(this.framecreditcard,"clickframeinstallment")
        ElementUtil.waitForEnabled(this.creditordebitcardnumberfield, 10, "wait for element");
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.AmexcardNumber)
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.ValidMonth)
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.AmexCVV)
        browser.switchToWindow(getWindowName)  
    }
    enterCardNumberdiner(){
        let getWindowName= browser.getWindowHandle()
        BrowserUtil.wait(3)
        BrowserUtil.switchToFrame(this.framecreditcard,"clickframeinstallment")
        ElementUtil.waitForEnabled(this.creditordebitcardnumberfield, 10, "wait for element");
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.DinnersClubCardNumber)
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.ValidMonth)
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.ValidCVC)
        browser.switchToWindow(getWindowName) 
    }
    async enterInvalidcardNumber(){
        let getWindowName= browser.getWindowHandle()
        BrowserUtil.wait(3)
        BrowserUtil.switchToFrame(this.framecreditcard,"clickframeinstallment")
        ElementUtil.waitForEnabled(this.creditordebitcardnumberfield, 10, "wait for element");
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.InvalidCard)
        browser.switchToWindow(getWindowName)
    }
    enterInvalidmonth(){
        let getWindowName= browser.getWindowHandle()
        BrowserUtil.wait(3)
        BrowserUtil.switchToFrame(this.framecreditcard,"clickframeinstallment")
        ElementUtil.waitForEnabled(this.creditordebitcardnumberfield, 10, "wait for element");
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.VisacardNumber)
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.InvalidMonthYear)
        browser.switchToWindow(getWindowName) 
    }
    enterInvalidcvv(){
        let getWindowName= browser.getWindowHandle()
        BrowserUtil.wait(3)
        BrowserUtil.switchToFrame(this.framecreditcard,"clickframeinstallment")
        ElementUtil.waitForEnabled(this.creditordebitcardnumberfield, 10, "wait for element");
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.VisacardNumber)
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.ValidMonth)
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.InvalidCVV)
        browser.switchToWindow(getWindowName) 
    }
    enterinsuffientcard(){
        let getWindowName= browser.getWindowHandle()
        BrowserUtil.wait(3)
        BrowserUtil.switchToFrame(this.framecreditcard,"clickframeinstallment")
        ElementUtil.waitForEnabled(this.creditordebitcardnumberfield, 10, "wait for element");
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.Insufficientfund)
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.ValidMonth)
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.ValidCVC)
        browser.switchToWindow(getWindowName) 
    }
    entergenericcard(){
        let getWindowName= browser.getWindowHandle()
        BrowserUtil.wait(3)
        BrowserUtil.switchToFrame(this.framecreditcard,"clickframeinstallment")
        ElementUtil.waitForEnabled(this.creditordebitcardnumberfield, 10, "wait for element");
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.GenericDecline)
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.ValidMonth)
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.ValidCVC)
        browser.switchToWindow(getWindowName) 
    }
    enterlostcard(){
        let getWindowName= browser.getWindowHandle()
        BrowserUtil.wait(3)
        BrowserUtil.switchToFrame(this.framecreditcard,"clickframeinstallment")
        ElementUtil.waitForEnabled(this.creditordebitcardnumberfield, 10, "wait for element");
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.Lostcard)
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.ValidMonth)
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.ValidCVC)
        browser.switchToWindow(getWindowName) 
    }
    enterprocessingcard(){
        let getWindowName= browser.getWindowHandle()
        BrowserUtil.wait(3)
        BrowserUtil.switchToFrame(this.framecreditcard,"clickframeinstallment")
        ElementUtil.waitForEnabled(this.creditordebitcardnumberfield, 10, "wait for element");
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.ProcessingError)
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.ValidMonth)
        ElementUtil.sendText(this.creditordebitcardnumberfield,pdata.OrderHistory.ValidCVC)
        browser.switchToWindow(getWindowName) 
    }
    clickcrossbtn(){
        ElementUtil.click(this.btnclosesymbol,"click close button")
    }
    clicknosaving(){
        ElementUtil.click(this.creditordebitnosaving,"click credit or debit card")
    }
    clickwirepayment(){
        ElementUtil.click(this.wirepaymentbtn,"click wirepayment btn")
    }
    clickpaywithwirepaymentbtn(){
        ElementUtil.click(this.paywithwirepaymentbutton,"click pay with wirepayment button")
    }
    clickgotopayment(){
        ElementUtil.click(this.gotopaymentpage,"click go to payment")
    }
    clearlocalstorage(){
        //browser.localStorage('DELETE')
        browser.execute('localStorage.clear()')
    }
    acceptCookies() {
        BrowserUtil.wait(5);
        if (ElementUtil.isVisible(this.paypalCookiesAccept, "Check the cookies popup")) {
            ElementUtil.click(this.paypalCookiesAccept, "select accept");
            BrowserUtil.wait(5);
        }
    }



}
module.exports = payment;