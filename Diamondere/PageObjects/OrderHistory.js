const ElementUtil = require('../../CommonUtils/ElementUtil');
const BrowserUtil = require('../../CommonUtils/BrowserUtil');
const data = require('../TestData/shoppingcartdata.json');
const context = require('../../CommonUtils/ScenarioContext')

class ShoppingCart {

    get btnddorderhistory(){
        return $('//p[contains(text(),"ORDER HISTORY")]')
    }
    
    get btnddtrackmyorder(){
        return $('//p[contains(text(),"TRACK MY ORDER")]')
    }
    
    get txtheadingorderhistory(){
        return $('//h4[text()="ORDER HISTORY"]')
    }
    get orderDetailsCard(){
        return $('//div[@class="card card-height p-15"][1]')
    }
    get txtnoordersfound(){
        return $('//p[contains(text(),"We did not find any orders.")]')
    }
    
    get txtOrderID(){
        return $('//span[contains(text(),"Order ID")]')
    }
    
    get txtexactorderIDvalue(){
        return $('//div[@class="is-size-7 is-flex is-justify-content-space-between is-align-items-baseline p-b-15"]/div/p[1]')
    }
    
    get txtOrderStatus(){
        return $('//span[contains(text(),"Order Status")]')
    }
    
    get txtexactorderstatusvalue(){
        return $('//div[@class="is-size-7 is-flex is-justify-content-space-between is-align-items-baseline p-b-15"]/div/p[2]')
    }
    
    get txtOrderDate(){
        return $('//span[contains(text(),"Order Date")]')
    }
    
    get txtexactorderDatevalue(){
        return $('//div[@class="is-size-7 is-flex is-justify-content-space-between is-align-items-baseline p-b-15"]/div/p[3]')
    }
    
    get lnkViewDetails(){
        return $('//div[@class="columns is-multiline p-b-20 m-0-touch"]//div[1]//div[1]//div[1]//div[2]')
    }
    get txtxshipandBillAdd(){
        return $('//p[text()="SHIPPING AND BILLING INFORMATION"]')
    }
    get txtheadingShippingaddress(){
        return $('//p[contains(text(),"SHIPPING ADDRESS")]')
    }
    
    get txtshippingaddress(){
        return $('//p[contains(text(),"SHIPPING ADDRESS")]/following-sibling::p[@class="is-size-7"]')
    }
    
    get txtheadingBillingaddress(){
        return $('//p[contains(text(),"BILLING ADDRESS")]')
    }
    
    get txtbillingaddress(){
        return $('//p[contains(text(),"BILLING ADDRESS")]/following-sibling::p[@class="is-size-7"]')
    }
    
    get txtheadingorderdetails(){
        return $('//span[contains(text()," ORDER DETAILS")]')
    }
    
    get txtsectionorderdetails(){
        return $('//div[@class="m-b-15"]//p[@class="is-size-7"]')
    }
    
    get txtheadingOrderSummary(){
        return $('//b[contains(text(),"ORDER SUMMARY")]')
    }
    get img1OrderHistPageOne(){
        return $('//img[@alt="Leyna"]')
    }
    get nameprod1(){
        return $('//div[@class="column is-three-quarters-mobile"]//div[contains(text(),"Leyna")]')
    }
    get txtprod1(){
        return $('//span[contains(text(),"Natural AAAA Sapphire Chain Bracelet in 14k White")]')
    }
    get txtbraceletlength(){
        return $('//span[@class="has-text-primary is-uppercase has-text-weight-semibold" and contains(text(),"Bracelet Length:")]')
    }
    get priceprod1(){
        return $('//div[contains(text(),"Leyna")]/parent::div/following-sibling::div/b/span')
    }
    get img2OrderHistPageOne(){
        return $('//img[@alt="Avalyn"]')
    }
    get txtprod2(){
        return $('//div[contains(text(),"Avalyn")]')
    }
    get priceprod2(){
        return $('//div[contains(text(),"Avalyn")]/parent::div/following-sibling::div/b/span')
    }
    get img3OrderHistPageOne(){
        return $('//img[@alt="Hesper"]')
    }
    get txtprod3(){
        return $('//span[contains(text(),"Aquamarine Apple Watch Band in 14k")]')
    }
    get priceprod3(){
        return $('//div[contains(text(),"Hesper")]/parent::div/following-sibling::div/b/span')
    }
    get img4OrderHistPageOne(){
        return $('//img[@alt="Edla"]')
    }
    get txtprod4(){
        return $('//div[contains(text(),"Edla")]')
    }
    get priceprod4(){
        return $('//div[contains(text(),"Edla")]/parent::div/following-sibling::div/b/span')
    }
    get txtSubtotal(){
        return $('//p[text()="Subtotal"]')
    }
    get txtSalesTax(){
        return $('//p[contains(text(),"Sales Tax")]')
    }
    get txtShipping(){
        return $('//p[contains(text(),"Shipping")]')
    }
    get txtTotal(){
        return $('//p[contains(text(),"Total")]')
    }
    get txtInstall(){
        return $('//div[contains(text(),"Installment Paid")]')
    }
    get txtPendingAmt(){
        return $('//p[contains(text(),"Pending Amount")]')
    }
    get txtTax(){
        return $('//span[contains(text(),"# Price excluding tax.")]')
    }
    get txtpayment(){
        return $('//p[contains(text(),"Payment Method")]')
    }
    get txtpaymentName(){
        return $('//p[contains(text(),"STRIPE")]')
    }
    get txtpaymentNamePaypal(){
        return $('//p[contains(text(),"PAYPAL")]')
    }
    get imgChain(){
        return $('//img[@alt="Box"]')
    }
    get txtChainSize(){
        return $('//span[contains(text(),"CHAIN SIZE:")]')
    }
    get txtChainInch(){
        return $('//span[contains(text()," 16 inches ")]')
    }
    get txtProtectnplan(){
        return $('//p[contains(text(),"Protection Plan")]')
    }
    get txtEngrave(){
        return $('//span[contains(text(),"Engraving")]')
    }
    get txtHerRingSize(){
        return $('//span[@class="has-text-primary is-uppercase has-text-weight-semibold" and contains(text(),"HER RING SIZE:")]')
    }
    get txtHisRingSize(){
        return $('//span[@class="has-text-primary is-uppercase has-text-weight-semibold" and contains(text(),"HIS RING SIZE:")]')
    }
    get lnkExtend(){
        return $('//a[@title="Extend"]')
    }
    get rayceRing(){
        return $('//div[contains(text(),"Rayce")]')
    }
    
    clickOrderHistOptn(){
        ElementUtil.click(this.btnddorderhistory, "click the order history button")
        BrowserUtil.wait(8);
    }
    clickViewDetails(){
        ElementUtil.click(this.lnkViewDetails, "click the order history button")
        BrowserUtil.wait(5);
    }
    moveToaddressSection(){
        ElementUtil.scrollIntoView(this.txtxshipandBillAdd, "Move to the address section")
    }
    movetoRayceRing(){
        ElementUtil.scrollIntoView(this.rayceRing, "Move to the rayce ring section")
    }

}
module.exports=ShoppingCart