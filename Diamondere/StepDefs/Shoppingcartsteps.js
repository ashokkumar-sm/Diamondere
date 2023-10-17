const { Given, When, Then } = require('@wdio/cucumber-framework');
const BrowserUtil = require('../../CommonUtils/BrowserUtil');
const ElementUtil = require('../../CommonUtils/ElementUtil');
const dmd = require('../Configs/dmd_' + global.testEnv + '.js');
const shoppingcartpage = require('../PageObjects/Shoppingcartpage.js');
const productdetailspage = require('../PageObjects/Page3page.js');
const sdata = require('../TestData/shoppingcartdata.json');


//Given

Given(/^I browse shopping cart page$/, () => {
	const shoppingcartarea = new shoppingcartpage;
	browser.url(dmd.config.shoppingcarturl);
});

//When

When(/^I click checkout button$/, () => {
	const productpoparea = new shoppingcartpage;
    productpoparea.clickcheckout();
	BrowserUtil.wait(5);
});

When(/^I click continue shopping button$/, () => {
	const productpoparea = new shoppingcartpage;
    productpoparea.clickcontinueshopping();
	BrowserUtil.wait(5);
});


When(/^I click emailus link$/, () => {
	const needassistancearea = new shoppingcartpage;
    needassistancearea.clickemailus();
	BrowserUtil.wait(5);
});

When(/^I click request call back link$/, () => {
	const needassistancearea = new shoppingcartpage;
    needassistancearea.clickrequestcallback();
	BrowserUtil.wait(5);
});


When(/^I move to matchingband link$/, () => {
	const matchingbandarea = new shoppingcartpage;
    matchingbandarea.movetomatchingbandlink();
	BrowserUtil.wait(3);
});

When(/^I click remove button$/, () => {
	const xylosproductarea = new shoppingcartpage;
    xylosproductarea.selectremovebutton();
});

When(/^I click matching band product view details link in shopping cart$/, () => {
	const matchingbandarea = new shoppingcartpage;
    matchingbandarea.clickviewdetails();
});

When(/^I select ring size and select 8UK option of matching band popup$/, () => {
	const ringsizearea = new shoppingcartpage;
    ringsizearea.clickringsizedropdown();
	ringsizearea.click8ukringsize();
});

When(/^I enter special message in special message field$/, () => {
	const specialmessagearea = new shoppingcartpage;
    specialmessagearea.entermessage();
});

When(/^I select add to cart button$/, () => {
	const matchingbandarea = new shoppingcartpage;
    matchingbandarea.clickmbaddtocart();
	BrowserUtil.wait(5);
});












When(/^I click paypal image$/, async() => {
	const paymentsarea = new shoppingcartpage;
	paymentsarea.clickpaypalimage(); 
	BrowserUtil.wait(5);
});

When(/^I click cross button in popup$/, () => {
	const paymentsarea = new shoppingcartpage;
	paymentsarea.clickpopupcrossbutton(); 
});

When(/^I click paypalcredit image$/, () => {
	const paymentsarea = new shoppingcartpage;
	paymentsarea.clickpaypalcreditimage();
	BrowserUtil.wait(5);  
});


When(/^I click calender image$/, () => {
	const paymentsarea = new shoppingcartpage;
	paymentsarea.clickcalenderimage();
	BrowserUtil.wait(5);
});

When(/^I click accreditation busniess image$/, () => {
	const accreditationarea = new shoppingcartpage;
	BrowserUtil.wait(3);
	accreditationarea.clickaccrediationbusiness();
});

When(/^I click norton image$/, () => {
	const accreditationarea = new shoppingcartpage;
	BrowserUtil.wait(3);
	accreditationarea.clicknorton();
});

When(/^I click affirm image$/, () => {
	const paymentsarea = new shoppingcartpage;
	paymentsarea.clickaffirm();
	BrowserUtil.wait(3);
});

When(/^I click jewelery financing page link is displayed$/, () => {
	const accreditationarea = new shoppingcartpage;
	BrowserUtil.wait(3);
	accreditationarea.clickaffirmjewlrylink();
});

When(/^I select Add ring and band button$/, () => {
	const matchingbandpopuparea = new shoppingcartpage;
	matchingbandpopuparea.clickaddringbandband();
});

When(/^I move to complements texts$/, () => {
	const matchingbandpopuparea = new shoppingcartpage;
	matchingbandpopuparea.movetocomplimentstext();
});

//start with setting / diamond
When(/^I select setting add to cart button$/, () => {
	const startwithsettingarea = new shoppingcartpage;
	//startwithsettingarea.movetoaddtocartbtn();
	startwithsettingarea.clickaddtocartbtn();
});

When(/^I click express delivery radiobutton$/, () => {
	const deliveryarea = new shoppingcartpage;
	deliveryarea.clickfedexdelivery();
	BrowserUtil.wait(5);
});

When(/^I click remove button of express delivery$/, () => {
	const deliveryarea = new shoppingcartpage;
	deliveryarea.clickremoveexpressdelivery();
	BrowserUtil.wait(5);
});

When(/^I click easy delivery radiobutton$/, () => {
	const deliveryarea = new shoppingcartpage;
	deliveryarea.clickeasydelivery();
	BrowserUtil.wait(5);
});

When(/^I click show discount details link$/, () => {
	const nilahproductarea = new shoppingcartpage;
	nilahproductarea.clickshowdetailslink();
	BrowserUtil.wait(5);
});

When(/^I click 5 year button$/, () => {
	const xylosproductarea = new shoppingcartpage;
	xylosproductarea.click5yearplan();
	BrowserUtil.wait(5)
});

When(/^I enter text in additional instruction field$/, () => {
	const totalarea = new shoppingcartpage;
	totalarea.enteradditionaldetails();
});

When(/^I click Add mensband link$/, () => {
	const menslink = new shoppingcartpage;
	menslink.clickmenslink();
	BrowserUtil.wait(5);
});

When(/^I click shopping cart icon$/, () => {
	const bannerHomepage = new shoppingcartpage;
	bannerHomepage.clickscicon();
});

When(/^I click Proceed to payment$/, () => {
	const cartpagearea = new shoppingcartpage;
	cartpagearea.clicktoppaymentbutton();
	BrowserUtil.wait(5);
});















//Then

Then(/^I ensure added product popup is displayed$/, async() => {
	const productpoparea = new shoppingcartpage;
    await expect(productpoparea.productpopforaddtocart).toExist();
});

Then(/^I ensure continue shopping and checkout button is displayed$/, async() => {
	const productpoparea = new shoppingcartpage;
    await expect(productpoparea.checkoutbtn).toExist();
    await expect(productpoparea.continueshoppingbtn).toExist();
});
//setting
Then(/^I ensure checkout button is displayed$/, async() => {
	const productpoparea = new shoppingcartpage;
    await expect(productpoparea.checkoutbtn).toExist();
    await expect(productpoparea.continueshoppingbtn).not.toExist();
});

Then(/^I ensure productimage, product name,price,description and ring size is displayed$/, async() => {
	const productpoparea = new shoppingcartpage;
    await expect(productpoparea.productpopforaddtocartimage).toExist();
    await expect(productpoparea.productpopforaddtocartproductname).toExist();
	await expect(productpoparea.productpopforaddtocartproductprice).toExist();
	await expect(productpoparea.productpopforaddtocartproductdescription).toExist();
	await expect(productpoparea.productpopforaddtocartproductmoreinforingsize).toExist();

});


Then(/^I ensure ring productimage, product name,price,description and ring size is displayed$/, async() => {
	const productpoparea = new shoppingcartpage;
    await expect(productpoparea.productpopforaddtocartimage).toExist();
    await expect(productpoparea.productpopforaddtocartproductname).toExist();
	await expect(productpoparea.productpopforaddtocartproductprice).toExist();
	await expect(productpoparea.productpopforaddtocartproductdescription).toExist();
	await expect(productpoparea.productpopforaddtocartproductmoreinforingsize).toExist();
});


Then(/^I ensure band productimage, product name,price,description and ring size is displayed$/, async() => {
	const productpoparea = new shoppingcartpage;
	await expect(productpoparea.bandproductpopforaddtocartimage).toExist();
    await expect(productpoparea.bandproductpopforaddtocartproductname).toExist();
	await expect(productpoparea.bandproductpopforaddtocartproductprice).toExist();
	await expect(productpoparea.bandproductpopforaddtocartproductdescription).toExist();
	await expect(productpoparea.bandproductpopforaddtocartproductmoreinforingsize).toExist();
});

Then(/^I ensure shoppingcart page is redirected$/, async() => {
	const productpoparea = await browser.getUrl();
	await expect(productpoparea).toEqual(sdata.Browserlink.shoppingcarturl);
});

Then(/^I ensure still exist in same page is displayed$/, async() => {
	const productpoparea = await browser.getUrl();
	await expect(productpoparea).toEqual(sdata.Browserlink.page3url);
});

Then(/^I ensure moved to shopping cart page$/, async() => {
	const productpoparea = await browser.getUrl();
	await expect(productpoparea).toEqual(sdata.Browserlink.shoppingcarturl);
});

Then(/^I ensure product area in shoppingcart is displayed$/, async() => {
	const cartpagearea = new shoppingcartpage;
    await expect(cartpagearea.eachproductarea).toExist();
});


Then(/^I ensure your shopping cart text is displayed$/, async() => {
	const cartpagearea = new shoppingcartpage;
    await expect(cartpagearea.yourshoppingcarttext).toExist();
});

Then(/^I ensure proceed to payment button near shopping cart text is displayed$/, async() => {
	const cartpagearea = new shoppingcartpage;
    await expect(cartpagearea.topproceedtopaymentbutton).toExist();
});

Then(/^I ensure xylos product image, name and description in shoppingcart is displayed$/, async() => {
	const xylosproductarea = new shoppingcartpage;
    await expect(xylosproductarea.xylosimage).toExist();
	await expect(xylosproductarea.xylosname).toExist();
	await expect(xylosproductarea.xylosdescription).toExist();
});

Then(/^I ensure selected xylos ringsize text and ringsize is displayed$/, async() => {
	const xylosproductarea = new shoppingcartpage;
    await expect(xylosproductarea.productringsizetext).toExist();
	await expect(xylosproductarea.productringsize).toExist();
});


Then(/^I ensure selected xylos centre stone text and centre stone is displayed$/, async() => {
	const xylosproductarea = new shoppingcartpage;
    await expect(xylosproductarea.productcentrestonetext).toExist();
	await expect(xylosproductarea.productcentrestone).toExist();
});

Then(/^I ensure product price is displayed$/, async() => {
	const productarea = new shoppingcartpage;
    await expect(productarea.productpricearea).toExist();
});

Then(/^I ensure the View matching bands moves to the matching bands section in shoppingcart$/, async() => {
	const matchingbandarea = new shoppingcartpage;
    await expect(matchingbandarea.scmatchingbandsection).toExist();
	await expect(matchingbandarea.matchingbandtext).toExist();
	await expect(matchingbandarea.matchingbandproductarea).toExist();
});


Then(/^I ensure 100 days return and resizing text is displayed$/, async() => {
	const productarea = new shoppingcartpage;
    await expect(productarea.prouductreturntextarea).toExist();
});

Then(/^I ensure 100 days return text is displayed$/, async() => {
	const productarea = new shoppingcartpage;
    await expect(productarea.joliereturntextarea).toExist();
});


Then(/^I ensure 365 warranty text is displayed$/, async() => {
	const productarea = new shoppingcartpage;
    await expect(productarea.prouductwarrentytextarea).toExist();
});


Then(/^I ensure add protection text is displayed$/, async() => {
	const xylosproductarea = new shoppingcartpage;
    await expect(xylosproductarea.productprotectionarea).toExist();
});

Then(/^I ensure 3,5,lifetime buttons are displayed$/, async() => {
	const xylosproductarea = new shoppingcartpage;
    await expect(xylosproductarea.productprotectionoptionthreeyear).toExist();
	await expect(xylosproductarea.productprotectionoptionfiveyear).toExist();
	await expect(xylosproductarea.productprotectionoptionunlimitedyear).toExist();
});

Then(/^I ensure add protection text is displayed in setting$/, async() => {
	const settingproductarea = new shoppingcartpage;
    await expect(settingproductarea.Sproductprotectionarea).toExist();
});

Then(/^I ensure 3,5,lifetime buttons are displayed in setting$/, async() => {
	const xylosproductarea = new shoppingcartpage;
    await expect(xylosproductarea.Sproductprotectionoptionthreeyear).toExist();
	await expect(xylosproductarea.Sproductprotectionoptionfiveyear).toExist();
	await expect(xylosproductarea.Sproductprotectionoptionunlimitedyear).toExist();
});



Then(/^I ensure xylos product is removed from shopping cart page$/, async() => {
	const xylosproductarea = new shoppingcartpage;
    await expect(xylosproductarea.noproducttext).toExist();
});

Then(/^I ensure Matching band product details is displayed in Matching band section$/, async() => {
	const matchingbandarea = new shoppingcartpage;
    await expect(matchingbandarea.matchingbandproductimage).toExist();
    await expect(matchingbandarea.matchingbandproductname).toExist();
    await expect(matchingbandarea.matchingbandproductsprice).toExist();
    await expect(matchingbandarea.matchingbandsproductviewdetailslink).toExist();

});

Then(/^I ensure matching band product image,name, price, product description in full details popup is displayed in shopping cart$/, async() => {
	const matchingbandarea = new shoppingcartpage;
    await expect(matchingbandarea.matchingbandsproductimage).toExist();
    await expect(matchingbandarea.matchingbandsproductthumbimage1).toExist();
    await expect(matchingbandarea.matchingbandsproductthumbimage2).toExist();
    await expect(matchingbandarea.matchingbandsproductthumbimage3).toExist();
	await expect(matchingbandarea.matchingbandsproductpopupname).toExist();
	await expect(matchingbandarea.matchingbandsproductpopupprice).toExist();
	await expect(matchingbandarea.matchingbandsproductpopupdesc).toExist();
});

Then(/^I ensure ring size field of matching band product is displayed in shopping cart$/, async() => {
	const matchingbandarea = new shoppingcartpage;
    await expect(matchingbandarea. matchingbandringsizefield).toExist();
});


Then(/^I ensure free engraving field and max character limit is displayed in shopping cart$/, async() => {
	const matchingbandarea = new shoppingcartpage;
    await expect(matchingbandarea.matchingbandsproductsmfield).toExist();
    await expect(matchingbandarea.matchingbandsproductwarn).toExist();
	
});

Then(/^I ensure free engraving icons are displayed in shopping cart$/, async() => {
	const matchingbandarea = new productdetailspage;
	await expect(matchingbandarea.popupDarkHeartSymbol).toExist();
	await expect(matchingbandarea.popupHeartSymbol).toExist();
	await expect(matchingbandarea. popupInfinitySymbol).toExist();
	await expect(matchingbandarea.popupStarSymbol).toExist();
	await expect(matchingbandarea.popupAndSymbol).toExist();
});

Then(/^I ensure Add to cart button is displayed in shopping cart$/, async() => {
	const matchingbandarea = new shoppingcartpage;
	await expect(matchingbandarea.matchingbandaddtocart).toExist();
});

Then(/^I ensure matching product added in shopping cart page$/, async() => {
	const shoppingcartarea = new shoppingcartpage;
	await expect(shoppingcartarea.amaniname).toExist();
	await expect(shoppingcartarea. amanidescription).toExist();
	await expect(shoppingcartarea.amaniringsizetext).toExist();
	await expect(shoppingcartarea.amaniringsize).toExist();
	await expect(shoppingcartarea.amanipricearea).toExist();

});

Then(/^I ensure jolie product image, name and description in shoppingcart is displayed$/, async() => {
	const jolieproductarea = new shoppingcartpage;
    await expect(jolieproductarea.jolieimage).toExist();
	await expect(jolieproductarea.joliename).toExist();
	await expect(jolieproductarea.joliedescription).toExist();
});

Then(/^I ensure selected jolie earringback text and back is displayed$/, async() => {
	const jolieproductarea = new shoppingcartpage;
    await expect(jolieproductarea.jolieearringbacktext).toExist();
	await expect(jolieproductarea.jolieearringback).toExist();
});


Then(/^I ensure selected jolie centre stone text and centre stone is displayed$/, async() => {
	const jolieproductarea = new shoppingcartpage;
    await expect(jolieproductarea.joliecentrestonetext).toExist();
	await expect(jolieproductarea.joliecentrestone).toExist();
});


Then(/^I ensure jolie product price is displayed$/, async() => {
	const jolieproductarea = new shoppingcartpage;
    await expect(jolieproductarea.joliepricearea).toExist();
});

Then(/^I ensure zainab product image, name and description in shoppingcart is displayed$/, async() => {
	const zainabproductarea = new shoppingcartpage;
    await expect(zainabproductarea.zainabimage).toExist();
	await expect(zainabproductarea.zainabname).toExist();
	await expect(zainabproductarea.zainabdescription).toExist();
});

Then(/^I ensure selected zainab bracelet length text and length is displayed$/, async() => {
	const zainabproductarea = new shoppingcartpage;
    await expect(zainabproductarea.zainabbraceletlengthtext).toExist();
	await expect(zainabproductarea.zainabbraceletlength).toExist();
});

Then(/^I ensure zainab product price is displayed$/, async() => {
	const zainabproductarea = new shoppingcartpage;
    await expect(zainabproductarea.zainabpricearea).toExist();
});

Then(/^I ensure season product image, name and description in shoppingcart is displayed$/, async() => {
	const seasonproductarea = new shoppingcartpage;
    await expect(seasonproductarea.seasonimage).toExist();
	await expect(seasonproductarea.seasonname).toExist();
	await expect(seasonproductarea.seasondescription).toExist();
});

Then(/^I ensure selected season his and her ringsize text and ringsize is displayed$/, async() => {
	const seasonproductarea = new shoppingcartpage;
    await expect(seasonproductarea.seasonherringsizetext).toExist();
	await expect(seasonproductarea.seasonherringsize).toExist();
	await expect(seasonproductarea.seasonhisringsizetext).toExist();
	await expect(seasonproductarea.seasonhisringsize).toExist();
});

Then(/^I ensure selected season his bandwidth text and bandwidth is displayed$/, async() => {
	const seasonproductarea = new shoppingcartpage;
    await expect(seasonproductarea.seasonbandwidthtext).toExist();
	await expect(seasonproductarea.seasonbandwidth).toExist();
});

Then(/^I ensure selected season his and her engraving text and engraving is displayed$/, async() => {
	const seasonproductarea = new shoppingcartpage;
    await expect(seasonproductarea.seasonherengravingtext).toExist();
	await expect(seasonproductarea.seasonherengraving).toExist();
	await expect(seasonproductarea.seasonhisengravingtext).toExist();
	await expect(seasonproductarea.seasonhisengraving).toExist();
});

Then(/^I ensure season product price is displayed$/, async() => {
	const seasonproductarea = new shoppingcartpage;
    await expect(seasonproductarea.seasonpricearea).toExist();
});

Then(/^I ensure nilah product image,name and description in shoppingcart is displayed$/, async() => {
	const nilahproductarea = new shoppingcartpage;
    await expect(nilahproductarea.nilahimage).toExist();
	await expect(nilahproductarea.nilahname).toExist();
	await expect(nilahproductarea.nilahdescription).toExist();
});

Then(/^I ensure selected nilah ringsize text and ringsize is displayed$/, async() => {
	const nilahproductarea = new shoppingcartpage;
    await expect(nilahproductarea.nilahringsizetext).toExist();
	await expect(nilahproductarea.nilahringsize).toExist();
});

Then(/^I ensure custom diamond summary - carat, cut, clarity,color text is displayed$/, async() => {
	const nilahproductarea = new shoppingcartpage;
    await expect(nilahproductarea.nilahcustomsummarytext).toExist();
	await expect(nilahproductarea.nilahcustomcarat).toExist();
	await expect(nilahproductarea.nilahcustomcut).toExist();
	await expect(nilahproductarea.nilahcustomcolor).toExist();
	await expect(nilahproductarea.nilahcustomclarity).toExist();
});

Then(/^I ensure nilah product price is displayed$/, async() => {
	const nilahproductarea = new shoppingcartpage;
    await expect(nilahproductarea.nilahpricearea).toExist();
});

Then(/^I ensure nilah diamond links and diamond details is displayed$/, async() => {
	const nilahproductarea = new shoppingcartpage;
    await expect(nilahproductarea.nilaviewdiamonddetails).toExist();
	await expect(nilahproductarea.nilahaddwomensband).toExist();
	//await expect(nilahproductarea.nilahaddanotherring).toExist();

});

Then(/^I ensure choose delivery options text is displayed$/, async() => {
	const deliveryoptionarea = new shoppingcartpage;
	await expect(deliveryoptionarea.deliveryoptiontext).toExist();
});

Then(/^I ensure free shipping text and date is displayed$/, async() => {
	const deliveryoptionarea = new shoppingcartpage;
	await expect(deliveryoptionarea.freeshippingtext).toExist();
});

Then(/^I ensure free shipping radiobutton is selected default$/, async() => {
	const deliveryoptionarea = new shoppingcartpage;
	await expect(deliveryoptionarea.freeshippingradiobutton).toExist();
	await expect(deliveryoptionarea.fedexshippingradiobutton).toExist();
	
});

Then(/^I ensure express delivery text and date is displayed$/, async() => {
	const deliveryoptionarea = new shoppingcartpage;
	await expect(deliveryoptionarea.fedexshippingtext).toExist();
	await expect(deliveryoptionarea.fedexshippingdeliverydatetext).toExist();
});

Then(/^I ensure express delivery radiobutton is not selected default$/, async() => {
	const deliveryoptionarea = new shoppingcartpage;
	await expect(deliveryoptionarea.fedexshippingradiobutton).toExist();
	await expect(deliveryoptionarea.freeshippingradiobutton).toExist();
});

Then(/^I ensure Shipping price text is displayed in total area$/, async() => {
	const sptotalarea = new shoppingcartpage;
	await expect(sptotalarea.shippingtext).toExist();
});

Then(/^I ensure Shipping price value is displayed in total area$/, async() => {
	const sptotalarea = new shoppingcartpage;
	await expect(sptotalarea.FREEshippingprice).toExist();
});

Then(/^I ensure express delivery area in shoppingcart is displayed$/, async() => {
	const fedexdeliveryarea = new shoppingcartpage;
	await expect (fedexdeliveryarea.expressordertext).toExist();
	await expect (fedexdeliveryarea.expressorderremovebtn).toExist();
	await expect (fedexdeliveryarea.expressorderdesc).toExist();
	await expect (fedexdeliveryarea.expressorderprice).toExist();
});
Then(/^I ensure FEDEX Shipping price value is displayed in total area$/, async() => {
	const sptotalarea = new shoppingcartpage;
	await expect(sptotalarea.FDXshippingprice).toExist();
});

Then(/^I ensure express delivery area is not displayed$/, async() => {
	const fedexdeliveryarea = new shoppingcartpage;
	await expect (fedexdeliveryarea.expressordertext).not.toExist();
});

Then(/^I ensure easy delivery text and date is displayed$/, async() => {
	const deliveryoptionarea = new shoppingcartpage;
	await expect(deliveryoptionarea.easydeliverytext).toExist();
	await expect(deliveryoptionarea.easydeliverydatetext).toExist();
});

Then(/^I ensure easy delivery radiobutton is not selected default$/, async() => {
	const deliveryoptionarea = new shoppingcartpage;
	await expect(deliveryoptionarea.freeshippingradiobutton).toExist();
	await expect(deliveryoptionarea.fedexshippingradiobutton).toExist();
	await expect(deliveryoptionarea.easyshippingradiobutton).toExist();
});

Then(/^I ensure extra information text is displayed$/, async() => {
	const deliveryoptionarea = new shoppingcartpage;
	await expect(deliveryoptionarea.easyshippinginformation).toExist();
});

Then(/^I ensure setting product price is reduced$/, async() => {
	const nilahproductarea = new shoppingcartpage;
	await expect(nilahproductarea.nilahdeletedpricearea).toExist();
	await expect(nilahproductarea.nilahpricearea).toExist();
});

Then(/^I ensure show details link is displayed$/, async() => {
	const nilahproductarea = new shoppingcartpage;
	await expect(nilahproductarea.productcdshowdiscountdetails).toExist();
});

Then(/^I ensure show discount popup is displayed$/, async() => {
	const nilahproductarea = new shoppingcartpage;
	await expect(nilahproductarea.productcdviewdiscountdetails).toExist();
	await expect(nilahproductarea.productcdhidediscountdetails).toExist();
});

Then(/^I ensure subtotal text and ring price is displayed$/, async() => {
	const sptotalarea = new shoppingcartpage;
	await expect(sptotalarea.subtotaltext).toExist();
	await expect(sptotalarea.subtotalprice).toExist();
});


Then(/^I ensure shipping text and ring free shipping price is displayed$/, async() => {
	const sptotalarea = new shoppingcartpage;
	await expect(sptotalarea.shippingtext).toExist();
	await expect(sptotalarea.FREEshippingprice).toExist();
});

Then(/^I ensure total text and ring total price is displayed$/, async() => {
	const sptotalarea = new shoppingcartpage;
	await expect(sptotalarea.totaltext).toExist();
	await expect(sptotalarea.totalprice).toExist();
});

Then(/^I ensure proceed to payment button below total price$/, async() => {
	const sptotalarea = new shoppingcartpage;
	await expect(sptotalarea.bottomproceedtopaymentbutton).toExist();
});

Then(/^I ensure shipping text and ring fedex shipping price is displayed$/, async() => {
	const sptotalarea = new shoppingcartpage;
	await expect(sptotalarea.shippingtext).toExist();
	await expect(sptotalarea.FDXshippingprice).toExist();
});

Then(/^I ensure protection plan text and price is displayed in calculation area$/, async() => {
	const sptotalarea = new shoppingcartpage;
	await expect(sptotalarea.protectionplantext).toExist();
	await expect(sptotalarea.protectionplanprice).toExist();
});

Then(/^I ensure additional instruction for us text is displayed$/, async() => {
	const sptotalarea = new shoppingcartpage;
	await expect(sptotalarea.additionalinstructiontext).toExist();
});

Then(/^I ensure text is added in additional instruction is displayed$/, async() => {
	const sptotalarea = new shoppingcartpage;
	await expect(sptotalarea.additionalinstructiontextarea).toExist();
});

Then(/^I ensure jazmin product image, name and description in shoppingcart is displayed$/, async() => {
	const jazminproductarea = new shoppingcartpage;
    await expect(jazminproductarea.jazminimage).toExist();
	await expect(jazminproductarea.jazminname).toExist();
	await expect(jazminproductarea.jazmindescription).toExist();
});

Then(/^I ensure jazmin product price is displayed$/, async() => {
	const jazminproductarea = new shoppingcartpage;
    await expect(jazminproductarea.jazminpricearea).toExist();
	await expect(jazminproductarea.jazmindeletedpricearea).toExist();
});

Then(/^I ensure selected jazmin ring size text and ringsize is displayed$/, async() => {
	const jazminproductarea = new shoppingcartpage;
    await expect(jazminproductarea.jazminringsizetext).toExist();
	await expect(jazminproductarea.jazminringsize).toExist();
});

Then(/^I ensure colt product image, name and description in shoppingcart is displayed$/, async() => {
	const coltproductarea = new shoppingcartpage;
    await expect(coltproductarea.coltimage).toExist();
	await expect(coltproductarea.coltname).toExist();
	await expect(coltproductarea.coltdescription).toExist();
});

Then(/^I ensure colt product price is displayed$/, async() => {
	const coltproductarea = new shoppingcartpage;
    await expect(coltproductarea.coltpricearea).toExist();
	await expect(coltproductarea.coltdeletedpricearea).toExist();
});

Then(/^I ensure selected colt ring size text and ringsize is displayed$/, async() => {
	const coltproductarea = new shoppingcartpage;
    await expect(coltproductarea.coltringsizetext).toExist();
	await expect(coltproductarea.coltringsize).toExist();
});

Then(/^I ensure show discount details link is displayed$/, async() => {
	const shoppingarea = new shoppingcartpage;
	await expect(shoppingarea.productcdshowdiscountdetails).toExist();
});














Then(/^I ensure need assistance text is displayed$/, async() => {
	const needassistancearea = new shoppingcartpage;
    await expect(needassistancearea.assistancearea).toExist();
	await expect(needassistancearea.needassistancetext).toExist();
});


Then(/^I ensure emailus link is displayed$/, async() => {
	const needassistancearea = new shoppingcartpage;
    await expect(needassistancearea.emailustext).toExist();
});

Then(/^I ensure emailus page is redirected$/, async() => {
	const needassistancearea  = await browser.getUrl()
	await expect(needassistancearea).toEqual(sdata.needassistancelink.emailus);
});


Then(/^I ensure request call back link is displayed$/, async() => {
	const needassistancearea = new shoppingcartpage;
    await expect(needassistancearea.requestcallbacktext).toExist();
});

Then(/^I ensure request call back is redirected$/, async() => {
	const needassistancearea  = await browser.getUrl()
	await expect(needassistancearea).toEqual(sdata.needassistancelink.requestcallback);
});

Then(/^I ensure payment options area is displayed$/, async() => {
	const paymentsarea = new shoppingcartpage;
    await expect(paymentsarea.paymentarea).toExist();
	await expect(paymentsarea.acceptedpaymenttext).toExist();
});

Then(/^I ensure paypal image is displayed$/, async() => {
	const paymentsarea = new shoppingcartpage;
    await expect(paymentsarea.paymentpaypal).toExist();
});

Then(/^I ensure paypal popup is displayed$/, async() => {
	const paymentsarea = new shoppingcartpage;
    await expect(paymentsarea.paymentpaypalpopup).toExist();
});

Then(/^I ensure popup is closed$/, async() => {
	const paymentsarea = new shoppingcartpage;
    await expect(paymentsarea.paymentpaypalpopup).not.toExist();
});

Then(/^I ensure paypalcredit image is displayed$/, async() => {
	const paymentsarea = new shoppingcartpage;
    await expect(paymentsarea.paymentpaypalcredit).toExist();
});

Then(/^I ensure paypalcredit popup is displayed$/, async() => {
	const paymentsarea = new shoppingcartpage;
    await expect(paymentsarea.paymentpaypalpopup).toExist();
});

Then(/^I ensure affirm image is displayed$/, async() => {
	const paymentsarea = new shoppingcartpage;
    await expect(paymentsarea.paymentaffirm).toExist();
});


Then(/^I ensure calender image is displayed$/, async() => {
	const paymentsarea = new shoppingcartpage;
    await expect(paymentsarea.paymentdiamonderepayment).toExist();
});


Then(/^I ensure calender popup is displayed$/, async() => {
	const paymentsarea = new shoppingcartpage;
    await expect(paymentsarea.paymentpaypalpopup).toExist();
});


Then(/^I ensure accreditation area is displayed$/, async() => {
	const paymentsarea = new shoppingcartpage;
    await expect(paymentsarea.accrediationarea).toExist();
});

Then(/^I ensure accreditation busniess image is displayed$/, async() => {
	const accrediationarea = new shoppingcartpage;
    await expect(accrediationarea.accrediationbusiness).toExist();
});

Then(/^I ensure accreditation busniess is redirected$/, async() => {
	const accrediationarea  = await browser.getUrl()
	await expect(accrediationarea).toEqual(sdata.accreditation.accreditationbusniess);
});

Then(/^I ensure norton image is displayed$/, async() => {
	const accrediationarea = new shoppingcartpage;
    await expect(accrediationarea.norton).toExist();
});

Then(/^I ensure norton is redirected$/, async() => {
	const accrediationarea  = await browser.getUrl()
	await expect(accrediationarea).toEqual(sdata.accreditation.norton);
});

Then(/^I ensure affirm popup is displayed$/, async() => {
	const paymentsarea = new shoppingcartpage;
    await expect(paymentsarea.paymentpaypalpopup).toExist();
});

Then(/^I ensure affirm page is redirected$/, async() => {
	const paymentarea  = await browser.getUrl()
	await expect(paymentarea).toEqual(sdata.paymentlink.affirm);
});

Then(/^I ensure no product text is displayed$/, async() => {
	const cartarea = new shoppingcartpage;
    await expect(cartarea.noproducttext).toExist();
});

Then(/^I ensure mensband  page is redirected$/, async() => {
	const menslink = new shoppingcartpage;
	await expect(menslink.mensbandtext).toExist();   
});

Then(/^I ensure error message will popup$/, async() => {
	const errormessage = new shoppingcartpage;
	await expect(errormessage.errortext).toExist();
	await expect(errormessage.errorokbutton).toExist();   
});


When(/^I select Add to cart button in the popup$/, () => {
	const addBand = new shoppingcartpage;
	addBand.selectAddToCart();
});


Then(/^I ensure Agacia is added to cart$/, async() => {
	const errormessage = new shoppingcartpage;
	await expect(errormessage.txtAgaciaBand).toExist();
});

Then(/^I ensure Custom diamond summary is displayed$/, async () => {
	const cartarea = new shoppingcartpage;
	await expect(cartarea.custumDiamond).toExist();
});

Then(/^I ensure price of the diamond is display$/, async () => {
	const cartarea = new shoppingcartpage;
	await expect(cartarea.diamondPrice).toExist();
});

Then(/^I ensure Shape of the diamond is display$/, async () => {
	const cartarea = new shoppingcartpage;
	await expect(cartarea.diamondShape).toExist();
});

Then(/^I click on view diamond details$/, () => {
	const cartarea = new shoppingcartpage;
	cartarea.clickDiaViewdetails();
});

Then(/^I ensure popUp of the your diamond details page is display$/, async () => {
	const cartarea = new shoppingcartpage;
	await expect(cartarea.viewDiamdetailsPopUP).toExist();
});

Then(/^I ensure price of the diamond popUp is display$/, async () => {
	const cartarea = new shoppingcartpage;
	await expect(cartarea.diamondPriceInPop).toExist();
});
