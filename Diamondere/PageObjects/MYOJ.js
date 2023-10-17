const BrowserUtil = require("../../CommonUtils/BrowserUtil")
const ElementUtil = require("../../CommonUtils/ElementUtil")
const context = require("../../CommonUtils/ScenarioContext")
const data = require('../TestData/MYOJ.json');
const dmd = require('../Configs/dmd_' + global.testEnv + '.js');
// const imageJpg = require('../TestData/Images/amina_wg_pt_0.jpg');
// const imagePng = require('../TestData/Images/amina_wg_pt_0.png')


class MYOJ {
    get diamondereLogo() {
        return $('//img[@alt="Home Page Diamondere since 1890"]')
    }

//BANNERS
    get bannerText() {
        return $('//div[@class="banner-text"]')
    }

    get ringStartWithDiamondBanner() {
        return $('//h1[@class="is-uppercase is-size-6-mobile m-b-5-mob" and contains(text(),"Make Your Diamond Engagement Ring")]')
    }

    get subHeadingStartWithDiamond() {
        return $('//p[@class="is-hidden-mobile ln-height-20" and contains(text(),"wide selection of natural")]')
    }

    get ringStartWithDiamondPage2Banner() {
        return $('//h1[@class="is-uppercase is-size-6-mobile m-b-5-mob" and contains(text(),"Make your Diamond engagement ring")]')
    }

    get ringStartLabDiamondBanner() {
        return $('//h1[@class="is-uppercase is-size-6-mobile m-b-5-mob" and contains(text(),"Make Your Lab Diamond Engagement Ring")]')
    }

    get ringStartLabDiamondPage2Banner() {
        return $('//h1[@class="is-uppercase is-size-6-mobile m-b-5-mob" and contains(text(),"Make your Lab Diamond engagement ring")]')
    }

    get subHeadingStartLabDiamond() {
        return $('//p[@class="is-hidden-mobile ln-height-20" and contains(text(),"wide selection of natural")]')
    }

    get ringsStartWithSetting() {
        return $('//h1[@class="is-uppercase is-size-6-mobile m-b-5-mob" and contains(text(),"Make your Diamond engagement ring")]')
    }

    get ringsStartWithSettingSubHeading() {
        return $('//p[@class="is-hidden-mobile ln-height-20" and contains(text(),"vast collection of designs")]')
    }

    get ringsCategoryBanner() {
        return $('//h1[text()="Rings"]')
    }

    get engagementSWADBanner() {
        return $('//h1[@class="is-uppercase is-size-6-mobile m-b-5-mob" and contains(text(),"Make Your Diamond Engagement Ring")]')
    }

    get engagementSWADsubHeading() {
        return $('//p[@class="is-hidden-mobile ln-height-20" and contains(text(),"wide selection of natural")]')
    }

    get engagementSWLDBanner() {
        return $('//h1[@class="is-uppercase is-size-6-mobile m-b-5-mob" and contains(text(),"Make Your Lab Diamond Engagement Ring")]')
    }

    get engagementSWLDsubHeading() {
        return $('//p[@class="is-hidden-mobile ln-height-20" and contains(text(),"wide selection of natural")]')
    }

    get engagementSWSBanner() {
        return $('//h1[@class="is-uppercase is-size-6-mobile m-b-5-mob" and contains(text(),"Make your Diamond engagement ring")]')
    }

    get engagementSWSSubHeading() {
        return $('//p[@class="is-hidden-mobile ln-height-20" and contains(text(),"vast collection of designs")]')
    }

    get earringsSWADBanner() {
        return $('//h1[@class="is-uppercase is-size-6-mobile m-b-5-mob" and contains(text(),"Make Your Diamond Earrings")]')
    }

    get earringsSWADsubHeading() {
        return $('//p[@class="is-hidden-mobile ln-height-20" and contains(text(),"wide selection of natural")]')
    }

    get earringsSWLDBanner() {
        return $('//h1[@class="is-uppercase is-size-6-mobile m-b-5-mob" and contains(text(),"Make Your Lab Diamond Earrings")]')
    }

    get earringsSWLDsubHeading() {
        return $('//p[@class="is-hidden-mobile ln-height-20" and contains(text(),"wide selection of natural")]')
    }

    get earringsSWLDPage2Banner() {
        return $('//h1[@class="is-uppercase is-size-6-mobile m-b-5-mob" and contains(text(),"Make your Lab Diamond earrings")]')
    }

    get earringsSWSBanner() {
        return $('//h1[@class="is-uppercase is-size-6-mobile m-b-5-mob" and contains(text(),"Make your Diamond earrings")]')
    }

    get earringsSWSSubHeading() {
        return $('//p[@class="is-hidden-mobile ln-height-20" and contains(text(),"vast collection of designs")]')
    }

    get earringsCategoryBanner() {
        return $('//h1[text()="Earrings"]')
    }

    get necklacesSWADBanner() {
        return $('//h1[@class="is-uppercase is-size-6-mobile m-b-5-mob" and contains(text(),"Make Your Diamond Necklaces")]')
    }

    get necklacesSWADPage2Banner() {
        return $('//h1[@class="is-uppercase is-size-6-mobile m-b-5-mob" and contains(text(),"Make your Diamond necklaces")]')
    }

    get necklacesSWADsubHeading() {
        return $('//p[@class="is-hidden-mobile ln-height-20" and contains(text(),"wide selection of natural")]')
    }

    get necklacesSWADPage2Banner() {
        return $('//h1[@class="is-uppercase is-size-6-mobile m-b-5-mob" and contains(text(),"Make your Diamond necklaces")]')
    }

    get necklacesSWLDBanner() {
        return $('//h1[@class="is-uppercase is-size-6-mobile m-b-5-mob" and contains(text(),"Make Your Lab Diamond Necklaces")]')
    }

    get necklacesSWLDsubHeading() {
        return $('//p[@class="is-hidden-mobile ln-height-20" and contains(text(),"wide selection of natural")]')
    }

    get necklacesSWSBanner() {
        return $('//h1[@class="is-uppercase is-size-6-mobile m-b-5-mob" and contains(text(),"Make your Diamond necklaces")]')
    }

    get necklacesSWSSubHeading() {
        return $('//p[@class="is-hidden-mobile ln-height-20" and contains(text(),"vast collection of designs")]')
    }

    get necklacesCategoryBanner() {
        return $('//h1[text()="Necklaces"]')
    }

    get mensSWADBanner() {
        return $('//h1[@class="is-uppercase is-size-6-mobile m-b-5-mob" and contains(text(),"Make Your Diamond Mens rings")]')
    }

    get mensSWADsubHeading() {
        return $('//p[@class="is-hidden-mobile ln-height-20" and contains(text(),"wide selection of natural")]')
    }

    get mensSWLDBanner() {
        return $('//h1[@class="is-uppercase is-size-6-mobile m-b-5-mob" and contains(text(),"Make Your Lab Diamond Mens rings")]')
    }

    get mensSWLDsubHeading() {
        return $('//p[@class="is-hidden-mobile ln-height-20" and contains(text(),"wide selection of natural")]')
    }

    get mensSWLDPage2Banner() {
        return $('//h1[@class="is-uppercase is-size-6-mobile m-b-5-mob" and contains(text(),"Make your Lab Diamond mens rings")]')
    }

    get mensSWSBanner() {
        return $('//h1[@class="is-uppercase is-size-6-mobile m-b-5-mob" and contains(text(),"Make your Diamond mens rings")]')
    }

    get mensSWSSubHeading() {
        return $('//p[@class="is-hidden-mobile ln-height-20" and contains(text(),"vast collection of designs")]')
    }

    get mensRingsCategoryBanner() {
        return $('//h1[text()="Men\'s Rings"]')
    }
    
    get LooseDiamondsDDPBanner() {
        return $('//h1[@class="is-uppercase is-size-6-mobile m-b-5-mob" and contains(text(),"Loose Diamonds")]')
    }

    get LooseDiamondsBanner() {
        return $('//h1[@class="is-uppercase is-size-6-mobile m-b-5-mob" and contains(text(),"Loose diamonds")]')
    }

    get LooseDiamondsSubheading() {
        return $('//p[@class="is-hidden-mobile ln-height-20" and contains(text(),"Select a loose diamond")]')
    }

    get looseLabCreatedDiamondsBanner() {
        return $('//h1[contains(text(),"Loose lab-created-diamonds")]')
    }

    get looseLabCreatedDiamondsSubheading() {
        return $('//p[@class="is-hidden-mobile ln-height-20" and contains(text(),"Select a loose lab diamond")]')
    }

    get whyChooseDiamondereCertification() {
        return $('//h1[contains(text(),"Remembering Romance Since 1890")]')
    }

//BREADCRUMBS
    get sctnBreadcrumb() {
        return $('//ul[@itemprop="breadcrumb"]');
    }

    get lnkHomeBreadcrumb() {
        return $('//a[@title="HOME"]');
    }

    get txtNoOfDesigns() {
        return $('//span[@class="is-word-break-all p-l-3 p-r-3"]');
    }

    //SWAD - Breadcrumbs
    get lnkLooseDiamondsBreadcrumb() {
        return $('//a[@title="LOOSE DIAMONDS"]');
    }

    get lnkMakeYourDiamondRingBreadcrumb() {
        return $('//a[@title="MAKE YOUR DIAMOND RING"]');
    }

    get lnkMakeYourDiamondEngagementRingBreadcrumb() {
        return $('//a[@title="MAKE YOUR DIAMOND ENGAGEMENT RING"]')
    }

    get lnkMakeYourDiamondEarringBreadcrumb() {
        return $('//a[@title="MAKE YOUR DIAMOND EARRINGS"]');
    }

    get lnkDiamondEarringBreadcrumb() {
        return $('//a[@title="MAKE YOUR DIAMOND EARRING"]');
    }

    get lnkMakeYourDiamondNecklaceBreadcrumb() {
        return $('//a[@title="MAKE YOUR DIAMOND NECKLACES"]');
    }

    get lnkMakeYourDiamondMensRingBreadcrumb() {
        return $('//a[@title="MAKE YOUR DIAMOND MENS RINGS"]');
    }

    get lnkViewDetails(){
        return $('//span[contains(text(),"View Details")]')
    }

    //SWALD - Breadcrumbs
    get lnkLooseLabDiamondsBreadcrumb() {
        return $('//a[@title="LOOSE LAB DIAMONDS"]');
    }

    get lnkMakeYourLabDiamondRingBreadcrumb() {
        return $('//a[@title="MAKE YOUR LAB DIAMOND RING"]');
    }

    get lnkMakeYourLabDiamondEngagementRingBreadcrumb() {
        return $('//a[@title="MAKE YOUR LAB DIAMOND ENGAGEMENT RING"]')
    }

    get lnkMakeYourLabDiamondEarringBreadcrumb() {
        return $('//a[@title="MAKE YOUR LAB DIAMOND EARRINGS"]');
    }

    get lnkMakeYourLabDiamondNecklaceBreadcrumb() {
        return $('//a[@title="MAKE YOUR LAB DIAMOND NECKLACES"]');
    }

    get lnkMakeYourLabDiamondMensRingBreadcrumb() {
        return $('//a[@title="MAKE YOUR LAB DIAMOND MENS RINGS"]');
    }

    //SWAS - Breadcrumbs
    get lnkEngagementRingBreadcrumb() {
        return $('//a[@title="ENGAGEMENT RING"]');
    }

    get lnkEarringsBreadcrumb() {
        return $('//a[@title="EARRINGS"]');
    }

    get lnkNecklacesBreadcrumb() {
        return $('//a[@title="NECKLACES"]');
    }

    get lnkMensRingBreadcrumb() {
        return $('//a[@title="MENS RINGS"]');
    }


//HEADING TAB
    get sctnHeadingTab() {
        return $('//div[@class="root"]')
    }

    //SWAD/SWALD - Heading Tab
    get imgDiamondIcon() {
        return $('//div[@class="menu-filter-icon-header diamond"]')
    }

    get tabDiamondActive() {
        return $('//div[@class="menu-filter-icon-header diamond"]//parent::div//parent::div[@class="has-text-info arrow arrow1 is-active-tab cur-no-drop"]')
    }

    get tabDiamondClickable() {
        return $('//div[@class="myoj-nav-icons diamond"]//parent::div//parent::div[@class="has-text-info arrow arrow1 is-clickable"]')
    }

    get tabDiamondCtsAndPriceDetails() {
        return $('//p[text()="Diamond"]/following-sibling::p[@class="sub-title has-text-weight-semibold is-hidden-mobile"]')
    }

    get tabDiamondChange() {
        return $('//p[text()="Diamond"]/following-sibling::a[contains(text(),"Change")]')
    }

    get imgDiamondSelectedIcon() {
        return $('//div[@class="myoj-nav-icons diamond"]')
    }

    //tabDiamondActive //tabDiamondClickable

    get tabLabDiamondCtsAndPriceDetails() {
        return $('//p[text()="Lab Diamond"]/following-sibling::p[@class="sub-title has-text-weight-semibold is-hidden-mobile"]')
    }

    get tabLabDiamondChange() {
        return $('//p[text()="Lab Diamond"]/following-sibling::a[contains(text(),"Change")]')
    }

    get imgRingIcon() {
        return $('//div[@class="menu-filter-icon-header ring"]')
    }

    get imgEarringIcon() {
        return $('//div[@class="menu-filter-icon-header earring"]')
    }

    get imgNecklaceIcon() {
        return $('//div[@class="menu-filter-icon-header necklace"]')
    }

    get imgMensRingIcon() {
        return $('//div[@class="menu-filter-icon-header men"]')
    }

    get tabSettingsInactive() {
        return $('//div[@class="has-text-info arrow arrow2 cur-no-drop"]')
    }

    get tabSettingsClickable() {
        return $('//div[@class="has-text-info arrow arrow2 is-clickable"]')
    }

    get tabSettingsSelect() {
        return $('//p[text()="Settings"]/following-sibling::a[contains(text(),"Select")]')
    }

    get tabSettingsActive() {
        return $('//div[@class="has-text-info arrow arrow2 is-active-tab is-clickable"]')
    }

    get tabSettingsNameAndPriceDetails() {
        return $('//p[text()="Settings"]/following-sibling::p[@class="sub-title has-text-weight-semibold is-hidden-mobile"]')
    }

    get tabSettingsChange() {
        return $('//p[text()="Settings"]/following-sibling::a[contains(text(),"Change")]')
    }

    get imgWomensBandIcon() {
        return $('//div[@class="menu-filter-icon-header women"]')
    }

    get tabWomensBandInactive() {
        return $('//div[@class="has-text-info arrow arrow3 cur-no-drop"]')
    }

    get tabWomensBandActive() {
        return $('//div[@class="has-text-info arrow arrow3 is-active-tab cur-no-drop"]')
    }

    get tabWomensBandNameAndPriceDetails() {
        return $('//p[text()="Women\'s band"]/following-sibling::p[@class="sub-title has-text-weight-semibold is-hidden-mobile"]')
    }

    get tabWomensBandChange() {
        return $('//p[text()="Women\'s band"]/following-sibling::a[contains(text(),"Change")]')
    }

    get imgMensBandIcon() {
        return $('//div[@class="menu-filter-icon-header men"]')
    }

    get tabMensBandInactive() {
        return $('//div[@class="has-text-info arrow arrow3 cur-no-drop"]')
    }

    get tabMensBandActive() {
        return $('//div[@class="has-text-info arrow arrow3 is-active-tab cur-no-drop"]')
    }

    get tabBothBandsMensBandInactive() {
        return $('//div[@class="has-text-info arrow arrow4 cur-no-drop"]')
    }

    get tabBothBandsMensBandActive() {
        return $('//div[@class="has-text-info arrow arrow4 is-active-tab cur-no-drop"]')
    }

    get tabDiamondInactive() {
        return $('//div[@class="has-text-info arrow arrow1 cur-no-drop"]')
    }

    get tabSettingsActiveAdditional() {
        return $('//div[@class="root"]//div[@class="has-text-info arrow arrow1 is-active-tab cur-no-drop"]')
    }

    //SWAS - Heading Tab
    get tabSettingsActiveSWAS() {
        return $('//div[@class="has-text-info arrow arrow1 is-active-tab cur-no-drop"]')
    }

    get tabSettingsClickableSWAS() {
        return $('//div[@class="has-text-info arrow arrow1 is-clickable"]')
    }

    get tabDiamondInactiveSWAS() {
        return $('//div[@class="has-text-info arrow arrow2 cur-no-drop"]')
    }

    get tabDiamondActiveSWAS() {
        return $('//div[@class="has-text-info arrow arrow2 is-active-tab cur-no-drop"]')
    }

    get tabDiamondClickableSWAS() {
        return $('//div[@class="has-text-info arrow arrow2 is-active-tab is-clickable"]')
    }


//WAYS TO SAVE MORE
    get sctnWaysToSaveMoreRings() {
        return $('//div[@class="is-flex-tablet is-align-items-center is-flex-wrap-wrap m-t-5 m-b-5 p-5-touch corner-gaps way-to-save-ring"]')
    }

    get sctnWaysToSaveMore() {
        return $('//div[@class="is-flex-tablet is-align-items-center is-flex-wrap-wrap m-t-5 m-b-5 p-5-touch corner-gaps way-to-save-div "]')
    }

    get lnkWaysToSaveMore() {
        return $('//b[@class="has-text-primary discount-heading is-clickable is-flex is-align-items-flex-start is-flex-wrap-wrap"]')
    }

    get txtCurrentlySavingPercentage() {
        return $('//span[contains(text(),"Currently saving")]')
    }

    get popupWaysToSaveMore() {
        return $('//div[@class="has-text-left"]');
    }

    get popupTxtEasyDelivery() {
        return $('//b[contains(text(),"1. Easy Delivery:")]')
    }

    get popupTxtWirePayment() {
        return $('//b[contains(text(),"2. Wire payment:")]')
    }

    get popupTxtMatchingBands() {
        return $('//b[contains(text(),"3. Matching bands:")]')
    }

    get popupTxtRing() {
        return $('//b[contains(text(),"4. Ring:")]')
    }

    get popupTxtWomensBands() {
        return $('//b[contains(text(),"3. Women\'s bands:")]')
    }

    get popupTxtMensRing() {
        return $('//b[contains(text(), "4.")]')
    }

    get drpDeliveryDefault() {
        return $('//div[contains(text(),"Standard")]')
    }

    get optnStandardDelivery() {
        return $('//span[contains(text(),"Standard 1-3 week delivery")]')
    }

    get optnEasyDelivery() {
        return $('//span[contains(text(),"Easy 3-5 week delivery")]')
    }

    get drpEasyDelivery() {
        return $('//div[contains(text(),"Easy")]')
    }

    get drpBandDefault() {
        return $('//div[contains(text(),"No Band")]')
    }

    get optnNoBand() {
        return $('//span[contains(text(),"No Band")]')
    }

    get optnMensBand() {
        return $('//span[contains(text(),"Men\'s Band")]')
    }

    get optnWomensBand() {
        return $('//span[contains(text(),"Women\'s Band")]')
    }

    get optnBothBands() {
        return $('//span[contains(text(),"Both Bands")]')
    }

    get optnAdditionalMensRing() {
        return $('//span[contains(text(),"Additional")]')
    }

    get drpMensBand() {
        return $('//div[contains(text(),"Men\'s Band")]')
    }

    get drpWomensBand() {
        return $('//div[contains(text(),"Women\'s Band")]')
    }

    get drpBothBands() {
        return $('//div[contains(text(),"Both Bands")]')
    }

    get drpAdditionalMensRing() {
        return $('//div[contains(text(),"Additional")]')
    }

    get drpPaymentDefault() {
        return $('//div[contains(text(),"Credit/Debit")]')
    }

    get optnCardPayment() {
        return $('//span[contains(text(),"Credit/Debit cards")]')
    }

    get optnWirePayment() {
        return $('//span[contains(text(),"Wire Payment")]')
    }

    get drpWirePayment() {
        return $('//div[contains(text(),"Wire Payment")]')
    }


//DIAMOND - FILTERS

    get sctnFilters() {
        return $('//div[@class="corner-gaps p-t-20 p-t-10-mob container full-hd full-hd-4k"]')
    }

    //Gems
    get gemstext(){
        return $('//div[@class="tooltip-trigger"]/span[contains(text(),"Gems")]')
    }

    get gemspopup(){
        return $('//span[contains(text(),"Gems")]/parent::div/preceding-sibling::div[@class="tooltip-content"]')
    }

    get activenaturaldiamondbutton(){
        return $('//div[@class="filter-menu-icons-new stone-wrapper di stone-active"]')
    }

    get naturaldiamondbutton(){
        return $('//div[@class="filter-menu-icons-new stone-wrapper di"]')
    }

    get naturaldiamondtext(){
        return $('//strong[text()="Natural Diamond"]')
    }

    get labdiamondbutton(){
        return $('//div[@class="filter-menu-icons-new stone-wrapper dilabvs"]')
    }

    get activelabdiamondbutton() {
        return $('//div[@class="filter-menu-icons-new stone-wrapper dilabvs stone-active"]')
    }

    get labdiamondtext(){
        return $('//strong[text()="Lab Diamond"]')
    }

    //shapes
    get shapestext(){
        return $('//div[@class="tooltip-trigger"]/span[contains(text(),"Shapes")]')
    }

    get shapespopup(){  
        return $('//span[contains(text(),"Shapes")]/parent::div/preceding-sibling::div[@class="tooltip-content"]')
    }

    get shapesroundactive() {
        return $('//div[@title="Round" and @class="myoj-filter-menu-icons myoj-diamond m-b-5 s-round-myoj shape-wrapper shape-active"]')
    }

    get imglnkround(){
        return $('//div[@title="Round"]')
    }
    
    get imglnkAsscher(){
        return $('//div[@title="Asscher"]')
    }
    
    get imglnkBaguette(){
        return $('//div[@title="Baguette"]')
    }
    
    get imglnkCushion(){
        return $('//div[@title="Cushion"]')
    }
    
    get imglnkEmerald(){
        return $('//div[@title="Emerald"]')
    }
    
    get imglnkHeart(){
        return $('//div[@title="Heart"]')
    }
    
    get imglnkHexagonal(){
        return $('//div[@title="Hexagonal"]')
    }
    
    get imglnkMarquise(){
        return $('//div[@title="Marquise"]')
    }

    get imglnkOval(){
        return $('//div[@title="Oval"]')
    }
    
    get imglnkPear(){
        return $('//div[@title="Pear"]')
    }
    
    get imglnkPrincess(){
        return $('//div[@title="Princess"]')
    }
    
    get imglnkRadiant(){
        return $('//div[@title="Radiant"]')
    }    

    get imglnkRosecut(){
        return $('//div[@title="Rose Cut"]')
    }
        
    get imglnkTriangle(){
        return $('//div[@title="Triangle"]')
    }    

    get imglnkSquare(){
        return $('//div[@title="Square"]')
    }    

    //price
    get pricetext(){
        return $('//div[@class="tooltip-trigger"]/span[contains(text(),"Price")]')
    }

    get pricepopup(){
        return $('//span[contains(text(),"Price")]/parent::div/preceding-sibling::div[@class="tooltip-content"]')
    }

    get pricedragleftbutton(){
        return $('//div[@class="b-slider-thumb-wrapper"]//div[@aria-label="Price-1"]')
    }

    get pricedragrightbutton(){
        return $('//div[@class="b-slider-thumb-wrapper"]//div[@aria-label="Price-2"]')
    }

    get priceslidertrack() {
        return $('//div[@class="columns is-gapless bottom-space is-inline-touch m-b-0"]//div[@class="column right-space"]//div[@class="b-slider-track"]')
    }

    get priceleftbox(){
        return $('//input[@aria-label="Min Price"]')
    }

    get pricerightbox(){
        return $('//input[@aria-label="Max Price"]')
    }

    get priceleftbox$Symbol() {
        return $('//div[@class="field small-icon-wrapper is-relative"]//span[@class="material-icons small-icon"]')
    }

    get pricerighttbox$Symbol() {
        return $('//div[@class="field small-icon-wrapper is-relative p-r-5"]//span[@class="material-icons small-icon"]')
    }

    get dropPriceLeftButton() {
        return $('//div[@aria-label="Price-1" and @aria-valuenow="5000"]')
    }

    get dropPriceRightButton() {
        return $('//div[@aria-label="Price-2" and @aria-valuenow="10000"]')
    }

    get txtFixedMinPrice() {
        return $('//div[text()="50"]')
    }

    get txtFixedMaxPrice() {
        return $('//div[text()="99,999"]')
    }

    get txtEnteredMinPrice() {
        return $('//div[text()="5,000"]')
    }

    get txtEnteredMaxPrice() {
        return $('//div[text()="10,000"]')
    }

    get msgInvalidMinPrice() {
        return $('//p[text()=" Value must be greater than or equal to 50. "]')
    }

    get msgInvalidMaxPrice() {
        return $('//p[text()=" Value must be less than or equal to 99999. "]')
    }

    get msgInvalidMinDecimalPrice() {
        return $('//p[contains(text(),"nearest valid values are 1100 and 1101")]')
    }

    get msgInvalidMaxDecimalPrice() {
        return $('//p[contains(text(),"nearest valid values are 9999 and 10000")]')
    }

    get msgInvalidChar() {
        return $('//p[contains(text(),"Please enter a number.")]')
    }

    get txtInvalidChar() {
        return $('//div[text()="&*(abc"]')
    }

    //carat
    get carattext(){
        return $('//div[@class="tooltip-trigger"]/span[contains(text(),"Carat")]')
    }

    get caratpopup(){
        return $('//span[contains(text(),"Carat")]/parent::div/preceding-sibling::div[@class="tooltip-content"]')
    }

    get caratdragleftbutton(){
        return $('//div[@class="b-slider-thumb-wrapper"]//div[@aria-label="Carat-1"]')
    }

    get caratdragrightbutton(){
        return $('//div[@class="b-slider-thumb-wrapper"]//div[@aria-label="Carat-2"]')
    }

    get caratslidertrack() {
        return $('//div[@class="columns is-gapless bottom-space is-inline-touch m-b-0"]//div[@class="column"]//div[@class="b-slider-track"]')
    }

    get caratleftbox(){
        return $('//input[@aria-label="Min Carat"]')
    }

    get caratrightbox(){
        return $('//input[@aria-label="Max Carat"]')
    }

    get dropCaratLeftButton() {
        return $('//div[@aria-label="Carat-1" and @aria-valuenow="1.5"]')
    }

    get dropCaratRightButton() {
        return $('//div[@aria-label="Carat-2" and @aria-valuenow="15"]')
    }

    get txtFixedMinCarat() {
        return $('//div[text()="0.2"]')
    }

    get txtFixedMaxCarat() {
        return $('//div[text()="30"]')
    }

    get txtEnteredMinCarat() {
        return $('//div[text()="1.5"]')
    }

    get txtEnteredMaxCarat() {
        return $('//div[text()="15"]')
    }

    get msgInvalidMinDecimalCarat() {
        return $('//p[contains(text(),"nearest valid values are 0.8 and 0.81")]')
    }

    get msgInvalidMaxDecimalCarat() {
        return $('//p[contains(text(),"nearest valid values are 15.99 and 16")]')
    }

    get msgInvalidMinCarat() {
        return $('//p[text()=" Value must be greater than or equal to 0.2. "]')
    }

    get msgInvalidMaxCarat() {
        return $('//p[text()=" Value must be less than or equal to 30. "]')
    }

    //Clarity
    get claritytext(){
        return $('//div[@class="tooltip-trigger"]/div/span[contains(text(),"Clarity")]')
    }

    get claritypopup(){
        return $('//div[@class="tooltip-trigger"]/div/span[contains(text(),"Clarity")]/parent::div/parent::div/preceding-sibling::div[@class="tooltip-content"]')
    }

    get claritypopupdetails(){
        return $('//div[@class="tooltip-trigger"]/div/span[contains(text(),"Clarity")]/parent::div/parent::div/preceding-sibling::div/div/b/u[contains(text(),"View Details")]')
    }

    get claritydragleftbutton(){
        return $('//div[@class="b-slider-thumb-wrapper"]//div[@aria-label="Clarity-1"]')
    }

    get claritydragrightbutton(){
        return $('//div[@class="b-slider-thumb-wrapper"]//div[@aria-label="Clarity-2"]')
    }

    get dropEndClarityRightButton() {
        return $('//div[@aria-label="Clarity-2" and @aria-valuenow="0"]')
    }

    get dropEndClarityLeftButton() {
        return $('//div[@aria-label="Clarity-1" and @aria-valuenow="12"]')
    }

    get dropClarityLeftButton() {
        return $('//div[@aria-label="Clarity-1" and @aria-valuenow="4"]')
    }

    get dropClarityRightButton() {
        return $('//div[@aria-label="Clarity-2" and @aria-valuenow="8"]')
    }

    get clarityslidertrack() {
        return $('//div[@class="b-slider clarity-filter-active clarity-filter is-medium is-primary is-rounded"]//div[@class="b-slider-track"]')
    }

    get clarityFLtext() {
        return ('//span[contains(text(),"FL")]')
    }

    get clarityIFtext() {
        return ('//span[contains(text(),"IF")]')
    }

    get clarityVVS1text() {
        return ('//span[contains(text(),"VVS1")]')
    }

    get clarityVVS2text() {
        return ('//span[contains(text(),"VVS2")]')
    }

    get clarityVS1text() {
        return ('(//span[contains(text(),"VS1")])[2]')
    }

    get clarityVS2text() {
        return ('(//span[contains(text(),"VS2")])[2]')
    }

    get claritySI1text() {
        return ('//span[contains(text(),"SI1")]')
    }

    get claritySI2text() {
        return ('//span[contains(text(),"SI2")]')
    }

    get claritySI3text() {
        return ('//span[contains(text(),"SI3")]')
    }

    get clarityI1text() {
        return ('(//span[contains(text(),"I1")])[2]')
    }

    get clarityI2text() {
        return ('(//span[contains(text(),"I2")])[2]')
    }

    get clarityI3text() {
        return ('(//span[contains(text(),"I3")])[2]')
    }

    //Color
    get colortext(){
        return $('//div[@class="tooltip-trigger"]/div/span[contains(text(),"Color")]')
    }

    get colorpopup(){
        return $('//span[@class="hide-tooltip-touch b-tooltip is-light is-top is-medium is-always is-multiline"]//div[@class="tooltip-trigger"]//div//span[@class="accordian-header-font filter-heading-border is-clickable p-5-mob"]')
    }

    get colorpopupdetails(){
        return $('//div[@class="tooltip-trigger"]/div/span[contains(text(),"Color")]/parent::div/parent::div/preceding-sibling::div/div/b/u[contains(text(),"View Details")]')
    }

    get colordragleftbutton(){
        return $('//div[@class="b-slider-thumb-wrapper"]//div[@aria-label="Color-1"]')
    }

    get colordragrightbutton(){
        return $('//div[@class="b-slider-thumb-wrapper"]//div[@aria-label="Color-2"]')
    }

    get dropEndColorRightButton() {
        return $('//div[@aria-label="Color-2" and @aria-valuenow="0"]')
    }

    get dropEndColorLeftButton() {
        return $('//div[@aria-label="Color-1" and @aria-valuenow="10"]')
    }

    get dropColorLeftButton() {
        return $('//div[@aria-label="Color-1" and @aria-valuenow="2"]')
    }

    get dropColorRightButton() {
        return $('//div[@aria-label="Color-2" and @aria-valuenow="7"]')
    }

    get colorslidertrack() {
        return $ ('//div[@class="columns is-gapless bottom-space m-b-0 is-inline-touch"]//div[@class="column"]//div[@class="b-slider-track"]')
    }

    get colorDtext() {
        return $('(//span[contains(text(),"Color")]/following::span[contains(text(),"D")])[1]')
    }

    get colorEtext() {
        return $('(//span[contains(text(),"Color")]/following::span[contains(text(),"E")])[1]')
    }

    get colorFtext() {
        return $('(//span[contains(text(),"Color")]/following::span[contains(text(),"F")])[1]')
    }

    get colorGtext() {
        return $('(//span[contains(text(),"Color")]/following::span[contains(text(),"G")])[1]')
    }

    get colorHtext() {
        return $('(//span[contains(text(),"Color")]/following::span[contains(text(),"H")])[1]')
    }

    get colorItext() {
        return $('(//span[contains(text(),"Color")]/following::span[contains(text(),"I")])[1]')
    }

    get colorJtext() {
        return $('(//span[contains(text(),"Color")]/following::span[contains(text(),"J")])[1]')
    }

    get colorKtext() {
        return $('(//span[contains(text(),"Color")]/following::span[contains(text(),"K")])[1]')
    }

    get colorLtext() {
        return $('(//span[contains(text(),"Color")]/following::span[contains(text(),"L")])[1]')
    }

    get colorMtext() {
        return $('(//span[contains(text(),"Color")]/following::span[contains(text(),"M")])[1]')
    }
    
    //Symmetry
    get symmetrytext(){
        return $('//div[@class="tooltip-trigger"]/div/span[contains(text(),"Symmetry")]')
    }

    get symmetrypopup(){
        return $('//div[@class="tooltip-trigger"]/div/span[contains(text(),"Symmetry")]/parent::div/parent::div/preceding-sibling::div[@class="tooltip-content"]')
    }

    get symmetrypopupdetails(){
        return $('//div[@class="tooltip-trigger"]/div/span[contains(text(),"Symmetry")]/parent::div/parent::div/preceding-sibling::div/div/b/u[contains(text(),"View Details")]')
    }

    get symmetrydragleftbutton(){
        return $('//div[@class="b-slider-thumb-wrapper"]//div[@aria-label="Symmetry-1"]')
    }

    get symmetrydragrightbutton(){
        return $('//div[@class="b-slider-thumb-wrapper"]//div[@aria-label="Symmetry-2"]')
    }

    get dropEndSymmetryRightButton() {
        return $('//div[@aria-label="Symmetry-2" and @aria-valuenow="0"]')
    }

    get dropEndSymmetryLeftButton() {
        return $('//div[@aria-label="Symmetry-1" and @aria-valuenow="4"]')
    }

    get dropSymmetryLeftButton() {
        return $('//div[@aria-label="Symmetry-1" and @aria-valuenow="1"]')
    }

    get dropSymmetryRightButton() {
        return $('//div[@aria-label="Symmetry-2" and @aria-valuenow="3"]')
    }

    get symmetryslidertrack() {
        return $ ('//span[contains(text(), "Symmetry")]/ancestor::div[contains(@class, "columns")]/div[@class="column is-hidden-mobile"]/div[@class="slider-section m-b-0"]/div[@class="b-slider large is-medium is-primary is-rounded"]/div[@class="b-slider-track"]')
    }

    get symmetrygoodtext() {
        return $('(//span[contains(text(),"Symmetry")]/following::span[contains(text(),"Good")])[1]')
    }

    get symmetryverygoodtext() {
        return $('(//span[contains(text(),"Symmetry")]/following::span[contains(text(),"Very Good")])[1]')
    }

    get symmetryexcellenttext() {
        return $('(//span[contains(text(),"Symmetry")]/following::span[contains(text(),"Excellent")])[1]')
    }

    get symmetryidealtext() {
        return $('(//span[contains(text(),"Symmetry")]/following::span[contains(text(),"Ideal")])[1]')
    }

    //Fluorescence
    get fluorescencetext(){
        return $('//div[@class="tooltip-trigger"]/span[contains(text(),"Fluorescence")]')
    }

    get fluorescencepopup(){
        return $('//div[@class="tooltip-trigger"]/span[contains(text(),"Fluorescence")]/parent::div/preceding-sibling::div[@class="tooltip-content"]')
    }

    get fluorescencedragleftbutton(){
        return $('//div[@class="b-slider-thumb-wrapper"]//div[@aria-label="Fluorescence-1"]')
    }

    get fluorescencedragrightbutton(){
        return $('//div[@class="b-slider-thumb-wrapper"]//div[@aria-label="Fluorescence-2"]')
    }

    get dropEndFluorescenceRightButton() {
        return $('//div[@aria-label="Fluorescence-2" and @aria-valuenow="0"]')
    }

    get dropEndFluorescenceLeftButton() {
        return $('//div[@aria-label="Fluorescence-1" and @aria-valuenow="5"]')
    }

    get dropFluorescenceLeftButton() {
        return $('//div[@aria-label="Fluorescence-1" and @aria-valuenow="1"]')
    }

    get dropFluorescenceRightButton() {
        return $('//div[@aria-label="Fluorescence-2" and @aria-valuenow="4"]')
    }

    get fluorescenceslidertrack() {
        return $('//div[@class="column"]//div[@class="b-slider large is-medium is-primary is-rounded"]//div[@class="b-slider-track"]')
    }

    get fluorescencenonetext() {
        return $('//span[contains(text(),"None")]')
    }

    get fluorescencefainttext() {
        return $('//span[contains(text(),"Faint")]')
    }

    get fluorescencemediumtext() {
        return ('//span[contains(text(),"Medium")]')
    }

    get fluorescencestrongtext() {
        return ('//span[contains(text(),"Strong")]')
    }

    get fluorescenceverystrongtext() {
        return ('//span[contains(text(),"Very Strong")]')
    }

    //length
    get lengthtext(){
        return $('//div[@class="tooltip-trigger"]/span[contains(text(),"Length")]')
    }

    get lengthpopup(){
        return $('//div[@class="tooltip-trigger"]/span[contains(text(),"Length")]/parent::div/preceding-sibling::div[@class="tooltip-content"]')
    }

    get lengthdragleftbutton(){
        return $('//div[@class="b-slider-thumb-wrapper"]//div[@aria-label="Lenght-1"]')
    }

    get lengthdragrightbutton(){
        return $('//div[@class="b-slider-thumb-wrapper"]//div[@aria-label="Lenght-2"]')
    }

    get dropLengthLeftButton() {
        return $('//div[@aria-label="Lenght-1" and @aria-valuenow="5"]')
    }

    get dropLengthRightButton() {
        return $('//div[@aria-label="Lenght-2" and @aria-valuenow="7"]')
    }

    get lengthslidertrack() {
        return $('//div[@class="columns is-gapless m-b-0 is-inline-touch"]//div[@class="column right-space"]//div[@class="slider-section"]//div[@class="b-slider-track"]')
    }

    get lengthleftbox(){
        return $('//input[@aria-label="Min Length"]')
    }

    get lengthrightbox(){
        return $('//input[@aria-label="Max Length"]')
    }

    get txtFixedMinLength() {
        return $('(//span[contains(text(),"Length")]//following::div[text()="0"])[1]')
    }

    get txtFixedMaxLength() {
        return $('(//span[contains(text(),"Length")]//following::div[text()="20"])[1]')
    }

    get txtEnteredMinLength() {
        return $('//div[@style="left: 14.2857%;"]/span/div[text()="5"]')
    }

    get txtEnteredMaxLength() {
        return $('//div[@style="left: 71.4286%;"]/span/div[text()="7"]')
    }

    get msgInvalidMinLength() {
        return $('//p[text()=" Value must be greater than or equal to 3. "]')
    }

    get msgInvalidMaxLength() {
        return $('//p[text()=" Value must be less than or equal to 12. "]')
    }

    get msgInvalidMinDecimalLength() {
        return $('//p[contains(text(),"nearest valid values are 5.21 and 5.22")]')
    }

    get msgInvalidMaxDecimalLength() {
        return $('//p[contains(text(),"nearest valid values are 6.25 and 6.26")]')
    }

    get defRingsRoundLength() {
        return $('//input[@aria-label="Min Length" and @min="3" and @max="12"]')
    }

    get defRingsOvalLength() {
        return $('//input[@aria-label="Min Length" and @min="4" and @max="12"]')
    }

    get defRingsPrincessLength() {
        return $('//input[@aria-label="Min Length" and @min="5" and @max="7.5"]')
    }

    get defRingsEmeraldLength() {
        return $('//input[@aria-label="Min Length" and @min="4" and @max="16"]')
    } 

    get defRingsHeartLength() {
        return $('//input[@aria-label="Min Length" and @min="5" and @max="8"]')
    }

    get defRingsCushionLength() {
        return $('//input[@aria-label="Min Length" and @min="5" and @max="10"]')
    }

    get defRingsPearLength() {
        return $('//input[@aria-label="Min Length" and @min="5" and @max="10"]')
    } 

    get defRingsMarquiseLength() {
        return $('//input[@aria-label="Min Length" and @min="3" and @max="12"]')
    }

    get defEarringsRoundLength() {
        return $('//input[@aria-label="Min Length" and @min="4.5" and @max="8"]')
    }

    get defEarringsOvalLength() {
        return $('//input[@aria-label="Min Length" and @min="3" and @max="10"]')
    }

    get defEarringsPrincessLength() {
        return $('//input[@aria-label="Min Length" and @min="5" and @max="6.5"]')
    }

    get defEarringsEmeraldLength() {
        return $('//input[@aria-label="Min Length" and @min="5" and @max="10"]')
    } 

    get defEarringsHeartLength() {
        return $('//input[@aria-label="Min Length" and @min="5" and @max="7"]')
    }

    get defEarringsCushionLength() {
        return $('//input[@aria-label="Min Length" and @min="5" and @max="7.5"]')
    }

    get defEarringsPearLength() {
        return $('//input[@aria-label="Min Length" and @min="3" and @max="9"]')
    } 

    get defEarringsTriangleLength() {
        return $('//input[@aria-label="Min Length" and @min="5" and @max="7.5"]')
    }

    get defNecklacesRoundLength() {
        return $('//input[@aria-label="Min Length" and @min="5" and @max="9"]')
    }

    get defNecklacesOvalLength() {
        return $('//input[@aria-label="Min Length" and @min="4" and @max="10"]')
    } 

    get defNecklacesPrincessLength() {
        return $('//input[@aria-label="Min Length" and @min="5" and @max="6.5"]')
    }

    get defNecklacesEmeraldLength() {
        return $('//input[@aria-label="Min Length" and @min="5" and @max="12"]')
    }

    get defNecklacesHeartLength() {
        return $('//input[@aria-label="Min Length" and @min="5" and @max="8"]')
    }

    get defNecklacesCushionLength() {
        return $('//input[@aria-label="Min Length" and @min="5" and @max="10"]')
    }

    get defNecklacesPearLength() {
        return $('//input[@aria-label="Min Length" and @min="3" and @max="10"]')
    }

    get defNecklacesTriangleLength() {
        return $('//input[@aria-label="Min Length" and @min="5" and @max="6"]')
    }

    get defMensRingsRoundLength() {
        return $('//input[@aria-label="Min Length" and @min="5" and @max="8"]')
    }

    get defMensRingsOvalLength() {
        return $('//input[@aria-label="Min Length" and @min="6" and @max="12"]')
    } 

    get defMensRingsPrincessLength() {
        return $('//input[@aria-label="Min Length" and @min="5" and @max="8"]')
    }

    get defMensRingsEmeraldLength() {
        return $('//input[@aria-label="Min Length" and @min="6" and @max="12"]')
    }

    get defMensRingsCushionLength() {
        return $('//input[@aria-label="Min Length" and @min="5" and @max="11"]')
    } 

    //breadth
    get breadthtext(){
        return $('//div[@class="tooltip-trigger"]/span[contains(text(),"Breadth")]')
    }

    get breadthpopup(){
        return $('//div[@class="tooltip-trigger"]/span[contains(text(),"Breadth")]/parent::div/preceding-sibling::div[@class="tooltip-content"]')
    }

    get breadthdragleftbutton(){
        return $('//div[@class="b-slider-thumb-wrapper"]//div[@aria-label="Breadth-1"]')
    }

    get breadthdragrightbutton(){
        return $('//div[@class="b-slider-thumb-wrapper"]//div[@aria-label="Breadth-2"]')
    }

    get dropBreadthLeftButton() {
        return $('//div[@aria-label="Breadth-1" and @aria-valuenow="6"]')
    }

    get dropBreadthRightButton() {
        return $('//div[@aria-label="Breadth-2" and @aria-valuenow="8"]')
    }

    get breadthslidertrack() {
        return $('//div[@class="columns is-gapless m-b-0 is-inline-touch"]//div[@class="column"]//div[@class="slider-section"]//div[@class="b-slider-track"]')
    }

    get breadthleftbox(){
        return $('//input[@aria-label="Min Breadth"]')
    }

    get breadthrightbox(){
        return $('//input[@aria-label="Max Breadth"]')
    }

    get txtFixedMinBreadth() {
        return $('(//span[contains(text(),"Breadth")]//following::div[text()="0"])[1]')
    }

    get txtFixedMaxBreadth() {
        return $('(//span[contains(text(),"Breadth")]//following::div[text()="20"])[1]')
    }

    get txtEnteredMinBreadth() {
        return $('//div[@style="left: 25%;"]/span/div[text()="6"]')
    }

    get txtEnteredMaxBreadth() {
        return $('//div[@style="left: 75%;"]/span/div[text()="8"]')
    }

    get msgInvalidMinBreadth() {
        return $('//p[text()=" Value must be greater than or equal to 5. "]')
    }

    get msgInvalidMaxBreadth() {
        return $('//p[text()=" Value must be less than or equal to 8. "]')
    }

    get msgInvalidMinDecimalBreadth() {
        return $('//p[contains(text(),"nearest valid values are 6.55 and 6.56")]')
    }

    get msgInvalidMaxDecimalBreadth() {
        return $('//p[contains(text(),"nearest valid values are 6.88 and 6.89")]')
    }

    get defRingsRoundBreadth() {
        return $('//input[@aria-label="Min Breadth" and @min="3" and @max="12"]')
    }

    get defRingsOvalBreadth() {
        return $('//input[@aria-label="Min Breadth" and @min="4" and @max="12"]')
    }

    get defRingsPrincessBreadth() {
        return $('//input[@aria-label="Min Breadth" and @min="5" and @max="7.5"]')
    }

    get defRingsEmeraldBreadth() {
        return $('//input[@aria-label="Min Breadth" and @min="3" and @max="12"]')
    }

    get defRingsHeartBreadth() {
        return $('//input[@aria-label="Min Breadth" and @min="5" and @max="8"]')
    }

    get defRingsCushionBreadth() {
        return $('//input[@aria-label="Min Breadth" and @min="5" and @max="10"]')
    }

    get defRingsPearBreadth() {
        return $('//input[@aria-label="Min Breadth" and @min="3" and @max="10"]')
    }

    get defRingsMarquiseBreadth() {
        return $('//input[@aria-label="Min Breadth" and @min="3" and @max="12"]')
    }

    get defEarringsRoundBreadth() {
        return $('//input[@aria-label="Min Breadth" and @min="4.5" and @max="8"]')
    }

    get defEarringsOvalBreadth() {
        return $('//input[@aria-label="Min Breadth" and @min="3" and @max="9"]')
    }

    get defEarringsPrincessBreadth() {
        return $('//input[@aria-label="Min Breadth" and @min="5" and @max="6.5"]')
    }

    get defEarringsEmeraldBreadth() {
        return $('//input[@aria-label="Min Breadth" and @min="4" and @max="10"]')
    }

    get defEarringsHeartBreadth() {
        return $('//input[@aria-label="Min Breadth" and @min="5" and @max="7"]')
    }

    get defEarringsCushionBreadth() {
        return $('//input[@aria-label="Min Breadth" and @min="5" and @max="7.5"]')
    }

    get defEarringsPearBreadth() {
        return $('//input[@aria-label="Min Breadth" and @min="3" and @max="10"]')
    } 

    get defEarringsTriangleBreadth() {
        return $('//input[@aria-label="Min Breadth" and @min="5" and @max="7.5"]')
    }

    get defNecklacesRoundBreadth() {
        return $('//input[@aria-label="Min Breadth" and @min="5" and @max="9"]')
    }

    get defNecklacesOvalBreadth() {
        return $('//input[@aria-label="Min Breadth" and @min="4" and @max="12"]')
    } 

    get defNecklacesPrincessBreadth() {
        return $('//input[@aria-label="Min Breadth" and @min="5" and @max="6.5"]')
    }

    get defNecklacesEmeraldBreadth() {
        return $('//input[@aria-label="Min Breadth" and @min="5" and @max="12"]')
    }

    get defNecklacesHeartBreadth() {
        return $('//input[@aria-label="Min Breadth" and @min="5" and @max="8"]')
    }

    get defNecklacesCushionBreadth() {
        return $('//input[@aria-label="Min Breadth" and @min="5" and @max="10"]')
    }

    get defNecklacesPearBreadth() {
        return $('//input[@aria-label="Min Breadth" and @min="3" and @max="10"]')
    }

    get defNecklacesTriangleBreadth() {
        return $('//input[@aria-label="Min Breadth" and @min="5" and @max="6"]')
    }

    get defMensRingsRoundBreadth() {
        return $('//input[@aria-label="Min Breadth" and @min="5" and @max="8"]')
    }

    get defMensRingsOvalBreadth() {
        return $('//input[@aria-label="Min Breadth" and @min="4" and @max="8"]')
    } 

    get defMensRingsPrincessBreadth() {
        return $('//input[@aria-label="Min Breadth" and @min="5" and @max="8"]')
    }

    get defMensRingsEmeraldBreadth() {
        return $('//input[@aria-label="Min Breadth" and @min="4" and @max="12"]')
    }

    get defMensRingsCushionBreadth() {
        return $('//input[@aria-label="Min Breadth" and @min="5" and @max="10"]')
    }

    //table%
    get tabletext(){
        return $('//div[@class="tooltip-trigger"]/span[contains(text(),"Table%")]')
    }

    get tablepopup(){
        return $('//div[@class="tooltip-trigger"]/span[contains(text(),"Table%")]/parent::div/preceding-sibling::div[@class="tooltip-content"]')
    }

    get tabledragleftbutton(){
        return $('//div[@class="b-slider-thumb-wrapper"]//div[@aria-label="Table-1"]')
    }

    get tabledragrightbutton(){
        return $('//div[@class="b-slider-thumb-wrapper"]//div[@aria-label="Table-2"]')
    }

    get dropTableLeftButton() {
        return $('//div[@aria-label="Table-1" and @aria-valuenow="28"]')
    }

    get dropTableRightButton() {
        return $('//div[@aria-label="Table-2" and @aria-valuenow="65"]')
    }

    get tableslidertrack() {
        return $('//div[@class="columns is-gapless m-b-0 is-multiline is-inline-touch"]//div[@class="column right-space"]//div[@class="b-slider-track"]')
    }

    get tableleftbox(){
        return $('//input[@aria-label="Min Table"]')
    }

    get tablerightbox(){
        return $('//input[@aria-label="Max Table"]')
    }

    get txtFixedMinTable() {
        return $('(//span[contains(text(), "Table%")]/following::div[text()="1"])[1]')
    }

    get txtFixedMaxTable() {
        return $('(//span[contains(text(), "Table%")]/following::div[text()="100"])[1]')
    }

    get txtEnteredMinTable() {
        return $('//div[@style="left: 27.2727%;"]/span/div[text()="28"]')
    }

    get txtEnteredMaxTable() {
        return $('//div[@style="left: 64.6465%;"]/span/div[text()="65"]')
    }

    get msgInvalidMintablepercent() {
        return $('//p[text()=" Value must be greater than or equal to 1. "]')
    }

    get msgInvalidMaxtablepercent() {
        return $('//p[text()=" Value must be less than or equal to 100. "]')
    }

    get msgInvalidMinDecimalTable() {
        return $('//p[contains(text(),"nearest valid values are 45 and 46")]')
    }

    get msgInvalidMaxDecimalTable() {
        return $('//p[contains(text(),"nearest valid values are 72 and 73")]')
    }

    //depth%
    get depthtext(){
        return $('//div[@class="tooltip-trigger"]/span[contains(text(),"Depth%")]')
    }

    get depthpopup(){
        return $('//div[@class="tooltip-trigger"]/span[contains(text(),"Depth%")]/parent::div/preceding-sibling::div[@class="tooltip-content"]')
    }

    get depthdragleftbutton(){
        return $('//div[@class="b-slider-thumb-wrapper"]//div[@aria-label="Depth-1"]')
    }

    get depthdragrightbutton(){
        return $('//div[@class="b-slider-thumb-wrapper"]//div[@aria-label="Depth-2"]')
    }

    get dropDepthLeftButton() {
        return $('//div[@aria-label="Depth-1" and @aria-valuenow="35"]')
    }

    get dropDepthRightButton() {
        return $('//div[@aria-label="Depth-2" and @aria-valuenow="84"]')
    }

    get depthslidertrack(){
        return $('//div[@class="columns is-gapless m-b-0 is-multiline is-inline-touch"]//div[@class="column"]//div[@class="b-slider-track"]')
    }

    get depthleftbox(){
        return $('//input[@aria-label="Min Depth"]')
    }

    get depthrightbox(){
        return $('//input[@aria-label="Max Depth"]')
    }

    get txtFixedMinDepth() {
        return $('//span[contains(text(), "Depth%")]/following::div[text()="1"]')
    }

    get txtFixedMaxDepth() {
        return $('//span[contains(text(), "Depth%")]/following::div[text()="100"]')
    }

    get txtEnteredMinDepth() {
        return $('//div[@style="left: 34.3434%;"]/span/div[text()="35"]')
    }

    get txtEnteredMaxDepth() {
        return $('//div[@style="left: 83.8384%;"]/span/div[text()="84"]')
    }

    get msgInvalidMindepthpercent() {
        return $('//p[text()=" Value must be greater than or equal to 1. "]')
    }

    get msgInvalidMaxdepthpercent() {
        return $('//p[text()=" Value must be less than or equal to 100. "]')
    }

    get msgInvalidMinDecimalDepth() {
        return $('//p[contains(text(),"nearest valid values are 27 and 28")]')
    }

    get msgInvalidMaxDecimalDepth() {
        return $('//p[contains(text(),"nearest valid values are 88 and 89")]')
    }

    //cut
    get cuttext(){
        return $('//div[@class="tooltip-trigger"]/div/span[contains(text(),"Cut")]')
    }

    get cutpopup(){
        return $('//div[@class="tooltip-trigger"]/div/span[contains(text(),"Cut")]/parent::div/parent::div/preceding-sibling::div[@class="tooltip-content"]')
    }

    get cutpopupdetails(){
        return $('//div[@class="tooltip-trigger"]/div/span[contains(text(),"Cut")]/parent::div/parent::div/preceding-sibling::div/div/b/u[contains(text(),"View Details")]')
    }

    get cutdragleftbutton(){
        return $('//div[@class="b-slider-thumb-wrapper"]//div[@aria-label="Cut-1"]')
    }

    get cutdragrightbutton(){
        return $('//div[@class="b-slider-thumb-wrapper"]//div[@aria-label="Cut-2"]')
    }

    get dropEndCutRightButton() {
        return $('//div[@aria-label="Cut-2" and @aria-valuenow="0"]')
    }

    get dropEndCutLeftButton() {
        return $('//div[@aria-label="Cut-1" and @aria-valuenow="4"]')
    }

    get dropCutLeftButton() {
        return $('//div[@aria-label="Cut-1" and @aria-valuenow="1"]')
    }

    get dropCutRightButton() {
        return $('//div[@aria-label="Cut-2" and @aria-valuenow="3"]')
    }

    get cutslidertrack() {
        return $('//span[contains(text(), "Cut")]/ancestor::div[contains(@class, "columns")]/div[@class="column is-hidden-mobile"]/div[@class="slider-section m-b-0"]/div[@class="b-slider large is-medium is-primary is-rounded"]/div[@class="b-slider-track"]')
    }

    get cutgoodtext() {
        return ('(//span[contains(text(),"Cut")]/following::span[contains(text(),"Good")])[1]')
    }

    get cutverygoodtext() {
        return ('(//span[contains(text(),"Cut")]/following::span[contains(text(),"Very Good")])[1]')
    }

    get cutexcellenttext() {
        return ('(//span[contains(text(),"Cut")]/following::span[contains(text(),"Execellent")])[1]')
    }

    get cutidealtext() {
        return ('(//span[contains(text(),"Cut")]/following::span[contains(text(),"Ideal")])[1]')
    }

    get cutdisabledslider() {
        return ('//div[@class="b-slider large is-medium is-primary is-rounded is-disabled"]')
    }

    //polish
    get polishtext(){
        return $('//div[@class="tooltip-trigger"]/span[contains(text(),"Polish")]')
    }

    get polishpopup(){
        return $('//div[@class="tooltip-trigger"]/span[contains(text(),"Polish")]/parent::div/preceding-sibling::div[@class="tooltip-content"]')
    }

    get polishdragleftbutton(){
        return $('//div[@class="b-slider-thumb-wrapper"]//div[@aria-label="Polish-1"]')
    }

    get polishdragrightbutton(){
        return $('//div[@class="b-slider-thumb-wrapper"]//div[@aria-label="Polish-2"]')
    }

    get dropEndPolishRightButton() {
        return $('//div[@aria-label="Polish-2" and @aria-valuenow="0"]')
    }

    get dropEndPolishLeftButton() {
        return $('//div[@aria-label="Polish-1" and @aria-valuenow="4"]')
    }

    get dropPolishLeftButton() {
        return $('//div[@aria-label="Polish-1" and @aria-valuenow="1"]')
    }

    get dropPolishRightButton() {
        return $('//div[@aria-label="Polish-2" and @aria-valuenow="3"]')
    }

    get polishslidertrack() {
        return $('//span[contains(text(), "Polish")]/ancestor::div[contains(@class, "columns")]/div[@class="column is-hidden-mobile"]/div[@class="slider-section m-b-0"]/div[@class="b-slider large is-medium is-primary is-rounded"]/div[@class="b-slider-track"]')
    }

    get polishgoodtext() {
        return ('(//span[contains(text(),"Polish")]/following::span[contains(text(),"Good")])[1]')
    }

    get polishverygoodtext() {
        return ('(//span[contains(text(),"Polish")]/following::span[contains(text(),"Very Good")])[1]')
    }

    get polishexcellenttext() {
        return ('(//span[contains(text(),"Polish")]/following::span[contains(text(),"Execellent")])[1]')
    }

    get polishidealtext() {
        return ('(//span[contains(text(),"Polish")]/following::span[contains(text(),"Ideal")])[1]')
    }

    //certificate
    get certificatetext(){
        return $('//div[@class="tooltip-trigger"]/span[contains(text(),"Certificate")]')
    }

    get certificatepopup(){
        return $('//div[@class="tooltip-trigger"]/span[contains(text(),"Certificate")]/parent::div/preceding-sibling::div[@class="tooltip-content"]')
    }

    get certificateIGItext(){
        return $('//div[@class="is-inline-flex p-t-10 p-t-0-touch"]/label[@for="IGI"]')
    }

    get btnIGICheckbox() {
        return $('//input[@value="IGI"]')
    }

    get certificateGIAtext(){
        return $('//div[@class="is-inline-flex p-t-10 p-t-0-touch"]/label[@for="GIA"]')
    }

    get btnGIACheckbox() {
        return $('//input[@value="GIA"]')
    }

    //more filters & reset filters button
    get morefilterbutton(){
        return $('//span[contains(text(),"More Filters")]')
    }

    get resetfilterbutton(){
        return $('//div[@class="has-text-info is-clickable is-absolute is-flex is-hidden-mobile is-right-0 p-t-8 p-r-5"]')
    }

//VDB Table
    get sortbybutton(){
        return $('//button[@class="button dropdown-filter is-borderless is-size-7 p-t-5 p-l-0 p-r-5"]//span[contains(text(),"SORT BY")]')
    }

    get sortbycontent() {
        return $('//div[@class="dropdown dropdown-menu-animation is-hoverable is-active myoj-sort-filter"]//div[@class="dropdown-content"]')
    }

    get sortbypricetext(){
        return $('//p[text()="PRICE:"]')
    }

    get sortbypricelowtohightext(){
        return $('//p[text()="PRICE:"]/parent::li/div/p[contains(text(),"LOW TO HIGH")]')
    }

    get sortbypricehightolowtext(){
        return $('//p[text()="PRICE:"]/parent::li/div/p[contains(text(),"HIGH TO LOW")]')
    }

    get sortbycarattext(){
        return $('//p[text()="CARAT:"]')
    }

    get sortbycaratlowtohightext(){
        return $('//p[text()="CARAT:"]/parent::li/div/p[contains(text(),"LOW TO HIGH")]')
    }

    get activeCaratLowToHigh() {
        return $('//p[text()="CARAT:"]/parent::li//p[@class="is-clickable m-b-8 call-to-action"]')
    }

    get sortbycarathightolowtext(){
        return $('//p[text()="CARAT:"]/parent::li/div/p[contains(text(),"HIGH TO LOW")]')
    }

    get sortbyclaritytext(){
        return $('//p[text()="CLARITY:"]')
    }

    get sortbyclaritylowtohightext(){
        return $('//p[text()="CLARITY:"]/parent::li/div/p[contains(text(),"LOW TO HIGH")]')
    }

    get sortbyclarityhightolowtext(){
        return $('//p[text()="CLARITY:"]/parent::li/div/p[contains(text(),"HIGH TO LOW")]')
    }

    get sortbycolortext(){
        return $('//p[text()="COLOR:"]')
    }

    get sortbycolorlowtohightext(){
        return $('//p[text()="COLOR:"]/parent::li/div/p[contains(text(),"LOW TO HIGH")]')
    }

    get sortbycolorhightolowtext(){
        return $('//p[text()="COLOR:"]/parent::li/div/p[contains(text(),"HIGH TO LOW")]')
    }

    get disabledSortBy(){
        return $('//div[@class="dropdown dropdown-menu-animation is-disabled is-hoverable myoj-sort-filter"]')
    }

    get listview(){
        return $('//div[text()="List View"]/parent::span/parent::button')
    }

    get disabledListView() {
        return $ ('//button[@class="button height-30 is-border-none p-0 m-r-7" and @disabled="disabled"]')
    }

    get galleryview(){
        return $('//div[text()="Gallery View"]/parent::span/parent::button')
    }

    get disabledGalleryView() {
        return $('//button[@class="button height-30 is-border-none p-0" and @disabled="disabled"]')
    }

    get Alldiamondstab(){
        return $('//p[contains(text(),"All Diamonds")]')
    }

    get AllLabdiamondstab(){
        return $('//p[contains(text(),"All Lab Diamonds")]')
    }

    get Recentlyviewedtab(){
        return $('//span[contains(text(),"Recently Viewed")]')
    }

    get Recentlyviewedtab1() {
        return $('//span[contains(text(),"Recently Viewed (1)")]')
    }

    get Comparetab(){
        return $('//span[contains(text(),"Compare")]')
    }

    get Comparetab5(){
        return $('//span[contains(text(),"Compare (5)")]')
    }

    get tablequickviewcolumn(){
        return $('//div[@class="is-relative filter-divider"]/div/p[text()="Quick View"]')
    }

    get tableshapecolumn(){
        return $('//div[@class="is-relative filter-divider"]/div/p[text()="Shape"]')
    }

    get tablecaratcolumn(){
        return $('//div[@class="is-relative filter-divider"]/div//p[contains(text(),"Carat")]')
    }

    get tableclaritycolumn(){
        return $('//div[@class="is-relative filter-divider"]/div/p[text()="Clarity"]')
    }

    get tablecolorcolumn(){
        return $('//div[@class="is-relative filter-divider"]/div/p[text()="Color"]')
    }

    get tablecutcolumn(){
        return $('//div[@class="is-relative filter-divider"]/div//p[contains(text(),"Cut")]')
    }

    get tablecertcolumn(){
        return $('//div[@class="is-relative filter-divider"]/div//p[contains(text(),"Cert")]')
    }

    get tablepricecolumn(){
        return $('//div[@class="is-relative filter-divider"]/div//p[contains(text(),"Price")]')
    }

    get tablesavingcolumn(){
        return $('//div[@class="is-relative filter-divider"]/div//p[contains(text(),"Saving")]')
    }

    get tableyourpricecolumn() {
        return $('//p[@class="is-flex is-justify-content-flex-end is-flex-1 is-hidden-mobile is-white-space" and contains(text(),"Your Price")]')
    }

    get tablecomparecolumn(){
        return $('//div[@class="is-relative filter-divider"]/div//p[contains(text(),"Compare")]')
    }

    //compare radio button
    get compareRow1radiobutton(){
        return $('//div[@id="expand-details-0"]//div[@class="m-r-0 m-t-2 p-l-0"]//input[@value="[object Object]"]')
    }

    get compareRow2radiobutton(){
        return $('//div[@id="expand-details-1"]//div[@class="m-r-0 m-t-2 p-l-0"]//input[@value="[object Object]"]')
    }

    get compareRow3radiobutton(){
        return $('//div[@id="expand-details-2"]//div[@class="m-r-0 m-t-2 p-l-0"]//input[@value="[object Object]"]')
    }

    get compareRow4radiobutton(){
        return $('//div[@id="expand-details-3"]//div[@class="m-r-0 m-t-2 p-l-0"]//input[@value="[object Object]"]')
    }

    get compareRow5radiobutton(){
        return $('//div[@id="expand-details-4"]//div[@class="m-r-0 m-t-2 p-l-0"]//input[@value="[object Object]"]')
    }

    get compareearringRow1radiobutton(){
        return $('//div[@id="expand-details-0"]//div[@class="m-r-0 m-t-2 p-l-0 is-absolute position-align-center m-t-22"]//input[@value="[object Object],[object Object]"]')
    }

    get compareearringRow2radiobutton(){
        return $('//div[@id="expand-details-1"]//div[@class="m-r-0 m-t-2 p-l-0 is-absolute position-align-center m-t-22"]//input[@value="[object Object],[object Object]"]')
    }

    //Table First Row
    get tablefirstrow(){
        return $('//div[@id="expand-details-0"]')
    }

    get tableexpandfirstrowicon(){
        return $('//div[@id="expand-details-0"]//span[@class="material-icons"]')
    }

    get tableexpandsecondrowicon(){
        return $('//div[@id="expand-details-1"]//span[@class="material-icons"]')
    }

    get tablefirstrowdiamonddetails() {
        return $('//div[@id="expand-details-0"]//div[@class="is-flex is-aligned-center wd-100-touch list-height list-wd"]')
    }

    get tablefirstrowexpandarea(){
        return $('//div[@id="expand-details-0"]//div[@class="expand-details-bg p-t-0-mob"]')
    }

    get tablefirstrowdiamondimagearea(){
        return $('//div[@id="expand-details-0"]/div[@class="expand-details-bg p-t-0-mob"]/div[@class="columns is-marginless is-multiline"]//section//div[@class="has-text-centered"]')
    }

    get tablefirstrowdiamondtextarea(){
        return $('//div[@id="expand-details-0"]/div[@class="expand-details-bg p-t-0-mob"]//div[@class="column is-8-desktop is-7-tablet is-12-mobile"]//div[@class="has-text-left p-l-20 p-l-10-touch p-r-20 p-r-0-tab p-r-10-mob"]')
    }

    get tablefirstrowdetailsarea(){
        return $('//p[@class="is-size-6 has-text-primary"]')
    }

    get tablefirstrowproductpricearea(){
        return $('//div[@class="filter-divider is-size-6 has-text-primary p-b-7"]')
    }

    get tablefirstrowstrikedoutprice() {
        return $('//div[@class="filter-divider is-size-6 has-text-primary p-b-7"]/span/del[contains(text(),"$")]')
    }

    get tablefirstrowXbutton() {
        return $('//span[@class="material-icons md-22"]')
    }

    //View diamond button
    get viewdiamondbutton(){
        return $('//button[contains(text(),"VIEW Diamond")]')
    }

    get viewlabdiamondbutton(){
        return $('//button[contains(text(),"VIEW Lab Diamond")]')
    }

    get msgStoneSoldOut() {
        return $('//p[@class="is-size-7 has-text-danger has-text-centered-touch is-hidden-touch" and contains(text(),"selected stone is sold out")]')
    }

    //EarringRow
    get tableearringfirstrow(){
        return $('//div[@id="expand-details-0"]')
    }

    get tableearringQuickView() {
        return $('//div[@id="expand-details-0"]//span[@class="material-icons is-absolute position-align-center m-l-40 p-t-40 m-l-35-tab m-l-20-mob"]/span')
    }

    get tableearring1expandfirstrowicon(){
        return $('(//div[@id="expand-details-0"]//div[@class="is-flex is-align-items-center is-flex-1 is-relative shape-row-2 is-justify-content-tab"])[1]')
    }

    get tableearring2expandfirstrowicon(){
        return $('(//div[@id="expand-details-0"]//div[@class="is-flex is-align-items-center is-flex-1 is-relative shape-row-2 is-justify-content-tab"])[2]')
    }

    get tableearringfirstrowexpandarea(){
        return $('//div[@id="expand-details-0"]//div[@class="expand-details-bg p-t-0-mob"]')
    }

    get tableearringfirstrowfirstdiamondexpandarea(){
        return $('(//div[@id="expand-details-0"]//div[@class="expand-details-bg p-t-0-mob"]//div[@class="column p-l-0 p-r-0-mob p-t-0-mob p-t-7-tab p-b-7-tab is-5-desktop is-6-tablet"])[1]')
    }

    get tableearringfirstrowseconddiamondexpandarea(){
        return $('(//div[@id="expand-details-0"]//div[@class="expand-details-bg p-t-0-mob"]//div[@class="column p-l-0 p-r-0-mob p-t-0-mob p-t-7-tab p-b-7-tab is-5-desktop is-6-tablet"])[2]')
    }

    get tablefirstdiamondimg() {
        return $('(//img[@class="myor-dia-image"])[1]')
    }

    get tablefirstdiamondproductinfoarea(){
        return $('(//div[@class="has-text-left p-l-20 p-l-10-touch p-r-5"])[1]')
    }

    get tablefirstdiamondstrikedpricearea(){
        return $('(//div[@class="has-text-left p-l-20 p-l-10-touch p-r-5"])[1]//span[@class="p-r-10"]/del')
    }

    get tableseconddiamondimg() {
        return $('(//img[@class="myor-dia-image"])[2]')
    }

    get tableseconddiamondproductinfoarea(){
        return $('(//div[@class="has-text-left p-l-20 p-l-10-touch p-r-5"])[2]')
    }

    get tableseconddiamondstrikedpricearea(){
        return $('(//div[@class="has-text-left p-l-20 p-l-10-touch p-r-5"])[2]//span[@class="p-r-10"]/del')
    }

    //Pagination
    get lastRowEarringTable() {
        return $('//div[@id="expand-details-16"]')
    }

    get msgNothingHere() {
        return $('//p[text()="Nothing here."]')
    }

    get paginationarea() {
        return $('//nav[@class="pagination"]')
    }

    get paginationlist() {
        return $('//ul[@class="pagination-list"]')
    }

    get btnPage3Table() {
        return $('//a[@aria-label="Page 3."]')
    }

    get btnPage2Table() {
        return $('//a[@aria-label="Page 2."]')
    }

    get currentPage3() {
        return $('//a[@aria-label="Current page, Page 3."]')
    }

    get currentPage2() {
        return $('//a[@aria-label="Current page, Page 2."]')
    }

    get pagelefticon(){
        return $('//span[@class="icon"]/i[@class="mdi mdi-chevron-left mdi-24px"]')
    }

    get pagenumberfield(){
        return $('//div[@class="control is-clearfix"]//input[@aria-label="Page Number"]')
    }

    get pagerighticon(){
        return $('//span[@class="icon"]/i[@class="mdi mdi-chevron-right mdi-24px"]')
    }

    //Gallery View
    get gridFirstRow() {
        return $('//div[@id="expand-details-0"]//div[@class="box p-8-touch p-10 grid-view"]')
    }

    get gridEarringFirstRow() {
        return $('//div[@id="expand-details-0"]//div[@class="box p-8-touch p-10 is-flex-tablet grid-view"]')
    }

    get imgFirstRowGridView() {
        return $('//div[@id="expand-details-0"]//img[@class="myor-grid-image"]')
    }

    get imgFirstDiamondGridView() {
        return $('(//div[@id="expand-details-0"]//img[@class="myor-grid-image"])[1]')
    }

    get imgSecondDiamondGridView() {
        return $('(//div[@id="expand-details-0"]//img[@class="myor-grid-image"])[2]')
    }

    get txtDiamondDetailsGridView() {
        return $('//div[@id="expand-details-0"]//p[@class="is-size-7 has-text-primary has-text-weight-semibold"]')
    }

    get txtFirstDiamondDetailsGridView() {
        return $('(//div[@id="expand-details-0"]//p[@class="is-size-7 has-text-primary has-text-weight-semibold"])[1]')
    }

    get txtSecondDiamondDetailsGridView() {
        return $('(//div[@id="expand-details-0"]//p[@class="is-size-7 has-text-primary has-text-weight-semibold"])[2]')
    }

    get txtPriceDetailsGridView() {
        return $('//div[@id="expand-details-0"]//div[@class="is-size-6 has-text-primary"]/following-sibling::div')
    }

    get txtFirstPriceDetailsGridView() {
        return $('(//div[@id="expand-details-0"]//div[@class="is-size-6 has-text-primary"]/following-sibling::div)[1]')
    }

    get txtSecondPriceDetailsGridView() {
        return $('(//div[@id="expand-details-0"]//div[@class="is-size-6 has-text-primary"]/following-sibling::div)[2]')
    }

    get txtStrikedOutPriceGridView() {
        return $('//div[@id="expand-details-0"]//b[@class="has-text-primary is-size-5 p-r-10"]//del[contains(text(),"$")]')
    }

    get txtFirstStrikedOutPriceGridView() {
        return $('(//div[@id="expand-details-0"]//b[@class="has-text-primary is-size-5 p-r-10"]//del[contains(text(),"$")])[1]')
    }

    get txtSecondStrikedOutPriceGridView() {
        return $('(//div[@id="expand-details-0"]//b[@class="has-text-primary is-size-5 p-r-10"]//del[contains(text(),"$")])[2]')
    }

    get btnCompareGridView() {
        return $('//div[@id="expand-details-0"]//div[@class="is-size-6 m-r-0"]//input[@value="[object Object]"]')
    }

    get btnEarringCompareGridView() {
        return $('//div[@id="expand-details-0"]//div[@class="is-size-6 m-r-0"]//input[@value="[object Object],[object Object]"]')
    }

//COMPARE TAB
    get sctnCompareTable() {
        return $('//div[@id="compare"]')
    }

    get sctnCompareColumn1() {
        return $('(//ul[@class="compare-table-r-border is-size-7"])[1]')
    }

    get sctnCompareColumn2() {
        return $('(//ul[@class="compare-table-r-border is-size-7"])[2]')
    }

    get sctnCompareColumn3() {
        return $('(//ul[@class="compare-table-r-border is-size-7"])[3]')
    }

    get sctnCompareColumn4() {
        return $('(//ul[@class="compare-table-r-border is-size-7"])[4]')
    }

    get sctnCompareColumn5() {
        return $('(//ul[@class="compare-table-r-border is-size-7"])[5]')
    }

    get imgEarring1Diamond1() {
        return $('(//figure[@class="image is-128x128 is-inline-block is-clickable m-r-10"])[1]')
    }

    get imgEarring1Diamond2() {
        return $('(//figure[@class="image is-128x128 is-inline-block is-clickable"])[1]')
    }

    get imgEarring2Diamond1() {
        return $('(//figure[@class="image is-128x128 is-inline-block is-clickable m-r-10"])[2]')
    }

    get imgEarring2Diamond2() {
        return $('(//figure[@class="image is-128x128 is-inline-block is-clickable"])[2]')
    }

    get btnCompareLeftArrow() {
        return $('//span[@class="icon has-icons-left compare-arrow-border"]')
    }

    get btnCompareRightArrow() {
        return $('//span[@class="icon has-icons-right compare-arrow-border"]')
    }

    get btnCompareRemoveColumn1() {
        return $('(//ul[@class="compare-table-r-border is-size-7"])[1]//button[@title="Remove Lab Diamond"]')
    }

    get txtComparePrice() {
        return $('//li[contains(text(),"Price")]')
    }

    get txtCompareShape() {
        return $('//li[contains(text(),"Shape")]')
    }

    get txtCompareCarat() {
        return $('//li[contains(text(),"Carat")]')
    }

    get txtCompareColor() {
        return $('//li[contains(text(),"Color")]')
    }

    get txtCompareCountry() {
        return $('//li[contains(text(),"Country")]')
    }

    get txtCompareLabReport() {
        return $('//li[contains(text(),"Lab report")]')
    }

    get txtCompareClarity() {
        return $('//li[contains(text(),"Clarity")]')
    }

    get txtCompareCut() {
        return $('//li[contains(text(),"Cut")]')
    }

    get txtCompareTablePercent() {
        return $('//li[contains(text(),"Table%")]')
    }

    get txtCompareDepthPercent() {
        return $('//li[contains(text(),"Depth%")]')
    }

    get txtComparePolish() {
        return $('//li[contains(text(),"Polish")]')
    }

    get txtCompareMeasurements() {
        return $('//li[contains(text(),"Measurements")]')
    }

    get txtCompareType() {
        return $('//li[contains(text(),"Type")]')
    }

    get txtCompareSymmetry() {
        return $('//li[contains(text(),"Symmetry")]')
    }

    get txtCompareFluorescence() {
        return $('//li[contains(text(),"Fluorescence")]')
    }

    get txtCompareViewStone() {
        return $('//li[contains(text(),"View Stone")]')
    }

    get lnkViewStone() {
        return $('(//ul[@class="compare-table-r-border is-size-7"])[1]//button[@title="View Diamond"]')
    }

    get lnkViewLabStone() {
        return $('(//ul[@class="compare-table-r-border is-size-7"])[1]//button[@title="View Lab Diamond"]')
    }

    get msgCompareStoneSoldOut() {
        return $('(//ul[@class="compare-table-r-border is-size-7"])[1]//p[contains(text(),"selected stone is sold out")]')
    }

//DIAMOND DETAILS PAGE
    get createYourOwnRing() {
        return $('//strong[text()="Create Your Own ring"]')
    }

    get createYourOwnEarring() {
        return $('//strong[text()="Create Your Own earring"]')
    }

    get createYourOwnNecklace() {
        return $('//strong[text()="Create Your Own necklace"]')
    }

    get createYourMensRing() {
        return $('//strong[text()="Create Your Own mens ring"]')
    }

    get iconDiamondShape() {
        return $('//div[@alt="Round"]')
    }

    get iconActiveShape() {
        return $('//div[@class="diamond-thumbnail m-b-10 diamond-thumbnail-active"]')
    }

    get iconPlayVideo() {
        return $('//div[@class="diamond-thumbnail m-b-10"]//img[@title="Play Video"]')
    }

    get popupPlayVideo() {
        return $('//div[@class="card-content p-t-20 p-b-0"]')
    }

    get iconGIACertificate() {
        return $('//div[@class="diamond-thumbnail m-b-10"]//img[@title="View GIA Certificate"]')
    }

    get iconIGICertificate() {
        return $('//div[@class="diamond-thumbnail m-b-10"]//img[@title="View IGI Certificate"]')
    }

    get igiCertificatePopup() {
        return $('//div[@class="card-content shop-cart-modal-align"]//div[@class="has-text-centered"]')
    }

    get iconTopView() {
        return $('//div[@class="diamond-thumbnail m-b-10"]//img[@title="Round top view"]')
    }

    get iconSideView() {
        return $('//div[@class="diamond-thumbnail m-b-10"]//img[@title="Round side view"]')
    }


//Diamond image and description
    get mainImage() {
        return $('//div[@class="is-relative"]/div/img')
    }

    get mainImageTopView() {
        return $('//img[@title="Round top view"][@class="diamond-images"]')
    }

    get mainImageSideView() {
        return $('//img[@title="Round side view"][@class="diamond-images"]')
    }

    get lnkigiCertificate() {
        return $ ('//img[@title="IGI Certificate"]')
    }

    get lnkgiaCertificate() {
        return $ ('//img[@title="GIA Certificate"]')
    }

    get txtCertificateName() {
        return $ ('//div[@class="is-inline-flex"]//span[@class="is-size-6 has-text-weight-semibold has-text-black p-t-1"]')
    }

    get diamondClarityDesc() {
        return $('//p[@class="is-size-6 has-text-primary has-text-weight-medium"]')
    }

    get cutDescription() {
        return $('//p[@class="dia-properties-color is-full-brightness"]')
    }

    get priceDesc() {
        return $('//div[@class="is-size-5 has-text-primary has-text-weight-medium"]')
    }

    get strikedPriceDDP() {
        return $('//b[@class="p-r-10"]//del[contains(text(),"$")]')
    }

    //earrings img
    get imgEarring1() {
        return $('(//img[@class="diamond-images"])[1]')
    }

    get imgEarring2() {
        return $('(//img[@class="diamond-images"])[2]')
    }

    //earrings certificate
    get giaCertificateEarring1() {
        return $('(//img[@title="GIA Certificate"])[1]')
    }

    get giaCertificateEarring2() {
        return $('(//img[@title="GIA Certificate"])[2]')
    }

    get igiCertificateEarring1() {
        return $ ('(//img[@title="IGI Certificate"])[1]')
    }

    get igiCertificateEarring2() {
        return $ ('(//img[@title="IGI Certificate"])[2]')
    }

    get txtCertificateNameEarring1() {
        return $ ('(//div[@class="is-inline-flex"]//span[@class="is-size-6 has-text-weight-semibold has-text-black p-t-1"])[1]')
    }

    get txtCertificateNameEarring2() {
        return $ ('(//div[@class="is-inline-flex"]//span[@class="is-size-6 has-text-weight-semibold has-text-black p-t-1"])[2]')
    }

    get diamondClarityDescEarring1() {
        return $('(//p[@class="is-size-6 has-text-primary has-text-weight-medium"])[1]')
    }

    get diamondClarityDescEarring2() {
        return $('(//p[@class="is-size-6 has-text-primary has-text-weight-medium"])[2]')
    }

    get cutDescriptionEarring1() {
        return $('(//p[@class="dia-properties-color is-full-brightness"])[1]')
    }

    get cutDescriptionEarring2() {
        return $('(//p[@class="dia-properties-color is-full-brightness"])[2]')
    }

    get priceDescEarring1() {
        return $('(//div[@class="is-size-5 has-text-primary has-text-weight-medium"])[1]')
    }

    get priceDescEarring2() {
        return $('(//div[@class="is-size-5 has-text-primary has-text-weight-medium"])[2]')
    }

    //buttons
    get btnSelectRing() {
        return $('//span[@title="Select ring"]')
    }

    get btnSelectEarring() {
        return $('//span[@title="Select earring"]')
    }

    get btnSelectNecklace() {
        return $('//span[@title="Select necklace"]')
    }

    get btnSelectMensRing() {
        return $('//span[@title="Select mens ring"]')
    }

    get btnAddDiamondAndCheckOut() {
        return $ ('//span[@title="Add Diamond & Checkout"]')
    }

    get btnSelectWomensBand() {
        return $ ('//span[contains(text(),"Select women\'s band")]')
    }

    get btnSelectMensBand() {
        return $ ('//span[contains(text(),"Select men\'s band")]')
    }

    get btnDDAnotherMensRing() {
        return $ ('//span[contains(text(),"Add Another Men\'s Ring")]')
    }

    get btnAddToCartLooseDiamonds() {
        return $('//span[@title="Add To Cart"]')
    }

    get btnSelectWithRing() {
        return $('//button[@title="Select With Ring"]')
    }

    get btnSelectWithNecklace() {
        return $('//button[@title="Select With Necklace"]')
    }

    get imgLooseDiamondOrderSummary() {
        return $('//div[@class="card-content has-text-centered"]//img')
    }

    get txtLooseDiamondShapeOrderSummary() {
        return $('(//div[@class="has-text-primary is-size-5 is-uppercase has-text-weight-semibold m-b-5"]/span)[1]')
    }

    get txtLooseDiamondPriceOrderSummary() {
        return $('//div[@class="has-text-primary is-size-5 is-uppercase has-text-weight-semibold m-b-5"]//span[contains(text(),"$")]')
    }

    get txtLooseDiamondDetailsOrderSummary() {
        return $('//p[@class="has-text-primary"]')
    }

    //Your Diamond Details
    get sectionYourDiamondDetails() {
        return $('//section[@id="diamond-details"]//div[@class="full-hd full-hd-4k"]')
    }
    
    get txtYourDiamondDetails() {
        return $('//p[@class="title is-size-3 is-size-4-mobile diamond-info-title is-capitalized has-text-black m-b-10"]//span[contains(text(),"Diamond")]')
    }
    
    get txtYourLabDiamondDetails() {
        return $('//p[@class="title is-size-3 is-size-4-mobile diamond-info-title is-capitalized has-text-black m-b-10"]//span[contains(text(),"Lab Diamond")]')
    }

    get lnkCertificateYourDiamondDetails() {
        return $('//section[@id="diamond-details"]//img[@alt="Certificate"]')
    }

    //earrings
    get txtEarringdiamondDetails1() {
        return $('//p[@class="is-capitalized p-b-8" and text()=" Lab Diamond "]//span[text()=" - 1 "]')
    }

    get txtEarringdiamondDetails2() {
        return $('//p[@class="is-capitalized p-b-8" and text()=" Lab Diamond "]//span[text()=" - 2 "]')
    }

    get iconCertificate1() {
        return $('//span[text()=" - 1 "]/parent::p/following-sibling::div//img[@alt="Certificate"]')
    }

    get iconCertificate2() {
        return $('//span[text()=" - 2 "]/parent::p/following-sibling::div//img[@alt="Certificate"]')
    }

    //Content - Diamond details
    get txtdiamondDDP() {
        return $('//div[@class="is-capitalized m-t-5 m-r-5 m-b-15 m-l-0"]')
    }

    get txtColorDDP() {
        return $('//p[@class="is-clickable m-0"]//span[contains(text(),"Color")]')
    }

    get popupColorDDP() {
        return $('//p[@class="p-t-10 m-0" and contains(text(),"Color grading")]')
    }

    get popupColorViewDetails() {
        return $('//p[@class="p-t-10 m-0" and contains(text(),"Color grading")]/parent::div//b//u[@class="p-b-10" and text()="View Details"]')
    }

    get popupDiamondDetail() {
        return $ ('//div[@class="card-content p-t-15"]')
    }

    get txtPopupColorViewDetailsDDP() {
        return $('//div[@class="card-content p-t-15"]/div/p[text()="Color"]')
    }

    get popupBtnXDiamondDetail() {
        return $ ('//span[@class="material-icons is-pulled-right is-clickable m-5"]')
    }

    get txtPriceDDP() {
        return $('//div[@class="column is-size-7 is-4 p-b-0 p-t-0 p-r-0-tab"]//span[@class="hide-tooltip-touch b-tooltip is-info is-top is-medium"]//span[@class="filter-heading-border"]')
    }

    get PriceTooltipDDP() {
        return $('//div[@class="tooltip-content"]//p[contains(text(),"This price is the discounted price")]')
    }

    get txtYourprice() {
        return $('//span[@class="filter-heading-border" and contains(text(), "Your Price")]')
    }

    get yourPriceTooltipDDP() {
        return $('//div[@class="tooltip-content"]//p[contains(text(),"This price is the discounted price")]')
    }

    get txtcaratWeightDDP() {
        return $('//span[contains(text(),"Carat Weight")]')
    }

    get caratWeightTooltipDDP() {
        return $('//div[@class="tooltip-content"]//p[contains(text(),"1 carat is equal to 200 milligrams ")]')
    }

    get txtShapeDDP() {
        return $('//span[@class="filter-heading-border" and contains(text(),"Shape")]')
    }

    get shapeTooltipDDP() {
        return $('//div[@class="tooltip-content"]//p[contains(text(),"Shape refers to the general outward appearance")]')
    }

    get txtCutDDP() {
        return $('//span[@class="filter-heading-border" and contains(text(),"Cut")]')
    }

    get popupCutDDP() {
        return $('//p[contains(text(),"The ratings range from Good to Ideal.")]')
    }

    get cutViewDetailsDDP() {
        return $('//p[contains(text(),"The ratings range from Good to Ideal.")]/parent::div//b//u[@class="p-b-10" and text()="View Details"]')
    }

    get txtPopupCutViewDetailsDDP() {
        return $ ('//div[@class="card-content p-t-15"]/div/p[text()="Cut"]')
    }

    get txtMeasurementDDP() {
        return $('//span[@class="filter-heading-border" and contains(text(),"Measurements")]')
    }

    get popupMeasurementDDP() {
        return $('//p[@class="p-t-10 m-0" and contains(text(),"three measurements")]')
    }

    get measurementViewDetailsDDP() {
        return $('//p[@class="p-t-10 m-0" and contains(text(),"three measurements")]/parent::div//b//u[contains(text(),"View Details")]')
    }

    get popupMeasurementViewDetailsDDP() {
        return $('//div[@class="card-content p-t-15"]/div/p[text()="Measurements"]')
    }

    get txtOriginDDP() {
        return $('//span[contains(text(),"Origin")]')
    }

    get originTooltipDDP() {
        return ('//div[@class="tooltip-content"]//p[contains(text(),"Origin country of stone")]')
    }

    get txtClarityDDP() {
        return $('//span[@class="filter-heading-border" and contains(text(),"Clarity")]')
    }

    get popupClarityDDP() {
        return $('//p[contains(text(),"extracted from carbon")]')
    }

    get clarityViewDetailsDDP() {
        return $('//p[contains(text(),"extracted from carbon")]/parent::div/b//u[contains(text(),"View Details")]')
    }

    get popupclarityViewDetailsDDP() {
        return $('//div[@class="card-content p-t-15"]/div/p[text()="Clarity"]')
    }

    get txtTableDDP() {
        return $('//span[@class="filter-heading-border" and contains(text(),"Table")]')
    }

    get tableTooltipDDP() {
        return ('//div[@class="tooltip-content"]//p[contains(text(),"Table % is the table width")]')
    }
    
    get txtDepthDDP() {
        return $('//span[@class="filter-heading-border" and contains(text(),"Depth")]')
    }

    get depthTooltipDDP() {
        return $ ('//div[@class="tooltip-content"]//p[contains(text(),"Depth % is the height of the Diamond")]')
    }

    get txtSymmetryDDP() {
        return $('//span[@class="filter-heading-border" and contains(text(),"Symmetry")]')
    }

    get popupSymmetryDDP() {
        return $('//p[contains(text(),"alignment of the facets")]')
    }

    get SymmetryViewDetailsDDP() {
        return $('//p[contains(text(),"alignment of the facets")]/parent::div/b//u[contains(text(),"View Details")]')
    }

    get popupSymmetryViewDetailsDDP() {
        return $('//div[@class="card-content p-t-15"]/div/p[text()="Symmetry"]')
    }

    get txtPolishDDP() {
        return $('//span[@class="filter-heading-border" and contains(text(),"Polish")]')
    }

    get polishTooltipDDP() {
        return $('//div[@class="tooltip-content"]//p[contains(text(),"Polish is graded from Ideal")]')
    }

    get txtFluorescenceDDP() {
        return $('//span[@class="filter-heading-border" and contains(text(),"Fluorescence")]')
    }

    get fluorescenceTooltipDDP() {
        return $('//div[@class="tooltip-content"]//p[contains(text(),"strong or very strong fluorescence")]')
    }

    get txtReportDDP() {
        return $('//div[@class="m-t-5 m-r-5 m-b-15 m-l-0" and contains(text(),"Report")]')
    }

    get linkViewReportDDP() {
        return $('//u[@class="purchase-stone-color" and contains(text(),"View")]')
    }

    //Diamond info
    get sctnCarat() {
        return $ ('//section[@id="carat-info"]')
    }

    get headingCarat() {
        return $('//p[@class="title is-size-3 is-size-4-mobile is-capitalized has-text-black m-b-25 m-b-0-touch p-b-10-mob m-t-15-mob"]')
    }

    get txtCaratSection() {
        return $('//div[@class="is-size-7 p-5-touch carat-body-description"]')
    }

    get caratYourDiamondSection() {
        return $('//p[@class="is-size-3 has-text-weight-semibold"]')
    }

    get caratScaleSection() {
        return $ ('//div[@class="is-hidden-mobile m-l-15"]')
    }

    get sctnCut() {
        return $ ('//section[@id="cut-info"]')
    }

    get headingCut() {
        return $ ('//p[@class="title is-size-3 is-size-4-mobile is-capitalized has-text-centered has-text-black m-b-25 m-b-0-touch p-b-10-touch"]')
    }

    get txtCutSection() {
        return $('//div[@class="full-hd full-hd-4k"]//div[contains(text(),"The cut refers to")]')
    }

    get cutYourDiamondSection() {
        return $ ('//section[@id="cut-info"]//p[@class="pop-up-heading is-uppercase"]')
    }

    get cutScaleSection() {
        return $ ('//div[@class="column is-4 is-12-mobile m-t-30 m-t-0-mob"]')
    }

    get sctnColor() {
        return $ ('//section[@id="color-info p-b-10-touch"]')
    }

    get headingColor() {
        return $ ('//p[@class="title is-size-3 is-size-4-mobile is-capitalized has-text-centered has-text-black m-b-25 m-b-0-mob p-b-10-mob" and contains(text(),"color")]')
    }

    get txtColorSection() {
        return $('//div[@class="full-hd full-hd-4k"]//div[contains(text(),"Acting as a prism,")]')
    }

    get colorYourDiamondSection() {
        return $('//div[@class="tablelist-data wd-50 m-t-20-touch wd-100-touch left-230 m-auto"]')
    }

    get colorScaleSection() {
        return $ ('//img[@title="Diamond Color"]')
    }

    get sctnClarity() {
        return $ ('//section[@id="clarity-info"]')
    }

    get headingClarity() {
        return $ ('//p[@class="title is-size-3 is-size-4-mobile is-capitalized has-text-centered has-text-black m-b-25 m-b-0-mob p-b-10-mob" and contains(text(),"clarity")]')
    }

    get txtClaritySection() {
        return $('//section[@class="has-background-light-grey p-t-20"]//div[contains(text(),"clarity refers to")]')
    }

    get clarityYourDiamondSection() {
        return $ ('//section[@id="clarity-info"]//p[@class="pop-up-heading is-uppercase"]')
    }

    get clarityScaleSection() {
        return $('//div[@class="column is-12-mobile is-4-desktop is-5-tablet m-l-0-touch m-t-25 m-t-15-touch"]')
    }

//LINKS
    get linkFree100Days() {
        return $('//a[text()="FREE 100 DAY RETURNS"]')
    }

    get linkfreeGlobalShipping() {
        return $('//a[text()="FREE GLOBAL SHIPPING"]')
    }

    get linklabCertification() {
        return $('//a[text()="LAB CERTIFICATION"]')
    }

    get linkFreeResizingwarranty() {
        return $('//a[text()="FREE RESIZING & WARRANTY"]')
    }


//Use filter tab and filters xpath from Page2.js
//PAGE 2
    get sctnFilterTab(){
        return $ ('//div[@class="m-b-5 p-5-touch page-two-filter-items is-flex-desktop is-justified-center is-hidden-touch"]');
    }

    get tagDiamond() {
        return $('//span[@position="is-bottom"]//span[text()="Diamond"]')
    }

    get tagLabDiamond() {
        return $('//span[@position="is-bottom"]//span//span[contains(text(),"Lab")]')
    }

    get tagEngagementRings() {
        return $('//span[@position="is-bottom"]//span[contains(text(),"Engagement Rings")]')
    }

    get tag14kWg() {
        return $('//span[@position="is-bottom"]//span[contains(text(),"White Gold")]')
    }

    get tag10kBg() {
        return $('//span[@position="is-bottom"]//span[contains(text(),"Black Gold")]')
    }

    get tagVVSDiamond() {
        return $('//span[@position="is-bottom"]//span[contains(text(),"VVS")]')
    }

    get tagBlackDiamond() {
        return $('//span[@position="is-bottom"]//span[contains(text(),"Black")]')
    }

    get sctnProductDisplay() {
        return $('//div[@class="columns is-mobile is-multiline has-text-centered is-gapless is-relative"]')
    }

    get imgProduct() {
        return $('(//div[@class="columns is-mobile is-multiline has-text-centered is-gapless is-relative"]//img)[1]')
    }

    get txtProductName() {
        return $('(//p[@class="has-text-weight-semibold"])[1]')
    }

    get txtStrikedOutPrice() {
        return $('(//del[@class="is-size-7"])[1]')
    }

    get txtPrice() {
        return $('(//p[@class="has-text-weight-semibold is-size-6"]/span/span)[1]')
    }

    get txtSettingPrice() {
        return $('(//p[contains(text(),"setting Price")])[1]')
    }

    get txtShortProductDescription() {
        return $('(//div[@class="has-text-primary is-size-7 page2-product-text wd-100 short-description is-italic"])[1]')
    }

    get sctnInlineDescription() {
        return $('//div[@class="is-size-7 m-l-25 m-r-20 m-l-0-mob m-r-0-mob p-5"]')
    }

    get headingInlineDescriptionDiamond() {
        return $('//p[@class="is-size-3 is-uppercase m-t-35 mid-desc-header" and text()="Diamond"]')
    }

    get headingInlineDescriptionLabDiamond() {
        return $('//p[@class="is-size-3 is-uppercase m-t-35 mid-desc-header" and text()="Lab-created Diamond"]')
    }

    get txtInlineDescriptionDiamond() {
        return $('(//div[@class="is-flex"]//p[contains(text(),"natural Diamond")])[1]')
    }

    get txtInlineDescriptionLabDiamond() {
        return $('(//div[@class="is-flex"]//p[contains(text(),"Lab Diamond")])[1]')
    }

    get txtInlineDescription14kWg() {
        return $('//p[@class="is-size-3 is-uppercase m-t-35 mid-desc-header" and text()="14k White Gold"]')
    }

    get txtInlineDescription10kBg() {
        return $('//p[@class="is-size-3 is-uppercase m-t-35 mid-desc-header" and text()="10K Black Gold"]')
    }

    get txtInlineDescriptionVVSDiamond() {
        return $('//p[@class="is-size-3 is-uppercase m-t-35 mid-desc-header" and text()="VVS Diamond"]')
    }

    get lnkVideoInlineDescription() {
        return $('//p[@class="call-to-action"]/span')
    }

    get sctnAboutOurCustomProducts() {
        return $('//div[@itemprop="mainEntity"]')
    }

    get lnkRating() {
        return $('//a[@class="is-size-7"]')
    }

    get headingRating() {
        return $('//h1[@itemprop="name"]')
    }

    get lnkFilterStone() {
        return $ ('//span[@class="is-capitalize has-text-weight-semibold" and contains(text(),"Stone")]');
    }

    get optnBlackDiamond(){
        return $ ('//p[@class="is-size-7 has-text-primary m-l-7 m-l-0-mob" and text()=" Black Diamond "]')
    }

    get optnVVSDiamond(){
        return $ ('//p[@class="is-size-7 has-text-primary m-l-7 m-l-0-mob" and text()=" VVS Diamond "]')
    }


//PAGE 3    
    get page3() {
        return $('//div[@class="p-b-30"]')
    }

    get pricePage3() {
        return $('//span[@class="is-hidden-touch"]')
    }

    get imgPage3() {
        return $('//div[@class="m-t-7 is-relative img-block"]/img')
    }

    get sctnProductPage3() {
        return $('//div[@class="columns is-gapless reverse-row-order page3-accordian has-background-white-ter is-relative is-block-tablet-only"]')
    }

    get txtStrikedOutPricePage3() {
        return $('//del[@class="is-hidden-touch m-l-10 m-r-5"]')
    }

    get txtSettingPricePage3() {
        return $('//h1[@class="is-size-5 has-text-weight-semibold p-5-touch"]//span[contains(text(),"setting Price")]')
    }

    get txtShortProductDescriptionPage3() {
        return $('//p[@class="is-size-7 is-hidden-touch" and contains(.,"Custom")]')
    }

    get txtShortDescWomensBand() {
        return $('//div[@class="p-b-30"]//p[@class="is-size-7 is-hidden-touch" and contains(.,"Matching Womens Band")]')
    }

    get txtShortDescMensBand() {
        return $('//div[@class="p-b-30"]//p[@class="is-size-7 is-hidden-touch" and contains(.,"Men\'s Ring")]')
    }

    get txtStoneName() {
        return $('//p[@class="is-uppercase has-text-weight-medium" and contains(.,"Custom")]')
    }

    get txtStoneDetails() {
        return $('//p[@class="has-text-weight-normal is-size-7 is-hidden-mobile" and contains(.,"Custom")]')
    }

    get lnkDiamondCertificatePage3() {
        return $('//img[@alt="Certificate"]')
    }

    get lnkDiamond1CertificatePage3() {
        return $('(//img[@alt="Certificate"])[1]')
    }

    get lnkDiamond2CertificatePage3() {
        return $('(//img[@alt="Certificate"])[2]')
    }

    get lnkChangeMetal() {
        return $('//span[text()=" Change Metal "]')
    }

    get optn10kBg() {
        return $('//div[@class="metal-wrapper black-gold"]//span[text()=" 10k "]')
    }

    get optn10kWg() {
        return $('//div[@class="metal-wrapper white-gold"]//span[text()=" 10k "]')
    }

    get lnkSelectRingSize() {
        return $('//p[@class="is-size-7 is-pulled-left has-text-info m-t-2 call-to-action"]')
    }

    get drpRingSize() {
        return $('//select[@name="ringSize"]')
    }

    get optnUS3() {
        return $('//option[text()="US 3 - UK & AU F"]')
    }

    get txtAddDiamondToComplete() {
        return $('//p[@class="has-text-weight-normal is-size-7 is-hidden-mobile"]//b[contains(text(),"Add Diamond to complete")]')
    }

    get txtTypeProductDetails() {
        return $('//div[@class="product-details" and contains(.,"Custom")]')
    }

    get headingProductDetailsWomensBand() {
        return $('//span[text()="matching women-band"]')
    }

    get headingProductDetailsMensRing() {
        return $('//span[text()="mens-ring"]')
    }

    get txtSizeProductDetails() {
        return $('//div[@class="product-details" and contains(text(), "SIZE")]/b[contains(text(), "Add Diamond to complete")]')
    }

    get txtWeightProductDetails() {
        return $('//div[@class="product-details" and contains(text(), "WEIGHT")]/b[contains(text(), "Add Diamond to complete")]')
    }

    get btnReqCusOrder() {
        return $('//button[text()="REQUEST CUSTOM ORDER" and @class="button wd-45 has-text-weight-medium"]')
    }

    get btnAddToCart() {
        return $('//div[@class="column is-6 is-hidden-touch"]//span[text()="ADD TO CART"]')
    }

    get btnSelectWomensBandPage3() {
        return $('//div[@class="column is-6 is-hidden-touch"]//span[text()="Select women\'s band"]')
    }

    get btnSelectMensBandPage3() {
        return $('//div[@class="column is-6 is-hidden-touch"]//span[text()="Select men\'s band"]')
    }

    get btnAddAnotherMensRingPage3() {
        return $('//div[@class="column is-6 is-hidden-touch"]//span[text()="Add Another Men\'s Ring"]')
    }

    get btnSelectDiamondPage3() {
        return $('//div[@class="column is-6 is-hidden-touch"]//button[text()="Select Diamond"]')
    }

    get popupOrderSummary() {
        return $('//div[@class="card-content has-text-centered"]')
    }

    get txtStrikedOutPriceInPopup() {
        return $('//del[@class="has-text-weight-semibold"]')
    }

    get btnCheckOut() {
        return $('//button[text()="CHECKOUT"]')
    }

    get btnContinueShopping() {
        return $('//button[text()="CONTINUE SHOPPING"]')
    }

    get lnkCartIcon() {
        return $('//a[@title="Shopping Bag"]')
    }

    get lblCartCount() {
        return $('//span[@class="cart-badge"]')
    }

    get btnFirstRemove() {
        return $('(//p[@class="is-flex is-justify-content-center is-align-items-center" and contains(text(),"Remove")])[1]')
    }

    get cartWomensBandMetalType() {
        return $('//p[contains(text(),"Matching Womens Band in 10k White Gold")]')
    }

    get cartMensBandMetalType() {
        return $('//p[contains(text(),"Men\'s Ring in 10k White Gold")]')
    }

    get cartUpdatedWomensBand() {
        return $('//p[contains(text(),"in 10k White Gold")]')
    }

    get btnUpdateMensBand() {
        return $('//div[@class="is-flex is-justified-end"]//span[contains(text(),"Update men\'s band")]')
    }

    get btnUpdateWomensBand() {
        return $('//div[@class="is-flex is-justified-end"]//span[contains(text(),"Update women\'s band")]')
    }

// REQUEST CUSTOM ORDER
    get btnReqCusOrder() {
        return $('//button[text()="REQUEST CUSTOM ORDER" and @class="button wd-45 has-text-weight-medium"]')
    }

    get lnkReqCusOrder() {
        return $('//span[@class="is-size-6 call-to-action" and contains(text(),"Request Custom Order")]')
    }

    get txtheadingcreatecustomdesign() {
        return $('//p[contains(text(),"CREATE CUSTOM DESIGN")]')
    }

    get boxbannercustomedesign() {
        return $('//img[@srcset="https://images.diamondere.com/others/images/diamondere/static/CustomDesign_Learn_More_Header.v2.jpg"]')
    }

    get txtbelowbannercustom() {
        return $('//p[@class="m-b-10 custom-design-text"]')
    }

    get imgproductcustom() {
        return $('//img[@itemprop="image"]')
    }

    get txtbelowimgproductcustom() {
        return $('//p[contains(text(),"Custom Order Request For")]')
    }

    get txtheadingcustomform() {
        return $('//span[contains(text()," GET STARTED BY SENDING US YOUR ")]')
    }

    get boxnamefieldcustom() {
        return $('//input[@name="customName"]')
    }

    get boxnamevalidationcustom() {
        return $('//p[contains(text(),"Please do not input any characters other than letters and space")]')
    }

    get boxnamemandatorycustom() {
        return $('//p[contains(text(),"Please enter your name")]')
    }

    get boxemailfieldcustom() {
        return $('//input[@name="customEmail"]')
    }

    get boxemailvalidationcustom() {
        return $('//p[contains(text(),"The Email Address format is invalid")]')
    }

    get boxemailmandatorycustom() {
        return $('//p[contains(text(),"Please enter your Email Address")]')
    }

    get boxphonefieldcustom() {
        return $('//input[@name="customPhNumber"]')
    }

    get boxphonevalidationcustom() {
        return $('//p[contains(text(),"Valid values for Phone Number are +(0-9)")]')
    }

    get boxphonemandatorycustom() {
        return $('//p[contains(text(),"Please enter your Phone Number")]')
    }

    get boxcustomrequestdescrip() {
        return $('//textarea[@name="customDescription"]')
    }

    get boxcustomrequestmandatorydescrip() {
        return $('//p[contains(text(),"Please enter the details of your customization request ")]')
    }

    get btnuploadimagecustom() {
        return $('//span[contains(text(),"Click to Upload Image(Optional)")]')
    }

    get inputFile() {
        return $('//input[@type="file"]')
    }

    get txtimagerestrictioncustom() {
        return $('//p[contains(text(),"- Only JPG/PDF file less than 500Kb in size")]')
    }

    get popupErrorWrongFileUpload() {
        return $('//p[contains(text(),"Please try again in the format prescribed")]')
    }

    get btnsubmitrequestcustom() {
        return $('//span[contains(text(),"SUBMIT CUSTOMIZATION REQUEST")]')
    }

    get boxprocesscustom() {
        return $('//div[@class="p-30 has-background-white-ter is-size-7"]')
    }

    get txtsuccesscustom() {
        return $('//p[contains(text(),"Success")]')
    }

    get txtbelowsuccesscustom() {
        return $('//p[@class="is-full-brightness"]')
    }

    get imgMiyaPage3() {
        return $('//img[@alt="Emerald Solitaire Ring in 14k White Gold"]')
    }

    get imgMiyaReqCusOrder() {
        return $('//img[@alt="Emerald Solitaire Ring in 14k White Gold"]')
    }

    //Create your Own Ring
    get oRingstartwithdiamond() {
        return $('//h2[text()="Create Your Own Ring"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Start with a Diamond"]')
    }

    get oRingstartwithlabdiamond() {
        return $('//h2[text()="Create Your Own Ring"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Start with a Lab Diamond"]')
    }

    get oRingstartwithsetting() {
        return $('//h2[text()="Create Your Own Ring"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Start with a Setting"]')
    }

    // Create your Own Engagement Ring
    get ownEngstartwithdiamond() {
        return $('//h2[text()="Create Your Own Engagement Ring"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Start with a Diamond"]')
    }

    get ownEngstartwithlabdiamond() {
        return $('//h2[text()="Create Your Own Engagement Ring"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Start with a Lab Diamond"]')
    }

    get ownEngstartwithsetting() {
        return $('//h2[text()="Create Your Own Engagement Ring"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Start with a Setting"]')
    }

    // Create your Own Earring
    get ownEarstartwithdiamond() {
        return $('//a[@href="/loose-diamonds?category=earrings&shapes=round&reloadmyoj=true" and @title="Start with a Diamond"]')
    }

    get ownEarstartwithlabdiamond() {
        return $('//a[@href="/loose-lab-created-diamonds?category=earrings&shapes=round&reloadmyoj=true" and @title="Start with a Lab Diamond"]')
    }

    get ownEarstartwithsetting() {
        return $('//a[@href="/earrings/diamond-earrings?reloadmyoj=true&forcemyoj=true" and @title="Start with a Setting"]')
    }

    // Create your Own Necklace
    get oNeckstartwithdiamond() {
        return $('//a[@href="/loose-diamonds?category=necklaces&shapes=round&reloadmyoj=true" and @title="Start with a Diamond"]')
    }

    get oNeckstartwithlabdiamond() {
        return $('//a[@href="/loose-lab-created-diamonds?category=necklaces&shapes=round&reloadmyoj=true" and @title="Start with a Lab Diamond"]')
    }

    get oNeckstartwithsetting() {
        return $('//a[@href="/necklaces/diamond-necklaces?reloadmyoj=true&forcemyoj=true" and @title="Start with a Setting"]')
    }

    // Create your Own Men's
    get oMenstartwithdiamond() {
        return $('//a[@href="/loose-diamonds?category=mens-rings&shapes=round&reloadmyoj=true" and @title="Start with a Diamond"]')
    }

    get oMenstartwithlabdiamond() {
        return $('//a[@href="/loose-lab-created-diamonds?category=mens-rings&shapes=round&reloadmyoj=true" and @title="Start with a Lab Diamond"]')
    }

    get oMenstartwithsetting() {
        return $('//a[@href="/mens/diamond-mens-rings?reloadmyoj=true&forcemyoj=true" and @title="Start with a Setting"]')
    }

    get handcraftedSection() {
        return $('//h1[contains(text(),"Handcrafted Luxury")]')
    }

    get loginIconHome() {
        return $('//a[@title="Login / Sign Up"]')
    }

    hoverLogin() {
        ElementUtil.mouseHover(this.loginIconHome, "Hover the login icon")
    }

    //METHODS
    selectRingsSwad() {
        ElementUtil.click(this.oRingstartwithdiamond, "Click Start with a Diamond - Rings")
        BrowserUtil.wait(5)
        ElementUtil.waitForDisplayed(this.ringStartWithDiamondBanner, 20, "Wait for page load")
    }

    selectEngagementSwad() {
        ElementUtil.click(this.ownEngstartwithdiamond, "Click Start with a Diamond - Engagement")
        BrowserUtil.wait(5)
        ElementUtil.waitForDisplayed(this.engagementSWADBanner, 20, "Wait for page load")
    }

    selectEarringsSwad() {
        ElementUtil.click(this.ownEarstartwithdiamond, "Click Start with a Diamond - Earrings")
        BrowserUtil.wait(5)
        ElementUtil.waitForDisplayed(this.earringsSWADBanner, 20, "Wait for page load")
    }

    selectNecklacesSwald() {
        ElementUtil.click(this.oNeckstartwithlabdiamond, "Click Start with a Lab Diamond - Necklaces")
        BrowserUtil.wait(5)
        ElementUtil.waitForDisplayed(this.necklacesSWLDBanner, 20, "Wait for page load")
    }

    selectMensSwald() {
        ElementUtil.click(this.oMenstartwithlabdiamond, "Click Start with a Lab Diamond - Men's")
        BrowserUtil.wait(5)
        ElementUtil.waitForDisplayed(this.mensSWLDBanner, 20, "Wait for page load")
    }

    selectLinkHome() {
        ElementUtil.click(this.lnkHomeBreadcrumb, "Click Home in Breadcrumb")
        BrowserUtil.wait(5)
        ElementUtil.isVisible(this.handcraftedSection, "Check for the homepage")
        browser.back();
    }

    selectLinkLooseDiamonds() {
        ElementUtil.waitForClickable(this.lnkLooseDiamondsBreadcrumb, 50, "wait for page load")
        ElementUtil.click(this.lnkLooseDiamondsBreadcrumb, "Click Loose Diamonds in Breadcrumb")
        BrowserUtil.wait(5)
    }

    selectLinkLooseLabDiamonds() {
        ElementUtil.waitForClickable(this.lnkLooseLabDiamondsBreadcrumb, 50, "wait for page load")
        ElementUtil.click(this.lnkLooseLabDiamondsBreadcrumb, "Click Loose Lab Diamonds in Breadcrumb")
        BrowserUtil.wait(5)
    }

    hoverWaysToSaveMore() {
        ElementUtil.mouseHover(this.lnkWaysToSaveMore, "Hover over Ways to Save More")
    }

    hoverBandsSelection() {
        ElementUtil.mouseHover(this.drpBandDefault, "Hover over Bands Selection Dropdown")
    }

    hoverMensBandSelection() {
        ElementUtil.mouseHover(this.drpMensBand, "Hover over Bands Selection Dropdown")
    }

    selectEasyDelivery() {
        ElementUtil.mouseHover(this.drpDeliveryDefault, "Hover over Delivery Type Selection Dropdown")
        ElementUtil.forceClick(this.optnEasyDelivery, "Click Easy Delivery")
        BrowserUtil.wait(5)
    }

    selectBothBands() {
        ElementUtil.forceClick(this.optnBothBands, "Click Both Bands")
        BrowserUtil.wait(3)
    }

    selectMensBands() {
        ElementUtil.forceClick(this.optnMensBand, "Click Men's Bands")
        BrowserUtil.wait(3)
    }

    selectWomensBands() {
        ElementUtil.forceClick(this.optnWomensBand, "Click Women's Bands")
        BrowserUtil.wait(3)
    }

    selectOvalShape() {
        BrowserUtil.wait(5)
        ElementUtil.forceClick(this.imglnkOval, "Click Oval Shape")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        BrowserUtil.wait(5)
    }

    selectMoreFilters() {
        //ElementUtil.scrollIntoView(this.morefilterbutton, "Scroll to More Filters button")
        ElementUtil.waitForClickable(this.morefilterbutton, 50, "wait for page load")
        ElementUtil.forceClick(this.morefilterbutton, "Click More Filters")
        //BrowserUtil.wait(2)
    }

    scrollToGemsFilter() {
        ElementUtil.scrollIntoView(this.gemstext, "Scroll to Gems filter")
    }

    hoveringFilters() {
        ElementUtil.scrollIntoView(this.lnkWaysToSaveMore, "Scroll to top of the page")
        ElementUtil.mouseHover(this.gemstext, "Hover over Gems")
        ElementUtil.isVisible(this.gemspopup, "Checking the popup")
        ElementUtil.mouseHover(this.shapestext, "Hover over Shapes")
        ElementUtil.isVisible(this.shapespopup, "Checking the popup")
        ElementUtil.mouseHover(this.pricetext, "Hover over Price")
        ElementUtil.isVisible(this.pricepopup, "Checking the popup")
        ElementUtil.mouseHover(this.carattext, "Hover over Carat")
        ElementUtil.isVisible(this.caratpopup, "Checking the popup")
        ElementUtil.mouseHover(this.claritytext, "Hover over Clarity")
        ElementUtil.isVisible(this.claritypopup, "Checking the popup")
        ElementUtil.mouseHover(this.colortext, "Hover over Color")
        ElementUtil.isVisible(this.colorpopup, "Checking the popup")
        ElementUtil.mouseHover(this.symmetrytext, "Hover over Symmetry")
        ElementUtil.isVisible(this.symmetrypopup, "Checking the popup")
        ElementUtil.mouseHover(this.fluorescencetext, "Hover over Fluorescence")
        ElementUtil.isVisible(this.fluorescencepopup, "Checking the popup")
        ElementUtil.mouseHover(this.lengthtext, "Hover over Length")
        ElementUtil.isVisible(this.lengthpopup, "Checking the popup")
        ElementUtil.mouseHover(this.breadthtext, "Hover over Breadth")
        ElementUtil.isVisible(this.breadthpopup, "Checking the popup")
        ElementUtil.mouseHover(this.tabletext, "Hover over Table%")
        ElementUtil.isVisible(this.tablepopup, "Checking the popup")
        ElementUtil.mouseHover(this.depthtext, "Hover over Depth%")
        ElementUtil.isVisible(this.depthpopup, "Checking the popup")
        ElementUtil.mouseHover(this.cuttext, "Hover over Cut")
        ElementUtil.isVisible(this.cutpopup, "Checking the popup")
        ElementUtil.mouseHover(this.polishtext, "Hover over Polish")
        ElementUtil.isVisible(this.polishpopup, "Checking the popup")
        ElementUtil.mouseHover(this.certificatetext, "Hover over Cetificate")
    }

    hoveringClarityFilter() {
        ElementUtil.scrollIntoView(this.lnkWaysToSaveMore, "Scroll to top of the page")
        ElementUtil.mouseHover(this.claritytext, "Hover over Clarity")
    }

    clickClarityPopup() {
        ElementUtil.click(this.claritypopupdetails, "Click View Details")
    }

    clickXPopup() {
        ElementUtil.click(this.popupBtnXDiamondDetail, "Click X button")
    }

    hoveringColorFilter() {
        ElementUtil.scrollIntoView(this.lnkWaysToSaveMore, "Scroll to top of the page")
        ElementUtil.mouseHover(this.colortext, "Hover over Color")
    }

    clickColorPopup() {
        ElementUtil.click(this.colorpopupdetails, "Click View Details")
    }

    hoveringSymmetryFilter() {
        ElementUtil.scrollIntoView(this.pricetext, "Scroll to top of the page")
        ElementUtil.mouseHover(this.symmetrytext, "Hover over Color")
    }

    clickSymmetryPopup() {
        ElementUtil.click(this.symmetrypopupdetails, "Click View Details")
    }

    hoveringCutFilter() {
        ElementUtil.scrollIntoView(this.lengthtext, "Scroll to top of the page")
        ElementUtil.mouseHover(this.cuttext, "Hover over Color")
    }

    clickCutPopup() {
        ElementUtil.click(this.cutpopupdetails, "Click View Details")
    }

    selectGColor() {
        ElementUtil.click(this.colorGtext, "Click G Color")
        BrowserUtil.wait(5)
    }

    selectResetFilters() {
        ElementUtil.waitForClickable(this.resetfilterbutton, 60, "wait for page load")
        BrowserUtil.wait(5)
        ElementUtil.scrollIntoView(this.carattext, "Scroll to Reset Filters button")
        ElementUtil.click(this.resetfilterbutton, "Click Reset Filters")
        BrowserUtil.wait(8)
    }

    getNoOfDiamonds() {
        let noOfDiamonds = ElementUtil.getText(this.txtNoOfDesigns, "Get Number of Diamonds")
        context.setValue('DiamondsCount', noOfDiamonds)
    }

    selectNaturalDiamond() {
        ElementUtil.click(this.naturaldiamondbutton, "Click Natural Diamond")
        BrowserUtil.wait(15)
        ElementUtil.waitForDisplayed(this.earringsSWADBanner, 60, "wait for page load")
    }

    selectLabDiamond() {
        ElementUtil.click(this.labdiamondbutton, "Click Lab Diamond")
        BrowserUtil.wait(15)
        ElementUtil.waitForDisplayed(this.necklacesSWLDBanner, 60, "wait for page load")
    }
    
    ringsLengthAndBreadth() {
        ElementUtil.isVisible(this.defRingsRoundLength, "Check the default length")
        ElementUtil.isVisible(this.defRingsRoundBreadth, "Check the default breadth")
        ElementUtil.forceClick(this.imglnkOval, "Click Oval Shape")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.isVisible(this.defRingsOvalLength, "Check the default length")
        ElementUtil.isVisible(this.defRingsOvalBreadth, "Check the default breadth")
        ElementUtil.click(this.imglnkPrincess, "Click Princess Shape")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.isVisible(this.defRingsPrincessLength, "Check the default length")
        ElementUtil.isVisible(this.defRingsPrincessBreadth, "Check the default breadth")
        ElementUtil.click(this.imglnkEmerald, "Click Emerald Shape")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.isVisible(this.defRingsEmeraldLength, "Check the default length")
        ElementUtil.isVisible(this.defRingsEmeraldBreadth, "Check the default breadth")
        ElementUtil.click(this.imglnkHeart, "Click Heart Shape")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.isVisible(this.defRingsHeartLength, "Check the default length")
        ElementUtil.isVisible(this.defRingsHeartBreadth, "Check the default breadth")
        ElementUtil.click(this.imglnkCushion, "Click Cushion Shape")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.isVisible(this.defRingsCushionLength, "Check the default length")
        ElementUtil.isVisible(this.defRingsCushionBreadth, "Check the default breadth")
        ElementUtil.click(this.imglnkPear, "Click Pear Shape")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.isVisible(this.defRingsPearLength, "Check the default length")
        ElementUtil.isVisible(this.defRingsPearBreadth, "Check the default breadth")
        ElementUtil.click(this.imglnkMarquise, "Click Marquise Shape")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
    }

    earringsLengthAndBreadth() {
        ElementUtil.isVisible(this.defEarringsRoundLength, "Check the default length")
        ElementUtil.isVisible(this.defEarringsRoundBreadth, "Check the default breadth")
        ElementUtil.click(this.imglnkOval, "Click Oval Shape")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.isVisible(this.defEarringsOvalLength, "Check the default length")
        ElementUtil.isVisible(this.defEarringsOvalBreadth, "Check the default breadth")
        ElementUtil.click(this.imglnkPrincess, "Click Princess Shape")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.isVisible(this.defEarringsPrincessLength, "Check the default length")
        ElementUtil.isVisible(this.defEarringsPrincessBreadth, "Check the default breadth")
        ElementUtil.click(this.imglnkEmerald, "Click Emerald Shape")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.isVisible(this.defEarringsEmeraldLength, "Check the default length")
        ElementUtil.isVisible(this.defEarringsEmeraldBreadth, "Check the default breadth")
        ElementUtil.click(this.imglnkHeart, "Click Heart Shape")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.isVisible(this.defEarringsHeartLength, "Check the default length")
        ElementUtil.isVisible(this.defEarringsHeartBreadth, "Check the default breadth")
        ElementUtil.click(this.imglnkCushion, "Click Cushion Shape")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.isVisible(this.defEarringsCushionLength, "Check the default length")
        ElementUtil.isVisible(this.defEarringsCushionBreadth, "Check the default breadth")
        ElementUtil.click(this.imglnkPear, "Click Pear Shape")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.isVisible(this.defEarringsPearLength, "Check the default length")
        ElementUtil.isVisible(this.defEarringsPearBreadth, "Check the default breadth")
        ElementUtil.click(this.imglnkTriangle, "Click Triangle Shape")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
    }

    necklacesLengthAndBreadth() {
        ElementUtil.isVisible(this.defNecklacesRoundLength, "Check the default length")
        ElementUtil.isVisible(this.defNecklacesRoundBreadth, "Check the default breadth")
        ElementUtil.click(this.imglnkOval, "Click Oval Shape")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.isVisible(this.defNecklacesOvalLength, "Check the default length")
        ElementUtil.isVisible(this.defNecklacesOvalBreadth, "Check the default breadth")
        ElementUtil.click(this.imglnkPrincess, "Click Princess Shape")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.isVisible(this.defNecklacesPrincessLength, "Check the default length")
        ElementUtil.isVisible(this.defNecklacesPrincessBreadth, "Check the default breadth")
        ElementUtil.click(this.imglnkEmerald, "Click Emerald Shape")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.isVisible(this.defNecklacesEmeraldLength, "Check the default length")
        ElementUtil.isVisible(this.defNecklacesEmeraldBreadth, "Check the default breadth")
        ElementUtil.click(this.imglnkHeart, "Click Heart Shape")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.isVisible(this.defNecklacesHeartLength, "Check the default length")
        ElementUtil.isVisible(this.defNecklacesHeartBreadth, "Check the default breadth")
        ElementUtil.click(this.imglnkCushion, "Click Cushion Shape")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.isVisible(this.defNecklacesCushionLength, "Check the default length")
        ElementUtil.isVisible(this.defNecklacesCushionBreadth, "Check the default breadth")
        ElementUtil.click(this.imglnkPear, "Click Pear Shape")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.isVisible(this.defNecklacesPearLength, "Check the default length")
        ElementUtil.isVisible(this.defNecklacesPearBreadth, "Check the default breadth")
        ElementUtil.click(this.imglnkTriangle, "Click Triangle Shape")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
    }

    mensRingsLengthAndBreadth() {
        ElementUtil.isVisible(this.defMensRingsRoundLength, "Check the default length")
        ElementUtil.isVisible(this.defMensRingsRoundBreadth, "Check the default breadth")
        ElementUtil.click(this.imglnkOval, "Click Oval Shape")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.isVisible(this.defMensRingsOvalLength, "Check the default length")
        ElementUtil.isVisible(this.defMensRingsOvalBreadth, "Check the default breadth")
        ElementUtil.click(this.imglnkPrincess, "Click Princess Shape")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.isVisible(this.defMensRingsPrincessLength, "Check the default length")
        ElementUtil.isVisible(this.defMensRingsPrincessBreadth, "Check the default breadth")
        ElementUtil.click(this.imglnkEmerald, "Click Emerald Shape")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.isVisible(this.defMensRingsEmeraldLength, "Check the default length")
        ElementUtil.isVisible(this.defMensRingsEmeraldBreadth, "Check the default breadth")
        ElementUtil.click(this.imglnkCushion, "Click Cushion Shape")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
    }

    dragPriceSlider() {
        ElementUtil.dragAndDrop(this.pricedragleftbutton, "Dragging left thumb", this.dropPriceLeftButton, "Dropping left thumb")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.dragAndDrop(this.pricedragrightbutton, "Dragging right thumb", this.dropPriceRightButton, "Dropping right thumb")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
    }

    enterPriceRange() {
        ElementUtil.clearText(this.priceleftbox, "Clearing min price")
        ElementUtil.sendText(this.priceleftbox, data.Filters.MinPrice, "Entering min price")
        ElementUtil.click(this.pricerightbox, "Clicking max price box")
        BrowserUtil.wait(10)
        ElementUtil.clearText(this.pricerightbox, "Clearing max price")
        ElementUtil.sendText(this.pricerightbox, data.Filters.MaxPrice, "Entering max price")
        ElementUtil.click(this.priceleftbox, "Clicking min price box")
        BrowserUtil.wait(5)
    }

    enterInvalidMinPrice() {
        ElementUtil.clearText(this.priceleftbox, "Clearing min price")
        ElementUtil.sendText(this.priceleftbox, data.Filters.InvalidMinPrice, "Entering invalid min price")
        ElementUtil.click(this.pricerightbox, "Clicking max price box")
    }

    enterInvalidMaxPrice() {
        ElementUtil.clearText(this.pricerightbox, "Clearing max price")
        ElementUtil.sendText(this.pricerightbox, data.Filters.InvalidMaxPrice, "Entering invalid max price")
        ElementUtil.click(this.priceleftbox, "Clicking min price box")
    }

    enterInvalidCharPrice() {
        ElementUtil.clearText(this.priceleftbox, "Clearing min price")
        ElementUtil.sendText(this.priceleftbox, data.Filters.InvalidCharMinPrice, "Entering invalid char min price")
        ElementUtil.click(this.pricerightbox, "Clicking max price box")
        ElementUtil.clearText(this.pricerightbox, "Clearing max price")
        ElementUtil.sendText(this.pricerightbox, data.Filters.InvalidCharMaxPrice, "Entering invalid char max price")
        ElementUtil.click(this.priceleftbox, "Clicking min price box")
    }

    enterDecimalPrice() {
        ElementUtil.clearText(this.priceleftbox, "Clearing min price")
        ElementUtil.sendText(this.priceleftbox, data.Filters.DecimalMinPrice, "Entering decimal min price")
        ElementUtil.click(this.pricerightbox, "Clicking max price box")
        BrowserUtil.wait(8)
        ElementUtil.clearText(this.pricerightbox, "Clearing max price")
        ElementUtil.sendText(this.pricerightbox, data.Filters.DecimalMaxPrice, "Entering decimal max price")
        ElementUtil.click(this.priceleftbox, "Clicking min price box")
        BrowserUtil.wait(8)
        ElementUtil.click(this.pricerightbox, "Clicking max price box")
    }

    selectIncrementPrice() {
        ElementUtil.click(this.priceleftbox, "Clicking min price box")
        browser.keys(['ArrowUp'])
        BrowserUtil.wait(8)
    }

    selectDecrementPrice() {
        ElementUtil.click(this.pricerightbox, "Clicking max price box")
        browser.keys(['ArrowDown'])
        BrowserUtil.wait(8)
    }

    dragCaratSlider() {
        ElementUtil.dragAndDrop(this.caratdragleftbutton, "Dragging left thumb", this.dropCaratLeftButton, "Dropping left thumb")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.dragAndDrop(this.caratdragrightbutton, "Dragging right thumb", this.dropCaratRightButton, "Dropping right thumb")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
    }

    enterCaratRange() {
        ElementUtil.clearText(this.caratleftbox, "Clearing min carat")
        ElementUtil.sendText(this.caratleftbox, data.Filters.MinCarat, "Entering min carat")
        ElementUtil.click(this.caratrightbox, "Clicking max carat box")
        BrowserUtil.wait(8)
        ElementUtil.waitForClickable(this.caratrightbox, 50, "wait for page load")
        ElementUtil.clearText(this.caratrightbox, "Clearing max carat")
        ElementUtil.sendText(this.caratrightbox, data.Filters.MaxCarat, "Entering max carat")
        ElementUtil.click(this.caratleftbox, "Clicking min carat box")
        BrowserUtil.wait(8)
    }

    enterInvalidMinCarat() {
        ElementUtil.clearText(this.caratleftbox, "Clearing min carat")
        ElementUtil.sendText(this.caratleftbox, data.Filters.InvalidMinCarat, "Entering invalid min carat")
        ElementUtil.click(this.caratrightbox, "Clicking max carat box")
    }

    enterInvalidMaxCarat() {
        ElementUtil.clearText(this.caratrightbox, "Clearing max carat")
        ElementUtil.sendText(this.caratrightbox, data.Filters.InvalidMaxCarat, "Entering invalid max carat")
        ElementUtil.click(this.caratleftbox, "Clicking min carat box")
    }

    enterInvalidCharCarat() {
        ElementUtil.clearText(this.caratleftbox, "Clearing min carat")
        ElementUtil.sendText(this.caratleftbox, data.Filters.InvalidCharMinCarat, "Entering invalid char min carat")
        ElementUtil.click(this.caratrightbox, "Clicking max carat box")
        ElementUtil.clearText(this.caratrightbox, "Clearing max carat")
        ElementUtil.sendText(this.caratrightbox, data.Filters.InvalidCharMaxCarat, "Entering invalid char max carat")
        ElementUtil.click(this.caratleftbox, "Clicking min carat box")
    }

    enterDecimalCarat() {
        ElementUtil.waitForClickable(this.caratleftbox, 50, "wait for page load")
        ElementUtil.clearText(this.caratleftbox, "Clearing min carat")
        ElementUtil.sendText(this.caratleftbox, data.Filters.DecimalMinCarat, "Entering decimal min carat")
        ElementUtil.click(this.caratrightbox, "Clicking max carat box")
        BrowserUtil.wait(8)
        ElementUtil.clearText(this.caratrightbox, "Clearing max carat")
        BrowserUtil.wait(8)
        ElementUtil.sendText(this.caratrightbox, data.Filters.DecimalMaxCarat, "Entering decimal max carat")
        ElementUtil.click(this.caratleftbox, "Clicking min carat box")
    }

    enterInvalidDecimalCarat() {
        ElementUtil.clearText(this.caratleftbox, "Clearing min carat")
        ElementUtil.sendText(this.caratleftbox, data.Filters.InvalidDecimalMinCarat, "Entering decimal min carat")
        ElementUtil.click(this.caratrightbox, "Clicking max carat box")
        BrowserUtil.wait(8)
        ElementUtil.clearText(this.caratrightbox, "Clearing max carat")
        ElementUtil.sendText(this.caratrightbox, data.Filters.InvalidDecimalMaxCarat, "Entering decimal max carat")
        ElementUtil.click(this.caratleftbox, "Clicking min carat box")
        BrowserUtil.wait(5)
        ElementUtil.click(this.caratrightbox, "Clicking max carat box")
    }

    selectIncrementCarat() {
        ElementUtil.click(this.caratleftbox, "Clicking min carat box")
        browser.keys(['ArrowUp'])
        BrowserUtil.wait(8)
    }

    selectDecrementCarat() {
        ElementUtil.click(this.caratrightbox, "Clicking max carat box")
        browser.keys(['ArrowDown'])
        BrowserUtil.wait(8)
    }

    dragToLeftEnd() {
        ElementUtil.dragAndDrop(this.claritydragrightbutton, "Dragging right thumb", this.dropEndClarityRightButton, "Dropping right thumb")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.dragAndDrop(this.colordragrightbutton, "Dragging right thumb", this.dropEndColorRightButton, "Dropping right thumb")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.dragAndDrop(this.symmetrydragrightbutton, "Dragging right thumb", this.dropEndSymmetryRightButton, "Dropping right thumb")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.dragAndDrop(this.fluorescencedragrightbutton, "Dragging right thumb", this.dropEndFluorescenceRightButton, "Dropping right thumb")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.dragAndDrop(this.cutdragrightbutton, "Dragging right thumb", this.dropEndCutRightButton, "Dropping right thumb")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.dragAndDrop(this.polishdragrightbutton, "Dragging right thumb", this.dropEndPolishRightButton, "Dropping right thumb")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
    }

    dragToRightEnd() {
        ElementUtil.dragAndDrop(this.claritydragleftbutton, "Dragging left thumb", this.dropEndClarityLeftButton, "Dropping left thumb")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.dragAndDrop(this.colordragleftbutton, "Dragging left thumb", this.dropEndColorLeftButton, "Dropping left thumb")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.dragAndDrop(this.symmetrydragleftbutton, "Dragging left thumb", this.dropEndSymmetryLeftButton, "Dropping left thumb")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.dragAndDrop(this.fluorescencedragleftbutton, "Dragging left thumb", this.dropEndFluorescenceLeftButton, "Dropping left thumb")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.dragAndDrop(this.cutdragleftbutton, "Dragging left thumb", this.dropEndCutLeftButton, "Dropping left thumb")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.dragAndDrop(this.polishdragleftbutton, "Dragging left thumb", this.dropEndPolishLeftButton, "Dropping left thumb")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
    }

    scrollToClarityFilter() {
        ElementUtil.scrollIntoView(this.lnkWaysToSaveMore, "Scroll to clarity filter")
    }

    dragClaritySlider() {
        //ElementUtil.dragAndDrop(this.claritydragleftbutton, "Dragging left thumb", this.dropClarityLeftButton, "Dropping left thumb")
        ElementUtil.click(this.clarityVS1text, "Click VS1")
        BrowserUtil.wait(5)
        //ElementUtil.dragAndDrop(this.claritydragrightbutton, "Dragging right thumb", this.dropClarityRightButton, "Dropping right thumb")
        ElementUtil.click(this.claritySI3text, "Click SI3")
        BrowserUtil.wait(5)
    }

    checkText() {
        expect(this.fluorescencemediumtext).toExist();
    }

    dragColorSlider() {
        //ElementUtil.dragAndDrop(this.colordragleftbutton, "Dragging left thumb", this.dropColorLeftButton, "Dropping left thumb")
        ElementUtil.waitForClickable(this.colorFtext, 50, "wait for page load")
        ElementUtil.click(this.colorFtext, "Click F")
        BrowserUtil.wait(8)
        ElementUtil.waitForClickable(this.colorKtext, 50, "wait for page load")
        //ElementUtil.dragAndDrop(this.colordragrightbutton, "Dragging right thumb", this.dropColorRightButton, "Dropping right thumb")
        ElementUtil.click(this.colorKtext, "Click K")
        BrowserUtil.wait(8)
    }

    scrollToSymmetryFilter() {
        ElementUtil.scrollIntoView(this.pricetext, "Scroll to symmetry filter")
    }

    dragSymmetrySlider() {
        //ElementUtil.dragAndDrop(this.symmetrydragleftbutton, "Dragging left thumb", this.dropSymmetryLeftButton, "Dropping left thumb")
        ElementUtil.click(this.symmetryverygoodtext, "Click Very Good")
        BrowserUtil.wait(8)
        //ElementUtil.dragAndDrop(this.symmetrydragrightbutton, "Dragging right thumb", this.dropSymmetryRightButton, "Dropping right thumb")
        ElementUtil.click(this.symmetryidealtext, "Click Ideal")
        BrowserUtil.wait(8)
    }

    dragFluorescenceSlider() {
        //ElementUtil.dragAndDrop(this.fluorescencedragleftbutton, "Dragging left thumb", this.dropFluorescenceLeftButton, "Dropping left thumb")
        ElementUtil.click(this.fluorescencefainttext, "Click Faint")
        BrowserUtil.wait(5)
        //ElementUtil.dragAndDrop(this.fluorescencedragrightbutton, "Dragging right thumb", this.dropFluorescenceRightButton, "Dropping right thumb")
        ElementUtil.click(this.fluorescencestrongtext, "Click Strong")
        BrowserUtil.wait(5)
    }

    scrollToLengthFilter() {
        ElementUtil.scrollIntoView(this.claritytext, "Scroll to length filter")
    }

    dragLengthSlider() {
        ElementUtil.dragAndDrop(this.lengthdragleftbutton, "Dragging left thumb", this.dropLengthLeftButton, "Dropping left thumb")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.dragAndDrop(this.lengthdragrightbutton, "Dragging right thumb", this.dropLengthRightButton, "Dropping right thumb")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
    }

    enterLengthRange() {
        ElementUtil.clearText(this.lengthleftbox, "Clearing min length")
        BrowserUtil.wait(10)
        ElementUtil.sendText(this.lengthleftbox, data.Filters.MinLength, "Entering min length")
        // ElementUtil.click(this.lengthrightbox, "Clicking max length box")
        // BrowserUtil.wait(10)
        ElementUtil.clearText(this.lengthrightbox, "Clearing max length")
        BrowserUtil.wait(10)
        ElementUtil.sendText(this.lengthrightbox, data.Filters.MaxLength, "Entering max length")
        ElementUtil.click(this.lengthleftbox, "Clicking min length box")
        BrowserUtil.wait(8)
    }

    reEnterLengthRange() {
        ElementUtil.clearText(this.lengthleftbox, "Clearing min length")
        BrowserUtil.wait(10)
        ElementUtil.sendText(this.lengthleftbox, data.Filters.MinLength, "Entering min length")
        // ElementUtil.click(this.lengthrightbox, "Clicking max length box")
        // BrowserUtil.wait(10)
        ElementUtil.clearText(this.lengthrightbox, "Clearing max length")
        BrowserUtil.wait(10)
        ElementUtil.sendText(this.lengthrightbox, data.Filters.MaxLength, "Entering max length")
        //ElementUtil.click(this.lengthleftbox, "Clicking min length box")
        BrowserUtil.wait(8)
    }

    enterInvalidMinLength() {
        ElementUtil.clearText(this.lengthleftbox, "Clearing min length")
        BrowserUtil.wait(10)
        ElementUtil.waitForClickable(this.lengthleftbox, 20, "wait for page load")
        ElementUtil.sendText(this.lengthleftbox, data.Filters.InvalidMinLength, "Entering invalid min length")
        ElementUtil.click(this.lengthrightbox, "Clicking max length box")
        //BrowserUtil.wait(8)
    }

    enterInvalidMaxLength() {
        ElementUtil.clearText(this.lengthrightbox, "Clearing max length")
        BrowserUtil.wait(8)
        ElementUtil.sendText(this.lengthrightbox, data.Filters.InvalidMaxLength, "Entering invalid max length")
        ElementUtil.click(this.lengthleftbox, "Clicking min length box")
        BrowserUtil.wait(8)
    }

    enterInvalidCharLength() {
        ElementUtil.clearText(this.lengthleftbox, "Clearing min length")
        BrowserUtil.wait(8)
        ElementUtil.sendText(this.lengthleftbox, data.Filters.InvalidCharMinLength, "Entering invalid char min length")
        //ElementUtil.click(this.lengthrightbox, "Clicking max length box")
        ElementUtil.clearText(this.lengthrightbox, "Clearing max length")
        BrowserUtil.wait(8)
        ElementUtil.sendText(this.lengthrightbox, data.Filters.InvalidCharMaxLength, "Entering invalid char max length")
        ElementUtil.click(this.lengthleftbox, "Clicking min length box")
    }

    enterDecimalLength() {
        ElementUtil.clearText(this.lengthleftbox, "Clearing min length")
        BrowserUtil.wait(8)
        ElementUtil.sendText(this.lengthleftbox, data.Filters.DecimalMinLength, "Entering decimal min length")
        // ElementUtil.click(this.lengthrightbox, "Clicking max length box")
        // BrowserUtil.wait(5)
        ElementUtil.clearText(this.lengthrightbox, "Clearing max length")
        BrowserUtil.wait(8)
        ElementUtil.sendText(this.lengthrightbox, data.Filters.DecimalMaxLength, "Entering decimal max length")
        ElementUtil.click(this.lengthleftbox, "Clicking min length box")
        BrowserUtil.wait(5)
    }

    enterInvalidDecimalLength() {
        ElementUtil.clearText(this.lengthleftbox, "Clearing min length")
        BrowserUtil.wait(8)
        ElementUtil.sendText(this.lengthleftbox, data.Filters.InvalidDecimalMinLength, "Entering decimal min length")
        // ElementUtil.click(this.lengthrightbox, "Clicking max length box")
        // BrowserUtil.wait(5)
        ElementUtil.clearText(this.lengthrightbox, "Clearing max length")
        BrowserUtil.wait(8)
        ElementUtil.sendText(this.lengthrightbox, data.Filters.InvalidDecimalMaxLength, "Entering decimal max length")
        ElementUtil.click(this.lengthleftbox, "Clicking min length box")
        BrowserUtil.wait(8)
        ElementUtil.click(this.lengthrightbox, "Clicking max length box")
    }

    selectIncrementLength() {
        ElementUtil.click(this.lengthleftbox, "Clicking min length box")
        browser.keys(['ArrowUp'])
        BrowserUtil.wait(8)
    }

    selectDecrementLength() {
        ElementUtil.waitForClickable(this.lengthrightbox, 50, "wait for page load")
        ElementUtil.click(this.lengthrightbox, "Clicking max length box")
        browser.keys(['ArrowDown'])
        BrowserUtil.wait(5)
    }

    dragBreadthSlider() {
        ElementUtil.dragAndDrop(this.breadthdragleftbutton, "Dragging left thumb", this.dropBreadthLeftButton, "Dropping left thumb")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.dragAndDrop(this.breadthdragrightbutton, "Dragging right thumb", this.dropBreadthRightButton, "Dropping right thumb")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
    }

    enterBreadthRange() {
        ElementUtil.clearText(this.breadthleftbox, "Clearing min breadth")
        BrowserUtil.wait(8)
        ElementUtil.sendText(this.breadthleftbox, data.Filters.MinBreadth, "Entering min breadth")
        // ElementUtil.click(this.breadthrightbox, "Clicking max breadth box")
        // BrowserUtil.wait(8)
        ElementUtil.clearText(this.breadthrightbox, "Clearing max breadth")
        BrowserUtil.wait(8)
        ElementUtil.waitForClickable(this.breadthrightbox, 20, "wait for page load")
        ElementUtil.sendText(this.breadthrightbox, data.Filters.MaxBreadth, "Entering max breadth")
        ElementUtil.click(this.breadthleftbox, "Clicking min breadth box")
        BrowserUtil.wait(5)
    }

    reEnterBreadthRange() {
        ElementUtil.clearText(this.breadthleftbox, "Clearing min breadth")
        BrowserUtil.wait(10)
        ElementUtil.sendText(this.breadthleftbox, data.Filters.MinBreadth, "Entering min breadth")
        // ElementUtil.click(this.breadthrightbox, "Clicking max breadth box")
        // BrowserUtil.wait(10)
        ElementUtil.clearText(this.breadthrightbox, "Clearing max breadth")
        BrowserUtil.wait(10)
        ElementUtil.sendText(this.breadthrightbox, data.Filters.MaxBreadthReEnter, "Entering max breadth")
        //ElementUtil.click(this.breadthleftbox, "Clicking min breadth box")
        BrowserUtil.wait(8)
    }

    enterInvalidMinBreadth() {
        ElementUtil.clearText(this.breadthleftbox, "Clearing min breadth")
        ElementUtil.sendText(this.breadthleftbox, data.Filters.InvalidMinBreadth, "Entering invalid min breadth")
        ElementUtil.click(this.breadthrightbox, "Clicking max breadth box")
    }

    enterInvalidMaxBreadth() {
        ElementUtil.clearText(this.breadthrightbox, "Clearing max breadth")
        ElementUtil.sendText(this.breadthrightbox, data.Filters.InvalidMaxBreadth, "Entering invalid max breadth")
        ElementUtil.click(this.breadthleftbox, "Clicking min breadth box")
    }

    enterInvalidCharBreadth() {
        ElementUtil.clearText(this.breadthleftbox, "Clearing min breadth")
        BrowserUtil.wait(8)
        ElementUtil.sendText(this.breadthleftbox, data.Filters.InvalidCharMinBreadth, "Entering invalid char min breadth")
        //ElementUtil.click(this.breadthrightbox, "Clicking max breadth box")
        ElementUtil.clearText(this.breadthrightbox, "Clearing max breadth")
        BrowserUtil.wait(8)
        ElementUtil.sendText(this.breadthrightbox, data.Filters.InvalidCharMaxBreadth, "Entering invalid char max breadth")
        ElementUtil.click(this.breadthleftbox, "Clicking min breadth box")
    }

    enterDecimalBreadth() {
        ElementUtil.clearText(this.breadthleftbox, "Clearing min breadth")
        BrowserUtil.wait(8)
        ElementUtil.sendText(this.breadthleftbox, data.Filters.DecimalMinBreadth, "Entering decimal min breadth")
        // ElementUtil.click(this.breadthrightbox, "Clicking max breadth box")
        // BrowserUtil.wait(5)
        ElementUtil.clearText(this.breadthrightbox, "Clearing max breadth")
        BrowserUtil.wait(8)
        ElementUtil.sendText(this.breadthrightbox, data.Filters.DecimalMaxBreadth, "Entering decimal max breadth")
        ElementUtil.click(this.breadthleftbox, "Clicking min breadth box")
        BrowserUtil.wait(5)
    }

    enterInvalidDecimalBreadth() {
        ElementUtil.clearText(this.breadthleftbox, "Clearing min breadth")
        BrowserUtil.wait(8)
        ElementUtil.sendText(this.breadthleftbox, data.Filters.InvalidDecimalMinBreadth, "Entering decimal min breadth")
        // ElementUtil.click(this.breadthrightbox, "Clicking max breadth box")
        // BrowserUtil.wait(5)
        ElementUtil.clearText(this.breadthrightbox, "Clearing max breadth")
        BrowserUtil.wait(8)
        ElementUtil.sendText(this.breadthrightbox, data.Filters.InvalidDecimalMaxBreadth, "Entering decimal max breadth")
        ElementUtil.click(this.breadthleftbox, "Clicking min breadth box")
        BrowserUtil.wait(8)
        ElementUtil.click(this.breadthrightbox, "Clicking max breadth box")
    }

    selectIncrementBreadth() {
        ElementUtil.click(this.breadthleftbox, "Clicking min breadth box")
        browser.keys(['ArrowUp'])
        BrowserUtil.wait(8)
    }

    selectDecrementBreadth() {
        ElementUtil.click(this.breadthrightbox, "Clicking max breadth box")
        browser.keys(['ArrowDown'])
        BrowserUtil.wait(8)
    }

    dragTableSlider() {
        ElementUtil.dragAndDrop(this.tabledragleftbutton, "Dragging left thumb", this.dropTableLeftButton, "Dropping left thumb")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.dragAndDrop(this.tabledragrightbutton, "Dragging right thumb", this.dropTableRightButton, "Dropping right thumb")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
    }

    enterTableRange() {
        ElementUtil.clearText(this.tableleftbox, "Clearing min table")
        BrowserUtil.wait(5)
        ElementUtil.sendText(this.tableleftbox, data.Filters.MinTable, "Entering min table")
        // ElementUtil.click(this.tablerightbox, "Clicking max table box")
        // BrowserUtil.wait(5)
        ElementUtil.clearText(this.tablerightbox, "Clearing max table")
        BrowserUtil.wait(10)
        ElementUtil.sendText(this.tablerightbox, data.Filters.MaxTable, "Entering max table")
        ElementUtil.click(this.tableleftbox, "Clicking min table box")
        BrowserUtil.wait(8)
    }

    reEnterTableRange() {
        ElementUtil.clearText(this.tableleftbox, "Clearing min table")
        BrowserUtil.wait(10)
        ElementUtil.sendText(this.tableleftbox, data.Filters.MinTable, "Entering min table")
        // ElementUtil.click(this.tablerightbox, "Clicking max table box")
        // BrowserUtil.wait(10)
        ElementUtil.clearText(this.tablerightbox, "Clearing max table")
        BrowserUtil.wait(10)
        ElementUtil.waitForClickable(this.tablerightbox, 50, "wait for page load")
        ElementUtil.sendText(this.tablerightbox, data.Filters.MaxTable, "Entering max table")
        ElementUtil.click(this.tableleftbox, "Clicking min table box")
        BrowserUtil.wait(8)
    }

    enterInvalidMinTable() {
        ElementUtil.clearText(this.tableleftbox, "Clearing min table")
        ElementUtil.sendText(this.tableleftbox, data.Filters.InvalidMinTable, "Entering invalid min table")
        ElementUtil.click(this.tablerightbox, "Clicking max table box")
    }

    enterInvalidMaxTable() {
        ElementUtil.clearText(this.tablerightbox, "Clearing max table")
        ElementUtil.sendText(this.tablerightbox, data.Filters.InvalidMaxTable, "Entering invalid max table")
        ElementUtil.click(this.tableleftbox, "Clicking min table box")
    }

    enterInvalidCharTable() {
        ElementUtil.clearText(this.tableleftbox, "Clearing min table")
        BrowserUtil.wait(5)
        ElementUtil.sendText(this.tableleftbox, data.Filters.InvalidCharMinTable, "Entering invalid char min table")
        //ElementUtil.click(this.tablerightbox, "Clicking max table box")
        ElementUtil.clearText(this.tablerightbox, "Clearing max table")
        BrowserUtil.wait(5)
        ElementUtil.sendText(this.tablerightbox, data.Filters.InvalidCharMaxTable, "Entering invalid char max table")
        ElementUtil.click(this.tableleftbox, "Clicking min table box")
    }

    enterDecimalTable() {
        ElementUtil.clearText(this.tableleftbox, "Clearing min table")
        BrowserUtil.wait(5)
        ElementUtil.sendText(this.tableleftbox, data.Filters.DecimalMinTable, "Entering decimal min table")
        // ElementUtil.click(this.tablerightbox, "Clicking max table box")
        // BrowserUtil.wait(5)
        ElementUtil.clearText(this.tablerightbox, "Clearing max table")
        BrowserUtil.wait(5)
        ElementUtil.waitForClickable(this.tablerightbox, 20, "wait for page load")
        ElementUtil.sendText(this.tablerightbox, data.Filters.DecimalMaxTable, "Entering decimal max table")
        ElementUtil.click(this.tableleftbox, "Clicking min table box")
        BrowserUtil.wait(5)
        ElementUtil.waitForClickable(this.tablerightbox, 5, "wait for page load")
        ElementUtil.click(this.tablerightbox, "Clicking max table box")
    }

    selectIncrementTable() {
        ElementUtil.click(this.tableleftbox, "Clicking min table box")
        browser.keys(['ArrowUp'])
        BrowserUtil.wait(8)
    }

    selectDecrementTable() {
        ElementUtil.waitForEnabled(this.tablerightbox, 50, "wait for page load")
        ElementUtil.click(this.tablerightbox, "Clicking max table box")
        browser.keys(['ArrowDown'])
        BrowserUtil.wait(5)
    }

    dragDepthSlider() {
        ElementUtil.dragAndDrop(this.depthdragleftbutton, "Dragging left thumb", this.dropDepthLeftButton, "Dropping left thumb")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
        ElementUtil.dragAndDrop(this.depthdragrightbutton, "Dragging right thumb", this.dropDepthRightButton, "Dropping right thumb")
        ElementUtil.waitForDisplayed(this.sctnFilters, 50, "wait for page load")
    }

    enterDepthRange() {
        ElementUtil.clearText(this.depthleftbox, "Clearing min depth")
        BrowserUtil.wait(5)
        ElementUtil.sendText(this.depthleftbox, data.Filters.MinDepth, "Entering min depth")
        // ElementUtil.click(this.depthrightbox, "Clicking max depth box")
        // BrowserUtil.wait(5)
        ElementUtil.clearText(this.depthrightbox, "Clearing max depth")
        BrowserUtil.wait(5)
        ElementUtil.sendText(this.depthrightbox, data.Filters.MaxDepth, "Entering max depth")
        ElementUtil.click(this.depthleftbox, "Clicking min depth box")
        BrowserUtil.wait(5)
    }

    reEnterDepthRange() {
        ElementUtil.clearText(this.depthleftbox, "Clearing min depth")
        BrowserUtil.wait(10)
        ElementUtil.sendText(this.depthleftbox, data.Filters.MinDepth, "Entering min depth")
        // ElementUtil.click(this.depthrightbox, "Clicking max depth box")
        // BrowserUtil.wait(10)
        ElementUtil.clearText(this.depthrightbox, "Clearing max depth")
        BrowserUtil.wait(10)
        ElementUtil.waitForClickable(this.depthrightbox, 50, "wait for page load")
        ElementUtil.sendText(this.depthrightbox, data.Filters.MaxDepth, "Entering max depth")
        ElementUtil.click(this.depthleftbox, "Clicking min depth box")
        BrowserUtil.wait(8)
    }

    enterInvalidMinDepth() {
        ElementUtil.clearText(this.depthleftbox, "Clearing min depth")
        ElementUtil.sendText(this.depthleftbox, data.Filters.InvalidMinDepth, "Entering invalid min depth")
        ElementUtil.click(this.depthrightbox, "Clicking max depth box")
    }

    enterInvalidMaxDepth() {
        ElementUtil.clearText(this.depthrightbox, "Clearing max depth")
        ElementUtil.sendText(this.depthrightbox, data.Filters.InvalidMaxDepth, "Entering invalid max depth")
        ElementUtil.click(this.depthleftbox, "Clicking min depth box")
    }

    enterInvalidCharDepth() {
        ElementUtil.clearText(this.depthleftbox, "Clearing min depth")
        BrowserUtil.wait(5)
        ElementUtil.sendText(this.depthleftbox, data.Filters.InvalidCharMinDepth, "Entering invalid char min depth")
        //ElementUtil.click(this.depthrightbox, "Clicking max depth box")
        ElementUtil.clearText(this.depthrightbox, "Clearing max depth")
        BrowserUtil.wait(5)
        ElementUtil.sendText(this.depthrightbox, data.Filters.InvalidCharMaxDepth, "Entering invalid char max depth")
        ElementUtil.click(this.depthleftbox, "Clicking min depth box")
    }

    enterDecimalDepth() {
        ElementUtil.clearText(this.depthleftbox, "Clearing min depth")
        BrowserUtil.wait(5)
        ElementUtil.sendText(this.depthleftbox, data.Filters.DecimalMinDepth, "Entering decimal min depth")
        // ElementUtil.click(this.depthrightbox, "Clicking max depth box")
        // BrowserUtil.wait(5)
        ElementUtil.clearText(this.depthrightbox, "Clearing max depth")
        BrowserUtil.wait(5)
        ElementUtil.sendText(this.depthrightbox, data.Filters.DecimalMaxDepth, "Entering decimal max depth")
        ElementUtil.click(this.depthleftbox, "Clicking min depth box")
        BrowserUtil.wait(5)
        ElementUtil.click(this.depthrightbox, "Clicking max depth box")
    }

    selectIncrementDepth() {
        ElementUtil.click(this.depthleftbox, "Clicking min depth box")
        browser.keys(['ArrowUp'])
        BrowserUtil.wait(8)
    }

    selectDecrementDepth() {
        ElementUtil.waitForEnabled(this.depthrightbox, 50, "wait for page load")
        ElementUtil.click(this.depthrightbox, "Clicking max depth box")
        browser.keys(['ArrowDown'])
        BrowserUtil.wait(5)
    }

    dragCutSlider() {
        //ElementUtil.dragAndDrop(this.cutdragleftbutton, "Dragging left thumb", this.dropCutLeftButton, "Dropping left thumb")
        ElementUtil.click(this.cutverygoodtext, "Click Very Good")
        BrowserUtil.wait(5)
        //ElementUtil.dragAndDrop(this.cutdragrightbutton, "Dragging right thumb", this.dropCutRightButton, "Dropping right thumb")
        ElementUtil.click(this.cutexcellenttext, "Click Excellent")
        BrowserUtil.wait(5)
    }

    disabledCutFilter() {
        ElementUtil.isVisible(this.cutslidertrack, "Check the enabled cut filter with round shape")
        ElementUtil.isVisible(this.tablecutcolumn, "Check the cut column in diamond listing table")
        ElementUtil.click(this.imglnkAsscher, "Click Asscher shape")
        BrowserUtil.wait(8)
        ElementUtil.isVisible(this.cutdisabledslider, "Check the disabled cut filter with asscher shape")
        //ElementUtil.not.isVisible(this.tablecutcolumn, "Check the absence of cut column in diamond listing table")
        ElementUtil.click(this.imglnkBaguette, "Click Baguette shape")
        BrowserUtil.wait(8)
        ElementUtil.isVisible(this.cutdisabledslider, "Check the disabled cut filter with baguette shape")
        //ElementUtil.not.isVisible(this.tablecutcolumn, "Check the absence of cut column in diamond listing table")
        ElementUtil.click(this.imglnkCushion, "Click Cushion shape")
        BrowserUtil.wait(8)
        ElementUtil.isVisible(this.cutslidertrack, "Check the enabled cut filter with cushion shape")
        ElementUtil.isVisible(this.tablecutcolumn, "Check the cut column in diamond listing table")
        ElementUtil.click(this.imglnkEmerald, "Click Emerald shape")
        BrowserUtil.wait(8)
        ElementUtil.isVisible(this.cutdisabledslider, "Check the disabled cut filter with emerald shape")
        //ElementUtil.not.isVisible(this.tablecutcolumn, "Check the absence of cut column in diamond listing table")
        ElementUtil.click(this.imglnkHeart, "Click Heart shape")
        BrowserUtil.wait(8)
        ElementUtil.isVisible(this.cutdisabledslider, "Check the disabled cut filter with heart shape")
        //ElementUtil.not.isVisible(this.tablecutcolumn, "Check the absence of cut column in diamond listing table")
        ElementUtil.click(this.imglnkHexagonal, "Click Hexagonal shape")
        BrowserUtil.wait(8)
        ElementUtil.isVisible(this.cutdisabledslider, "Check the disabled cut filter with hexagonal shape")
        //ElementUtil.not.isVisible(this.tablecutcolumn, "Check the absence of cut column in diamond listing table")
        ElementUtil.click(this.imglnkMarquise, "Click Marquise shape")
        BrowserUtil.wait(8)
        ElementUtil.isVisible(this.cutdisabledslider, "Check the disabled cut filter with marquise shape")
        //ElementUtil.not.isVisible(this.tablecutcolumn, "Check the absence of cut column in diamond listing table")
        ElementUtil.click(this.imglnkOval, "Click Oval shape")
        BrowserUtil.wait(8)
        ElementUtil.isVisible(this.cutdisabledslider, "Check the disabled cut filter with oval shape")
        //ElementUtil.not.isVisible(this.tablecutcolumn, "Check the absence of cut column in diamond listing table")
        ElementUtil.click(this.imglnkPear, "Click Pear shape")
        BrowserUtil.wait(8)
        ElementUtil.isVisible(this.cutdisabledslider, "Check the disabled cut filter with pear shape")
        //ElementUtil.not.isVisible(this.tablecutcolumn, "Check the absence of cut column in diamond listing table")
        ElementUtil.click(this.imglnkPrincess, "Click Princess shape")
        BrowserUtil.wait(8)
        ElementUtil.isVisible(this.cutslidertrack, "Check the enabled cut filter with princess shape")
        ElementUtil.isVisible(this.tablecutcolumn, "Check the cut column in diamond listing table")
        ElementUtil.click(this.imglnkRadiant, "Click Radiant shape")
        BrowserUtil.wait(8)
        ElementUtil.isVisible(this.cutdisabledslider, "Check the disabled cut filter with radiant shape")
        //ElementUtil.not.isVisible(this.tablecutcolumn, "Check the absence of cut column in diamond listing table")
        ElementUtil.click(this.imglnkRosecut, "Click Rose Cut shape")
        BrowserUtil.wait(8)
        ElementUtil.isVisible(this.cutdisabledslider, "Check the disabled cut filter with rose cut shape")
        //ElementUtil.not.isVisible(this.tablecutcolumn, "Check the absence of cut column in diamond listing table")
        ElementUtil.click(this.imglnkTriangle, "Click Triangle shape")
        BrowserUtil.wait(8)
        ElementUtil.isVisible(this.cutdisabledslider, "Check the disabled cut filter with triangle shape")
        //ElementUtil.not.isVisible(this.tablecutcolumn, "Check the absence of cut column in diamond listing table")
        ElementUtil.click(this.imglnkSquare, "Click Square shape")
        BrowserUtil.wait(8)
    }

    dragPolishSlider() {
        //ElementUtil.dragAndDrop(this.polishdragleftbutton, "Dragging left thumb", this.dropPolishLeftButton, "Dropping left thumb")
        ElementUtil.click(this.polishverygoodtext, "Click Very Good")
        BrowserUtil.wait(5)
        //ElementUtil.dragAndDrop(this.polishdragrightbutton, "Dragging right thumb", this.dropPolishRightButton, "Dropping right thumb")
        ElementUtil.click(this.polishexcellenttext, "Click Excellent")
        BrowserUtil.wait(5)
    }

    uncheckGIA() {
        ElementUtil.waitForClickable(this.btnGIACheckbox, 20, "wait for page load")
        ElementUtil.click(this.btnGIACheckbox, "Uncheck GIA certificate")
        BrowserUtil.wait(5)
    }

    uncheckIGI() {
        ElementUtil.waitForClickable(this.btnIGICheckbox, 20, "wait for page load")
        ElementUtil.click(this.btnIGICheckbox, "Uncheck IGI certificate")
        BrowserUtil.wait(5)
    }

    selectQuickView() {
        BrowserUtil.wait(5)
        //ElementUtil.scrollIntoView(this.morefilterbutton, "Scroll to diamond listing table");
        ElementUtil.waitForClickable(this.tableexpandfirstrowicon, 60, "wait for page load")
        ElementUtil.click(this.tableexpandfirstrowicon, "Click Quick View of First Row")
    }

    selectQuickViewEarrings() {
        BrowserUtil.wait(5);
        //ElementUtil.scrollIntoView(this.morefilterbutton, "Scroll to diamond listing table");
        ElementUtil.waitForClickable(this.tableearringQuickView, 30, "wait for page load")
        ElementUtil.click(this.tableearringQuickView, "Click Quick View of First Row")
    }

    selectViewLabDiamond() {
        ElementUtil.waitForClickable(this.viewlabdiamondbutton, 60, "wait for page load")
        ElementUtil.forceClick(this.viewlabdiamondbutton, "Click View Lab Diamond Button")
        BrowserUtil.wait(8);
    }

    scrollEarringDDP() {
        ElementUtil.scrollIntoView(this.btnSelectEarring, "Scroll to diamond details");
    }

    enterCarat30() {
        ElementUtil.clearText(this.caratleftbox, "Clearing min carat")
        ElementUtil.sendText(this.caratleftbox, data.Filters.Carat30, "Entering min carat")
        ElementUtil.click(this.caratrightbox, "Clicking max carat box")
        BrowserUtil.wait(8);
    }

    looseDiamondsLengthAndBreadth() {
        ElementUtil.isVisible(this.txtFixedMinLength, "Check the default length")
        ElementUtil.isVisible(this.txtFixedMinBreadth, "Check the default breadth")
        ElementUtil.isVisible(this.txtFixedMaxLength, "Check the default length")
        ElementUtil.isVisible(this.txtFixedMaxBreadth, "Check the default breadth")
        ElementUtil.click(this.imglnkOval, "Click Oval Shape")
        BrowserUtil.wait(5);
        ElementUtil.isVisible(this.txtFixedMinLength, "Check the default length")
        ElementUtil.isVisible(this.txtFixedMinBreadth, "Check the default breadth")
        ElementUtil.isVisible(this.txtFixedMaxLength, "Check the default length")
        ElementUtil.isVisible(this.txtFixedMaxBreadth, "Check the default breadth")
        ElementUtil.click(this.imglnkPrincess, "Click Princess Shape")
        BrowserUtil.wait(5);
        ElementUtil.isVisible(this.txtFixedMinLength, "Check the default length")
        ElementUtil.isVisible(this.txtFixedMinBreadth, "Check the default breadth")
        ElementUtil.isVisible(this.txtFixedMaxLength, "Check the default length")
        ElementUtil.isVisible(this.txtFixedMaxBreadth, "Check the default breadth")
        ElementUtil.click(this.imglnkEmerald, "Click Emerald Shape")
        BrowserUtil.wait(5);
    }

    enterPrice1500() {
        ElementUtil.clearText(this.priceleftbox, "Clearing min price")
        ElementUtil.sendText(this.priceleftbox, data.Filters.Price1500, "Entering min price")
        ElementUtil.click(this.pricerightbox, "Clicking max price box")
        BrowserUtil.wait(8);
        ElementUtil.clearText(this.pricerightbox, "Clearing max price")
        ElementUtil.sendText(this.pricerightbox, data.Filters.Price1500, "Entering max price")
        ElementUtil.click(this.priceleftbox, "Clicking min price box")
        BrowserUtil.wait(8);
    }

    enterDifferentCaratRange() {
        ElementUtil.clearText(this.caratleftbox, "Clearing min carat")
        ElementUtil.sendText(this.caratleftbox, data.Filters.MaxCarat, "Entering min carat")
        ElementUtil.click(this.caratrightbox, "Clicking max carat box")
        BrowserUtil.wait(5);
        ElementUtil.clearText(this.caratrightbox, "Clearing max carat")
        ElementUtil.sendText(this.caratrightbox, data.Filters.MinCarat, "Entering max carat")
        ElementUtil.click(this.caratleftbox, "Clicking min carat box")
        BrowserUtil.wait(8);
    }

    scrollToBanner() {
        ElementUtil.scrollIntoView(this.LooseDiamondsBanner, "Scroll to banner")
    }

    scrollToListingNoFilters() {
        ElementUtil.scrollIntoView(this.claritytext, "scroll to listing")
    }

    selectRecentlyViewed() {
        ElementUtil.click(this.Recentlyviewedtab, "Click Recently Viewed")
    }

    selectForCompare() {
        ElementUtil.click(this.compareRow1radiobutton, "Click Compare Row 1")
        ElementUtil.click(this.compareRow2radiobutton, "Click Compare Row 2")
        ElementUtil.click(this.compareRow3radiobutton, "Click Compare Row 3")
        ElementUtil.click(this.compareRow4radiobutton, "Click Compare Row 4")
        ElementUtil.click(this.compareRow5radiobutton, "Click Compare Row 5")
    }

    selectCompareTab() {
        ElementUtil.click(this.Comparetab, "Click Compare Tab")
    }

    selectCaretCompare() {
        ElementUtil.click(this.btnCompareRightArrow, "Click Compare Right Arrow")
        ElementUtil.click(this.btnCompareLeftArrow, "Click Compare Left Arrow")
    }

    selectTwoForCompare() {
        ElementUtil.click(this.compareearringRow1radiobutton, "Click Compare Row 1")
        ElementUtil.click(this.compareearringRow2radiobutton, "Click Compare Row 2") 
    }

    removeFirstDiamond() {
        ElementUtil.click(this.btnCompareRemoveColumn1, "Click Remove Compare Column 1")
    }

    selectViewCompare() {
        ElementUtil.scrollIntoView(this.txtCompareClarity, "Scroll to table")
        ElementUtil.click(this.lnkViewStone, "Click View")
    }

    hoverSortBy() {
        ElementUtil.mouseHover(this.sortbybutton, "Hover over sort by")
    }

    selectSortByOption() {
        ElementUtil.waitForClickable(this.sortbybutton, 50, "wait for page load")
        ElementUtil.click(this.sortbybutton, "Click sort by")
        ElementUtil.click(this.sortbycaratlowtohightext, "Select Low to High Carat")
        BrowserUtil.wait(5)
    }

    selectGalleryView() {
        ElementUtil.click(this.galleryview, "Click Gallery View")
        BrowserUtil.wait(5)
        ElementUtil.waitForDisplayed(this.imgFirstRowGridView, 50, "wait for page load")
    }

    closeQuickView() {
        ElementUtil.click(this.tablefirstrowXbutton, "Click X button")
    }

    selectViewDiamond() {
        ElementUtil.waitForClickable(this.viewdiamondbutton, 60, "wait for page load")
        ElementUtil.click(this.viewdiamondbutton, "Click View Diamond Button")
        BrowserUtil.wait(5);
    }

    selectPlayVideo() {
        ElementUtil.click(this.iconPlayVideo, "Click Pay Video")
    }

    selectIconGIA() {
        ElementUtil.scrollIntoView(this.lnkWaysToSaveMore, "Scroll to icons")
        ElementUtil.click(this.iconGIACertificate, "Click GIA icon")
    }

    selectIconIGI() {
        ElementUtil.scrollIntoView(this.lnkWaysToSaveMore, "Scroll to icons")
        ElementUtil.click(this.iconIGICertificate, "Click IGI icon")
    }

    selectIconTopView() {
        ElementUtil.scrollIntoView(this.lnkWaysToSaveMore, "Scroll to icons")
        ElementUtil.click(this.iconTopView, "Click Top View")
    }

    selectIconSideView() {
        ElementUtil.scrollIntoView(this.lnkWaysToSaveMore, "Scroll to icons")
        ElementUtil.click(this.iconSideView, "Click Side View")
    }

    hoveringDiamondFeatures() {
        ElementUtil.scrollIntoView(this.btnSelectNecklace, "Scroll to Diamond Details")
        ElementUtil.isVisible(this.txtdiamondDDP, "Checking the text")
        ElementUtil.isVisible(this.txtReportDDP, "Checking the text")
        ElementUtil.isVisible(this.linkViewReportDDP, "Checking the text")
        ElementUtil.mouseHover(this.txtColorDDP, "Hover over Color")
        ElementUtil.isVisible(this.popupColorDDP, "Checking the tooltip")
        ElementUtil.mouseHover(this.txtPriceDDP, "Hover over Price")
        ElementUtil.isVisible(this.PriceTooltipDDP, "Checking the tooltip")
        ElementUtil.mouseHover(this.txtYourprice, "Hover over Your Price")
        ElementUtil.isVisible(this.yourPriceTooltipDDP, "Checking the tooltip")
        ElementUtil.mouseHover(this.txtcaratWeightDDP, "Hover over Carat")
        ElementUtil.isVisible(this.caratWeightTooltipDDP, "Checking the tooltip")
        ElementUtil.mouseHover(this.txtShapeDDP, "Hover over Shape")
        ElementUtil.isVisible(this.shapeTooltipDDP, "Checking the tooltip")
        ElementUtil.mouseHover(this.txtCutDDP, "Hover over Cut")
        ElementUtil.isVisible(this.popupCutDDP, "Checking the tooltip")
        ElementUtil.mouseHover(this.txtMeasurementDDP, "Hover over Measurement")
        ElementUtil.isVisible(this.popupMeasurementDDP, "Checking the tooltip")
        ElementUtil.mouseHover(this.txtOriginDDP, "Hover over Origin")
        //ElementUtil.waitForDisplayed(this.originTooltipDDP, 10, "Checking the tooltip")
        ElementUtil.mouseHover(this.txtClarityDDP, "Hover over Clarity")
        ElementUtil.isVisible(this.popupClarityDDP, "Checking the tooltip")
        ElementUtil.mouseHover(this.txtTableDDP, "Hover over Table%")
        //ElementUtil.isVisible(this.tableTooltipDDP, "Checking the tooltip")
        ElementUtil.mouseHover(this.txtDepthDDP, "Hover over Depth%")
        ElementUtil.isVisible(this.depthTooltipDDP, "Checking the tooltip")
        ElementUtil.mouseHover(this.txtSymmetryDDP, "Hover over Symmetry")
        ElementUtil.isVisible(this.popupSymmetryDDP, "Checking the tooltip")
        ElementUtil.mouseHover(this.txtPolishDDP, "Hover over Polish")
        ElementUtil.isVisible(this.polishTooltipDDP, "Checking the tooltip")
        ElementUtil.mouseHover(this.txtFluorescenceDDP, "Hover over fluorescence")
    }

    hoverViewDetailsDiamondFeatures() {
        ElementUtil.scrollIntoView(this.iconPlayVideo, "Scroll to Diamond Details")
        ElementUtil.mouseHover(this.txtColorDDP, "Hover over Color")
        ElementUtil.click(this.popupColorViewDetails, "Click View Details")
        ElementUtil.isVisible(this.txtPopupColorViewDetailsDDP, "Check Popup")
        ElementUtil.click(this.popupBtnXDiamondDetail, "Click X button")
        ElementUtil.mouseHover(this.txtCutDDP, "Hover over Cut")
        ElementUtil.forceClick(this.cutViewDetailsDDP, "Click View Details")
        ElementUtil.isVisible(this.txtPopupCutViewDetailsDDP, "Check Popup")
        ElementUtil.click(this.popupBtnXDiamondDetail, "Click X button")
        // ElementUtil.mouseHover(this.txtMeasurementDDP, "Hover over Measurement")
        // ElementUtil.click(this.measurementViewDetailsDDP, "Click View Details")
        // ElementUtil.isVisible(this.popupMeasurementViewDetailsDDP, "Check Popup")
        // ElementUtil.click(this.popupBtnXDiamondDetail, "Click X button")
        ElementUtil.mouseHover(this.txtClarityDDP, "Hover over Clarity")
        ElementUtil.click(this.clarityViewDetailsDDP, "Click View Details")
        ElementUtil.isVisible(this.popupclarityViewDetailsDDP, "Check Popup")
        ElementUtil.click(this.popupBtnXDiamondDetail, "Click X button")
        ElementUtil.mouseHover(this.txtSymmetryDDP, "Hover over Symmetry")
        ElementUtil.click(this.SymmetryViewDetailsDDP, "Click View Details")
    }

    selectDiamondDetails2() {
        ElementUtil.scrollIntoView(this.lnkWaysToSaveMore, "Scroll to icons")
        ElementUtil.click(this.txtEarringdiamondDetails2, "Click Diamond Details 2")
    }

    selectLinksBreadcrumb() {
        ElementUtil.click(this.lnkViewDetails, "Click View Details in breadcrumb")
        BrowserUtil.wait(5)
        ElementUtil.isVisible(this.createYourOwnEarring, "Check heading")
        ElementUtil.click(this.lnkDiamondEarringBreadcrumb, "Click breadcrumb")
        BrowserUtil.wait(5)
    }

    selectPage3Button() {
        //ElementUtil.scrollIntoView(this.paginationarea, "Scroll to pagination")
        ElementUtil.click(this.btnPage3Table, "Click 3")
        BrowserUtil.wait(5)
    }

    enterPageNumber() {
        ElementUtil.scrollIntoView(this.paginationarea, "Scroll to pagination")
        ElementUtil.clearText(this.pagenumberfield, "Clear page number")
        ElementUtil.sendText(this.pagenumberfield, data.DiamondDetailsPage.PageNumber, "Enter 3")
        browser.keys('Enter')
        BrowserUtil.wait(5)
    }

    selectPage2Button() {
        //ElementUtil.scrollIntoView(this.paginationarea, "Scroll to pagination")
        ElementUtil.click(this.btnPage2Table, "Click 2")
        BrowserUtil.wait(10)
    }

    selectRightCaretPage() {
        ElementUtil.forceClick(this.pagerighticon, "Click right caret icon")
        BrowserUtil.wait(5)
    }

    selectLeftCaretPage() {
        ElementUtil.forceClick(this.pagelefticon, "Click left caret icon")
        BrowserUtil.wait(5)
    }

    selectEarringDDP() {
        ElementUtil.scrollIntoView(this.lnkWaysToSaveMore, "Scroll to button")
        ElementUtil.click(this.btnSelectEarring, "Click button")
        BrowserUtil.wait(5)
    }

    selectNecklaceDDP() {
        ElementUtil.scrollIntoView(this.lnkWaysToSaveMore, "Scroll to button")
        ElementUtil.click(this.btnSelectNecklace, "Click button")
        BrowserUtil.wait(5)
    }

    selectMensRingDDP() {
        ElementUtil.scrollIntoView(this.lnkWaysToSaveMore, "Scroll to button")
        ElementUtil.click(this.btnSelectMensRing, "Click button")
        BrowserUtil.wait(5)
    }

    selectRingDDP() {
        ElementUtil.scrollIntoView(this.lnkWaysToSaveMore, "Scroll to button")
        ElementUtil.click(this.btnSelectRing, "Click button")
        BrowserUtil.wait(5)
    }

    selectRingsBreadcrumb() {
        ElementUtil.click(this.lnkMakeYourDiamondEngagementRingBreadcrumb, "Click Make Your Diamond Engagement Ring in breadcrumb")
        BrowserUtil.wait(5)
        ElementUtil.isVisible(this.ringStartWithDiamondBanner, "Check the banner")
        ElementUtil.click(this.lnkEngagementRingBreadcrumb, "Click Engagement Ring in breadcrumb")
        BrowserUtil.wait(5)
    }

    browseBack() {
        browser.back();
        BrowserUtil.wait(5)
    }

    selectEarringsBreadcrumb() {
        ElementUtil.click(this.lnkMakeYourDiamondEarringBreadcrumb, "Click Make Your Diamond Earring in breadcrumb")
        BrowserUtil.wait(5)
        ElementUtil.isVisible(this.earringsSWADBanner, "Check the banner")
        ElementUtil.click(this.lnkEarringsBreadcrumb, "Click Earrings in breadcrumb")
        BrowserUtil.wait(5)
    }

    selectNecklacesBreadcrumb() {
        ElementUtil.click(this.lnkMakeYourDiamondNecklaceBreadcrumb, "Click Make Your Diamond Necklace in breadcrumb")
        BrowserUtil.wait(5)
        ElementUtil.isVisible(this.necklacesSWADBanner, "Check the banner")
        ElementUtil.click(this.lnkNecklacesBreadcrumb, "Click Necklaces in breadcrumb")
        BrowserUtil.wait(5)
    }

    selectMensRingsBreadcrumb() {
        ElementUtil.click(this.lnkMakeYourDiamondMensRingBreadcrumb, "Click Make Your Diamond Men's Ring in breadcrumb")
        BrowserUtil.wait(5)
        ElementUtil.isVisible(this.mensSWADBanner, "Check the banner")
        ElementUtil.click(this.lnkMensRingBreadcrumb, "Click Men's Ring in breadcrumb")
        BrowserUtil.wait(5)
    }

    scrollToProduct() {
        ElementUtil.scrollIntoView(this.lnkWaysToSaveMore, "Scroll to product")
    }

    selectLabRingsBreadcrumb() {
        ElementUtil.click(this.lnkMakeYourLabDiamondEngagementRingBreadcrumb, "Click Make Your Diamond Engagement Ring in breadcrumb")
        BrowserUtil.wait(5)
        ElementUtil.isVisible(this.ringStartLabDiamondBanner, "Check the banner")
        ElementUtil.click(this.lnkEngagementRingBreadcrumb, "Click Engagement Ring in breadcrumb")
        BrowserUtil.wait(5)
    }

    selectLabEarringsBreadcrumb() {
        ElementUtil.click(this.lnkMakeYourLabDiamondEarringBreadcrumb, "Click Make Your Diamond Earring in breadcrumb")
        BrowserUtil.wait(5)
        ElementUtil.isVisible(this.earringsSWLDBanner, "Check the banner")
        ElementUtil.click(this.lnkEarringsBreadcrumb, "Click Earrings in breadcrumb")
        BrowserUtil.wait(5)
    }

    selectLabNecklacesBreadcrumb() {
        ElementUtil.click(this.lnkMakeYourLabDiamondNecklaceBreadcrumb, "Click Make Your Diamond Necklace in breadcrumb")
        BrowserUtil.wait(5)
        ElementUtil.isVisible(this.necklacesSWLDBanner, "Check the banner")
        ElementUtil.click(this.lnkNecklacesBreadcrumb, "Click Necklaces in breadcrumb")
        BrowserUtil.wait(5)
    }

    selectLabMensRingsBreadcrumb() {
        ElementUtil.click(this.lnkMakeYourLabDiamondMensRingBreadcrumb, "Click Make Your Diamond Men's Ring in breadcrumb")
        BrowserUtil.wait(5)
        ElementUtil.isVisible(this.mensSWLDBanner, "Check the banner")
        ElementUtil.click(this.lnkMensRingBreadcrumb, "Click Men's Ring in breadcrumb")
        BrowserUtil.wait(5)
    }

    selectChangeDiamond() {
        ElementUtil.waitForClickable(this.tabDiamondChange, 25, "wait for page load")
        ElementUtil.click(this.tabDiamondChange, "Click Change Diamond")
        BrowserUtil.wait(5)
    }

    selectChangeLabDiamond() {
        ElementUtil.waitForClickable(this.tabLabDiamondChange, 25, "wait for page load")
        ElementUtil.click(this.tabLabDiamondChange, "Click Change Lab Diamond")
        BrowserUtil.wait(5)
    }

    selectWirePayment() {
        ElementUtil.waitForDisplayed(this.drpPaymentDefault, 60, "wait for page load")
        ElementUtil.mouseHover(this.drpPaymentDefault, "Hover over Payment Selection Dropdown")
        ElementUtil.forceClick(this.optnWirePayment, "Click Wire Payment")
        BrowserUtil.wait(5)
    }

    selectStarRating() {
        //ElementUtil.scrollIntoView(this.sctnAboutOurCustomProducts, "Scroll to SEO section")
        ElementUtil.click(this.lnkRating, "Click Rating")
        BrowserUtil.wait(5)
        ElementUtil.waitForDisplayed(this.headingRating, 50, "wait for page load")
    }

    selectProductPage2() {
        ElementUtil.waitForDisplayed(this.sctnFilterTab, 60, "wait for page load")
        ElementUtil.scrollIntoView(this.sctnFilterTab, "Scroll to product display")
        ElementUtil.waitForClickable(this.imgProduct, 60, "wait for page load")
        ElementUtil.click(this.imgProduct, "Click a product")
        BrowserUtil.wait(5)
    }

    selectAddToCart() {
        ElementUtil.waitForClickable(this.btnAddToCart, 60, "wait for page load")
        ElementUtil.click(this.btnAddToCart, "Click Add to Cart")
        BrowserUtil.wait(5)
    }

    selectCheckOut() {
        ElementUtil.waitForClickable(this.btnCheckOut, 60, "wait for page load")
        ElementUtil.click(this.btnCheckOut, "Click checkout")
        BrowserUtil.wait(5)
    }

    selectRingSize() {
        //ElementUtil.scrollIntoView(this.btnAddToCart, "Scroll to ring size")
        BrowserUtil.wait(6)
        ElementUtil.waitForClickable(this.lnkSelectRingSize, 60, "wait for page load")
        ElementUtil.forceClick(this.lnkSelectRingSize, "Click Select")
        // let ringSizeLink = ElementUtil.isVisible(this.drpRingSize, "Check dropdown")
        // if (ringSizeLink == false) {
        //     ElementUtil.forceClick(this.lnkSelectRingSize, "Click Select")
        // }
        ElementUtil.waitForClickable(this.drpRingSize, 10, "wait for page load")
        ElementUtil.click(this.drpRingSize, "Select dropdown")
        ElementUtil.click(this.optnUS3, "Click US3 size")
        BrowserUtil.wait(3)
    }

    clickSelectWomensBand() {
        ElementUtil.waitForClickable(this.btnSelectWomensBandPage3, 50, "wait for page load")
        ElementUtil.click(this.btnSelectWomensBandPage3, "Click Select Women's Band")
        BrowserUtil.wait(5)
    }

    selectChangeSettings() {
        ElementUtil.waitForClickable(this.tabSettingsChange, 50, "wait for page load")
        ElementUtil.click(this.tabSettingsChange, "Click Change Settings")
        BrowserUtil.wait(5)
    }

    select10kBg() {
        //ElementUtil.scrollIntoView(this.btnAddToCart, "Scroll to change metal")
        BrowserUtil.wait(5)
        ElementUtil.waitForClickable(this.lnkChangeMetal, 50, "wait for page load")
        ElementUtil.click(this.lnkChangeMetal, "Click change metal")
        ElementUtil.waitForClickable(this.optn10kBg, 15, "wait for page load")
        ElementUtil.click(this.optn10kBg, "Select 10K Black Gold")
        BrowserUtil.wait(3)
    }

    scrollPage2() {
        ElementUtil.scrollIntoView(this.sctnFilterTab, "Scroll down the page 2")
    }

    clickSelectMensBand() {
        ElementUtil.waitForClickable(this.btnSelectMensBandPage3, 50, "wait for page load")
        ElementUtil.click(this.btnSelectMensBandPage3, "Click Select Men's Band")
        BrowserUtil.wait(5)
    }

    selectChangeWomensBand() {
        ElementUtil.waitForClickable(this.tabWomensBandChange, 50, "wait for page load")
        ElementUtil.click(this.tabWomensBandChange, "Click Change Women's Band")
        BrowserUtil.wait(5)
    }

    select10kWg() {
        ElementUtil.waitForClickable(this.lnkChangeMetal, 50, "wait for page load")
        //ElementUtil.scrollIntoView(this.btnAddToCart, "Scroll to change metal")
        ElementUtil.click(this.lnkChangeMetal, "Click change metal")
        ElementUtil.click(this.optn10kWg, "Select 10K White Gold")
        BrowserUtil.wait(3)
    }

    selectCart() {
        ElementUtil.waitForClickable(this.lnkCartIcon, 50, "wait for page load")
        ElementUtil.click(this.lnkCartIcon, "Click cart icon")
        BrowserUtil.wait(5)
    }

    selectFree100DayReturns() {
        ElementUtil.scrollIntoView(this.paginationlist, "Scroll to links")
        ElementUtil.waitForClickable(this.linkFree100Days, 50, "wait for page load")
        ElementUtil.click(this.linkFree100Days, "Click free 100 days returns")
        BrowserUtil.wait(5)
    }

    selectFreeGlobalShipping() {
        browser.back();
        BrowserUtil.wait(5)
        ElementUtil.scrollIntoView(this.paginationlist, "Scroll to links")
        ElementUtil.waitForClickable(this.linkfreeGlobalShipping, 50, "wait for page load")
        ElementUtil.click(this.linkfreeGlobalShipping, "Click free global shipping")
        BrowserUtil.wait(5)
    }

    selectLabCertification() {
        browser.back();
        BrowserUtil.wait(5)
        ElementUtil.scrollIntoView(this.paginationlist, "Scroll to links")
        ElementUtil.waitForClickable(this.linklabCertification, 50, "wait for page load")
        ElementUtil.click(this.linklabCertification, "Click lab certification")
        BrowserUtil.wait(5)
    }

    selectFreeResizingAndWarranty() {
        browser.back();
        BrowserUtil.wait(5)
        ElementUtil.scrollIntoView(this.paginationlist, "Scroll to links")
        ElementUtil.waitForClickable(this.linkFreeResizingwarranty, 50, "wait for page load")
        ElementUtil.click(this.linkFreeResizingwarranty, "Click free resizing and warranty")
        BrowserUtil.wait(5)
    }

    selectBlackDiamond() {
        ElementUtil.mouseHover(this.lnkFilterStone, "Hover over stone filter")
        ElementUtil.click(this.optnBlackDiamond, "Select Black Diamond")
        BrowserUtil.wait(3)
    }

    reSelectVVSDiamond() {
        ElementUtil.mouseHover(this.lnkFilterStone, "Hover over stone filter")
        ElementUtil.click(this.optnVVSDiamond, "Select VVS Diamond")
        BrowserUtil.wait(3)
    }

    selectAdditionalMensRing() {
        ElementUtil.mouseHover(this.drpBandDefault, "Hover over Band Selection Dropdown")
        ElementUtil.forceClick(this.optnAdditionalMensRing, "Click Additional Mens RIng")
        BrowserUtil.wait(5)
    }

    clickAddAnotherMensRingBand() {
        ElementUtil.waitForClickable(this.btnAddAnotherMensRingPage3, 60, "Wait for page load")
        ElementUtil.click(this.btnAddAnotherMensRingPage3, "Click Add Another Men's Ring")
        BrowserUtil.wait(5)
    }

    clickSelectDiamond() {
        ElementUtil.waitForClickable(this.btnSelectDiamondPage3, 60, "Wait for page load")
        ElementUtil.click(this.btnSelectDiamondPage3, "Click Select Diamond button")
        BrowserUtil.wait(10)
        ElementUtil.waitForClickable(this.diamondereLogo, 60, "wait for page load")
    }
    
    clickAddDiamondAndCheckout() {
        ElementUtil.scrollIntoView(this.lnkWaysToSaveMore, "Scroll to button")
        ElementUtil.waitForClickable(this.btnAddDiamondAndCheckOut, 60, "Wait for page load")
        ElementUtil.click(this.btnAddDiamondAndCheckOut, "Click button")
        BrowserUtil.wait(5)
    }

    hoveringFiltersLooseDiamonds() {
        ElementUtil.scrollIntoView(this.bannerText, "Scroll to top of the page")
        ElementUtil.mouseHover(this.gemstext, "Hover over Gems")
        ElementUtil.isVisible(this.gemspopup, "Checking the popup")
        ElementUtil.mouseHover(this.shapestext, "Hover over Shapes")
        ElementUtil.isVisible(this.shapespopup, "Checking the popup")
        ElementUtil.mouseHover(this.pricetext, "Hover over Price")
        ElementUtil.isVisible(this.pricepopup, "Checking the popup")
        ElementUtil.mouseHover(this.carattext, "Hover over Carat")
        ElementUtil.isVisible(this.caratpopup, "Checking the popup")
        ElementUtil.mouseHover(this.claritytext, "Hover over Clarity")
        ElementUtil.isVisible(this.claritypopup, "Checking the popup")
        ElementUtil.mouseHover(this.colortext, "Hover over Color")
        ElementUtil.isVisible(this.colorpopup, "Checking the popup")
        ElementUtil.mouseHover(this.symmetrytext, "Hover over Symmetry")
        ElementUtil.isVisible(this.symmetrypopup, "Checking the popup")
        ElementUtil.mouseHover(this.fluorescencetext, "Hover over Fluorescence")
        ElementUtil.isVisible(this.fluorescencepopup, "Checking the popup")
        ElementUtil.mouseHover(this.lengthtext, "Hover over Length")
        ElementUtil.isVisible(this.lengthpopup, "Checking the popup")
        ElementUtil.mouseHover(this.breadthtext, "Hover over Breadth")
        ElementUtil.isVisible(this.breadthpopup, "Checking the popup")
        ElementUtil.scrollIntoView(this.pricetext, "Scroll down the page")
        ElementUtil.mouseHover(this.tabletext, "Hover over Table%")
        ElementUtil.isVisible(this.tablepopup, "Checking the popup")
        ElementUtil.mouseHover(this.depthtext, "Hover over Depth%")
        ElementUtil.isVisible(this.depthpopup, "Checking the popup")
        ElementUtil.scrollIntoView(this.symmetrytext, "Scroll to cut filter")
        ElementUtil.mouseHover(this.cuttext, "Hover over Cut")
        ElementUtil.isVisible(this.cutpopup, "Checking the popup")
        ElementUtil.mouseHover(this.polishtext, "Hover over Polish")
        ElementUtil.isVisible(this.polishpopup, "Checking the popup")
        ElementUtil.mouseHover(this.certificatetext, "Hover over Cetificate")
    }

    clickViewDiamondButton() {
        ElementUtil.waitForClickable(this.viewdiamondbutton, 60, "wait for page load")
        ElementUtil.forceClick(this.viewdiamondbutton, "Click View Diamond Button")
        BrowserUtil.wait(5);
    }

    selectRingsSwas() {
        ElementUtil.click(this.oRingstartwithsetting, "Click Start with a Setting - Rings")
        BrowserUtil.wait(5)
        ElementUtil.waitForDisplayed(this.ringsStartWithSetting, 10, "Wait for page load")
    }

    selectEngagementSwas() {
        ElementUtil.click(this.ownEngstartwithsetting, "Click Start with a Setting - Engagement")
        BrowserUtil.wait(5)
        ElementUtil.waitForDisplayed(this.engagementSWSBanner, 10, "Wait for page load")
    }

    selectEarringsSwas() {
        ElementUtil.click(this.ownEarstartwithsetting, "Click Start with a Setting - Earrings")
        BrowserUtil.wait(5)
        ElementUtil.waitForDisplayed(this.earringsSWSBanner, 10, "Wait for page load")
    }

    selectNecklacesSwas() {
        ElementUtil.click(this.oNeckstartwithsetting, "Click Start with a Setting - Necklaces")
        BrowserUtil.wait(5)
        ElementUtil.waitForDisplayed(this.necklacesSWSBanner, 10, "Wait for page load")
    }

    selectMensRingsSwas() {
        ElementUtil.click(this.oMenstartwithsetting, "Click Start with a Setting - Men's Rings")
        BrowserUtil.wait(5)
        ElementUtil.waitForDisplayed(this.mensSWSBanner, 10, "Wait for page load")
    }

    clickSelectMensBandDDP() {
        BrowserUtil.wait(3)
        ElementUtil.scrollIntoView(this.lnkWaysToSaveMore, "Scroll to button")
        ElementUtil.click(this.btnSelectMensBand, "Click button")
        BrowserUtil.wait(5)
    }

    selectUpdateMensBand() {
        ElementUtil.click(this.btnUpdateMensBand, "Click Update Men's Band")
        BrowserUtil.wait(5)
    }

    clickSelectWomensBandDDP() {
        BrowserUtil.wait(3)
        ElementUtil.scrollIntoView(this.lnkWaysToSaveMore, "Scroll to button")
        ElementUtil.click(this.btnSelectWomensBand, "Click button")
        BrowserUtil.wait(5)
    }

    selectUpdateWomensBand() {
        ElementUtil.click(this.btnUpdateWomensBand, "Click Update Women's Band")
        BrowserUtil.wait(5)
    }

    selectAddToCartLooseDiamonds() {
        ElementUtil.click(this.btnAddToCartLooseDiamonds, "Click Add to cart")
    }

    clickSelectWithRing() {
        ElementUtil.click(this.btnSelectWithRing, "Click Select with ring")
        BrowserUtil.wait(5)
    }

    clickSelectWithNecklace() {
        ElementUtil.click(this.btnSelectWithNecklace, "Click Select with necklace")
        BrowserUtil.wait(5)
    }

    selectQuickViewRow2() {
        BrowserUtil.wait(3)
        ElementUtil.scrollIntoView(this.morefilterbutton, "Scroll to diamond listing table");
        ElementUtil.click(this.tableexpandsecondrowicon, "Click Quick View of Second Row")
    }

    scrollToCutSection() {
        ElementUtil.scrollIntoView(this.caratYourDiamondSection, "Scroll to cut section");
    }

    scrollToColorSection() {
        ElementUtil.scrollIntoView(this.cutYourDiamondSection, "Scroll to color section");
    }

    scrollToClaritySection() {
        ElementUtil.scrollIntoView(this.txtColorSection, "Scroll to clarity section");
    }

    clickReqCustomBtn() {
        ElementUtil.click(this.btnReqCusOrder, "click the request custom order button")
        BrowserUtil.wait(5);
    }

    clickReqCustomLnk() {
        ElementUtil.click(this.lnkReqCusOrder, "click the request custom order link")
        BrowserUtil.wait(5);

    }
    enterName() {
        ElementUtil.scrollIntoView(this.boxnamefieldcustom, data.RequestCustomOrder.CutomerNameReqCustom, "enter customer name")
        ElementUtil.sendText(this.boxnamefieldcustom, data.RequestCustomOrder.CutomerNameReqCustom, "enter customer name")
    }
    clearenteredName() {
        ElementUtil.click(this.boxnamefieldcustom, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        //ElementUtil.clearText(this.boxnamefieldcustom, "clear the customer name")
    }
    enterSpecName() {
        ElementUtil.sendText(this.boxnamefieldcustom, data.RequestCustomOrder.SpecialCharcterName, "enter special characters in customer name")
    }
    enterEmail() {
        ElementUtil.sendText(this.boxemailfieldcustom, data.RequestCustomOrder.CustomerEmail, "enter customer email")
    }
    clearenteredEmail() {
        ElementUtil.click(this.boxemailfieldcustom, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        //ElementUtil.clearText(this.boxemailfieldcustom, "clear the customer email")
    }
    enterSpecEmail() {
        ElementUtil.click(this.boxemailfieldcustom, "Click Email field")
        ElementUtil.sendText(this.boxemailfieldcustom, data.RequestCustomOrder.SpecialCharcterName, "enter special characters in customer email")
    }
    enterphoneNumber() {
        ElementUtil.sendText(this.boxphonefieldcustom, data.RequestCustomOrder.CustomerPhoneNumber, "enter customer phone")
    }
    clearenteredphoneNumber() {
        ElementUtil.click(this.boxphonefieldcustom, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        //ElementUtil.clearText(this.boxphonefieldcustom, "clear the customer phone")
    }
    enterSpecphoneNumber() {
        ElementUtil.sendText(this.boxphonefieldcustom, data.RequestCustomOrder.SpecialCharcterName, "enter special characters in customer phone]")
    }
    enterCustomReq() {
        ElementUtil.sendText(this.boxcustomrequestdescrip, data.RequestCustomOrder.CustomizationRequest, "enter customization request]")
    }
    clearenteredCustomReq() {
        ElementUtil.click(this.boxcustomrequestdescrip, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        //ElementUtil.clearText(this.boxcustomrequestdescrip, "clear the Customization Request")
    }
    clicksubmitCustom() {
        ElementUtil.forceClick(this.btnsubmitrequestcustom, "click submit request")
    }
    uploadImageCustom() {
        ElementUtil.uploadFile(this.inputFile, this.btnuploadimagecustom,dmd.config.imageJpg, "Uploading image")
    }
    uploadWrongImageCustom() {
        ElementUtil.uploadFile(this.inputFile, this.btnuploadimagecustom,dmd.config.imagePng, "Uploading wrong image")
    }

    removeDesignInCart() {
        ElementUtil.click(this.lnkCartIcon, "click on shopping cart link");
        BrowserUtil.wait(5)
        if (ElementUtil.isVisible(this.lblCartCount, "Check the cart value")) {
            while (ElementUtil.isVisible(this.lblCartCount, "Check the cart value")) {
                let removeLink = ElementUtil.isVisible(this.btnFirstRemove, "Check for remove button");
                
                if (removeLink) {
                    ElementUtil.waitForClickable(this.btnFirstRemove, 20, "wait for page load")
                    ElementUtil.click(this.btnFirstRemove, "select remove");
                    BrowserUtil.wait(5);
                }
            }
        } else {
            ElementUtil.click(this.diamondereLogo, "Click logo"); 
            BrowserUtil.wait(3);
        }
    }
    
    
    

}
module.exports = MYOJ
