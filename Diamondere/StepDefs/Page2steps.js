const { Given, When, Then } = require('@wdio/cucumber-framework');
const BrowserUtil = require('../../CommonUtils/BrowserUtil');
const ElementUtil = require('../../CommonUtils/ElementUtil');
const dmd = require('../Configs/dmd_' + global.testEnv + '.js');
const page2 = require('../PageObjects/Page2')
const data = require('../TestData/Page2.json');
const { start } = require('chromedriver');

// Scenario 1

Given(/^I select Rings category$/, async() => {
	const rings = new page2;
	await rings.selectRingscategory();
});

When(/^I select Emerald from Shop By Gemstone$/, async() => {
	const rings = new page2;
	await rings.selectEmeraldgemstonerings();
});

Then(/^Ensure Page2 is displayed with all the Emerald products$/, async() => {
	const rings = await browser.getUrl();
	await expect(rings). toEqual(data.Page2Links.Page2emeraldringsURL);
});

Then(/^Ensure the filter tabs are displayed for Emerald$/, async() => {
	const rings = new page2;
	await expect(rings.sctnFilterTab).toExist();
	await expect(rings.lnkFilterStyle).toExist();
	await expect(rings.lnkFilterStone).toExist();
	await expect(rings.lnkFilterShape).toExist();
	await expect(rings.lnkFilterMetal).toExist();
	await expect(rings.lnkFilterCaratRange).toExist();
	await expect(rings.lnkFilterSortBy).toExist();
});

Then(/^Ensure the Banner and link changes with Emerald$/, async() => {
	const rings = new page2;
	await expect(rings.boxbanneremeraldRing).toExist();
	await expect(rings.txtheadingemeraldRing).toExist();
	await expect(rings.txtdescriptionEmeraldRing).toExist();
	await expect(rings.txtdescriptionGIAEmeraldRing).toExist();
	await expect(rings.lnkreadmore).toExist();
	await expect(rings.lnkexploreemeraldguide).toExist();
});

Then(/^Ensure the Inline description for Emerald is displayed$/, async() => {
	const rings = new page2;
	await expect(rings.boxinlinedescription).toExist();
	await expect(rings.txtemeraldheading).toExist();
	await expect(rings.txtqualityemerald).toExist();
    await expect(rings.txthandcraftedemerald).toExist();
	await expect(rings.txtoriginemerald).toExist();
	await expect(rings.txtaccreditionandGIAemerald).toExist();
	await expect(rings.lnkviewemerald).toExist();
});

Then(/^Ensure the SEO section is updated as per Emerald$/, async() => {
	const rings = new page2;
	await expect(rings.boxSEO).toExist();
	await expect(rings.txtheadingSEOEmeraldRing).toExist();
	await expect(rings.lnkstarSEOEmeraldRing).toExist();
	await expect(rings.lnkSEOdescrVintageEmeraldRing).toExist();
	await expect(rings.lnkSEOdescrCladdaghEmeraldRing).toExist();
});

Then(/^Ensure Danette product is displayed with product name, price and product description$/, async() => {
	const rings = new page2;
	await expect(rings.imgdanettePDemeraldring).toExist();
	await expect(rings.txtdanettePDemeraldring).toExist();
	await expect(rings.txtpricedanettePDemeraldring).toExist();
	await expect(rings.txtdescrpdanettePDEmeraldring).toExist();
});

When(/^I select Danette product$/, async() => {
	const rings = new page2;
	await rings.selectDanetteemeraldring();
});

Then(/^Ensure the user enters page 3 of Danette$/, async() => {
	const rings = await browser.getUrl();
	await expect(rings). toEqual(data.Page2Links.Danetteemeraldpage3URL);
});

//Scenario 2

When(/^I select View Emerald Video$/, async() => {
	const rings = new page2;
	await rings.selectViewEmeraldvideo();
});

Then(/^Ensure a popup video plays Emerald buying guide$/, async() => {
	const rings = new page2;
	await expect(rings.popupviewemeraldvideo).toExist();
});

//Scenario 3

When(/^I select rating star link in SEO section$/, async() => {
	const rings = new page2;
	await rings.selectStarSEOemeraldring();
});

Then(/^Ensure review for diamondere rings page is displayed$/, async() => {
	const rings = await browser.getUrl();
	await expect(rings).toEqual(data.Page2Links.ReviewspageforRingsURL);
});


Then(/^Ensure review for rings page is displayed$/, async() => {
	const rings = await browser.getUrl();
	await expect(rings).toEqual(data.Page2Links.ReviewsforRingsURL);
});


When(/^I click on Vintage rings link in SEO description$/, async() => {
	const rings = new page2;
	await rings.selectSEOVintagering();
});

Then(/^Ensure page 2 of vintage emerald rings is displayed$/, async() => {
	const rings = await browser.getUrl();
	await expect(rings).toEqual(data.Page2Links.VintageemeraldringsURL);
});

When(/^I click on Claddagh rings link in SEO description$/, async() => {
	const rings = new page2;
	await rings.selectSEOCladdaghring();
});

Then(/^Ensure page 2 of Claddagh emerald rings is displayed$/, async() => {
	const rings = await browser.getUrl();
	await expect(rings).toEqual(data.Page2Links.CladdaghemeraldringURL);
});

// Scenario 4

Given(/^I select Engagement category$/, async() => {
	const engagement = new page2;
	await engagement.selectengagementcategory();
});

When(/^I select Solitaire rings from Engagement Ring Styles$/, async() => {
	const engagement = new page2;
	await engagement.selectsolitaireengagement();
});

Then(/^Ensure Page2 is displayed with all the solitaire products$/, async() => {
	const engagement = await browser.getUrl();
	await expect(engagement).toEqual(data.Page2Links.SolitaireengagementringsURL);
});

Then(/^Ensure the filter tabs are displayed for solitaire$/, async() => {
	const engagement = new page2;
	await expect(engagement.sctnFilterTab).toExist();
	await expect(engagement.lnkFilterStyle).toExist();
	await expect(engagement.lnkFilterStone).toExist();
	await expect(engagement.lnkFilterShape).toExist();
	await expect(engagement.lnkFilterMetal).toExist();
	await expect(engagement.lnkFilterCaratRange).toExist();
	await expect(engagement.lnkFilterSortBy).toExist();
});

Then(/^Ensure the Banner and link changes with Solitaire$/, async() => {
	const engagement = new page2;
	await expect(engagement.boxbannersolitaireEngageRing).toExist();
	await expect(engagement.txtheadingsolitaireEngageRing).toExist();
	await expect(engagement.txtdescriptionsolitaireEngageRing).toExist();
	await expect(engagement.lnkreadmore).toExist();
	await expect(engagement.lnkexplorejewelryguide).toExist();
});

Then(/^Ensure the Inline description for Solitaire is displayed$/, async() => {
	const engagement = new page2;
	await expect(engagement.boxinlinedescription).toExist();
	await expect(engagement.txtinlinesolitaireEngageheading).toExist();
	await expect(engagement.txtInlinedescriptionsolitaireEngage).toExist();
});

Then(/^Ensure the SEO section is updated as per Solitaire$/, async() => {
	const engagement = new page2;
	await expect(engagement.boxSEO).toExist();
	await expect(engagement.txtheadingSEOSolitaireRing).toExist();
	await expect(engagement.lnkstarSEOEmeraldRing).toExist();
});

Then(/^Ensure Miya product is displayed with product name, price and product description$/, async() => {
	const engagement = new page2
	await expect(engagement.imgMiyaPDsolitairering).toExist();
	await expect(engagement.txtMiyaPDsolitairering).toExist();
	await expect(engagement.txtpriceMiyaPDSolitairering).toExist();
	await expect(engagement.txtsettingpriceMiyaPDSolitairering).toExist();
});

When(/^I select Miya product$/, async() => {
	const engagement = new page2;
	await engagement.selectMiyaproduct();
});

Then(/^Ensure the user enters page 3 of Miya$/, async() => {
	const engagement = await browser.getUrl();
	await expect(engagement).toEqual(data.Page2Links.Miyasolitairepage3URL);
});

// Scenario 5

Given(/^I select wedding category$/, async() => {
	const wedding = new page2;
	await wedding.selectweddingcategory();
});

When(/^I select Eternity bands under Womans wedding band styles$/, async() => {
	const wedding = new page2;
	await wedding.selectEternitybands();
});

Then(/^Ensure Page2 is displayed with all the Eternity band products$/, async() => {
	const wedding = await browser.getUrl();
	await expect(wedding).toEqual(data.Page2Links.Eternitybandspage2URL);
});

Then(/^Ensure the filter tabs are displayed for Eternity$/, async() => {
	const wedding = new page2;
	await expect(wedding.sctnFilterTab).toExist();
	await expect(wedding.lnkFilterTypes).toExist();
	await expect(wedding.lnkFilterStone).toExist();
	await expect(wedding.lnkFilterShape).toExist();
	await expect(wedding.lnkFilterMetal).toExist();
	await expect(wedding.lnkFilterCaratRange).toExist();
	await expect(wedding.lnkFilterSortBy).toExist();
});

Then(/^Ensure the Banner and link changes with Eternity bands$/, async() => {
	const wedding = new page2;
	await expect(wedding.boxbannerEternitybands).toExist();
	await expect(wedding.txtheadingEternityBands).toExist();
	await expect(wedding.txtdescriptionEternityBands).toExist();
	await expect(wedding.lnkreadmore).toExist();	
});

Then(/^Ensure the SEO section is updated as per Eternity bands$/, async() => {
	const wedding = new page2;
	await expect(wedding.boxSEO).toExist();
	await expect(wedding.txtheadingSEOEternityBands).toExist();	
});

Then(/^Ensure Jean product is displayed with product name, price and product description$/, async() => {
	const wedding = new page2;
	await expect(wedding.imgJeanPDEternityBands).toExist();
	await expect(wedding.txtJeanPDEternityBands).toExist();
	await expect(wedding.txtpriceJeanPDEternityBands).toExist();	
	await expect(wedding.txtdescrpJeanPDEternityBands).toExist();
});

When(/^I select Jean product$/, async() => {
	const wedding = new page2;
	await wedding.selectJeanproduct();
});

Then(/^Ensure the user enters page 3 of Jean$/, async() => {
	const wedding = await browser.getUrl();
	await expect(wedding).toEqual(data.Page2Links.JeanEternitybandspage3URl);
});

// Scenario 6

Given(/^I select Bracelet category$/, async() => {
	const bracelet = new page2;
	await bracelet.selectbraceletscategory();
});

When(/^I select Tennis Bracelets from Bracelet styles$/, async() => {
	const bracelet = new page2;
	await bracelet.selectTennisbracelets();
});

Then(/^Ensure Page2 is displayed with all the Tennis products$/, async() => {
	const bracelet = await browser.getUrl();
	await expect(bracelet).toEqual(data.Page2Links.Tennisbraceletpage2URL);
});

Then(/^Ensure the filter tabs are displayed for Tennis Bracelet$/, async() => {
	const bracelet = new page2;
	await expect(bracelet.sctnFilterTab).toExist();
	await expect(bracelet.lnkFilterStyle).toExist();
	await expect(bracelet.lnkFilterStone).toExist();
	await expect(bracelet.lnkFilterShape).toExist();
	await expect(bracelet.lnkFilterMetal).toExist();
	await expect(bracelet.lnkFilterCaratRange).toExist();
	await expect(bracelet.lnkFilterSortBy).toExist();
});

Then(/^Ensure the Banner and link changes with Tennis Bracelet$/, async() => {
	const bracelet = new page2;
	await expect(bracelet.boxbannerTennisbracelets).toExist();
	await expect(bracelet.txtheadingTennisbracelets).toExist();
	await expect(bracelet.txtdescriptionTennisbracelets).toExist();
	await expect(bracelet.lnkexplorejewelryguide).toExist();	
});

Then(/^Ensure the Inline description for Tennis is displayed$/, async() => {
	const bracelet = new page2;
	await expect(bracelet.boxinlinedescription).toExist();
	await expect(bracelet.txtinlineTennisbraceletsheading).toExist();
	await expect(bracelet.txtInlinedescriptionTennisbracelets).toExist();
});

Then(/^Ensure the SEO section is updated as per Tennis Bracelet$/, async() => {
	const bracelet = new page2;
	await expect(bracelet.boxSEO).toExist();
	await expect(bracelet.txtheadingSEOTennisBracelets).toExist();	
	await expect(bracelet.lnkstarSEOTennisBracelets).toExist();
});

Then(/^Ensure Zainab product is displayed with product name, price and product description$/, async() => {
	const bracelet = new page2;
	await expect(bracelet.imgZainabPDTennisBracelets).toExist();
	await expect(bracelet.txtZainabPDTennisBracelets).toExist();
	await expect(bracelet.txtpriceZainabPDTennisBracelets).toExist();	
	await expect(bracelet.txtdescrpZainabPDTennisBracelets).toExist();
});

When(/^I select Zainab product$/, async() => {
	const bracelet = new page2;
	await bracelet.selectZainabTennisbracelets();
});

Then(/^Ensure the user enters page 3 of Zainab$/, async() => {
	const bracelet = await browser.getUrl();
	await expect(bracelet).toEqual(data.Page2Links.ZainabTennispage3URL);
});

//  Scenario 7

When(/^I select rating star link in SEO section for Tennis Bracelets$/, async() => {
	const bracelet = new page2;
	await bracelet.selectstarlnkTennisbracelets();
});

Then(/^Ensure review for diamondere bracelets page is displayed$/, async() => {
	const bracelet = await browser.getUrl();
	await expect(bracelet).toEqual(data.Page2Links.ReviewspageforBraceletsURl);
});

// Scenario 8

Given(/^I select Earrings category$/, async() => {
	const earrings = new page2;
	await earrings.selectEarringscategory();
});

When(/^I select Drop Earrings from Earring styles$/, async() => {
	const earrings = new page2;
	await earrings.selectDropEarrings();
});

Then(/^Ensure Page2 is displayed with all the Drop Earrings$/, async() => {
	const earrings = await browser.getUrl();
	await expect(earrings).toEqual(data.Page2Links.Dropearringspage2URL);
});

Then(/^Ensure the filter tabs are displayed for Drop Earrings$/, async() => {
	const earrings = new page2;
	await expect(earrings.sctnFilterTab).toExist();
	await expect(earrings.lnkFilterStyle).toExist();
	await expect(earrings.lnkFilterStone).toExist();
	await expect(earrings.lnkFilterShape).toExist();
	await expect(earrings.lnkFilterMetal).toExist();
	await expect(earrings.lnkFilterCaratRange).toExist();
	await expect(earrings.lnkFilterSortBy).toExist();
});

Then(/^Ensure the Banner and link changes with Drop Earrings$/, async() => {
	const earrings = new page2;
	await expect(earrings.boxbannerDropearrings).toExist();
	await expect(earrings.txtheadingDropearrings).toExist();
	await expect(earrings.txtdescriptionDropearrings).toExist();
	await expect(earrings.lnkexplorejewelryguide).toExist();	
});

Then(/^Ensure the Inline description for Drop Earrings is displayed$/, async() => {
	const earrings = new page2;
	await expect(earrings.boxinlinedescription).toExist();
	await expect(earrings.txtinlineDropearringsheading).toExist();
	await expect(earrings.txtInlinedescriptionDropearrings).toExist();
});

Then(/^Ensure the SEO section is updated as per Drop Earrings$/, async() => {
	const earrings = new page2;
	await expect(earrings.boxSEO).toExist();
	await expect(earrings.txtheadingSEODropearrings).toExist();	
	await expect(earrings.lnkstarSEODropearrings).toExist();
});

Then(/^Ensure Valonia product is displayed with product name, price and product description$/, async() => {
	const earrings = new page2;
	await expect(earrings.imgValoniaPDDropearrings).toExist();
	await expect(earrings.txtValoniaPDDropearrings).toExist();
	await expect(earrings.txtpriceValoniaPDDropearrings).toExist();	
	await expect(earrings.txtdescrpValoniaPDDropearrings).toExist();
});

When(/^I select Valonia product$/, async() => {
	const earrings = new page2;
	await earrings.selectValoniaDropearrings();
});

Then(/^Ensure the user enters page 3 of Valonia$/, async() => {
	const earrings = await browser.getUrl();
	await expect(earrings).toEqual(data.Page2Links.Valoniaproductpage3URL);
});

// Scenario 9

When(/^I select rating star link in SEO section for Drop earrings$/, async() => {
	const earrings = new page2;
	await earrings.selectstarlnkDropEarrings();
});

Then(/^Ensure review for diamondere earrings page is displayed$/, async() => {
	const earrings = await browser.getUrl();
	await expect(earrings).toEqual(data.Page2Links.ReviewspageforEarringsURL);
});

// Scenario 10

Given(/^I select Necklace category$/, async() => {
	const necklace = new page2;
	await necklace.selectNecklacecategory();
});

When(/^I select Heart Necklaces from Necklace styles$/, async() => {
	const necklace = new page2;
	await necklace.selectHeartNecklace();
});

Then(/^Ensure Page2 is displayed with all the Heart Necklaces$/, async() => {
	const necklace = await browser.getUrl();
	await expect(necklace).toEqual(data.Page2Links.Heartnecklacepage2URL);
});

Then(/^Ensure the filter tabs are displayed for Heart Necklaces$/, async() => {
	const necklace = new page2;
	await expect(necklace.sctnFilterTab).toExist();
	await expect(necklace.lnkFilterStyle).toExist();
	await expect(necklace.lnkFilterStone).toExist();
	await expect(necklace.lnkFilterShape).toExist();
	await expect(necklace.lnkFilterMetal).toExist();
	await expect(necklace.lnkFilterCaratRange).toExist();
	await expect(necklace.lnkFilterSortBy).toExist();
});

Then(/^Ensure the Banner and link changes with Heart Necklaces$/, async() => {
	const necklace = new page2;
	await expect(necklace.boxbannerHeartNecklace).toExist();
	await expect(necklace.txtheadingHeartNecklace).toExist();
	await expect(necklace.txtdescriptionHeartNecklace).toExist();
	await expect(necklace.lnkexplorejewelryguide).toExist();	
});

Then(/^Ensure the Inline description for Heart Necklaces is displayed$/, async() => {
	const necklace = new page2;
	await expect(necklace.boxinlinedescription).toExist();
	await expect(necklace.txtinlineHeartNecklacesheading).toExist();
	await expect(necklace.txtInlinedescriptionHeartNecklace).toExist();
});

Then(/^Ensure the SEO section is updated as per Heart Necklaces$/, async() => {
	const necklace = new page2;
	await expect(necklace.boxSEO).toExist();
	await expect(necklace.txtheadingSEOHeartNecklace).toExist();	
	await expect(necklace.lnkstarSEOHeartNecklace).toExist();
});

Then(/^Ensure Beleza product is displayed with product name, price and product description$/, async() => {
	const necklace = new page2;
	await expect(necklace.imgBelezaPDHeartNecklace).toExist();
	await expect(necklace.txtBelezaPDHeartNecklace).toExist();
	await expect(necklace.txtpriceBelezaPDHeartNecklace).toExist();	
	await expect(necklace.txtdescrpBelezaPDHeartNecklace).toExist();
});

When(/^I select Beleza product$/, async() => {
	const necklace = new page2;
	await necklace.selectBelezaHeartNecklace();
});

Then(/^Ensure the user enters page 3 of Beleza$/, async() => {
	const necklace = await browser.getUrl();
	await expect(necklace).toEqual(data.Page2Links.BelezaNecklacepage3URL);
});

//  Scenario 11: 

When(/^I select rating star link in SEO section for Heart necklaces$/, async() => {
	const necklace = new page2;
	await necklace.selectstarlinkHeartNecklace();
});

Then(/^Ensure review for diamondere necklaces page is displayed$/, async() => {
	const necklace = await browser.getUrl();
	await expect(necklace).toEqual(data.Page2Links.ReviewspageforNecklaceURL);
});

//  Scenario 12: 

Given(/^I select Mens category$/, async() => {
	const mens = new page2;
	await mens.selectMenscategory();
});

When(/^I select Mens earrings from Shop By Style$/, async() => {
	const mens = new page2;
	await mens.selectMensearrings();
});

Then(/^Ensure Page2 is displayed with all the Mens earrings$/, async() => {
	const mens = await browser.getUrl();
	await expect(mens).toEqual(data.Page2Links.Mensearringspage2URL);
});

Then(/^Ensure the filter tabs are displayed for Mens earrings$/, async() => {
	const mens = new page2;
	await expect(mens.sctnFilterTab).toExist();
	await expect(mens.lnkFilterStone).toExist();
	await expect(mens.lnkFilterShape).toExist();
	await expect(mens.lnkFilterMetal).toExist();
	await expect(mens.lnkFilterCaratRange).toExist();
	await expect(mens.lnkFilterSortBy).toExist();
});

Then(/^Ensure the Banner and link changes with Mens earrings$/, async() => {
	const mens = new page2;
	await expect(mens.boxbannerMensearrings).toExist();
	await expect(mens.txtheadingMensearrings).toExist();
	await expect(mens.txtdescriptionMensearrings).toExist();
	await expect(mens.lnkreadmore).toExist();	
	await expect(mens.lnkexplorejewelryguide).toExist();	
});

Then(/^Ensure the SEO section is updated as per Mens earrings$/, async() => {
	const mens = new page2;
	await expect(mens.boxSEO).toExist();
	await expect(mens.txtheadingSEOMensearrings).toExist();	
});

Then(/^Ensure Samuel product is displayed with product name, price and product description$/, async() => {
	const mens = new page2;
	await expect(mens.imgSamuelPDMensearrings).toExist();
	await expect(mens.txtSamuelPDMensearrings).toExist();
	await expect(mens.txtpriceSamuelPDMensearrings).toExist();	
	await expect(mens.txtdescrpSamuelPDMensearrings).toExist();
});

When(/^I select Samuel product$/, async() => {
	const mens = new page2;
	await mens.selectSamuelMensearrings();
});

Then(/^Ensure the user enters page 3 of Samuel$/, async() => {
	const mens = await browser.getUrl();
	await expect(mens).toEqual(data.Page2Links.Samuelmensearringpage3URL);
});

//  Scenario 13:

When(/^I select View All from Rings$/, async() => {
	const style = new page2;
	await style.selectViewallRings();
});

Then(/^Ensure Page2 is displayed with all the ring products$/, async() => {
	const style = await browser.getUrl();
	await expect(style).toEqual(data.Page2Links.ViewAllRingspage2URL);
});

When(/^I select Style filter from filter tab$/, async() => {
	const style = new page2;
	await style.selectStylefilter();
});

Then(/^Ensure the Style dropdown is displayed$/, async() => {
	const style = new page2;
	await expect(style.ddStylefilter).toExist();
});

When(/^I select Sidestone under Style fiter$/, async() => {
	const style = new page2;
	await style.selectSidestoneoption();
});

Then(/^Ensure the Banner and link changes with Sidestone style filter$/, async() => {
	const style = new page2;
	await expect(style.boxbannerSidestonerings).toExist();
	await expect(style.txtheadingSidestonerings).toExist();
	await expect(style.txtdescriptionSidestonerings).toExist();
	await expect(style.lnkexplorejewelryguide).toExist();
});

Then(/^Ensure the Inline description for Sidestone style filter is displayed$/, async() => {
	const style = new page2;
	await expect(style.boxinlinedescription).toExist();
	await expect(style.txtinlineSideStoneheading).toExist();
	await expect(style.txtInlinedescriptionSideStone).toExist();
});

Then(/^Ensure the SEO section is updated as per Sidestone style filter$/, async() => {
	const style = new page2;
	const mens = new page2;
	await expect(style.boxSEO).toExist();
	await expect(style.txtheadingSEOSidestonerings).toExist();	
	await expect(style.lnkstarSEOEmeraldRing).toExist();	

});

Then(/^Ensure Xylos product is displayed with product name, price and product description$/, async() => {
	const style = new page2;
	const mens = new page2;
	await expect(style.imgXylosPDSidestonerings).toExist();
	await expect(style.txtXylosPDSidestonerings).toExist();
	await expect(style.txtpriceXylosPDSidestonerings).toExist();	
	await expect(style.txtdescrpXylosPDSidestonerings).toExist();
});

When(/^I select Xylos product$/, async() => {
	const style = new page2;
	await style.selectXylosSidestonerings();
});

Then(/^Ensure the user enters page 3 of Xylos$/, async() => {
	const style = await browser.getUrl();
	await expect(style).toEqual(data.Page2Links.XylosSidestoneringspage3URL);
});

//  Scenario 14:

When(/^I select Stone filter from filter tab$/, async() => {
	const stone = new page2;
	await stone.selectStonefilter();
});

Then(/^Ensure the Stone dropdown is displayed$/, async() => {
	const stone = new page2;
	await expect(stone.ddStonefilter).toExist();
});

When(/^I select Pink Sapphire under Stone fiter$/, async() => {
	const stone = new page2;
	await stone.selectPinksapphireoption();
});

Then(/^Ensure the Banner and link changes with Pink Sapphire stone filter$/, async() => {
	const stone = new page2;
	await expect(stone.boxbannerPinkSapphirerings).toExist();
	await expect(stone.txtheadingPinkSapphirerings).toExist();
	await expect(stone.txtdescriptionPinkSapphirerings).toExist();
	await expect(stone.lnkreadmore).toExist();
	await expect(stone.lnkexploregemstoneguide).toExist();
});

Then(/^Ensure the Inline description for Pink Sapphire stone is displayed$/, async() => {
	const stone = new page2;
	await expect(stone.boxinlinedescription).toExist();
	await expect(stone.txtPinksapphireheading).toExist();
	await expect(stone.txtqualityPinksapphire).toExist();
    await expect(stone.txthandcraftedPinksapphire).toExist();
	await expect(stone.txtoriginPinksapphire).toExist();
	await expect(stone.txtaccreditionPinksapphire).toExist();
});

Then(/^Ensure the SEO section is updated as per Pink Sapphire stone filter$/, async() => {
	const stone = new page2;
	await expect(stone.boxSEO).toExist();
	await expect(stone.txtheadingSEOPinksapphire).toExist();
	await expect(stone.lnkstarSEOEmeraldRing).toExist();
});

Then(/^Ensure Eugene product is displayed with product name, price and product description$/, async() => {
	const stone = new page2;
	await browser.keys(['ArrowDown']);
	await expect(stone.imgEugenePDPinkSapphire).toExist();
	await expect(stone.txtEugenePDPinkSapphire).toExist();
	await expect(stone.txtpriceEugenePDPinkSapphire).toExist();	
	await expect(stone.txtdescrpEugenePDPinkSapphire).toExist();
});

When(/^I select Eugene product$/, async() => {
	const stone = new page2;
	await stone.selectEugenePinkSapphireRings();
});

Then(/^Ensure the user enters page 3 of Eugene$/, async() => {
	const stone = await browser.getUrl();
	await expect(stone).toEqual(data.Page2Links.EugenePinkSapphirepage3URL);
});

// Scenario 15:

When(/^I select Shape filter from filter tab$/, async() => {
	const shape = new page2;
	await shape.selectShapefilter();
});

Then(/^Ensure the Shape dropdown is displayed$/, async() => {
	const shape = new page2;
	await expect(shape.ddShapefilter).toExist();
});

When(/^I select Pear under Shape fiter$/, async() => {
	const shape = new page2;
	await shape.selectPearoption();
});

Then(/^Ensure the Banner and link changes with Pear Shape filter$/, async() => {
	const shape = new page2;
	await expect(shape.boxbannerPearcutRings).toExist();
	await expect(shape.txtheadingPearcutRings).toExist();
	await expect(shape.txtdescriptionPearcutRings).toExist();
	await expect(shape.lnkexploreGemstoneshapereference).toExist();
});

Then(/^Ensure the Inline description for Pear Shape filter is displayed$/, async() => {
	const shape = new page2;
	await expect(shape.boxinlinedescription).toExist();
	await expect(shape.txtheadingPearcutRings).toExist();
	await expect(shape.txtdescriptionPearcutRings).toExist();
});

Then(/^Ensure the SEO section is updated as per Pear Shape filter$/, async() => {
	const shape = new page2;
	await expect(shape.boxSEO).toExist();
	await expect(shape.txtheadingSEOPearcutrings).toExist();
	await expect(shape.lnkstarSEOEmeraldRing).toExist();
});

Then(/^Ensure Dezi product is displayed with product name, price and product description$/, async() => {
	const shape = new page2;
	await expect(shape.imgDeziPDPearcut).toExist();
	await expect(shape.txtDeziPDPearcut).toExist();
	await expect(shape.txtpriceDeziPDPearcut).toExist();	
	await expect(shape.txtdescrpDeziPDPearcut).toExist();
});

When(/^I select Dezi product$/, async() => {
	const shape = new page2;
	await shape.selectDeziPearcut();
});

Then(/^Ensure the user enters page 3 of Dezi$/, async() => {
	const shape = await browser.getUrl();
	await expect(shape).toEqual(data.Page2Links.DeziPearcutpage3URL);
});

// Scenario 16:

When(/^I select carat range filter from filter tab$/, async() => {
	const carat = new page2;
	await carat.selectCaratrangefilter();
});

Then(/^Ensure the carat range dropdown is displayed$/, async() => {
	const carat = new page2;
	await expect(carat.ddCaratRangeFilter).toExist();
});

When(/^I select 1 to 2 carat under carat range fiter$/, async() => {
	const carat = new page2;
	await carat.selectoption1to2Caratrange();
});

Then(/^Ensure products are updated as per selected carat option$/, async() => {
	const carat = new page2;
	await expect(carat.tag1to2Carat).toExist();
});

// Scenario 17:

When(/^I select metal filter from filter tab$/, async() => {
	const metal = new page2;
	await metal.selectMetalfilter();
});

Then(/^Ensure the metal dropdown is displayed$/, async() => {
	const metal = new page2;
	await expect(metal.ddMetalFilter).toExist();
});

When(/^I select 14kYG under metal fiter$/, async() => {
	const metal = new page2;
	await metal.select14YGMetal();
});

Then(/^Ensure the Banner and link changes with 14kYG metal filter$/, async() => {
	const metal = new page2;
	await expect(metal.boxbanner14kYGRings).toExist();
	await expect(metal.txtheading14kYGRings).toExist();
	await expect(metal.txtdescription14kYGRings).toExist();
	await expect(metal.lnkexploremetalguide).toExist();
});

Then(/^Ensure the Inline description for Metal filter is displayed$/, async() => {
	const metal = new page2;
	await expect(metal.boxinlinedescription).toExist();
	await expect(metal.txtinline14YGRingsheading).toExist();
	await expect(metal.txtInlinedescription14YGRings).toExist();
});

Then(/^Ensure the SEO section is updated as per Metal filter$/, async() => {
	const metal = new page2;
	await expect(metal.boxSEO).toExist();
	await expect(metal.txtheadingSEO14YGRings).toExist();
	await expect(metal.lnkstarSEOEmeraldRing).toExist();
});

Then(/^Ensure Solace product is displayed with product name, price and product description$/, async() => {
	const metal = new page2;
	await expect(metal.imgSolacePD14YG).toExist();
	await expect(metal.txtSolacePD14YG).toExist();
	await expect(metal.txtpriceSolacePD14YG).toExist();	
	await expect(metal.txtdescrpSolacePD14YG).toExist();
});

When(/^I select Solace product$/, async() => {
	const metal = new page2;
	await metal.selectSolace14YG();
});

Then(/^Ensure the user enters page 3 of Solace$/, async() => {
	const metal = await browser.getUrl();
	await expect(metal).toEqual(data.Page2Links.Solace14YGpage3URL);
});

// Scenario 18

When(/^I select Sort By filter from filter tab$/, async() => {
	const sortby = new page2;
	await sortby.selectSortByFilter();
});

Then(/^Ensure the Sortby dropdown is displayed$/, async() => {
	const sortby = new page2;
	await expect(sortby.ddSortBy).toExist();
});

Then(/^Ensure the Most popular is selected by default$/, async() => {
	const sortby = new page2;
	await expect(sortby.ticksymbolnearmostpopular).toExist();
});

// Scenario 19:

When(/^I select New Arrival under Sortby fiter$/, async() => {
	const sortby = new page2;
	await sortby.selectNewArrival();
});

Then(/^Ensure the New Arrival products are displayed from top to bottom$/, async() => {
	const sortby = await browser.getUrl();
	await expect(sortby).toEqual(data.Page2Links.NewArrivalViewAllRingspage2URL);
});

// Scenario 20:

When(/^I select Price low to high under Sortby fiter$/, async() => {
	const sortby = new page2;
	await sortby.selectPricelowtohigh();
});

Then(/^Ensure the products are displayed from lowest to highest price$/, async() => {
	const sortby = await browser.getUrl();
	await expect(sortby).toEqual(data.Page2Links.PricelowtohighViewallRingspage2URL);
});

// Scenario 21:

When(/^I select Price high to low under Sortby fiter$/, async() => {
	const sortby = new page2;
	await sortby.selectPricehightolow();
});

Then(/^Ensure the products are displayed from highest to lowest price$/, async() => {
	const sortby = await browser.getUrl();
	await expect(sortby).toEqual(data.Page2Links.PricehightolowViewallRingspage2URL);
});

//Scenario 22:

Then(/^Ensure May we assist you button is displayed$/, async() => {
	const static = new page2;
	await expect(static.btnmayweassistyou).toExist();
});

When(/^I scrolldown to the SEO section$/, async() => {
	const static = new page2;
	await static.movetoSEOsection();
});

Then(/^ensure top button is displayed and the filter tab section and search box remain static and displayed at the top$/, async() => {
	const static = new page2;
	await expect(static.btntop).toExist;
	await expect(static.sctnstaticFiltertabandsearchbox).toExist;
});

When(/^I select Top button$/, async() => {
	const static = new page2;
	await static.selectTopbutton();
});

Then(/^ensure the top of the page is displayed$/, async() => {
	const static = new page2;
	await expect(static.boxbannerViewAllRings).toExist;
});

When(/^I select May we assist you button$/, async() => {
	const static = new page2;
	await static.selectMayweassistbutton();
});

Then(/^Ensure the customer care form is displayed$/, async() => {
	const static = new page2;
	await expect(static.formcustomercaremaywe).toExist;
});

When(/^I select close button in customer care form$/, async() => {
	const static = new page2;
	await static.selectclosebuttoncustomercare();
});

//Scenario 23:

Then(/^Ensure the Rings dropdown is displayed$/, async() => {
	const diamondguide = new page2;
	await expect(diamondguide.ddringsshopbycategory).toExist;
	await BrowserUtil.wait(10);
});

When(/^I select Diamond rings from Shop By Diamond$/, async() => {
	const diamondguide = new page2;
	await diamondguide.selectDiamondrings();
});

Then(/^Ensure Page2 is displayed with all the Diamond ring products$/, async() => {
	const diamondguide = await browser.getUrl();
	await expect(diamondguide).toEqual(data.Page2Links.Diamondringspage2URL);
});

Then(/^Ensure the Banner and link is displayed with Explore Diamond guide link$/, async() => {
	const diamondguide = new page2;
	await expect(diamondguide.boxbannerDiamondrings).toExist;
	await expect(diamondguide.lnkexplorediamondguide).toExist;
});

When(/^I select Explore Diamond guide link$/, async() => {
	const diamondguide = new page2;
	await diamondguide.selectExplorediamondguide();
});

Then(/^Ensure it redirects to the Buying your first diamond blog page$/, async() => {
	const diamondguide = await browser.getUrl();
	await expect(diamondguide).toEqual(data.Page2Links.ExplorediamondguideURL);
});

// Scenario 24:

When(/^I select Brown Diamond from Shop By Diamond$/, async() => {
	const gemstoneguide = new page2;
	await gemstoneguide.selectBrownDiamondrings();
});

Then(/^Ensure Page2 is displayed with all the Brown Diamond ring products$/, async() => {
	const gemstoneguide = await browser.getUrl();
	await expect(gemstoneguide).toEqual(data.Page2Links.BrownDiamondringspage2URL);
});

Then(/^Ensure the Banner and link is displayed with Explore Gemstone guide link$/, async() => {
	const gemstoneguide = new page2;
	await expect(gemstoneguide.boxbannerBrownDiamondrings).toExist;
	await expect(gemstoneguide.lnkexploregemstoneguide).toExist;
});

When(/^I select Explore Gemstone guide link$/, async() => {
	const gemstoneguide = new page2;
	await gemstoneguide.selectExploregemstoneguide();
});

Then(/^Ensure the Gemstone guide page is displayed in new link$/, async() => {
	const gemstoneguide = await browser.getUrl();
	await expect(gemstoneguide).toEqual(data.Page2Links.GemstoneGuideURL);
});

// Scenario 25:

Then(/^Ensure the Banner and link is displayed with Explore Emerald guide link$/, async() => {
	const emeraldguide = new page2;
	await expect(emeraldguide.boxbanneremeraldRing).toExist;
	await expect(emeraldguide.lnkexploreemeraldguide).toExist;
});

When(/^I select Explore Emerald guide link$/, async() => {
	const emeraldguide = new page2;
	await emeraldguide.selectExploreemeraldguide();
});

Then(/^Ensure it redirects to the Emerald Guide Diamondere blog page$/, async() => {
	const emeraldguide = await browser.getUrl();
	await expect(emeraldguide).toEqual(data.Page2Links.EmeraldGuideURL);
});

//Scenario 26:

When(/^I select Yellow Gold from Shop By Metal$/, async() => {
	const metalguide = new page2;
	await metalguide.selectYellowGoldrings();
});

Then(/^Ensure Page2 is displayed with all the Yellow Gold ring products$/, async() => {
	const metalguide = await browser.getUrl();
	await expect(metalguide).toEqual(data.Page2Links.YellowGoldRingsPage2URL);
});

Then(/^Ensure the Banner and link is displayed with Explore Metal guide link$/, async() => {
	const metalguide = new page2;
	await expect(metalguide.boxbannerYellowGoldrings).toExist;
	await expect(metalguide.lnkexploremetalguide).toExist;
});

When(/^I select Explore Metal guide link$/, async() => {
	const metalguide = new page2;
	await metalguide.selectExploremetalguide();
});

Then(/^Ensure Metal guide page of Diamondere is displayed in new link$/, async() => {
	const metalguide = await browser.getUrl();
	await expect(metalguide).toEqual(data.Page2Links.MetalGuideURL);
});
// Scenario 27

Then(/^Ensure the Bracelets dropdown is displayed$/, async() => {
	const rubyguide = new page2;
	await expect(rubyguide.ddbraceletscategory).toExist;
});

When(/^I select Ruby from Shop By Gemstone$/, async() => {
	const rubyguide = new page2;
	await rubyguide.selectRubybracelets();
});

Then(/^Ensure Page2 is displayed with all the Ruby Bracelet products$/, async() => {
	const rubyguide = await browser.getUrl();
	await expect(rubyguide).toEqual(data.Page2Links.RubyBraceletsPage2URL);
});

Then(/^Ensure the Banner and link is displayed with Explore Ruby guide link$/, async() => {
	const rubyguide = new page2;
	await expect(rubyguide.boxbannerRubyBracelets).toExist;
	await expect(rubyguide.lnkexplorerubyguide).toExist;
});

When(/^I select Explore Ruby guide link$/, async() => {
	const rubyguide = new page2;
	await rubyguide.selectExplorerubyguide();
});

Then(/^Ensure it redirects to the Explore Ruby Guide Diamondere blog page$/, async() => {
	const rubyguide = await browser.getUrl();
	await expect(rubyguide).toEqual(data.Page2Links.RubyGuideURL);
});

// Scenario 28

When(/^I select Explore Jewelry Buying guide link$/, async() => {
	const jewelryguide = new page2;
	await jewelryguide.selectExploreJewelryBuyingguide();
});

Then(/^Ensure it redirects to the Jewelry Buying Guide Diamondere blog page$/, async() => {
	const jewelryguide = await browser.getUrl();
	await expect(jewelryguide).toEqual(data.Page2Links.JewelryBuyingGuideURL);
});

// Scenario 29

Then(/^Ensure the Earrings dropdown is displayed$/, async() => {
	const sapphireguide = new page2;
	await expect(sapphireguide.ddearringscategory).toExist;
});

When(/^I select Sapphire from Shop By Gemstone$/, async() => {
	const sapphireguide = new page2;
	await sapphireguide.selectSapphireearrings();
});

Then(/^Ensure Page2 is displayed with all the Sapphire Earring products$/, async() => {
	const sapphireguide = await browser.getUrl();
	await expect(sapphireguide).toEqual(data.Page2Links.SapphireEarringsPage2URL);
});

Then(/^Ensure the Banner and link is displayed with Read more link and Explore Sapphire guide link$/, async() => {
	const sapphireguide = new page2;
	await expect(sapphireguide.lnkreadmore).toExist;
	await expect(sapphireguide.lnkexploresapphireguide).toExist;
});

When(/^I select Read more link$/, async() => {
	const sapphireguide = new page2;
	await sapphireguide.selectReadmoreSapphireearrings();
});

Then(/^Ensure it moves down to the SEO section$/, async() => {
	const sapphireguide = new page2;
	await expect(sapphireguide.boxSEO).toExist;
});

When(/^I select Explore Sapphire guide link$/, async() => {
	const sapphireguide = new page2;
	await sapphireguide.selectExploresapphireguide();
});

Then(/^Ensure it redirects to the Sapphire Guide Diamondere blog page$/, async() => {
	const sapphireguide = await browser.getUrl();
	await expect(sapphireguide).toEqual(data.Page2Links.SapphireGuideURL);
});

// Scenario 30:

When(/^I select View All under Bracelets$/, async() => {
	const gemstoneshape = new page2;
	await gemstoneshape.selectViewAllBracelets();
});

Then(/^Ensure Page2 is displayed with all the Bracelets products$/, async() => {
	const gemstoneshape = await browser.getUrl();
	await expect(gemstoneshape).toEqual(data.Page2Links.ViewAllBraceletsPage2URL);
});

When(/^I select Marquise-cut option$/, async() => {
	const gemstoneshape = new page2;
	await gemstoneshape.selectMarquisecutbracelet();
});

Then(/^Ensure the Banner and link is displayed with Explore Gemstone Shape Preference link$/, async() => {
	const gemstoneshape = new page2;
	await expect(gemstoneshape.boxbannerMarquisebracelet).toExist;
	await expect(gemstoneshape.lnkexploreGemstoneshapereference).toExist;
});

When(/^I select Explore Gemstone Shape Preference link$/, async() => {
	const gemstoneshape = new page2;
	await gemstoneshape.selectGemstoneshapereference();
});

Then(/^Ensure it redirects to the Gemstone shape Diamondere blog page$/, async() => {
	const gemstoneshape = await browser.getUrl();
	await expect(gemstoneshape).toEqual(data.Page2Links.GemstoneshapereferenceURL);
});

// Scenario 31:

When(/^I select Peridot from Shop By Gemstone$/, async() => {
	const breadcrumb =  new page2;
	await breadcrumb.selectPeridotNecklace();
});

Then(/^Ensure Page2 is displayed with all the Peridot Necklaces$/, async() => {
	const breadcrumb = await browser.getUrl();
	await expect(breadcrumb).toEqual(data.Page2Links.PeridotNecklacespage2URL);
});

Then(/^Ensure Breadcrumb for Peridot Necklace products is displayed$/, async() => {
	const breadcrumb = new page2;
	await expect(breadcrumb.sctnbreadcrumbperidotnecklace).toExist;
});

Then(/^Ensure Home link, necklaces link, Peridot text and number of designs are displayed$/, async() => {
	const breadcrumb = new page2;
	await expect(breadcrumb.lnkHomebreadcrumbperidotneck).toExist;
	await expect(breadcrumb.lnkNecklacesbreadcrumbperidotneck).toExist;
	await expect(breadcrumb.lnkPeridotNecklacesbreadcrumbperidotneck).toExist;
	await expect(breadcrumb.txtnoofdesignsbreadcrumbperidotneck).toExist;
});

When(/^I select Home link in breadcrumb$/, async() => {
	const breadcrumb =  new page2;
	await breadcrumb.selectHomebreadcrumbperidotneck();
});

Then(/^Ensure it redirects to the home page$/, async() => {
	const breadcrumb = await browser.getUrl();
	await expect(breadcrumb).toEqual(dmd.config.url);
});

When(/^I select Necklaces in breadcrumb$/, async() => {
	const breadcrumb =  new page2;
	await breadcrumb.selectnecklacesbreadcrumbperidotneck();
});

Then(/^Ensure it redirects to Page 2 - All necklaces$/, async() => {
	const breadcrumb = await browser.getUrl();
	await expect(breadcrumb).toEqual(data.Page2Links.ViewAllnecklacespage2URL);
});

// Scenario 32:

When(/^I select Bangles from Bracelet styles$/, async() => {
	const filtertag =  new page2;
	await filtertag.selectBangles();
});

Then(/^Ensure Page2 is displayed with all the Love Bangles$/, async() => {
	const filtertag = await browser.getUrl();
	await expect(filtertag).toEqual(data.Page2Links.LovebanglesPage2URL);
});

Then(/^Ensure Love Bangles filter tag is displayed below filter tab$/, async() => {
	const filtertag = new page2;
	await expect(filtertag.lnkfiltertaglovebangles).toExist;
});

When(/^I select Heart shape$/, async() => {
	const filtertag =  new page2;
	await filtertag.selectHeartcutoption();
});

Then(/^Ensure the Banner and link is updated for Heart shaped Bangles$/, async() => {
	const filtertag = new page2;
	await expect(filtertag.boxbannerheartshapedlovebangles).toExist;
	await expect(filtertag.txtheadingheartshapedlovebangles).toExist;
});

Then(/^Ensure the Heart shape is added to the filter tag$/, async() => {
	const filtertag = new page2;
	await expect(filtertag.sctnfiltertag).toExist;
	await expect(filtertag.lnkheartfiltertag).toExist;
});

When(/^I select remove icon near Heart shape in filter tag$/, async() => {
	const filtertag =  new page2;
	await filtertag.selectbtnremoveheartshapedfiltertag();
});

Then(/^Ensure Heart shape is removed from filter tag$/, async() => {
	const filtertag = new page2;
	await expect(filtertag.sctnfiltertag).toExist;
});

Then(/^Ensure the Banner is updated for only Love Bangles$/, async() => {
	const filtertag = new page2;
	await expect(filtertag.txtheadinglovebangles).toExist;
});

When(/^I select remove icon near Love Bangles in filter tag$/, async() => {
	const filtertag =  new page2;
	await filtertag.selectbtnremovelovebanglesfiltertag();
});

Then(/^Ensure the page 2 is updated with all the Bangles design$/, async() => {
	const filtertag = await browser.getUrl();
	await expect(filtertag).toEqual(data.Page2Links.AllBanglesPage2URL);
});

Then(/^Ensure the Banner is updated accordingly for All Bangles$/, async() => {
	const filtertag = new page2;
	await expect(filtertag.boxbannerallbangles).toExist;
	await expect(filtertag.txtheadingbangles).toExist;
});

When(/^I select stone filter$/, async() => {
	const filtertag =  new page2;
	await filtertag.selectStonefilter();
});

When(/^I select Emerald$/, async() => {
	const filtertag =  new page2;
	await filtertag.selectemeraldstonefilter();
});

Then(/^Ensure the Banner is updated for Emerald Bangles$/, async() => {
	const filtertag = new page2;
	await expect(filtertag.boxbanneremeraldRing).toExist;
	await expect(filtertag.txtheadingEmeraldbangles).toExist;
});

Then(/^Ensure the Inline description for Emerald Bangles is displayed$/, async() => {
	const filtertag = new page2;
	await expect(filtertag.boxinlinedescription).toExist();
	await expect(filtertag.txtemeraldheading).toExist();
	await expect(filtertag.txtqualityemeraldbangles).toExist();
    await expect(filtertag.txthandcraftedemeraldbangles).toExist();
	await expect(filtertag.txtoriginemerald).toExist();
	await expect(filtertag.txtaccreditionandGIAemeraldbangles).toExist();
	await expect(filtertag.lnkviewemerald).toExist();
	
});

Then(/^Ensure the SEO section is updated for Emerald Bangles$/, async() => {
	const filtertag = new page2;
	await expect(filtertag.boxSEO).toExist();
	await expect(filtertag.lnkstarSEOEmeraldBangles).toExist();
});

When(/^I select Cushion-cut option$/, async() => {
	const filtertag =  new page2;
	await filtertag.selectcushioncutshape();
});

Then(/^Ensure the Banner is updated for Emerald and Cushion cut Bangles$/, async() => {
	const filtertag = new page2;
	await expect(filtertag.boxbanneremeraldRing).toExist();
	await expect(filtertag.txtheadingcushioncutemeraldbangles).toExist();
});

Then(/^Ensure the Inline description for Emerald Bangles is only displayed$/, async() => {
	const filtertag = new page2;
	await expect(filtertag.boxinlinedescription).toExist();
	await expect(filtertag.txtemeraldheading).toExist();
	await expect(filtertag.txtqualityemeraldbangles).toExist();
    await expect(filtertag.txthandcraftedemeraldbangles).toExist();
	await expect(filtertag.txtoriginemerald).toExist();
	await expect(filtertag.txtaccreditionandGIAemeraldbangles).toExist();
	await expect(filtertag.lnkviewemerald).toExist();
});

Then(/^Ensure the SEO section is updated for Emerald and Cushion cut Bangles$/, async() => {
	const filtertag = new page2;
	await expect(filtertag.boxSEO).toExist();
	await expect(filtertag.lnkstarSEOEmeraldBangles).toExist();
});

When(/^I select remove icon near Emerald filter tag$/, async() => {
	const filtertag =  new page2;
	await filtertag.selectRemovenearemeraldfiltertag();
});

Then(/^Ensure the Banner is updated for only Cushion cut Bangles$/, async() => {
	const filtertag = new page2;
	await expect(filtertag.boxbannerCushioncutbangles).toExist;
	await expect(filtertag.txtheadingCushioncutbangles).toExist;
});

Then(/^Ensure the Inline description for Cushion cut Bangles is only displayed$/, async() => {
	const filtertag = new page2;
	await expect(filtertag.boxinlinedescription).toExist();
	await expect(filtertag.txtinlineheadingCushioncut).toExist();
	await expect(filtertag.txtinlinedescriptionCushioncut).toExist();	
});

Then(/^Ensure the SEO section is updated for only Cushion cut Bangles$/, async() => {
	const filtertag = new page2;
	await expect(filtertag.boxSEO).toExist();
	await expect(filtertag.lnkstarSEOEmeraldBangles).toExist();
});

// Scenario 33:

Given(/^I select search box in header$/, async() => {
	const search1 = new page2;
	await search1.clicksearchbox();
});

When(/^I enter rings in search box$/, async() => {
	const search1 = new page2;
	await search1.enterringsinsearchbox();
});

Then(/^Ensure search dropdown is displayed$/, async() => {
	const search1 = new page2;
	await expect(search1.ddringssearch).toExist();
});

When(/^I select rings from dropdown$/, async() => {
	const search1 = new page2;
	await search1.selectringsinddsearchbox();
});

Then(/^Ensure all ring products are displayed$/, async() => {
	const search1 = await browser.getUrl();
	await expect(search1).toEqual(data.Page2Links.Ringssearchpage2URL);
});

Then(/^Ensure the Banner and link is displayed for ring products$/, async() => {
	const search1 = new page2;
	await expect(search1.boxbannerViewAllRings).toExist();
	await expect(search1.txtheadingRings).toExist();
	await expect(search1.txtdescriptionRings).toExist();
});

Then(/^Ensure breadcrumb flow is present$/, async() => {
	const search1 = new page2;
	await expect(search1.sctnbreadcrumbsearchrings).toExist();
	await expect(search1.lnkhomebreadcrumb).toExist();
	await expect(search1.txtsearchanddesignsbreadcrumb).toExist();
});

Then(/^ensure the Product option is displayed$/, async() => {
	const search1 = new page2;
	await expect(search1.txtproduct).toExist();
});

Then(/^ensure the Product option is selected by default$/, async() => {
	const search1 = new page2;
	await expect(search1.sctnFilterTab).toExist();
});

Then(/^ensure the content option is displayed$/, async() => {
	const search1 = new page2;
	await expect(search1.txtcontent).toExist();
});

Then(/^Ensure the relevant filter tabs for rings are displayed$/, async() => {
	const search1 = new page2;
	await expect(search1.sctnFilterTab).toExist();
	await expect(search1.lnkFilterTypes).toExist();
	await expect(search1.lnkFilterStyle).toExist();
	await expect(search1.lnkFilterStone).toExist();
	await expect(search1.lnkFilterShape).toExist();
	await expect(search1.lnkFilterCaratRange).toExist();
	await expect(search1.lnkFilterMetal).toExist();
	await expect(search1.lnkFilterSortBy).toExist();
});

Then(/^Ensure the relevant filter tags for rings are displayed$/, async() => {
	const search1 = new page2;
	await expect(search1.lnkfiltertagrings).toExist();
});

Then(/^Ensure Danette product in rings search is displayed with product name ,price and product description$/, async() => {
	const search1 = new page2;
	await expect(search1.imgdanettePDringsearch).toExist();
	await expect(search1.txtdanettePDringsearch).toExist();
	await expect(search1.txtpricedanettePDringsearch).toExist();
	await expect(search1.txtdescrpdanettePDringsearch).toExist();
});

When(/^I select Danette product in rings search$/, async() => {
	const search1 = new page2;
	await search1.selectDanetteringsearch();
});

Then(/^Ensure it redirects to page 3 - Danette rings search$/, async() => {
	const search1 = await browser.getUrl();
	await expect(search1).toEqual(data.Page2Links.Danettepage3ringsearchURL);
});

// Scenario 34:

When(/^I select content option$/, async() => {
	const search2 = new page2;
	await search2.selectcontentoption();
});

Then(/^Ensure the Videos and Guides text heading is displayed$/, async() => {
	const search2 = new page2;
	await expect(search2.txtheadingVideosandGuides).toExist();
});

Then(/^Ensure Rings Review section is displayed$/, async() => {
	const search2 = new page2;
	await expect(search2.sctnRingsreview).toExist();
});

Then(/^Ensure Mens rings review section is displayed$/, async() => {
	const search2 = new page2;
	await expect(search2.sctnMensRingsreview).toExist();
});

Then(/^Ensure Engagement review section is displayed$/, async() => {
	const search2 = new page2;
	await expect(search2.SctnEngagementRingsreview).toExist();
});

Then(/^Ensure Bloglinks text heading and section are displayed$/, async() => {
	const search2 = new page2;
	await expect(search2.txtheadingBloglinks).toExist();
	await expect(search2.SctnBloglinks).toExist();
});

When(/^I select the Rings Review heading$/, async() => {
	const search2 = new page2;
	await search2.selectRingsreview();
});

When(/^I select the Mens rings review heading$/, async() => {
	const search2 = new page2;
	await search2.selectMensRingsreview();
});

Then(/^Ensure review for diamondere mens rings page is displayed$/, async() => {
	const search2 = await browser.getUrl();
	await expect(search2).toEqual(data.Page2Links.ReviewspageforMensringsURL);
});

When(/^I select the Engagement review heading$/, async() => {
	const search2 = new page2;
	await search2.selectEngagementRingsreview();
});

Then(/^Ensure review for diamondere engagement rings page is displayed$/, async() => {
	const search2 = await browser.getUrl();
	await expect(search2).toEqual(data.Page2Links.ReviewspageforEngagementringsURL);
});

When(/^I select the section under Bloglinks$/, async() => {
	const search2 = new page2;
	await search2.selectSectionunderbloglink();
});

Then(/^Ensure it redirects to the respective blog page$/, async() => {
	const search2 = await browser.getUrl();
	await expect(search2).toEqual(data.Page2Links.SectionunderbloglinkURL);
});

// Scenario 35

Then(/^Ensure a new search box field and search button is displayed$/, async() => {
	const search3 = new page2;
	await expect(search3.boxinnersearch).toExist();
	await expect(search3.btnsearchinnerfield).toExist();
});

Then(/^Ensure a message and Write to us link is displayed$/, async() => {
	const search3 = new page2;
	await expect(search3.txtdescrinnersearch).toExist();
	await expect(search3.lnkwritetousinnersearch).toExist();
});

When(/^I enter any name say miya in new search box inside$/, async() => {
	const search3 = new page2;
	await search3.entermiyainnersearchbox();
});

Then(/^Ensure a new search dropdown is displayed$/, async() => {
	const search3 = new page2;
	await expect(search3.ddinnersearch).toExist();
});

When(/^I select Miya from new dropdown$/, async() => {
	const search3 = new page2;
	await search3.selectmiyaddinnersearch();
});

Then(/^Ensure the product Miya is displayed overwriting the previous results$/, async() => {
	const search3 = new page2;
	await expect(search3.imgmiyaPDringinnersearch).toExist();
	await expect(search3.txtmiyaPDringinnersearch).toExist();
	await expect(search3.txtpricemiyaPDringinnersearch).toExist();
	await expect(search3.txtsettingpricemiyaPDringinnersearch).toExist();
	await expect(search3.txtdescrpmiyaPDringinnersearch).toExist();
});

Then(/^Ensure the banner name changes to Miya accordingly$/, async() => {
	const search3 = new page2;
	await expect(search3.boxbannerMiyaringsinnersearch).toExist();
	await expect(search3.txtheadingMiyaringsinnersearch).toExist();
	await expect(search3.txtdescriptionMiyaringsinnersearch).toExist();
});

Then(/^Ensure the relevant filter tabs for miya rings are displayed$/, async() => {
	const search3 = new page2;
	await expect(search3.sctnFilterTab).toExist();
	await expect(search3.lnkFilterStone).toExist();
	await expect(search3.lnkFilterMetal).toExist();
});

When(/^I select write to us link above new search box$/, async() => {
	const search3 = new page2;
	await search3.selectwritetousinnersearch();
});

Then(/^Ensure it redirects us to the contact form page in new tab$/, async() => {
	const search3 = await browser.getUrl();
	await expect(search3).toEqual(data.Page2Links.ContactformpageURL);
});

//Scenario 36:

When(/^I enter emerald in search box$/, async() => {
	const search4 = new page2;
	await search4.enteremeraldinsearchbox();
});

When(/^I select emerald from dropdown$/, async() => {
	const search4 = new page2;
	await search4.selectemeraldinddsearchbox();
});

Then(/^Ensure emerald products is displayed with product name , price and product description$/, async() => {
	const search4 = await browser.getUrl();
	await expect(search4).toEqual(data.Page2Links.Ringssearchpage2URL);
});

Then(/^Ensure the relevant filter tabs for Emerald is displayed$/, async() => {
	const search4 = new page2;
	await expect(search4.txtheadingemeraldbannersearch).toExist();
	await expect(search4.sctnFilterTab).toExist();
});

When(/^I select stone filter for Emerald search$/, async() => {
	const search4 = new page2;
	await search4.selectStonefilter();
});

Then(/^Ensure stone dropdown is displayed for Emerald search$/, async() => {
	const search4 = new page2;
	await expect(search4.ddStonefilter).toExist();
});

When(/^I select Morganite from stone dropdown$/, async() => {
	const search4 = new page2;
	await search4.selectMorganiteoption();
});

When(/^I select shape filter for Emerald search$/, async() => {
	const search4 = new page2;
	await search4.selectShapefilter();
});

Then(/^Ensure shape dropdown is displayed for Emerald search$/, async() => {
	const search4 = new page2;
	await expect(search4.ddShapefilter).toExist();
});

When(/^I select Marquise cut from shape dropdown$/, async() => {
	const search4 = new page2;
	await search4.selectMarquisecutoption();
});


When(/^I select Above 3 carat$/, async() => {
	const search4 = new page2;
	await search4.selectCaratrangefilter()
	await search4.selectAbove3Caratoption();
});


Then(/^Ensure a message and Reach out to us link is displayed$/, async() => {
	const search4 = new page2;
	await expect(search4.txtnoresultsinsearch).toExist();
	await expect(search4.lnkreachouttousinsearch).toExist();
});
 
When(/^I select Reach out to us link$/, async() => {
	const search4 = new page2;
	await search4.selectReachouttoussearch();
});

Then(/^Ensure it redirects to the contact us form$/, async() => {
	const search4 = await browser.getUrl();
	await expect(search4).toEqual(data.Page2Links.ContactformpageURL);
});

//Scenario 37:

When(/^I select Promise rings catalogue from Ring styles$/, async() => {
	const search5 = new page2;
	await search5.selectPromiserings();
});

Then(/^Ensure Page2 is displayed with all the Promise rings catalogue products$/, async() => {
	const search5 = await browser.getUrl();
	await expect(search5).toEqual(data.Page2Links.Promiseringspage2URL);
});

Then(/^Ensure Types filter tag is present$/, async() => {
	const search5 = new page2;
	await expect(search5.lnkFilterTypes).toExist();
});

When(/^I select Types filter$/, async() => {
	const search5 = new page2;
	await search5.selecttypefilter();
});

Then(/^Ensure the Types dropdown is displayed$/, async() => {
	const search5 = new page2;
	await expect(search5.ddTypesfilter).toExist();
});

When(/^I select Couples band from Types filters$/, async() => {
	const search5 = new page2;
	await search5.selectCouplesband();
});

Then(/^Ensure the Couple band products are displayed in page 2$/, async() => {
	const search5 = await browser.getUrl();
	await expect(search5).toEqual(data.Page2Links.Couplesbandpage2URL);
});

Then(/^Ensure there is no change in banner and SEO section$/, async() => {
	const search5 = new page2;
	await expect(search5.txtheadingbannerpromise).toExist();
	await expect(search5.txtheadingAboutcustompromiserings).toExist();
});

//Scenario 38

When(/^I select Hoop Earrings from Earring styles$/, async() => {
	const noproduct = new page2;
	await noproduct.selectHoopsearrings();
});


Given(/^I browse Hoop Earrings page$/, async() => {
	await browser.url(dmd.config.hoopEarringsUrl);
	await BrowserUtil.wait(5)
});


Then(/^Ensure Page2 is displayed with all the Hoop Earrings$/, async() => {
	const noproduct = await browser.getUrl();
	await expect(noproduct).toEqual(data.Page2Links.Hoopsearringspage2URL);
});


When(/^I select Shape filter$/, async() => {
	const noproduct = new page2;
	await noproduct.selectShapefilterSearch();
});


Then(/^Ensure the shape dropdown is displayed for Hoop earrings$/, async() => {
	const noproduct = new page2;
	await expect(noproduct.ddShapefilter).toExist();
});

//Scenario 39

When(/^I hover on caret icon near Style filter tab$/, async() => {
	const hoverstyle = new page2;
	await hoverstyle.hoveronStylefilter();
});

Then(/^Ensure the dropdown is displayed for Style filter$/, async() => {
	const hoverstyle = new page2;
	await expect(hoverstyle.ddStylefilter).toExist();
});

When(/^I scroll down to the footer section$/, async() => {
	const hoverstyle = new page2;
	await hoverstyle.scrolltofooter();
});

Then(/^Ensure the style dropdown is closed$/, async() => {
	const hoverstyle = new page2;
	await expect(hoverstyle.ddStylefilter).not.toBeDisplayed();
});

When(/^I click on caret icon near Style filter tab$/, async() => {
	const hoverstyle = new page2;
	await hoverstyle.selectStylefilter();
	await hoverstyle.hovermayweassistyou();
});

Then(/^Ensure the style dropdown is not closed and remains static$/, async() => {
	const hoverstyle = new page2;
	await expect(hoverstyle.ddStylefilter).toExist();
});

//Scenario 40

When(/^I hover on caret icon near Stone filter tab$/, async() => {
	const hoverstone = new page2;
	await hoverstone.hoveronStonefilter();
});

Then(/^Ensure the dropdown is displayed for Stone filter$/, async() => {
	const hoverstone = new page2;
	await expect(hoverstone.ddStonefilter).toExist();
});

Then(/^Ensure the Stone dropdown is closed$/, async() => {
	const hoverstone = new page2;
	await expect(hoverstone.ddStonefilter).not.toBeDisplayed();
});

When(/^I click on caret icon near Stone filter tab$/, async() => {
	const hoverstone = new page2;
	await hoverstone.selectStonefilter();
	await hoverstone.hovermayweassistyou();
});

Then(/^Ensure the Stone dropdown is not closed and remains static$/, async() => {
	const hoverstyle = new page2;
	await expect(hoverstyle.ddStonefilter).toExist();
});

//Scenario 41:

When(/^I hover on caret icon near Shape filter tab$/, async() => {
	const hovershape = new page2;
	await hovershape.hoveronShapefilter();
});

Then(/^Ensure the dropdown is displayed for Shape filter$/, async() => {
	const hovershape = new page2;
	await expect(hovershape.ddShapefilter).toExist();
});

Then(/^Ensure the Shape dropdown is closed$/, async() => {
	const hovershape = new page2;
	await expect(hovershape.ddShapefilter).not.toBeDisplayed();
});

When(/^I click on caret icon near Shape filter tab$/, async() => {
	const hovershape = new page2;
	await hovershape.selectShapefilter();
	await hovershape.hovermayweassistyou();
});

Then(/^Ensure the Shape dropdown is not closed and remains static$/, async() => {
	const hovershape = new page2;
	await expect(hovershape.ddShapefilter).toExist();
});

//Scenario 42

When(/^I hover on caret icon near Carat range filter tab$/, async() => {
	const hovercarat = new page2;
	await hovercarat.hoveronCaratfilter();
});

Then(/^Ensure the dropdown is displayed for Carat Range filter$/, async() => {
	const hovercarat = new page2;
	await expect(hovercarat.ddCaratRangeFilter).toExist();
});

Then(/^Ensure the Carat range dropdown is closed$/, async() => {
	const hovercarat = new page2;
	await expect(hovercarat.ddCaratRangeFilter).not.toBeDisplayed();
});

When(/^I click on caret icon near Carat range filter tab$/, async() => {
	const hovercarat = new page2;
	await hovercarat.selectCaratrangefilter();
	await hovercarat.hovermayweassistyou();
});

Then(/^Ensure the Carat range dropdown is not closed and remains static$/, async() => {
	const hovercarat = new page2;
	await expect(hovercarat.ddCaratRangeFilter).toExist();
});

//Scenario 43

When(/^I hover on caret icon near Metal filter tab$/, async() => {
	const hovermetal = new page2;
	await hovermetal.hoveronMetalfilter();
});

Then(/^Ensure the dropdown is displayed for Metal filter$/, async() => {
	const hovermetal = new page2;
	await expect(hovermetal.ddMetalFilter).toExist();
});

Then(/^Ensure the Metal dropdown is closed$/, async() => {
	const hovermetal = new page2;
	await expect(hovermetal.ddMetalFilter).not.toBeDisplayed();
});

When(/^I click on caret icon near Metal filter tab$/, async() => {
	const hovermetal = new page2;
	await hovermetal.selectMetalfilter();
	await hovermetal.hovermayweassistyou();
});

Then(/^Ensure the Metal dropdown is not closed and remains static$/, async() => {
	const hovermetal = new page2;
	await expect(hovermetal.ddMetalFilter).toExist();
});











