const { Given, When, Then } = require('@wdio/cucumber-framework');
const BrowserUtil = require('../../CommonUtils/BrowserUtil');
const ElementUtil = require('../../CommonUtils/ElementUtil');
const dmd = require('../Configs/dmd_' + global.testEnv + '.js');
const Homepage= require('../PageObjects/Homepage')
const data = require('../TestData/Homepage.json');


Given(/^I move to the Free shipping,returns,resizing and certification section$/, () => {
	const bannerText= new Homepage;
    bannerText.scrollHeader();
});

When(/^I click the Free shipping Text Link in the Homepage Banner$/, () => {
	const freeshipText= new Homepage;
    freeshipText.clickFreeShip();
});

Then(/^I ensure clicking the Free shipping Text Link redirects to the respective page$/, async() => {
	const freeshipText = await browser.getUrl();
    await expect(freeshipText).toEqual(data.HomePageLinks.FreeShippingPolicy);

});

Given(/^I click the Returns Text Link in the Homepage Banner$/, () => {
	const returnsText= new Homepage;
    returnsText.clickReturns();
});

Then(/^I ensure clicking the Returns Text Link redirects to the respective page$/, async () => {
	const returnsText = await browser.getUrl();
    await expect(returnsText).toEqual(data.HomePageLinks.ReturnsPolicy);
});

Given(/^I click the Resizing Text Link in the Homepage Banner$/, () => {
	const resizingText= new Homepage;
    resizingText.clickResizing();
});

Then(/^I ensure clicking the Resizing Text Link redirects to the respective page$/, async() => {
	const resizingText = await browser.getUrl();
    await expect(resizingText).toEqual(data.HomePageLinks.ResizingInformation);
});

Given(/^I click the Certification Text Link in the Homepage Banner$/, () => {
	const certificationText= new Homepage;
    certificationText.clickCertification();
});

Then(/^I ensure clicking the Certification Text Link redirects to the respective page$/, async() => {
	const resizingText = await browser.getUrl();
    await expect(resizingText).toEqual(data.HomePageLinks.CertificationInformation);
});

Given(/^I move to the Diamondere Logo is present$/, () => {
	const diamondereLogo= new Homepage;
    diamondereLogo.clickDiamondereLogo();
});

Then(/^I ensure customer care, location, search box,login and shopping cart icons are present$/, async () => {
	const bannerHomepage = new Homepage;
	await expect(bannerHomepage.homepagebanner).toExist();
    await expect(bannerHomepage.customercare).toExist();
    await expect(bannerHomepage.location).toExist();
    await expect(bannerHomepage.searchbox).toExist();
    await expect(bannerHomepage.profilebeforelogin).toExist();
    await expect(bannerHomepage.shoppingcart).toExist();
   
});

Given(/^I hover over the Customer care icon$/, () => {
	const customercare= new Homepage;
    customercare.hoverCustomerCare();
});


Then(/^I ensure the write to us, request call back and toll free number are present in the dropdown$/, async() => {
	const customercare = new Homepage;
    await expect(customercare.ccWriteToUs).toExist();
    await expect(customercare.ccrequestcallback).toExist();
    await expect(customercare.cctollfree).toExist();
});

Given(/^I move to the login and signup icon$/, () => {
	const loginIcon= new Homepage;
    loginIcon.profileiconbeflogin();
});

Then(/^I hover over the login and signup icon$/, async() => {
	const loginIcon = new Homepage;
    await expect(loginIcon.profilebeforelogin).toExist();
});


Then(/^I ensure the track my order,order history and logout options are present in the dropdown$/, async() => {
    const loginIcon = new Homepage;
    await expect(loginIcon.trackmyorder).toExist();
    await expect(loginIcon.orderhistory).toExist();
    await expect(loginIcon.logout).toExist();
    await expect(loginIcon.shoppingcart).toExist();
});


Given(/^I hover over the Rings menu$/, () => {
	const ringsmainmenu= new Homepage;
    ringsmainmenu.ringsMainMenu();
});

Then(/^I Ensure that Rings submenu dropdown is visible$/, async() => {
    const ringsmainmenu = new Homepage;
    await expect(ringsmainmenu.ringsshopbycategory).toExist();	
});

Then(/^I ensure all the diamonds are present under shop by diamond submenu$/, async() => {
	const shopbydia = new Homepage;
    await expect(shopbydia.ringsshopbycategory).toExist();
    await expect(shopbydia.sdrdiamond).toExist();
    await expect(shopbydia.sdrlabdiamond).toExist();
    await expect(shopbydia.sdrblackdiamond).toExist();
    await expect(shopbydia.sdrbluediamond).toExist();
    await expect(shopbydia.sdrbrowndiamond).toExist();  

});

When(/^I click the Black Diamond under the shop by diamond submenu$/, () => {
	const blackdia= new Homepage;
    blackdia.shopByDiablackDiamondRing();
});

Then(/^I ensure the Black Diamond redirects to the Black Diamond rings page$/, async() => {
	const blackdia = await browser.getUrl();
    await expect(blackdia).toEqual(data.HomePageLinks.BlackDiamondRings);
});


Then(/^I ensure all the precious Gemstone are present under shop by precious Gemstone submenu$/, async() => {
	const preciousrings = new Homepage;
    await expect(preciousrings.ringsshopbycategory).toExist();
    await expect(preciousrings.rceylonsapphire).toExist();
    await expect(preciousrings.rsapphire).toExist();
    await expect(preciousrings.remerald).toExist();
    await expect(preciousrings.rruby).toExist();
    await expect(preciousrings.rpinksapphire).toExist();
    await expect(preciousrings.rwhitesapphire).toExist();
    await expect(preciousrings.rrainbowsapphire).toExist();

});

When(/^I click the Ruby under the shop by precious Gemstone submenu$/, () => {
	const rubySemi= new Homepage;
    rubySemi.rubySemiPrecious();
});

Then(/^I ensure the Ruby redirects to the Ruby rings page$/, async() => {
	const rubyrings = await browser.getUrl();
    await expect(rubyrings).toEqual(data.HomePageLinks.RubyRings);
});

Then(/^I ensure all the semiprecious Gemstone are present under shop by semiprecious Gemstone submenu$/,async() => {
	const semipreciousrings = new Homepage;
    await expect(semipreciousrings.ringsshopbycategory).toExist();
    await expect(semipreciousrings.ramethyst).toExist();
    await expect(semipreciousrings.raquamarine).toExist();
    await expect(semipreciousrings.rblackonyx).toExist();
    await expect(semipreciousrings.rbluetopaz).toExist();
    await expect(semipreciousrings.rcitrine).toExist();
    await expect(semipreciousrings.rgarnet).toExist();
    await expect(semipreciousrings.riolite).toExist();
    await expect(semipreciousrings.rlondonbluetopaz).toExist();
    await expect(semipreciousrings.rmorganite).toExist();
    await expect(semipreciousrings.rpinktourmaline).toExist();
    await expect(semipreciousrings.rrosequartz).toExist();
    await expect(semipreciousrings.rsmokyquartz).toExist();
    await expect(semipreciousrings.rtanzanite).toExist();
    await expect(semipreciousrings.rtsavorite).toExist();
    await expect(semipreciousrings.rwhitetopaz).toExist();
});

When(/^I click the Aquamarine under the shop by semiprecious Gemstone submenu$/, () => {
	const semipreAqua= new Homepage;
    semipreAqua.aquaSemiPreRings();
});

Then(/^I ensure the Aquamarine redirects to the Aquamarine rings page$/, async() => {
	const semipreAqua = await browser.getUrl();
    await expect(semipreAqua).toEqual(data.HomePageLinks.AquamarineRings);
});

Then(/^I ensure all the Lab created Gems are present under shop by Lab created Gems submenu$/,async() => {
	const labcreatdrings = new Homepage;
    await expect(labcreatdrings.ringsshopbycategory).toExist();
    await expect(labcreatdrings.ralexanderite).toExist();
    await expect(labcreatdrings.rmoissanite).toExist();

});

When(/^I click the Alexandrite under the shop by Lab created Gems submenu$/, () => {
	const labcreatdrings= new Homepage;
    labcreatdrings.labCreatedRings();
});

Then(/^I ensure the Alexandrite redirects to the Alexandrite rings page$/, async () => {
	const labcreatdrings = await browser.getUrl();
    await expect(labcreatdrings).toEqual(data.HomePageLinks.AlexandriteRings);
});

Then(/^I ensure all the metal rings are present under shop by Metal submenu$/, async() => {
	const metalrings = new Homepage;
    await expect(metalrings.ringsshopbycategory).toExist();
    await expect(metalrings.rplatinum).toExist();
    await expect(metalrings.rrosegold).toExist();
    await expect(metalrings.rwhitegold).toExist();
    await expect(metalrings.ryellowgold).toExist();
    await expect(metalrings.rrblackgold).toExist();
    await expect(metalrings.rsilver).toExist();
});

When(/^I click the Platinum under the shop by metal submenu$/, () => {
	const metalrings= new Homepage;
    metalrings.metalRings();
});

Then(/^I ensure the Platinum redirects to the Platinum rings page$/,async () => {
	const metalrings = await browser.getUrl();
    await expect(metalrings).toEqual(data.HomePageLinks.PlatinumRings);
});

Then(/^I ensure all the styles are present under shop by Ring styles Gems submenu$/, async() => {
	const shopringstyles = new Homepage;
    await expect(shopringstyles.ringsshopbycategory).toExist();
    await expect(shopringstyles.rs3stonerings).toExist();
    await expect(shopringstyles.rscladdaghrings).toExist();
    await expect(shopringstyles.rshalorings).toExist();
    await expect(shopringstyles.rspromiserings).toExist();
    await expect(shopringstyles.rssolitairerings).toExist();
    await expect(shopringstyles.rsstackablerings).toExist();
    await expect(shopringstyles.rstoietmoirings).toExist();
    await expect(shopringstyles.rsvintagerings).toExist();
    await expect(shopringstyles.rsviewall).toExist();

});

When(/^I click the Three stone rings under the Ring styles submenu$/, () => {
	const shopringstyles= new Homepage;
    shopringstyles.ringStyles();
});

Then(/^I ensure the Three stone rings redirects to the Three stone rings page$/, async() => {
	const shopringstyles = await browser.getUrl();
    await expect(shopringstyles).toEqual(data.HomePageLinks.ThreeStoneRings);
});

When(/^I click the Read more link under Style Guide To Ring Setting Options$/, () => {
	const ringstylesguide= new Homepage;
    ringstylesguide.styleGuideRing();
});

Then(/^I ensure the Read more link under Style Guide redirects to the respective page$/,async () => {
	const ringstylesguide = await browser.getUrl();
    await expect(ringstylesguide).toEqual(data.HomePageLinks.RingStyleGuide);
});

When(/^I click the Read more link under Black Gold Guide Options$/, () => {
	const BGguide= new Homepage;
    BGguide.blackGoldGuideRing();
});

Then(/^I ensure the Read more link under Black Gold Guide redirects to the respective page$/,async () => {
	const BGguide = await browser.getUrl();
    await expect(BGguide).toEqual(data.HomePageLinks.BlackGoldGuide);
});

Given(/^I hover over the Engagement menu$/, () => {
	const engageMenu= new Homepage;
    engageMenu.engageMenu();
});

Then(/^I Ensure that Engagement submenu dropdown is visible$/, async() => {
	const engagesubmenu = new Homepage;
    await expect(engagesubmenu.engagementshopbycategory).toExist();
});

Then(/^I ensure all the diamond are present under the shop by diamond submenu$/, async() => {
	const engagesubmenu = new Homepage;
    await expect(engagesubmenu.engagementshopbycategory).toExist();
    await expect(engagesubmenu.sdengdiamond).toExist();
    await expect(engagesubmenu.sdenglabdiamond).toExist();
    await expect(engagesubmenu.sdengblackdiamond).toExist();
    await expect(engagesubmenu.sdengbluediamond).toExist();
    await expect(engagesubmenu.sdengbrowndiamond).toExist();

});

When(/^I click the Lab Diamond under the shop by diamond submenu under Engagement menu$/, () => {
	const labDiaengageMenu= new Homepage;
    labDiaengageMenu.labdiamondEngagement();
});

Then(/^I ensure the Lab Diamond redirects to the make your Lab Diamond engagement rings page$/, async() => {
	const labDiaengageMenu = await browser.getUrl();
    await expect(labDiaengageMenu).toEqual(data.HomePageLinks.LabEngagementRings);
});

Then(/^I ensure all the precious Gemstone are present under shop by precious Gemstone submenu under Engagement menu$/, async() => {
	const gemDiaengageMenu = new Homepage;
    await expect(gemDiaengageMenu.engagementshopbycategory).toExist();
    await expect(gemDiaengageMenu.engceylonsapphire).toExist();
    await expect(gemDiaengageMenu.engsapphire).toExist();
    await expect(gemDiaengageMenu.engemerald).toExist();
    await expect(gemDiaengageMenu.engruby).toExist();
    await expect(gemDiaengageMenu.engrainbowsapphire).toExist();
    await expect(gemDiaengageMenu.engpinksapphire).toExist();
    await expect(gemDiaengageMenu.engwhitesapphire).toExist();

});

When(/^I click the Sapphire under the shop by precious Gemstone submenu under Engagement menu$/, () => {
	const gemDiaengageMenu= new Homepage;
    gemDiaengageMenu.gemCreatedEngagement();
});

Then(/^I ensure the Sapphire redirects to the Sapphire engagement rings page$/, async() => {
	const gemDiaengageMenu = await browser.getUrl();
    await expect(gemDiaengageMenu).toEqual(data.HomePageLinks.SapphireEngagementRings);
});


Then(/^I Ensure that Engagement submenu dropdown is visible with all the semiprecious Gemstone are present under shop by semiprecious Gemstone submenu$/, async() => {
	const semipreengageMenu= new Homepage;
    await expect(semipreengageMenu.engagementshopbycategory).toExist();
    await expect(semipreengageMenu.engagementshopbycategory).toExist();
    await expect(semipreengageMenu.engamethyst).toExist();
    await expect(semipreengageMenu.engaquamarine).toExist();
    await expect(semipreengageMenu.engblackonyx).toExist();
    await expect(semipreengageMenu.engbluetopaz).toExist();
    await expect(semipreengageMenu.engcitrine).toExist();
    await expect(semipreengageMenu.enggarnet).toExist();
    await expect(semipreengageMenu.engiolite).toExist();
    await expect(semipreengageMenu.englondonbluetopaz).toExist();
    await expect(semipreengageMenu.engmorganite).toExist();
    await expect(semipreengageMenu.engpinktourmaline).toExist();
    await expect(semipreengageMenu.engrosequartz).toExist();
    await expect(semipreengageMenu.engsmokyquartz).toExist();
    await expect(semipreengageMenu.engtanzanite).toExist();
    await expect(semipreengageMenu.engtsavorite).toExist();
    await expect(semipreengageMenu.engwhitetopaz).toExist();

});

When(/^I click the Amethyst under the shop by semiprecious Gemstone submenu$/, () => {
	const semipreengageMenu= new Homepage;
    semipreengageMenu.semipreciousEngagementRings();
});

Then(/^I ensure the Amethyst redirects to the Amethyst engagement rings page$/, async() => {
	const semipreengageMenu = await browser.getUrl();
    await expect(semipreengageMenu).toEqual(data.HomePageLinks.AmethystEngagementRings);
});

Then(/^I Ensure that Engagement submenu dropdown is visible with all the Lab created Gems are present under shop by Lab created Gems submenu$/, async () => {
	const labcreateengageMenu= new Homepage;
    await expect(labcreateengageMenu.engagementshopbycategory).toExist();
    await expect(labcreateengageMenu.engalexanderite).toExist();
    await expect(labcreateengageMenu.engmoissanite).toExist();
});

When(/^I click the Alexandrite under the shop by Lab created Gems submenu under Engagement menu$/, () => {
	const labcreateengageMenu= new Homepage;
    labcreateengageMenu.labCreatedEngagementRings();
});

Then(/^I ensure the Alexandrite under Engagement menu redirects to the Alexandrite rings page$/, async() => {
	const labcreateengageMenu = await browser.getUrl();
    await expect(labcreateengageMenu).toEqual(data.HomePageLinks.AlexandriteEngagementRings);
});

Then(/^I Ensure that Engagement submenu dropdown is visible with all the metals are present under shop by metals submenu$/,async () => {
	const metalDiaengageMenu = new Homepage();
    await expect(metalDiaengageMenu.engagementshopbycategory).toExist();
    await expect(metalDiaengageMenu.engplatinum).toExist();
    await expect(metalDiaengageMenu.engwhitegold).toExist();
    await expect(metalDiaengageMenu.engblackgold).toExist();
    await expect(metalDiaengageMenu.engyellowgold).toExist();
    await expect(metalDiaengageMenu.engsilver).toExist();;
});

When(/^I click the White Gold under the shop by metal submenu$/, () => {
	const metalDiaengageMenu = new Homepage();
    metalDiaengageMenu.metalEngageMenu();
});

Then(/^I ensure the White Gold redirects to the 14K white gold engagement rings page$/,async () => {
	const metalDiaengageMenu= await browser.getUrl();
    await expect(metalDiaengageMenu).toEqual(data.HomePageLinks.WGEngagementRings);
});

Then(/^I Ensure that Engagement submenu dropdown is visible with all the Engagement Ring styles are present under Engagement Ring styles submenu$/, async() => {
	const shopengringstyles = new Homepage;
    await expect(shopengringstyles.engagementshopbycategory).toExist();
    await expect(shopengringstyles.ers3stonerings).toExist();
    await expect(shopengringstyles.erssolitairerings).toExist();
    await expect(shopengringstyles.erssidestonerings).toExist();
    await expect(shopengringstyles.ershalorings).toExist();
    await expect(shopengringstyles.ersvintageinspired).toExist();
    await expect(shopengringstyles.ersbridalset).toExist();
    await expect(shopengringstyles.ersviewall).toExist();
   
});

When(/^I click the Halo rings under the Engagement Ring styles submenu$/, () => {
	const shopengringstyles = new Homepage;
    shopengringstyles.engagementRingStyle();
});

Then(/^I ensure the Halo rings redirects to the Halo engagement rings page$/,async() => {
	const shopengringstyles= await browser.getUrl();
    await expect(shopengringstyles).toEqual(data.HomePageLinks.HaloEngagementRings);
});

When(/^I click the Read more link under Engagement Ring Guide$/, () => {
	const shopengringguide = new Homepage;
    shopengringguide.engageRingGuide();
});

Then(/^I ensure the Read more link under Engagement Ring Guide redirects to the respective page$/,async () => {
	const shopengringguide= await browser.getUrl();
    await expect(shopengringguide).toEqual(data.HomePageLinks.EngagementRingBuyingGuide);
});

When(/^I click the Read more link under 3 Engagement Ring Myths Options$/, () => {
	const engringmyth = new Homepage;
    engringmyth.engageRingMyth();
});

Then(/^I ensure the Read more link under 3 Engagement Ring Myths redirects to the respective page$/, async() => {
	const engringmyth= await browser.getUrl();
    await expect(engringmyth).toEqual(data.HomePageLinks.EngagementRingMyth);
});


Given(/^I hover over the Wedding menu$/, () => {
	const wedmenu = new Homepage;
    wedmenu.weddingMainMenu();
});

Then(/^I Ensure that Wedding submenu dropdown is visible$/, async() => {
	const wedmenu = new Homepage;
    await expect(wedmenu.weddingshopbycategory).toExist();
});

Then(/^I Ensure that Wedding submenu dropdown is visible with all the diamonds present under shop by diamond submenu$/, async() => {
	const wedmenu = new Homepage;
    await expect(wedmenu.weddingshopbycategory).toExist();
    await expect(wedmenu.wedshopbydiamond).toExist();
    await expect(wedmenu.sdweddiamond).toExist();
    await expect(wedmenu.sdblabdiamond).toExist();
    await expect(wedmenu.sdbbluediamond).toExist();
    await expect(wedmenu.sdbblackdiamond).toExist();
    await expect(wedmenu.sdbbrowndiamond).toExist();
});

When(/^I click the Diamond under the shop by diamond submenu under Wedding menu$/, () => {
	const wedmenu = new Homepage;
    wedmenu.diaWeddingMenu();
});

Then(/^I ensure the Diamond redirects to the make your Diamond wedding rings page$/,async () => {
	const wedmenu= await browser.getUrl();
    await expect(wedmenu).toEqual(data.HomePageLinks.DiamondWeddingRings);
});

Then(/^I Ensure that Wedding submenu dropdown is visible with all the shop by precious Gemstone present$/, async() => {
	const wedprecmenu = new Homepage;
    await expect(wedprecmenu.weddingshopbycategory).toExist();
    await expect(wedprecmenu.wedshopbygemstone).toExist();
    await expect(wedprecmenu.wedceylonsapphire).toExist();
    await expect(wedprecmenu.wedsapphire).toExist();
    await expect(wedprecmenu.wedruby).toExist();
    await expect(wedprecmenu.wedemerald).toExist();
    await expect(wedprecmenu.wedrainbowsapphire).toExist();
    await expect(wedprecmenu.wedpinksapphire).toExist();
    await expect(wedprecmenu.wedwhitesapphire).toExist();

});

When(/^I click the Emerald  under the shop by precious Gemstone submenu$/, () => {
	const wedprecmenu = new Homepage;
    wedprecmenu.emeraldWeddingMenu();
});

Then(/^I ensure the Emerald redirects to the Emerald wedding rings page$/,async () => {
	const wedprecmenu= await browser.getUrl();
    await expect(wedprecmenu).toEqual(data.HomePageLinks.EmeraldWeddingRings);
});

Then(/^I Ensure that Wedding submenu dropdown is visible with all the Metal present$/,async () => {
	const wedmetalmenu = new Homepage;
    await expect(wedmetalmenu.weddingshopbycategory).toExist();
    await expect(wedmetalmenu.wedblackgold).toExist();
    await expect(wedmetalmenu.wedwhitegold).toExist();
    await expect(wedmetalmenu.wedyellowgold).toExist();
    await expect(wedmetalmenu.wedplatinum).toExist();
    await expect(wedmetalmenu.wedrosegold).toExist();
    await expect(wedmetalmenu.wedsilver).toExist();
});

When(/^I click the Yellow Gold under the shop by Metal submenu$/, () => {
	const wedmetalmenu = new Homepage;
    wedmetalmenu.ygMetalwedding();
});

Then(/^I ensure the Yellow Gold redirects to the wedding ring in 14K Yellow Gold page$/,async () => {
	const wedmetalmenu= await browser.getUrl();
    await expect(wedmetalmenu).toEqual(data.HomePageLinks.YellowGoldWeddingRings);
});

Then(/^I Ensure that Wedding submenu dropdown is visible with all the Woman's Wedding Band Styles present$/, async() => {
	const womenwedband= new Homepage;
    await expect(womenwedband.womensweddingbandsstyle).toExist();
    await expect(womenwedband.wwbseternitybands).toExist();
    await expect(womenwedband.wwbsplainbands).toExist();
    await expect(womenwedband.wwbsstackablerings).toExist();
    await expect(womenwedband.wwbsviewall).toExist();

});

When(/^I click the View All Link under the Woman's Wedding Band Styles submenu$/, () => {
	const womenwedband= new Homepage;
    womenwedband.viewAllWomenBand();
});

Then(/^I ensure the View All link redirects to the Men's rings page$/, async() => {
	const womenwedband= await browser.getUrl();
    await expect(womenwedband).toEqual(data.HomePageLinks.WomensWeddingRings);
});

Then(/^I Ensure that Wedding submenu dropdown is visible with all Men's Wedding Band Styles present$/, async() => {
	const menwedband= new Homepage;
    await expect(menwedband.mensweddingbandsstyle).toExist();
    await expect(menwedband.mwbsdiamondbands).toExist();
    await expect(menwedband.mwbslabdiamondbands).toExist();
    await expect(menwedband.mwbsplainbands).toExist();
    await expect(menwedband.mwbsviewall).toExist();
    
});

When(/^I click the View All link under the Men's Wedding Band Styles submenu$/, () => {
	const menwedband= new Homepage;
    menwedband.menWeddingviewall();
});

Then(/^I ensure the View All link redirects to the Men's Wedding Band Styles page$/, async() => {
	const menwedband= await browser.getUrl();
    await expect(menwedband).toEqual(data.HomePageLinks.MensWeddingRings);
});

Then(/^I Ensure that Wedding submenu dropdown is visible with all Couples Bands present$/,async () => {
	const coupleband= new Homepage;
    await expect(coupleband.matchingbandsets).toExist();
 
});

When(/^I click the Matching Band Sets under the Couples Bands submenu$/, () => {
	const coupleband= new Homepage;
    coupleband.matchbandsCoupleWed();
});

Then(/^I ensure the Matching Band Sets redirects to the couple bands page$/, async() => {
	const coupleband = await browser.getUrl();
    await expect(coupleband).toEqual(data.HomePageLinks.MatchingBandSets);
});

When(/^I click the Read more link under Ultimate Wedding Rings Guide$/, () => {
	const ultimatchbands= new Homepage;
    ultimatchbands.readMoreWedRings();
});

Then(/^I ensure the Read more link under Ultimate Wedding Rings Guide redirects to the respective page$/, async() => {
	const coupleband = await browser.getUrl();
    await expect(coupleband).toEqual(data.HomePageLinks.UltimateWeddingRingsGuide);
});

When(/^I click the Read more link under How To Choose Matching Wedding Bands options$/, () => {
	const matchwedbands= new Homepage;
    matchwedbands.readMoreMatchWedBands();
});

Then(/^I ensure the Read more link under How To Choose Matching Wedding Bands redirects to the respective page$/,async () => {
	const matchwedband = await browser.getUrl();
    await expect(matchwedband).toEqual(data.HomePageLinks.HowtoChooseMatchingWeddingBandsGuide);
});


Given(/^I hover over the Bracelets menu$/, () => {
	const braceletsmenu= new Homepage;
    braceletsmenu.braceletsMainMenu();
});

Then(/^I Ensure that Bracelets submenu dropdown is visible with all diamonds present under shop by diamond$/, async() => {
	const shopbydiabrace = new Homepage;
    await expect(shopbydiabrace.braceletsshopbycategory).toExist();
    await expect(shopbydiabrace.bshopbydiamond).toExist();
    await expect(shopbydiabrace.sdbdiamond).toExist();
    await expect(shopbydiabrace.sdblabdiamond).toExist();
    await expect(shopbydiabrace.sdbblackdiamond).toExist();
    await expect(shopbydiabrace.sdbbluediamond).toExist();
    await expect(shopbydiabrace.sdbbrowndiamond).toExist();  
});

When(/^I click the Blue Diamond under the shop by diamond submenu$/, () => {
	const braceletsmenu= new Homepage;
    braceletsmenu.blueDiabracelets();
});

Then(/^I ensure the Blue Diamond redirects to the Blue Diamond Bracelets page$/, async() => {
	const braceletsmenu = await browser.getUrl();
    await expect(braceletsmenu).toEqual(data.HomePageLinks.BlueDiamondBracelets);
});

Then(/^I Ensure that Bracelets submenu dropdown is visible with all precious Gemstone present$/, async() => {
	const preciousbracelets = new Homepage;
    await expect(preciousbracelets.braceletsshopbycategory).toExist();
    await expect(preciousbracelets.bshopbygemstone).toExist();
    await expect(preciousbracelets.bceylonsapphire).toExist();
    await expect(preciousbracelets.bsapphire).toExist();
    await expect(preciousbracelets.bemerald).toExist();
    await expect(preciousbracelets.bruby).toExist();
    await expect(preciousbracelets.bpinksapphire).toExist();
    await expect(preciousbracelets.bwhitesapphire).toExist();
    await expect(preciousbracelets.brainbowsapphire).toExist();
});

When(/^I click the Pink Sapphire under the shop by precious Gemstone submenu$/, () => {
	const preciousbracelets= new Homepage;
    preciousbracelets.PinkSapPrecious();
});

Then(/^I ensure the Pink Sapphire redirects to the Pink Sapphire Bracelets page$/, async() => {
	const preciousbracelets = await browser.getUrl();
    await expect(preciousbracelets).toEqual(data.HomePageLinks.PinkSapphireBracelets);
});

Then(/^I Ensure that Bracelets submenu dropdown is visible with all semiprecious Gemstone present$/, async() => {
	const semipreciousbracelets = new Homepage;
    await expect(semipreciousbracelets.braceletsshopbycategory).toExist();
    await expect(semipreciousbracelets.bamethyst).toExist();
    await expect(semipreciousbracelets.baquamarine).toExist();
    await expect(semipreciousbracelets.bblackonyx).toExist();
    await expect(semipreciousbracelets.bbluetopaz).toExist();
    await expect(semipreciousbracelets.bcitrine).toExist();
    await expect(semipreciousbracelets.bgarnet).toExist();
    await expect(semipreciousbracelets.biolite).toExist();
    await expect(semipreciousbracelets.blondonbluetopaz).toExist();
    await expect(semipreciousbracelets.bmorganite).toExist();
    await expect(semipreciousbracelets.bpinktourmaline).toExist();
    await expect(semipreciousbracelets.brosequartz).toExist();
    await expect(semipreciousbracelets.bsmokyquartz).toExist();
    await expect(semipreciousbracelets.btanzanite).toExist();
    await expect(semipreciousbracelets.btsavorite).toExist();
    await expect(semipreciousbracelets.bwhitetopaz).toExist();
});

When(/^I click the Garnet under the shop by semiprecious Gemstone submenu$/, () => {
	const semipreciousbracelets= new Homepage;
    semipreciousbracelets.garnetBraceletsSemi();
});

Then(/^I ensure the Garnet redirects to the Garnet Bracelets page$/,async() => {
	const semipreciousbracelets= await browser.getUrl();
    await expect(semipreciousbracelets).toEqual(data.HomePageLinks.GarnetBracelets);
});

Then(/^I Ensure that Bracelets submenu dropdown is visible with all lab created gems present$/,async () => {
	const labcreatdbrace = new Homepage;
    await expect(labcreatdbrace.braceletsshopbycategory).toExist();
    await expect(labcreatdbrace.balexanderite).toExist();
    await expect(labcreatdbrace.bmoissanite).toExist();
});

When(/^I click the Moissanite under the shop by lab created gems submenu$/, () => {
	const labcreatdbrace= new Homepage;
    labcreatdbrace.labCreatedBracelets();
});

Then(/^I ensure the Moissanite link redirects to the Moissanite Bracelets page$/,async () => {
	const labcreatdbrace = await browser.getUrl();
    await expect(labcreatdbrace).toEqual(data.HomePageLinks.MoissaniteBracelets);
});

Then(/^I Ensure that Bracelets submenu dropdown is visible with all styles present$/, async() => {
	const bracestyle = new Homepage;
    await expect(bracestyle.braceletsshopbycategory).toExist();
    await expect(bracestyle.braceletstyle).toExist();
    await expect(bracestyle.bsapplewatchbands).toExist();
    await expect(bracestyle.bsbangles).toExist();
    await expect(bracestyle.bstennisbracelets).toExist();
    await expect(bracestyle.bschainbracelets).toExist();
    await expect(bracestyle.bsviewall).toExist();
    await expect(bracestyle.bstennisbracelets).toExist();

});

When(/^I click the Bangles under the Bracelet Styles submenu$/, () => {
	const bracestyle= new Homepage;
    bracestyle.banglesBracelets();
});

Then(/^I ensure the Bangles link redirects to the Bangles page$/, async() => {
	const bracestyle= await browser.getUrl();
    await expect(bracestyle).toEqual(data.HomePageLinks.Bangles);
});

When(/^I click the Apple watch bands under the Bracelet Styles submenu$/, () => {
	const bracestyle= new Homepage;
    bracestyle.appleBandsBracelets();
});

Then(/^I ensure the Apple watch bands redirects to the Apple watch bands page$/,async() => {
	const bracestyle= await browser.getUrl();
    await expect(bracestyle).toEqual(data.HomePageLinks.AppleWatchBands);
});

When(/^I click the Charms under the Bracelet Styles submenu$/, () => {
	const bracestyle= new Homepage;
    bracestyle.charmsBracelets();
});

Then(/^I ensure the Charms redirects to the charms page$/,async () => {
	const bracestyle= await browser.getUrl();
    await expect(bracestyle).toEqual(data.HomePageLinks.Charms);
});

When(/^I click the View All link under the Bracelet Styles submenu$/, () => {
	const bracestyle= new Homepage;
    bracestyle.viewAllBraceletsstyle();
});

Then(/^I ensure the View All link redirects to the Bracelets page$/, async() => {
	const bracestyle= await browser.getUrl();
    await expect(bracestyle).toEqual(data.HomePageLinks.ViewAllBracelets);
});

Then(/^I Ensure that Bracelets submenu dropdown is visible$/, async() => {
	const bracesub= new Homepage;
    await expect(bracesub.braceletsshopbycategory);

});

When(/^I click the Read more link under Light Up The Night With Brilliant Bracelets options$/, () => {
	const bracestyle= new Homepage;
    bracestyle.braceletsBrilliant();
});

Then(/^I ensure the Read more link under Light Up The Night With Brilliant Bracelets redirects to the respective page$/, async() => {
	const bracestyle= await browser.getUrl();
    await expect(bracestyle).toEqual(data.HomePageLinks.BrilliantBraceletsGuide);
});

When(/^I click the Read more link under Styles Of Men's Bracelets To Wear In 2023 options$/, () => {
	const bracestyle= new Homepage;
    bracestyle.styleOfMenBracelets();
});

Then(/^I ensure the Read more link under Styles Of Men's Bracelets To Wear In 2023 redirects to the respective page$/,async () => {
	const bracestyle= await browser.getUrl();
    await expect(bracestyle).toEqual(data.HomePageLinks.MensBraceletsGuide);
});

Given(/^I hover over the Earrings menu$/, () => {
	const earringsmainmenu= new Homepage;
    earringsmainmenu.earringsMainMenu();
});

Then(/^I Ensure that Earrings submenu dropdown is visible$/, async() => {
    const earringsmainmenu = new Homepage;
    await expect(earringsmainmenu.earringsshopbycategory).toExist();	
});

Then(/^I Ensure that Earrings submenu dropdown is visible with all diamonds present$/, async() => {
	const shopbydiaearrings = new Homepage;
    await expect(shopbydiaearrings.earringsshopbycategory).toExist();
    await expect(shopbydiaearrings.eshopbydiamond).toExist();
    await expect(shopbydiaearrings.sdediamond).toExist();
    await expect(shopbydiaearrings.sdelabdiamond).toExist();
    await expect(shopbydiaearrings.sdeblackdiamond).toExist();
    await expect(shopbydiaearrings.sdebluediamond).toExist();
    await expect(shopbydiaearrings.sdebrowndiamond).toExist();
});

When(/^I click the Brown Diamond under the shop by diamond submenu$/, () => {
	const browndiaear= new Homepage;
    browndiaear.brownDiamondEarring();
});

Then(/^I ensure the Brown Diamond redirects to the Brown Diamond Earrings page$/,async () => {
	const browndiaear = await browser.getUrl();
    await expect(browndiaear).toEqual(data.HomePageLinks.BrownDiamondEarrings);
});

Then(/^I Ensure that Earrings submenu dropdown is visible with all precious Gemstone present$/,async () => {
	const preciousearrings = new Homepage;
    await expect(preciousearrings.earringsshopbycategory).toExist();
    await expect(preciousearrings.eshopbygemstone).toExist();
    await expect(preciousearrings.eceylonsapphire).toExist();
    await expect(preciousearrings.esapphire).toExist();
    await expect(preciousearrings.eemerald).toExist();
    await expect(preciousearrings.eruby).toExist();
    await expect(preciousearrings.epinksapphire).toExist();
    await expect(preciousearrings.ewhitesapphire).toExist();
    await expect(preciousearrings.erainbowsapphire).toExist();
});

When(/^I click the Emerald  under the shop by precious Gemstone submenu under earrings menu$/, () => {
	const preciousearrings = new Homepage;
    preciousearrings.emeraldPrecErring();
});

Then(/^I ensure the Emerald redirects to the Emerald Earrings page$/, async() => {
	const preciousearrings = await browser.getUrl();
    await expect(preciousearrings).toEqual(data.HomePageLinks.EmeraldEarrings);
});

Then(/^I Ensure that Earrings submenu dropdown is visible with all semiprecious Gemstone present$/, async() => {
	const semipreciousearrings = new Homepage;
    await expect(semipreciousearrings.earringsshopbycategory).toExist();
    await expect(semipreciousearrings.eamethyst).toExist();
    await expect(semipreciousearrings.eaquamarine).toExist();
    await expect(semipreciousearrings.eblackonyx).toExist();
    await expect(semipreciousearrings.ebluetopaz).toExist();
    await expect(semipreciousearrings.ecitrine).toExist();
    await expect(semipreciousearrings.egarnet).toExist();
    await expect(semipreciousearrings.eiolite).toExist();
    await expect(semipreciousearrings.elondonbluetopaz).toExist();
    await expect(semipreciousearrings.emorganite).toExist();
    await expect(semipreciousearrings.epinktourmaline).toExist();
    await expect(semipreciousearrings.erosequartz).toExist();
    await expect(semipreciousearrings.esmokyquartz).toExist();
    await expect(semipreciousearrings.etanzanite).toExist();
    await expect(semipreciousearrings.etsavorite).toExist();
    await expect(semipreciousearrings.ewhitetopaz).toExist();
});

When(/^I click the Iolite under the shop by semiprecious Gemstone submenu$/, () => {
	const semipreciousearrings = new Homepage;
    semipreciousearrings.ioliteSemiEarring();
});

Then(/^I ensure the Iolite redirects to the Iolite Earrings page$/,async () => {
	const semipreciousearrings = await browser.getUrl();
    await expect(semipreciousearrings).toEqual(data.HomePageLinks.IoliteEarrings);
});

Then(/^I Ensure that Earrings submenu dropdown is visible with all lab created gems present$/, async() => {
	const labcreatdearrings = new Homepage;
    await expect(labcreatdearrings.earringsshopbycategory).toExist();
    await expect(labcreatdearrings.ealexanderite).toExist();
    await expect(labcreatdearrings.emoissanite).toExist();
});

When(/^I click the Moissanite under the lab created gems submenu$/, () => {
	const labcreatdearrings = new Homepage;
    labcreatdearrings.moissEarrings();
});

Then(/^I ensure the Moissanite redirects to the Moissanite Earrings page$/,async () => {
	const labcreatdearrings = await browser.getUrl();
    await expect(labcreatdearrings).toEqual(data.HomePageLinks.MoissaniteEarrings);
});

Then(/^I Ensure that Earrings submenu dropdown is visible with all earring styles present$/, async() => {
	const shopearingstyles = new Homepage;
    await expect(shopearingstyles.earringsshopbycategory).toExist();
    await expect(shopearingstyles.eschandelier).toExist();
    await expect(shopearingstyles.esdropearrings).toExist();
    await expect(shopearingstyles.eshaloearring).toExist();
    await expect(shopearingstyles.eshoopearring).toExist();
    await expect(shopearingstyles.esstudearring).toExist();
    await expect(shopearingstyles.esviewall).toExist();

});

When(/^I click the Hoop earrings under the earring styles submenu$/, () => {
	const shopearingstyles = new Homepage;
    shopearingstyles.hoopEarringstyle();
});

Then(/^I ensure the Hoop earrings redirects to the Hoop earrings page$/, async() => {
	const shopearingstyles = await browser.getUrl();
    await expect(shopearingstyles).toEqual(data.HomePageLinks.HoopEarrings);
});

When(/^I click the Read more link under the Top Diamond Stud Earrings$/, () => {
	const topdia = new Homepage;
    topdia.topDiaStud();
});

Then(/^I ensure the Read more link underTop Diamond Stud Earrings redirects to the respective page$/,async () => {
	const shopearingstyles = await browser.getUrl();
    await expect(shopearingstyles).toEqual(data.HomePageLinks.TopStudEarringsGuide);
});

When(/^I click the Read more link under Earrings For Her options$/, () => {
	const shopearingsher = new Homepage;
    shopearingsher.herEarrings();
});

Then(/^I ensure the Read more link under Earrings For Her redirects to the respective page$/,async() => {
	const shopearingstyles = await browser.getUrl();
    await expect(shopearingstyles).toEqual(data.HomePageLinks.EarringsForHerGuide);
});


Given(/^I hover over the Necklaces menu$/, () => {
	const necklacesmainmenu= new Homepage;
    necklacesmainmenu.necklacesMainMenu();
});

Then(/^I Ensure that Necklaces submenu dropdown is visible$/, async() => {
	const necklacesmainmenu = new Homepage;
    await expect(necklacesmainmenu.necklacesshopbycategory).toExist();	
});

Then(/^I Ensure that Necklaces submenu dropdown is visible with all shop by diamond present$/, async() => {
	const shopbydianeck = new Homepage;
    await expect(shopbydianeck.necklacesshopbycategory).toExist();
    await expect(shopbydianeck.sdndiamond).toExist();
    await expect(shopbydianeck.sdnlabdiamond).toExist();
    await expect(shopbydianeck.sdnblackdiamond).toExist();
    await expect(shopbydianeck.sdnbluediamond).toExist();
    await expect(shopbydianeck.sdnbrowndiamond).toExist();  
});

When(/^I click the Diamond under the shop by diamond submenu$/, () => {
	const neckdia= new Homepage;
    neckdia.shopByDiamondNeck();
});

Then(/^I ensure the Diamond redirects to the Diamond Necklaces and Pendants page$/, async() => {
	const neckdia = await browser.getUrl();
    await expect(neckdia).toEqual(data.HomePageLinks.DiamondNecklaces);
});

Then(/^I Ensure that Necklaces submenu dropdown is visible with precious Gemstone present$/, async() => {
	const preciousnecklaces = new Homepage;
    await expect(preciousnecklaces.necklacesshopbycategory).toExist();
    await expect(preciousnecklaces.nceylonsapphire).toExist();
    await expect(preciousnecklaces.nsapphire).toExist();
    await expect(preciousnecklaces.nemerald).toExist();
    await expect(preciousnecklaces.nruby).toExist();
    await expect(preciousnecklaces.npinksapphire).toExist();
    await expect(preciousnecklaces.nwhitesapphire).toExist();
    await expect(preciousnecklaces.nrainbowsapphire).toExist();
});

When(/^I click the White Sapphire under the shop by precious Gemstone submenu$/, () => {
	const sappNeckSemi= new Homepage;
    sappNeckSemi.SappPrecious();
});

Then(/^I ensure the White Sapphire redirects to the White Sapphire Necklaces and Pendants page$/, async() => {
	const sappneckdia = await browser.getUrl();
    await expect(sappneckdia).toEqual(data.HomePageLinks.WhiteSapphireNecklaces);
});

Then(/^I Ensure that Necklaces submenu dropdown is visible with semiprecious Gemstone present$/, async() => {
	const semipreciousnecklaces = new Homepage;
    await expect(semipreciousnecklaces.necklacesshopbycategory).toExist();
    await expect(semipreciousnecklaces.namethyst).toExist();
    await expect(semipreciousnecklaces.naquamarine).toExist();
    await expect(semipreciousnecklaces.nblackonyx).toExist();
    await expect(semipreciousnecklaces.nbluetopaz).toExist();
    await expect(semipreciousnecklaces.ncitrine).toExist();
    await expect(semipreciousnecklaces.ngarnet).toExist();
    await expect(semipreciousnecklaces.niolite).toExist();
    await expect(semipreciousnecklaces.nlondonbluetopaz).toExist();
    await expect(semipreciousnecklaces.npinktourmaline).toExist();
    await expect(semipreciousnecklaces.nrosequartz).toExist();
    await expect(semipreciousnecklaces.nsmokyquartz).toExist();
    await expect(semipreciousnecklaces.ntanzanite).toExist();
    await expect(semipreciousnecklaces.ntsavorite).toExist();
    await expect(semipreciousnecklaces.nwhitetopaz).toExist();
});

When(/^I click the Citrine under the shop by semiprecious Gemstone submenu$/, () => {
	const semipreciousnecklaces = new Homepage;
    semipreciousnecklaces.citrineSemiPre();
});

Then(/^I ensure the Citrine redirects to the Citrine Necklaces and Pendants page$/, async() => {
	const semipreciousnecklaces = await browser.getUrl();
    await expect(semipreciousnecklaces).toEqual(data.HomePageLinks.CitrineNecklaces);
});

Then(/^I Ensure that Necklaces submenu dropdown is visible with lab created gems present$/,async () => {
	const labcreatdnecklaces = new Homepage;
    await expect(labcreatdnecklaces.necklacesshopbycategory).toExist();
    await expect(labcreatdnecklaces.nalexanderite).toExist();
    await expect(labcreatdnecklaces.nmoissanite).toExist();
});

When(/^I click the Moissanite under the lab created gems submenu under Necklaces menu$/, () => {
	const labcreatdnecklaces = new Homepage;
    labcreatdnecklaces.moissNeck();
});

Then(/^I ensure the Moissanite redirects to the Moissanite Necklaces and Pendants page$/,async () => {
	const labcreatdnecklaces = await browser.getUrl();
    await expect(labcreatdnecklaces).toEqual(data.HomePageLinks.MoissaniteNecklaces);
});

When(/^I click the Cross necklaces under the Necklaces styles submenu$/, () => {
	const stylenecklaces = new Homepage;
    stylenecklaces.CrossNeck();
});

Then(/^I ensure the Cross necklaces redirects to the Cross necklaces and pendants page$/,async() => {
	const stylenecklaces = await browser.getUrl();
    await expect(stylenecklaces).toEqual(data.HomePageLinks.CrossNecklaces);
});

When(/^I click the Read more link under the Heart Necklace Guide options$/, () => {
	const necklacesguide = new Homepage;
    necklacesguide.neckGuideOption();
});

Then(/^I ensure the Read more link under Heart Necklace Guide redirects to the respective page$/, async() => {
	const labcreatdnecklaces = await browser.getUrl();
    await expect(labcreatdnecklaces).toEqual(data.HomePageLinks.HeartNecklaceGuide);
});


Given(/^I hover over the Men's menu$/, () => {
	const mensmainmenu= new Homepage;
    mensmainmenu.mensMainMenu();
});

Then(/^I Ensure that Men's submenu dropdown is visible$/, async() => {
    const mensmainmenu = new Homepage;
    await expect(mensmainmenu.mensshopbycategory).toExist();
    await expect(mensmainmenu.sdmdiamond).toExist();
    await expect(mensmainmenu.sdmlabdiamond).toExist();
    await expect(mensmainmenu.sdmbluediamond).toExist();
    await expect(mensmainmenu.sdbblackdiamond).toExist();
    await expect(mensmainmenu.sdmbrowndiamond).toExist();	
});

When(/^I click the Black Diamond under the shop by diamond submenu under Men's menu$/, () => {
    const mensmainmenu = new Homepage;
    mensmainmenu.mensBlackDia();
});

Then(/^I ensure the Black Diamond redirects to the Men's Black Diamond Ring page$/,async () => {
	const mensmainmenu = await browser.getUrl();
    await expect(mensmainmenu).toEqual(data.HomePageLinks.BlackDiamondMensRings);
});

Then(/^I Ensure that Men's submenu dropdown is visible with all precious gemstone present$/,async () => {
	const preciousmensrings = new Homepage;
    await expect(preciousmensrings.mensshopbycategory).toExist();
    await expect(preciousmensrings.mceylonsapphire).toExist();
    await expect(preciousmensrings.msapphire).toExist();
    await expect(preciousmensrings.memerald).toExist();
    await expect(preciousmensrings.mruby).toExist();
    await expect(preciousmensrings.mpinksapphire).toExist();
    await expect(preciousmensrings.mwhitesapphire).toExist();

});

When(/^I click the white Sapphire under the shop by precious Gemstone submenu$/, () => {
	const preciousmensrings = new Homepage;
    preciousmensrings.whiteSappMens();
});

Then(/^I ensure the White Sapphire redirects to the Men's white sapphire rings page$/,async () => {
	const preciousmensrings = await browser.getUrl();
    await expect(preciousmensrings).toEqual(data.HomePageLinks.WhiteSapphireMensRings);
});

Then(/^I Ensure that Men's submenu dropdown is visible with all semiprecious gemstone present$/, async() => {
	const semipreciousmensrings = new Homepage;
    await expect(semipreciousmensrings.mensshopbycategory).toExist();
    await expect(semipreciousmensrings.mamethyst).toExist();
    await expect(semipreciousmensrings.maquamarine).toExist();
    await expect(semipreciousmensrings.mblackonyx).toExist();
    await expect(semipreciousmensrings.mbluetopaz).toExist();
    await expect(semipreciousmensrings.mcitrine).toExist();
    await expect(semipreciousmensrings.mgarnet).toExist();
    await expect(semipreciousmensrings.miolite).toExist();
    await expect(semipreciousmensrings.mlondonbluetopaz).toExist();
    await expect(semipreciousmensrings.mmorganite).toExist();
    await expect(semipreciousmensrings.mpinktourmaline).toExist();
    await expect(semipreciousmensrings.mrosequartz).toExist();
    await expect(semipreciousmensrings.msmokyquartz).toExist();
    await expect(semipreciousmensrings.mtanzanite).toExist();
    await expect(semipreciousmensrings.mtsavorite).toExist();
    await expect(semipreciousmensrings.mwhitetopaz).toExist();
});

When(/^I click the Black Onyx under the shop by semiprecious Gemstone submenu$/, () => {
	const semipreciousmensrings = new Homepage;
    semipreciousmensrings.mensBlackOnyx();
});

Then(/^I ensure the Black Onyx redirects to the Men's Black Onyx rings page$/,async () => {
	const semipreciousmensrings = await browser.getUrl();
    await expect(semipreciousmensrings).toEqual(data.HomePageLinks.BlackOnyxMensRings);
});

Then(/^I Ensure that Men's submenu dropdown is visible with all lab created gems present$/, async() => {
	const labcreatdmensrings = new Homepage;
    await expect(labcreatdmensrings.mensshopbycategory).toExist();
    await expect(labcreatdmensrings.malexanderite).toExist();
    await expect(labcreatdmensrings.mmoissanite).toExist();
});

When(/^I click the Moissanite under the lab created gems submenu under mens menu$/, () => {
	const labcreatdmensrings = new Homepage;
    labcreatdmensrings.moissMensRing();
});

Then(/^I ensure the Moissanite redirects to the Men's Moissanite rings page$/, async() => {
    const labcreatdmensrings = await browser.getUrl();
    await expect(labcreatdmensrings).toEqual(data.HomePageLinks.MoissaniteMensRings);
});

Then(/^I Ensure that Men's submenu dropdown is visible with all metals present$/,async () => {
	const metalmensrings = new Homepage;
    await expect(metalmensrings.mensshopbycategory).toExist();
    await expect(metalmensrings.mplatinum).toExist();
    await expect(metalmensrings.mrosegold).toExist();
    await expect(metalmensrings.mwhitegold).toExist();
    await expect(metalmensrings.myellowgold).toExist();
    await expect(metalmensrings.mblackgold).toExist();
    await expect(metalmensrings.msilver).toExist();
});

When(/^I click the Rose Gold under the metals submenu$/, () => {
	const metalmensrings = new Homepage;
    metalmensrings.rgMensRing();
});

Then(/^I ensure the Rose Gold redirects to the 14K Men's Rose Gold rings page$/, async() => {
	const metalmensrings= await browser.getUrl();
    await expect(metalmensrings).toEqual(data.HomePageLinks.RoseGoldMensRings);
});

Then(/^I Ensure that Men's submenu dropdown is visible with all mens styles present$/, async() => {
	const shopmensringstyles = new Homepage;
    await expect(shopmensringstyles.ringsshopbycategory).toExist();
    await expect(shopmensringstyles.shopbystyle).toExist();
    await expect(shopmensringstyles.ssmensearring).toExist();
    await expect(shopmensringstyles.ssmensbracelets).toExist();
    await expect(shopmensringstyles.sssignetrings).toExist();
    await expect(shopmensringstyles.sscufflinks).toExist();
    await expect(shopmensringstyles.ssviewall).toExist();

});

When(/^I click the Signet rings under the shop by styles submenu$/, () => {
	const shopmensringstyles = new Homepage;
    shopmensringstyles.mensSignetRings();
});

Then(/^I ensure the Signet rings redirects to the Men's Signet rings page$/, async() => {
	const shopmensringsstyles= await browser.getUrl();
    await expect(shopmensringsstyles).toEqual(data.HomePageLinks.SignetMensRings);
});

When(/^I click the Read more link under the How To Choose A Mens Birthday Ring options$/, () => {
	const mensbday = new Homepage;
    mensbday.MensBirthring();
});

Then(/^I ensure the Read more link under How To Choose A Mens Birthday Ring redirects to the respective page$/, async() => {
	const mensbday= await browser.getUrl();
    await expect(mensbday).toEqual(data.HomePageLinks.HowtoChooseMensBirthdayRingGuide);
});

When(/^I click the Read more link under the Men's Luxury Guide options$/, () => {
	const menslux = new Homepage;
    menslux.MensLuxGuide();
});

Then(/^I ensure the Read more link under Men's Luxury Guide redirects to the respective page$/,async () => {
	const menslux= await browser.getUrl();
    await expect(menslux).toEqual(data.HomePageLinks.MensLuxuryGuide);
});

Given(/^I Click Shop Rings button in the homepage$/, () => {
	const shoprings = new Homepage;
    shoprings.shopRingsClick();
});

Then(/^I ensure the Shop Rings button redirects to page 2 -rings$/,async () => {
	const shoprings = await browser.getUrl();
    await expect(shoprings).toEqual(data.Gemstonerings.ShopRingsPage);
});

When(/^I click the Diamondere logo$/, () => {
	const dmdLogo = new Homepage;
    dmdLogo.dmdLogoClick();
});

Then(/^I ensure clicking the Diamondere logo redirects to the Homepage of Diamondere$/,async () => {
	const dmdLogo = await browser.getUrl();
    await expect(dmdLogo).toEqual(data.HomePageLinks.HomePage);
});

Given(/^I move to the Shop Rings section$/, () => {
	const shopringssec= new Homepage;
    shopringssec.shopRingsSection();
});

Given(/^I click the shop now link under Black Gold Men's Rings$/, () => {
	const blackgoldmen= new Homepage;
    blackgoldmen.shopBlackGoldMen();
});

Then(/^I ensure the shop now link under Black Gold Men's Rings redirects to the Black Gold Men's Rings page$/, async() => {
	const dmdLogo = await browser.getUrl();
    await expect(dmdLogo).toEqual(data.Gemstonerings.BlackGoldMensRing);
});

When(/^I click the shop now link under Toi et Moi Collection$/, () => {
	const toietmoi = new Homepage;
    toietmoi.clickToiEtMoi();
});

Then(/^I ensure the shop now link under Toi et Moi Collection redirects to the Toi et Moi rings page$/,async () => {
	const toietmoi = await browser.getUrl();
    await expect(toietmoi).toEqual(data.Gemstonerings.ToiEtMoiRings);
    browser.back();

});

When(/^I click the shop now link under Vintage rings$/, () => {
	const vintrings= new Homepage;
    vintrings.clickVintageRings();
});

Then(/^I ensure the shop now link under Vintage rings redirects to the Vintage rings page$/, async () => {
	const vintrings = await browser.getUrl();
    await expect(vintrings).toEqual(data.Gemstonerings.VintageRings);
});

Given(/^I move to the shop by natural gemstone collections text is present$/, () => {
	const shopnatural = new Homepage;
    shopnatural.moveNatGemstone();
});

When(/^I click the shop now link under Black diamond rings$/, () => {
	const shopnatural = new Homepage;
    shopnatural.blackDiaRings();
});

Then(/^I ensure the shop now link under Black diamond rings redirects to the Black diamond rings page$/, async() => {
	const shopnatural = await browser.getUrl();
    await expect(shopnatural).toEqual(data.Gemstonerings.BLACKDIAMONDRINGS);
});

Given(/^I click the shop now link under Ruby rings$/, () => {
	const shopnatural = new Homepage;
    shopnatural.rubyDiaRings();
});

Then(/^I ensure the shop now link under Ruby rings redirects to the Ruby rings page$/, async() => {
	const shopnatural = await browser.getUrl();
    await expect(shopnatural).toEqual(data.Gemstonerings.RUBYRINGS);
});

Given(/^I click the shop now link under Sapphire rings$/, () => {
	const shopnatural = new Homepage;
    shopnatural.sappDiaRings();
});

Then(/^I ensure the shop now link under Sapphire rings redirects to the Sapphire rings page$/, async() => {
	const shopnatural = await browser.getUrl();
    await expect(shopnatural).toEqual(data.Gemstonerings.SAPPHIRERINGS);
});

Given(/^I click the shop now link under Emerald rings$/, () => {
	const shopnatural = new Homepage;
    shopnatural.emeraldDiaRings();
});

Then(/^I ensure the shop now link under Emerald rings redirects to the Emerald rings page$/, async() => {
	const shopnatural = await browser.getUrl();
    await expect(shopnatural).toEqual(data.Gemstonerings.EMERALDRINGS);
});

Given(/^I Click the right caret icon$/, () => {
	const shopnatural = new Homepage;
    shopnatural.rightCaretIcon();
});

When(/^I click the shop now link under Amethyst rings$/, () => {
	const shopnatural = new Homepage;
    shopnatural.amethystDiaRings();
});

Then(/^I ensure the shop now link under Amethyst rings redirects to the Amethyst rings page$/,async () => {
	const shopnatural = await browser.getUrl();
    await expect(shopnatural).toEqual(data.Gemstonerings.AMETHYSTRINGS);
});

When(/^I Click the right caret icon two times$/, () => {
	const shopnatural = new Homepage;
    shopnatural.rightCaretIcon();
    shopnatural.rightCaretIcon();
});

When(/^I click the shop now link under Pink Tourmaline rings$/, () => {
	const shopnatural = new Homepage;
    shopnatural.pinkTourDiaRings();
});

Then(/^I ensure the shop now link under Pink Tourmaline rings redirects to the Pink Tourmaline rings page$/, async() => {
	const shopnatural = await browser.getUrl();
    await expect(shopnatural).toEqual(data.Gemstonerings.PINKTOURMALINERINGS);
});

When(/^I Click the right caret icon three times$/, () => {
	const shopnatural = new Homepage;
    shopnatural.rightCaretIcon();
    shopnatural.rightCaretIcon();
    shopnatural.rightCaretIcon();
});

When(/^I click the shop now link under Morganite rings$/, () => {
	const shopnatural = new Homepage;
    shopnatural.morganiteDiaRings();
});

Then(/^I ensure the shop now link under Morganite rings redirects to the Morganite rings page$/,async () => {
	const shopnatural = await browser.getUrl();
    await expect(shopnatural).toEqual(data.Gemstonerings.MORGANITERINGS);
});

When(/^I Click the right caret icon four times$/, () => {
	const shopnatural = new Homepage;
    shopnatural.rightCaretIcon();
    shopnatural.rightCaretIcon();
    shopnatural.rightCaretIcon();
    shopnatural.rightCaretIcon();

});

When(/^I Click the right caret icon five times$/, () => {
    const shopnatural = new Homepage;
    shopnatural.rightCaretIcon();
    shopnatural.rightCaretIcon();
    shopnatural.rightCaretIcon();
    shopnatural.rightCaretIcon();
    shopnatural.rightCaretIcon();
});

When(/^I Click the right caret icon six times$/, () => {
    const shopnatural = new Homepage;
    shopnatural.rightCaretIcon();
    shopnatural.rightCaretIcon();
    shopnatural.rightCaretIcon();
    shopnatural.rightCaretIcon();
    shopnatural.rightCaretIcon();
    shopnatural.rightCaretIcon();
});

When(/^I click the shop now link under Peridot rings$/, () => {
	const shopnatural = new Homepage;
    shopnatural.peridotDiaRings();
});

Then(/^I ensure the shop now link under Peridot rings redirects to the Peridot rings page$/,async() => {
	const shopnatural = await browser.getUrl();
    await expect(shopnatural).toEqual(data.Gemstonerings.PERIDOTRINGS);
});

When(/^I click the shop now link under Alexandrite rings$/, () => {
	const shopnatural = new Homepage;
    shopnatural.pinkTourDiaRings();
});

Then(/^I ensure the shop now link under Alexandrite rings redirects to the Alexandrite rings page$/, async() => {
	const shopnatural = await browser.getUrl();
    await expect(shopnatural).toEqual(data.Gemstonerings.PINKTOURMALINERINGS);
});

When(/^I click the shop now link under Aquamarine rings$/, () => {
	const shopnatural = new Homepage;
    shopnatural.aquamarineDiaRings();
});

Then(/^I ensure the shop now link under Aquamarine rings redirects to the Aquamarine rings page$/,async () => {
	const shopnatural = await browser.getUrl();
    await expect(shopnatural).toEqual(data.Gemstonerings.AQUAMARINERINGS);
});


Given(/^I move to the Featured categories$/, () => {
	const featcateg = new Homepage;
    featcateg.sectionFeatCateg();
});

When(/^I Click the Rings link and image under Featured categories$/, () => {
	const featcateg = new Homepage;
    featcateg.ringFeatured();
});

Then(/^I ensure clicking the Rings link and image redirects to the Rings page$/,async () => {
	const featcateg = await browser.getUrl();
    await expect(featcateg).toEqual(data.Gemstonerings.FeaturedRINGS);
});

Given(/^I Click the Earrings link and image under Featured categories$/, () => {
	const featcateg = new Homepage;
    featcateg.earringFeatured();
});

Then(/^I ensure clicking the Earrings link and image redirects to the Earrings page$/, async() => {
	const featcateg = await browser.getUrl();
    await expect(featcateg).toEqual(data.Gemstonerings.FeaturedEARRINGS);
});

Given(/^I Click the Bracelets link and image under Featured categories$/, () => {
	const featcateg = new Homepage;
    featcateg.braceletsFeatured();
});

Then(/^I ensure clicking the Bracelets link and image redirects to the Bracelets page$/, async() => {
	const featcateg = await browser.getUrl();
    await expect(featcateg).toEqual(data.Gemstonerings.FeaturedBRACELETS);
});

Given(/^I Click the Necklaces link and image under Featured categories$/, () => {
	const featcateg = new Homepage;
    featcateg.necklacesFeatured();
});

Then(/^I ensure clicking the Necklaces link and image redirects to the Necklaces page$/, async() => {
	const featcateg = await browser.getUrl();
    await expect(featcateg).toEqual(data.Gemstonerings.FeaturedNECKLACES);
});


Given(/^I Click the Men's rings link and image under Featured categories$/, () => {
	const featcateg = new Homepage;
    featcateg.mensRingFeatured();
});

Then(/^I ensure clicking the Men's link and image redirects to the Men's page$/,async () => {
	const featcateg = await browser.getUrl();
    await expect(featcateg).toEqual(data.Gemstonerings.FeaturedMENsRINGS);
});

Given(/^I Click the Eternity bands link and image under Featured categories$/, () => {
	const featcateg = new Homepage;
    featcateg.eternitybandsFeatured();
});

Then(/^I ensure clicking the Eternity bands link and image redirects to the Eternity bands page$/, async() => {
	const featcateg = await browser.getUrl();
    await expect(featcateg).toEqual(data.Gemstonerings.FeaturedETERNITYBANDS);
});

Given(/^I move to the Tell Her Its Forever section and text$/, () => {
	const tellher = new Homepage;
    tellher.tellHerSection();
});

When(/^I click the GIA Natural Diamonds link$/, () => {
	const tellher = new Homepage;
    tellher.tellHerGia();
});

Then(/^I ensure clicking the GIA Natural Diamonds link redirects to the Make Your Diamond Engagement rings page$/,async () => {
	const tellher= await browser.getUrl();
    await expect(tellher).toEqual(data.Gemstonerings.GIAnaturaldiamonds);
});


Given(/^I Click the IGI Lab Diamonds link$/, () => {
    const tellher = new Homepage;
    tellher.tellHerIgi();
});

Then(/^I ensure clicking the IGI Lab Diamonds link redirects to the Make Your lab Diamond Engagement rings page$/,async () => {
	const tellher= await browser.getUrl();
    await expect(tellher).toEqual(data.Gemstonerings.IGIlabdiamonds);
});

Given(/^I Click the Beautiful handcrafted link$/, () => {
	const tellher = new Homepage;
    tellher.tellHerBeautiful();
});

Then(/^I ensure clicking the Beautiful handcrafted link redirects to the Make Your Diamond Engagement rings page$/,async () => {
	const tellher= await browser.getUrl();
    await expect(tellher).toEqual(data.Gemstonerings.beautifulHandcraftedringsettings);
});

//Scenario - 72
Given(/^I select the Shop Now link under Birthstone Collections$/, () => {
	const birthStoneCollection = new Homepage;
    birthStoneCollection.clickbirthstoneCollection();
});


Then(/^I ensure the Birthstone Jewelry Guide text and the Birthstone text of months are present$/, async() => {
	const birthStoneCollection = new Homepage;
    await expect(birthStoneCollection.headingBirthstoneGuide).toExist();
    await expect(birthStoneCollection.januaryBirthstone).toExist();
    await expect(birthStoneCollection.februaryBirthstone).toExist();
    await expect(birthStoneCollection.marchBirthstone).toExist();
    await expect(birthStoneCollection.aprilBirthstone).toExist();
    await expect(birthStoneCollection.mayBirthstone).toExist();
    await expect(birthStoneCollection.juneBirthstone).toExist();
    await expect(birthStoneCollection.julyBirthstone).toExist();
    await expect(birthStoneCollection.augustBirthstone).toExist();
    await expect(birthStoneCollection.septemberBirthstone).toExist();
    await expect(birthStoneCollection.octoberBirthstone).toExist();
    await expect(birthStoneCollection.novemberBirthstone).toExist();
    await expect(birthStoneCollection.decemberBirthstone).toExist();
});

//Scenario - 73
When(/^I click the Check Your Relationship gemstone link$/, () => {
	const birthStoneCollection = new Homepage;
    birthStoneCollection.clickCheckYourGemstone();
});


Then(/^I ensure it redirects to the expected page and the Discover your Relationship Gemstone section is present$/, async () => {
    const birthstoneUrl = await browser.getUrl();
    await expect(birthstoneUrl).toEqual(data.SectionsHomepage.CheckYourRelationshipGemstone);
    const birthStoneCollection = new Homepage;
    await expect(birthStoneCollection.sectionRelationshipGemstone);
});

//Scenario - 74
When(/^I select the Month from the Your birth month and day dropdown$/, () => {
	const birthStoneCollection = new Homepage;
    birthStoneCollection.clickYourBirthMonth();
});


When(/^I select the Day from the Your birth month and day dropdown$/, () => {
	const birthStoneCollection = new Homepage;
    birthStoneCollection.clickYourBirthDate();
});


When(/^I select the Month from the Your Partner's birth month and day dropdown$/, () => {
	const birthStoneCollection = new Homepage;
    birthStoneCollection.clickYourPartnerBirthMonth();
});


When(/^I select the Day from the Your Partner's birth month and day dropdown$/, () => {
	const birthStoneCollection = new Homepage;
    birthStoneCollection.clickYourPartnerBirthDate();
});


Then(/^I ensure the Zodiac images and Gemstone image and text are present$/, async() => {
	const birthStoneCollection = new Homepage;
    await expect(birthStoneCollection.yourZodiac).toExist();
    await expect(birthStoneCollection.partnerZodiac).toExist();
    await expect(birthStoneCollection.imgDiamond).toExist();
    await expect(birthStoneCollection.zodiacDescription).toExist();
});


//Scenario - 75
Then(/^I ensure the Share Results section and Email to yourself or your partner section are present$/, async () => {
	const birthStoneCollection = new Homepage;
    await expect(birthStoneCollection.shareTheseResults).toExist();
    await expect(birthStoneCollection.lnkFacebookShare).toExist();
    await expect(birthStoneCollection.lnkTwitterShare).toExist();
    await expect(birthStoneCollection.lnkInstagramShare).toExist();
    await expect(birthStoneCollection.lnkPinterestShare).toExist();
    await expect(birthStoneCollection.Emailtoyourselforyourpartner).toExist();
    await expect(birthStoneCollection.partnersEmailID).toExist();
    await expect(birthStoneCollection.btnSendEmail).toExist();
});


When(/^I enter the respective mail in the Email to yourself or your partner$/, () => {
	const birthStoneCollection = new Homepage;
    birthStoneCollection.enterPartnersEmail();
});


When(/^I click the send button in the Email field$/, () => {
	const birthStoneCollection = new Homepage;
    birthStoneCollection.clickSendButton();
});


Then(/^I ensure clicking the send button displays the success message$/,async () => {
	const birthStoneCollection = new Homepage;
    await expect(birthStoneCollection.sendEmailSuccessMsg).toExist();
});

//Scenario - 76
Then(/^I ensure the Shop Gemstone Rings,necklaces and earrings are present$/, async() => {
	const birthStoneCollection = new Homepage;
    await expect(birthStoneCollection.shopZodiacDiamondRings).toExist();
    await expect(birthStoneCollection.shopzodiacDiamondNecklaces).toExist();
    await expect(birthStoneCollection.shopZodiacDiamondEarrings).toExist();
});


When(/^I click the Shop Gemstone Rings$/, () => {
	const birthStoneCollection = new Homepage;
    birthStoneCollection.clickShopZodiacGemstoneRings();
});


Then(/^I ensure clicking the Shop Gemstone Rings redirects to the respective page$/, async() => {
	const birthStoneCollection = await browser.getUrl();
    await expect(birthStoneCollection).toEqual(data.SectionsHomepage.ZodiacGemstoneRings);
    browser.back();
});


When(/^I click the Shop Gemstone Necklaces$/, () => {
	const birthStoneCollection = new Homepage;
    birthStoneCollection.clickShopZodiacGemstoneNecklaces();
    BrowserUtil.wait(5);
});


Then(/^I ensure clicking the Shop Gemstone Necklaces redirects to the respective page$/, async() => {
	const birthStoneCollection = await browser.getUrl();
    await expect(birthStoneCollection).toEqual(data.SectionsHomepage.ZodiacGemstoneNecklaces);
    browser.back();
});


When(/^I click the Shop Gemstone Earrings$/, () => {
	const birthStoneCollection = new Homepage;
    birthStoneCollection.clickShopZodiacGemstoneEarrings();
});


Then(/^I ensure clicking the Shop Gemstone Earrings redirects to the respective page$/, async() => {
	const birthStoneCollection = await browser.getUrl();
    await expect(birthStoneCollection).toEqual(data.SectionsHomepage.ZodiacGemstoneEarrings);
    browser.back();
});


Given(/^I move to the Diamond Shape section text$/, () => {
	const shopByShape = new Homepage;
    shopByShape.scrollToShopByShape();
});


When(/^I Click the Round cut Diamond shape$/, () => {
	const shopByShape = new Homepage;
    shopByShape.selectRoundCut();
});


Then(/^I ensure clicking the Round cut Diamond shape redirects to the Make Your Diamond Engagement rings page$/, async() => {
	const shopByShape = await browser.getUrl();
    await expect(shopByShape).toEqual(data.SectionsHomepage.Roundcutrings);
});

//Scenario - 99
Given(/^I Click the Oval cut Diamond shape$/, () => {
	const shopByShape = new Homepage;
    shopByShape.selectOvalCut();
});


Then(/^I ensure clicking the Oval cut Diamond shape redirects to the Make Your Diamond Engagement rings page$/, async() => {
	const shopByShape = await browser.getUrl();
    await expect(shopByShape).toEqual(data.SectionsHomepage.Ovalcutrings);
});

//Scenario - 100
Given(/^I Click the Cushion cut Diamond shape$/, () => {
	const shopByShape = new Homepage;
    shopByShape.selectCushionCut();
});


Then(/^I ensure clicking the Cushion cut Diamond shape redirects to the Make Your Diamond Engagement rings page$/, async() => {
	const shopByShape = await browser.getUrl();
    await expect(shopByShape).toEqual(data.SectionsHomepage.Cushioncutrings);
});

//Scenario - 101
Given(/^I Click the Princess cut Diamond shape$/, () => {
	const shopByShape = new Homepage;
    shopByShape.selectPrincessCut();
});


Then(/^I ensure clicking the Princess cut Diamond shape redirects to the Make Your Diamond Engagement rings page$/, async() => {
	const shopByShape = await browser.getUrl();
    await expect(shopByShape).toEqual(data.SectionsHomepage.Princesscutrings);
});

//Scenario - 102
Given(/^I Click the Emerald cut Diamond shape$/, () => {
	const shopByShape = new Homepage;
    shopByShape.selectEmeraldCut();
});


Then(/^I ensure clicking the Emerald cut Diamond shape redirects to the Make Your Diamond Engagement rings page$/, async() => {
	const shopByShape = await browser.getUrl();
    await expect(shopByShape).toEqual(data.SectionsHomepage.Emeraldcutrings);
});

//Scenario - 103
Given(/^I Click the Heart cut Diamond shape$/, () => {
	const shopByShape = new Homepage;
    shopByShape.selectHeartCut();
});


Then(/^I ensure clicking the Heart cut Diamond shape redirects to the Make Your Diamond Engagement rings page$/, async() => {
	const shopByShape = await browser.getUrl();
    await expect(shopByShape).toEqual(data.SectionsHomepage.Heartcutrings);
});

//Scenario - 104
Given(/^I Click the Pear cut Diamond shape$/, () => {
	const shopByShape = new Homepage;
    shopByShape.selectPearCut();
});


Then(/^I ensure clicking the Pear cut Diamond shape redirects to the Make Your Diamond Engagement rings page$/, async() => {
	const shopByShape = await browser.getUrl();
    await expect(shopByShape).toEqual(data.SectionsHomepage.Pearcutrings);
});

//Scenario - 105
Given(/^I move to the Men's Ring section$/, () => {
	const homepageSections = new Homepage;
    homepageSections.scrollToMensRing();
});


When(/^I Click the See Men's Ring button in the Homepage$/, () => {
    const homepageSections = new Homepage;
    homepageSections.clickSeeMensRing();
});


Then(/^I ensure the See Men's Ring button redirects to the Men's rings page$/, async() => {
	const homepageSections = await browser.getUrl();
    await expect(homepageSections).toEqual(data.SectionsHomepage.SeeMensRings);
});

//Scenario - 106
Given(/^I move to the Gifts for her section$/, () => {
	const homepageSections = new Homepage;
    homepageSections.scrollToSeeGiftsForHer();
});


When(/^I Click the See Gifts for her button in the Homepage$/, () => {
    const homepageSections = new Homepage;
    homepageSections.clickSeeGiftsForHer();
});


Then(/^I ensure the See Gifts for her button redirects to the Ruby rings page$/, async() => {
	const homepageSections = await browser.getUrl();
    await expect(homepageSections).toEqual(data.SectionsHomepage.SeeGiftsForHer);
});

//Scenario - 107
Given(/^I move to the Discover Diamondere section$/, () => {
	const homepageSections = new Homepage;
    homepageSections.scrollToDiscoverDiamondere();
});


When(/^I Click the Our legacy button under the Discover Diamondere section$/, () => {
	const homepageSections = new Homepage;
    homepageSections.clickOurLegacy();
});


Then(/^I ensure the Our legacy button redirects to the respective page$/, async() => {
	const homepageSections = await browser.getUrl();
    await expect(homepageSections).toEqual(data.aboutus.OurLegacy);
});

//Scenario - 108
Given(/^I move to the Let us help guide you section$/, () => {
	const homepageSections = new Homepage;
    homepageSections.scrollToLetushelpguideyou();
});


Given(/^I Click the blog articles link under the the Let us help guide you section$/, () => {
	const homepageSections = new Homepage;
    homepageSections.clickBlogArticles();
});


Then(/^I Ensure blog articles link is redirecting to the Diamondere blog page$/, async() => {
	const homepageSections = await browser.getUrl();
    await expect(homepageSections).toEqual(data.SectionsHomepage.DiamondereBlog);
});

//Scenario - 109
When(/^I Click the learn more link under Lab Vs. Natural Diamond Guide present in the Let us help guide you section$/, () => {
	const homepageSections = new Homepage;
    homepageSections.clicklabVsNaturalDiamondGuide();
});


Then(/^I Ensure learn more link under Lab Vs. Natural Diamond Guide redirecting to the page - Diff between Lab and Natural diamonds$/, async() => {
	const homepageSections = await browser.getUrl();
    await expect(homepageSections).toEqual(data.SectionsHomepage.NaturalVsLabDiamondGuide);
});

//Scenario - 110
When(/^I Click the learn more link under the Toi et Moi Ring present in Let us help guide you section$/, () => {
	const homepageSections = new Homepage;
    homepageSections.clickToiEtMoiGuide();
});


Then(/^I Ensure learn more link under the Toi et Moi Ring is redirecting to the page contains detail of Toi et Moi Rings$/, async() => {
	const homepageSections = await browser.getUrl();
    await expect(homepageSections).toEqual(data.SectionsHomepage.ToiEtMoiGuide);
});


//Scenario - 111
When(/^I Click the learn more link under the Engagement Ring Cost Guide present in Let us help guide you section$/, () => {
	const homepageSections = new Homepage;
    homepageSections.clickEngagementRingCostGuide();
});


Then(/^I Ensure learn more link under Engagement Ring Cost Guide is redirecting to the page contains detail of Engagement ring$/, async () => {
	const homepageSections = await browser.getUrl();
    await expect(homepageSections).toEqual(data.SectionsHomepage.EngagementRingCostGuide);
});

//Scenario - 112
Given(/^I move to Experience the Diamondere Difference section$/, () => {
	const homepageSections = new Homepage;
    homepageSections.scrollToDiamondereDifference();
});


When(/^I click the Why Diamondere link$/, () => {
	const homepageSections = new Homepage;
    homepageSections.clickWhyDiamondereLink();
});


Then(/^I Ensure selecting Why Diamondere link must redirect to the expected page$/, async() => {
	const homepageSections = await browser.getUrl();
    await expect(homepageSections).toEqual(data.aboutus.whydiamondere);
});


//Scenario - 113
When(/^I click the See our FAQs link$/, () => {
	const homepageSections = new Homepage;
    homepageSections.clickFAQsLink();
});


Then(/^I Ensure selecting See our FAQs link must redirect to the FAQ page$/, async() => {
	const homepageSections = await browser.getUrl();
    await expect(homepageSections).toEqual(data.SectionsHomepage.FAQsurl);
});

//Scenario - 114
When(/^I click the Sustainability link$/, () => {
	const homepageSections = new Homepage;
    homepageSections.clickSustainabilityLink();
});


Then(/^I Ensure selecting Sustainability link must redirect to the expected page$/, async() => {
	const homepageSections = await browser.getUrl();
    await expect(homepageSections).toEqual(data.aboutus.sustainability);
});

//Scenario - 115
Given(/^I click the Contact Us link$/, () => {
	const homepageSections = new Homepage;
    homepageSections.clickContactUsLink();
});


Then(/^I Ensure selecting Contact us link must redirect to the expected page$/, async() => {
	const homepageSections = await browser.getUrl();
    await expect(homepageSections).toEqual(data.SectionsHomepage.ContactUs);
});

//Scenario - 116
Given(/^I move to Find style that inspires you section$/, () => {
	const homepageSections = new Homepage;
    homepageSections.scrollToFindStyle();
});


Then(/^I ensure the five images are present$/, async() => {
	const homepageSections = new Homepage;
    await expect(homepageSections.rubyRingImage).toExist();
    await expect(homepageSections.keyPendentImage).toExist();
    await expect(homepageSections.emeraldRingImage).toExist();
    await expect(homepageSections.rubyRingDiamondBoxImage).toExist();
    await expect(homepageSections.diamondBandImage).toExist();
});


When(/^I click an image under Find style that inspires you$/, () => {
	const homepageSections = new Homepage;
    homepageSections.clickRubyRingImage();
});


Then(/^I ensure it redirects to the Diamondere Instagram page$/, async() => {
	const homepageSections = await browser.getUrl();
    await expect(homepageSections).toEqual(data.SectionsHomepage.DiamondereInstagramHome);
});


Then(/^I ensure the About us, Education, Policies, Customer care and Join the Diamondere Community sections are present$/, async() => {
	const footer = new Homepage;
    await expect(footer.sctnFooter).toExist();
    await expect(footer.sctnAboutUs).toExist();
    await expect(footer.sctnEducation).toExist();
    await expect(footer.sctnPolicies).toExist();
    await expect(footer.sctnCustomerCare).toExist();
    await expect(footer.sctnJoinDiamondereCommunity).toExist();
});


Given(/^I move to footer section$/, () => {
    const footer = new Homepage;
    footer.movetofooter();
});


When(/^I click the text link Our Legacy$/, () => {
    const footerourlegacy = new Homepage;
    footerourlegacy.selectourlegacy();
});


When(/^I click the Why Diamondere link in footer$/, () => {
    const footerwhydiamondere = new Homepage;
    footerwhydiamondere.selectwhydiamondere();
});


When(/^I click the Sustainability link in footer$/, () => {
    const footersustainability = new Homepage;
    footersustainability.selectsustainability();
});


When(/^I click the Ring Reviews text link$/, () => {
    const footerringsreview = new Homepage;
    footerringsreview.selectringsreview();
});


When(/^I click the Engagement Reviews text link$/, () => {
    const footerengagementreview = new Homepage;
    footerengagementreview.selectengagementreview();
});


When(/^I click the Men's Ring Reviews text link$/, () => {
    const footermensringreview = new Homepage;
    footermensringreview.selectmensringreview();
});


When(/^I click the text link Diamond Guide$/, () => {
    const footerdiamondguide = new Homepage;
    footerdiamondguide.selectdiamondguide();
});


When(/^I click the text link Colored Gems Guide$/, () => {
    const footercolorgemguide = new Homepage;
    footercolorgemguide.selectcolorgemguide();
});


When(/^I click the text link Birthstones Guide$/, () => {
    const footerbirthstoneguide = new Homepage;
    footerbirthstoneguide.selectbirthstoneguide();
});


When(/^I click the text link Metal Guide$/, () => {
    const footermetalguide = new Homepage;
    footermetalguide.selectmetalguide();
});


When(/^I click the text link Size Guide$/, () => {
    const footersizeguide = new Homepage;
    footersizeguide.selectsizeguide();
});


When(/^I click the text link Free Shipping$/, () => {
    const footerfreeshipping = new Homepage;
    footerfreeshipping.selectfreeshipping();
});


When(/^I click the text link Free 100 Day Returns in footer$/, () => {
    const footerfreereturn = new Homepage;
    footerfreereturn.selectfreereturn();
});


When(/^I click the text link Free Warranty$/, () => {
    const footerfreewarranty = new Homepage;
    footerfreewarranty.selectfreewarranty();
});


When(/^I click the text link Privacy Policy$/, () => {
    const footerprivacypolicy = new Homepage;
    footerprivacypolicy.selectprivacypolicy();
});


When(/^I click the text link Terms & Conditions$/, () => {
    const footertermsandcondition = new Homepage;
    footertermsandcondition.selecttermsandcondition();
});


Then(/^I ensure the Education text is present$/, async() => {
    const footereducation = new Homepage;
    await expect(footereducation.sctnEducation).toExist();
});


Then(/^I ensure the Policies text is present$/, async() => {
    const footerprivacypolicy = new Homepage;
    await expect(footerprivacypolicy.sctnPolicies).toExist();
});


Then(/^I ensure clicking the text link Our Legacy redirects to the respective page$/, async() => {
    const footerourlegacy = await browser.getUrl();
    await expect(footerourlegacy).toEqual(data.aboutus.OurLegacy)
});


Then(/^I Ensure selecting Ring Reviews link must redirect to the Reviews for Diamondere Rings page$/, async() => {
    const footerringsreview  = await browser.getUrl();
    await expect(footerringsreview).toEqual(data.aboutus.ringreviews)
});


Then(/^I Ensure selecting Engagement Reviews link must redirect to the Reviews for Diamondere Engagament Rings page$/, async() => {
    const footerengagementreview  = await browser.getUrl();
    await expect(footerengagementreview).toEqual(data.aboutus.engagementreviews)
});


Then(/^I Ensure selecting Men's Ring Reviews link must redirect to the Reviews for Diamondere Men's Rings page$/, async() => {
    const footermensringreview  = await browser.getUrl();
    await expect(footermensringreview).toEqual(data.aboutus.mensringsreviews)
});


Then(/^I ensure clicking the text link Diamond Guide redirects to the respective page$/, async() => {
    const footerdiamondguide  = await browser.getUrl();
    await expect(footerdiamondguide).toEqual(data.education.diamondguide)
});


Then(/^I ensure clicking the text link Colored Gems Guide redirects to the respective page$/, async() => {
    const footercolorgemguide  = await browser.getUrl();
    await expect(footercolorgemguide).toEqual(data.education.coloredgemguide)
});


Then(/^I ensure clicking the text link Birthstones Guide redirects to the respective page$/, async() => {
    const footerbirthstoneguide  = await browser.getUrl();
    await expect(footerbirthstoneguide).toEqual(data.education.birthstoneguide)
});


Then(/^I ensure clicking the text link Metal Guide redirects to the respective page$/, async() => {
    const footermetalguide  = await browser.getUrl();
    await expect(footermetalguide).toEqual(data.education.metalguide)
});


Then(/^I ensure clicking the text link size Guide redirects to the respective page$/, async() => {
    const footersizeguide  = await browser.getUrl();
    await expect(footersizeguide).toEqual(data.education.sizeguide)
});


Then(/^I ensure clicking the text link Free Shipping redirects to the respective page$/, async() => {
    const footerfreeshipping  = await browser.getUrl();
    await expect(footerfreeshipping).toEqual(data.policy.freeshipping)
});


Then(/^I ensure clicking the text link Free 100 Day Returns redirects to the respective page$/, async() => {
    const footerfreereturn  = await browser.getUrl();
    await expect(footerfreereturn).toEqual(data.policy.free100dayreturn)
});


Then(/^I ensure clicking the text link Free Warranty redirects to the respective page$/, async() => {
    const footerfreewarranty  = await browser.getUrl();
    await expect(footerfreewarranty).toEqual(data.policy.freewarranty)
});


Then(/^I ensure clicking the text link Privacy Policy redirects to the respective page$/, async() => {
    const footerprivacypolicy  = await browser.getUrl();
    await expect(footerprivacypolicy).toEqual(data.policy.privacypolicy)
});


Then(/^I ensure clicking the text link Terms & Conditions redirects to the respective page$/, async() => {
    const footertermsandcondition  = await browser.getUrl();
    await expect(footertermsandcondition).toEqual(data.policy.termsandcondition)
});


Given(/^I click the text link Accessibility$/, () => {
	const footer = new Homepage;
	footer.selectAccessibility();
});

///////////////////////////////////////////////////////////////////////

Then(/^I ensure clicking the text link Accessibility redirects to the respective page$/, async() => {
	const footer = await browser.getUrl();
	await expect(footer). toEqual(data.SectionsHomepage.AccessibilityUrl);
});


Given(/^I click the Contact Us link in footer$/, () => {
	const footer = new Homepage;
	footer.selectContactUs();
});


Then(/^I Ensure selecting Contact us link in footer must redirect to the expected page$/, async() => {
	const footer = await browser.getUrl();
	await expect(footer).toEqual(data.SectionsHomepage.ContactUsurl);
});


Given(/^I click the See our FAQs link in footer$/, () => {
	const footer = new Homepage;
	footer.selectFAQs();
});


Then(/^I Ensure selecting See our FAQs link in footer must redirect to the FAQ page$/, async() => {
	const footer = await browser.getUrl();
	await expect(footer).toEqual(data.SectionsHomepage.FAQsurl);
});


Given(/^I click the text link Financing Options$/, () => {
	const footer = new Homepage;
	footer.selectFinancingoptions();
});


Then(/^I ensure clicking the text link Financing Options redirects to the respective page$/, async() => {
	const footer = await browser.getUrl();
	await expect(footer).toEqual(data.SectionsHomepage.Financialoptionsurl);
});


Given(/^I click the text link Free Re-Sizing$/, () => {
	const footer = new Homepage;
	footer.selectFreeresizing();
});


Then(/^I ensure clicking the text link Free Re-Sizing redirects to the respective page$/, async() => {
	const footer = await browser.getUrl();
	await expect(footer).toEqual(data.SectionsHomepage.Freeresizingurl);
});


Given(/^I click the text link Caring For Your Jewelry$/, () => {
	const footer = new Homepage;
	footer.selectCaringforjewelry();
});


Then(/^I ensure clicking the text link Caring For Your Jewelry redirects to the respective page$/, async() => {
	const footer = await browser.getUrl();
	await expect(footer).toEqual(data.SectionsHomepage.Caringforjewelryurl);
});


Given(/^I move to the Join the Diamondere Community section$/, () => {
	const footer = new Homepage;
	footer.jointheDiamondere();
});


When(/^I click the Email address TextBox$/, () => {
	const footer = new Homepage;
	footer.selectemailaddress();
});


Then(/^I ensure clicking Email address TextBox redirects to the respective page$/, async() => {
	const footer = await browser.getUrl();
	await expect(footer).toEqual(data.SectionsHomepage.Emailfieldjoincommunityurl);
});


Given(/^I click the text link Diamondere Blog$/, () => {
	const footer = new Homepage;
	footer.selectdiamondereblog();
});


Then(/^I ensure clicking the text link Diamondere Blog redirects to the respective page$/, async() => {
	const footer = await browser.getUrl();
	await expect(footer).toEqual(data.SectionsHomepage.Diamondereblogurl);
});


Given(/^I click the Instagram Icon$/, () => {
	const footer = new Homepage;
	footer.selectInstaicon();
});


Then(/^I ensure clicking the Instagram Icon redirects to the respective page$/, async() => {
	const footer = await browser.getUrl();
	await expect(footer).toEqual(data.SectionsHomepage.Instagramurl);
});


Given(/^I click the Facebook icon$/, () => {
	const footer = new Homepage;
	footer.selectfbicon();
});


Then(/^I ensure clicking the Facebook icon redirects to the respective page$/, async() => {
	const footer = await browser.getUrl();
	await expect(footer).toEqual(data.SectionsHomepage.Facebookurl);
});


Given(/^I click the Pinterest icon$/, () => {
	const footer = new Homepage;
	footer.selectPinteresticon();
});


Then(/^I ensure clicking the Pinterest icon redirects to the respective page$/, async() => {
	const footer = await browser.getUrl();
	await expect(footer).toEqual(data.SectionsHomepage.Pinteresturl);
});


Then(/^I ensure all the payment options are present$/, async() => {
	const footer = new Homepage;
	await expect(footer.lnkDiamondereBBB).toExist();
    await expect(footer.lnkAffirm).toExist();
    await expect(footer.lnkAmericanExpress).toExist();
    await expect(footer.lnkDigicert).toExist();
    await expect(footer.lnkDinersClub).toExist();
    await expect(footer.lnkVisa).toExist();
    await expect(footer.lnkStripe).toExist();
    await expect(footer.lnkPayPal).toExist();

});

When(/^I click the Accredited icon in the payment section$/, () => {
	const footer = new Homepage;
	footer.clickAccredited();
});

Then(/^I ensure clicking the Accredited icon redirects to the Accredited business page$/, async() => {
	const footer = await browser.getUrl();
	await expect(footer).toEqual(data.Payments.AccreditedLinks);
});

When(/^I click the A plus icon in the payment section$/, () => {
	const footer = new Homepage;
	footer.clickAplus();
});

Then(/^I ensure clicking the A plus icon redirects to the Accredited business page$/, async() => {
	const footer = await browser.getUrl();
	await expect(footer).toEqual(data.Payments.AccreditedLinks);
});

When(/^I click the Norton icon in the payment section$/, () => {
	const footer = new Homepage;
	footer.clickNortonDigicert();
});

Then(/^I ensure clicking the Norton icon redirects to the Norton page$/,async () => {
	const footer = await browser.getUrl();
	await expect(footer).toEqual(data.Payments.Norton);
});

When(/^I click the Stripe icon in the payment section$/, () => {
	const footer = new Homepage;
	footer.clickStripe();
});

Then(/^I ensure clicking the Stripe icon redirects to the stripe page$/, async() => {
	const footer = await browser.getUrl();
	await expect(footer).toEqual(data.Payments.Stripe);
});

When(/^I click the paypal icon in the payment section$/, () => {
	const footer = new Homepage;
	footer.clickPaypal();
});

Then(/^I ensure clicking the paypal icon redirects to the paypal page$/, async() => {
	const footer = await browser.getUrl();
	await expect(footer).toEqual(data.Payments.paypal);
});

When(/^I click the American express icon in the payment section$/, () => {
	const footer = new Homepage;
	footer.clickAmericanexp();
});

Then(/^I ensure clicking the American express icon redirects to the American express page$/, async() => {
	const footer = await browser.getUrl();
	await expect(footer).toEqual(data.Payments.AmericanExpress);
});

When(/^I click the Master card icon in the payment section$/, () => {
	const footer = new Homepage;
	footer.clickMastercard();
});

Then(/^I ensure clicking the Master card icon redirects to the Master card page$/,async () => {
	const footer = await browser.getUrl();
	await expect(footer).toEqual(data.Payments.MasterCard);
});

When(/^I click the Diners club icon in the payment section$/, () => {
	const footer = new Homepage;
	footer.clickDinersclub();
});

Then(/^I ensure clicking the Diners club icon redirects to the Diners club page$/, async() => {
	const footer = await browser.getUrl();
	await expect(footer).toEqual(data.Payments.DinersClucb);
});

When(/^I click the Affirm icon in the payment section$/, () => {
	const footer = new Homepage;
	footer.clickAffirm();
});

Then(/^I ensure clicking the Affirm icon redirects to the Affirm page$/, async() => {
	const footer = await browser.getUrl();
	await expect(footer).toEqual(data.Payments.Affirm);
});

Then(/^I ensure the copyrights text is present$/, async() => {
	const footer = new Homepage;
    await expect(footer.sctnCopyright).toExist();
    await expect(footer.lnkDisclaimer).toExist();
});

When(/^I click the Disclaimer link in the footer section$/, async() => {
	const footer = new Homepage;
	footer.clickDisclaimer();
});

Then(/^I ensure clicking the disclaimer link redirects to the disclaimer page of Diamondere$/, async() => {
	const footer = await browser.getUrl();
	await expect(footer).toEqual(data.Payments.Disclaimer);
});
