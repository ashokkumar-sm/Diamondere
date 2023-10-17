const ElementUtil = require('../../CommonUtils/ElementUtil');
const BrowserUtil = require('../../CommonUtils/BrowserUtil');
const data = require('../TestData/Checkout.json');
const context = require('../../CommonUtils/ScenarioContext');
const dmd = require('../Configs/dmd_' + global.testEnv + '.js');

class Checkout {
    get btnCheckOut() {
        return $('//button[text()="CHECKOUT"]')
    }
    
    get btnAddToCartPage3() {
        return $('//div[@class="column is-6 is-hidden-touch"]//button[text()="ADD TO CART"]')
    }

    get logoDiamondere() {
        return $('//img[@alt="Logo"]')
    }

    get txtCheckout() {
        return $('//p[text()="CHECKOUT"]')
    }

    get txtNeedAssistance() {
        return $('//div[@class="m-r-5 m-b-4"]')
    }

    get lnkReqCallBackCheckout() {
        return $('//div[@title="Toll Free Contact"]')
    }

    get lnkEmailUsCheckout() {
        return $('//div[@class="is-flex is-justified-end is-size-7"]//div[@title="Contact Form"]')
    }

    get tabNeedAssistance() {
        return $('//div[@class="is-justify-content-center is-flex-md"]')
    }

    get tabLinkReqCallBack() {
        return $('//div[@title="Request Call Back"]')
    }

    get tabLinkTollFreeContact() {
        return $('//a[@title="Toll Free Contact"]')
    }

    get tabLinkEmailUs() {
        return $('//div[@class="is-justify-content-center is-flex-md"]//div[@title="Contact Form"]')
    }

    get sctnDisclaimer() {
        return $('//div[@class="copyright-section text-black font-family-raleway height-60-desktop height-100-touch has-text-centered p-t-18 p-b-5-touch p-b-18"]')
    }

    get lnkDisclaimer() {
        return $('//a[@title="Disclaimer"]')
    }

    get sctnShippingAndBilling() {
        return $('//div[@class="has-background-white"]//div[@class="has-background-white"]')
    }

    get headingShippingAndBilling() {
        return $('//div[@class="shipping-heading p-t-10 p-b-10"]//span[contains(text(),"1.")]')
    }

    get headingShippingAddress() {
        return $('//p[text()="Shipping Address"]')
    }

    get headingBillingAddress() {
        return $('//p[text()="Billing Address"]')
    }

    get txtSameAsShipping() {
        return $('//span[text()=" Same as shipping address "]')
    }

    get btnToggleSameAsShipping() {
        return $('//span[@class="switch"]')
    }

    get headingPaymentOptions() {
        return $('//div[@class="shipping-heading is-flex is-justify-content-space-between p-t-15 p-b-15 is-clickable"]//span[contains(text(),"2.")]')
    }

    get sctnProductsInCart() {
        return $('//div[@class="bottom-border p-b-15"]')
    }

    get sctnPriceDetails() {
        return $('//div[@class="has-text-primary is-size-6 p-l-15-touch p-r-15-touch is-uppercase"]')
    }

    get sctnJoinCustomers() {
        return $('//div[@class="columns is-gapless is-mobile has-text-centered m-t-7"]')
    }

    get img5Star() {
        return $('//div[@class="columns is-gapless is-mobile has-text-centered m-t-7"]//img[@alt="Thousands of 5-star Reviews"]')
    }
    get txtJoinCustomers() {
        return $('//div[@class="has-background-white m-t-12 is-hidden-touch"]//p[@class="is-size-6 has-text-centered bottom-divider-line has-text-primary p-t-7 p-b-7"][contains(text(),"Join 100,000 ecstatic customers")]')
    }
    get txtSecureShpng() {
        return $('//div[@class="columns is-gapless is-mobile has-text-centered m-t-7"]//div[@class="column m-l-10 m-r-10"]//p[contains(text(),"Secure & Insured Shipping")]')
    }
    get txt100Returns() {
        return $('//div[@class="columns is-gapless is-mobile has-text-centered m-t-7"]//img[@alt="Free 100 Day Returns"]')
    }

    get msgFieldErrors() {
        return $('//p[@class="help is-danger"]')
    }

    get txtFirstNameShipping() {
        return $('//input[@name="shippingAddressFirstName"]')
    }

    get txtCharLimitFirstName() {
        return $('//input[@name="shippingAddressFirstName"]/parent::div//small[text()=" 0 / 50 "]')
    }

    get txtLastNameShipping() {
        return $('//input[@name="shippingAddressLastName"]')
    }

    get txtCharLimitLastName() {
        return $('//input[@name="shippingAddressLastName"]/parent::div//small[text()=" 0 / 50 "]')
    }

    get txtEmailShipping() {
        return $('//input[@name="shippingAddressEmail"]')
    }

    get msgInvalidEmail() {
        return $('//p[contains(text(),"Email Address format is invalid")]')
    }

    get txtPhoneShipping() {
        return $('//input[@name="shippingAddressTelephone"]')
    }

    get msgInvalidPhone() {
        return $('//p[text()=" Please enter a valid number "]')
    }

    get txtCharLimitPhone() {
        return $('//input[@name="shippingAddressTelephone"]/parent::div//small[text()=" 0 / 40 "]')
    }

    get txtAddressShipping() {
        return $('//input[@name="shippingAddressLine1"]')
    }

    get txtCharLimitAddress() {
        return $('//input[@name="shippingAddressLine1"]/parent::div//small[text()=" 0 / 100 "]')
    }

    get txtAddressLine2Shipping() {
        return $('//input[@id="s_homeinfo"]')
    }

    get txtCharLimitAddressLine2() {
        return $('//div[@class="control is-clearfix"]/input[@name="billingAddressLine2"]/parent::div//small[text()=" 0 / 100 "]')
    }

    get txtCityShipping() {
        return $('//input[@name="shippingAddressCity"]')
    }

    get txtCharLimitCity() {
        return $('//input[@name="shippingAddressCity"]/parent::div//small[text()=" 0 / 45 "]')
    }

    get drpCountryShipping() {
        return $('//select[@name="shippingAddressCountry"]')
    }

    //country
    get optnUSShipping() {
        return $('//select[@name="shippingAddressCountry"]/option[@value ="US"]')
    }

    get optnCAShipping() {
        return $('//select[@name="shippingAddressCountry"]/option[@value ="CA"]')
    }

    get optnAUShipping() {
        return $('//select[@name="shippingAddressCountry"]/option[@value ="AU"]')
    }

    get optnINShipping() {
        return $('//select[@name="shippingAddressCountry"]/option[@value ="IN"]')
    }
    
    get drpStateShipping() {
        return $('//select[@name="shippingAddressState"]')
    }

    get optnCaliforniaShipping() {
        return $('//select[@name="shippingAddressState"]//option[@value="CA"]')
    }

    get optnSouthDakotaShipping() {
        return $('//select[@name="shippingAddressState"]//option[@value="SD"]')
    }

    get optnOntarioShipping() {
        return $('//select[@name="shippingAddressState"]//option[@value="ON"]')
    }

    get txtStateShipping() {
        return $('//input[@name="shippingAddressState"]')
    }

    get txtCharLimitState() {
        return $('//input[@name="shippingAddressState"]/parent::div//small[text()=" 0 / 45 "]')
    }

    get txtZipShipping() {
        return $('//input[@name="shippingAddressZipCode"]')
    }

    get txtCharLimitZip() {
        return $('//input[@name="shippingAddressZipCode"]/parent::div//small[text()=" 0 / 15 "]')
    }

    get btnContinueToPayment() {
        return $('//button[@class="button has-text-weight-medium is-info is-inline-block-tablet is-uppercase"]')
    }

    get txtFirstNameBilling() {
        return $('//input[@name="billingAddressFirstName"]')
    }
    get txtCharLimitFirstNameBill() {
        return $('//input[@name="billingAddressFirstName"]/parent::div//small[text()=" 0 / 50 "]')
    }
    get txtLastNameBilling() {
        return $('//input[@name="billingAddressLastName"]')
    }
    get txtCharLimitLastNameBill() {
        return $('//input[@name="billingAddressLastName"]/parent::div//small[text()=" 0 / 50 "]')
    }
    get txtEmailBilling() {
        return $('//input[@name="billingAddressEmail"]')
    }
    get txtPhoneBilling() {
        return $('//input[@name="billingAddressTelephone"]')
    }
    get txtCharLimitPhoneBill() {
        return $('//input[@name="billingAddressTelephone"]/parent::div//small[text()=" 0 / 40 "]')
    }
    get txtAddressBilling() {
        return $('//input[@name="billingAddressLine1"]')
    }
    get txtCharLimitAddressBill() {
        return $('//input[@name="billingAddressLine1"]/parent::div//small[text()=" 0 / 100 "]')
    }
    get txtAddressLine2Billing() {
        return $('//p[contains(text(),"Billing Address")]/parent::div/following-sibling::div//input[@name="billingAddressLine2"]')
    }
    get txtCharLimitAddressLine2Bill() {
        return $('//input[@id="b_homeinfo"]/following-sibling::small[text()=" 0 / 100 "]')
    }
    get txtCityBilling() {
        return $('//input[@name="billingAddressCity"]')
    }
    get txtCharLimitCityBill() {
        return $('//input[@name="billingAddressCity"]/parent::div//small[text()=" 0 / 45 "]')
    }
    get drpCountryBilling() {
        return $('//select[@name="billingAddressCountry"]')
    }
    get optnUSBilling() {
        return $('//select[@name="billingAddressCountry"]/option[@value ="US"]')
    }

    get optnCABilling() {
        return $('//select[@name="billingAddressCountry"]/option[@value ="CA"]')
    }

    get optnAUBilling() {
        return $('//select[@name="billingAddressCountry"]/option[@value ="AU"]')
    }

    get optnINBilling() {
        return $('//select[@name="billingAddressCountry"]/option[@value ="IN"]')
    }
    get drpStateBilling() {
        return $('//select[@name="billingAddressState"]')
    }
    get optnCaliforniaBilling() {
        return $('//select[@name="billingAddressState"]//option[@value="California"]')
    }

    get optnSouthDakotaBilling() {
        return $('//select[@name="billingAddressState"]//option[@value="South Dakota"]')
    }

    get optnOntarioBilling() {
        return $('//select[@name="billingAddressState"]//option[@value="Ontario"]')
    }
    get txtStateBilling() {
        return $('//input[@name="billingAddressState"]')
    }
    get txtCharLimitStateBill() {
        return $('//input[@name="billingAddressState"]/parent::div//small[text()=" 0 / 45 "]')
    }
    get txtZipBilling() {
        return $('//input[@name="billingAddressZipCode"]')
    }
    get txtCharLimitZipBill() {
        return $('//input[@name="billingAddressZipCode"]/parent::div//small[text()=" 0 / 15 "]')
    }

    get headingCheckedShippingAndBilling() {
        return $('//div[@class="shipping-heading p-t-10 p-b-10"]//span[@class="material-icons is-full-brightness has-text-success p-t-1 p-r-10 p-r-5-mob"]')
    }

    get msgMandatoryFirstName() {
        return $('//p[text()=" Enter first name "]')
    }

    get msgMandatoryLastName() {
        return $('//p[text()=" Enter last name "]')
    }

    get msgMandatoryEmail() {
        return $('//p[text()=" Enter email id "]')
    }

    get msgMandatoryPhone() {
        return $('//p[text()=" Enter mobile number "]')
    }

    get msgMandatoryAddress() {
        return $('//p[text()=" Enter address line 1 "]')
    }

    get msgMandatoryCity() {
        return $('//p[text()=" Enter city name "]')
    }

    get msgMandatoryState() {
        return $('//p[text()=" Enter state name "]')
    }

    get msgMandatoryZip() {
        return $('//p[text()=" Enter zip code "]')
    }

    get popupMandatory() {
        return $('//article[@class="message is-danger"]')
    }

    get popupTextFillDetails() {
        return $('//article[@class="message is-danger"]/header/p[contains(text(), "Please fill the required fields")]')
    }

    get popupXbutton() {
        return $('//article[@class="message is-danger"]/header/button[@class="delete"]')
    }

    get popupMandatoryContent() {
        return $('//article[@class="message is-danger"]//div[@class="media-content"]')
    }

    get consolidatedshippingname() {
        return $('//p[contains(text(),"Shipping Address")]/parent::div/div/p[1]')
    }
    get consolidatedshippingemail() {
        return $('//p[contains(text(),"Shipping Address")]/parent::div/div/p[2]')
    }
    get consolidatedshippingaddress() {
        return $('//p[contains(text(),"Shipping Address")]/parent::div/div/p[3]')
    }
    get consolidatedshippingcitystate() {
        return $('//p[contains(text(),"Shipping Address")]/parent::div/div/p[4]')
    }
    get consolidatedshippingcountry() {
        return $('//p[contains(text(),"Shipping Address")]/parent::div/div/p[5]')
    }
    get consolidatedshippingzip() {
        return $('//p[contains(text(),"Shipping Address")]/parent::div/div/p[6]')
    }
    get consolidatedbillingname() {
        return $('//p[contains(text(),"Billing Address")]/parent::div/div/p[1]')
    }
    get consolidatedbillingemail() {
        return $('//p[contains(text(),"Billing Address")]/parent::div/div/p[2]')
    }
    get consolidatedbillingaddress() {
        return $('//p[contains(text(),"Billing Address")]/parent::div/div/p[3]')
    }
    get consolidatedbillingcitystate() {
        return $('//p[contains(text(),"Billing Address")]/parent::div/div/p[4]')
    }
    get consolidatedbillingcountry() {
        return $('//p[contains(text(),"Billing Address")]/parent::div/div/p[5]')
    }
    get consolidatedbillingzip() {
        return $('//p[contains(text(),"Billing Address")]/parent::div/div/p[6]')
    }

    get lnkEditAddress() {
        return $('//div[@class="m-l-15 m-r-15 is-hidden-touch is-flex is-justify-content-space-between"]//button[@title="Edit address"]')
    }

    get txtEditedName() {
        return $('//p[text()="Shipping Address"]/parent::div//div/p[text()="Diamondere Testing"]')
    }

    get txtEditedEmail() {
        return $('//p[text()="Billing Address"]/parent::div//div/p[contains(text(),"automationtesting@gmail.com")]')
    }

    get sctnPaymentOptions() {
        return $('//div[@class="m-r-15 p-t-20"]/section')
    }

    get lnkExtend() {
        return $('//img[@alt="Extend"]/parent::a')
    }

    get imgExtendHomepageLogo() {
        return $('//img[@id="extend-logo"]')
    }

    get imgFlori() {
        return $('//img[@alt="Flori"]')
    }

    get txtFlori() {
        return $('//div[contains(text(),"Flori")]')
    }

    get txtFloriDesc() {
        return $('//div[contains(text(),"Marquise-cut Natural AAAA Ruby and  Diamond  Eternity Ring in 14k White Gold")]')
    }

    get txtFloriRingSize() {
        return $('//span[@class="has-text-primary"]/following-sibling::span[@class="is-size-7"]')
    }

    get txtPriceFlori() {
        return $('//div[@class="has-text-weight-medium is-size-5 p-r-10" and contains(text(), "$3,352")]')
    }

    get txtProtectionPlanFlori() {
        return $('(//div[@class="p-b-10"])[1]')
    }

    get lnkExtendFlori() {
        return $('(//div[@class="p-b-10"])[1]//img[@alt="Extend"]')
    }

    get btn3YearPlanFlori() {
        return $('(//div[@class="p-t-7"])[1]//span[contains(text(),"3 Year")]')
    }

    get btn5YearSelectedPlanFlori() {
        return $('(//div[@class="p-t-7"])[1]//span[contains(text(),"5 Year")]/parent::span/parent::p/parent::button[@class="button is-hovered ln-height-18 m-b-10 wd-65 wd-40-tab wd-90-mob m-r-12 is-info is-justify-content-space-between p-r-8"]')
    }

    get btnLifetimePlanFlori() {
        return $('(//div[@class="p-t-7"])[1]//span[contains(text(),"Lifetime")]')
    }

    get btnProtectionPlanDisabled() {
        return $('(//button[@title="Applicable for USA shipments only."])[1]')
    }

    get msgProtectionPlanOnlyUS() {
        return $('//p[contains(text(),"Accidental protection plan is offered within the US only")]')
    }

    get imgLileas() {
        return $('//img[@alt="Lileas"]')
    }

    get txtLileas() {
        return $('//div[contains(text(),"Lileas")]')
    }

    get txtLileasDesc() {
        return $('//div[contains(text()," Aquamarine and  Diamond  Nature Necklace in 14k White Gold")]')
    }

    get txtPriceLileas() {
        return $('//div[@class="has-text-weight-medium is-size-5 p-r-10" and contains(text(), "$977")]')
    }

    get txtProtectionPlanLileas() {
        return $('(//div[@class="p-b-10"])[2]')
    }

    get lnkExtendLileas() {
        return $('(//div[@class="p-b-10"])[2]//img[@alt="Extend"]')
    }

    get btn3YearPlanLileas() {
        return $('(//div[@class="p-t-7"])[2]//span[contains(text(),"3 Year")]')
    }

    get btn5YearPlanLileas() {
        return $('(//div[@class="p-t-7"])[2]//span[contains(text(),"5 Year")]')
    }

    get btnLifetimePlanLileas() {
        return $('(//div[@class="p-t-7"])[2]//span[contains(text(),"Lifetime")]')
    }

    get imgChain() {
        return $('//img[@alt="Box"]')
    }

    get txtChainStyle() {
        return $('//div[contains(text(),"Box")]')
    }

    get txtChainDesc() {
        return $('//div[contains(text(),"Chain for Lileas in 14k White Gold")]')
    }

    get txtChainSize() {
        return $('//span[contains(text(),"Chain Size:")]')
    }

    get txtChainPrice() {
        return $('//div[@class="has-text-weight-medium is-size-5 p-r-10" and contains(text(),"$160")]')
    }

    get imgMavis() {
        return $('//img[@alt="Mavis"]')
    }

    get txtMavis() {
        return $('//div[contains(text(),"Mavis")]')
    }

    get txtMavisDesc() {
        return $('//div[contains(text(),"Emerald-cut  London Blue Topaz Tennis Bracelet in 14k White Gold")]')
    }

    get txtMavisBraceletLength() {
        return $('//span[contains(text(),"BRACELET LENGTH:")]')
    }

    get txtMavisPrice() {
        return $('//div[@class="has-text-weight-medium is-size-5 p-r-10" and contains(text(),"$3,875")]')
    }

    get imgVogue() {
        return $('//img[@alt="Vogue"]')
    }

    get txtVogue() {
        return $('//div[contains(text(),"Vogue")]')
    }

    get txtVogueDesc() {
        return $('//div[contains(text()," Natural AAAA Emerald Drops Earring in 14k White Gold")]')
    }

    get txtVogueEarringBack() {
        return $('//span[contains(text(),"EARRING BACK:")]')
    }

    get txtVogueCenterStone() {
        return $('//span[contains(text(),"Center stone:")]')
    }

    get txtPriceVogue() {
        return $('//div[@class="has-text-weight-medium is-size-5 p-r-10" and contains(text(), "$6,516")]')
    }

    get txtProtectionPlanVogue() {
        return $('(//div[@class="p-b-10"])[3]')
    }

    get lnkExtendVogue() {
        return $('(//div[@class="p-b-10"])[3]//img[@alt="Extend"]')
    }

    get btn3YearSelectedPlanVogue() {
        return $('(//div[@class="p-t-7"])[3]//span[contains(text(),"3 Year")]/parent::span/parent::p/parent::button[@class="button is-hovered ln-height-18 m-b-10 wd-65 wd-40-tab wd-90-mob m-r-12 is-info is-justify-content-space-between p-r-8"]')
    }

    get btn5YearPlanVogue() {
        return $('(//div[@class="p-t-7"])[3]//span[contains(text(),"5 Year")]')
    }

    get btnLifetimePlanVogue() {
        return $('(//div[@class="p-t-7"])[3]//span[contains(text(),"Lifetime")]')
    }

    get btnLifetimeSelectedPlanVogue() {
        return $('(//div[@class="p-t-7"])[3]//span[contains(text(),"Lifetime")]/parent::span/parent::p/parent::button[@class="button is-hovered ln-height-18 m-b-10 wd-65 wd-40-tab wd-90-mob m-r-12 is-info is-justify-content-space-between p-r-8"]')
    }

    get btn3YearPlanVogue() {
        return $('(//div[@class="p-t-7"])[3]//span[contains(text(),"3 Year")]')
    }

    get txtSubtotal() {
        return $('//div[contains(text(),"Subtotal")]')
    }
    get txtShippingCal() {
        return $('//div[contains(text(),"Shipping")]')
    }
    get txtSalesTax() {
        return $('//div[contains(text(),"Sales Tax")]')
    }
    get txtCertifcation() {
        return $('//div[contains(text(),"Certification")]')
    }
    get txtTotal() {
        return $('//div[contains(text(),"Total")]')
    }
    get txtSubtotalAmount() {
        return $('//div[contains(text(),"Subtotal")]/following-sibling::div[@class="column has-text-right is-paddingless"]')
    }
    get txtShippingCalAmount() {
        return $('//div[contains(text(),"Shipping")]/following-sibling::div[@class="column has-text-right is-paddingless"]')
    }
    get txtSalesTaxAmount() {
        return $('//div[contains(text(),"Sales Tax")]/following-sibling::div[@class="column has-text-right is-paddingless"]')
    }
    get txtCertifcationAmount() {
        return $('//div[contains(text(),"Certification")]/following-sibling::div[@class="column has-text-right is-paddingless"]')
    }
    get txtTotalAmount() {
        return $('//div[contains(text(),"Total")]/following-sibling::div[@class="column has-text-right is-paddingless"]')
    }
    get txtDelDate() {
        return $('//p[@class="p-l-10-touch p-r-10-touch" and contains(text(),"Your handcrafted jewelry will be delivered in a gift box between")]')
    }
    get msgCustomDiamondDisclaimer() {
        return $('//div[@class="is-size-7" and contains(text(),"In the rare scenario that your chosen diamond is sold")]')
    }
    get lnkSafeAndSecure() {
        return $('//div[@class="column is-four-fifths is-paddingless m-t-5"]//a[text()="Safe and secure"]')
    }

    get sctnSafeAndSecure() {
        return $('//div[@class="column is-four-fifths is-paddingless m-t-5"]')
    }

    get txtSalesTaxAmountInDollars() {
        return $('//div[contains(text(),"Sales Tax")]/following-sibling::div[contains(text(),"$")]')
    }

    get txtSalesTaxAmountZero() {
        return $('//div[contains(text(),"Sales Tax")]/following-sibling::div[contains(text(),"$0")]')
    }

    get msgDisclaimerSalesTax() {
        return $('//div[@class="prod-custom-val p-5-touch" and contains(text(),"we charge tax")]')
    }

    get txtPrepaidTaxOrDuty() {
        return $('//div[contains(text(),"Prepaid Tax/Duty")]')
    }

    get msgDisclaimerPrepaidTax() {
        return $('//div[contains(text(),"to prepay all necessary custom duties")]')
    }

    get msgDisclaimerCustomClearance() {
        return $('//p[contains(., "Delivery dates could vary")]')
    }


//Methods
    addToCartVogue() {
        BrowserUtil.wait(2)
        ElementUtil.mouseHover(this.btnAddToCartPage3, "Hover Add to Cart")
        ElementUtil.waitForClickable(this.btnAddToCartPage3, 60, "wait for page load")
        ElementUtil.click(this.btnAddToCartPage3, "Click Add to Cart")
        ElementUtil.waitForDisplayed(this.btnCheckOut, 60, "wait for page load")
    }

    clickLogo() {
        ElementUtil.click(this.logoDiamondere, "Click logo")
    }

    moveToShippingAddress() {
        ElementUtil.mouseHover(this.headingShippingAddress, "Move to shipping address")
    }

    moveToProductDetails() {
        ElementUtil.mouseHover(this.sctnProductsInCart, "Move to product details")   
    }

    enterFirstNameShipping() {
        ElementUtil.sendText(this.txtFirstNameShipping, data.Shipping.FirstName, "Entering first name")
    }

    enterFirstNameBilling() {
        ElementUtil.sendText(this.txtFirstNameBilling, data.Billing.FirstName, "Entering first name")
    }

    enterLastNameShipping() {
        ElementUtil.sendText(this.txtLastNameShipping, data.Shipping.LastName, "Entering last name")
    }

    enterLastNameBilling() {
        ElementUtil.sendText(this.txtLastNameBilling, data.Billing.LastName, "Entering last name")
    }

    enterEmailShipping() {
        ElementUtil.sendText(this.txtEmailShipping, data.Shipping.Email, "Entering email")
    }

    enterEmailBilling() {
        ElementUtil.sendText(this.txtEmailBilling, data.Billing.Email, "Entering email")
    }

    enterPhoneShipping() {
        ElementUtil.sendText(this.txtPhoneShipping, data.Shipping.Phone, "Entering phone")
    }
    
    enterPhoneBilling() {
        ElementUtil.sendText(this.txtPhoneBilling, data.Billing.Phone, "Entering phone")
    }

    enterAddressShipping() {
        ElementUtil.isVisible(this.txtCharLimitAddress, "Check the char limit text")
        ElementUtil.sendText(this.txtAddressShipping, data.Shipping.Address, "Entering address")
        ElementUtil.click(this.txtPhoneShipping, "Click textbox")
    }

    enterAddressBilling() {
        ElementUtil.isVisible(this.txtCharLimitAddressBill, "Check the char limit text")
        ElementUtil.sendText(this.txtAddressBilling, data.Billing.Address, "Entering address")
        ElementUtil.click(this.txtZipShipping, "Click textbox")
    }

    enterAddressLine2Shipping() {
        ElementUtil.isVisible(this.txtCharLimitAddressLine2, "Check the char limit text")
        ElementUtil.sendText(this.txtAddressLine2Shipping, data.Shipping.AddressLine2, "Entering address line 2")
    }

    enterAddressLine2Billing() {
        ElementUtil.isVisible(this.txtCharLimitAddressLine2Bill, "Check the char limit text")
        ElementUtil.sendText(this.txtAddressLine2Billing, data.Billing.AddressLine2, "Entering address line 2")
    }

    enterCityShipping() {
        ElementUtil.isVisible(this.txtCharLimitCity, "Check the char limit text")
        ElementUtil.sendText(this.txtCityShipping, data.Shipping.City, "Entering city")
    }

    enterCityBilling() {
        ElementUtil.isVisible(this.txtCharLimitCityBill, "Check the char limit text")
        ElementUtil.sendText(this.txtCityBilling, data.Billing.City, "Entering city")
    }

    selectCountryDropdown() {
        ElementUtil.click(this.drpCountryShipping, "Selecting country dropdown")
    }

    selectCountryDropdownBilling() {
        ElementUtil.scrollIntoView(this.drpCountryShipping, "Scroll to billing section")
        ElementUtil.mouseHover(this.drpCountryBilling, "Hover over country dropdown")
        ElementUtil.click(this.drpCountryBilling, "Selecting country dropdown")
    }

    selectUSShipping() {
        ElementUtil.click(this.drpCountryShipping, "Selecting country dropdown")
        ElementUtil.click(this.optnUSShipping, "Select US")
        ElementUtil.click(this.txtFirstNameShipping, "Click text box")
    }

    selectUSBilling() {
        ElementUtil.click(this.drpCountryBilling, "Selecting country dropdown")
        ElementUtil.click(this.optnUSBilling, "Select US")
    }

    selectAustraliaShipping() {
        ElementUtil.click(this.drpCountryShipping, "Selecting country dropdown")
        ElementUtil.click(this.optnAUShipping, "Select Australia")
    }

    selectCaliforniaShipping() {
        ElementUtil.click(this.drpStateShipping, "Selecting state dropdown")
        ElementUtil.click(this.optnCaliforniaShipping, "Select California")
        ElementUtil.click(this.txtZipShipping, "Click zip code box")
    }

    selectCaliforniaBilling() {
        ElementUtil.click(this.drpStateBilling, "Selecting state dropdown")
        ElementUtil.click(this.optnCaliforniaBilling, "Select California")
    }

    enterZipCodeShipping() {
        ElementUtil.sendText(this.txtZipShipping, data.Shipping.Zip, "Entering zip code")
    }

    enterZipCodeBilling() {
        ElementUtil.sendText(this.txtZipBilling, data.Billing.Zip, "Entering zip code")
    }

    continueToPaymentStateDrp() {
        BrowserUtil.wait(2)
        ElementUtil.waitForClickable(this.btnContinueToPayment, 60, "wait for page load")
        ElementUtil.click(this.btnContinueToPayment, "Click continue to payment")
        BrowserUtil.wait(5)
    }

    clickContinueToPayment() {
        BrowserUtil.wait(2)
        ElementUtil.waitForClickable(this.btnContinueToPayment, 60, "wait for page load")
        ElementUtil.click(this.btnContinueToPayment, "Click continue to payment")
        BrowserUtil.wait(5)
        ElementUtil.waitForDisplayed(this.sctnPaymentOptions, 50, "wait for page load")
    }

    enterSpecialCharFirstName() {
        ElementUtil.isVisible(this.txtCharLimitFirstName, "Check the char limit text")
        ElementUtil.sendText(this.txtFirstNameShipping, data.Shipping.RestrictedCharFirstName, "Entering first name - special character")
    }

    enterSpecialCharFirstNameBill() {
        ElementUtil.isVisible(this.txtCharLimitFirstNameBill, "Check the char limit text")
        ElementUtil.sendText(this.txtFirstNameBilling, data.Shipping.RestrictedCharFirstName, "Entering first name - special character")
    }

    enterSpecialCharLastName() {
        ElementUtil.isVisible(this.txtCharLimitLastName, "Check the char limit text")
        ElementUtil.sendText(this.txtLastNameShipping, data.Shipping.RestrictedCharLastName, "Entering last name - special character")
    }

    enterSpecialCharLastNameBill() {
        ElementUtil.isVisible(this.txtCharLimitLastNameBill, "Check the char limit text")
        ElementUtil.sendText(this.txtLastNameBilling, data.Shipping.RestrictedCharLastName, "Entering last name - special character")
    }

    enterInvalidEmailShipping() {
        ElementUtil.sendText(this.txtEmailShipping, data.Shipping.InvalidEmail1, "Entering invalid email 1")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.clearText(this.txtEmailShipping, "Clear text box")
        ElementUtil.sendText(this.txtEmailShipping, data.Shipping.InvalidEmail2, "Entering invalid email 2")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.clearText(this.txtEmailShipping, "Clear text box")
        ElementUtil.sendText(this.txtEmailShipping, data.Shipping.InvalidEmail3, "Entering invalid email 3")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.clearText(this.txtEmailShipping, "Clear text box")
        ElementUtil.sendText(this.txtEmailShipping, data.Shipping.InvalidEmail4, "Entering invalid email 4")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.clearText(this.txtEmailShipping, "Clear text box")
        ElementUtil.sendText(this.txtEmailShipping, data.Shipping.InvalidEmail5, "Entering invalid email 5")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.clearText(this.txtEmailShipping, "Clear text box")
        ElementUtil.sendText(this.txtEmailShipping, data.Shipping.InvalidEmail6, "Entering invalid email 6")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.clearText(this.txtEmailShipping, "Clear text box")
        ElementUtil.sendText(this.txtEmailShipping, data.Shipping.InvalidEmail7, "Entering invalid email 7")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.clearText(this.txtEmailShipping, "Clear text box")
        ElementUtil.sendText(this.txtEmailShipping, data.Shipping.InvalidEmail8, "Entering invalid email 8")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.clearText(this.txtEmailShipping, "Clear text box")
        ElementUtil.sendText(this.txtEmailShipping, data.Shipping.InvalidEmail9, "Entering invalid email 9")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.clearText(this.txtEmailShipping, "Clear text box")
        ElementUtil.sendText(this.txtEmailShipping, data.Shipping.InvalidEmail10, "Entering invalid email 10")
    }

    enterInvalidEmailBilling() {
        ElementUtil.sendText(this.txtEmailBilling, data.Shipping.InvalidEmail1, "Entering invalid email 1")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.clearText(this.txtEmailBilling, "Clear text box")
        ElementUtil.sendText(this.txtEmailBilling, data.Shipping.InvalidEmail2, "Entering invalid email 2")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.clearText(this.txtEmailBilling, "Clear text box")
        ElementUtil.sendText(this.txtEmailBilling, data.Shipping.InvalidEmail3, "Entering invalid email 3")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.clearText(this.txtEmailBilling, "Clear text box")
        ElementUtil.sendText(this.txtEmailBilling, data.Shipping.InvalidEmail4, "Entering invalid email 4")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.clearText(this.txtEmailBilling, "Clear text box")
        ElementUtil.sendText(this.txtEmailBilling, data.Shipping.InvalidEmail5, "Entering invalid email 5")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.clearText(this.txtEmailBilling, "Clear text box")
        ElementUtil.sendText(this.txtEmailBilling, data.Shipping.InvalidEmail6, "Entering invalid email 6")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.clearText(this.txtEmailBilling, "Clear text box")
        ElementUtil.sendText(this.txtEmailBilling, data.Shipping.InvalidEmail7, "Entering invalid email 7")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.clearText(this.txtEmailBilling, "Clear text box")
        ElementUtil.sendText(this.txtEmailBilling, data.Shipping.InvalidEmail8, "Entering invalid email 8")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.clearText(this.txtEmailBilling, "Clear text box")
        ElementUtil.sendText(this.txtEmailBilling, data.Shipping.InvalidEmail9, "Entering invalid email 9")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.clearText(this.txtEmailBilling, "Clear text box")
        ElementUtil.sendText(this.txtEmailBilling, data.Shipping.InvalidEmail10, "Entering invalid email 10")
    }

    enterSpecialCharPhone() {
        ElementUtil.isVisible(this.txtCharLimitPhone, "Check the char limit text")
        ElementUtil.sendText(this.txtPhoneShipping, data.Shipping.InvalidPhone1, "Entering invalid phone 1")
        ElementUtil.isVisible(this.msgInvalidPhone, "Check invalid phone message")
        ElementUtil.click(this.txtPhoneShipping, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtPhoneShipping, data.Shipping.InvalidPhone2, "Entering invalid phone 2")
    }

    enterSpecialCharPhoneBill() {
        ElementUtil.isVisible(this.txtCharLimitPhoneBill, "Check the char limit text")
        ElementUtil.sendText(this.txtPhoneBilling, data.Shipping.InvalidPhone1, "Entering invalid phone 1")
        ElementUtil.isVisible(this.msgInvalidPhone, "Check invalid phone message")
        ElementUtil.click(this.txtPhoneBilling, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtPhoneBilling, data.Shipping.InvalidPhone2, "Entering invalid phone 2")
    }

    selectCanadaShipping() {
        ElementUtil.click(this.drpCountryShipping, "Selecting country dropdown")
        ElementUtil.click(this.optnCAShipping, "Select Canada")
    }

    selectCanadaBilling() {
        ElementUtil.click(this.drpCountryBilling, "Selecting country dropdown")
        ElementUtil.click(this.optnCABilling, "Select Canada")
    }

    selectIndiaShipping() {
        ElementUtil.click(this.drpCountryShipping, "Selecting country dropdown")
        ElementUtil.click(this.optnINShipping, "Select India")
    }

    selectIndiaBilling() {
        ElementUtil.click(this.drpCountryBilling, "Selecting country dropdown")
        ElementUtil.click(this.optnINBilling, "Select India")
    }

    enterSpecialCharState() {
        ElementUtil.isVisible(this.txtCharLimitState, "Check the char limit text")
        ElementUtil.sendText(this.txtStateShipping, data.Shipping.SpecialCharState, "Entering state - special character")
    }

    enterSpecialCharStateBill() {
        ElementUtil.isVisible(this.txtCharLimitStateBill, "Check the char limit text")
        ElementUtil.sendText(this.txtStateBilling, data.Shipping.SpecialCharState, "Entering state - special character")
    }

    enterSpecialCharZip() {
        ElementUtil.isVisible(this.txtCharLimitZip, "Check the char limit text")
        ElementUtil.sendText(this.txtZipShipping, data.Shipping.SpecialCharZip, "Entering zip - special character")
    }

    enterSpecialCharZipBill() {
        ElementUtil.isVisible(this.txtCharLimitZipBill, "Check the char limit text")
        ElementUtil.sendText(this.txtZipBilling, data.Shipping.SpecialCharZip, "Entering zip - special character")
    }

    clickEditAddress() {
        ElementUtil.click(this.lnkEditAddress, "Click edit address")
    }

    editName() {
        ElementUtil.click(this.txtFirstNameShipping, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        //ElementUtil.clearText(this.txtFirstNameShipping, "Clear text")
        ElementUtil.sendText(this.txtFirstNameShipping, data.Shipping.EditedName, "Enter new name")
    }

    editEmail() {
        ElementUtil.click(this.txtEmailBilling, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        //ElementUtil.clearText(this.txtEmailBilling, "Clear text")
        ElementUtil.sendText(this.txtEmailBilling, data.Billing.EditedEmail, "Enter new email") 
    }

    selectOntarioBilling() {
        ElementUtil.click(this.drpStateBilling, "Click state dropdown")
        ElementUtil.click(this.optnOntarioBilling, "Click Ontario")
    }

    browseBack() {
        browser.back();
        BrowserUtil.wait(3)
    }

    disableToggle() {
        ElementUtil.click(this.btnToggleSameAsShipping, "Disabling toggle")
        ElementUtil.scrollIntoView(this.drpCountryShipping, "Scroll to billing section")
    }

    clickExtend() {
        ElementUtil.click(this.lnkExtend, "Click Extend")
        BrowserUtil.wait(3)
        browser.switchWindow(dmd.config.ExtendPageUrl)
    }

    scrollToPriceDetails() {
        ElementUtil.scrollIntoView(this.txtSubtotal, "Scroll to price details")
    }   
    
    selectSouthDakotaShipping() {
        ElementUtil.click(this.drpStateShipping, "Selecting state dropdown")
        ElementUtil.click(this.optnSouthDakotaShipping, "Select California")
    }

    clickSafeAndSecure() {
        ElementUtil.click(this.lnkSafeAndSecure, "Click link")
        browser.switchWindow(dmd.config.DigicertUrl)
    }

    clickDisclaimer() {
        ElementUtil.click(this.lnkDisclaimer, "Click link")
        browser.switchWindow(dmd.config.DiamondereDisclaimerUrl)
    }

    remove3YearPlan() {
        ElementUtil.scrollIntoView(this.imgChain, "Scroll to Vogue")
        ElementUtil.click(this.btn3YearSelectedPlanVogue, "removing 3 year plan")
        BrowserUtil.wait(3)
    }

    selectLifetimePlan() {
        ElementUtil.waitForClickable(this.btnLifetimePlanVogue, 50, "wait for page load")
        ElementUtil.click(this.btnLifetimePlanVogue, "Select lifetime plan")
        BrowserUtil.wait(3)
    }

    select3YearPlan() {
        ElementUtil.waitForClickable(this.btn3YearPlanVogue, 50, "wait for page load")
        ElementUtil.click(this.btn3YearPlanVogue, "Click 3 year plan again")
        BrowserUtil.wait(5)
    }

}
module.exports = Checkout