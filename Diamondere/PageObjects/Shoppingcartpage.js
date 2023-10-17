const ElementUtil = require("../../CommonUtils/ElementUtil");
const BrowserUtil = require('../../CommonUtils/BrowserUtil');
const data = require('../TestData/productdetailsdata.json');
const sdata = require('../TestData/shoppingcartdata.json');

class shoppingcart {
    //setting addto cart 
    get settingaddtocart(){
        return $('(//button[@title="Checkout Engagement Ring & Selected Band"])[1]')
    }
    //matchingband
    get addringbandband(){
        return $('//button[contains(text(),"Add Ring and Band")]')
    }
    get bandproductpopforaddtocartimage(){
        return $('(//img[@class="modal-img"])[2]')
    }
    get bandproductpopforaddtocartproductname(){
        return $('//img[@class="modal-img"]/parent::div/parent::div/following::div//span[@class="has-text-weight-semibold"]')
    }
    get bandproductpopforaddtocartproductprice(){
        return $('//img[@class="modal-img"]/parent::div/parent::div/following::div//span[@class="has-text-weight-semibold is-size 6"]')
    }
    get bandproductpopforaddtocartproductdescription(){
        return $('//img[@class="modal-img"]/parent::div/parent::div/following::div//p[@class="m-b-15 has-text-primary"]')
    }
    get bandproductpopforaddtocartproductmoreinforingsize(){
        return $('//img[@class="modal-img"]/parent::div/parent::div/following::div//p/following-sibling::p/span[@class="has-text-primary"][1]')
    }
    //Before ShoppingCart
    get productpopforaddtocart(){
        return $('//div[@class="card-content has-text-centered"]')
    }
    get productpopforaddtocartimage(){
        return $('//img[@class="modal-img"]')
    }
    get productpopforaddtocartproductname(){
        return $('//img[@class="modal-img"]/parent::div/p/span[1]')
    }
    get productpopforaddtocartproductcrossedprice(){
        return $('//img[@class="modal-img"]/parent::div/p/del')
    }
    get productpopforaddtocartproductprice(){
        return $('//img[@class="modal-img"]/parent::div/p/span[2]')
    }
    get productpopforaddtocartproductdescription(){
        return $('//div[@class="card-content has-text-centered"]/div/div/div/p/following::p[@class="m-b-15 has-text-primary"]')
    }
    get productpopforaddtocartproductmoreinfoarea(){
        return $('//div[@class="card-content has-text-centered"]/div/div/div/following::div[@class="m-b-15 cart-details"]')
    }
    get complimentstext(){
        return $('//span[contains(text(),"FREE")]')
    }
    get checkoutbtn(){
        return $('//button[contains(text(),"CHECKOUT")]')
    }
    get continueshoppingbtn(){
        return $('//button[contains(text(),"CONTINUE SHOPPING")]')
    }
    //ringsize and Bracelet length
    get productpopforaddtocartproductmoreinforingsize(){
        return $('(//div[@class="card-content has-text-centered"]/div/div/div/following::div/p/span/following::span[@class="has-text-primary"])[1]')
    }

    //Necklace additional chain
    get productpopforaddtocartproductmoreinfosterlingsilverfree(){
        return $('//div[@class="is-flex is-justified-center"]/div/following-sibling::div/p/span[contains(text(),"Free")]')
    }
    get productpopforaddtocartproductmoreinfochain(){
        return $('//div[@class="is-flex is-justified-center"]/div/following-sibling::div/p')
    }
    get productpopforaddtocartproductmoreinfochainprice(){
        return $('//div[@class="is-flex is-justified-center"]/div/following-sibling::div/p/span/span')
    }

    get productpopforaddtocartproductcontinueshoppingbutton(){
        return $('//div[@class="card-content has-text-centered"]/div[@class="columns is-marginless"]/div/button[contains(text(),"CONTINUE SHOPPING")]')
    }
    get productpopforaddtocartproductcheckoutbutton(){
        return $('//div[@class="card-content has-text-centered"]/div[@class="columns is-marginless"]/div/button[contains(text(),"CHECKOUT")]')
    }
    get productpopforaddtocartcrossbutton(){
        return $('//div[@class="card"]/div/span[@class="material-icons is-pulled-right is-clickable m-5"]')
    }

    //ShoppingCart Page
    get yourshoppingcarttext(){
        return $('//div[contains(text(),"YOUR SHOPPING CART")]')
    }
    get topproceedtopaymentbutton(){
        return $('//div[contains(text(),"YOUR SHOPPING CART")]/button[contains(text(),"PROCEED TO PAYMENT")]')
    }
    get eachproductarea(){
        return $('//div[@class="has-text-centered column is-3-tablet is-paddingless"]/parent::div')
    }
    get productimage(){
        return $('//div[@class="is-gapless has-background-white is-relative m-20 m-l-0-touch m-r-0-touch"]/div/div/div[@class="is-clickable"]')
    }
    //particular image,name,desc
    get xylosimage(){
        return $('//img[@src="https://images.diamondere.com/new_images/products/xylos/xylos_wg_ru_di_0.jpg"]')
    }
    get xylosname(){
        return $('//p[contains(text(),"Xylos")]')
    }
    get xylosdescription(){
        return $('//p[contains(text(),"Xylos")]/following-sibling::p[1]')
    }
    get amaniname(){
        return $('//p[contains(text(),"Amani")]')
    }
    get amanidescription(){
        return $('//p[contains(text(),"Amani")]/following-sibling::p[1]')
    }
    get amanipricearea(){
        return $('//p[contains(text(),"Amani")]/parent::div/parent::div//span[contains(text(),"$")]')
    }
    get jolieimage(){
        return $('//img[@src="https://images.diamondere.com/new_images/products/jolie/jolie_wg_ru_0.jpg"]')
    }
    get joliename(){
        return $('//p[contains(text(),"Jolie")]')
    }
    get joliedescription(){
        return $('//p[contains(text(),"Jolie")]/following-sibling::p[1]')
    }
    get joliepricearea(){
        return $('//p[contains(text(),"Jolie")]/parent::div/parent::div//span[contains(text(),"$")]')
    }
    get zainabimage(){
        return $('//img[@src="https://images.diamondere.com/new_images/products/zainab/zainab_wg_ru_0.jpg"]')
    }
    get zainabname(){
        return $('//p[contains(text(),"Zainab")]')
    }
    get zainabdescription(){
        return $('//p[contains(text(),"Zainab")]/following-sibling::p[1]')
    }
    get zainabpricearea(){
        return $('//p[contains(text(),"Zainab")]/parent::div/parent::div//span[contains(text(),"$")]')
    }
    get seasonimage(){
        return $('//img[@src="https://images.diamondere.com/new_images/products/season/season_wg_ga_0.jpg"]')
    }
    get seasonname(){
        return $('//p[contains(text(),"Season")]')
    }
    get seasondescription(){
        return $('//p[contains(text(),"Season")]/following-sibling::p[1]')
    }
    get seasonpricearea(){
        return $('//p[contains(text(),"Season")]/parent::div/parent::div//span[contains(text(),"$")]')
    }
    get nilahimage(){
        return $('//div[@class="is-clickable"]/img')
        //return $('//img[@src="https://images.diamondere.com/new_images/products/nilah/nilah_wg_di_0.jpg"]')
    }
    get nilahname(){
        return $('//p[@class="is-size-5 has-text-weight-semibold-desktop is-uppercase p-t-30 p-t-10-mob is-clickable"]')
        // return $('//p[contains(text(),"Nilah")]')
    }
    get nilahdescription(){
        return $('//p[@class="is-size-5 has-text-weight-semibold-desktop is-uppercase p-t-30 p-t-10-mob is-clickable"]/following-sibling::p[1]')
        //return $('//p[contains(text(),"Nilah")]/following-sibling::p[1]')
    }
    get nilahpricearea(){
        return $('//p[@class="is-size-5 has-text-weight-semibold-desktop is-uppercase p-t-30 p-t-10-mob is-clickable"]/parent::div/parent::div//span[contains(text(),"$")]')
        //return $('//p[contains(text(),"Nilah")]/parent::div/parent::div//span[contains(text(),"$")]')
    }
    get nilahdeletedpricearea(){
        return $('//p[@class="is-size-5 has-text-weight-semibold-desktop is-uppercase p-t-30 p-t-10-mob is-clickable"]/parent::div/parent::div//del[contains(text(),"$")]')
        //return $('//p[contains(text(),"Nilah")]/parent::div/parent::div//del[contains(text(),"$")]')
    }



    get productpricearea(){
        return $('//span[@class="is-size-5 is-inline-block"]')
    }
    get productremovebutton(){
        return $('//p[contains(text(),"Remove")]')
    }
    get productname(){
        return $('//p[@class="is-size-5 has-text-weight-semibold-desktop is-uppercase p-t-30 p-t-10-mob is-clickable"] ')
    }
    get productdescription(){
        return $('')
    }
    get prouductreturntextarea(){
        return $('//a[@title="Free 100-Day Returns & re-sizing"]')
    }
    get prouductwarrentytextarea(){
        return $('//a[@title="365 day Warranty"]')
    }
    get joliereturntextarea(){
        return $('//span[contains(text(),"Free 100-Day Returns")]')
    }
    get productprotectionarea(){
        return $('//div[@class="p-b-20 warrenty-buttons p-t-10 p-t-10-mob"]')
    }
    get Sproductprotectionarea(){
        return $('(//div[@class="p-b-20 warrenty-buttons p-t-10 p-t-10-mob"])[2]')
    }
    get viewmatchingbands(){
        return $('//div[@class="p-b-8"]/span[contains(text(),"View Matching Bands")]')
    }

    //Matching Bands
    get scmatchingbandsection(){
        return $('//h1[contains(text(),"Matching Bands")]/parent::div/parent::div')
    }
    get matchingbandtext(){
        return $('//h1[contains(text(),"Matching Bands")]')
    }
    get matchingbandproductarea(){
        return $('//div[@class="carousel-list m-auto carousel-list-align"]')
    }
    get matchingbandproductimage(){
        return $('//div[@class="has-text-centered is-clickable"]/img')
    }
    get matchingbandproductname(){
        return $('//div[@class="has-text-centered is-clickable"]/p[1]')
    }
    get matchingbandproductsprice(){
        return $('//div[@class="has-text-centered is-clickable"]/p[2]')
    }
    get matchingbandproductpopupXbtn() {
        return $('//div[@class="block close-card"]//span[@class="material-icons md-17"]')
    }
    get matchingbandsproductviewdetailslink(){
        return $('//div[@class="has-text-centered is-clickable"]/p[3]')
    }
    get matchingbandsproductimage(){
        return $('(//img[@itemprop="image"])[1]')
    }
    get matchingbandsproductthumbimage1(){
        return $('(//img[@class="thumb-image"])[1]')
    }
    get matchingbandsproductthumbimage2(){
        return $('(//img[@class="thumb-image"])[2]')
    }
    get matchingbandsproductthumbimage3(){
        return $('(//img[@class="thumb-image"])[3]')
    }
    get matchingbandsproductpopupname(){
        return $('//span[contains(text(),"Amani")]')
    }
    get matchingbandsproductpopupprice(){
        return $('//span[contains(text(),"Amani")]/following-sibling::span')
    }
    get matchingbandsproductpopupdesc(){
        return $('//span[contains(text(),"Amani")]/parent::span/parent::div/following-sibling::p')
    }
    get matchingbandringsizefield(){
        return $('//select[@name="matchingBandSelectedRingSize"]/parent::span')
    }
    get matchingbandringsize8UK(){
        return $('//select[@name="matchingBandSelectedRingSize"]/option[contains(text(),"US 8 - UK & AU Q")]')
    }
    get matchingbandsproductsmfield(){
        return $('//input[@id="engrav_text"]')
    }
    get matchingbandsproductwarn(){
        return $('//span[contains(text(),"(18 CHARACTERS MAX)")]')
    }
    get matchingbandaddtocart(){
        return $('//button[contains(text(),"ADD TO CART")]')
    }
   

    //warrenty
    get productprotectionoptionthreeyear(){
        return $('//span[@class="year-text"]/span[contains(text(),"3 Year")]')
    }
    get productprotectionoptionfiveyear(){
        return $('//span[@class="year-text"]/span[contains(text(),"5 Year")]')
    }
    get productprotectionoptionunlimitedyear(){
        return $('//span[@class="year-text"]/span[contains(text(),"Lifetime")]')
    }
    get Sproductprotectionoptionthreeyear(){
        return $('(//span[@class="year-text"]/span[contains(text(),"3 Year")])[1]')
    }
    get Sproductprotectionoptionfiveyear(){
        return $('(//span[@class="year-text"]/span[contains(text(),"5 Year")])[2]')
    }
    get Sproductprotectionoptionunlimitedyear(){
        return $('(//span[@class="year-text"]/span[contains(text(),"Lifetime")])[2]')
    }
    //rings
    get productringsizetext(){
        return $('//span[contains(text(),"RING SIZE:")]')
    }
    get productringsize(){
        return $('(//span[@class="has-text-primary is-size-6"]/following::span[@class="is-size-7"])[1]')
    }
    get amaniringsizetext(){
        return $('//p[contains(text(),"Amani")]/parent::div//span[contains(text(),"RING SIZE:")]')
    }
    get amaniringsize(){
        return $('(//p[contains(text(),"Amani")]/parent::div//span[@class="has-text-primary is-size-6"]/following::span[@class="is-size-7"])[1]')
    }
    get productcentrestonetext(){
        return $('//span[contains(text(),"Center stone:")]')
    }
    get productcentrestone(){
        return $('//span[contains(text(),"Center stone:")]/parent::span')
    }
    get seasonherringsizetext(){
        return $('(//span[contains(text(),"RING SIZE")])[1]')
    }
    get seasonherringsize(){
        return $('((//span[contains(text(),"RING SIZE")])[1]/following::span)[1]')
    }
    get seasonhisringsizetext(){
        return $('//span[contains(text(),"HIS RING SIZE")]')
    }
    get seasonhisringsize(){
        return $('//span[contains(text(),"HIS RING SIZE")]/following-sibling::span')
    }
    get seasonbandwidthtext(){
        return $('//span[contains(text(),"BAND WIDTH:")]')
    }
    get seasonbandwidth(){
        return $('//span[contains(text(),"BAND WIDTH:")]/following-sibling::span')
    }
    get nilahringsizetext(){
        return $('//p[@class="is-size-5 has-text-weight-semibold-desktop is-uppercase p-t-30 p-t-10-mob is-clickable"]/parent::div//span[contains(text(),"RING SIZE:")]')
        //return $('//p[contains(text(),"Nilah")]/parent::div//span[contains(text(),"RING SIZE:")]')
    }
    get nilahringsize(){
        return $('(//p[@class="is-size-5 has-text-weight-semibold-desktop is-uppercase p-t-30 p-t-10-mob is-clickable"]/parent::div//span[@class="has-text-primary is-size-6"]/following::span[@class="is-size-7"])[1]')
        //return $('(//p[contains(text(),"Nilah")]/parent::div//span[@class="has-text-primary is-size-6"]/following::span[@class="is-size-7"])[1]')
    }
    //Custom
    get nilahcustomsummarytext(){
        return $('//span[contains(text(),"CUSTOM Diamond")]')
    }
    get nilahcustomcarat(){
        return $('//span[contains(text(),"Carat:")]')
    }
    get nilahcustomcut(){
        return $('//span[contains(text(),"Cut:")]')
    }
    get nilahcustomclarity(){
        return $('//span[contains(text(),"Clarity:")]')
    }
    get nilahcustomcolor(){
        return $('//span[contains(text(),"Color:")]')
    }
    get jazminimage(){
        return $('//p[contains(text(),"Matching Womens Band")]/parent::div/parent::div/parent::div/preceding-sibling::div/div/img')
        //return $('//img[@src="https://images.diamondere.com/new_images/products/jazmin/jazmin_wg_di_0.jpg"]')
    }
    get jazminname(){
        return $('//p[contains(text(),"Matching Womens Band")]/preceding-sibling::p[@class="is-size-5 has-text-weight-semibold-desktop is-uppercase p-t-30 p-t-10-mob is-clickable"]')
        //return $('//p[contains(text(),"Jazmin")]')
    }
    get jazmindescription(){
        return $('//p[contains(text(),"Matching Womens Band")]')
        //return $('//p[contains(text(),"Jazmin")]/following-sibling::p[1]')
    }
    get jazminpricearea(){
        return $('//p[contains(text(),"Matching Womens Band")]/parent::div/parent::div//span[contains(text(),"$")]')
        //return $('//p[contains(text(),"Jazmin")]/parent::div/parent::div//span[contains(text(),"$")]')
    }
    get jazmindeletedpricearea(){
        return $('//p[contains(text(),"Matching Womens Band")]/parent::div/parent::div//del[contains(text(),"$")]')
        //return $('//p[contains(text(),"Jazmin")]/parent::div/parent::div//del[contains(text(),"$")]')
    }
    get jazminringsizetext(){
        return $('//p[contains(text(),"Matching Womens Band")]/parent::div//span[contains(text(),"RING SIZE:")]')
        //return $('//p[contains(text(),"Jazmin")]/parent::div//span[contains(text(),"RING SIZE:")]')
    }
    get jazminringsize(){
        return $('(//p[contains(text(),"Matching Womens Band")]/parent::div//span[@class="has-text-primary is-size-6"]/following::span[@class="is-size-7"])[1]')
        //return $('(//p[contains(text(),"Jazmin")]/parent::div//span[@class="has-text-primary is-size-6"]/following::span[@class="is-size-7"])[1]')
    }
    get coltimage(){
        return $('//p[contains(text(),"Diamond Men\'s")]/parent::div/parent::div/parent::div/preceding-sibling::div/div/img')
        //return $('//img[@src="https://images.diamondere.com/new_images/products/colt/colt_wg_di_0.jpg"]')
    }
    get coltname(){
        return $('//p[contains(text(),"Diamond Men\'s")]/preceding-sibling::p[@class="is-size-5 has-text-weight-semibold-desktop is-uppercase p-t-30 p-t-10-mob is-clickable"]')
        //return $('//p[contains(text(),"Colt")]')
    }
    get coltdescription(){
        return $('//p[contains(text(),"Diamond Men\'s")]')
        //return $('//p[contains(text(),"Colt")]/following-sibling::p[1]')
    }
    get coltpricearea(){
        return $('//p[contains(text(),"Diamond Men\'s")]/parent::div/parent::div//span[contains(text(),"$")]')
        //return $('//p[contains(text(),"Colt")]/parent::div/parent::div//span[contains(text(),"$")]')
    }
    get coltdeletedpricearea(){
        return $('//p[contains(text(),"Diamond Men\'s")]/parent::div/parent::div//del[contains(text(),"$")]')
        //return $('//p[contains(text(),"Colt")]/parent::div/parent::div//del[contains(text(),"$")]')
    }
    get coltringsizetext(){
        return $('//p[contains(text(),"Diamond Men\'s")]/parent::div//span[contains(text(),"RING SIZE:")]')
        //return $('//p[contains(text(),"Colt")]/parent::div//span[contains(text(),"RING SIZE:")]')
    }
    get coltringsize(){
        return $('(//p[contains(text(),"Diamond Men\'s")]/parent::div//span[@class="has-text-primary is-size-6"]/following::span[@class="is-size-7"])[1]')
        //return $('(//p[contains(text(),"Colt")]/parent::div//span[@class="has-text-primary is-size-6"]/following::span[@class="is-size-7"])[1]')
    }
    get coltbandwidthtext(){
        return $('//span[contains(text(),"BAND WIDTH:")]')
    }
    get coltbandwidth(){
        return $('//span[contains(text(),"BAND WIDTH:")]/following-sibling::span')
    }

    //links & videos
    get nilaviewdiamonddetails(){
        return $('//u[contains(text(),"View")]')
    }
    get nilahaddwomensband(){
        return $('//u[contains(text(),"Add Matching Women\'s Band")]')
    }
    get nilahaddanotherring(){
        return $('//u[contains(text(),"Add another Ring")]')
    }




    //engraving
    get seasonherengravingtext(){
        return $('//span[contains(text(),"ENGRAVING:")]')
    }
    get seasonherengraving(){
        return $('(//span[contains(text(),"ENGRAVING:")]/following-sibling::span)[1]')
    }
    get seasonherengravingtext(){
        return $('//span[contains(text(),"HIS ENGRAVING:")]')
    }
    get seasonherengraving(){
        return $('//span[contains(text(),"HIS ENGRAVING:")]/following-sibling::span')
    }

    //earrings
    get joliecentrestonetext(){
        return $('//p[contains(text(),"Jolie")]/parent::div//span[contains(text(),"Center Stone:")]')
    }
    get joliecentrestone(){
        return $('//p[contains(text(),"Jolie")]/parent::div//span[contains(text(),"Center Stone:")]/parent::span')
    }
    get jolieearringbacktext(){
        return $('//span[contains(text(),"EARRING BACK:")]')
    }
    get jolieearringback(){
        return $('//span[contains(text(),"EARRING BACK:")]/parent::p')
    }
    //necklace
    get productchainlengthtext(){
        return $('//span[contains(text(),"Chain Size:")]')
    }
    get productchainlength(){
        return $('//span[contains(text(),"Chain Size:")]/following::span[@class="is-size-7"]')
    }
    get prodcutchainprice(){
        return $('//span[contains(text(),"Chain Size:")]/following::span[@class="is-size-5 is-inline-block"]')
    }
    //bracelets
    get zainabbraceletlengthtext(){
        return $('//span[contains(text(),"BRACELET LENGTH:")]')
    }
    get zainabbraceletlength(){
        return $('//p[contains(text(),"inches")]')
    }
    //MYOJproducts
    //links & videos
      get nilaviewdiamonddetails(){
        return $('//u[contains(text(),"View")]')
    }
    get nilahaddwomensband(){
        return $('//u[contains(text(),"Add Matching Women\'s Band")]')
    }
    get nilahaddanotherring(){
        return $('//u[contains(text(),"Add another Ring")]')
    }
    get productcustomdiamondarea(){
        return $('//div[@class="is-size-7 m-t-5"]/')
    }
    get productcustomdiamondsummarytext(){
        return $('//div[@class="is-size-7 m-t-5"]/span[contains(text(),"CUSTOM Diamond")]')
    }
    get productcustomdiamondsummaryarea(){
        return $('//div[@class="is-size-7 m-t-5"]/div[@class="m-t-3 m-b-3-mob"]')
    }
    get productcustomdiamondviewvideo(){
        return $('//div[@class="is-flex-desktop"]/button[@class="button is-text p-0 navbar-btns is-size-7 call-to-action has-text-info"]')
    }
    get productcdaddwomenbandlink(){
        return $('//div[@class="is-flex-desktop m-l-5"]/span/u[contains(text(),"Add Matching Women\'s Band")]')
    }
    get productcdaddmanbandlink(){
        return $('//div[@class="is-flex-desktop m-l-5"]/span/u[contains(text(),"Add Men\'s Band")]')
    }
    get productcdaddring(){
        return $('//div[@class="is-flex-desktop m-l-5"]/span[@class="button navbar-btns is-text p-0 is-size-7 call-to-action has-text-info"]')
    }
    get productcdshowdiscountdetails(){
        return $('//div[@class="button navbar-btns is-text p-0 is-size-7 call-to-action has-text-info"]/u/span[contains(text(),"Show")]')
    }
    get productcdhidediscountdetails(){
        return $('//div[@class="button navbar-btns is-text p-0 is-size-7 call-to-action has-text-info"]/u/span[contains(text(),"Hide")]')
    }
    get productcdviewdiscountdetails(){
        return $('//div[@class="has-text-left"]/ul[@class="discount-details"]')
    }
    //Delivery
    get deliveryoptiontext(){
        return('//p[contains(text(),"CHOOSE DELIVERY OPTIONS")]')
    }
    get freeshippingtext(){
        return $('//p[contains(text(),"FREE USPS SHIPPING")]')
    }
    get freeshippingdeliverydatetext(){
        return $('//p[contains(text(),"FREE USPS SHIPPING")]/following-sibling::p/b')
    }
    get freeshippingradiobutton(){
        return $('//input[@value="freeShipping"]/parent::label/span[@class="check"]')
    }
    get fedexshippingtext(){
        return $('//p[contains(text(),"EXPEDITED FEDEX / UPS SHIPPING ($45 surcharge)")]')
    }
    get fedexshippingdeliverydatetext(){
        return $('//p[contains(text(),"EXPEDITED FEDEX / UPS SHIPPING ($45 surcharge)")]/following-sibling::p/b')
    }
    get fedexshippingradiobutton(){
        return $('//input[@value="fedexShipping"]/parent::label/span[@class="check"]')
    }

    get expressordertext(){
        return $('//p[contains(text(),"Express Order")]')
    }
    get expressorderdesc(){
        return $('//p[contains(text(),"Expedited Shipping Charges for UPS - Fedex")]')
    }
    get expressorderprice(){
        return $('//p[contains(text(),"Express Order")]/parent::div/following-sibling::div/p[contains(text(),"$45")]')
    }
    get expressorderremovebtn(){
        return $('//img[@alt="Special Delivery Type"]/following-sibling::div/p[contains(text(),"Remove")]')
    }
    get easydeliverytext(){
        return $('//p[contains(text(),"EASY DELIVERY (save 2% off the diamond)")]')
    }
    get easydeliverydatetext(){
        return $('//p[contains(text(),"EASY DELIVERY (save 2% off the diamond)")]/following-sibling::p/b')
    }
    get easyshippingradiobutton(){
        return $('//input[@value="extended"]/parent::label/span[@class="check"]')
    }
    get easyshippinginformation(){
        return $('//div[contains(text(),"give you a complimentary upgrade to a similar / better diamond.")]')
    }
    get additionalinstructiontext(){
        return $('//p[contains(text(),"ADDITIONAL INSTRUCTIONS FOR US")]')
    }
    get additionalinstructiontextarea(){
        return $('//div[@class="column is-paddingless additional-instruction"]/textarea[@class="textarea"]')
    }
    get pricesectionarea(){
        return $('//div[@class="is-pulled-right-tablet has-text-primary"]')
    }
    get subtotaltext(){
        return $('//div[contains(text(),"SUBTOTAL")]')
    }
    get subtotalprice(){
        return $('//div[contains(text(),"SUBTOTAL")]/following-sibling::div[1]')
    }
    get shippingtext(){
        return $('//div[contains(text(),"SHIPPING")]')
    }
    get FREEshippingprice(){
        return $('//div[contains(text(),"SHIPPING")]/following-sibling::div[contains(text(),"$0")]')
    }
    get FDXshippingprice(){
        return $('//div[contains(text(),"SHIPPING")]/following-sibling::div[contains(text(),"$45")]')
    }
    get protectionplantext(){
        return $('//div[@class="shop-row p-t-10 p-b-10 is-size-5"]/div[contains(text(),"Protection Plan")]')
    }
    get protectionplanprice(){
        return $('//div[contains(text(),"Protection Plan")]/following-sibling::div')
    }
    get totaltext(){
        return $('//div[@class="shop-row total-cost"]/div[contains(text(),"TOTAL")]')
    }
    get totalprice(){
        return $('//div[@class="shop-row total-cost"]//div[@class="is-pulled-right is-size-3 has-text-weight-semibold"]')
    }
    get bottomproceedtopaymentbutton(){
        return $('//div[@class="has-text-centered is-size-5"]/button[contains(text(),"PROCEED TO PAYMENT")]')
    }
    get assistancearea(){
        return $('//div[@class="m-b-15"]')
    }
    get needassistancetext(){
        return $('//div[@class="m-b-15"]/p[contains(text(),"NEED ASSISTANCE?")]')
    }
    get emailustext(){
        return $('//div[@class="m-b-15"]/div[1]/a[@title="Contact Us"]')
    }
    get requestcallbacktext(){
        return $('//div[@class="m-b-15"]/div[2]/a[@title="Request Call Back"]')
    }
    get calltext(){
        return $('//div[@class="m-b-15"]/div[3]/a[@title="Toll Free Contact"]')
    }
    
    //Accepted Payments
    get paymentarea(){
        return $('//div[@class="cart-logos paypal is-clickable"]/parent::div')
    }
    get acceptedpaymenttext(){
        return $('//p[contains(text(),"ACCEPTED PAYMENT METHODS")]')
    }
    get paymentpaypal(){
        return $('//div//div[@class="cart-logos paypal is-clickable"]')
    }
    get paymentpaypalpopup(){
        return $('//div[@class="card-content cart-details"]')
    }
    get popupclose(){
        return $('//span[@class="material-icons is-pulled-right is-clickable icon-box m-r-15 m-r-5-mob"]')
    }
    get paymentpaypalcredit(){
        return $('//div//div[@class="cart-logos paypal-credit is-clickable"]')
    }
    get paymentaffirm(){
        return $('//div//div[@class="cart-logos affirm is-clickable"]')
    }
    get affirmjewelrylink(){
        return $('//a[contains(text(),"Jewelry Financing Page")]')
    }
    get paymentdiamonderepayment(){
        return $('//span[@class="material-icons has-text-info md-36 is-clickable"]')
    }

    //Accrediation
    get accrediationarea(){
        return $('//p[contains(text(),"ACCREDITATION")]/parent::div')
    }
    get accrediationbusiness(){
        return $('//a[@class="cart-logos accredited"]')
    }
    get norton(){
        return $('//a[@class="cart-logos-digicert cart-digicert"]')
    }

    //Shopping cart page
    get noproducttext(){
        return $('//p[contains(text(),"THERE ARE CURRENTLY NO PRODUCTS IN YOUR SHOPPING CART")]')
    }
    get mensbandtext(){
        return $('//p[contains(text(),"Men\'s band")]')
    }
    get btnAddToCartBand() {
        return $('//button[@class="button is-info is-inline-block-tablet wd-100"]')
    }
    get txtAgaciaBand() {
        return $('//p[@class="is-size-5 has-text-weight-semibold-desktop is-uppercase p-t-30 p-t-10-mob is-clickable" and contains(text(),"Agacia")]')
    }
    //shopping cart icon
    get shoppingcart() {
        return $('//a[@title="Shopping Bag"]')
    }
    get errortext(){
        return $('//h1[contains(text(),"Applied discount recalculated for product")]')
    }
    get errorokbutton(){
        return $('//button[contains(text(),"Ok")]')
    }

    get diamondShape() {
        return $('//p[contains(text(),"Round Diamond")]')
    }

    get custumDiamond() {
        return $('//span[contains(text(),"CUSTOM Diamond")]')
    }
    get viewDiamdetails() {
        return $('//u[contains(text(),"Details")]')
    }
    get viewDiamdetailsPopUP() {
        return $('//div[@class="card-content shop-cart-modal-align"]')
    }
    get diamondPrice() {
        return $('//span[@class="is-size-5 is-inline-block"]')
    }
    get diamondPriceInPop() {
        return $('//div[@class="has-text-primary is-size-6 is-uppercase has-text-weight-medium m-b-10"]')
    }
    

    movetomatchingbandlink(){
        ElementUtil.scrollIntoView(this.viewmatchingbands,"move to view matching bands")
    }
    selectremovebutton(){
        ElementUtil.waitForClickable(this.productremovebutton, 50, "wait for page load")
        ElementUtil.click(this.productremovebutton,"click remove button")
    }
    clickemailus(){
        ElementUtil.waitForClickable(this.emailustext, 50, "wait for page load")
        ElementUtil.click(this.emailustext,"click emailus")
    }
    clickrequestcallback(){
        ElementUtil.waitForClickable(this.requestcallbacktext, 50, "wait for page load")
        ElementUtil.click(this.requestcallbacktext,"click request callback")
    }
    clickcheckout(){
        ElementUtil.waitForClickable(this.checkoutbtn, 50, "wait for page load")
        ElementUtil.click(this.checkoutbtn,"click checkout button")
        ElementUtil.waitForDisplayed(this.topproceedtopaymentbutton, 50, "wait for page load")
    }
    clickcontinueshopping(){
        ElementUtil.waitForClickable(this.continueshoppingbtn, 50, "wait for page load")
        ElementUtil.click(this.continueshoppingbtn,"click continue shopping button")
    }
    clickaddringbandband(){
        ElementUtil.waitForClickable(this.addringbandband, 50, "wait for page load")
        ElementUtil.click(this.addringbandband,"click add ring and band")
    }
    movetocomplimentstext(){
        ElementUtil.scrollIntoView(this.complimentstext,"move to compliments text")
    }
    movetoaddtocartbtn(){
        ElementUtil.scrollIntoView(this.settingaddtocart,"move to setting addtocart")
    }
    clickaddtocartbtn(){
        ElementUtil.forceClick(this.settingaddtocart,"click setting addtocart")
        BrowserUtil.wait(5)
        ElementUtil.waitForDisplayed(this.topproceedtopaymentbutton, 60, "wait for page load")
    }
    clickviewdetails(){
        BrowserUtil.wait(3)
        //ElementUtil.waitForClickable(this.matchingbandsproductviewdetailslink, 60, "wait for page load")
        //ElementUtil.mouseHover(this.matchingbandsproductviewdetailslink, "Hover the link")
        ElementUtil.click(this.matchingbandsproductviewdetailslink,"Click view details")
        ElementUtil.scrollIntoView(this.matchingbandproductpopupXbtn, "scroll to popup")
    }
    clickringsizedropdown(){
        ElementUtil.click(this.matchingbandringsizefield,"click ringsize dropdown")
    }
    click8ukringsize(){
        ElementUtil.click(this.matchingbandringsize8UK,"click 8UK")
    }
    entermessage(){
        ElementUtil.sendText(this.matchingbandsproductsmfield,data.specialmessagetext.text,"Enter message")
    }
    clickmbaddtocart(){
        ElementUtil.click(this.matchingbandaddtocart,"click matching band add to cart")
    }
    clickfedexdelivery(){
        ElementUtil.click(this.fedexshippingradiobutton,"click fedex shipping radiobutton")
    }
    clickremoveexpressdelivery(){
        ElementUtil.click(this.expressorderremovebtn,"click express remove button")
    }
    clickeasydelivery(){
        ElementUtil.click(this.easyshippingradiobutton,"click easy delivery radiobutton")
    }
    clickshowdetailslink(){
        ElementUtil.waitForClickable(this.productcdshowdiscountdetails, 60, "wait for page load")
        ElementUtil.click(this.productcdshowdiscountdetails,"click show discount details")
    }
    click5yearplan(){
        ElementUtil.click(this.productprotectionoptionfiveyear,"click 5 year plan")
    }
    enteradditionaldetails(){
        ElementUtil.sendText(this.additionalinstructiontextarea,sdata.information.additionaldetails)
    }
    clickmenslink(){
        ElementUtil.click(this.productcdaddmanbandlink,"click mens band link")
    }


    clickpaypalimage(){
        ElementUtil.forceClick(this.paymentpaypal,"click payment paypal")
    }
    clickpopupcrossbutton(){
        ElementUtil.click(this.popupclose,"click close popup")
    }
    clickpaypalcreditimage(){
        ElementUtil.forceClick(this.paymentpaypalcredit,"click payment paypalcredit")
    }
    clickcalenderimage(){
        ElementUtil.waitForClickable(this.paymentdiamonderepayment, 60, "wait for page load")
        ElementUtil.click(this.paymentdiamonderepayment,"click diamonderepayment")
    }
    clickaffirm(){
        ElementUtil.waitForClickable(this.paymentaffirm, 60, "wait for page load")
        ElementUtil.click(this.paymentaffirm,"click payment affirm")
    }
    clickaffirmjewlrylink(){
        ElementUtil.waitForClickable(this.affirmjewelrylink, 60, "wait for page load")
        ElementUtil.click(this.affirmjewelrylink,"click affirm jewelrylink")
        browser.switchWindow('https://staging.diamondere.com/information/financing-options')
	    BrowserUtil.wait(3);
    }
    clickaccrediationbusiness(){
        ElementUtil.waitForClickable(this.accrediationbusiness, 60, "wait for page load")
        ElementUtil.click(this.accrediationbusiness,"click accrediation business")
        browser.switchWindow('https://www.bbb.org/us/ca/redwood-city/profile/jewelry-stores/diamondere-inc-1116-873976')
	    BrowserUtil.wait(3);
    }
    clicknorton(){
        ElementUtil.waitForClickable(this.norton, 60, "wait for page load")
        ElementUtil.click(this.norton,"click norton")
        browser.switchWindow('https://seal.digicert.com/seals/popup/?tag=bbpkGMsC&referer=www.diamondere.com&lang=en')
	    BrowserUtil.wait(3);
    }
    clickscicon(){
        ElementUtil.click(this.shoppingcart,"click shopping cart")
    }
    clicktoppaymentbutton(){
        ElementUtil.click(this.topproceedtopaymentbutton,"click top payment button")
    }
    selectAddToCart() {
        ElementUtil.click(this.btnAddToCartBand, "Click add to cart")
        BrowserUtil.wait(5)
    }
    clickDiaViewdetails() {
        ElementUtil.click(this.viewDiamdetails, "click on view diamond details link text")
    }

}
module.exports = shoppingcart;
