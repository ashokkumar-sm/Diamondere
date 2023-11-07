const ElementUtil = require('../../CommonUtils/ElementUtil');
const BrowserUtil = require('../../CommonUtils/BrowserUtil');
const data = require('../TestData/Trackmyorder.json');
const dataold = require('../TestData/RegistrationandLogin.json');
const context = require('../../CommonUtils/ScenarioContext')

class TOM {
    get titleTrackMyOrder() {
        return $('//a[@title="TRACK MY ORDER"]')
    }

    get txtheadingtrackmyorder(){
        return $('//span[contains(text(),"TRACK MY ORDER")]')
    }
    
    get boxordernumber(){
        return $('//input[@id="order_number"]')
    }
    
    get boxlastname(){
        return $('//input[@id="contact_us_name"]')
    }

    get btnsearch(){
        return $('//button[contains(text(),"Search")]')
    }

    get txtmandatordernumber(){
        return $('//p[contains(text()," Please enter order number. ")]')
    }

    get txtmandatLastname(){
        return $('//p[contains(text()," Please enter billing last name. ")]')
    }

    get txtheadingOrderId(){
        return $('//span[contains(text(),"Order ID:")]')
    }
    
    get txtheadingOrderStatus(){
        return $('//span[contains(text(),"Order Status:")]')
    }

    get txtheadingOrderdate(){
        return $('//span[contains(text(),"Order Date:")]')
    }

    get txtheadingEstimateddelivery(){
        return $('//span[contains(text(),"Estimated Delivery:")]')
    }

    get txtmsgEstimatedDelivery(){
        return $('//span[contains(text(),"Your handcrafted jewelry will be delivered in a gift box between")]')
    }

    get txtheadingOrdersummary(){
        return $('//div[@class="invoice-header-text m-b-10"]')
    }

    get imgproductfirstroworderdetails() {
        return $('//img[@alt="Hesper"]')
    }
    get txtnameproductfirstroworderdetails() {
        return $('//div[contains(text(),"Hesper")]')
    }
    get txtdetailsproductfirstroworderdetails() {
        return $('//span[contains(text(),"Aquamarine Apple Watch Band in 14k White Gold")]')
    }
    get txtpriceproductfirstroworderdetails() {
        return $('//div[@class="is-hidden-mobile column is-2 has-text-right"]//b[@class="is-size-5" and contains(text(),"5,139")]')
    }

    get txtsubtotal(){
        return $('//p[contains(text(),"Subtotal")]')
    }

    get txtsalestax(){
        return $('//p[contains(text(),"Sales Tax ")]')
    }

    get txtshipping(){
        return $('//p[contains(text(),"Shipping")]')
    }
    
    get txtTotal(){
        return $('//p[contains(text(),"Total")]')
    }

    get txtpaymentmethod(){
        return $('//p[contains(text(),"Payment Method")]')
    }

    get txtStripe(){
        return $('//p[contains(text(),"STRIPE")]')
    }

    get txtheadingshippingandbilling(){
        return $('//p[contains(text(),"SHIPPING AND BILLING INFORMATION")]')
    }

    get txtheadingshippingaddress(){
        return $('//p[contains(text(),"SHIPPING ADDRESS")]')
    }

    get txtdetailsshippingaddress(){
        return $('//p[contains(text(),"SHIPPING ADDRESS")]//following::div[@class="is-size-7"][1]')
    }

    get txtheadingbillingaddress(){
        return $('//p[contains(text(),"BILLING ADDRESS")]')
    }

    get txtdetailsbillingaddress(){
        return $('//p[contains(text(),"BILLING ADDRESS")]//following::div[@class="is-size-7"]')
    }

    get txtheadingerrormessage(){
        return $('//header[@class="message-header"]')
    }
    
    get txtmsgerror(){
        return $('//li[contains(text(),"The current search did not retrieve any results.")]')
    }
    get btnclose(){
        return $('//button[@class="delete"]')
    }

    async selectdrptrackmyorder() {
        await ElementUtil.click(this.titleTrackMyOrder, "click track my order")
        await BrowserUtil.wait(5)
    }

    async enterlastname(){
        await ElementUtil.sendText(this.boxlastname,data.Trackorder.Lastname,"Enter last name in Last name field")
    }

    async selectsearchbutton(){
        await ElementUtil.click(this.btnsearch,"Select search button")
        await BrowserUtil.wait(3)
    }

    async enterOrderId(){
        await ElementUtil.sendText(this.boxordernumber,data.Trackorder.OrderId,"Enter OrderId in OrderId field")
    }

    async enterincorrectOrderId(){
        await ElementUtil.sendText(this.boxordernumber,data.Trackorder.IncorrectOrderId,"Enter Incorrect OrderId in OrderId field");
        await ElementUtil.sendText(this.boxlastname,data.Trackorder.Lastname,"Send valid last name in the field")
    }

    async selectclosebuttonTOM(){
        await ElementUtil.click(this.btnclose,"Select close button in error popup")
    }

    async enterincorrectLastname(){
        await ElementUtil.click(this.boxordernumber, "Click on orderId field");
        await ElementUtil.clearText(this.boxordernumber, "Clearing the text");
        await ElementUtil.sendText(this.boxordernumber,data.Trackorder.OrderId,"Enter correct OrderId in OrderId field");
        await ElementUtil.click(this.boxlastname, "Click on Lastname field");
        await ElementUtil.clearText(this.boxlastname, "Clearing the text");
        await ElementUtil.sendText(this.boxlastname,data.Trackorder.IncorrectLastName,"Send incorrect last name in the field")
    }
    

}
module.exports = TOM