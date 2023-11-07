const { Given, When, Then } = require('@wdio/cucumber-framework');
const BrowserUtil = require('../../CommonUtils/BrowserUtil');
const ElementUtil = require('../../CommonUtils/ElementUtil');
const dmd = require('../Configs/dmd_' + global.testEnv + '.js');
const productdetailspage = require('../PageObjects/Page3page.js');
const data = require('../TestData/productdetailsdata.json')

Given(/^I browse ring product details page$/, async() => {
	await browser.url(dmd.config.ringproducturl);
});

Given(/^I browse dannete ring product details page$/, async() => {
	await browser.url(dmd.config.danneteringproducturl);
	await BrowserUtil.wait(5)
});

Given(/^I browse couple band product details page$/, async() => {
	await browser.url(dmd.config.seasoncouplebandproducturl);
});

Given(/^I browse bracelet product details page$/, async() => {
	await browser.url(dmd.config.braceletproducturl);
});

Given(/^I browse necklace product details page$/, async() => {
	await browser.url(dmd.config.necklaceproducturl);
});
Given(/^I browse rainbow sapphire product details page$/, async() => {
	await browser.url(dmd.config.rainbowsapphireproducturl);
});
Given(/^I browse Men's ring product details page$/, async() => {
	await browser.url(dmd.config.mensringproducturl);
});

Given(/^I browse earring product details page$/, async() => {
	await browser.url(dmd.config.jolieearringproducturl);
});

Given(/^I browse Bangle product details page$/, async() => {
	await browser.url(dmd.config.bangleproducturl);
});

Given(/^I browse applewatchband metal and gemstone product details page$/, async() => {
	await browser.url(dmd.config.applewatchMGproducturl);
});

Given(/^I browse applewatchband metal product details page$/, async() => {
	await browser.url(dmd.config.applewatchMproducturl);
});

Given(/^I browse metal and gemstone charms product details page$/, async() => {
	await browser.url(dmd.config.charmsMGproducturl);
});

Given(/^I browse metal and gemstone bangle product details page$/, async() => {
	await browser.url(dmd.config.bangleMGproducturl);
});

Given(/^I browse metal charms product details page$/, async() => {
	await browser.url(dmd.config.bangleMproducturl);
});

Given(/^I browse metal and gemstone men's earring product details page$/, async() => {
	await browser.url(dmd.config.mensearringMGproducturl);
});


                         ///When///
When(/^I click Home in breadcrumb$/, async() => {
	const breadcrumbsection = new productdetailspage;
    await breadcrumbsection.selecthome();
});

When(/^I click category in breadcrumb$/, async() => {
	const categorybreadcrumbsection = new productdetailspage;
    await categorybreadcrumbsection.selectcategory();
});

When(/^I click gemstone in breadcrumb$/, async() => {
	const gemstonebreadcrumbsection = new productdetailspage;
    await gemstonebreadcrumbsection.selectgemstone();
});

When(/^I click video$/, async() => {
	const productimage = new productdetailspage;
	await productimage.clickvideo();
});

When(/^I click cross button$/, async() => {
	const productimage = new productdetailspage;
	await productimage.clickcrossbutton();
	await BrowserUtil.wait(3);
});

When(/^I click Email image$/, async() => {
	const mailimage = new productdetailspage;
	await mailimage.clickmailicon();
	await BrowserUtil.wait(5);
});

When(/^I click pinterest image$/, async() => {
	const pinterestimage = new productdetailspage;
	await pinterestimage.clickpinteresticon();
	await browser.switchWindow('https://www.pinterest.com/pin/create/button/?url=https://staging.diamondere.com/p/rings-sidestone-xylos-10847-10676?metal=14k-white-gold&stones=ruby&stones=si-diamond&media=https://images.diamondere.com/new_images/products/xylos/xylos_wg_ru_di_0.jpg&description=Xylos%20Ring%20with%20Round%20Ruby,%20SI%20Diamond%20|%200.77%20carats%20Round%20Ruby%20Sidestone%20Ring%20in%2014k%20White%20Gold%20|%20Diamondere')
});

When(/^I click facebook image$/, async() => {
	const facebookimage = new productdetailspage;
	await facebookimage.clickfacebookicon();
	await browser.switchWindow('https://www.facebook.com/')
});

When(/^I click change centre stone dropdown$/, async() => {
	const centrestonedropdown = new productdetailspage;
	await centrestonedropdown.clickchangecentrestone();
});
When(/^I click change Earring centre stone dropdown$/, async() => {
	const centrestonedropdown = new productdetailspage;
	await BrowserUtil.wait(5);
	await centrestonedropdown.clickchangeearringcentrestone();
});

When(/^I click change Mens Earring centre stone dropdown$/, async() => {
	const centrestonedropdown = new productdetailspage;
	await BrowserUtil.wait(5);
	await centrestonedropdown.clickchangemensearringcentrestone();
});


When(/^I click selected centre stone video$/, async() => {
	const centrestonevideoproduct = new productdetailspage;
	await centrestonevideoproduct.clickcentrestonevideo();
});

When(/^I click change accent stones dropdown$/, async() => {
	const accentstonesdropdown = new productdetailspage;
	await accentstonesdropdown.clickchangeaccentstones();
});

When(/^I click charms change accent stones dropdown$/, async() => {
	const accentstonesdropdown = new productdetailspage;
	await accentstonesdropdown.clickchangecharmaccentstones();
});

When(/^I click change accent stone 1 dropdown$/, async() => {
	const accentstone1dropdown = new productdetailspage;
	await accentstone1dropdown.clickchangeaccentstone1();
	await BrowserUtil.wait(3)
});

When(/^I click change necklace accent stone-1 dropdown$/, async() => {
	const accentstone1dropdown = new productdetailspage;
	await accentstone1dropdown.clickchangenaccentstone1();
});


When(/^I click selected accent stones video$/, async() => {
	const accentstone1videoproduct = new productdetailspage;
	await accentstone1videoproduct.clickaccentstonesvideo();
});

When(/^I click change accent stone-1 dropdown$/, async() => {
	const accentstone1dropdown = new productdetailspage;
	await accentstone1dropdown.clickchangeaccentstone1();
});

When(/^I click selected accent stone-1 video$/, async() => {
	const accentstone1video = new productdetailspage;
	await accentstone1video.clickaccentstone1video();
});

When(/^I click selected accent stone-2 video$/, async() => {
	const accentstone1video = new productdetailspage;
	await accentstone1video.clickaccentstone2video();
});

When(/^I click change metal dropdown$/, async() => {
	const metalarea = new productdetailspage;
	await metalarea.clickchangemetal();
});

When(/^I click select dropdown$/, async() => {
	const ringsizearea = new productdetailspage;
	await ringsizearea.clickringselect();
});

When(/^I click ring-size dropdown$/, async() => {
	const ringsizearea = new productdetailspage;
	await ringsizearea.clickringsizedropdown();
});

When(/^I click engrave dropdown$/, async() => {
	const freeengravingarea = new productdetailspage;
	await freeengravingarea.clicklnkengrave();
});

When(/^I enter text in engrave field$/, async() => {
	const freeengravingarea = new productdetailspage;
	await freeengravingarea.enterengrave();
});


When(/^I click the View matching bands$/, async() => {
	const matchingbandarea = new productdetailspage;
	await matchingbandarea.clicklnkmatchingbands();
});

When(/^I click the View Details link of Agacia$/, async() => {
	const matchingbandarea = new productdetailspage;
	await matchingbandarea.clickagaciamatchingbands();
});

When(/^I move to product details$/, async() => {
	const productdetailsarea = new productdetailspage;
	await productdetailsarea.movetoproductdetailsection();
	await BrowserUtil.wait(5);
});

When(/^I move to centre stone$/, async() => {
	const centrestonearea = new productdetailspage;
	await centrestonearea.movetocenterstonesection();
});

When(/^I select emerald diamond, heirloom quality and 0.75 size of the diamond$/, async() => {
	const centrestonearea = new productdetailspage;
	await centrestonearea.clickcenteremarldprecious();
	await BrowserUtil.wait(3);
	await centrestonearea.clickcenterheirloomquality();
	await BrowserUtil.wait(3);
	await centrestonearea.clickcenter06ct();
	await BrowserUtil.wait(3);
});
When(/^I select heirloom quality and 1.02 size of the diamond$/, async() => {
	const centrestonearea = new productdetailspage;
	await centrestonearea.clickcenterheirloomquality();
	await BrowserUtil.wait(3);
	await centrestonearea.clickcenter102ct();
	await BrowserUtil.wait(3);
});

When(/^I move to accent stones in product area$/, async() => {
	const accentstonesarea = new productdetailspage;
	await accentstonesarea.movetoaccentstonesarea();
	await BrowserUtil.wait(5);
});

When(/^I select emerald dimaond, heirloom quality in accent stones of product$/, async() => {
	const accentstonesarea = new productdetailspage;
	await accentstonesarea.clickaccentemarldprecious();
	await BrowserUtil.wait(3);
	await accentstonesarea.clickaccentstonesheirloomquality();
	await BrowserUtil.wait(3);
});


When(/^I move to accent stone 1$/, async() => {
	const accentstone1area = new productdetailspage;
	await accentstone1area.movetoaccentstone1section();
});

When(/^I select emerald stone and heirloom quality in accent stone 1 of product$/, async() => {
	const accentstone1area = new productdetailspage;
	await accentstone1area.clickaccent1emarldprecious();
	await BrowserUtil.wait(2)
	await accentstone1area.clickaccent1heirloom();
});

When(/^I move to accent stone 2$/, async() => {
	const accentstone2area = new productdetailspage;
	await accentstone2area.movetoaccentstone2section();
});

When(/^I click change accent stone-2 dropdown$/, async() => {
	const accentstone2area = new productdetailspage;
	await accentstone2area.clickchangeaccentstone2dropdown();
});
When(/^I click change necklace accent stone-2 dropdown$/, async() => {
	const accentstone2area = new productdetailspage;
	await accentstone2area.clickchangeNaccentstone2dropdown();
});
When(/^I select white sapphire stone in accent stone 2 of product$/, async() => {
	const accentstone2area = new productdetailspage;
	await accentstone2area.clickaccent2whitesapphireprecious();
});

When(/^I move to metal section$/, async() => {
	const metalarea = new productdetailspage;
	await metalarea.movetometalsection();
	await BrowserUtil.wait(5);
});

When(/^I select 18k white gold in metaltype of product$/, async() => {
	const metalarea = new productdetailspage;
	await metalarea.click18kwhitegold();
	await BrowserUtil.wait(5);
});

When(/^I select 14k yellow gold in metaltype of product$/, async() => {
	const metalarea = new productdetailspage;
	await metalarea.click14kyellowgold();
});


When(/^I move to ring size$/, async() => {
	const ringsizearea = new productdetailspage;
	await ringsizearea.movetoringsize();
	await BrowserUtil.wait(5);
});

When(/^I select for ring size dropdown$/, async() => {
	const ringsizearea = new productdetailspage;
	await ringsizearea.clickboxchoosesize();
});

When(/^I select 7UK size dropdown$/, async() => {
	const ringsizearea = new productdetailspage;
	await ringsizearea.select7UKringsize();
});

When(/^I move to free engraving$/, async() => {
	const freeengravingareaarea = new productdetailspage;
	await freeengravingareaarea.movetoengravingsection();
});

When(/^I click select his ringsize dropdown$/, async() => {
	const hissizeandbandwidtharea = new productdetailspage;
	await hissizeandbandwidtharea.clickhisringsize();
});

When(/^I click select him ringsize dropdown$/, async() => {
	const himsizeandbandwidtharea = new productdetailspage;
	await himsizeandbandwidtharea.clickhimringsize();
});

When(/^I click band width dropdown$/, async() => {
	const hissizeandbandwidtharea = new productdetailspage;
	await hissizeandbandwidtharea.clickhisbandwidthdropdown();
});

When(/^I select 7mm band width$/, async() => {
	const hissizeandbandwidtharea = new productdetailspage;
	await hissizeandbandwidtharea.clickselect7mmbandwidth();
	await BrowserUtil.wait(5);
});

When(/^I select 11 UK size$/, async() => {
	const ringsizearea = new productdetailspage;
	await ringsizearea.select11UKringsize();
});

When(/^I select 11 UK size in him size$/, async() => {
	const himringsizearea = new productdetailspage;
	await himringsizearea.select11UKhisringsize();
	await BrowserUtil.wait(5);
});

When(/^I select 11 UK size in mens size$/, async() => {
	const himringsizearea = new productdetailspage;
	await himringsizearea.select11UKringsize();
	await BrowserUtil.wait(5);
});

When(/^I enter number, alphabet and special character in special message field$/, async() => {
	const freeengravingarea = new productdetailspage;
	await freeengravingarea.enternameinengraving();
});

When(/^I click add to cart button$/, async() => {
	const cartarea = new productdetailspage;
	await cartarea.clickaddtocart();
});

When(/^I click matching band product view details link$/, async() => {
	const matchingbandarea = new productdetailspage;
	await matchingbandarea.clickmatchingbandviewdetails();
});

When(/^I click ring size of matching band product in full details popup$/, async() => {
	const matchingbandpopuparea = new productdetailspage;
	await matchingbandpopuparea.clickmatchingbandringsize();
});

When(/^I move to recently viewed area$/, async() => {
	const recentlyviewedarea = new productdetailspage;
	await recentlyviewedarea.movetorecentlyview();
});

When(/^I click product from recently viewed area$/, async() => {
	const recentlyviewedarea = new productdetailspage;
	await recentlyviewedarea.clickrecentlyviewedproduct();
	await BrowserUtil.wait(5)
});

When(/^I move to free shipping and global return area$/, async() => {
	const freeshippingarea = new productdetailspage;
	await freeshippingarea.movetofreeshippingsection();
});

When(/^I click return policy link$/, async() => {
	const freeshippingarea = new productdetailspage;
	await freeshippingarea.clicklnkmoneyguarantee();
	await BrowserUtil.wait(3)
});

When(/^I click warranty link$/, async() => {
	const freeshippingarea = new productdetailspage;
	await freeshippingarea.clicklnkwarranty();
});

When(/^I click bracelet length dropdown$/, async() => {
	const braceletarea = new productdetailspage;
	await BrowserUtil.wait(3)
	await braceletarea.clickbraceletlengthdropdown();
});

When(/^I click box bracelet length dropdown$/, async() => {
	const braceletarea = new productdetailspage;
	await braceletarea.clickboxbraceletlengthdropdown();
});

When(/^I select 6mm bracelet length$/, async() => {
	const braceletarea = new productdetailspage;
	await braceletarea.select6mmbraceletlength();
	await BrowserUtil.wait(5)
});

When(/^I select 7.5mm bracelet length$/, async() => {
	const braceletarea = new productdetailspage;
	await braceletarea.select75mmbraceletlength();
	await BrowserUtil.wait(5)
});


When(/^I click customize chain length$/, async() => {
	const necklacearea = new productdetailspage;
	await necklacearea.clickcustomizechainlength();
});


When(/^I select yellow gold metal$/, async() => {
	const metalarea = new productdetailspage
	await metalarea.Select18KYG();
});

When(/^I click 18 inch chain button$/, async() => {
	const chainarea = new productdetailspage
	await chainarea.Select18inchbutton();
});

When(/^I click custom diamond$/, async() => {
	const centerstonearea = new productdetailspage
	await centerstonearea.clickringcustomdiamond();
	await BrowserUtil.wait(5);
});

When(/^I click custom lab diamond$/, async() => {
	const centerstonearea = new productdetailspage
	await centerstonearea.clickringcustomlabdiamond();
	await BrowserUtil.wait(5);
});

When(/^I click Men'scategory in breadcrumb$/, async() => {
	const categoryarea = new productdetailspage;
    await categoryarea.clickmensringcategory();
});
When(/^I click customize earring back dropdown$/, async() => {
	const earringarea = new productdetailspage;
	await BrowserUtil.wait(5);
	await earringarea.clickearringdropdown();
	await BrowserUtil.wait(5);
});

When(/^I select 8us size$/, async() => {
	const ringsizearea = new productdetailspage;
	await ringsizearea.click8usringsize();
	await BrowserUtil.wait(5);
});

When(/^I select 11us size$/, async() => {
	const ringsizearea = new productdetailspage;
	await ringsizearea.click11usringsize();
	await BrowserUtil.wait(5);
});

When(/^I select 11us his size$/, async() => {
	const ringsizearea = new productdetailspage;
	await ringsizearea.click11ushisringsize();
	await BrowserUtil.wait(5);
});

When(/^I click choose ring size dropdown field$/, async() => {
	const chooseringsizearea = new productdetailspage;
	await chooseringsizearea.clickchooseringsize();
	await BrowserUtil.wait(5)
});


When(/^I click the Ring Size Dropdown$/, async() => {
	const chooseringsizearea = new productdetailspage;
	await chooseringsizearea.selectRingSizeDropdown();
});


When(/^I click choose mens ring size dropdown field$/, async() => {
	const chooseringsizearea = new productdetailspage;
	await chooseringsizearea.clickchoosehimringsize();
	await BrowserUtil.wait(5)
});

When(/^I select Natural AAA button in centre stone$/, async() => {
	const qualityarea = new productdetailspage;
	await qualityarea.clickcentrestonenaturalAAA();
	await BrowserUtil.wait(5)
});

When(/^I click heirloom quality and 10 cts size of centre stone$/, async() => {
	const qualityarea = new productdetailspage;
	await qualityarea.clickcenterheirloomquality();
	await BrowserUtil.wait(5)
	await qualityarea.clickcenter102ct();
	await BrowserUtil.wait(5)
});

When(/^I click screw back$/, async() => {
	const earringarea = new productdetailspage;
	await BrowserUtil.wait(5)
	await earringarea.clickscrewback();
	await BrowserUtil.wait(5)
});

When(/^I move to couple centre stone$/, async() => {
	const earringarea = new productdetailspage;
	await earringarea.movetocouplecentrestone();
	await BrowserUtil.wait(3)
});

When(/^I select Add to cart button$/, async() => {
	const productpoparea = new productdetailspage;
    await productpoparea.clickaddtocartbtn();
	await BrowserUtil.wait(5);
});
When(/^I move to Diamonderelogo$/, async() => {
	const productarea = new productdetailspage;
	await productarea.movetologo();
});


                         ///Then///

Then(/^I ensure breadcrumb for the product is present$/, async() => {
	const breadcrumbsection = new productdetailspage;
	await expect(breadcrumbsection.sectionbreadcrumb).toExist();
});


Then(/^I ensure clicking home in breadcrumb redirects to home page$/, async() => {
	const homebreadcrumbsection = await browser.getUrl()
	await expect(homebreadcrumbsection).toEqual(data.Browserlink.homeurl);
});

Then(/^I ensure clicking category in breadcrumb redirects to category page$/, async() => {
	const categorybreadcrumbsection = await browser.getUrl()
	await expect(categorybreadcrumbsection).toEqual(data.Browserlink.categoryurl);
});

Then(/^I ensure clicking gemstone in breadcrumb redirects to gemstone page$/, async() => {
	const gemstonebreadcrumbsection = await browser.getUrl()
	await expect(gemstonebreadcrumbsection).toEqual(data.Browserlink.gemstoneurl);
});

Then(/^I ensure product name, rating, price are displayed$/, async() => {
	const productdetail = new productdetailspage;
	await expect(productdetail.txtproductnameandstar).toExist();
	await expect(productdetail.txtprice).toExist();
});

Then(/^I ensure product details and total weight are displayed$/, async() => {
	const productdetail = new productdetailspage;
	await expect(productdetail.txtproductdescrip).toExist();
	await expect(productdetail.txtproducttotalweight).toExist();
});

Then(/^I ensure main image, sub image are displayed$/, async() => {
	const productimage = new productdetailspage;
	await expect(productimage.imgelargedright).toExist();
	await expect(productimage.subimagesection).toExist();
	await expect(productimage.lnkimgsmallright).toExist();
	await expect(productimage.lnkproductvideo).toExist();
	await expect(productimage.lnkimgpackaging).toExist();
	await expect(productimage.lnkimgcertificate).toExist();
});

Then(/^I ensure video is displayed if video is available$/, async() => {
	const productimage = new productdetailspage;
	await expect(productimage.lnkproductvideo).toExist();
});

Then(/^I ensure basic product video pop is displayed$/, async() => {
	const productimage = new productdetailspage;
	await expect(productimage.productvideopopup).toExist();
});

Then(/^I ensure video pop is closed$/, async() => {
	const productimage = new productdetailspage;
	await expect(productimage.productvideopopup).not.toExist();
});

Then(/^I ensure Email image is displayed$/, async() => {
	const mailimage = new productdetailspage;
	await expect(mailimage.mailicon).toExist();
});

Then(/^I ensure page redirects to email$/, async() => {
	const mailimage = await browser.getUrl()
	await expect(mailimage).toEqual(data.Socialnetworklink.mailurl);
});

Then(/^I ensure pinterest image is displayed$/, async() => {
	const pinterestimage = new productdetailspage;
	await expect(pinterestimage.pinteresticon).toExist();
	
});

Then(/^I ensure page redirects to pintrest$/, async() => {
	const pinterestimage = await browser.getUrl()
	await expect(pinterestimage).toEqual(data.Socialnetworklink.pinteresturl);
});

Then(/^I ensure facebook image is displayed$/, async() => {
	const facebookimage = new productdetailspage;
	await expect(facebookimage.facebookicon).toExist();
});

Then(/^I ensure page redirects to facebook$/, async() => {
	const facebbookimage = new productdetailspage;
	await expect(facebbookimage.facebookPage).toExist();
	//await expect(facebbookimage).toEqual(data.Socialnetworklink.facebookurl);
});

Then(/^I ensure add to cart and request custom order buttons are displayed$/, async() => {
	const productdetailbutton = new productdetailspage;
	await expect(productdetailbutton.btnaddtocart).toExist();
	await expect(productdetailbutton.btnrequestcustomorder).toExist();
});

Then(/^I ensure delivery details are displayed$/, async() => {
	const productdetailbutton = new productdetailspage;
	await expect(productdetailbutton.txtexpecteddelivery).toExist();
});

Then(/^I ensure centre stone area is displayed$/, async() => {
	const centrestoneproductdetail = new productdetailspage;
	await expect(centrestoneproductdetail.sectioncenterstone).toExist();
});
Then(/^I ensure couple centre stone area is displayed$/, async() => {
	const centrestoneproductdetail = new productdetailspage;
	await expect(centrestoneproductdetail.csectioncenterstone).toExist();
});
Then(/^I ensure  Men's Earring centre stone area is displayed$/, async() => {
	const centrestoneproductdetail = new productdetailspage;
	await expect(centrestoneproductdetail.MEsectioncenterstone).toExist();
});
Then(/^I ensure Earring centre stone name is displayed$/, async() => {
	const centrestoneproductdetail = new productdetailspage;
	await expect(centrestoneproductdetail.Etxtcenterstone).toExist();
});
Then(/^I ensure Earring centre stone details are displayed$/, async() => {
	const centrestoneproductdetail = new productdetailspage;
	await expect(centrestoneproductdetail.Etxtdesccenterstone).toExist();
});
Then(/^I ensure Earring change centre stone dropdown is displayed$/, async() => {
	const centrestoneproductdropdown = new productdetailspage;
	await expect(centrestoneproductdropdown.Elnkcentrestonedropdown).toExist();
});

Then(/^I ensure Men's Earring centre stone name is displayed$/, async() => {
	const centrestoneproductdetail = new productdetailspage;
	await expect(centrestoneproductdetail.MEtxtcenterstone).toExist();
});
Then(/^I ensure Men's Earring centre stone details are displayed$/, async() => {
	const centrestoneproductdetail = new productdetailspage;
	await expect(centrestoneproductdetail.MEtxtdesccenterstone).toExist();
});
Then(/^I ensure Earring change centre stone dropdown is displayed$/, async() => {
	const centrestoneproductdropdown = new productdetailspage;
	await expect(centrestoneproductdropdown.Elnkcentrestonedropdown).toExist();
});

Then(/^I ensure centre stone name is displayed$/, async() => {
	const centrestoneproductdetail = new productdetailspage;
	await expect(centrestoneproductdetail.txtcenterstone).toExist();
});

Then(/^I ensure centre stone details are displayed$/, async() => {
	const centrestoneproductdetail = new productdetailspage;
	await expect(centrestoneproductdetail.txtdesccenterstone).toExist();
});

Then(/^I ensure change centre stone dropdown is displayed$/, async() => {
	const centrestoneproductdropdown = new productdetailspage;
	await expect(centrestoneproductdropdown.lnkcentrestonedropdown).toExist();
});

Then(/^I ensure change Mens Earring centre stone dropdown is displayed$/, async() => {
	const centrestoneproductdropdown = new productdetailspage;
	await expect(centrestoneproductdropdown.MElnkcentrestonedropdown).toExist();
});

Then(/^I ensure different centre stones are displayed$/, async() => {
	const centrestoneproductdetail = new productdetailspage;
	await expect(centrestoneproductdetail.cssectiondiamond).toExist();
	await expect(centrestoneproductdetail.cssectionprecious).toExist();
	await expect(centrestoneproductdetail.cssectionsemiprecious).toExist();
	await expect(centrestoneproductdetail.cssectionlabcreated).toExist();
});

Then(/^I ensure selected centre stone properties are displayed$/, async() => {
	const centrestoneproductdetail = new productdetailspage;
	await expect(centrestoneproductdetail.centrestoneproperties).toExist();
});

Then(/^I ensure quality of the stone area is displayed$/, async() => {
	const centrestonequalityproduct = new productdetailspage;
	await expect(centrestonequalityproduct.centrestonequalitysection).toExist();
});

Then(/^I ensure quality of the stone area is not displayed$/, async() => {
	const centrestonequalityproduct = new productdetailspage;
	await expect(centrestonequalityproduct.centrestonequalitysection).not.toExist();
});


Then(/^I ensure size of the stone area is displayed$/, async() => {
	const centrestonesizeproduct = new productdetailspage;
	await expect(centrestonesizeproduct.centrestonesizesection).toExist();
});

Then(/^I ensure size of the stone area is not displayed$/,async() => {
	const centrestonesizeproduct = new productdetailspage;
	await expect(centrestonesizeproduct.centrestonesizesection).not.toExist();
});


Then(/^I ensure selected carat size of the stone text is displayed$/, async() => {
	const centrestonesizeproduct = new productdetailspage;
	await expect(centrestonesizeproduct.centrestonetxtqualityandsize).toExist();
});

Then(/^I ensure selected centre stone video popup is displayed$/, async() => {
	const centrestonevideoproduct = new productdetailspage;
	await expect(centrestonevideoproduct.productvideopopup).toExist();
});

Then(/^I ensure centre stone video is displayed$/, async() => {
	const centrestonevideoproduct = new productdetailspage;
	await expect(centrestonevideoproduct.centrestonevideo).toExist();
});

Then(/^I ensure accent stones area is displayed$/, async() => {
	const accentstonesproductdetail = new productdetailspage;
	await expect(accentstonesproductdetail.sectionaccentstones).toExist();
});

Then(/^I ensure charms accent stones area is displayed$/, async() => {
	const accentstonesproductdetail = new productdetailspage;
	await expect(accentstonesproductdetail.sectioncharmaccentstone).toExist();
});
Then(/^I ensure charms accent stones name is displayed$/, async() => {
	const accentstonesproductdetail = new productdetailspage;
	await expect(accentstonesproductdetail.txtcharmaccentstones).toExist();
});	
Then(/^I ensure charms accent stones details are displayed$/, async() => {
	const accentstonesproductdetail = new productdetailspage;
	await expect(accentstonesproductdetail.txtcharmaccentstonesdesc).toExist();
});
Then(/^I ensure accent stones name is displayed$/, async() => {
	const accentstonesproductdetail = new productdetailspage;
	await expect(accentstonesproductdetail.txtaccentstones).toExist();
});

Then(/^I ensure accent stones details are displayed$/, async() => {
	const accentstonesproductdetail = new productdetailspage;
	await expect(accentstonesproductdetail.txtaccentstonesdesc).toExist();
});

Then(/^I ensure change accent stones dropdown is displayed$/, async() => {
	const accentstonesproductdropdown = new productdetailspage;
	await expect(accentstonesproductdropdown.lnkchangeaccentstones).toExist();
});

Then(/^I ensure change charm accent stones dropdown is displayed$/, async() => {
	const accentstonesproductdropdown = new productdetailspage;
	await expect(accentstonesproductdropdown.lnkchangecharmaccentstones).toExist();
});

Then(/^I ensure different accent stones are displayed$/, async() => {
	const accentstonesproductdropdown = new productdetailspage;
	await expect(accentstonesproductdropdown.assectiondiamond).toExist();
	await expect(accentstonesproductdropdown.assectionprecious).toExist();
});


Then(/^I ensure selected accent stones properties are displayed$/, async() => {
	const accentstonesproductdetail = new productdetailspage;
	await expect(accentstonesproductdetail.accentstonesproperties).toExist();
});

Then(/^I ensure selected applewatch accent stones properties are displayed$/, async() => {
	const accentstonesproductdetail = new productdetailspage;
	await expect(accentstonesproductdetail.awaccentstonesproperties).toExist();
});

Then(/^I ensure selected necklace accent stone 2 properties are displayed$/, async() => {
	const accentstonesproductdetail = new productdetailspage;
	await expect(accentstonesproductdetail.naccentstone2properties).toExist();
});


Then(/^I ensure selected carat size of the accent stones text is displayed$/, async() => {
	const accentstonessizeproduct = new productdetailspage;
	await expect(accentstonessizeproduct.accentstonestxtqualityandsize).toExist();
});

Then(/^I ensure selected applewatch carat size of the accent stones text is displayed$/, async() => {
	const accentstonessizeproduct = new productdetailspage;
	await expect(accentstonessizeproduct.awaccentstonestxtqualityandsize).toExist();
});
Then(/^I ensure selected accent stones video is displayed$/, async() => {
	const accentstonesvideoproduct = new productdetailspage;
	await expect(accentstonesvideoproduct.accentstonesvideo).toExist();
});

Then(/^I ensure selected accent stones video popup is displayed$/, async() => {
	const accentstonesvideoproduct = new productdetailspage;
	await expect(accentstonesvideoproduct.productvideopopup).toExist();
});

Then(/^I ensure necklace accent stone1 area is displayed$/, async() => {
	const accentstone1productdetail = new productdetailspage;
	await expect(accentstone1productdetail.sectionNAccentstone1).toExist();
});

Then(/^I ensure necklace accent stone1 name is displayed$/, async() => {
	const accentstonesproductdetail = new productdetailspage;
	await expect(accentstonesproductdetail.txtNaccentstone1).toExist();
});

Then(/^I ensure necklace accent stone1 details are displayed$/, async() => {
	const accentstone1productdetail = new productdetailspage;
	await expect(accentstone1productdetail.txtdescNaccentstone1).toExist();
});

Then(/^I ensure necklace accent stone2 area is displayed$/, async() => {
	const accentstone2productdetail = new productdetailspage;
	await expect(accentstone2productdetail.sectionNaccentstone2).toExist();
});

Then(/^I ensure necklace accent stone2 name is displayed$/, async() => {
	const accentstone2productdetail = new productdetailspage;
	await expect(accentstone2productdetail.txtNaccentstone2).toExist();
});

Then(/^I ensure necklace accent stone2 details are displayed$/, async() => {
	const accentstone2productdetail = new productdetailspage;
	await expect(accentstone2productdetail.txtdescNaccentstone2).toExist();
});












Then(/^I ensure accent stone-1 area is displayed$/, async() => {
	const accentstone1product = new productdetailspage;
	await expect(accentstone1product.sectionAccentstone1).toExist();
	await expect(accentstone1product.imgaccentstone1).toExist();
});
Then(/^I ensure bangle accent stone-1 area is not displayed$/,async() => {
	const accentstone1product = new productdetailspage;
	await expect(accentstone1product.sectionAccentstone1).not.toExist();
});
Then(/^I ensure accent stones-1 name is displayed$/, async() => {
	const accentstone1product = new productdetailspage;
	await expect(accentstone1product.txtaccentstone1).toExist();
});

Then(/^I ensure accent stone-1 details are displayed$/, async() => {
	const accentstone1product = new productdetailspage;
	await expect(accentstone1product.txtdescaccentstone1).toExist();
});

Then(/^I ensure change accent stone-1 dropdown is displayed$/, async() => {
	const accentstone1product = new productdetailspage;
	await expect(accentstone1product.lnkchangeaccentstone1).toExist();
});

Then(/^I ensure different stone-1 are displayed$/, async() => {
	const accentstone1product = new productdetailspage;
	await expect(accentstone1product.as1sectiondiamond).toExist();
	await expect(accentstone1product.as1sectionprecious).toExist();
	await expect(accentstone1product.as1sectionsemiprecious).toExist();
	await expect(accentstone1product.as1sectionlabcreated).toExist();
});

Then(/^I ensure selected accent stone-1 properties are displayed$/, async() => {
	const accentstone1product = new productdetailspage;
	await expect(accentstone1product.accentstone1properties).toExist();
});

Then(/^I ensure quality of the accent stone1 area is displayed$/, async() => {
	const accentstone1product = new productdetailspage;
	await expect(accentstone1product.accentstone1qualitysection).toExist();
	await expect(accentstone1product.txtheadingselectqualityofaccentstone1).toExist();
	await expect(accentstone1product.as1btnqualityAAA).toExist();
	await expect(accentstone1product.as1btnqualityAAAA).toExist();
	await expect(accentstone1product.as1btnqualityHeirloom).toExist();

});
Then(/^I ensure selected carat size of the accent stone-1 text is displayed$/, async() => {
	const accentstone1product = new productdetailspage;
	await expect(accentstone1product.accentstone1txtqualityandsize).toExist();
});

Then(/^I ensure selected accent stone-1 video is displayed$/, async() => {
	const accentstone1product = new productdetailspage;
	await expect(accentstone1product.accentstone1video).toExist();
});

Then(/^I ensure selected applewatch accent stone-1 video is displayed$/, async() => {
	const awaccentstone1product = new productdetailspage;
	await expect(awaccentstone1product.awaccentstone1video).toExist();
});


Then(/^I ensure selected accent stone-1 video popup is displayed$/, async() => {
	const accentstone1video = new productdetailspage;
	await expect(accentstone1video.productvideopopup).toExist();
});

Then(/^I ensure accent stone-2 name is displayed$/, async() => {
	const accentstone2product = new productdetailspage;
	await expect(accentstone2product.txtaccentstone2).toExist();
});

Then(/^I ensure accent stone-2 details are displayed$/, async() => {
	const accentstone2product = new productdetailspage;
	await expect(accentstone2product.txtdescaccentstone2).toExist();
});

Then(/^I ensure change accent stone-2 dropdown is displayed$/, async() => {
	const accentstone2product = new productdetailspage;
	await expect(accentstone2product.lnkchangeaccentstone2).toExist();
});

Then(/^I ensure different accent stone-2 are displayed$/, async() => {
	const accentstone2product = new productdetailspage;
	await expect(accentstone2product.as2sectiondiamond).toExist();
	await expect(accentstone2product.as2sectionprecious).toExist();
	await expect(accentstone2product.as2sectionsemiprecious).toExist();
});

Then(/^I ensure selected accent stone-2 properties are displayed$/, async() => {
	const accentstone2product = new productdetailspage;
	await expect(accentstone2product.accentstone2properties).toExist();
});

Then(/^I ensure selected carat size of the accent stone-2 text is displayed$/, async() => {
	const accentstone2product = new productdetailspage;
	await expect(accentstone2product.accentstone2txtqualityandsize).toExist();
});

Then(/^I ensure selected accent stone-2 video is displayed$/, async() => {
	const accentstone2product = new productdetailspage;
	await expect(accentstone2product.accentstone2video).toExist();
});

Then(/^I ensure selected accent stone-2 video popup is displayed$/, async() => {
	const accentstone2product = new productdetailspage;
	await expect(accentstone2product.productvideopopup).toExist();
})

Then(/^I ensure metal section is displayed$/, async() => {
	const metalarea = new productdetailspage;
	await expect(metalarea.sectionmetal).toExist();
	await expect(metalarea.img14kmetal).toExist();
});

Then(/^I ensure metal name is displayed$/, async() => {
	const metalarea = new productdetailspage;
	await expect(metalarea.txt14kmetalname).toExist();
});

Then(/^I ensure metal details are displayed$/, async() => {
	const metalarea = new productdetailspage;
	await expect(metalarea.metaldesc).toExist();
});

Then(/^I ensure change metal dropdown is displayed$/, async() => {
	const metalarea = new productdetailspage;
	await expect(metalarea.lnkchangemetal).toExist();
});

Then(/^I ensure platinum, 18k, 14k, 10k, silver metal type are displayed$/, async() => {
	const metalarea = new productdetailspage;
	await expect(metalarea.Clnk18kWG).toExist();
	await expect(metalarea.Clnk18kYG).toExist();
	await expect(metalarea.Clnk18kRG).toExist();
	await expect(metalarea.Clnk18kBG).toExist();
	await expect(metalarea.Clnk14kWG).toExist();
	await expect(metalarea.Clnk14kYG).toExist();
	await expect(metalarea.Clnk14kRG).toExist();
	await expect(metalarea.Clnk14kBG).toExist();
	await expect(metalarea.Clnk10kWG).toExist();
	await expect(metalarea.Clnk10kYG).toExist();
	await expect(metalarea.Clnk10kRG).toExist();
	await expect(metalarea.Clnk10kBG).toExist();
	await expect(metalarea.ClnkSLV).toExist();
	await expect(metalarea.Clnkplatinum).toExist();
});

Then(/^I ensure Bangle 18k, 14k type are displayed$/, async() => {
	const metalarea = new productdetailspage;
	await expect(metalarea.Blnk18kWG).toExist();
	await expect(metalarea.Blnk18kYG).toExist();
	await expect(metalarea.Blnk18kRG).toExist();
	await expect(metalarea.Blnk18kBG).toExist();
	await expect(metalarea.Blnk14kWG).toExist();
	await expect(metalarea.Blnk14kYG).toExist();
	await expect(metalarea.Blnk14kRG).toExist();
	await expect(metalarea.Blnk14kBG).toExist();
});


Then(/^I ensure selected metal properties are displayed$/, async() => {
	const metalarea = new productdetailspage;
	await expect(metalarea.metalpropeties).toExist();
});

Then(/^I ensure ring size area is displayed$/, async() => {
	const ringsizearea = new productdetailspage;
	await expect(ringsizearea.sectionringsize).toExist();
	await expect(ringsizearea.txtringsize).toExist();
});

Then(/^I ensure free resizing text is displayed$/, async() => {
	const ringsizearea = new productdetailspage;
	await expect(ringsizearea.txtdescringsize).toExist();
});

Then(/^I ensure select dropdown is displayed$/, async() => {
	const ringsizearea = new productdetailspage;
	await expect(ringsizearea.lnkringselect).toExist();
});

Then(/^I ensure ring-size choose options dropdown is displayed$/, async() => {
	const ringsizearea = new productdetailspage;
	await expect(ringsizearea.boxchoosesize).toExist();
});

Then(/^I ensure his ring-size choose options dropdown is displayed$/, async() => {
	const ringsizearea = new productdetailspage;
	await expect(ringsizearea.boxChooseHisringsize).toExist();
});


Then(/^I ensure ring-size guide are displayed$/, async() => {
	const ringsizearea = new productdetailspage;
	await expect(ringsizearea.lnkRingSizeGuide).toExist();
});

Then(/^I ensure free engraving area is displayed$/, async() => {
	const freeengravingarea = new productdetailspage;
	await expect(freeengravingarea.sectionengraving).toExist();
	await expect(freeengravingarea.txtfreeengraving).toExist();
	await expect(freeengravingarea.txtyourspecialmessage).toExist();
});

Then(/^I ensure special message field is displayed$/, async() => {
	const freeengravingarea = new productdetailspage;
	await expect(freeengravingarea.specialmessagearea).toExist();
});

Then(/^I ensure maximum text limit displayed$/, async() => {
	const freeengravingarea = new productdetailspage;
	await expect(freeengravingarea.txtvalidation).toExist();
});

Then(/^I ensure special icons are displayed$/, async() => {
	const freeengravingarea = new productdetailspage;
	await expect(freeengravingarea.btnfilledheartsym).toExist();
	await expect(freeengravingarea.btnhollowheartsym).toExist();
	await expect(freeengravingarea.btninfinitysym).toExist();
	await expect(freeengravingarea.btnstarsym).toExist();
	await expect(freeengravingarea.btnAndsym).toExist();
});

Then(/^I ensure the View matching bands link is displayed$/, async() => {
	const matchingbandarea = new productdetailspage;
	await expect(matchingbandarea.lnkviewmatchingbands).toExist();
});

Then(/^I ensure the View matching bands moves to the matching bands section$/, async() => {
	const matchingbandarea = new productdetailspage;
	await expect(matchingbandarea.sctnMatchingBands).toExist();
});

Then(/^I ensure product name is displayed$/, async() => {
	const productdetailsarea = new productdetailspage;
	await expect(productdetailsarea.txtheadingproductdetails).toExist();
	await expect(productdetailsarea.txtheadingproductname).toExist();
});


Then(/^I ensure default product details is displayed$/, async() => {
	const productdetailsarea = new productdetailspage;
	await expect(productdetailsarea.txtdescription).toExist();
});

Then(/^I ensure centre stone column is displayed$/, async() => {
	const pdcentrestonearea = new productdetailspage;
	await expect(pdcentrestonearea.sectionCentrestone).toExist();
});

Then(/^I ensure default type,quality,size,weight in centre stone is displayed$/, async() => {
	const pdcentrestonearea = new productdetailspage;
	await expect(pdcentrestonearea.centrestonetype).toExist();
	await expect(pdcentrestonearea.centrestonequality).toExist();
	await expect(pdcentrestonearea.centrestonesize).toExist();
	await expect(pdcentrestonearea.centrestoneweight).toExist();
});


Then(/^I ensure centrestone accent stones column is displayed$/, async() => {
	const  pdaccentstonesarea = new productdetailspage;
	await expect(pdaccentstonesarea.sectionAccentstones).toExist();
});

Then(/^I ensure accent stone 1 column is displayed$/, async() => {
	const  pdaccentstone1area = new productdetailspage;
	await expect(pdaccentstone1area.sectionAccentstone1).toExist();
});


Then(/^I ensure default type, quality, weight in accent stones is displayed$/, async() => {
	const pdaccentstonesarea = new productdetailspage;
	await expect(pdaccentstonesarea.accentstonestype).toExist();
	await expect(pdaccentstonesarea.accentstonesquality).toExist();
	await expect(pdaccentstonesarea.accentstonesweight).toExist();
});

Then(/^I ensure accent stones column is displayed$/, async() => {
	const pdaccentstones1area = new productdetailspage;
	await expect(pdaccentstones1area.sectionAccentstones).toExist();
});

Then(/^I ensure default type, quality, weight in accent stone 1 is displayed$/, async() => {
	const pdaccentstones1area = new productdetailspage;
	await expect(pdaccentstones1area.accentstone1type).toExist();
	await expect(pdaccentstones1area.accentstone1quality).toExist();
	await expect(pdaccentstones1area.accentstone1size).toExist();
	await expect(pdaccentstones1area.accentstone1weight).toExist();
});

Then(/^I ensure accent stone 2 column is displayed$/, async() => {
	const pdaccentstones2area = new productdetailspage;
	await expect(pdaccentstones2area.sectionAccentstone2).toExist();
});

Then(/^I ensure default type, quality, weight in accent stone 2 is displayed$/, async() => {
	const pdaccentstones2area = new productdetailspage;
	await expect(pdaccentstones2area.accentstone2type).toExist();
	await expect(pdaccentstones2area.accentstone2quality).toExist();
	await expect(pdaccentstones2area.accentstone2size).toExist();
	await expect(pdaccentstones2area.accentstone2weight).toExist();
});

Then(/^I ensure setting column is displayed$/, async() => {
	const pdsettingarea = new productdetailspage;
	await expect(pdsettingarea.sectionSetting).toExist();
});

Then(/^I ensure default metal, ring thickness in setting is displayed$/, async() => {
	const pddannetesettingarea = new productdetailspage;
	await expect(pddannetesettingarea.settingmetal).toExist();
	await expect(pddannetesettingarea.settingringthickness).toExist();
});

Then(/^I ensure default metal in setting is displayed and ring thickness is not displayed$/, async() => {
	const pdxylossettingarea = new productdetailspage;
	await expect(pdxylossettingarea.settingmetal).toExist();
	await expect(pdxylossettingarea.settingringthickness).not.toExist();
});

Then(/^I ensure ring size column is displayed$/, async() => {
	const pdringsizearea = new productdetailspage;
	await expect(pdringsizearea.sectionringsize).toExist();
});

Then(/^I ensure not selected text in ring size column is displayed$/, async() => {
	const pdringsizearea = new productdetailspage;
	await expect(pdringsizearea.defaultringsizenotselectedtext).toExist();
});

Then(/^I ensure free engraving column is displayed$/, async() => {
	const pdengravingarea = new productdetailspage;
	await expect(pdengravingarea.sectionengraving).toExist();
});

Then(/^I ensure special message text in default free engraving column is displayed$/, async() => {
	const pdengravingarea = new productdetailspage;
	await expect(pdengravingarea.defaultengravingtext).toExist();
});

Then(/^I ensure changed type,quality,size,weight in centre stone product display is displayed$/, async() => {
	const pdcentrestonearea = new productdetailspage;
	const ctypetext = await $('//span[contains(text(),"Center stone")]/following::div[1]');
	const cctypetext= await ctypetext.getText()
	const ctypekeyword = "Emerald";
	const ctypestartIndex = cctypetext.indexOf(ctypekeyword);
	const ctypeextractedWord = ctypestartIndex !== -1 ? cctypetext.substring(ctypestartIndex, ctypestartIndex + ctypekeyword.length) : "";
	await expect(ctypeextractedWord).toEqual(data.ProductDetails['Centerstone-Type']);

	const cqualitytext = await $('//span[contains(text(),"Center stone")]/following::div[2]');
	const ccqualitytext = await cqualitytext.getText()
	const cqualitykeyword = "Heirloom";
	const cqualitystartIndex = ccqualitytext.indexOf(cqualitykeyword);
	const cqualityextractedWord = cqualitystartIndex !== -1 ? ccqualitytext.substring(cqualitystartIndex, cqualitystartIndex + cqualitykeyword.length) : "";
	await expect(cqualityextractedWord).toEqual(data.ProductDetails['Centerstone-Quality']);
	await expect(pdcentrestonearea.changedcentrestonesize).toExist();
	await expect(pdcentrestonearea.changedcentrestoneweight).toExist();
});

Then(/^I ensure changed type,quality,weight in accent stones column is displayed$/, async() => {
	const pdcentrestonearea = new productdetailspage;
	const atypetext = await $('//span[contains(text(),"Accent Stones")]/following::div[1]');
	const actypetext= await atypetext.getText()
	const atypekeyword = "Emeralds";
	const atypestartIndex = actypetext.indexOf(atypekeyword);
	const atypeextractedWord = atypestartIndex !== -1 ? actypetext.substring(atypestartIndex, atypestartIndex + atypekeyword.length) : "";
	await expect(atypeextractedWord).toEqual(data.ProductDetails['Accentstones-Type']);

	const aqualitytext = await $('(//div[contains(text(),"QUALITY GRADE")])[2]');
	const acqualitytext = await aqualitytext.getText()
	const aqualitykeyword = "Heirloom";
	const aqualitystartIndex = acqualitytext.indexOf(aqualitykeyword);
	const aqualityextractedWord = aqualitystartIndex !== -1 ? acqualitytext.substring(aqualitystartIndex, aqualitystartIndex + aqualitykeyword.length) : "";
	await expect(aqualityextractedWord).toEqual(data.ProductDetails['Accentstones-Quality']);
	await expect(pdcentrestonearea.changedaccentstonesweight).toExist();
});

Then(/^I ensure changed type,quality,weight in accent stone 1 column is displayed$/, async() => {
	const pdaccentstone1area = new productdetailspage;
	const a1typetext = await $('//span[contains(text(),"Accent Stones 1")]/following::div[1]');
	const a1ctypetext= await a1typetext.getText()
	const a1typekeyword = "Emeralds";
	const a1typestartIndex = a1ctypetext.indexOf(a1typekeyword);
	const a1typeextractedWord = a1typestartIndex !== -1 ? a1ctypetext.substring(a1typestartIndex, a1typestartIndex + a1typekeyword.length) : "";
	await expect(a1typeextractedWord).toEqual(data.ProductDetails['Accentstone1-Type']);

	const a1qualitytext = await $('(//div[contains(text(),"QUALITY GRADE")])[1]');
	const a1cqualitytext = await a1qualitytext.getText()
	const a1qualitykeyword = "Heirloom";
	const a1qualitystartIndex = a1cqualitytext.indexOf(a1qualitykeyword);
	const a1qualityextractedWord = a1qualitystartIndex !== -1 ? a1cqualitytext.substring(a1qualitystartIndex, a1qualitystartIndex + a1qualitykeyword.length) : "";
	await expect(a1qualityextractedWord).toEqual(data.ProductDetails['Accentstone1-Quality']);
	await expect(pdaccentstone1area.changedaccentstone1size).toExist();
	await expect(pdaccentstone1area.changedaccentstone1weight).toExist();
});

Then(/^I ensure changed type,quality,weight in accent stone 2 column is displayed$/, async() => {
	const pdaccentstone2area = new productdetailspage;
	const a2typetext = await $('//span[contains(text(),"Accent Stones 2")]/following::div[1]');
	const a2ctypetext= await a2typetext.getText()
	const a2typekeyword = "White Sapphires";
	const a2typestartIndex = a2ctypetext.indexOf(a2typekeyword);
	const a2typeextractedWord = a2typestartIndex !== -1 ? a2ctypetext.substring(a2typestartIndex, a2typestartIndex + a2typekeyword.length) : "";
	await expect(a2typeextractedWord).toEqual(data.ProductDetails['Accentstone2-Type']);

    await expect(pdaccentstone2area.changedaccentstone2quality).toExist();  
	await expect(pdaccentstone2area.changedaccentstone2weight).toExist();
	
	const a2metaltext = await $('//div[contains(text(), "METAL")]');
	const a2cmetaltext= await a2metaltext.getText()
	const a2metalkeyword = "14k White Gold";
	const a2metalstartIndex = a2cmetaltext.indexOf(a2metalkeyword);
	const a2metalextractedWord = a2metalstartIndex !== -1 ? a2cmetaltext.substring(a2metalstartIndex, a2metalstartIndex + a2metalkeyword.length) : "";
	await expect(a2metalextractedWord).toEqual(data.ProductDetails['Accentstone2-Metal']);
	
	const a2RTtext = await $('//div[contains(text(), "RING THICKNESS")]');
	const a2cRTtext= await a2RTtext.getText()
	const a2RTkeyword = "2.4 mm";
	const a2RTstartIndex = a2cRTtext.indexOf(a2RTkeyword);
	const a2RTextractedWord = a2RTstartIndex !== -1 ? a2cRTtext.substring(a2RTstartIndex, a2RTstartIndex + a2RTkeyword.length) : "";
	await expect(a2RTextractedWord).toEqual(data.ProductDetails['Accentstone2-RingThickness']);
});

Then(/^I ensure changed metal name in metal column is displayed$/, async() => {
	const metalarea = new productdetailspage;
	//await expect(metalarea.setting14ktwhitegold).not.toExist();
	await expect(metalarea.setting18ktwhitegold).toExist();
});

Then(/^I ensure changed ring size in ring size column is displayed$/, async() => {
	const ringsizearea = new productdetailspage;
	await expect(ringsizearea.defaultringsizenotselectedtext).not.toExist();
	await expect(ringsizearea.uk7ringsizetext).toExist();
});

Then(/^I ensure free engrave column is displayed$/, async() => {
	const engravingarea = new productdetailspage;
	await expect(engravingarea.defaultengravingtext).toExist();
});

Then(/^I ensure changed free engrave text in free engrave column is displayed$/, async() => {
    const engravingarea = new productdetailspage;
	await expect(engravingarea.defaultengravingtext).not.toExist();
});

Then(/^I ensure his ring size and band width text is displayed$/, async() => {
	const hissizeandbandwidtharea = new productdetailspage;
	await expect(hissizeandbandwidtharea.txtheadingHisringsize).toExist();
});

Then(/^I ensure select his ringsize dropdown is displayed$/, async() => {
	const hissizeandbandwidtharea = new productdetailspage;
	await expect(hissizeandbandwidtharea.lnkcouplebandhimselect).toExist();
});

Then(/^I ensure his ring size dropdown$/, async() => {
	const hissizeandbandwidtharea = new productdetailspage;
	await expect(hissizeandbandwidtharea.boxChooseHisringsize);
});

Then(/^I ensure band width text is displayed$/, async() => {
	const hissizeandbandwidtharea = new productdetailspage;
	await expect(hissizeandbandwidtharea.txtheadingBandwidth);
});

Then(/^I ensure band width dropdown are displayed$/, async() => {
	const hissizeandbandwidtharea = new productdetailspage;
	await expect(hissizeandbandwidtharea.boxchoosebandwidth);
});

Then(/^I ensure 6mm default is selected in bandwidth$/, async() => {
	const hissizeandbandwidtharea = new productdetailspage;
	await expect(hissizeandbandwidtharea.defaultselected6mmbandwidth);
});


Then(/^I ensure 55mm default is selected in bandwidth$/, async() => {
	const hissizeandbandwidtharea = new productdetailspage;
	await expect(hissizeandbandwidtharea.defaultselected55mmbandwidth);
});

Then(/^I ensure price change text for changing bandwidth is displayed$/, async() => {
	const hissizeandbandwidtharea = new productdetailspage;
	await expect(hissizeandbandwidtharea.bandwidthpricediffertext);
});

Then(/^I ensure price change text for changing ringsize and bandwidth is displayed$/, async() => {
	const hissizeandbandwidtharea = new productdetailspage;
	await expect(hissizeandbandwidtharea.hisringsizeandbandwidthpricediffertext);
});

Then(/^I ensure her ring size text is displayed$/, async() => {
	const hersizearea = new productdetailspage;
	await expect(hersizearea.txtheadingHerringsize).toExist();
});

Then(/^I ensure price change text for changing her ringsize is displayed$/, async() => {
	const hersizearea = new productdetailspage;
	await expect(hersizearea.herringsizpricediffertext).toExist();
});

Then(/^I ensure default selected metal type image is displayed metal section$/, async() => {
	const metalarea = new productdetailspage;
	await expect(metalarea.img14kmetal).toExist();
});

Then(/^I ensure error message will display for select ring size$/, async() => {
	const ringsizearea = new productdetailspage;
	await expect(ringsizearea.ringsizeerror).toExist();
});

Then(/^I ensure it moved to matching band section$/, async() => {
	const matchingbandarea = new productdetailspage;
	await expect(matchingbandarea.sctMatchingProducts).toExist();
});

Then(/^I ensure matching band product image is displayed$/, async() => {
	const matchingbandarea = new productdetailspage;
	await expect(matchingbandarea.imgMatchingProducts).toExist();
});

Then(/^I ensure matching band product name and price and view details link is displayed$/, async() => {
	const matchingbandarea = new productdetailspage;
	await expect(matchingbandarea.txtMatchingProductName).toExist();
	await expect(matchingbandarea.txtMatchingProductPrice).toExist();
});

Then(/^I ensure matching band product full details popup is displayed$/, async() => {
	const matchingbandpopuparea = new productdetailspage;
	await expect(matchingbandpopuparea.popupMatchingBand).toExist();
});

Then(/^I ensure matching band product image,name, price, product description in full details popup is displayed$/, async() => {
	const matchingbandpopuparea = new productdetailspage;
	await expect(matchingbandpopuparea.imgMainMatchingBand).toExist();
	await expect(matchingbandpopuparea.imgMini1).toExist();
	await expect(matchingbandpopuparea.imgMini2).toExist();
	await expect(matchingbandpopuparea.imgMini3).toExist();
	await expect(matchingbandpopuparea.popupMatchingBandName).toExist();
	await expect(matchingbandpopuparea.popupAgaciaBandPrice).toExist();
	await expect(matchingbandpopuparea.popupShortDescription).toExist();

});

Then(/^I ensure matching band product ring size is displayed$/, async() => {
	const matchingbandpopuparea = new productdetailspage;
	await expect(matchingbandpopuparea.popupLabelRingSize).toExist();
	await expect(matchingbandpopuparea.popupDrpRingSize).toExist();
});

Then(/^I ensure sizes are shown for matching band product$/, async() => {
	const matchingbandpopuparea = new productdetailspage;
	await expect(matchingbandpopuparea.popupPlaceHolderChooseSize).toExist();
});

Then(/^I ensure free engraving field and max character limit is displayed$/, async() => {
	const matchingbandpopuparea = new productdetailspage;
	await expect(matchingbandpopuparea.popupTextBoxEngraving).toExist();
	await expect(matchingbandpopuparea.popupEngravingMaxChar).toExist();
});

Then(/^I ensure free engraving icons are displayed$/, async() => {
	const matchingbandpopuparea = new productdetailspage;
	await expect(matchingbandpopuparea.popupEngravingSymbolsSection).toExist();
	await expect(matchingbandpopuparea.popupDarkHeartSymbol).toExist();
	await expect(matchingbandpopuparea.popupHeartSymbol).toExist();
	await expect(matchingbandpopuparea.popupInfinitySymbol).toExist();
	await expect(matchingbandpopuparea.popupStarSymbol).toExist();
	await expect(matchingbandpopuparea.popupAndSymbol).toExist();
});

Then(/^I ensure Add ring and band button is displayed$/, async() => {
	const matchingbandpopuparea = new productdetailspage;
	await expect(matchingbandpopuparea.btnAddRingAndBand).toExist();
});

Then(/^I ensure recently viewed area is present$/, async() => {
	const recentlyviewedarea = new productdetailspage;
	await expect(recentlyviewedarea.sctnRecentlyViewed).toExist();
});

Then(/^I ensure products are displayed in recently viewed area$/, async() => {
	const recentlyviewedarea = new productdetailspage;
	await expect(recentlyviewedarea.imgRecentlyViewedProduct).toExist();
});

Then(/^I ensure product name and price is displayed$/, async() => {
	const recentlyviewedarea = new productdetailspage;
	await expect(recentlyviewedarea.txtRecentlyViewedProductName).toExist();
	await expect(recentlyviewedarea.txtRecentlyViewedProductName).toExist();
});


Then(/^I ensure clicking product from recently viewed redirects to page-3$/, async() => {
	const recentlyviewedarea = await browser.getUrl()
	await expect(recentlyviewedarea).toEqual(data.Recentlyviewed.page3url);
});

Then(/^I ensure free global shipping area is displayed$/, async() => {
	const freeshippingarea = new productdetailspage;
	await expect(freeshippingarea.headingShippingAndReturns).toExist;
	await expect(freeshippingarea.imgFreeShipping).toExist;
	await expect(freeshippingarea.headingFreeShipping).toExist;
	await expect(freeshippingarea.txtFreeShipping).toExist;
});

Then(/^I ensure the delivery date present in the free global shipping is exact as the date mentioned below add to cart$/, async() => {
    const freeshippingarea = new productdetailspage;
	await expect(freeshippingarea.txtDateFreeShipping).toExist;
});

Then(/^I ensure free 100 days return area is displayed$/, async() => {
	const freeshippingarea = new productdetailspage;
	await expect(freeshippingarea.imgReturnsAndResizing).toExist;
	await expect(freeshippingarea.headingReturnsAndResizing).toExist;
	await expect(freeshippingarea.txtReturnsAndResizing).toExist;
});

Then(/^I ensure link redirects to return policy page$/, async() => {
	const freeshippingarea = await browser.getUrl()
	await expect(freeshippingarea).toEqual(data.Policy.return);
});

Then(/^I ensure free warranty and protection plan area is displayed$/, async() => {
	const freeshippingarea = new productdetailspage;
	await expect(freeshippingarea.imgWarranty).toExist;
	await expect(freeshippingarea.headingWarranty).toExist;
	await expect(freeshippingarea.txtWarranty).toExist;
});


Then(/^I ensure link redirects to warranty page$/, async() => {
	const freeshippingarea = await browser.getUrl()
	await expect(freeshippingarea).toEqual(data.Policy.warranty);
});

Then(/^I ensure default metal in setting is displayed$/, async() => {
	const pdmetalarea = new productdetailspage;
	await expect(pdmetalarea.setting14ktwhitegold).toExist;
});

Then(/^I ensure quality of stone is default selected$/, async() => {
	const qualityrarea = await $('//div[@class="wd-100 has-text-centered quality-size-value carat-size-value carat-size-selected-value"]/span');
	const qualitytext = await qualityrarea.getText()
	await expect(qualitytext).toEqual(data.Selected.Quality);
});

Then(/^I ensure size of stone is default selected$/, async() => {
	const sizerarea = await $('//div[@class="wd-100 carat-size-selected-value has-text-centered carat-size-value"]/span');
	const sizetext = await sizerarea.getText()
	await expect(sizetext).toEqual(data.Selected.Size);
});

Then(/^I ensure Bracelet length area is displayed$/, async() => {
	const braceletarea = new productdetailspage();
	await expect(braceletarea.scnbraceletlength).toExist();
	await expect(braceletarea.txtheadingbraceletlength).toExist();
});

Then(/^I ensure bracelet length text and dropdown are displayed$/, async() => {
	const braceletarea = new productdetailspage();
	await expect(braceletarea.boxbracelettext).toExist();
	await expect(braceletarea.boxddchoosebraceletlength).toExist();
});

Then(/^I ensure bracelet size guide is displayed$/, async() => {
	const braceletarea = new productdetailspage();
	await expect(braceletarea.lnkbraceletsizeguide).toExist();
});

Then(/^I ensure bracelet length options are displayed$/, async() => {
	const braceletarea = new productdetailspage();
	await expect(braceletarea.braceletlengthoptions).toExist();
});

Then(/^I ensure price change text is displayed$/, async() => {
	const braceletarea = new productdetailspage();
	await expect(braceletarea.braceletlengthpricediffer).toExist();
});
Then(/^I ensure price change text is displayed for max length$/, async() => {
	const braceletarea = new productdetailspage();
	await expect(braceletarea.braceletlengthpricedifferp).toExist();
});

Then(/^I ensure necklace chain area is displayed$/, async() => {
	const necklacearea = new productdetailspage();
	await expect(necklacearea.scnnecklace).toExist();
});

Then(/^I ensure default box chain text is displayed$/, async() => {
	const necklacearea = new productdetailspage();
	await expect(necklacearea.txtbelowheadingsterling).toExist();
});

Then(/^I ensure different metals in necklace area is displayed$/, async() => {
	const metalarea = new productdetailspage();
	await expect(metalarea.lnk18kWG).toExist();
	await expect(metalarea.lnk18kYG).toExist();
	await expect(metalarea.lnk14kWG).toExist();
	await expect(metalarea.lnk14kYG).toExist();
	await expect(metalarea.lnkPlatinum).toExist();
	await expect(metalarea.lnkSLV).toExist();
});

Then(/^I ensure box button selected and cable button are displayed$/, async() => {
	const necklacearea = new productdetailspage();
	await expect(necklacearea.imgbox).toExist();
	await expect(necklacearea.imgcable).toExist();
});
Then(/^I ensure yellow box button selected and cable button are displayed$/, async() => {
	const necklacearea = new productdetailspage();
	await expect(necklacearea.imgyellowbox).toExist();
	await expect(necklacearea.imgyellowcable).toExist();
});

Then(/^I ensure 16 inch chain button are displayed$/, async() => {
	const necklacearea = new productdetailspage();
	await expect(necklacearea.btn16InchChain).toExist();
});

Then(/^I ensure chain price and chain image are displayed$/, async() => {
	const necklacearea = new productdetailspage();
	await expect(necklacearea.txtchainprice).toExist();
	await expect(necklacearea.imgchainimage).toExist();
});

Then(/^I ensure 18 and 16 inch chain button are displayed$/, async() => {
	const necklacearea = new productdetailspage();
	await expect(necklacearea.btn16InchChain).toExist();
	await expect(necklacearea.btn18InchChain).toExist();
});

Then(/^I ensure custom diamond page is redirected$/, async() => {
	const customdiamondarea = await browser.getUrl()
	await expect(customdiamondarea).toEqual(data.Browserlink.customdiamondurl);
});

Then(/^I ensure custom lab diamond page is redirected$/, async() => {
	const customdiamondarea = await browser.getUrl()
	await expect(customdiamondarea).toEqual(data.Browserlink.customlabdiamondurl);
});

Then(/^I ensure delivery date changed for shipping$/, async() => {
	const deliverytextarea = await $('//span[@class="p-l-2"]/b');
	const deliveryarea = await deliverytextarea.getText()
	await expect(deliveryarea).toEqual(data.Deliveryarea.Deliverydate);
});

Then(/^I ensure rainbow sapphire change stone dropdown is displayed$/, async() => {
	const rainaccentstonearea = new productdetailspage;
	await expect(rainaccentstonearea.lnkchangeaccentstone1).toExist();
});

Then(/^I ensure accent stone-2 area is displayed$/, async() => {
	const rainaccentstonearea = new productdetailspage;
	await expect(rainaccentstonearea.sectionaccentstone2).toExist();
	await expect(rainaccentstonearea.imgaccentstone2).toExist();
});

Then(/^I ensure rainbow sapphire change stone dropdown is disabled$/, async() => {
	const rainaccentstonearea = new productdetailspage;
	await expect(rainaccentstonearea.lnkrainaccentstone2dropdown).toExist();
});

Then(/^I ensure clicking Men's category in breadcrumb redirects to men's category page$/, async() => {
	const categoryarea = await browser.getUrl()
	await expect(categoryarea).toEqual(data.Browserlink.menscategoryurl);
});

Then(/^I ensure ring size and width text is displayed$/, async() => {
	const ringsizearea = new productdetailspage;
	await expect(ringsizearea.txtringsize).toExist();
});

Then(/^I ensure ring-size text is displayed$/, async() => {
	const ringsizearea = new productdetailspage;
	await expect(ringsizearea.ringsizedropdownringtext).toExist();
});

Then(/^I ensure 5.5mm default is selected in bandwidth$/, async() => {
	const bandwidtharea = await $('//select[@name="ringSizeForHim"]/option[contains(text(),"6.0 MM")]');
	const bandwidthtextarea = await bandwidtharea.getText()
	await expect(bandwidthtextarea).toEqual(data.Selected.MensBandwidth);
});

Then(/^I ensure free engraving for her area is displayed$/, async() => {
	const herfreeengravingarea = new productdetailspage;
	await expect(herfreeengravingarea.sectionFreeengravingforher).toExist();
});

Then(/^I ensure free engraving for him area is displayed$/, async() => {
	const himfreeengravingarea = new productdetailspage;
	await expect(himfreeengravingarea.sectionFreeengravingforhim).toExist();
});

Then(/^I ensure earring back area is displayed$/, async() => {
	const earringarea = new productdetailspage;
	await expect(earringarea.scnearringback).toExist();
});

Then(/^I ensure earring back text and default back is displayed$/, async() => {
	const earringarea = new productdetailspage;
	await expect(earringarea.txtearringback).toExist();
});

Then(/^I ensure customize earring back dropdown is displayed$/, async() => {
	const earringarea = new productdetailspage;
	await expect(earringarea.lnkcustomize).toExist();
});

Then(/^I ensure push back and screw back is displayed$/, async() => {
	const earringarea = new productdetailspage;
	await expect(earringarea.txtheadingpushbackundercustomize).toExist();
	await expect(earringarea.imgpushbackmodel).toExist();
	await expect(earringarea.txtheadingscrewbackundercustomize).toExist();
	await expect(earringarea.imgscrewhbackmodel).toExist();
});

Then(/^I ensure ring product price is changed$/, async() => {
	const textarea = await $ ('//div[@class="tooltip-trigger"]//span');
	const changedtextarea = await textarea.getText()
	await expect(changedtextarea).not.toEqual(data.Price.changedpricebyringsize)
});

Then(/^I ensure her ring size area is displayed$/, async() => {
	const herringsizearea = new productdetailspage;
	await expect(herringsizearea.sectionringsize).toExist();
	await expect(herringsizearea.txtheadingHerringsize).toExist();
});

Then(/^I ensure coupleband product price is changed$/, async() => {
	const coupletextarea = await $ ('//div[@class="tooltip-trigger"]//span');
	const changedcoupletextarea = await coupletextarea.getText()
	await expect(changedcoupletextarea).not.toEqual(data.Price.changedcoupleherpricebyringsize)
});

Then(/^I ensure his ring size area is displayed$/, async() => {
	const hisringsizearea = new productdetailspage;
	await expect(hisringsizearea.sectionhisringsize).toExist();
	await expect(hisringsizearea.txtheadingHisringsize).toExist();
});

Then(/^I ensure select Certifiacte for stone area is not displayed$/, async() => {
	const certificatearea = new productdetailspage;
	await expect(certificatearea.sectioncertificate).not.toExist();
});

Then(/^I ensure select Certifiacte for stone are is displayed$/, async() => {
	const certificatearea = new productdetailspage;
	await expect(certificatearea.sectioncertificate).toExist();
	await expect(certificatearea.txtheadingSelectcertification).toExist();
});

Then(/^I ensure Free DGLA Certifiacte is selected automatically and delivery date is displayed$/, async() => {
	const certificatearea = new productdetailspage;
	await expect(certificatearea.txtfirstlinecertification).toExist();
	await expect(certificatearea.freecertificatedchecked).toExist();
});

Then(/^I ensure GIA Certificate is not selected price mentioned and delivery date is displayed$/, async() => {
	const certificatearea = new productdetailspage;
	await expect(certificatearea.txtsecondlinecertification).toExist();
	await expect(certificatearea.GIAcertificatedunchecked).toExist();
});

Then(/^I ensure push back and screw back price is same$/, async() => {
	const earringpricetxt = await $('//div[@class="tooltip-trigger"]/span');
	const changedearringprice = await earringpricetxt.getText()
	await expect(changedearringprice).toEqual(data.Price.changedpricebyearringback)
});

Then(/^I ensure price changed after changing size and quality$/, async() => {
	const Rtext = await $('//div[@class="tooltip-trigger"]/span');
	const text= await Rtext.getText()
    const dollarSignIndex = text.indexOf("$");
	const priceValue = dollarSignIndex !== -1 ? text.substring(dollarSignIndex + 1).replace(/,/g, ""): null;
	await expect(priceValue).not.toEqual(data.Price.changedpricesizeandquality);
	
});
   
Then(/^I ensure price changed after changing metal$/, async() => {
	const Mtext = await $('//div[@class="tooltip-trigger"]/span');
	const text= await Mtext.getText()
    const dollarSignIndex = text.indexOf("$");
	const priceValue = dollarSignIndex !== -1 ? text.substring(dollarSignIndex + 1).replace(/,/g, ""): null;
	await expect(priceValue).not.toEqual(data.Price.changedpricebymetal);
	
});

Then(/^I ensure price not changed after changing metal color$/, async() => {
	const Mtext = await $('//div[@class="tooltip-trigger"]/span');
	const text= await Mtext.getText()
    const dollarSignIndex = text.indexOf("$");
	const priceValue = dollarSignIndex !== -1 ? text.substring(dollarSignIndex + 1).replace(/,/g, ""): null;
	await expect(priceValue).toEqual(data.Price.changedpricebymetal);
});

Then(/^I ensure price changed after changing mens bandwidth$/, async() => {
	const himtext = await $('//div[@class="tooltip-trigger"]/span');
	const text= await himtext.getText()
    const dollarSignIndex = text.indexOf("$");
	const priceValue = dollarSignIndex !== -1 ? text.substring(dollarSignIndex + 1).replace(/,/g, ""): null;
	await expect(priceValue).not.toEqual(data.Price.changedpricebybandwidth);
});

Then(/^I ensure price changed after changing bracelet length$/, async() => {
	const blntext = await $('//div[@class="tooltip-trigger"]/span');
	const text= await blntext.getText()
    const dollarSignIndex = text.indexOf("$");
	const priceValue = dollarSignIndex !== -1 ? text.substring(dollarSignIndex + 1).replace(/,/g, ""): null;
	await expect(priceValue).not.toEqual(data.Price.changedpricebybraceletlengthN);
});

Then(/^I ensure price changed after changing chain$/, async() => {
	const blntext = await $('(//span[@class="is-uppercase"]/span)[2]');
	const text= await blntext.getText()
    const dollarSignIndex = text.indexOf("$");
	const priceValue = dollarSignIndex !== -1 ? text.substring(dollarSignIndex + 1).replace(/,/g, ""): null;
	await expect(priceValue).not.toEqual(data.Price.changedpricebychain);
});

Given(/^I browse page 3 of Claudine$/, async() => {
	await browser.url(dmd.config.ClaudinePage3);
});


Then(/^I verify the Precious stone selection options and Quality selection options in the popup$/, async() => {
	const agaciaBand = new productdetailspage;
	await expect(agaciaBand.popupSctnPrecious).toExist();
	await expect(agaciaBand.popupSctnSelectQuality).toExist();
});


When(/^I select Ruby under Precious stone$/, async() => {
	const agaciaBand = new productdetailspage;
	await agaciaBand.selectRubyBand();
});


When(/^I select Quality as Heirloom$/, async() => {
	const agaciaBand = new productdetailspage;
	await agaciaBand.selectHeirloomBand();
});


When(/^I click Add ring and band button$/, async() => {
	const agaciaBand = new productdetailspage;
	await agaciaBand.addRingAndBand();
});


When(/^I select the matching band ring size$/, async() => {
	const agaciaBand = new productdetailspage;
	await agaciaBand.addBandSize();
});


Then(/^I ensure that the ring size is automatically prepopulated$/, async() => {
	const agaciaBand = new productdetailspage;
	await expect(agaciaBand.prepopulatedRingSize).toExist();
});


Then(/^I ensure cable button selected and box button are displayed$/, async() => {
	const chainSilver = new productdetailspage;
	await expect(chainSilver.btnBox).toExist();
	await expect(chainSilver.btnCablePreselected).toExist();
});


When(/^I click Box button$/, async() => {
	const chainSilver = new productdetailspage;
	await chainSilver.clickBox();
});


Then(/^I ensure that the box design is not available for Sterling silver$/, async() => {
	const chainSilver = new productdetailspage;
	await expect(chainSilver.txtSterlingsilverundercustomize).not.toExist();
});


Then(/^I ensure the Product details section is displayed$/, async () => {
	const colOpt = new productdetailspage;
	await expect(colOpt.prodDilsSection).toExist();
});

Then(/^I ensure the Dimensions column under Product details$/, async () => {
	const colOpt = new productdetailspage;
	await expect(colOpt.diaColumn).toExist();
});

Then(/^I ensure the Width text under Dimensions column$/, async () => {
	const colOpt = new productdetailspage;
	await expect(colOpt.widthOpt).toExist();
});

Then(/^I ensure the Height text under Dimensions column$/, async () => {
	const colOpt = new productdetailspage;
	await expect(colOpt.heightOpt).toExist();
});

Then(/^I ensure the Length text under Dimensions column$/, async () => {
	const colOpt = new productdetailspage;
	await expect(colOpt.braceletLengthOpt).toExist();
});
