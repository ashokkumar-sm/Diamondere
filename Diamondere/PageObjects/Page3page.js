const ElementUtil = require('../../CommonUtils/ElementUtil');
const BrowserUtil = require('../../CommonUtils/BrowserUtil');
const data = require('../TestData/productdetailsdata.json');
const context = require('../../CommonUtils/ScenarioContext');


class productdetailspage {
    //1-Basic Productdetails
    //1.1-BP-name,price,desc
    get diamonderelogo() {
        return $('//img[@class="diamondere-logo"]')
    }
    get txtproductnameandstar() {
        return $('//h1[@class="is-size-5 has-text-weight-semibold p-5-touch"]//span[@class="is-uppercase"]')
    }
    get txtprice() {
        return $('//div[@class="tooltip-trigger"]//span[contains(text(),"$")]')
    }
    get txtproductdescrip() {
        return $('//p[@class="is-size-7 is-hidden-touch"]')
    }
    get txtproducttotalweight() {
        return $('//p[@class="is-size-7 is-hidden-touch"]/span')
    }
    get sctnFilterTab() {
        return $('//div[@class="m-b-5 p-5-touch page-two-filter-items is-flex-desktop is-justified-center is-hidden-touch"]');
    }
    //1.2-BP-button,returnorder,delivery
    get btnaddtocart() {
        return $('//div[@class="is-flex is-justified-end"]//button[text()="ADD TO CART"]')
    }
    get btnrequestcustomorder() {
        return $('//div[@class="is-flex is-justified-end"]//button[text()="REQUEST CUSTOM ORDER"]')
    }
    get txtexpecteddelivery() {
        return $('//span[@class="p-l-2"]')
    }
    get deliverydate() {
        return $('//span[@class="p-l-2"]/b[contains(text(),Sep 01-04)]')
    }
    //1.3-BP-img,video
    get imgelargedright() {
        return $('//img[@src="https://images.diamondere.com/new_images/products/xylos/xylos_wg_ru_di_0.jpg" and @class="is-350by350"]')
    }
    get lnkimgsmallright() {
        return $('//img[@src="https://images.diamondere.com/new_images/products/xylos/xylos_wg_ru_di_0.jpg" and @class="thumb-image"]')
    }
    get lnkimgsmallinclinedright() {
        return $('//img[@src="https://images.diamondere.com/new_images/products/xylos/xylos_wg_ru_di_1.jpg" and @class="thumb-image"]')
    }
    get lnkproductvideo() {
        return $('//img[@src="https://images.diamondere.com/others/images/diamondere/resp/play_overlay.png"]')
    }
    get lnkimgpackaging() {
        return $('//img[@alt="Packaging"]')
    }
    get lnkimgcertificate() {
        return $('//img[@alt="Certificate"]')
    }
    get subimagesection() {
        return $('//div[@class="is-flex is-align-items-center is-flex-wrap-wrap is-justify-content-center"]')
    }
    get productvideopopup() {
        return $('//div[@class="card-content p-t-40"]')
    }
    get crossbutton() {
        return $('//span[@class="material-icons is-pulled-right is-clickable m-5"]')
    }
    //1.4-BP-socialnetwork
    get mailicon() {
        return $('//div[@class="is-inline-block wd-100 m-t-20 is-hidden-touch"]//span[@title="Email this design"]')
    }
    get pinteresticon() {
        return $('//div[@class="is-inline-block wd-100 m-t-20 is-hidden-touch"]//a[@title="Pin it"]')
    }
    get facebookicon() {
        return $('//div[@class="is-inline-block wd-100 m-t-20 is-hidden-touch"]//a[@title="Share on Facebook"]')
    }
    get facebookPage() {
        return $('//h2[@id="homelink" and contains(text(),"Facebook")]')
    }
    //1.5-BP-Breadcrumb(section,link)
    get sectionbreadcrumb() {
        return $('//ul[@itemprop="breadcrumb"]')
    }
    get txtHOMEbreadcrumb() {
        return $('//span[contains(text(),"Home")]')
    }
    get txtRINGSbreadcrumb() {
        return $('//a[@title="RINGS"]')
    }
    get txtRUBYRINGSbreadcrumb() {
        return $('//a[@title="RUBY RINGS"]')
    }
    get txtSIDESTONERINGSbreadcrumb() {
        return $('//a[@title="SIDESTONE RINGS"]')
    }
    get txtXYLOSbreadcrumb() {
        return $('//span[contains(text(),"Xylos")]/parent::span')
    }
    get mensringcategorybreadcrumb() {
        return $('//a[@title="MEN\'S RINGS  "]/span')
    }
    //2-Center Stone
    //2.1-CS-text,desc,img,sec
    get sectioncenterstone() {
        return $('//p[contains(text(),"Center stone -")]/parent::div')
    }
    get csectioncenterstone() {
        return $('//p[contains(text(),"Center Stone -")]/parent::div')
    }
    get MEsectioncenterstone() {
        return $('//p[contains(text(),"CENTER STONE -")]/parent::div')
    }
    get txtcenterstone() {
        return $('//p[contains(text(),"Center stone -")]')
    }
    get Etxtcenterstone() {
        return $('//p[contains(text(),"Center Stone -")]')
    }
    get MEtxtcenterstone() {
        return $('//p[contains(text(),"CENTER STONE -")]')
    }
    get txtdesccenterstone() {
        return $('//p[contains(text(),"Center stone -")]//following-sibling::p[@class="has-text-weight-normal is-size-7 is-hidden-mobile"]')
    }
    get Etxtdesccenterstone() {
        return $('//p[contains(text(),"Center Stone -")]//following-sibling::p[@class="has-text-weight-normal is-size-7 is-hidden-mobile"]')
    }
    get MEtxtdesccenterstone() {
        return $('//p[contains(text(),"CENTER STONE -")]//following-sibling::p[@class="has-text-weight-normal is-size-7 is-hidden-mobile"]')
    }
    get imgcentrestone() {
        return $('(//div[@class="accordian-border"]//div[@class="accordian-img-bg"])[1]')
    }
    //2.2-CS-dropdownlink
    get lnkcentrestonedropdown() {
        return $('//p[contains(text(),"Center stone -")]//following-sibling::div')
    }
    get Elnkcentrestonedropdown() {
        return $('//p[contains(text(),"Center Stone -")]//following-sibling::div')
    }
    get MElnkcentrestonedropdown() {
        return $('//p[contains(text(),"CENTER STONE -")]//following-sibling::div')
    }
    //2.3-CS-diamondslnk
    //diamond
    get cssectiondiamond() {
        return $('//div[@id="stone0"]//p[contains(text(),"Diamonds")]/parent::div')
    }
    get lnkimgcustomdiamond() {
        return $('//div[@id="stone0"]//a[@title="Custom Diamond"]')
    }
    get lnkimgblackdiamond() {
        return $('//div[@id="stone0"]//div//div[@class="is-inline-block"]//div//div[@class="stones-filter-icons page3-stone-image-round bl"]')
    }

    get lnkimgbluediamond() {
        return $('//div[@id="stone0"]//div//div[@class="is-inline-block"]//div//div[@class="stones-filter-icons page3-stone-image-round bu"]')
    }

    get lnkimgbrowndiamond() {
        return $('//div[@id="stone0"]//div//div[@class="is-inline-block"]//div//div[@class="stones-filter-icons page3-stone-image-round br"]')
    }
    //precious
    get cssectionprecious() {
        return $('//div[@id="stone0"]//p[contains(text(),"Precious")]/parent::div')
    }
    get lnkimgruby() {
        return $('//div[@id="stone0"]//div//div[@class="is-inline-block"]//div//div[@class="stones-filter-icons page3-stone-image-round ru"]')
    }
    get lnkimgrainbow() {
        return $('//div[@id="stone0"]//div//div[@class="is-inline-block"]//div//div[@class="stones-filter-icons page3-stone-image-round rz"]')
    }
    get lnkimgwhitesapphire() {
        return $('//div[@id="stone0"]//div//div[@class="is-inline-block"]//div//div[@class="stones-filter-icons page3-stone-image-round diws"]')
    }
    get lnkimgorangesapphire() {
        return $('//div[@id="stone0"]//div//div[@class="is-inline-block"]//div//div[@class="stones-filter-icons page3-stone-image-round cios"]')
    }
    //semi-precious
    get cssectionsemiprecious() {
        return $('//div[@id="stone0"]//p[contains(text(),"Semi-Precious")]/parent::div')
    }
    get lnkimgPinkTourmaline() {
        return $('//div[@id="stone0"]//div//div[@class="is-inline-block"]//div//div[@class="stones-filter-icons page3-stone-image-round pt"]')
    }
    get lnkimgBluetopaz() {
        return $('//div[@id="stone0"]//div//div[@class="is-inline-block"]//div//div[@class="stones-filter-icons page3-stone-image-round bt"]')
    }
    get lnkimgLondonBluetopaz() {
        return $('//div[@id="stone0"]//div//div[@class="is-inline-block"]//div//div[@class="stones-filter-icons page3-stone-image-round lt"]')
    }
    get lnkimgAmethyst() {
        return $('//div[@id="stone0"]//div//div[@class="is-inline-block"]//div//div[@class="stones-filter-icons page3-stone-image-round am"]')
    }
    get lnkimgAquamarine() {
        return $('//div[@id="stone0"]//div//div[@class="is-inline-block"]//div//div[@class="stones-filter-icons page3-stone-image-round aq"]')
    }
    get lnkimgCitrine() {
        return $('//div[@id="stone0"]//div//div[@class="is-inline-block"]//div//div[@class="stones-filter-icons page3-stone-image-round ci"]')
    }
    get lnkimgGarnet() {
        return $('//div[@id="stone0"]//div//div[@class="is-inline-block"]//div//div[@class="stones-filter-icons page3-stone-image-round ga"]')
    }
    get lnkimgPeridot() {
        return $('//div[@id="stone0"]//div//div[@class="is-inline-block"]//div//div[@class="stones-filter-icons page3-stone-image-round pd"]')
    }
    get lnkimgWhiteTopaz() {
        return $('//div[@id="stone0"]//div//div[@class="is-inline-block"]//div//div[@class="stones-filter-icons page3-stone-image-round diwt"]')
    }
    get lnkimgTanzanite() {
        return $('//div[@id="stone0"]//div//div[@class="is-inline-block"]//div//div[@class="stones-filter-icons page3-stone-image-round tz"]')
    }
    get lnkimgTsavorite() {
        return $('//div[@id="stone0"]//div//div[@class="is-inline-block"]//div//div[@class="stones-filter-icons page3-stone-image-round emts"]')
    }
    //lab-created
    get cssectionlabcreated() {
        return $('//div[@id="stone0"]//p[contains(text(),"Lab-created")]/parent::div')
    }
    get lnkimgLabvsDiamond() {
        return $('//div[@id="stone0"]//div//div[@class="is-inline-block"]//div//div[@class="stones-filter-icons page3-stone-image-round dilabvs"]')
    }
    get lnkimgcustomlabdiamond() {
        return $('//div[@id="stone0"]//div//div[@class="is-inline-block"]//div//div[@class="stones-filter-icons page3-stone-image-round di"]')
    }
    //(replace)
    get ringcustomlabdiamond() {
        return $('//div[@id="stone0"]//a[@title="Custom Lab Diamond"]')
    }

    get lnkimgcentreemerald() {
        return $('//div[@id="stone0"]//div//div[@class="is-inline-block"]//div//div[@class="stones-filter-icons page3-stone-image-round em"]')
    }
    //2.4-CS-diamonddesc
    get centrestoneproperties() {
        return $('//div[@id="stone0"]/p')
    }
    //2.5-CS-qualityofstone
    get centrestonequalitysection() {
        return $('//p[contains(text(),"Select quality ")]/parent::div')
    }
    get txtheadingselectqualityofcenterstone() {
        return $('//p[contains(text(),"Select quality")]')
    }
    get btnqualityAAA() {
        return $('//div[@class="wd-100 has-text-centered quality-size-value carat-size-value"]//span[text()="Natural AAA"]')
    }
    get btnqualityAAAA() {
        return $('//div[@class="wd-100 has-text-centered quality-size-value carat-size-selected-value"]//span[text()="Natural AAAA"]')
    }
    get btnqualityHeirloom() {
        return $('//div[@class="wd-100 has-text-centered quality-size-value carat-size-value"]//span[contains(text(),"Heirloom")]')
    }
    get centrestonequalitydefaultselected() {
        return $('//div[@class="wd-100 has-text-centered quality-size-value carat-size-value carat-size-selected-value"]/span')
    }

    //2.6-CS-sizeofstone
    get centrestonesizesection() {
        return $('//p[contains(text(),"Select size ")]/parent::div')
    }
    get txtheadingselectsizeofcenterstone() {
        return $('//p[contains(text(),"Select size")]')
    }
    get btn057Cts() {
        return $('//div[@title="0.57 carat"]')
    }
    get btn06Cts() {
        return $('//div[@title="0.6 carat"]')
    }
    get btn075Cts() {
        return $('//div[@title="0.75 carat"]')
    }
    get btn102Cts() {
        return $('//div[@title="1.02 carat"]')
    }
    get btn135Cts() {
        return $('//div[@title="1.35 carat"]')
    }
    get btn16Cts() {
        return $('//div[@title="1.06 carat"]')
    }
    //2.7-CS-qualityandsizedesc,video
    //(first-1-issue)
    get txtdescbelowquality() {
        return $('//div[@class="has-background-white-ter p-7 m-t-15"]/following-sibling::div/p')
    }
    get centrestonetxtqualityandsize() {
        return $('//div[@id="stone0"]//div[@class="m-t-5"]//p[@class="is-size-7"]')
    }
    get centrestonevideo() {
        return $('//div[@id="stone0"]//div[@class="m-t-5"]//span[@class="call-to-action is-size-7 is-block-touch"]')
    }
    //2.8-CS-certificate
    get sectioncertificate() {
        return $('//p[contains(text(),"SELECT CERTIFICATION")]/parent::div')
    }
    get txtheadingSelectcertification() {
        return $('//p[contains(text(),"SELECT CERTIFICATION")]')
    }
    get txtfirstlinecertification() {
        return $('//span[@class="icon-top-2 p-l-5"]')
    }
    get freecertificatedchecked() {
        return $('//img[@src="https://images.diamondere.com/others/images/diamondere/static/checked.svg"]')
    }
    get GIAcertificatedunchecked() {
        return $('//img[@src="https://images.diamondere.com/others/images/diamondere/static/unchecked.svg"]')
    }
    get txtsecondlinecertification() {
        return $('//span[@class="icon-top-2 is-size-7 p-l-5"]')
    }

    //3-Accent Stone
    //3.1-AS-text,desc,img,sec
    get sectionaccentstones() {
        return $('//p[contains(text(),"Accent Stones")]/parent::div')
    }
    get sectioncharmaccentstone() {
        return $('//p[contains(text(),"Accents Stone -")]/parent::div')
    }
    get txtcharmaccentstones() {
        return $('//p[contains(text(),"Accents Stone -")]')
    }
    get txtcharmaccentstonesdesc() {
        return $('//p[contains(text(),"Accents Stone -")]//following-sibling::p[@class="has-text-weight-normal is-size-7 is-hidden-mobile"]')
    }
    get txtaccentstones() {
        return $('//p[contains(text(),"Accent Stones")]')
    }
    get txtaccentstonesdesc() {
        return $('//p[contains(text(),"Accent Stones")]//following-sibling::p[@class="has-text-weight-normal is-size-7 is-hidden-mobile"]')
    }
    get imgaccentstone() {
        return $('(//div[@class="accordian-border"]//div[@class="accordian-img-bg"])[2]')
    }
    //3.2-AS-accentstonedropdownlink
    get lnkchangeaccentstones() {
        return $('//p[contains(text(),"Accent Stones")]//following-sibling::div/p/span[contains(text(),"Change Stone")]')
    }
    get lnkchangecharmaccentstones() {
        return $('//p[contains(text(),"Accents Stone -")]//following-sibling::div/p/span[contains(text(),"Change Stone")]')
    }
    //repeat
    get lnkaccentstonesdropdown() {
        return $('//p[contains(text(),"Accent Stones -")]//following-sibling::div')
    }
    //3.3-AS-diamondslnk
    get assectiondiamond() {
        return $('//div[@id="stone1"]//p[contains(text(),"Diamonds")]/parent::div')
    }
    get assectionprecious() {
        return $('//div[@id="stone1"]//p[contains(text(),"Precious")]/parent::div')
    }

    //3.4-AS-diamonddesc
    get accentstonesproperties() {
        return $('//div[@id="stone1"]/p')
    }
    get awaccentstonesproperties() {
        return $('//div[@id="stone0"]/p')
    }
    //3.5-AS-qualityandsizedesc,video
    get accentstonestxtqualityandsize() {
        return $('//div[@id="stone1"]//div[@class="m-t-15"]//p[@class="is-size-7"]')
    }
    get awaccentstonestxtqualityandsize() {
        return $('//div[@id="stone0"]//div[@class="m-t-15"]//p[@class="is-size-7"]')
    }
    get asbtnqualityAAA() {
        return $('//div[@id="stone1"]//div[@class="wd-100 has-text-centered quality-size-value carat-size-value"]//span[text()="Natural AAA"]')
    }

    get asbtnqualityAAAA() {
        return $('//div[@id="stone1"]//div[@class="wd-100 has-text-centered quality-size-value carat-size-value carat-size-selected-value"]//span[text()="Natural AAAA"]')
    }

    get asbtnqualityHeirloom() {
        return $('//div[@id="stone1"]//div[@class="wd-100 has-text-centered quality-size-value carat-size-value"]//span[contains(text(),"Heirloom")]')
    }
    get accentstonesvideo() {
        return $('//div[@id="stone1"]//div[@class="m-t-15"]//span[@class="call-to-action is-size-7 is-block-touch"]')
    }


    //4-Accent Stone1
    //4.1-AS1-text,desc,img
    get sectionAccentstone1() {
        return $('//p[contains(text(),"Accent Stones 1 -")]/parent::div')
    }
    get sectionNAccentstone1() {
        return $('//p[contains(text(),"Accent Stone 1 -")]/parent::div')
    }
    get txtaccentstone1() {
        return $('//p[contains(text(),"Accent Stones 1 -")]')
    }
    get txtNaccentstone1() {
        return $('//p[contains(text(),"Accent Stone 1 -")]')
    }
    get txtdescaccentstone1() {
        return $('//p[contains(text(),"Accent Stones 1 -")]//following-sibling::p[@class="has-text-weight-normal is-size-7 is-hidden-mobile"]')
    }
    get txtdescNaccentstone1() {
        return $('//p[contains(text(),"Accent Stone 1 -")]//following-sibling::p[@class="has-text-weight-normal is-size-7 is-hidden-mobile"]')
    }
    get imgaccentstone1() {
        return $('//p[contains(text(),"Accent Stones 1 -")]//preceding::div[@class="accordian-img-bg"]')
    }
    //4.2-AS1-accentstone1dropdownlink
    get lnkchangeaccentstone1() {
        return $('//p[contains(text(),"Accent Stones 1")]//following-sibling::div/p/span[contains(text(),"Change Stone")]')
    }
    get lnkchangeNaccentstone1() {
        return $('//p[contains(text(),"Accent Stone 1")]//following-sibling::div/p/span[contains(text(),"Change Stone")]')
    }
    //4.3-AS1-diamondslnk
    get as1sectiondiamond() {
        return $('//div[@id="stone0"]//p[contains(text(),"Diamond")]/parent::div')
    }
    // Diamonds
    get lnkimgaccent1Diamond() {
        return $('//div[@id="stone1"]//div//div[@class="is-inline-block"]//div//div[@class="stones-filter-icons page3-stone-image-round dii"]')
    }
    get as1sectionprecious() {
        return $('//div[@id="stone0"]//p[contains(text(),"Precious")]/parent::div')
    }
    //Precious
    get lnkimgaccent1emerald() {
        return $('//div[@id="stone1"]//div//div[@class="is-inline-block"]//div//div[@class="stones-filter-icons page3-stone-image-round em"]')
    }
    get lnkimgaccent1sapphire() {
        return $('//div[@id="stone1"]//div//div[@class="is-inline-block"]//div//div[@class="stones-filter-icons page3-stone-image-round sa"]')
    }
    get as1sectionsemiprecious() {
        return $('//div[@id="stone0"]//p[contains(text(),"Semi-Precious")]/parent::div')
    }
    // Semi Precious
    get lnkimgaccent1PinkTourmaline() {
        return $('//div[@id="stone1"]//div//div[@class="is-inline-block"]//div//div[@class="stones-filter-icons page3-stone-image-round pt"]')
    }
    get as1sectionlabcreated() {
        return $('//div[@id="stone0"]//p[contains(text(),"Lab-created")]/parent::div')
    }
    //4.4-AS1-diamonddesc
    get accentstone1properties() {
        return $('//div[@id="stone0"]/p')
    }
    //4.5-AS1-qualityofstone(text,section,options)
    get accentstone1qualitysection() {
        return $('//p[contains(text(),"Select quality ")]/parent::div')
    }
    get txtheadingselectqualityofaccentstone1() {
        return $('//p[contains(text(),"Select quality")]')
    }
    get as1btnqualityAAA() {
        return $('//div[@class="wd-100 has-text-centered quality-size-value carat-size-value"]//span[text()="Natural AAA"]')
    }

    get as1btnqualityAAAA() {
        return $('//div[@class="wd-100 has-text-centered quality-size-value carat-size-value carat-size-selected-value"]//span[text()="Natural AAAA"]')
    }

    get as1btnqualityHeirloom() {
        return $('//div[@class="wd-100 has-text-centered quality-size-value carat-size-value"]//span[contains(text(),"Heirloom")]')
    }
    //4.6-AS1-qualityandsizedesc,video
    get accentstone1txtqualityandsize() {
        return $('//div[@id="stone1"]//div[@class="m-t-15"]//p[@class="is-size-7"]')
    }
    get accentstone1video() {
        return $('//div[@id="stone0"]//div[@class="m-t-15"]//span[@class="call-to-action is-size-7 is-block-touch"]')
    }


    //5-Accent Stone2
    //5.1-AS2-text,desc,img
    get sectionaccentstone2() {
        return $('//p[contains(text(),"Accent Stones 2 -")]/parent::div')
    }
    get sectionNaccentstone2() {
        return $('//p[contains(text(),"Accent Stone 2 -")]/parent::div')
    }
    get txtaccentstone2() {
        return $('//p[contains(text(),"Accent Stones 2 -")]')
    }
    get txtNaccentstone2() {
        return $('//p[contains(text(),"Accent Stone 2 -")]')
    }
    get imgaccentstone2() {
        return $('(//div[@class="accordian-border"]//div[@class="accordian-img-bg"])[2]')
    }
    get txtdescaccentstone2() {
        return $('//p[contains(text(),"Accent Stones 2 -")]//following-sibling::p[@class="has-text-weight-normal is-size-7 is-hidden-mobile"]')
    }
    get txtdescNaccentstone2() {
        return $('//p[contains(text(),"Accent Stone 2 -")]//following-sibling::p[@class="has-text-weight-normal is-size-7 is-hidden-mobile"]')
    }
    //5.2-AS2-accentstone1dropdownlink
    get lnkchangeaccentstone2() {
        return $('//p[contains(text(),"Accent Stones 2")]//following-sibling::div/p/span[contains(text(),"Change Stone")]')
    }
    get lnkchangeNaccentstone2() {
        return $('//p[contains(text(),"Accent Stone 2")]//following-sibling::div/p/span[contains(text(),"Change Stone")]')
    }
    get lnkrainaccentstone2dropdown() {
        return $('//p[contains(text(),"Accent Stones 2 -")]//following-sibling::span')
    }

    //5.3-AS2-diamondslnk(default,rainbowsappire)
    get as2sectiondiamond() {
        return $('//div[@id="stone1"]//p[contains(text(),"Diamond")]/parent::div')
    }
    get as2sectionprecious() {
        return $('//div[@id="stone1"]//p[contains(text(),"Precious")]/parent::div')
    }
    get as2sectionsemiprecious() {
        return $('//div[@id="stone1"]//p[contains(text(),"Semi-Precious")]/parent::div')
    }
    get lnkimagaccent2whitesapphire() {
        return $('//div[@id="stone1"]//div//div[@class="is-inline-block"]//div//div[@class="stones-filter-icons page3-stone-image-round diws"]')
    }
    //5.4-AS2-diamonddesc
    get accentstone2properties() {
        return $('//div[@id="stone1"]/p')
    }
    get naccentstone2properties() {
        return $('//div[@id="stone1"]/p')
    }
    //5.5-AS2-qualityandsizedesc,video
    get accentstone2txtqualityandsize() {
        return $('//div[@id="stone1"]//div[@class="m-t-15"]//p[@class="is-size-7"]')
    }
    get accentstone2video() {
        return $('//div[@id="stone1"]//div[@class="m-t-15"]//span[@class="call-to-action is-size-7 is-block-touch"]')
    }

    //6-Metal
    //6.1-M-text,desc
    get sectionmetal() {
        return $('//p[contains(text(),"metal")]/parent::div')
    }
    get txt14kmetalname() {
        return $('//p[text()="14k White Gold"]')
    }
    get img14kmetal() {
        return $('//div[@class="accordian-img-bg is-flex is-justify-content-space-around is-align-content-center"]')
    }
    get metaldesc() {
        return $('//span[contains(text()," 14k ")]/following::p[contains(text(),"14k White Gold")]/parent::div/p[@class="has-text-weight-normal is-size-7 is-hidden-mobile"]')
    }
    //6.2-M-metaldropdownlnk
    get lnkchangemetal() {
        return $('//span[contains(text(),"Change Metal")]')
    }
    //6.3-M-metaloptions(10,14,18)
    //pt
    get Clnkplatinum() {
        return $('//span[contains(text(),"PT")]')
    }
    //18
    get Clnk18kWG() {
        return $('//div[@class="active-metal-filter"]//div[@class="metal-wrapper white-gold"]//span[contains(text(),"18k")]')
    }
    get Blnk18kWG() {
        return $('//div[@class="active-metal-filter"]//div[@class="metal-wrapper white-gold"]//span[contains(text(),"18k")]')
    }

    get Clnk18kYG() {
        return $('//div[@class="active-metal-filter"]//div[@class="metal-wrapper yellow-gold"]//span[contains(text(),"18k")]')
    }
    get Blnk18kYG() {
        return $('//div[@class="active-metal-filter"]//div[@class="metal-wrapper yellow-gold"]//span[contains(text(),"18k")]')
    }

    get Clnk18kRG() {
        return $('//div[@class="active-metal-filter"]//div[@class="metal-wrapper rose-gold"]//span[contains(text(),"18k")]')
    }
    get Blnk18kRG() {
        return $('//div[@class="active-metal-filter"]//div[@class="metal-wrapper rose-gold"]//span[contains(text(),"18k")]')
    }

    get Clnk18kBG() {
        return $('//div[@class="active-metal-filter"]//div[@class="metal-wrapper black-gold"]//span[contains(text(),"18k")]')
    }
    get Blnk18kBG() {
        return $('//div[@class="active-metal-filter"]//div[@class="metal-wrapper black-gold"]//span[contains(text(),"18k")]')
    }
    //14
    get Clnk14kWG() {
        return $('//div[@class="active-metal-filter is-active"]//div[@class="metal-wrapper white-gold"]//span[contains(text(),"14k")]')
    }

    get Clnk14kYG() {
        return $('//div[@class="active-metal-filter"]//div[@class="metal-wrapper yellow-gold"]//span[contains(text(),"14k")]')
    }

    get Clnk14kRG() {
        return $('//div[@class="active-metal-filter"]//div[@class="metal-wrapper rose-gold"]//span[contains(text(),"14k")]')
    }

    get Clnk14kBG() {
        return $('//div[@class="active-metal-filter"]//div[@class="metal-wrapper black-gold"]//span[contains(text(),"14k")]')
    }
    get Blnk14kWG() {
        return $('//div[@class="active-metal-filter is-active"]//div[@class="metal-wrapper white-gold"]//span[contains(text(),"14k")]')
    } get Blnk14kYG() {
        return $('//div[@class="active-metal-filter"]//div[@class="metal-wrapper yellow-gold"]//span[contains(text(),"14k")]')
    } get Blnk14kRG() {
        return $('//div[@class="active-metal-filter"]//div[@class="metal-wrapper rose-gold"]//span[contains(text(),"14k")]')
    } get Blnk14kBG() {
        return $('//div[@class="active-metal-filter"]//div[@class="metal-wrapper black-gold"]//span[contains(text(),"14k")]')
    }
    //10
    get Clnk10kWG() {
        return $('//div[@class="active-metal-filter"]//div[@class="metal-wrapper white-gold"]//span[contains(text(),"10k")]')
    }

    get Clnk10kYG() {
        return $('//div[@class="active-metal-filter"]//div[@class="metal-wrapper yellow-gold"]//span[contains(text(),"10k")]')
    }

    get Clnk10kRG() {
        return $('//div[@class="active-metal-filter"]//div[@class="metal-wrapper rose-gold"]//span[contains(text(),"10k")]')
    }

    get Clnk10kBG() {
        return $('//div[@class="active-metal-filter"]//div[@class="metal-wrapper black-gold"]//span[contains(text(),"10k")]')
    }
    //slv
    get ClnkSLV() {
        return $('//div[@class="active-metal-filter"]//div[@class="metal-wrapper silver-gold"]')
    }

    //6.4-M-metaldesc
    get metalpropeties() {
        return $('//div[@id="metal"]/p/span')
    }

    //7-RingSize
    //7.1-RS-text(default,mens,couple-her,his)
    get sectionringsize() {
        return $('//div[@id="ringSize"]/parent::div')
    }
    get sectionhisringsize() {
        return $('//p[contains(text(),"HIS RING SIZE  &")]/parent::div')
    }
    //span[contains(text(),"Ring size")]/parent::div/parent::div/parent::div[@class="product-col"]
    get txtringsize() {
        return $('//p[contains(text(),"RING SIZE")]')
    }
    get txtheadingRingsizeandWidth() {
        return $('//p[contains(text(),"RING SIZE")]')
    }
    get txtheadingHerringsize() {
        return $('//p[text()="HER RING SIZE "]')
    }
    get txtheadingHisringsize() {
        return $('//p[contains(text(),"HIS RING SIZE  &")]')
    }
    get imgringsize() {
        return $('//div[@class="filter-menu-icons-new ringsize-icon m-t-10 m-l-5 is-pulled-left"]')
    }
    //7.2-RS-desc
    get txtdescringsize() {
        return $('//p[contains(text(),"Free re-sizing within 100 days")]')
    }
    //7.3-RS-ringsizedropdownlnk
    get lnkringselect() {
        return $('//p[contains(text(),"Free re-sizing within 100 days")]/following::p[contains(text(),"Select")]')
    }
    get lnkcouplebandherselect() {
        return $('(//p[contains(text(),"Free re-sizing within 100 days")]/following::p[contains(text(),"Select")])[1]')
    }
    get lnkcouplebandhimselect() {
        return $('(//p[contains(text(),"Free re-sizing within 100 days")]/following::p[contains(text(),"Select")])[2]')
    }
    get lnkmensselect() {
        return $('//p[contains(text(),"Free re-sizing within 100 days")]/following::p[contains(text(),"Select")]')
    }
    //7.4-RS-ringsizesection

    get sectionFreeengravingforher() {
        return $('//div[@class="accordian-border"]//div[@class="accordian-title"]//div//p[@class="has-text-weight-normal is-size-7 is-hidden-mobile" and contains(text(),"Your special message ...")]/preceding-sibling::p/parent::div')
    }
    get sectionFreeengravingforhim() {
        return $('//p[contains(text(),"FREE ENGRAVING FOR HIM")]/parent::div')
    }
    //7.5-RS-labelringsize
    get ringsizedropdownringtext() {
        return $('//div[@id="ringSize"]//div[@id="ringSize-2"]/label')
    }
    //7.6-RS-ringsizeoptionsfield(default,mens)
    get boxchoosesize() {
        return $('//select[@data-vv-name="ringSize"]/parent::span')
    }
    //select[@name="ringSize"]/option[contains(text(),"Choose Size")]
    get boxChooseHisringsize() {
        return $('//select[@name="ringSizeForHim"]/parent::span')
    }
    get ringsizeerror() {
        return $('//p[contains(text()," (Please select your ring size.) ")]')
    }
    //7.7-RS-selectedringsizeoption
    get boxwith7UKringsize() {
        return $('//select[@name="ringSize"]/option[contains(text(),"US 7 - UK & AU O")]')
    }
    get boxwith11UKringsize() {
        return $('//select[@name="ringSize"]/option[contains(text(),"US 11 - UK & AU V 1/2")]')
    }
    get boxwith8Ukringsize() {
        return $('//select[@name="ringSize"]/option[contains(text(),"US 8 - UK & AU Q")]')
    }
    get boxwithhis11UKringsize() {
        return $('//select[@name="ringSizeForHim"]/option[contains(text(),"US 11 - UK & AU V 1/2")]')
    }

    //7.8-RS-ringsizeguidelnk
    get lnkRingSizeGuide() {
        return $('//a[@title="Ring Size Guide"]')
    }
    //7.9-RS-pricechanged
    get txtchangeinprice() {
        return $('//span[contains(text(),"Price adjusted by")]')
    }
    get herringsizpricediffertext() {
        return $('//span[contains(text(),"(Price adjusted by")]/span[contains(text(),"Her")]')
    }
    //8-Bandwidth
    //8.1-B-text
    get txtheadingBandwidth() {
        return $('//label[contains(text(),"Band Width")]')
    }
    //8.2-B-bandwidthdoptionfield
    get boxchoosebandwidth() {
        return $('//select[@name="ringSizeForHim"]')
    }
    //8.3-B-selectedbandwidthoption
    get defaultselected55mmbandwidth() {
        return $('//select[@name="ringSizeForHim"]/option[contains(text(),"5.5 MM")]')
    }
    get defaultselected6mmbandwidth() {
        return $('//span[@class="select"]//select[@name="ringSizeForHim"]/option[contains(text(),"6.0 MM")]')
    }
    get select7mmbandwidth() {
        return $('//span[@class="select"]//select[@name="ringSizeForHim"]/option[contains(text(),"7.0 MM")]')
    }
    //8.4-B-pricechanged
    get bandwidthpricediffertext() {
        return $('//span[contains(text(),"(Price adjusted by")]/span[contains(text(),"Band Width")]')
    }
    get hisringsizeandbandwidthpricediffertext() {
        return $('//span[contains(text(),"(Price adjusted by")]/span[contains(text(),"for His Ring Size")]/parent::span/span[contains(text(),"Band Width")]')
    }
    //9-Earring
    //9.1-section,text,desc
    get scnearringback() {
        return $('//div[@id="earring"]/parent::div')
    }
    get txtearringback() {
        return $('//div[@id="earring"]//preceding-sibling::div[@class="accordian-title"]//p[@class="is-uppercase has-text-weight-medium"]')
    }
    get txtheadingearringback() {
        return $('//div[@id="earring"]//preceding-sibling::div[@class="accordian-title"]//p[@class="has-text-weight-normal is-size-7 is-hidden-mobile"]')
    }
    //9.2-earringdropdownlnk
    get lnkcustomize() {
        return $('//p[contains(text(),"Customize")]')
    }
    //9.3-buttons
    get txtheadingpushbackundercustomize() {
        return $('//p[@class="has-text-weight-semibold is-size-7 p-b-7" and contains(text(),"Push Back")]')
    }
    get imgpushbackmodel() {
        return $('//div[@class="earring-back-img wg-post earring-back-active"]')
    }
    get txtheadingscrewbackundercustomize() {
        return $('//p[@class="has-text-weight-semibold is-size-7 p-b-7" and contains(text(),"Screw Back")]')
    }
    get imgscrewhbackmodel() {
        return $('//div[@class="earring-back-img wg-screw-back"]')
    }
    get screwbackbutton() {
        return $('//p[contains(text(),"Screw Back")]/following-sibling::div')
    }
    get txtheadingFishhookundercustomize() {
        return $('//p[@class="has-text-weight-semibold is-size-7 p-b-7" and contains(text(),"Fish Hook")]')
    }
    get imgFishhookmodel() {
        return $('//div[@class="earring-back-img wg-fish-hook earring-back-active"]')
    }


    //10-Chain
    //10.1-C-sec,text,desc
    get scnnecklace() {
        return $('//div[@id="necklace"]/parent::div')
    }
    get txtheadingsterlingsilver() {
        return $('//div[@id="necklace"]//preceding-sibling::div[@class="accordian-title"]//p[@class="is-uppercase has-text-weight-medium"]')
    }

    get imgleftsterlingsilver() {
        return $('//div[@class="metal-wrapper m-auto silver-gold"]')
    }
    get txtbelowheadingsterling() {
        return $('//div[@id="necklace"]//preceding-sibling::div[@class="accordian-title"]//p[@class="has-text-weight-normal is-size-7 is-hidden-mobile"]')
    }


    //10.2-C-chaindropdownlnk
    get lnkcustomize() {
        return $('//p[contains(text(),"Customize")]')
    }

    //10.3-C-metal
    get txtPlatinumundercustomize() {
        return $('//div[@class="column m-b-5-mob"]//p[contains(text(),"Platinum")]')
    }
    get lnkPlatinum() {
        return $('//div[@class="column m-b-5-mob"]//span[contains(text(),"PT")]')
    }
    get txt18kundercustomize() {
        return $('//div[@class="column m-b-5-mob"]//p[contains(text(),"18k")]')
    }

    get lnk18kWG() {
        return $('//div[@class="column m-b-5-mob"]//div[@class="metal-wrapper white-gold"]//span[contains(text()," 18k ")]')
    }

    get lnk18kYG() {
        return $('//div[@class="column m-b-5-mob"]//div[@class="metal-wrapper yellow-gold"]//span[contains(text()," 18k ")]')
    }

    get txt14kundercustomize() {
        return $('//div[@class="column m-b-5-mob"]//p[contains(text(),"14k")]')
    }

    get lnk14kWG() {
        return $('//div[@class="column m-b-5-mob"]//div[@class="metal-wrapper white-gold"]//span[contains(text()," 14k ")]')
    }

    get lnk14kYG() {
        return $('//div[@class="column m-b-5-mob"]//div[@class="metal-wrapper yellow-gold"]//span[contains(text()," 14k ")]')
    }

    get txtSterlingsilverundercustomize() {
        return $('//div[@class="column m-b-5-mob"]//p[contains(text(),"Sterling Silver")]')
    }

    get lnkSLV() {
        return $('//div[@class="column m-b-5-mob"]//div[@class="metal-wrapper silver-gold"]//span[contains(text(),"SLV")]')
    }
    //10.4-C-button
    get txtbox() {
        return $('//p[contains(text(),"Box")]')
    }
    get imgbox() {
        return $('//div[@class="selected-chain chain-design-icon is-clickable"]')
    }
    get imgyellowbox() {
        return $('//div[@class="chain-box-yellow chain-design-icon is-clickable"]')
    }
    get txtcable() {
        return $('//p[contains(text(),"Cable")]')
    }
    get imgcable() {
        return $('//div[@class="chain-design-icon cable-chain is-clickable"]')
    }
    get imgyellowcable() {
        return $('//div[@class="chain-cable-yellow selected-chain chain-design-icon cable-chain is-clickable"]')
    }
    get btn16InchChain() {
        return $('//span[contains(text(),"16 Inch Chain")]')
    }
    get btn18InchChain() {
        return $('//span[contains(text(),"18 Inch Chain")]')
    }

    //10.5-C-chainimage
    get txtchainprice() {
        return $('//b[contains(text(),"Chain Price :")]')
    }
    get imgchainimage() {
        return $('//img[@src="https://images.diamondere.com/others/images/diamondere/resp/box_wg_0_r.jpg"]')
    }

    //11-Bracelet
    //11.1-BR-section,text,desc
    get scnbraceletlength() {
        return $('//div[@id="bracelettes"]/parent::div')
    }
    get txtheadingbraceletlength() {
        return $('//p[contains(text(),"BRACELET LENGTH")]')
    }
    get imgleftbraceletlength() {
        return $('//div[@class="filter-menu-icons-new bracelet-length-icon m-t-10 m-l-5 is-pulled-left"]')
    }
    //11.2-BR-braceletdropdownlnk
    get lnkddchangelength() {
        return $('//p[contains(text(),"Change Length")]')
    }
    //11.3-BR-labelbracelet
    get boxbracelettext() {
        return $('//div[@id="bracelettes"]/div/div/label[contains(text(),"Bracelet Length")]')
    }
    //11.4-BR-braceletoptionsfield
    get boxddchoosebraceletlength() {
        return $('//select[@name="braceleteLength"]')
    }
    //11.5-BR-braceletoptions
    get braceletlengthoptions() {
        return $('(//select[@name="braceleteLength"]/option)[1]')
    }
    get click6mmbraceletlength() {
        return $('//select[@name="braceleteLength"]/option[contains(text(),"6 inches")]')
    }
    get click75mmbraceletlength() {
        return $('//select[@name="braceleteLength"]/option[contains(text(),"7.5 inches")]')
    }
    //11.6-BR-pricechanged
    get braceletlengthpricediffer() {
        return $('//span[@class="is-size-7"]/span')
    }
    get braceletlengthpricedifferp() {
        return $('//span[contains(text(),"(Price adjusted by")]')
    }
    //11.7-BR-braceletguide
    get lnkbraceletsizeguide() {
        return $('//a[@title="Bracelet Size Guide"]')
    }

    //11-Free Engraving
    //11.1-FE-text(default,couple-her,his),desc,img
    get sectionFreeengravingforher() {
        return $('//div[@id="engraving"]/parent::div')
    }
    get txtfreeengraving() {
        return $('//p[contains(text(),"FREE ENGRAVING")]')
    }
    get imgfreeengraving() {
        return $('//div[@class="filter-menu-icons-new engraving-icon m-t-10 m-l-5 is-pulled-left"]')
    }
    get txtyourspecialmessage() {
        return $('//p[contains(text(),"Your special message ...")]')
    }
    //11.2-FE-freeengravingdropdownlink
    get lnkEngrave() {
        return $('//p[contains(text(),"Engrave")]')
    }
    //11.3-FE-freeengravingsection
    get specialmessagearea() {
        return $('//div[@id="engraving"]')
    }
    //11.4-FE-freeengravingfield,desc
    get specialmessagefield() {
        return $('//input[@id="page3_engrav"]')
    }
    get txtvalidation() {
        return $('//span[contains(text(),"(18 CHARACTERS MAX)")]')
    }
    //11.5-FE-freeengravingicons
    get btnfilledheartsym() {
        return $('//div[contains(text(),"♥")]')
    }

    get btnhollowheartsym() {
        return $('//div[contains(text(),"♡")]')
    }

    get btninfinitysym() {
        return $('//div[contains(text(),"∞")]')
    }

    get btnstarsym() {
        return $('//div[contains(text(),"☆")]')
    }

    get btnAndsym() {
        return $('//div[contains(text(),"&")]')
    }
    //11.6-FE-imgfreeengravingfield
    get imgengravefield() {
        return $('//div[@class="engrave-wg engrave-wg engrave-wd-wg"]')
    }
    //12-Productdetails
    //12.1-PD-section
    get productdetailssection() {
        return $('//section[@class="p-b-25 m-b-20 has-background-white-ter"]')
    }
    get txtheadingproductdetails() {
        return $('//p[contains(text(),"PRODUCT DETAILS")]')
    }

    get txtheadingproductname() {
        return $('//p[@class="is-size-5 has-text-weight-bold m-b-15 is-uppercase"]')
    }

    get txtdescription() {
        return $('//p[@class="is-size-7 selected-product-desc p-10-touch corner-gaps"]')
    }

    //12.2-PD-centrestone(type,quality,size,weight)
    get sectionCentrestone() {
        return $('//span[contains(text(),"Center stone")]/parent::div/parent::div[@class="product-col"]')
    }
    get centrestonetype() {
        return $('//span[contains(text(),"Center stone")]/parent::div/parent::div[@class="product-col"]/div[contains(text(),"TYPE")]')
    }
    get centrestonequality() {
        return $('//span[contains(text(),"Center stone")]/parent::div/parent::div[@class="product-col"]/div[contains(text(),"QUALITY GRADE")]')
    }
    get centrestonesize() {
        return $('//span[contains(text(),"Center stone")]/parent::div/parent::div[@class="product-col"]/div[contains(text(),"SIZE")]')
    }
    get centrestoneweight() {
        return $('//span[contains(text(),"Center stone")]/parent::div/parent::div[@class="product-col"]/div[contains(text(),"WEIGHT")]')
    }
    get changedcentrestonesize() {
        return $('//div[@class="product-details"]/p[contains(text(),"5.5 X 5.5")]')
    }
    get changedcentrestoneweight() {
        return $('//div[@class="product-details"]/p[contains(text(),"0.6")]')
    }
    get changedaccentstonesweight() {
        return $('//div[@class="product-details"]/p[contains(text(),"0.2")]')
    }
    get changedaccentstone1size() {
        return $('//div[@class="product-details"]/p[contains(text(),"1.8 X 1.8")]')
    }
    get changedaccentstone1weight() {
        return $('//div[@class="product-details"]/p[contains(text(),"0.44")]')
    }
    get changedaccentstone2quality() {
        return $('(//div[contains(text(), "QUALITY GRADE")])[2]')
    }
    get changedaccentstone2size() {
        return $('(//div[contains(text(), "SIZE")]/br/following-sibling::p)[1]')
    }
    get changedaccentstone2weight() {
        return $('(//div[contains(text(), "WEIGHT")]/br/following-sibling::p)[1]')
    }

    //12.3-PD-accentstone(type,quality,weight)
    get sectionAccentstones() {
        return $('//span[contains(text(),"Accent Stones")]/parent::div/parent::div[@class="product-col"]')
    }
    get accentstonestype() {
        return $('//span[contains(text(),"Accent Stones")]/parent::div/parent::div[@class="product-col"]/div[contains(text(),"TYPE")]')
    }
    get accentstonesquality() {
        return $('//span[contains(text(),"Accent Stones")]/parent::div/parent::div[@class="product-col"]/div[contains(text(),"QUALITY GRADE")]')
    }
    get accentstonesweight() {
        return $('//span[contains(text(),"Accent Stones")]/parent::div/parent::div[@class="product-col"]/div[contains(text(),"WEIGHT")]')
    }
    //12.4-PD-accentstone1(type,quality,size,weight)
    get sectionAccentstone1() {
        return $('//span[contains(text(),"Accent Stones 1")]/parent::div/parent::div[@class="product-col"]')
    }
    get accentstone1type() {
        return $('//span[contains(text(),"Accent Stones 1")]/parent::div/parent::div[@class="product-col"]/div[contains(text(),"TYPE")]')
    }
    get accentstone1quality() {
        return $('//span[contains(text(),"Accent Stones 1")]/parent::div/parent::div[@class="product-col"]/div[contains(text(),"QUALITY GRADE")]')
    }
    get accentstone1size() {
        return $('//span[contains(text(),"Accent Stones 1")]/parent::div/parent::div[@class="product-col"]/div[contains(text(),"SIZE")]')
    }
    get accentstone1weight() {
        return $('//span[contains(text(),"Accent Stones 1")]/parent::div/parent::div[@class="product-col"]/div[contains(text(),"WEIGHT")]')
    }

    get sectionAccentstone2() {
        return $('//span[contains(text(),"Accent Stones 2")]/parent::div/parent::div[@class="product-col"]')
    }
    get accentstone2type() {
        return $('//span[contains(text(),"Accent Stones 2")]/parent::div/parent::div[@class="product-col"]/div[contains(text(),"TYPE")]')
    }
    get accentstone2quality() {
        return $('//span[contains(text(),"Accent Stones 2")]/parent::div/parent::div[@class="product-col"]/div[contains(text(),"QUALITY GRADE")]')
    }
    get accentstone2size() {
        return $('//span[contains(text(),"Accent Stones 2")]/parent::div/parent::div[@class="product-col"]/div[contains(text(),"SIZE")]')
    }
    get accentstone2weight() {
        return $('//span[contains(text(),"Accent Stones 2")]/parent::div/parent::div[@class="product-col"]/div[contains(text(),"WEIGHT")]')
    }
    //12.5-PD-setting(metal,ringthickness)
    get sectionSetting() {
        return $('//span[contains(text(),"SETTING")]/parent::div/parent::div[@class="product-col"]')
    }
    get settingmetal() {
        return $('//span[contains(text(),"SETTING")]/parent::div/parent::div[@class="product-col"]/div[contains(text(),"METAL")]')
    }
    get settingringthickness() {
        return $('//span[contains(text(),"SETTING")]/parent::div/parent::div[@class="product-col"]/div[contains(text(),"RING THICKNESS")]')
    }
    get setting14ktwhitegold() {
        return $('//div[@class="product-details" and contains(text(), "METAL")]/br/following-sibling::text()[normalize-space()="14k White Gold"]')
    }
    get setting18ktwhitegold() {
        return $('//div[@class="product-details"][contains(., "18k")]')
    }

    //12.6-PD-ringsize(bandwith,default-notselected,his,her-notselected)
    get sectionHerringsize() {
        return $('//p[contains(text(),"14k White Gold")]//following::p[contains(text(),"HER RING SIZE ")]/parent::div')
    }
    get sectionHisringsizeandwidth() {
        return $('//p[contains(text(),"14k White Gold")]//following::p[contains(text(),"HIS RING SIZE  &")]/parent::div')
    }
    get sectionbandwidth() {
        return $('//span[contains(text(),"Not Selected")]/parent::div/following-sibling::div')
    }
    get defaultringsizenotselectedtext() {
        return $('//span[contains(text(),"Ring size")]/parent::div/parent::div/div[@class="product-details"]/span[contains(text(),"Not Selected")]')
    }
    get uk7ringsizetext() {
        return $('//span[contains(text(),"Ring size")]/parent::div/parent::div/div[@class="product-details"]/span[contains(text(),"US 7 - UK & AU O")]')
    }
    //12.7-PD-engraing-(default-message,his,her-message)
    get sectionengraving() {
        return $('//span[contains(text(),"ENGRAVING")]/parent::div/parent::div[@class="product-col"]')
    }
    get defaultengravingtext() {
        return $('//span[contains(text(),"ENGRAVING")]/parent::div/parent::div/div[@class="product-details"]/span[contains(text(),"Your special message ...")]')
    }
    //12.8-PD-chain-(metal,type,size)
    get sectionChain() {
        return $('//span[contains(text(),"CHAIN")]/parent::div/parent::div[@class="product-col"]')
    }
    //12.9-PD-dimension-(height,width)
    get sectionDimensions() {
        return $('//span[contains(text(),"DIMENSIONS")]/parent::div/parent::div[@class="product-col"]')
    }
    //12.10-PD-videolnk
    get sectionviewstonevideo() {
        return $('//p[@class="call-to-action is-size-7 p-b-5"]')
    }

    //13-MatchingBands
    //13.1-MB-matchingbandlnk
    get lnkviewmatchingbands() {
        return $('//span[contains(text(),"View Matching Bands")]')
    }
    get lnkAgaciaViewDetails() {
        return $('//p[contains(text(),"Agacia")]//following-sibling::p[@class="has-text-info is-size-7 has-text-weight-medium call-to-action m-b-20"]')
    }
    //13.2-MB-matchingbandsection
    //Matching Bands
    get sctnMatchingBands() {
        return $('//section[@id="matchingBands"]')
    }
    get headingMatchingBands() {
        return $('//p[@class="is-size-5 has-text-weight-medium m-b-10 is-uppercase matching-text p-5-touch" and contains(text(),"Matching Rings and Earrings")]')
    }
    get carouselMatchingBands() {
        return $('//p[contains(text(),"Matching Bands")]/parent::div/following-sibling::div//div[@class="carousel-slides"]')
    }
    get btnLeftCaretMatchingBands() {
        return $('//p[contains(text(),"Matching Bands")]/parent::div/following-sibling::div//div[@class="carousel-arrow"]/span[@class="icon has-icons-left"]')
    }
    get btnRightCaretMatchingBands() {
        return $('//p[contains(text(),"Matching Bands")]/parent::div/following-sibling::div//div[@class="carousel-arrow"]/span[@class="icon has-icons-right"]')
    }
    get imgMatchingBand() {
        return $('//p[contains(text(),"Matching Bands")]/parent::div/following-sibling::div//div[@class="carousel-slide is-active"]//img')
    }
    get txtMatchingBandName() {
        return $('//p[contains(text(),"Matching Bands")]/parent::div/following-sibling::div//div[@class="carousel-slide is-active"]//p[@class="has-text-weight-semibold is-uppercase"]')
    }
    get txtMatchingBandPrice() {
        return $('//p[contains(text(),"Matching Bands")]/parent::div/following-sibling::div//div[@class="carousel-slide is-active"]//span[@class="has-text-weight-normal is-size 6"]')
    }
    get lnkMatchingBandViewDetails() {
        return $('//p[contains(text(),"Matching Bands")]/parent::div/following-sibling::div//div[@class="carousel-slide is-active"]//p[text()="View Details"]')
    }
    get popupMatchingBand() {
        return $('//div[@class="selected-mb-details is-flex-tablet"]')
    }
    get imgMainMatchingBand() {
        return $('//div[@class="has-text-centered"]/img[@itemprop="image"]')
    }
    get imgMini1() {
        return $('//div[@class="has-text-centered"]//div[@class="image-selected"]')
    }
    get imgMini2() {
        return $('(//div[@class="has-text-centered"]//div[@class="thumb-image-tile"])[1]')
    }
    get imgMini3() {
        return $('(//div[@class="has-text-centered"]//div[@class="thumb-image-tile"])[2]')
    }
    get popupMatchingBandName() {
        return $('//span[@class="is-uppercase is-uppercase"]')
    }
    get popupMatchingBandPrice() {
        return $('//span[@class="is-size 6"]')
    }
    get popupAgaciaBandPrice() {
        return $('//span[@class="is-uppercase is-uppercase"]/following-sibling::span')
    }
    get popupShortDescription() {
        return $('//p[@class="is-size-7 m-b-15"]')
    }
    get popupLabelRingSize() {
        return $('//div[@class="field"]//label[@class="label"][text()="Ring Size"]')
    }
    get popupDrpRingSize() {
        return $('//select[@name="matchingBandSelectedRingSize"]')
    }
    get popupPlaceHolderChooseSize() {
        return $('//select[@name="matchingBandSelectedRingSize"]//option[text()=" Choose Size "]')
    }
    get popupOptnRingSize5() {
        return $('//select[@name="matchingBandSelectedRingSize"]//option[text()="US 5 - UK & AU J 1/2"]')
    }
    get popupTextBoxEngraving() {
        return $('//label[@for="engrav_text"]')
    }
    get popupEngravingMaxChar() {
        return $('//p[@class="help"]')
    }
    get popupEngravingSymbolsSection() {
        return $('//div[@class="is-flex engraving-sym"]')
    }
    get popupDarkHeartSymbol() {
        return $('//div[@class="is-flex engraving-sym"]//div[text()="♥"]')
    }
    get popupHeartSymbol() {
        return $('//div[@class="is-flex engraving-sym"]//div[text()="♡"]')
    }
    get popupInfinitySymbol() {
        return $('//div[@class="is-flex engraving-sym"]//div[text()="∞"]')
    }
    get popupStarSymbol() {
        return $('//div[@class="is-flex engraving-sym"]//div[text()="☆"]')
    }
    get popupAndSymbol() {
        return $('//div[@class="is-flex engraving-sym"]//div[text()="&"]')
    }
    get btnAddRingAndBand() {
        return $('//button[text()="Add Ring and Band"]')
    }
    get sctnBandOrderSummary() {
        return $('(//div[@class="m-b-15 cart-details"])[2]')
    }
    get txtBandNameOrderSummary() {
        return $('(//div[@class="m-b-15 cart-details"])[2]//span[@class="has-text-weight-semibold"]')
    }
    get txtBandPriceOrderSummary() {
        return $('//span[@class="has-text-weight-semibold is-size 6"]')
    }
    get txtBandDescriptionOrderSummary() {
        return $('(//div[@class="m-b-15 cart-details"])[2]//p[@class="m-b-15 has-text-primary"]')
    }
    get labelBandSizeOrderSummary() {
        return $('(//div[@class="m-b-15 cart-details"])[2]//span[@class="m-t-5"]')
    }
    get txtChosenBandSizeOrderSummary() {
        return $('(//div[@class="m-b-15 cart-details"])[2]//span[contains(text(),"US")]')
    }
    get labelEngravingOrderSummary() {
        return $('((//div[@class="m-b-15 cart-details"])[2]//span[@data-v-9e797810=""]//span[contains(., "ENGRAVING")]')
    }
    get txtEngravingOrderSummary() {
        return $('(//div[@class="m-b-15 cart-details"])[2]//span[@data-v-9e797810=""]//span[contains(., "ENGRAVING")]/following-sibling::span[@class="has-text-primary"]')
    }




    // Matching Products
    get sctMatchingProducts() {
        return $('//p[contains(text(),"and")]/parent::div/parent::section[@class="m-b-20 has-text-centered"]')
    }
    get headingMatchingRingsAndEarrings() {
        return $('//p[@class="is-size-5 has-text-weight-medium m-b-10 is-uppercase matching-text p-5-touch" and contains(text(),"Matching Rings and Earrings")]')
    }
    get headingMatchingRingsAndNecklaces() {
        return $('//p[@class="is-size-5 has-text-weight-medium m-b-10 is-uppercase matching-text p-5-touch" and contains(text(),"Matching Rings and Necklaces")]')
    }
    get headingMatchingEarringsAndNecklaces() {
        return $('//p[@class="is-size-5 has-text-weight-medium m-b-10 is-uppercase matching-text p-5-touch" and contains(text(),"Matching Earrings and Necklaces")]')
    }
    get headingMatchingEngagementAndWeddingRings() {
        return $('//p[@class="is-size-5 has-text-weight-medium m-b-10 is-uppercase matching-text p-5-touch" and contains(text(),"Matching")]')
    }
    get carouselMatchingProducts() {
        return $('//p[contains(text(),"and")]/parent::div/following-sibling::div//div[@class="carousel-slides"]')
    }
    get btnLeftCaretMatchingProducts() {
        return $('//p[contains(text(),"and")]/parent::div/following-sibling::div//div[@class="carousel-arrow"]/span[@class="icon has-icons-left"]')
    }
    get btnRightCaretMatchingProducts() {
        return $('//p[contains(text(),"and")]/parent::div/following-sibling::div//div[@class="carousel-arrow"]/span[@class="icon has-icons-right"]')
    }
    get imgMatchingProducts() {
        return $('//p[contains(text(),"and")]/parent::div/following-sibling::div//div[@class="carousel-slide is-active"]//img')
    }
    get txtMatchingProductName() {
        return $('//p[contains(text(),"and")]/parent::div/following-sibling::div//div[@class="carousel-slide is-active"]//p[@class="has-text-weight-semibold is-uppercase"]')
    }
    get txtMatchingProductPrice() {
        return $('//p[contains(text(),"and")]/parent::div/following-sibling::div//div[@class="carousel-slide is-active"]//span[@class="has-text-weight-normal is-size 6"]')
    }

    // Recently Viewed
    get sctnRecentlyViewed() {
        return $('//p[contains(text(),"RECENTLY")]/parent::div/parent::section[@class="m-b-20 has-text-centered p-t-20 p-t-10-mob"]')
    }
    get headingRecentlyViewed() {
        return $('//p[@class="is-size-5 has-text-weight-medium is-uppercase matching-text" and contains(text(),"RECENTLY VIEWED")]')
    }
    get carouselRecentlyViewed() {
        return $('//p[contains(text(),"RECENTLY")]/parent::div/following-sibling::div//div[@class="carousel-slides"]')
    }
    get btnLeftCaretRecentlyViewed() {
        return $('//p[contains(text(),"RECENTLY")]/parent::div/following-sibling::div//div[@class="carousel-arrow"]/span[@class="icon has-icons-left"]')
    }
    get btnRightCaretRecentlyViewed() {
        return $('//p[contains(text(),"RECENTLY")]/parent::div/following-sibling::div//div[@class="carousel-arrow"]/span[@class="icon has-icons-right"]')
    }
    get imgRecentlyViewedProduct() {
        return $('//p[contains(text(),"RECENTLY")]/parent::div/following-sibling::div//div[@class="carousel-slide is-active"]//img')
    }
    get txtRecentlyViewedProductName() {
        return $('//p[contains(text(),"RECENTLY")]/parent::div/following-sibling::div//div[@class="carousel-slide is-active"]/p/span[1]')
    }
    get txtRecentlyViewedProductPrice() {
        return $('//p[contains(text(),"RECENTLY")]/parent::div/following-sibling::div//div[@class="carousel-slide is-active"]/p/span[2]')
    }


    // Shipping & Returns
    get sctnShippingAndReturns() {
        return $('//div[@class="m-b-20 has-background-white-ter has-text-centered-mobile"]')
    }
    get headingShippingAndReturns() {
        return $('//p[text()="FREE GLOBAL SHIPPING & RETURNS"]')
    }
    get imgFreeShipping() {
        return $('//img[@alt="free shipping"]')
    }
    get headingFreeShipping() {
        return $('//h2[text()="FREE GLOBAL SHIPPING"]')
    }
    get txtFreeShipping() {
        return $('//h2[text()="FREE GLOBAL SHIPPING"]/parent::div/div[@class="m-b-10 is-size-7 has-text-justified"]')
    }
    get txtDateFreeShipping() {
        return $('//div[@class="m-b-10 is-size-7 has-text-justified"]//b[contains(text(),"-")]')
    }
    get imgReturnsAndResizing() {
        return $('//img[@alt="return"]')
    }
    get headingReturnsAndResizing() {
        return $('//h2[text()="FREE 100 DAY RETURNS & RE-SIZING"]')
    }
    get txtReturnsAndResizing() {
        return $('//h2[text()="FREE 100 DAY RETURNS & RE-SIZING"]/parent::div/div[@class="m-b-10 is-size-7 has-text-justified"]')
    }
    get lnkMoneyBackGuarantee() {
        return $('//a[contains(text(),"money back guarantee")]')
    }
    get lnkPrepaidReturn() {
        return $('//a[contains(text(),"Prepaid return")]')
    }
    get imgWarranty() {
        return $('//img[@alt="warranty"]')
    }
    get headingWarranty() {
        return $('//h2[text()="FREE WARRANTY & PROTECTION PLANS"]')
    }

    get txtWarranty() {
        return $('//h2[text()="FREE WARRANTY & PROTECTION PLANS"]/parent::div/div[@class="m-b-10 is-size-7 has-text-justified"]')
    }
    get lnkWarranty() {
        return $('//a[contains(text(),"one-year warranty")]')
    }
    get lnkExtend() {
        return $('//img[@alt="Extend"]')
    }
    //claudine
    get popupSctnPrecious() {
        return $('//div[@id="0-matchingBand"]//p[text()="Precious"]')
    }
    get popupbtnRuby() {
        return $('//div[@id="0-matchingBand"]//div[@title="Ruby"]')
    }
    get popupSctnSelectQuality() {
        return $('//div[@id="0-matchingBand"]//p[@class="is-uppercase has-text-primary is-size-6 m-b-10"]')
    }
    get popupbtnHeirloom() {
        return $('//div[@id="0-matchingBand"]//span[text()="Heirloom"]')
    }
    get prepopulatedRingSize() {
        return $('//p[contains(text(),"RING SIZE US 5 - UK & AU J 1/2")]')
    }
    get btnBox() {
        return $('//div[@class="chain-design-icon is-clickable"]')
    }
    get btnCablePreselected() {
        return $('//div[@class="selected-chain chain-design-icon cable-chain is-clickable"]')
    }

    get prodDilsSection() {
        return $('//p[text()="PRODUCT DETAILS"]')
    }
    get diaColumn() {
        return $('//span[text()="DIMENSIONS"]')
    }
    get widthOpt() {
        return $('//div[contains(text(),"Width")]')
    }
    get heightOpt() {
        return $('//div[contains(text(),"Height")]')
    }
    get braceletLengthOpt() {
        return $('//div[contains(text(),"Bracelet Length")]')
    }

    async selecthome() {
        await ElementUtil.waitForClickable(this.txtHOMEbreadcrumb, 25, "wait for page load")
        await ElementUtil.click(this.txtHOMEbreadcrumb, "Click Home")
        await BrowserUtil.wait(5);
    }
    async selectcategory() {
        await ElementUtil.waitForClickable(this.txtRINGSbreadcrumb, 25, "wait for page load")
        await ElementUtil.click(this.txtRINGSbreadcrumb, "Click Category")
        await BrowserUtil.wait(5);
        await ElementUtil.waitForDisplayed(this.sctnFilterTab, 50, "wait for page load")
    }
    async selectgemstone() {
        await ElementUtil.waitForClickable(this.txtRUBYRINGSbreadcrumb, 25, "wait for page load")
        await ElementUtil.click(this.txtRUBYRINGSbreadcrumb, "Click Gemstone")
        await BrowserUtil.wait(5);
        await ElementUtil.waitForDisplayed(this.sctnFilterTab, 50, "wait for page load")
    }
    async clickvideo() {
        await ElementUtil.click(this.lnkproductvideo, "click product video")
    }
    async clickcrossbutton() {
        await ElementUtil.click(this.crossbutton, "click cross button")
    }
    async clickmailicon() {
        await ElementUtil.click(this.mailicon, "click mailicon")
    }
    async clickpinteresticon() {
        await ElementUtil.click(this.pinteresticon, "click pinteresticon")
    }
    async clickfacebookicon() {
        await ElementUtil.click(this.facebookicon, "click facebookicon")
    }
    async clickchangecentrestone() {
        await ElementUtil.waitForClickable(this.lnkcentrestonedropdown, 50, "wait for page load")
        await ElementUtil.click(this.lnkcentrestonedropdown, "Click changecenterstonedropdown")
    }
    async clickchangeearringcentrestone() {
        await ElementUtil.waitForClickable(this.Elnkcentrestonedropdown, 15, "wait for page load")
        await ElementUtil.click(this.Elnkcentrestonedropdown, "Click changeearring centerstonedropdown")
    }
    async clickchangemensearringcentrestone() {
        await ElementUtil.waitForClickable(this.MElnkcentrestonedropdown, 15, "wait for page load")
        await ElementUtil.click(this.MElnkcentrestonedropdown, "Click change mensearring centerstonedropdown")
    }
    async clickcentrestonevideo() {
        await ElementUtil.waitForClickable(this.centrestonevideo, 15, "wait for page load")
        await ElementUtil.click(this.centrestonevideo, "click centrestonevideo")
    }
    async clickchangeaccentstones() {
        await ElementUtil.waitForClickable(this.lnkchangeaccentstones, 15, "wait for page load")
        await ElementUtil.click(this.lnkchangeaccentstones, "click accentstonedropdown")
    }
    async clickchangecharmaccentstones() {
        await ElementUtil.waitForClickable(this.lnkchangecharmaccentstones, 15, "wait for page load")
        await ElementUtil.click(this.lnkchangecharmaccentstones, "click accentstonedropdown")
    }
    async clickchangeawaccentstones() {
        await ElementUtil.waitForClickable(this.lnkchangeawaccentstones, 15, "wait for page load")
        await ElementUtil.click(this.lnkchangeawaccentstones, "click accentstonedropdown")
    }
    async clickchangeaccentstone1() {
        await ElementUtil.waitForClickable(this.lnkchangeaccentstone1, 15, "wait for page load")
        await ElementUtil.click(this.lnkchangeaccentstone1, "click accentstonedropdown")
    }

    async clickchangenaccentstone1() {
        await ElementUtil.waitForClickable(this.lnkchangeNaccentstone1, 15, "wait for page load")
        await ElementUtil.click(this.lnkchangeNaccentstone1, "click accentstonedropdown")
    }

    async clickchangeaccentstone2() {
        await ElementUtil.waitForClickable(this.lnkchangeaccentstone2, 15, "wait for page load")
        await ElementUtil.click(this.lnkchangeaccentstone2, "click accentstonedropdown")
    }
    async clickaccentstonesvideo() {
        await ElementUtil.waitForClickable(this.accentstonesvideo, 15, "wait for page load")
        await ElementUtil.click(this.accentstonesvideo, "click accentstonesvideo")
    }
    async clickaccentstone1video() {
        await ElementUtil.waitForClickable(this.accentstone1video, 15, "wait for page load")
        await ElementUtil.click(this.accentstone1video, "click accentstone1video")
    }
    async clickaccentstone2video() {
        await ElementUtil.waitForClickable(this.accentstone2video, 15, "wait for page load")
        await ElementUtil.click(this.accentstone2video, "click accentstone2video")
    }
    async clickchangemetal() {
        await ElementUtil.waitForClickable(this.lnkchangemetal, 15, "wait for page load")
        await ElementUtil.click(this.lnkchangemetal, "click changemetal")
    }
    async clickringselect() {
        await ElementUtil.waitForClickable(this.lnkringselect, 50, "wait for page load")
        await ElementUtil.click(this.lnkringselect, "click ring size select")
    }
    async clickhisringselect() {
        await ElementUtil.waitForClickable(this.lnkcouplebandhimselect, 15, "wait for page load")
        await ElementUtil.click(this.lnkcouplebandhimselect, "click his ring size select")
    }
    async clickchooseringsize() {
        await ElementUtil.waitForClickable(this.boxchoosesize, 15, "wait for page load")
        await ElementUtil.click(this.boxchoosesize, "choose ringsize")
    }
    async selectRingSizeDropdown() {
        await ElementUtil.waitForClickable(this.boxchoosesize, 20, "wait for page load")
        await ElementUtil.forceClick(this.boxchoosesize, "choose ringsize")
        await BrowserUtil.wait(5)
    }
    async clickchoosehimringsize() {
        await ElementUtil.waitForClickable(this.boxChooseHisringsize, 15, "wait for page load")
        await ElementUtil.click(this.boxChooseHisringsize, "choose him ringsize")
    }
    async clicklnkengrave() {
        await ElementUtil.waitForClickable(this.lnkEngrave, 50, "wait for page load")
        await ElementUtil.click(this.lnkEngrave, "click engrave dropdown")
    }
    async enterengrave() {
        await ElementUtil.sendText(this.specialmessagefield, data.specialmessagetext.text, "Enter special message")
    }
    async clicklnkmatchingbands() {
        await ElementUtil.waitForClickable(this.lnkviewmatchingbands, 50, "wait for page load")
        await ElementUtil.click(this.lnkviewmatchingbands, "click matchingband link")
    }
    async clickagaciamatchingbands() {
        await ElementUtil.waitForClickable(this.lnkAgaciaViewDetails, 50, "wait for page load")
        await ElementUtil.mouseHover(this.lnkAgaciaViewDetails, "Hover view details")
        await BrowserUtil.wait(2)
        await ElementUtil.click(this.lnkAgaciaViewDetails, "click matchingband link")
        await BrowserUtil.wait(2)
        let bandPopup = await ElementUtil.isVisible(this.popupMatchingBand, "Check dropdown")
        if (bandPopup != true) {
            await ElementUtil.forceClick(this.lnkAgaciaViewDetails, "Click Select")
        }
        await BrowserUtil.wait(2)
        //await ElementUtil.waitForDisplayed(this.popupMatchingBand, 40, "wait for page load")
    }
    async movetoproductdetailsection() {
        await ElementUtil.scrollIntoView(this.productdetailssection, "move to productdetails section")
    }
    async movetocenterstonesection() {
        await ElementUtil.scrollIntoView(this.sectioncenterstone, "move to centerstone section")
    }
    async clickcenteremarldprecious() {

        await ElementUtil.click(this.lnkimgcentreemerald, "click emerald")
    }
    async clickcenterheirloomquality() {
        await ElementUtil.waitForClickable(this.btnqualityHeirloom, 50, "wait for page load")
        await ElementUtil.mouseHover(this.btnqualityHeirloom, "hover heirloom button")
        await ElementUtil.click(this.btnqualityHeirloom, "click heirloom quality")
    }
    async clickcenter06ct() {
        await ElementUtil.click(this.btn06Cts, "click 0.6 cts")
    }
    async clickcenter075ct() {
        await ElementUtil.click(this.btn075Cts, "click 0.75 cts")
    }
    async clickcenter102ct() {
        await ElementUtil.click(this.btn102Cts, "click 1.02 cts")
    }

    async movetoaccentstonessection() {
        await ElementUtil.scrollIntoView(this.sectionAccentstones, "move to accent stones")
        await BrowserUtil.wait(5)
    }
    async movetoaccentstonesarea() {
        await ElementUtil.scrollIntoView(this.sectionaccentstones, "move to accent stones area")
        await BrowserUtil.wait(2)
    }

    async clickaccentemarldprecious() {
        await ElementUtil.click(this.lnkimgaccent1emerald, "click emerald")
    }
    async clickaccentstonesheirloomquality() {
        await ElementUtil.click(this.asbtnqualityHeirloom, "click accent stone heirloom")
    }
    async movetoaccentstone1section() {
        await ElementUtil.scrollIntoView(this.sectionAccentstone1, "click accent stone1")
    }
    async movetoaccentstone2section() {
        await ElementUtil.scrollIntoView(this.sectionAccentstone2, "move to accentstone2")
    }
    async clickchangeaccentstone2dropdown() {
        await ElementUtil.waitForClickable(this.lnkchangeaccentstone2, 50, "wait for page load")
        await ElementUtil.click(this.lnkchangeaccentstone2, "click change accent stone2 dropdown")
    }
    async clickchangeNaccentstone2dropdown() {
        await ElementUtil.click(this.lnkchangeNaccentstone2, "click change accent stone2 dropdown")
    }
    async clickaccent1emarldprecious() {
        await ElementUtil.click(this.lnkimgcentreemerald, "click accent stone1 emerald")
    }
    async clickaccent1heirloom() {
        await ElementUtil.waitForClickable(this.btnqualityHeirloom, 10, "wait for clickable")
        await ElementUtil.click(this.btnqualityHeirloom, "click accent1 heirloom")
    }
    async clickaccent2whitesapphireprecious() {
        await ElementUtil.click(this.lnkimagaccent2whitesapphire, "click accent stone2 white sapphire")
    }
    async movetometalsection() {
        await ElementUtil.scrollIntoView(this.sectionmetal, "move to metal section")
    }
    async click18kwhitegold() {
        await ElementUtil.click(this.Clnk18kWG, "click 18k white gold")
    }
    async click14kyellowgold() {

        await ElementUtil.click(this.Clnk14kYG, "click 14k yellow gold")
    }
    async movetoringsize() {

        await ElementUtil.click(this.sectionringsize, "move to ringsize")
    }
    async clickboxchoosesize() {

        await ElementUtil.click(this.boxchoosesize, "move to ringsize")
    }
    async select7UKringsize() {
        await ElementUtil.click(this.boxwith7UKringsize, "click 7UK ringsize")
    }
    async movetoengravingsection() {
        await ElementUtil.scrollIntoView(this.sectionengraving, "move to engraving section")
    }
    async clickhisringsize() {
        await BrowserUtil.wait(3)
        await ElementUtil.waitForClickable(this.lnkcouplebandhimselect, 50, "wait for page load")
        await ElementUtil.click(this.lnkcouplebandhimselect, "click couple band him")
    }
    async clickhimringsize() {

        await ElementUtil.click(this.lnkmensselect, "click select him")
    }
    async clickmensringsize() {

        await ElementUtil.click(this.lnkmensselect, "click select him")
    }
    async clickhisbandwidthdropdown() {

        await ElementUtil.click(this.boxchoosebandwidth, "click his bandwidthdropdown")
    }
    async clickselect7mmbandwidth() {
        await ElementUtil.click(this.select7mmbandwidth, "select 7mm")
    }
    async select11UKringsize() {
        await ElementUtil.click(this.boxwith11UKringsize, "click 11UK ringsize")
    }
    async select11UKhisringsize() {
        await ElementUtil.click(this.boxwithhis11UKringsize, "click 11UK hisringsize")
    }
    async enternameinengraving() {
        await ElementUtil.sendText(this.specialmessagefield, data.specialmessagetext.text, "Enter special message")
    }
    async clickaddtocart() {
        await ElementUtil.waitForClickable(this.btnaddtocart, 40, "wait for page load")
        await ElementUtil.click(this.btnaddtocart, "click add to cart button")
    }
    async clickmatchingbandviewdetails() {
        await ElementUtil.waitForClickable(this.lnkMatchingBandViewDetails, 40, "wait for page load")
        await ElementUtil.click(this.lnkMatchingBandViewDetails, "click matching bands view details")
    }
    async clickmatchingbandringsize() {
        await ElementUtil.waitForClickable(this.popupDrpRingSize, 40, "wait for page load")
        await ElementUtil.click(this.popupDrpRingSize, "click matching band ring size")
    }
    async movetorecentlyview() {
        await ElementUtil.scrollIntoView(this.sctnRecentlyViewed, "move to recently viewed")
    }
    async clickrecentlyviewedproduct() {
        await ElementUtil.waitForClickable(this.imgRecentlyViewedProduct, 40, "wait for page load")
        await ElementUtil.click(this.imgRecentlyViewedProduct, "click recently viewed product")
    }
    async movetofreeshippingsection() {
        await ElementUtil.scrollIntoView(this.sctnShippingAndReturns, "move to free shipping section")
    }
    async clicklnkmoneyguarantee() {
        await ElementUtil.waitForClickable(this.lnkMoneyBackGuarantee, 40, "wait for page load")
        await ElementUtil.forceClick(this.lnkMoneyBackGuarantee, "click money guarantee")
    }
    async clicklnkwarranty() {
        await ElementUtil.waitForClickable(this.lnkWarranty, 40, "wait for page load")
        await ElementUtil.click(this.lnkWarranty, "click warranty link")
    }
    async clickbraceletlengthdropdown() {
        await ElementUtil.waitForClickable(this.lnkddchangelength, 40, "wait for page load")
        await ElementUtil.click(this.lnkddchangelength, "click bracelet length")
    }
    async clickboxbraceletlengthdropdown() {
        await ElementUtil.waitForClickable(this.boxddchoosebraceletlength, 40, "wait for page load")
        await ElementUtil.click(this.boxddchoosebraceletlength, "click boxbracelet length")
    }
    async select6mmbraceletlength() {
        //await ElementUtil.waitForClickable(this.click6mmbraceletlength, 40, "wait for page load")
        await ElementUtil.click(this.click6mmbraceletlength, "click 6mm bracelet length")
    }
    async select75mmbraceletlength() {
        //await ElementUtil.waitForClickable(this.click75mmbraceletlength, 40, "wait for page load")
        await ElementUtil.click(this.click75mmbraceletlength, "click 75mm bracelet length")
    }
    async clickcustomizechainlength() {
        await ElementUtil.waitForClickable(this.lnkcustomize, 40, "wait for page load")
        await ElementUtil.click(this.lnkcustomize, "click customize chain length")
    }
    async Select18KYG() {
        await ElementUtil.waitForClickable(this.lnk18kYG, 40, "wait for page load")
        await ElementUtil.click(this.lnk18kYG, "click 18kYG")
    }
    async Select18inchbutton() {
        await ElementUtil.waitForClickable(this.btn18InchChain, 40, "wait for page load")
        await ElementUtil.click(this.btn18InchChain, "click 18 inch button")
    }

    async clickringcustomdiamond() {
        await ElementUtil.click(this.lnkimgcustomdiamond, "click custom diamond")
    }
    async clickringcustomlabdiamond() {
        await ElementUtil.click(this.ringcustomlabdiamond, "click custom lab diamond")
    }
    async clickmensringcategory() {
        await ElementUtil.waitForClickable(this.mensringcategorybreadcrumb, 50, "wait for page load")
        await ElementUtil.click(this.mensringcategorybreadcrumb, "click mensring category")
        await BrowserUtil.wait(5);
    }
    async clickearringdropdown() {
        await ElementUtil.click(this.lnkcustomize, "click customize earring dropdown lnk")
    }
    async click8usringsize() {
        await ElementUtil.click(this.boxwith8Ukringsize, "click 8us ringsize")
    }
    async click11usringsize() {
        await ElementUtil.click(this.boxwith11UKringsize, "click 11us ringsize")
    }
    async click11ushisringsize() {
        await ElementUtil.click(this.boxwithhis11UKringsize, "click 11us ringsize")
    }
    async clickcentrestonenaturalAAA() {
        await ElementUtil.waitForClickable(this.btnqualityAAA, 10, "wait for clickable")
        await ElementUtil.click(this.btnqualityAAA, "click centre stone Natural AAA")
    }
    async clickscrewback() {
        await ElementUtil.click(this.screwbackbutton, "click screw back")
    }
    async movetocouplecentrestone() {
        await ElementUtil.scrollIntoView(this.csectioncenterstone, "move to earring back")
    }
    async clickaddtocartbtn() {
        await ElementUtil.waitForClickable(this.btnaddtocart, 50, "wait for page load")
        await ElementUtil.click(this.btnaddtocart, "click add to cart button")
    }
    async movetologo() {
        await ElementUtil.scrollIntoView(this.diamonderelogo, "move to diamondere logo")
    }
    async selectRubyBand() {
        await ElementUtil.waitForClickable(this.popupbtnRuby, 40, "wait for page load")
        await ElementUtil.click(this.popupbtnRuby, "Select Ruby")
    }
    async selectHeirloomBand() {
        await ElementUtil.waitForClickable(this.popupbtnHeirloom, 40, "wait for page load")
        await ElementUtil.click(this.popupbtnHeirloom, "Select Heirloom Quality")
    }
    async addRingAndBand() {
        await ElementUtil.waitForClickable(this.btnAddRingAndBand, 40, "wait for page load")
        await ElementUtil.click(this.btnAddRingAndBand, "Click button")
    }
    async addBandSize() {
        await ElementUtil.waitForClickable(this.popupDrpRingSize, 40, "wait for page load")
        await ElementUtil.click(this.popupDrpRingSize, "Click ring size dropdown")
        await ElementUtil.click(this.popupOptnRingSize5, "Select US 5 option")
    }
    async clickBox() {
        await ElementUtil.waitForClickable(this.btnBox, 40, "wait for page load")
        await ElementUtil.click(this.btnBox, "Click Box design")
    }

}
module.exports = productdetailspage;
