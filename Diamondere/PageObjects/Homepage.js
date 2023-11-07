const ElementUtil = require('../../CommonUtils/ElementUtil');
const BrowserUtil = require('../../CommonUtils/BrowserUtil');
const data = require('../TestData/Homepage.json');
const context = require('../../CommonUtils/ScenarioContext')

class Homepage {


    ///////////////// Header//////////

    get mainLogo() {
        return $('//img[@alt="Home Page Diamondere since 1890"]')
    }
    get freeshipping() {
        return $('//div[@class="is-hidden-mobile is-hidden-touch is-size-7"]//a[@title="Free Shipping"]')
    }
    get returnsBnnr() {
        return $('//div[@class="is-hidden-mobile is-hidden-touch is-size-7"]//a[@title="Free 100 Day Returns"]')
    }
    get resizing() {
        return $('//div[@class="is-hidden-mobile is-hidden-touch is-size-7"]//a[@title="Free Re-sizing"]')
    }
    get certification() {
        return $('//div[@class="is-hidden-mobile is-hidden-touch is-size-7"]//a[@title="Free Certification"]')
    }
    get homepagebanner() {
        return $('//div[@class="has-text-centered special-announcement-banner p-l-10-mob p-r-10-mob special-announcement-bg-red"]')
    }
    get customercare() {
        return $('//span[contains(text(),"customer care")]')
    }
    get ccWriteToUs() {
        return $('//p[text()="WRITE TO US"]')
    }
    get ccrequestcallback() {
        return $('//a[@title="Request Call Back"]')
    }
    get cctollfree() {
        return $('//a[@title="Toll Free Contact"]/p[@class="p-t-2"]')
    }
    get location() {
        return $('//span[contains(text(),"USA")]')
    }
    get searchbox() {
        return $('//div[@class="field navbar-end"]//div[@class="field has-addons search-control"]//input[@placeholder="Search"]')
    }
    get profilebeforelogin() {
        return $('//a[@title="Login / Sign Up"]')
    }
    get loggedinprofile() {
        return $('//span[@class="material-icons is-pulled-left is-size-4 m-r-5 has-text-primary"]')
    }
    get trackmyorder() {
        return $('//a[@title="TRACK MY ORDER"]')
    }
    get orderhistory() {
        return $('//a[@title="ORDER HISTORY"]')
    }
    get logout() {
        return $('//span[text()="LOGOUT"]')
    }
    get shoppingcart() {
        return $('//span[@class="icon-shopping-cart m-r-5"]//span[1]')
    }


    // 1.Rings Menu///

    get ringsmenu() {
        return $('//div[@class="is-uppercase top-link navbar-link"]//div[@class="touch-cat"]//span[text()="rings"]')
    }

    ////////////////////  1-Column  ////////////////////////////////

    get ringsshopbycategory() {
        return $('//span[text()="rings"]/parent::div/parent::div[@class="is-uppercase top-link navbar-link"]/following::div[6]')
    }

    //Shop by Diamond for menu
    get rshopbydiamond() {
        return $('//span[text()="rings"]/following::div[@class="navbar-dropdown scale-up-ver-top"][1]/div/section/div/div/div/h2[text()="Shop by Diamond"]')
    }
    //Shop by Gemstone for menu
    get rshopbygemstone() {
        return $('//span[text()="rings"]/following::div[@class="navbar-dropdown scale-up-ver-top"][1]//div[@class="sub-menu-border p-b-10 p-t-30 p-t-0-mob"]//h2[text()="Shop by Gemstone"]')
    }

    //Shop By Diamond-Rings
    get sdrdiamond() {
        return $('//a[@href="/rings/diamond-rings"]//div[@class="subtitle-font menu-filter-icon-header diamond"]//p//span[text()="Diamond"]')
    }
    get sdrlabdiamond() {
        return $('//a[@href="/rings/lab-created-diamond-rings"]//div[@class="subtitle-font menu-filter-icon-header diamond"]//p//span[text()="Lab Diamond"]')
    }
    get sdrblackdiamond() {
        return $('//a[@href="/rings/black-diamond-rings"]//div[@class="subtitle-font menu-filter-icon-header black"]//p//span[text()="Black Diamond"]')
    }
    get sdrbluediamond() {
        return $('//a[@href="/rings/blue-diamond-rings"]//div[@class="subtitle-font menu-filter-icon-header blue"]//p//span[text()="Blue Diamond"]')
    }
    get sdrbrowndiamond() {
        return $('//a[@href="/rings/brown-diamond-rings"]//div[@class="subtitle-font menu-filter-icon-header brown"]//p//span[text()="Brown Diamond"]')
    }

    //precious- ring
    get rceylonsapphire() {
        return $('//a[@href="/rings/ceylon-sapphire-rings"]/div/p/span[text()="Ceylon Sapphire"]')
    }
    get rsapphire() {
        return $('//a[@href="/rings/sapphire-rings"]/div/p/span[text()="Sapphire"]')
    }
    get remerald() {
        return $('//a[@href="/rings/emerald-rings"]/div/p/span[text()="Emerald"]')
    }
    get rruby() {
        return $('//a[@href="/rings/ruby-rings"]/div/p/span[text()="Ruby"]')
    }
    get rrainbowsapphire() {
        return $('//a[@href="/rings/rainbow-sapphire-rings"]/div/p/span[text()="Rainbow Sapphire"]')
    }
    get rpinksapphire() {
        return $('//a[@href="/rings/pink-sapphire-rings"]/div/p/span[text()="Pink Sapphire"]')
    }
    get rwhitesapphire() {
        return $('//a[@href="/rings/white-sapphire-rings"]/div/p/span[text()="White Sapphire"]')
    }

    //semi-precious- ring
    get ramethyst() {
        return $('//a[@href="/rings/amethyst-rings"]/div/p/span[text()="Amethyst"]')
    }
    get raquamarine() {
        return $('//a[@href="/rings/aquamarine-rings"]/div/p/span[text()="Aquamarine"]')
    }
    get rblackonyx() {
        return $('//a[@href="/rings/black-onyx-rings"]/div/p/span[text()="Black Onyx"]')
    }
    get rbluetopaz() {
        return $('//a[@href="/rings/blue-topaz-rings"]/div/p/span[text()="Blue Topaz"]')
    }
    get rcitrine() {
        return $('//a[@href="/rings/citrine-rings"]/div/p/span[text()="Citrine"]')
    }
    get rgarnet() {
        return $('//a[@href="/rings/garnet-rings"]/div/p/span[text()="Garnet"]')
    }
    get riolite() {
        return $('//a[@href="/rings/iolite-rings"]/div/p/span[text()="Iolite"]')
    }
    get rlondonbluetopaz() {
        return $('//a[@href="/rings/london-blue-topaz-rings"]/div/p/span[text()="London Blue Topaz"]')
    }
    get rmorganite() {
        return $('//a[@href="/rings/morganite-rings"]/div/p/span[text()="Morganite"]')
    }
    get rperidot() {
        return $('//a[@href="/rings/peridot-rings"]/div/p/span[text()="Peridot"]')
    }
    get rpinktourmaline() {
        return $('//a[@href="/rings/pink-tourmaline-rings"]/div/p/span[text()="Pink Tourmaline"]')
    }
    get rrosequartz() {
        return $('//a[@href="/rings/rose-quartz-rings"]/div/p/span[text()="Rose Quartz"]')
    }
    get rsmokyquartz() {
        return $('//a[@href="/rings/smoky-quartz-rings"]/div/p/span[text()="Smoky Quartz"]')
    }
    get rtanzanite() {
        return $('//a[@href="/rings/tanzanite-rings"]/div/p/span[text()="Tanzanite"]')
    }
    get rtsavorite() {
        return $('//a[@href="/rings/tsavorite-rings"]/div/p/span[text()="Tsavorite"]')
    }
    get rwhitetopaz() {
        return $('//a[@href="/rings/white-topaz-rings"]/div/p/span[text()="White Topaz"]')
    }

    //lab-created- ring
    get ralexanderite() {
        return $('//a[@href="/rings/alexandrite-rings"]')
    }
    get rmoissanite() {
        return $('//a[@href="/rings/moissanite-rings"]')
    }

    //Shop By Metal - Rings
    get rplatinum() {
        return $('//a[@href="/rings/platinum-rings"]/div/p/span[text()="Platinum"]')
    }
    get rwhitegold() {
        return $('//a[@href="/rings/14k-white-gold-rings"]/div/p/span[text()="White Gold"]')
    }
    get ryellowgold() {
        return $('//a[@href="/rings/14k-yellow-gold-rings"]/div/p/span[text()="Yellow Gold"]')
    }
    get rrosegold() {
        return $('//a[@href="/rings/14k-rose-gold-rings"]/div/p/span[text()="Rose Gold"]')
    }
    get rrblackgold() {
        return $('//a[@href="/rings/14k-black-gold-rings"]/div/p/span[text()="Black Gold"]')
    }
    get rsilver() {
        return $('//a[@href="/rings/sterling-silver-rings"]/div/p/span[text()="Silver"]')
    }

    ////////////////////  3-Column  ////////////////////////////////

    // Titles
    get ringstyle() {
        return $('//h2[text()="Ring Styles"]')
    }

    //Ring Style

    get rs3stonerings() {
        return $('//h2[text()="Ring Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="3-Stone Rings"]')
    }
    get rscladdaghrings() {
        return $('//h2[text()="Ring Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Claddagh Rings"]')
    }
    get rshalorings() {
        return $('//h2[text()="Ring Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Halo Rings"]')
    }
    get rspromiserings() {
        return $('//h2[text()="Ring Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Promise Rings"]')
    }
    get rssolitairerings() {
        return $('//h2[text()="Ring Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Solitaire Rings"]')
    }
    get rsstackablerings() {
        return $('//h2[text()="Ring Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Stackable Rings"]')
    }
    get rstoietmoirings() {
        return $('//h2[text()="Ring Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Toi Et Moi Rings"]')
    }
    get rsvintagerings() {
        return $('//h2[text()="Ring Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Vintage Rings"]')
    }
    get rsviewall() {
        return $('//h2[text()="Ring Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="View All"]')
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

    ////////////////////  4-Column  ////////////////////////////////

    // guide - ring
    get styleguide() {
        return $('//div[@class="column is-4 p-l-25 is-hidden-touch blog-column-width p-t-50"]//a[@title="Style Guide To Ring Setting Options"]')
    }
    get blackgoldguide() {
        return $('//div[@class="column is-4 p-l-25 is-hidden-touch blog-column-width p-t-50"]//a[@title="Black Gold Guide"]')
    }


    // 2.Engagement Menu///


    get engagementmenu() {
        return $('//div[@class="is-uppercase top-link navbar-link"]//div[@class="touch-cat"]//span[text()="engagement"]')
    }

    ////////////////////  1-Column  ////////////////////////////////

    get engagementshopbycategory() {
        return $('//span[text()="engagement"]/parent::div/parent::div[@class="is-uppercase top-link navbar-link"]/following::div[6]')
    }

    //Shop by Diamond for menu

    get engshopbydiamond() {
        return $('//span[text()="engagement"]/following::div[@class="navbar-dropdown scale-up-ver-top"][1]/div/section/div/div/div/h2[text()="Shop by Diamond"]')
    }

    //Shop by Gemstone for menu
    get engshopbygemstone() {
        return $('//span[text()="engagement"]/following::div[@class="navbar-dropdown scale-up-ver-top"][1]//div[@class="sub-menu-border p-b-10 p-t-30 p-t-0-mob"]//h2[text()="Shop by Gemstone"]')
    }

    //Shop By Diamond-Engagement
    get sdengdiamond() {
        return $('//a[@href="/rings/diamond-rings?design=engagement-rings&reloadmyoj=true"]//div[@class="subtitle-font menu-filter-icon-header diamond"]//p//span[@class="p-l-20"][text()="Diamond"]')
    }
    get sdenglabdiamond() {
        return $('//a[@href="/rings/lab-created-diamond-rings?design=engagement-rings&reloadmyoj=true"]//div[@class="subtitle-font menu-filter-icon-header diamond"]//p//span[@class="p-l-20"][text()="Lab Diamond"]')
    }
    get sdengblackdiamond() {
        return $('//a[@href="/rings/black-diamond-rings?design=engagement-rings"]//div[@class="subtitle-font menu-filter-icon-header black"]//p//span[@class="p-l-20"][text()="Black Diamond"]')
    }
    get sdengbluediamond() {
        return $('//a[@href="/rings/blue-diamond-rings?design=engagement-rings"]//div[@class="subtitle-font menu-filter-icon-header blue"]//p//span[@class="p-l-20"][text()="Blue Diamond"]')
    }
    get sdengbrowndiamond() {
        return $('//a[@href="/rings/brown-diamond-rings?design=engagement-rings"]//div[@class="subtitle-font menu-filter-icon-header brown"]//p//span[@class="p-l-20"][text()="Brown Diamond"]')
    }

    //precious- engagement
    get engceylonsapphire() {
        return $('//a[@href="/rings/ceylon-sapphire-rings?design=engagement-rings"]/div/p/span[text()="Ceylon Sapphire"]')
    }
    get engsapphire() {
        return $('//a[@href="/rings/sapphire-rings?design=engagement-rings"]/div/p/span[text()="Sapphire"]')
    }
    get engemerald() {
        return $('//a[@href="/rings/emerald-rings?design=engagement-rings"]/div/p/span[text()="Emerald"]')
    }
    get engruby() {
        return $('//a[@href="/rings/ruby-rings?design=engagement-rings"]/div/p/span[text()="Ruby"]')
    }
    get engrainbowsapphire() {
        return $('//a[@href="/rings/rainbow-sapphire-rings?design=engagement-rings"]/div/p/span[text()="Rainbow Sapphire"]')
    }
    get engpinksapphire() {
        return $('//a[@href="/rings/pink-sapphire-rings?design=engagement-rings"]/div/p/span[text()="Pink Sapphire"]')
    }
    get engwhitesapphire() {
        return $('//a[@href="/rings/white-sapphire-rings?design=engagement-rings"]/div/p/span[text()="White Sapphire"]')
    }

    //semi-precious- engagement
    get engamethyst() {
        return $('//a[@href="/rings/amethyst-rings?design=engagement-rings"]/div/p/span[text()="Amethyst"]')
    }
    get engaquamarine() {
        return $('//a[@href="/rings/aquamarine-rings?design=engagement-rings"]/div/p/span[text()="Aquamarine"]')
    }
    get engblackonyx() {
        return $('//a[@href="/rings/black-onyx-rings?design=engagement-rings"]/div/p/span[text()="Black Onyx"]')
    }
    get engbluetopaz() {
        return $('//a[@href="/rings/blue-topaz-rings?design=engagement-rings"]/div/p/span[text()="Blue Topaz"]')
    }
    get engcitrine() {
        return $('//a[@href="/rings/citrine-rings?design=engagement-rings"]/div/p/span[text()="Citrine"]')
    }
    get enggarnet() {
        return $('//a[@href="/rings/garnet-rings?design=engagement-rings"]/div/p/span[text()="Garnet"]')
    }
    get engiolite() {
        return $('//a[@href="/rings/iolite-rings?design=engagement-rings"]/div/p/span[text()="Iolite"]')
    }
    get englondonbluetopaz() {
        return $('//a[@href="/rings/london-blue-topaz-rings?design=engagement-rings"]/div/p/span[text()="London Blue Topaz"]')
    }
    get engmorganite() {
        return $('//a[@href="/rings/morganite-rings?design=engagement-rings"]/div/p/span[text()="Morganite"]')
    }
    get engperidot() {
        return $('//a[@href="/rings/peridot-rings?design=engagement-rings"]/div/p/span[text()="Peridot"]')
    }
    get engpinktourmaline() {
        return $('//a[@href="/rings/pink-tourmaline-rings?design=engagement-rings"]/div/p/span[text()="Pink Tourmaline"]')
    }
    get engrosequartz() {
        return $('//a[@href="/rings/rose-quartz-rings?design=engagement-rings"]/div/p/span[text()="Rose Quartz"]')
    }
    get engsmokyquartz() {
        return $('//a[@href="/rings/smoky-quartz-rings?design=engagement-rings"]/div/p/span[text()="Smoky Quartz"]')
    }
    get engtanzanite() {
        return $('//a[@href="/rings/tanzanite-rings?design=engagement-rings"]/div/p/span[text()="Tanzanite"]')
    }
    get engtsavorite() {
        return $('//a[@href="/rings/tsavorite-rings?design=engagement-rings"]/div/p/span[text()="Tsavorite"]')
    }
    get engwhitetopaz() {
        return $('//a[@href="/rings/white-topaz-rings?design=engagement-rings"]/div/p/span[text()="White Topaz"]')
    }

    //lab-created- engagement
    get engalexanderite() {
        return $('//a[@href="/rings/alexandrite-rings?design=engagement-rings"]/div/p/span[text()="Alexandrite"]')
    }
    get engmoissanite() {
        return $('//a[@href="/rings/moissanite-rings?design=engagement-rings"]/div/p/span[text()="Moissanite"]')
    }

    //Shop By Metal-Engagement
    get engplatinum() {
        return $('//a[@href="/rings/engagement-rings?metal=platinum"]/div/p/span[text()="Platinum"]')
    }
    get engwhitegold() {
        return $('//a[@href="/rings/engagement-rings?metal=14k-white-gold"]/div/p/span[text()="White Gold"]')
    }
    get engyellowgold() {
        return $('//a[@href="/rings/engagement-rings?metal=14k-yellow-gold"]/div/p/span[text()="Yellow Gold"]')
    }
    get engrosegold() {
        return $('//a[@href="/rings/engagement-rings?metal=14k-rose-gold"]/div/p/span[text()="Rose Gold"]')
    }
    get engblackgold() {
        return $('//a[@href="/rings/engagement-rings?metal=14k-black-gold"]/div/p/span[text()="Black Gold"]')
    }
    get engsilver() {
        return $('//a[@href="/rings/engagement-rings?metal=sterling-silver"]/div/p/span[text()="Silver"]')
    }

    ////////////////////  3-Column  ////////////////////////////////
    // Titles
    get engagementringstyle() {
        return $('//h2[text()="Engagement Ring Styles"]')
    }

    //Engagement Ring Style
    get erssolitairerings() {
        return $('//h2[text()="Engagement Ring Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Solitaire Rings"]')
    }
    get ers3stonerings() {
        return $('//h2[text()="Engagement Ring Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="3-Stone Rings"]')
    }
    get erssidestonerings() {
        return $('//h2[text()="Engagement Ring Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Sidestone Rings"]')
    }
    get ershalorings() {
        return $('//h2[text()="Engagement Ring Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Halo Rings"]')
    }
    get ersvintageinspired() {
        return $('//h2[text()="Engagement Ring Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Vintage Inspired"]')
    }
    get ersbridalset() {
        return $('//h2[text()="Engagement Ring Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Bridal Sets"]')
    }
    get ersviewall() {
        return $('//h2[text()="Engagement Ring Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="View All"]')
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

    ////////////////////  4-Column  ////////////////////////////////

    get engagementguide() {
        return $('//div[@class="column is-4 p-l-25 is-hidden-touch blog-column-width p-t-50"]//a[@title="Engagement Ring Guide"]')
    }
    get engagementmyth() {
        return $('//div[@class="column is-4 p-l-25 is-hidden-touch blog-column-width p-t-50"]//a[@title="3 Engagement Ring Myths"]')
    }

    //3.Wedding Menu///


    get weddingmenu() {
        return $('//div[@class="is-uppercase top-link navbar-link"]//div[@class="touch-cat"]//span[text()="wedding"]')
    }

    ////////////////////  1-Column  //////////////////////////////// 
    get weddingshopbycategory() {
        return $('//span[text()="wedding"]/parent::div/parent::div[@class="is-uppercase top-link navbar-link"]/following::div[6]')
    }

    //Shop by Diamond for menu
    get wedshopbydiamond() {
        return $('//span[text()="wedding"]/following::div[@class="navbar-dropdown scale-up-ver-top"][1]//h2[text()="Shop by Diamond "]')
    }

    //Shop by Gemstone for menu
    get wedshopbygemstone() {
        return $('//span[text()="wedding"]/following::div[@class="navbar-dropdown scale-up-ver-top"][1]//h2[text()="Shop by Gemstone "]')
    }
    //Shop By Diamond-Wedding
    get sdweddiamond() {
        return $('//a[@href="/rings/diamond-rings?design=wedding-ring"]//div[@class="subtitle-font menu-filter-icon-header diamond"]//p//span[text()="Diamond"]')
    }
    get sdwedlabdiamond() {
        return $('//a[@href="/rings/lab-created-diamond-rings?design=wedding-ring"]//div[@class="subtitle-font menu-filter-icon-header diamond"]//p//span[text()="Lab Diamond"]')
    }
    get sdwedblackdiamond() {
        return $('//a[@href="/rings/black-diamond-rings?design=wedding-ring"]//div[@class="subtitle-font menu-filter-icon-header black"]//p//span[text()="Black Diamond"]')
    }
    get sdwedbluediamond() {
        return $('//a[@href="/rings/blue-diamond-rings?design=wedding-ring"]//div[@class="subtitle-font menu-filter-icon-header blue"]//p//span[text()="Blue Diamond"]')
    }
    get sdwedbrowndiamond() {
        return $('//a[@href="/rings/brown-diamond-rings?design=wedding-ring"]//div[@class="subtitle-font menu-filter-icon-header brown"]//p//span[text()="Brown Diamond"]')
    }

    //precious- wedding
    get wedceylonsapphire() {
        return $('//a[@href="/rings/ceylon-sapphire-rings?design=wedding-ring"]//div[@class="subtitle-font menu-filter-icon-header ceylon-sapphire"]//p//span[@class="p-l-20"][text()="Ceylon Sapphire"]')
    }
    get wedsapphire() {
        return $('//a[@href="/rings/sapphire-rings?design=wedding-ring"]//div[@class="subtitle-font menu-filter-icon-header sapphire"]//p//span[@class="p-l-20" and contains(text(),"Sapphire")]')
    }
    get wedemerald() {
        return $('//a[@href="/rings/emerald-rings?design=wedding-ring"]//div[@class="subtitle-font menu-filter-icon-header emerald"]//p//span[@class="p-l-20" and contains(text(),"Emerald")]')
    }
    get wedruby() {
        return $('//a[@href="/rings/ruby-rings?design=wedding-ring"]//div[@class="subtitle-font menu-filter-icon-header ruby"]//p//span[@class="p-l-20" and contains(text(),"Ruby")]')
    }
    get wedrainbowsapphire() {
        return $('//a[@href="/rings/rainbow-sapphire-rings?design=engagement-rings"]')
    }
    get wedpinksapphire() {  
        return $('//a[@href="/rings/pink-sapphire-rings?design=engagement-rings"]//div[@class="subtitle-font menu-filter-icon-header pink-sapphire"]//p//span[@class="p-l-20" and contains(text(),"Pink Sapphire")]')
    }
    get wedwhitesapphire() {
        return $('//a[@href="/rings/white-sapphire-rings?design=wedding-ring"]//div[@class="subtitle-font menu-filter-icon-header white-sapphire"]//p//span[@class="p-l-20" and contains(text(),"White Sapphire")]')
    }

    //Shop By Metal-Wedding
    get wedplatinum() {
        return $('//a[@href="/rings/wedding-rings?metal=platinum"]/div/p/span[text()="Platinum"]')
    }
    get wedwhitegold() {
        return $('//a[@href="/rings/wedding-rings?metal=14k-white-gold"]/div/p/span[text()="White Gold"]')
    }
    get wedyellowgold() {
        return $('//a[@href="/rings/wedding-rings?metal=14k-yellow-gold"]/div/p/span[text()="Yellow Gold"]')
    }
    get wedrosegold() {
        return $('//a[@href="/rings/wedding-rings?metal=14k-rose-gold"]/div/p/span[text()="Rose Gold"]')
    }
    get wedblackgold() {
        return $('//a[@href="/rings/wedding-rings?metal=14k-black-gold"]/div/p/span[text()="Black Gold"]')
    }
    get wedsilver() {
        return $('//a[@href="/rings/wedding-rings?metal=sterling-silver"]/div/p/span[text()="Silver"]')
    }

    ////////////////////  3-Column  ////////////////////////////////

    // Titles
    get womensweddingbandsstyle() {
        return $('//h2[text()="Woman\'s Wedding Band Styles"]')
    }
    get mensweddingbandsstyle() {
        return $('//h2[text()="Men\'s Wedding Band Styles"]')
    }

    //Women's Wedding Band Style
    get wwbseternitybands() {
        return $('//h2[text()="Woman\'s Wedding Band Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Eternity bands"]')
    }
    get wwbsplainbands() {
        return $('(//h2[text()="Woman\'s Wedding Band Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Plain Bands"])[1]')
    }
    get wwbsstackablerings() {
        return $('//h2[text()="Woman\'s Wedding Band Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Stackable Rings"]')
    }
    get wwbsviewall() {
        return $('(//h2[text()="Woman\'s Wedding Band Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="View All"])[1]')
    }

    //men's Wedding Band Style
    get mwbsdiamondbands() {
        return $('//h2[text()="Men\'s Wedding Band Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Diamond Bands"]')
    }
    get mwbslabdiamondbands() {
        return $('//h2[text()="Men\'s Wedding Band Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Lab-Diamond Bands"]')
    }
    get mwbsplainbands() {
        return $('//h2[text()="Men\'s Wedding Band Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Lab-Diamond Bands"]/following::a[@title="Plain Bands"]')
    }
    get mwbsviewall() {
        return $('(//h2[text()="Men\'s Wedding Band Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="View All"])[2]')
    }


    //Couple Bands
    get matchingbandsets() {
        return $('//h2[text()="Couples Bands"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Matching Band Sets"]')
    }

    ////////////////////  4-Column  ////////////////////////////////

    get weddingguide() {
        return $('//div[@class="column is-4 p-l-25 is-hidden-touch blog-column-width p-t-50"]//a[@title="Ultimate Wedding Rings Guide"]')
    }
    get matchingwedding() {
        return $('//div[@class="column is-4 p-l-25 is-hidden-touch blog-column-width p-t-50"]//a[@title="How To Choose Matching Wedding Bands"]')
    }

    ////4.Bracelet Menu///


    get braceletsmenu() {
        return $('//div[@class="is-uppercase top-link navbar-link"]//div[@class="touch-cat"]//span[text()="bracelets"]')
    }

    ////////////////////  1-Column  ////////////////////////////////
    get braceletsshopbycategory() {
        return $('//span[text()="bracelets"]/parent::div/parent::div[@class="is-uppercase top-link navbar-link"]/following::div[6]')
    }

    //Shop by Diamond for menu
    get bshopbydiamond() {
        return $('//span[text()="bracelets"]/following::div[@class="navbar-dropdown scale-up-ver-top"][1]//h2[text()="Shop by Diamond "]')
    }

    //Shop by Gemstone for menu
    get bshopbygemstone() {
        return $('//span[text()="bracelets"]/following::div[@class="navbar-dropdown scale-up-ver-top"][1]//h2[text()="Shop by Gemstone "]')
    }

    //Shop By Diamond-Bracelets
    get sdbdiamond() {
        return $('//a[@href="/bracelets/diamond-bracelets"]//div[@class="subtitle-font menu-filter-icon-header diamond"]//p//span[text()="Diamond"]')
    }
    get sdblabdiamond() {
        return $('//a[@href="/bracelets/lab-created-diamond-bracelets"]//div[@class="subtitle-font menu-filter-icon-header diamond"]//p//span[text()="Lab Diamond"]')
    }
    get sdbblackdiamond() {
        return $('//a[@href="/bracelets/black-diamond-bracelets"]//div[@class="subtitle-font menu-filter-icon-header black"]//p//span[text()="Black Diamond"]')
    }
    get sdbbluediamond() {
        return $('//a[@href="/bracelets/blue-diamond-bracelets"]//div[@class="subtitle-font menu-filter-icon-header blue"]//p//span[text()="Blue Diamond"]')
    }
    get sdbbrowndiamond() {
        return $('//a[@href="/bracelets/brown-diamond-bracelets"]//div[@class="subtitle-font menu-filter-icon-header brown"]//p//span[text()="Brown Diamond"]')
    }

    //precious- bracelets
    get bceylonsapphire() {
        return $('//a[@href="/bracelets/ceylon-sapphire-bracelets"]/div/p/span[text()="Ceylon Sapphire"]')
    }
    get bsapphire() {
        return $('//a[@href="/bracelets/sapphire-bracelets"]/div/p/span[text()="Sapphire"]')
    }
    get bemerald() {
        return $('//a[@href="/bracelets/emerald-bracelets"]/div/p/span[text()="Emerald"]')
    }
    get bruby() {
        return $('//a[@href="/bracelets/ruby-bracelets"]/div/p/span[text()="Ruby"]')
    }
    get brainbowsapphire() {
        return $('//a[@href="/bracelets/rainbow-sapphire-bracelets"]/div/p/span[text()="Rainbow Sapphire"]')
    }
    get bpinksapphire() {
        return $('//a[@href="/bracelets/pink-sapphire-bracelets"]/div/p/span[text()="Pink Sapphire"]')
    }
    get bwhitesapphire() {
        return $('//a[@href="/bracelets/white-sapphire-bracelets"]/div/p/span[text()="White Sapphire"]')
    }

    //semi-precious- bracelets
    get bamethyst() {
        return $('//a[@href="/bracelets/amethyst-bracelets"]/div/p/span[text()="Amethyst"]')
    }
    get baquamarine() {
        return $('//a[@href="/bracelets/aquamarine-bracelets"]/div/p/span[text()="Aquamarine"]')
    }
    get bblackonyx() {
        return $('//a[@href="/bracelets/black-onyx-bracelets"]/div/p/span[text()="Black Onyx"]')
    }
    get bbluetopaz() {
        return $('//a[@href="/bracelets/blue-topaz-bracelets"]/div/p/span[text()="Blue Topaz"]')
    }
    get bcitrine() {
        return $('//a[@href="/bracelets/citrine-bracelets"]/div/p/span[text()="Citrine"]')
    }
    get bgarnet() {
        return $('//a[@href="/bracelets/garnet-bracelets"]/div/p/span[text()="Garnet"]')
    }
    get biolite() {
        return $('//a[@href="/bracelets/iolite-bracelets"]/div/p/span[text()="Iolite"]')
    }
    get blondonbluetopaz() {
        return $('//a[@href="/bracelets/london-blue-topaz-bracelets"]/div/p/span[text()="London Blue Topaz"]')
    }
    get bmorganite() {
        return $('//a[@href="/bracelets/morganite-bracelets"]/div/p/span[text()="Morganite"]')
    }
    get bperidot() {
        return $('//a[@href="/bracelets/peridot-bracelets"]/div/p/span[text()="Peridot"]')
    }
    get bpinktourmaline() {
        return $('//a[@href="/bracelets/pink-tourmaline-bracelets"]/div/p/span[text()="Pink Tourmaline"]')
    }
    get brosequartz() {
        return $('//a[@href="/bracelets/rose-quartz-bracelets"]/div/p/span[text()="Rose Quartz"]')
    }
    get bsmokyquartz() {
        return $('//a[@href="/bracelets/smoky-quartz-bracelets"]/div/p/span[text()="Smoky Quartz"]')
    }
    get btanzanite() {
        return $('//a[@href="/bracelets/tanzanite-bracelets"]/div/p/span[text()="Tanzanite"]')
    }
    get btsavorite() {
        return $('//a[@href="/bracelets/tsavorite-bracelets"]/div/p/span[text()="Tsavorite"]')
    }
    get bwhitetopaz() {
        return $('//a[@href="/bracelets/white-topaz-bracelets"]/div/p/span[text()="White Topaz"]')
    }

    //lab-created- bracelets
    get balexanderite() {
        return $('//a[@href="/bracelets/alexandrite-bracelets"]/div/p/span[text()="Alexandrite"]')
    }
    get bmoissanite() {
        return $('//a[@href="/bracelets/moissanite-bracelets"]/div/p/span[text()="Moissanite"]')
    }

    ////////////////////  3-Column  ////////////////////////////////

    // Titles
    get braceletstyle() {
        return $('//h2[text()="Bracelet Styles"]')
    }

    //Bracelet Style
    get bstennisbracelets() {
        return $('//h2[text()="Bracelet Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Tennis Bracelets"]')
    }
    get bschainbracelets() {
        return $('//h2[text()="Bracelet Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Chain Bracelets"]')
    }
    get bsbangles() {
        return $('//span[text()="Bangles"]')
    }
    get bscharms() {
        return $('//a[@title="Charms"]')
    }
    get bsapplewatchbands() {
        return $('//span[text()="Apple Watch Band"]')
    }
    get bsviewall() {
        return $('//span[@class="m-l-28"][text()="View All"]')
    }

    ////////////////////  4-Column  ////////////////////////////////

    get brilliantbracelets() {
        return $('//div[@class="column is-4 p-l-25 is-hidden-touch blog-column-width p-t-50"]//a[@title="Light Up The Night With Brilliant Bracelets"]')
    }
    get mensbracelets() {
        return $('//div[@class="column is-4 p-l-25 is-hidden-touch blog-column-width p-t-50"]//a[@title="Styles Of Men\'s Bracelets To Wear In 2023"]')
    }

    //5.Earring Menu////


    get earringsmenu() {
        return $('//div[@class="is-uppercase top-link navbar-link"]//div[@class="touch-cat"]//span[text()="earrings"]')
    }

    ////////////////////  1-Column  ////////////////////////////////
    get earringsshopbycategory() {
        return $('//span[text()="earrings"]/parent::div/parent::div[@class="is-uppercase top-link navbar-link"]/following::div[6]')
    }

    //Shop by Diamond for menu
    get eshopbydiamond() {
        return $('//span[text()="earrings"]/following::div[@class="navbar-dropdown scale-up-ver-top"][1]//h2[text()="Shop by Diamond "]')
    }

    //Shop by Gemstone for menu
    get eshopbygemstone() {
        return $('//span[text()="earrings"]/following::div[@class="navbar-dropdown scale-up-ver-top"][1]//h2[text()="Shop by Gemstone "]')
    }

    //Shop By Diamond-Earrings
    get sdediamond() {
        return $('//a[@href="/earrings/diamond-earrings"]//div[@class="subtitle-font menu-filter-icon-header diamond"]//p//span[text()="Diamond"]')
    }
    get sdelabdiamond() {
        return $('//a[@href="/earrings/lab-created-diamond-earrings"]//div[@class="subtitle-font menu-filter-icon-header diamond"]//p//span[text()="Lab Diamond"]')
    }
    get sdeblackdiamond() {
        return $('//a[@href="/earrings/black-diamond-earrings"]//div[@class="subtitle-font menu-filter-icon-header black"]//p//span[text()="Black Diamond"]')
    }
    get sdebluediamond() {
        return $('//a[@href="/earrings/blue-diamond-earrings"]//div[@class="subtitle-font menu-filter-icon-header blue"]//p//span[text()="Blue Diamond"]')
    }
    get sdebrowndiamond() {
        return $('//a[@href="/earrings/brown-diamond-earrings"]//div[@class="subtitle-font menu-filter-icon-header brown"]//p//span[text()="Brown Diamond"]')
    }

    //precious- earrings
    get eceylonsapphire() {
        return $('//a[@href="/earrings/ceylon-sapphire-earrings"]/div/p/span[text()="Ceylon Sapphire"]')
    }
    get esapphire() {
        return $('//a[@href="/earrings/sapphire-earrings"]/div/p/span[text()="Sapphire"]')
    }
    get eemerald() {
        return $('//a[@href="/earrings/emerald-earrings"]/div/p/span[text()="Emerald"]')
    }
    get eruby() {
        return $('//a[@href="/earrings/ruby-earrings"]/div/p/span[text()="Ruby"]')
    }
    get erainbowsapphire() {
        return $('//a[@href="/earrings/rainbow-sapphire-earrings"]/div/p/span[text()="Rainbow Sapphire"]')
    }
    get epinksapphire() {
        return $('//a[@href="/earrings/pink-sapphire-earrings"]/div/p/span[text()="Pink Sapphire"]')
    }
    get ewhitesapphire() {
        return $('//a[@href="/earrings/white-sapphire-earrings"]/div/p/span[text()="White Sapphire"]')
    }

    //semi-precious- earrings
    get eamethyst() {
        return $('//a[@href="/earrings/amethyst-earrings"]/div/p/span[text()="Amethyst"]')
    }
    get eaquamarine() {
        return $('//a[@href="/earrings/aquamarine-earrings"]/div/p/span[text()="Aquamarine"]')
    }
    get eblackonyx() {
        return $('//a[@href="/earrings/black-onyx-earrings"]/div/p/span[text()="Black Onyx"]')
    }
    get ebluetopaz() {
        return $('//a[@href="/earrings/blue-topaz-earrings"]/div/p/span[text()="Blue Topaz"]')
    }
    get ecitrine() {
        return $('//a[@href="/earrings/citrine-earrings"]/div/p/span[text()="Citrine"]')
    }
    get egarnet() {
        return $('//a[@href="/earrings/garnet-earrings"]/div/p/span[text()="Garnet"]')
    }
    get eiolite() {
        return $('//a[@href="/earrings/iolite-earrings"]/div/p/span[text()="Iolite"]')
    }
    get elondonbluetopaz() {
        return $('//a[@href="/earrings/london-blue-topaz-earrings"]/div/p/span[text()="London Blue Topaz"]')
    }
    get emorganite() {
        return $('//a[@href="/earrings/morganite-earrings"]/div/p/span[text()="Morganite"]')
    }
    get eperidot() {
        return $('//a[@href="/earrings/peridot-earrings"]/div/p/span[text()="Peridot"]')
    }
    get epinktourmaline() {
        return $('//a[@href="/earrings/pink-tourmaline-earrings"]/div/p/span[text()="Pink Tourmaline"]')
    }
    get erosequartz() {
        return $('//a[@href="/earrings/rose-quartz-earrings"]/div/p/span[text()="Rose Quartz"]')
    }
    get esmokyquartz() {
        return $('//a[@href="/earrings/smoky-quartz-earrings"]/div/p/span[text()="Smoky Quartz"]')
    }
    get etanzanite() {
        return $('//a[@href="/earrings/tanzanite-earrings"]/div/p/span[text()="Tanzanite"]')
    }
    get etsavorite() {
        return $('//a[@href="/earrings/tsavorite-earrings"]/div/p/span[text()="Tsavorite"]')
    }
    get ewhitetopaz() {
        return $('//a[@href="/earrings/white-topaz-earrings"]/div/p/span[text()="White Topaz"]')
    }

    //lab-created- earrings
    get ealexanderite() {
        return $('//a[@href="/earrings/alexandrite-earrings"]//div[@class="subtitle-font menu-filter-icon-header lab-alexandrite"]//p//span[@class="p-l-20"][text()="Alexandrite"]')
    }
    get emoissanite() {
        return $('//a[@href="/earrings/moissanite-earrings"]/div/p/span[text()="Moissanite"]')
    }

    ////////////////////  3-Column  ////////////////////////////////

    // Titles
    get earringstyle() {
        return $('//h2[text()="Earring Styles"]')
    }

    //Earring Style
    get eschandelier() {
        return $('//h2[text()="Earring Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Chandelier"]')
    }
    get esdropearrings() {
        return $('//h2[text()="Earring Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Drop Earrings"]')
    }
    get eshaloearring() {
        return $('//h2[text()="Earring Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Halo Earring"]')
    }
    get eshoopearring() {
        return $('//h2[text()="Earring Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Hoop Earrings"]')
    }
    get esstudearring() {
        return $('//h2[text()="Earring Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Stud Earrings"]')
    }
    get esviewall() {
        return $('//h2[text()="Earring Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="View All"]')
    }

    // Create your Own Earring
    get ownEarstartwithdiamond() {
        return $('//a[@href="/loose-diamonds?category=earrings&shapes=round"]/div/p/span[text()="Start with a Diamond"]')
    }
    get ownEarstartwithlabdiamond() {
        return $('//a[@href="/loose-lab-created-diamonds?category=earrings&shapes=round"]/div/p/span[text()="Start with a Lab Diamond"]')
    }
    get ownEarstartwithsetting() {
        return $('//a[@href="/earrings/diamond-earrings?forcemyoj=true"]/div/p/span[text()="Start with a Setting"]')
    }

    ////////////////////  4-Column  ////////////////////////////////

    get studEarrings() {
        return $('//div[@class="column is-4 p-l-25 is-hidden-touch blog-column-width p-t-50"]//a[@title="Top Diamond Stud Earrings"]')
    }
    get Earringsher() {
        return $('//div[@class="column is-4 p-l-25 is-hidden-touch blog-column-width p-t-50"]//a[@title="Earrings For Her"]')
    }

    /////6.Necklaces Menu/////


    get necklacesmenu() {
        return $('//div[@class="is-uppercase top-link navbar-link"]//div[@class="touch-cat"]//span[text()="necklaces"]')
    }

    ////////////////////  1-Column  ////////////////////////////////
    get necklacesshopbycategory() {
        return $('//span[text()="necklaces"]/parent::div/parent::div[@class="is-uppercase top-link navbar-link"]/following::div[6]')
    }

    //Shop by Diamond for menu
    get nshopbydiamond() {
        return $('//span[text()="necklaces"]/following::div[@class="navbar-dropdown scale-up-ver-top"][1]//h2[text()="Shop by Diamond "]')
    }

    //Shop by Gemstone for menu
    get nshopbygemstone() {
        return $('//span[text()="necklaces"]/following::div[@class="navbar-dropdown scale-up-ver-top"][1]//h2[text()="Shop by Gemstone "]')
    }

    //Shop By Diamond-Necklaces
    get sdndiamond() {
        return $('//a[@href="/necklaces/diamond-necklaces"]//div[@class="subtitle-font menu-filter-icon-header diamond"]//p//span[text()="Diamond"]')
    }
    get sdnlabdiamond() {
        return $('//a[@href="/necklaces/lab-created-diamond-necklaces"]//div[@class="subtitle-font menu-filter-icon-header diamond"]//p//span[text()="Lab Diamond"]')
    }
    get sdnblackdiamond() {
        return $('//a[@href="/necklaces/black-diamond-necklaces"]//div[@class="subtitle-font menu-filter-icon-header black"]//p//span[text()="Black Diamond"]')
    }
    get sdnbluediamond() {
        return $('//a[@href="/necklaces/blue-diamond-necklaces"]//div[@class="subtitle-font menu-filter-icon-header blue"]//p//span[text()="Blue Diamond"]')
    }
    get sdnbrowndiamond() {
        return $('//a[@href="/necklaces/brown-diamond-necklaces"]//div[@class="subtitle-font menu-filter-icon-header brown"]//p//span[text()="Brown Diamond"]')
    }

    //precious- necklaces
    get nceylonsapphire() {
        return $('//a[@href="/necklaces/ceylon-sapphire-necklaces"]/div/p/span[text()="Ceylon Sapphire"]')
    }
    get nsapphire() {
        return $('//a[@href="/necklaces/sapphire-necklaces"]/div/p/span[text()="Sapphire"]')
    }
    get nemerald() {
        return $('//a[@href="/necklaces/emerald-necklaces"]/div/p/span[text()="Emerald"]')
    }
    get nruby() {
        return $('//a[@href="/necklaces/ruby-necklaces"]/div/p/span[text()="Ruby"]')
    }
    get nrainbowsapphire() {
        return $('//a[@href="/necklaces/rainbow-sapphire-necklaces"]/div/p/span[text()="Rainbow Sapphire"]')
    }
    get npinksapphire() {
        return $('//a[@href="/necklaces/pink-sapphire-necklaces"]/div/p/span[text()="Pink Sapphire"]')
    }
    get nwhitesapphire() {
        return $('//a[@href="/necklaces/white-sapphire-necklaces"]/div/p/span[text()="White Sapphire"]')
    }

    //semi-precious- necklaces
    get namethyst() {
        return $('//a[@href="/necklaces/amethyst-necklaces"]/div/p/span[text()="Amethyst"]')
    }
    get naquamarine() {
        return $('//a[@href="/necklaces/aquamarine-necklaces"]/div/p/span[text()="Aquamarine"]')
    }
    get nblackonyx() {
        return $('//a[@href="/necklaces/black-onyx-necklaces"]/div/p/span[text()="Black Onyx"]')
    }
    get nbluetopaz() {
        return $('//a[@href="/necklaces/black-onyx-necklaces"]/div/p/span[text()="Black Onyx"]')
    }
    get ncitrine() {
        return $('//a[@href="/necklaces/citrine-necklaces"]/div/p/span[text()="Citrine"]')
    }
    get ngarnet() {
        return $('//a[@href="/necklaces/garnet-necklaces"]/div/p/span[text()="Garnet"]')
    }
    get niolite() {
        return $('//a[@href="/necklaces/iolite-necklaces"]/div/p/span[text()="Iolite"]')
    }
    get nlondonbluetopaz() {
        return $('//a[@href="/necklaces/black-onyx-necklaces"]/div/p/span[text()="Black Onyx"]')
    }
    get nmorganite() {
        return $('//a[@href="/necklaces/morganite-necklaces"]/div/p/span[text()="Morganite"]')
    }
    get nperidot() {
        return $('//a[@href="/necklaces/morganite-necklaces"]/div/p/span[text()="Morganite"]')
    }
    get npinktourmaline() {
        return $('//a[@href="/necklaces/pink-tourmaline-necklaces"]/div/p/span[text()="Pink Tourmaline"]')
    }
    get nrosequartz() {
        return $('//a[@href="/necklaces/rose-quartz-necklaces"]/div/p/span[text()="Rose Quartz"]')
    }
    get nsmokyquartz() {
        return $('//a[@href="/necklaces/smoky-quartz-necklaces"]/div/p/span[text()="Smoky Quartz"]')
    }
    get ntanzanite() {
        return $('//a[@href="/necklaces/tanzanite-necklaces"]/div/p/span[text()="Tanzanite"]')
    }
    get ntsavorite() {
        return $('//a[@href="/necklaces/tsavorite-necklaces"]/div/p/span[text()="Tsavorite"]')
    }
    get nwhitetopaz() {
        return $('//a[@href="/necklaces/white-topaz-necklaces"]/div/p/span[text()="White Topaz"]')
    }

    //lab-created- necklaces
    get nalexanderite() {
        return $('//a[@href="/necklaces/alexandrite-necklaces"]/div/p/span[text()="Alexandrite"]')
    }
    get nmoissanite() {
        return $('//a[@href="/necklaces/moissanite-necklaces"]/div/p/span[text()="Moissanite"]')
    }

    ////////////////////  3-Column  ////////////////////////////////

    // Titles
    get necklacestyle() {
        return $('//h2[text()="Necklace Styles"]')
    }

    //Necklace Style
    get nsbutterflynecklace() {
        return $('//h2[text()="Necklace Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Butterfly necklaces"]')
    }
    get nscrossnecklace() {
        return $('//h2[text()="Necklace Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Cross necklaces"]')
    }
    get nsfloralnecklace() {
        return $('//h2[text()="Necklace Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Floral necklaces"]')
    }
    get nsheartnecklace() {
        return $('//h2[text()="Necklace Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Heart necklaces"]')
    }
    get nsinfinityknotnecklace() {
        return $('//h2[text()="Necklace Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Infinity Knot necklaces"]')
    }
    get nsinitialnecklace() {
        return $('//h2[text()="Necklace Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Initials necklaces"]')
    }
    get nsnaturenecklace() {
        return $('//h2[text()="Necklace Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Nature necklaces"]')
    }
    get nssolitairenecklace() {
        return $('//h2[text()="Necklace Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Solitaire necklaces"]')
    }
    get nsuniquenecklace() {
        return $('//h2[text()="Necklace Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Unique necklaces"]')
    }
    get nsviewall() {
        return $('//h2[text()="Necklace Styles"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="View All"]')
    }

    // Create your Own Necklace

    get oNeckstartwithdiamond() {
        return $('//a[@href="/loose-diamonds?category=necklaces&shapes=round"]/div/p/span[text()="Start with a Diamond"]')
    }
    get oNeckstartwithlabdiamond() {
        return $('//a[@href="/loose-lab-created-diamonds?category=necklaces&shapes=round"]/div/p/span[text()="Start with a Lab Diamond"]')
    }
    get oNeckstartwithsetting() {
        return $('//a[@href="/necklaces/diamond-necklaces?forcemyoj=true"]/div/p/span[text()="Start with a Setting"]')
    }

    ////////////////////  4-Column  ////////////////////////////////

    get Necklaceguide() {
        return $('//div[@class="column is-4 p-l-25 is-hidden-touch blog-column-width p-t-50"]//a[@title="Heart Necklace Guide"]')
    }


    //7.Men's Menu//////


    get mensmenu() {
        return $('//div[@class="is-uppercase top-link navbar-link"]//div[@class="touch-cat"]//span[text()="men\'s"]')
    }

    ////////////////////  1-Column  ////////////////////////////////
    get mensshopbycategory() {
        return $('//span[text()="men\'s"]/parent::div/parent::div[@class="is-uppercase top-link navbar-link"]/following::div[6]')
    }

    //Shop by Diamond for menu
    get mshopbydiamond() {
        return $('//span[text()="men\'s"]/following::div[@class="navbar-dropdown scale-up-ver-top"][1]//h2[text()="Shop by Diamond "]')
    }

    //Shop by Gemstone for menu
    get mshopbygemstone() {
        return $('//span[text()="men\'s"]/following::div[@class="navbar-dropdown scale-up-ver-top"][1]//h2[text()="Shop by Gemstone "]')
    }

    //Shop By Diamond-Men's
    get sdmdiamond() {
        return $('//a[@href="/mens/diamond-mens-rings"]//div[@class="subtitle-font menu-filter-icon-header diamond"]//p//span[text()="Diamond"]')
    }
    get sdmlabdiamond() {
        return $('//a[@href="/mens/lab-created-diamond-mens-rings"]//div[@class="subtitle-font menu-filter-icon-header diamond"]//p//span[text()="Lab Diamond"]')
    }
    get sdmblackdiamond() {
        return $('//a[@href="/mens/black-diamond-mens-rings"]//div[@class="subtitle-font menu-filter-icon-header black"]//p//span[text()="Black Diamond"]')
    }
    get sdmbluediamond() {
        return $('//a[@href="/mens/blue-diamond-mens-rings"]//div[@class="subtitle-font menu-filter-icon-header blue"]//p//span[text()="Blue Diamond"]')
    }
    get sdmbrowndiamond() {
        return $('//a[@href="/mens/brown-diamond-mens-rings"]//div[@class="subtitle-font menu-filter-icon-header brown"]//p//span[text()="Brown Diamond"]')
    }

    //precious- men's
    get mceylonsapphire() {
        return $('//a[@href="/mens/ceylon-sapphire-mens-rings"]/div/p/span[text()="Ceylon Sapphire"]')
    }
    get msapphire() {
        return $('//a[@href="/mens/sapphire-mens-rings"]/div/p/span["Sapphire"]')
    }
    get memerald() {
        return $('//a[@href="/mens/emerald-mens-rings"]/div/p/span["Emerald"]')
    }
    get mruby() {
        return $('//a[@href="/mens/ruby-mens-rings"]/div/p/span["Ruby"]')
    }

    get mpinksapphire() {
        return $('//a[@href="/mens/pink-sapphire-mens-rings"]/div/p/span[text()="Pink Sapphire"]')
    }
    get mwhitesapphire() {
        return $('//a[@href="/mens/white-sapphire-mens-rings"]/div/p/span[text()="White Sapphire"]')
    }

    //semi-precious- men's
    get mamethyst() {
        return $('//a[@href="/mens/amethyst-mens-rings"]/div/p/span[text()="Amethyst"]')
    }
    get maquamarine() {
        return $('//a[@href="/mens/aquamarine-mens-rings"]/div/p/span[text()="Aquamarine"]')
    }
    get mblackonyx() {
        return $('//a[@href="/mens/black-onyx-mens-rings"]/div/p/span[text()="Black Onyx"]')
    }
    get mbluetopaz() {
        return $('//a[@href="/mens/blue-topaz-mens-rings"]/div/p/span[text()="Blue Topaz"]')
    }
    get mcitrine() {
        return $('//a[@href="/mens/citrine-mens-rings"]/div/p/span[text()="Citrine"]')
    }
    get mgarnet() {
        return $('//a[@href="/mens/garnet-mens-rings"]/div/p/span[text()="Garnet"]')
    }
    get miolite() {
        return $('//a[@href="/mens/iolite-rings-mens-rings"]/div/p/span[text()="Iolite"]')
    }
    get mlondonbluetopaz() {
        return $('//a[@href="/mens/london-blue-topaz-mens-rings"]/div/p/span[text()="London Blue Topaz"]')
    }
    get mmorganite() {
        return $('//a[@href="/mens/morganite-mens-rings"]/div/p/span[text()="Morganite"]')
    }
    get mperidot() {
        return $('//a[@href="/mens/peridot-mens-rings"]/div/p/span[text()="Peridot"]')
    }
    get mpinktourmaline() {
        return $('//a[@href="/mens/peridot-mens-rings"]/div/p/span[text()="Peridot"]')
    }
    get mrosequartz() {
        return $('//a[@href="/mens/rose-quartz-mens-rings"]/div/p/span[text()="Rose Quartz"]')
    }
    get msmokyquartz() {
        return $('//a[@href="/mens/smoky-quartz-mens-rings"]/div/p/span[text()="Smoky Quartz"]')
    }
    get mtanzanite() {
        return $('//a[@href="/mens/tanzanite-mens-rings"]/div/p/span[text()="Tanzanite"]')
    }
    get mtsavorite() {
        return $('//a[@href="/necklaces/tsavorite-necklaces"]/div/p/span[text()="Tsavorite"]')
    }
    get mwhitetopaz() {
        return $('//a[@href="/mens/white-topaz-mens-rings"]/div/p/span[text()="White Topaz"]')
    }

    //lab-created- men's
    get malexanderite() {
        return $('//a[@href="/mens/alexandrite-mens-rings"]/div/p/span[text()="Alexandrite"]')
    }
    get mmoissanite() {
        return $('//a[@href="/mens/moissanite-mens-rings"]/div/p/span[text()="Moissanite"]')
    }

    //Shop By Metal-Men's
    get mplatinum() {
        return $('//a[@href="/mens/platinum-mens-rings"]/div/p/span[text()="Platinum"]')
    }
    get mwhitegold() {
        return $('//a[@href="/mens/14k-white-gold-mens-rings"]/div/p/span[text()="White Gold"]')
    }
    get myellowgold() {
        return $('//a[@href="/mens/14k-yellow-gold-mens-rings"]/div/p/span[text()="Yellow Gold"]')
    }
    get mrosegold() {
        return $('//a[@href="/mens/14k-rose-gold-mens-rings"]/div/p/span[text()="Rose Gold"]')
    }
    get mblackgold() {
        return $('//a[@href="/mens/14k-black-gold-mens-rings"]/div/p/span[text()="Black Gold"]')
    }
    get msilver() {
        return $('//a[@href="/mens/sterling-silver-mens-rings"]/div/p/span[text()="Silver"]')
    }

    ////////////////////  3-Column  ////////////////////////////////

    // Titles
    get shopbystyle() {
        return $('//h2[text()="Shop by Style"]')
    }

    //Shop by Style
    get ssmensearring() {
        return $('//h2[text()="Shop by Style"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Men\'s Earrings"]')
    }
    get ssmensbracelets() {
        return $('//h2[text()="Shop by Style"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Men\'s Bracelets"]')
    }
    get sssignetrings() {
        return $('//h2[text()="Shop by Style"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Signet Rings"]')
    }
    get sscufflinks() {
        return $('//h2[text()="Shop by Style"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="Cufflinks"]')
    }
    get ssviewall() {
        return $('//h2[text()="Shop by Style"]/parent::div/parent::div//div[@class="show-diamond p-l-15-mob"]//a[@title="View All"]')
    }

    // Create your Own Men's
    get oMenstartwithdiamond() {
        return $('//a[@href="/loose-diamonds?category=mens-rings&shapes=round"]/div/p/span[text()="Start with a Diamond"]')
    }
    get oMenstartwithlabdiamond() {
        return $('//a[@href="/loose-lab-created-diamonds?category=mens-rings&shapes=round"]/div/p/span[text()="Start with a Lab Diamond"]')
    }
    get oMenstartwithsetting() {
        return $('//a[@href="/mens/diamond-mens-rings?forcemyoj=true"]/div/p/span[text()="Start with a Setting"]')
    }

    ////////////////////  4-Column  ////////////////////////////////

    get MensBirthdayring() {
        return $('//div[@class="column is-4 p-l-25 is-hidden-touch blog-column-width p-t-50"]//a[@title="How To Choose A Men\’s Birthday Ring"]')
    }
    get Menluxury() {
        return $('//div[@class="column is-4 p-l-25 is-hidden-touch blog-column-width p-t-50"]//a[@title="Men\'s Luxury Guide"]')
    }


    //Sections in homepage//////


    get handcraftedSection() {
        return $('//h1[contains(text(),"Handcrafted Luxury")]')
    }
    get optnShopRings() {
        return $('//a[@title="Shop Rings"]')
    }
    get optnBlackGoldMenRings() {
        return $('//a[@title="Black Gold Men\'s Rings"]')
    }
    get optnToiEtMoiRings() {
        return $('//h5[@class="p-t-18 font-size-18 prata-font-style" and contains(text(),"Toi et Moi Collection")]')
    }
    get optnVintageRings() {
        return $('//h5[text()="Vintage Rings"]')
    }
    get optnBirthStoneCollection() {
        return $('//a[@title="Birthstone Collection"]//p[contains(text(),"Shop Now")]')
    }
    get shopByNaturalGemstone() {
        return $('//h3[contains(text()," SHOP BY NATURAL GEMSTONE")]')
    }
    get blackDiamondRings() {
        return $('//a[@title="Black Diamond Rings"]//figure[@class="p-b-35 img-bg-natural-gems"]//p[contains(text(),"shop now")]')
    }
    get rubyRings() {
        return $('//a[@title="Ruby Rings"]//figure[@class="p-b-35 img-bg-natural-gems"]//p[contains(text(),"shop now")]')
    }
    get sapphireRings() {
        return $('//a[@title="Sapphire Rings"]//figure[@class="p-b-35 img-bg-natural-gems"]//p[contains(text(),"shop now")]')
    }
    get emeraldRings() {
        return $('//a[@title="Emerald Rings"]//figure[@class="p-b-35 img-bg-natural-gems"]//p[contains(text(),"shop now")]')
    }
    get leftArrow() {
        return $('//span[@class="material-icons md-30 arrow-gems is-clickable click-natural-gems-arrow is-left is-full-brightness"]')
    }
    get rightArrow() {
        return $('//span[@class="material-icons md-30 arrow-gems is-clickable click-natural-gems-arrow is-right is-full-brightness"]')
    }
    get amethystRings() {
        return $('//a[@title="Amethyst Rings"]//p[@class="p-t-8 is-capitalized link-color font-size-15"][contains(text(),"shop now")]')
    }
    get pinkTourmalineRings() {
        return $('//a[@title="Pink tourmaline Rings"]//p[@class="p-t-8 is-capitalized link-color font-size-15"][contains(text(),"shop now")]')
    }
    get morganiteRings() {
        return $('//a[@title="Morganite Rings"]//p[@class="p-t-8 is-capitalized link-color font-size-15"][contains(text(),"shop now")]')
    }
    get alexandriteRings() {
        return $('//a[@title="Alexandrite Rings"]//p[@class="p-t-8 is-capitalized link-color font-size-15"][contains(text(),"shop now")]')
    }
    get peridotRings() {
        return $('//a[@title="Peridot Rings"]//p[@class="p-t-8 is-capitalized link-color font-size-15"][contains(text(),"shop now")]')
    }
    get aquamarineRings() {
        return $('//a[@title="Aquamarine Rings"]//p[@class="p-t-8 is-capitalized link-color font-size-15"][contains(text(),"shop now")]')
    }
    get featuredCategories() {
        return $('//h5[@class="is-size-4 prata-font-style p-t-35 p-b-8 p-l-10 is-capitalizes"]')
    }
    get featuredCategoriesRings() {
        return $('//img[@alt="RINGS"]')
    }
    get featuredCategoriesEarrings() {
        return $('//img[@alt="EARRINGS"]')
    }
    get featuredCategoriesBracelets() {
        return $('//img[@alt="BRACELETS"]')
    }
    get featuredCategoriesNecklaces() {
        return $('//img[@alt="NECKLACES"]')
    }
    get featuredCategoriesMenRings() {
        return $('//img[@alt="MEN\'S RINGS"]')
    }
    get featuredCategoriesEternityBands() {
        return $('//img[@alt="ETERNITY BANDS"]')
    }
    get tellHerItsForever() {
        return $('//h3[@class="prata-font-style font-sub-header p-t-200-widescreen p-t-50 p-t-10-mob" and contains(text(),"TELL HER IT\'S FOREVER")]')
    }
    get giaNaturalDiamonds() {
        return $('//u[text()="GIA natural diamonds,"]')
    }
    get igiLabDiamonds() {
        return $('//u[contains(text(),"IGI")]')
    }
    get beautifulHandcraftesRing() {
        return $('//u[text()="beautiful, handcrafted ring settings."]')
    }
    get txtselectshape() {
        return $('//p[@class="font-size-15 has-text-centered p-t-30 p-b-25" and contains(text(),"diamond shape")]')
    }
    get roundCut() {
        return $('//img[@alt="Round-cut"]')
    }
    get ovalCut() {
        return $('//img[@alt="Oval-cut"]')
    }
    get cushionCut() {
        return $('//img[@alt="Cushion-cut"]')
    }
    get princessCut() {
        return $('//img[@alt="Princess-cut"]')
    }
    get emeraldCut() {
        return $('//img[@alt="Emerald-cut"]')
    }
    get heartCut() {
        return $('//img[@alt="Heart-cut"]')
    }
    get pearCut() {
        return $('//img[@alt="Pear-cut"]')
    }
    get mensRingSctn() {
        return $('//div[@class="columns m-0 is-multiline p-t-40 p-l-175 p-r-175 p-l-20-touch p-r-20-touch"]')
    }
    get mensRingImage() {
        return $('//img[@alt="men-ring"]')
    }
    get seeMensRing() {
        return $('//span[@class="is-uppercase btn-home hover-on-btn"]')
    }
    get giftsForHer() {
        return $('//h2[normalize-space()="Gifts For Her"]')
    }
    get seeGiftsForHer() {
        return $('//a[@title="SEE GIFTS FOR HER"]')
    }
    get discoverDiamondere() {
        return $('//h2[@class="prata-font-style font-sub-header p-t-75 p-t-18-mob p-t-0-tab"]')
    }
    get ourLegacy() {
        return $('//a[@title="OUR LEGACY"]')
    }
    get letUsHelp() {
        return $('//h2[@class="prata-font-style font-sub-header p-l-35-mob p-r-35-mob p-b-12-mob"]')
    }
    get blogArticles() {
        return $('//a[contains(text(),"blog articles")]')
    }
    get labVsNaturalDiamondGuideText() {
        return $('//p[contains(text(),"Lab Vs. Natural Diamond Guide")]')
    }
    get labVsNaturalDiamondGuideLink() {
        return $('//p[normalize-space()="Lab Vs. Natural Diamond Guide"]')
    }
    get toiEtMoiRingsText() {
        return $('//p[contains(text(),"The Toi et Moi Ring")]')
    }
    get toiEtMoiRingsLink() {
        return $('//a[@title="The Toi et Moi Ring"]')
    }
    get toiEtMoiRingsLink() {
        return $('//a[@title="The Toi et Moi Ring"]')
    }
    get engagementRingText() {
        return $('//p[contains(text(),"Engagement Ring Cost Guide")]')
    }
    get engagementRingLink() {
        return $('//a[@title="Engagement Ring Cost Guide"]')
    }
    get expTheDiamondereText() {
        return $('//h2[contains(text(),"Experience The Diamondère Difference")]')
    }
    get qualityGuarenteedText() {
        return $('//p[contains(text(),"Quality Guaranteed")]')
    }
    get whyDiamondereLink() {
        return $('//p[contains(text(),"Why Diamondère")]')
    }
    get complementaryCareText() {
        return $('//p[contains(text(),"Complimentary Care")]')
    }
    get seeOurFAQs() {
        return $('//p[contains(text(),"See our FAQs")]')
    }
    get sustainabilityText() {
        return $('//p[contains(text(),"Positive Global Impact")]')
    }
    get sustainabilityLink() {
        return $('//p[contains(text(),"Sustainability")]')
    }
    get customerCareFirstText() {
        return $('//p[contains(text(),"Customers Come First")]')
    }
    get contactUsLink() {
        return $('//p[contains(text(),"Contact Us")]')
    }
    get myDiamondereLoveStory() {
        return $('//p[contains(text(),"Use #MyDiamondereLoveStory on Instagram")]')
    }
    get rubyRingImage() {
        return $('//div[@class="column is-one-fifth-tablet is-6-mobile insta-feed-div p-5-mob p-0"]//img[@alt="Shop on Instagram"]')
    }
    get keyPendentImage() {
        return $('//div[@class="column is-one-fifth-tablet is-6-mobile insta-feed-div p-5-mob p-0 m-t-15-md m-t-0-mob"]//img[@alt="Shop on Instagram"]')
    }

    //Birthstone collection////

    get sectionRelationshipGemstone() {
        return $('//div[@class="zodiac-finder p-t-20 p-b-20"]')
    }
    get relationshipGemstone() {
        return $('//a[@title="Click here to check your relationship gemstone"]')
    }
    get yourBirthMonth() {
        return $('//select[@aria-label="Your Date"]//option[contains(text(),"March")]')
    }
    get yourBirthDay() {
        return $('//div[@class="control is-inline-block drop-down-space1"]//select[@aria-label="Your Date"]//option[contains(text(),"10")]')
    }
    get yourPartnerBirthMonth() {
        return $('//select[@aria-label="Partners Month"]//option[contains(text(),"December")]')
    }
    get yourPartnerBirthday() {
        return $('//select[@aria-label="Partners Date"]//option[contains(text(),"23")]')
    }
    get yourZodiac() {
        return $('//strong[contains(text(),"Pisces")]')
    }
    get partnerZodiac() {
        return $('//strong[contains(text(),"Capricorn")]')
    }
    get zodiacDescription() {
        return $('//p[contains(text(),"everlasting love")]')
    }
    get Emailtoyourselforyourpartner() {
        return $('//h2[contains(text(),"Email to yourself or your partner?")]')
    }
    get shareTheseResults() {
        return $('//div[@class="p-20 p-15-touch"]//h2[contains(text()," Share these results?")]')
    }
    get partnersEmailID() {
        return $('//input[@name="partnersEmail"]')
    }
    get btnSendEmail() {
        return $('//button[@type="button"]')
    }
    get sendEmailSuccessMsg() {
        return $('//article[@class="message is-success"]')
    }
    get shopZodiacDiamondRings() {
        return $('//a[contains(text(),"Shop Diamond rings")]')
    }
    get shopzodiacDiamondNecklaces() {
        return $('//a[contains(text(),"Shop Diamond necklaces")]')
    }
    get shopZodiacDiamondEarrings() {
        return $('//a[contains(text(),"Shop Diamond earrings")]')
    }
    get januaryBirthstone() {
        return $('//b[text()="JANUARY BIRTHSTONE - GARNET"]')
    }
    get februaryBirthstone() {
        return $('//b[text()="FEBRUARY BIRTHSTONE - AMETHYST"]')
    }
    get marchBirthstone() {
        return $('//b[text()="MARCH BIRTHSTONE - AQUAMARINE"]')
    }
    get aprilBirthstone() {
        return $('//b[text()="APRIL BIRTHSTONE - DIAMOND"]')
    }
    get mayBirthstone() {
        return $('//b[text()="MAY BIRTHSTONE - EMERALD"]')
    }
    get juneBirthstone() {
        return $('//b[text()="JUNE BIRTHSTONE - WHITE PEARL / ALEXANDRITE"]')
    }
    get julyBirthstone() {
        return $('//b[text()="JULY BIRTHSTONE - RUBY"]')
    }
    get augustBirthstone() {
        return $('//b[text()="AUGUST BIRTHSTONE - PERIDOT"]')
    }
    get septemberBirthstone() {
        return $('//b[text()="SEPTEMBER BIRTHSTONE - SAPPHIRE"]')
    }
    get octoberBirthstone() {
        return $('//b[text()="OCTOBER BIRTHSTONE - TOURMALINE / OPAL"]')
    }
    get novemberBirthstone() {
        return $('//b[text()="NOVEMBER BIRTHSTONE - CITRINE"]')
    }
    get decemberBirthstone() {
        return $('//b[text()="DECEMBER BIRTHSTONE - BLUE TOPAZ / TANZANITE"]')
    }


    //////// //Footer/////////////////

    get sctnFooter() {
        return $('//div[@class="has-text-centered"]');
    }

    get sctnAboutUs() {
        return $('//div[text()="About Us"]/parent::div[@tabindex="1"]');
    }


    get lnkOurLegacy() {
        return $('//div[@class="footer-link-header column is-one-quarter has-text-weight-semibold p-b-10 p-l-10-tab"]//span[text()="Our Legacy"]')
    }


    get lnkWhyDiamondere() {
        return $('//div[@class="footer-link-header column is-one-quarter has-text-weight-semibold p-b-10 p-l-10-tab"]//span[text()="Why Diamondere"]')
    }


    get lnkSustainability() {
        return $('//div[@class="footer-link-header column is-one-quarter has-text-weight-semibold p-b-10 p-l-10-tab"]//span[text()="Sustainability"]')
    }


    get lnkRingReviews() {
        return $('//div[@class="footer-link-header column is-one-quarter has-text-weight-semibold p-b-10 p-l-10-tab"]//span[text()="Ring Reviews"]')
    }


    get lnkEngagementReviews() {
        return $('//div[@class="footer-link-header column is-one-quarter has-text-weight-semibold p-b-10 p-l-10-tab"]//span[text()="Engagement Reviews"]')
    }


    get lnkMensRingReviews() {
        return $('//div[@class="footer-link-header column is-one-quarter has-text-weight-semibold p-b-10 p-l-10-tab"]//span[text()="Men\'s Ring Reviews"]')
    }


    get sctnEducation() {
        return $('//div[text()="Education"]/parent::div[@tabindex="1"]');
    }


    get lnkDiamondGuide() {
        return $('//div[@class="footer-link-header column is-one-quarter has-text-weight-semibold p-b-10 p-l-10-tab"]//span[text()="Diamond Guide"]')
    }


    get lnkColoredGemsGuide() {
        return $('//div[@class="footer-link-header column is-one-quarter has-text-weight-semibold p-b-10 p-l-10-tab"]//span[text()="Colored Gems Guide"]')
    }


    get lnkBirthstonesGuide() {
        return $('//div[@class="footer-link-header column is-one-quarter has-text-weight-semibold p-b-10 p-l-10-tab"]//span[text()="Birthstones Guide"]')
    }


    get lnkMetalGuide() {
        return $('//div[@class="footer-link-header column is-one-quarter has-text-weight-semibold p-b-10 p-l-10-tab"]//span[text()="Metal Guide"]')
    }


    get lnkSizeGuide() {
        return $('//div[@class="footer-link-header column is-one-quarter has-text-weight-semibold p-b-10 p-l-10-tab"]//span[text()="Size Guide"]')
    }


    get sctnPolicies() {
        return $('//div[text()="Policies"]/parent::div[@tabindex="1"]');
    }


    get lnkFreeShipping() {
        return $('//div[@class="footer-link-header column is-one-quarter has-text-weight-semibold p-b-10 p-l-10-tab"]//span[text()="Free Shipping"]')
    }


    get lnkFree100DayReturns() {
        return $('//div[@class="footer-link-header column is-one-quarter has-text-weight-semibold p-b-10 p-l-10-tab"]//span[text()="Free 100 Day Returns"]')
    }


    get lnkFreeWarranty() {
        return $('//div[@class="footer-link-header column is-one-quarter has-text-weight-semibold p-b-10 p-l-10-tab"]//span[text()="Free Warranty"]')
    }


    get lnkPrivacyPolicy() {
        return $('//div[@class="footer-link-header column is-one-quarter has-text-weight-semibold p-b-10 p-l-10-tab"]//span[text()="Privacy Policy"]')
    }


    get lnkTermsAndConditions() {
        return $('//div[@class="footer-link-header column is-one-quarter has-text-weight-semibold p-b-10 p-l-10-tab"]//span[text()="Terms & Conditions"]')
    }


    get lnkAccessibility() {
        return $('//div[@class="footer-link-header column is-one-quarter has-text-weight-semibold p-b-10 p-l-10-tab"]//span[text()="Accessibility"]')
    }


    get sctnCustomerCare() {
        return $('//div[text()=" Customer Care"]/parent::div[@tabindex="1"]')
    }


    get lnkContactUs() {
        return $('//div[@class="footer-link-header column is-one-quarter has-text-weight-semibold p-b-10 p-l-10-tab"]//span[text()="Contact us"]')
    }


    get lnkFAQs() {
        return $('//div[@class="footer-link-header column is-one-quarter has-text-weight-semibold p-b-10 p-l-10-tab"]//span[text()="FAQs"]')
    }


    get lnkFinancingOptions() {
        return $('//div[@class="footer-link-header column is-one-quarter has-text-weight-semibold p-b-10 p-l-10-tab"]//span[text()="Financing Options"]')
    }


    get lnkFreeResizing() {
        return $('//div[@class="footer-link-header column is-one-quarter has-text-weight-semibold p-b-10 p-l-10-tab"]//span[text()="Free Re-sizing"]')
    }


    get lnkCaringForYourJewelry() {
        return $('//div[@class="footer-link-header column is-one-quarter has-text-weight-semibold p-b-10 p-l-10-tab"]//span[text()="Caring For Your Jewelry"]')
    }

    get sctnJoinDiamondereCommunity() {
        return $('//div[@class="is-inline-block wd-100-mob m-l-15-mob m-r-15-mob"]')
    }


    get lnkDiamondereBlog() {
        return $('//img[@alt="diamondere blog"]')
    }


    get lnkInstgram() {
        return $('//img[@alt="instagram image"]')
    }


    get lnkFacebook() {
        return $('//img[@alt="facebook image"]')
    }


    get lnkPinterest() {
        return $('//img[@alt="pinterest image"]')
    }


    get lnkDiamondereBBB() {
        return $('//a[@title="Diamondere-inc In NY"]')
    }


    get lnkDigicert() {
        return $('//a[@title="Digicert"]')
    }


    get lnkStripe() {
        return $('//a[@title="Stripe"]')
    }

    get lnkPayPal() {
        return $('//a[@title="PayPal"]')
    }


    get lnkAmericanExpress() {
        return $('//a[@title="American Express"]')
    }


    get lnkVisa() {
        return $('//a[@title="Visa"]')
    }


    get lnkMasterCard() {
        return $('//a[@title="Master Card"]')
    }


    get lnkDinersClub() {
        return $('//a[@title="Diners International"]')
    }


    get lnkAffirm() {
        return $('//a[@title="Affirm"]')
    }


    get sctnCopyright() {
        return $('//div[@class="copyright-section text-black font-family-raleway height-60-desktop height-100-touch has-text-centered p-t-18 p-b-5-touch p-b-18"]')
    }


    get lnkDisclaimer() {
        return $('//a[@title="Disclaimer"]')
    }
    //Newly added xpaths://

    get emeraldRingImage() {
        return $('//img[@data-src="https://images.diamondere.com/others/images/diamondere/home/2023/insta-feed/instagram-emerald-ring.png"]')
    }

    get rubyRingDiamondBoxImage() {
        return $('//img[@data-src="https://images.diamondere.com/others/images/diamondere/home/2023/insta-feed/instagram-ruby-ring-diamondere-box.png"]')
    }

    get diamondBandImage() {
        return $('//img[@data-src="https://images.diamondere.com/others/images/diamondere/home/2023/insta-feed/instagram-diamond-band.png"]')
    }

    get headingBirthstoneGuide() {
        return $('//h1[@class="bottom-border p-b-5 is-size-4 has-text-weight-semibold m-b-20"]')
    }
    get drpYourBirthMonth() {
        return $('//div[@class="control is-inline-block"]//select[@aria-label="Your Date"]')
    }
    get drpYourBirthDate() {
        return $('//div[@class="control is-inline-block drop-down-space1"]//select[@aria-label="Your Date"]')
    }
    get drpYourPartnerBirthMonth() {
        return $('//select[@aria-label="Partners Month"]')
    }
    get drpYourPartnerBirthDate() {
        return $('//select[@aria-label="Partners Date"]')
    }
    get imgDiamond() {
        return $('//img[@alt="Diamond"]')
    }
    get lnkFacebookShare() {
        return $('//div[@class="p-20 p-15-touch"]//a[@title="Facebook"]')
    }
    get lnkTwitterShare() {
        return $('//div[@class="p-20 p-15-touch"]//a[@title="Twitter"]')
    }
    get lnkInstagramShare() {
        return $('//div[@class="p-20 p-15-touch"]//a[@title="Instagram"]')
    }
    get lnkPinterestShare() {
        return $('//div[@class="p-20 p-15-touch"]//a[@title="Pinterest"]')
    }

    get boxemailaddress() {
        return $('//input[@name="newsLetterMail"]')
    }

    get selectshape() {
        return $('//div[@class="select-shape is-hidden-desktop is-relative"]/preceding-sibling::div')
    }

    get blogArticles() {
        return $('//p[@class="is-size-6 m-l-35-mob m-r-35-mob p-t-20-mob header-text-help-guide text-help-guide"]//a[@title="Diamondere blog"]')
    }

    get labVsNaturalDiamondGuideLink() {
        return $('//a[@title="Lab Vs. Natural Diamond Guide"]')
    }

    /////////////////////////////////////////////////

    async scrollHeader() {
        await ElementUtil.mouseHover(this.freeshipping, "hover to header")
    }
    async clickFreeShip() {
        await ElementUtil.click(this.freeshipping, "click free shipping")
        await BrowserUtil.wait(8);
        
    }
    async clickReturns() {
        await ElementUtil.waitForClickable(this.returnsBnnr, 20, "wait for page load")
        await ElementUtil.click(this.returnsBnnr, "click returns")
        await BrowserUtil.wait(8);
    }
    async clickResizing() {
        await ElementUtil.waitForClickable(this.resizing, 20, "wait for page load")
        await ElementUtil.click(this.resizing, "click resizing")
        await BrowserUtil.wait(8);
    }
    async clickCertification(){
        await ElementUtil.click(this.certification, "click certification")
        await BrowserUtil.wait(8);
    }
    async clickDiamondereLogo() {
        await ElementUtil.click(this.mainLogo, "hover over Diamondere logo")
        await BrowserUtil.wait(5);
    }
    async hoverCustomerCare() {
        await ElementUtil.mouseHover(this.customercare, "hover over customercare")
        //await BrowserUtil.wait(5);
    }
    async profileiconbeflogin() {
        await ElementUtil.mouseHover(this.profilebeforelogin, "hover over login icon")
        //await BrowserUtil.wait(5);
    }
    async ringsMainMenu() {
        await ElementUtil.mouseHover(this.ringsmenu, "hover over rings menu")
        await BrowserUtil.wait(5);
    }
    async shopByDiablackDiamondRing() {
        await ElementUtil.click(this.sdrblackdiamond, "click black diamond rings")
        await BrowserUtil.wait(5);
    }
    async rubySemiPrecious() {
        await ElementUtil.click(this.rruby, " click ruby rings")
        await BrowserUtil.wait(5);
    }
    async aquaSemiPreRings() {
        await ElementUtil.click(this.raquamarine, " click aquamarine rings")
        await BrowserUtil.wait(5);
    }
    async labCreatedRings() {
        await ElementUtil.click(this.ralexanderite, " click alexandrite rings")
        await BrowserUtil.wait(5);
    }
    async metalRings() {
        await ElementUtil.click(this.rplatinum, " click platinum rings")
        await BrowserUtil.wait(5);
    }
    async ringStyles() {
        await ElementUtil.click(this.rs3stonerings, " click 3 stone rings")
        await BrowserUtil.wait(5);
    }
    async styleGuideRing() {
        await ElementUtil.click(this.styleguide, " click style guide")
        await BrowserUtil.wait(5);
        await browser.switchWindow("https://www.diamondere.com/blog/style-guide-ring-setting-options/");
    }
    async blackGoldGuideRing() {
        await ElementUtil.click(this.blackgoldguide, " click BG guide")
        await BrowserUtil.wait(5);
        await browser.switchWindow("https://www.diamondere.com/blog/your-ultimate-guide-to-buying-black-diamond-jewelry/");

    }
    async engageMenu() {
        await ElementUtil.mouseHover(this.engagementmenu, "Hover over engagament menu")
        await BrowserUtil.wait(5);
    }
    async labdiamondEngagement() {
        await ElementUtil.click(this.sdenglabdiamond, "click lab engage diamond")
        await BrowserUtil.wait(5);
    }
    async gemCreatedEngagement() {
        await ElementUtil.click(this.engsapphire, "click sapphire gem")
        await BrowserUtil.wait(5);
    }
    async semipreciousEngagementRings() {
        await ElementUtil.click(this.engamethyst, "click amethyst gem")
        await BrowserUtil.wait(5); 
    }
    async labCreatedEngagementRings() {
        await ElementUtil.click(this.engalexanderite, "click alexandrite ")
        await BrowserUtil.wait(5);
    }
    async metalEngageMenu() {
        await ElementUtil.click(this.engwhitegold, "click WG ")
        await BrowserUtil.wait(5);
    }
    async engagementRingStyle() {
        await ElementUtil.click(this.ershalorings, "click halo rings ")
        await BrowserUtil.wait(5);
    }
    async engageRingGuide() {
        await ElementUtil.click(this.engagementguide, "click engage ring guide ")
        await BrowserUtil.wait(5);
        await browser.switchWindow("https://www.diamondere.com/blog/complete-engagement-ring-buying-guide/")
    }
    async engageRingMyth() {
        await ElementUtil.click(this.engagementmyth, "click engage myth ")
        await BrowserUtil.wait(5);
        await browser.switchWindow("https://www.diamondere.com/blog/3-engagement-ring-myths-completely-false/")
    }
    async weddingMainMenu() {
        await ElementUtil.mouseHover(this.weddingmenu, "click weddding menu")
        await BrowserUtil.wait(5);
    }
    async diaWeddingMenu() {
        await ElementUtil.click(this.sdweddiamond, "click weddding diamond")
        await BrowserUtil.wait(5);
    }
    async emeraldWeddingMenu() {
        await ElementUtil.mouseHover(this.weddingmenu, "click weddding menu")
        await ElementUtil.click(this.wedemerald, "click emerald")
        await BrowserUtil.wait(5);
    }
    async ygMetalwedding() {
        await ElementUtil.click(this.wedyellowgold, "click YG")
        await BrowserUtil.wait(5);
    }
    async viewAllWomenBand() {
        await ElementUtil.click(this.wwbsviewall, "click view all WB")
        await BrowserUtil.wait(5);
    }
    async menWeddingviewall() {
        await ElementUtil.click(this.mwbsviewall, "click view all MB")
        await BrowserUtil.wait(5);
    }
    async matchbandsCoupleWed() {
        await ElementUtil.click(this.matchingbandsets, "click couple wed")
        await BrowserUtil.wait(5);
    }
    async readMoreWedRings() {
        await ElementUtil.click(this.weddingguide, "click readmore ")
        await BrowserUtil.wait(5);
        await browser.switchWindow("https://www.diamondere.com/blog/the-ultimate-wedding-rings-guide/")
    }
    async readMoreMatchWedBands() {
        await ElementUtil.click(this.matchingwedding, "click match wed bands")
        await BrowserUtil.wait(5);
        await browser.switchWindow("https://www.diamondere.com/blog/choose-matching-wedding-bands/")
    }
    async braceletsMainMenu() {
        await ElementUtil.mouseHover(this.braceletsmenu, "Hover over bracelets MainMenu")
        await BrowserUtil.wait(5);
    }
    async blueDiabracelets() {
        await ElementUtil.click(this.sdbbluediamond, "click blue dia bracelets")
        await BrowserUtil.wait(5);
    }
    async PinkSapPrecious() {
        await ElementUtil.click(this.bpinksapphire, "click match wed bands")
        await BrowserUtil.wait(5);
    }
    async garnetBraceletsSemi() {
        await ElementUtil.click(this.bgarnet, "click match wed bands")
        await BrowserUtil.wait(5);
    }
    async labCreatedBracelets() {
        await ElementUtil.click(this.bmoissanite, "click match wed bands")
        await BrowserUtil.wait(5);
    }
    async banglesBracelets() {
        await ElementUtil.click(this.bsbangles, "click bangles")
        await BrowserUtil.wait(5);
    }
    async appleBandsBracelets() {
        await ElementUtil.mouseHover(this.braceletsmenu, "Hover over bracelets MainMenu")
        await ElementUtil.waitForClickable(this.bsapplewatchbands, 20, "wait for page load")
        await ElementUtil.click(this.bsapplewatchbands, "click apple bands")
        await BrowserUtil.wait(5);
    }
    async charmsBracelets() {
        await ElementUtil.click(this.bscharms, "click charms")
        await BrowserUtil.wait(5);
    }
    async viewAllBraceletsstyle() {
        await ElementUtil.click(this.bsviewall, "click view all bracelets")
        await BrowserUtil.wait(5);
    }
    async braceletsBrilliant() {
        await ElementUtil.click(this.brilliantbracelets, "click match wed bands")
        await BrowserUtil.wait(5);
        await browser.switchWindow("https://www.diamondere.com/blog/light-up-the-night-with-brilliant-diamond-and-gemstone-bracelets/")
    }
    async styleOfMenBracelets() {
        await ElementUtil.click(this.mensbracelets, "click match wed bands")
        await BrowserUtil.wait(5);
        await browser.switchWindow("https://www.diamondere.com/blog/different-styles-of-mens-bracelets-to-wear-in-2022/")
    }
    async earringsMainMenu() {
        await ElementUtil.mouseHover(this.earringsmenu, "Hover over earrings menu")
        await BrowserUtil.wait(5);
    }
    async brownDiamondEarring() {
        await ElementUtil.click(this.sdebrowndiamond, "click over brown dia earrings")
        await BrowserUtil.wait(5);
    }
    async emeraldPrecErring() {
        await ElementUtil.click(this.eemerald, "click over emerald earrings")
        await BrowserUtil.wait(5);
    }
    async ioliteSemiEarring() {
        await ElementUtil.click(this.eiolite, "click over iolite earrings")
        await BrowserUtil.wait(5);
    }
    async moissEarrings() {
        await ElementUtil.click(this.emoissanite, "click over moissanite earrings")
        await BrowserUtil.wait(5);
    }
    async hoopEarringstyle() {
        await ElementUtil.click(this.eshoopearring, "click over hoop earrings")
        await BrowserUtil.wait(5);
    }
    async topDiaStud() {
        await ElementUtil.click(this.studEarrings, "click over stud earrings")
        await BrowserUtil.wait(5);
        await browser.switchWindow("https://www.diamondere.com/blog/top-diamond-stud-earrings-for-him-and-her-in-2022/");
    }
    async herEarrings() {
        await ElementUtil.click(this.Earringsher, "click over earrings her")
        await BrowserUtil.wait(5);
        await browser.switchWindow("https://www.diamondere.com/blog/top-diamond-stud-earrings-for-him-and-her-in-2022/")
    }
    async necklacesMainMenu() {
        await ElementUtil.mouseHover(this.necklacesmenu, "hover over necklaces")
        await BrowserUtil.wait(5);
    }
    async shopByDiamondNeck() {
        await ElementUtil.click(this.sdndiamond, "click diamond necklaces")
        await BrowserUtil.wait(5);
    }
    async SappPrecious() {
        await ElementUtil.click(this.nwhitesapphire, "click diamond necklaces")
        await BrowserUtil.wait(5);
    }
    async citrineSemiPre() {
        await ElementUtil.click(this.ncitrine, "click citrine necklaces")
        await BrowserUtil.wait(5);
    }
    async moissNeck() {
        await ElementUtil.click(this.nmoissanite, "click citrine necklaces")
        await BrowserUtil.wait(5);
    }
    async CrossNeck() {
        await ElementUtil.click(this.nscrossnecklace, "click crossnecklaces")
        await BrowserUtil.wait(5);
    }
    async neckGuideOption() {
        await ElementUtil.click(this.Necklaceguide, "click crossnecklaces")
        await BrowserUtil.wait(5);
        await browser.switchWindow("https://www.diamondere.com/blog/best-diamond-heart-necklaces-to-celebrate-your-anniversary/")
    }
    async mensMainMenu() {
        await ElementUtil.mouseHover(this.mensmenu, "Hover over mens menu")
        await BrowserUtil.wait(5);
    }
    async mensBlackDia() {
        await ElementUtil.click(this.sdmblackdiamond, "click mens blak dia")
        await BrowserUtil.wait(5);
    }
    async whiteSappMens() {
        await ElementUtil.click(this.mwhitesapphire, "click mens white sapphire")
        await BrowserUtil.wait(5);
    }
    async mensBlackOnyx() {
        await ElementUtil.click(this.mblackonyx, "click mens black onyx")
        await BrowserUtil.wait(5);
        
    }
    async moissMensRing() {
        await ElementUtil.click(this.mmoissanite, "click mens moissanite")
        await BrowserUtil.wait(5);
    }
    async rgMensRing() {
        await ElementUtil.click(this.mrosegold, "click mens rose gold")
        await BrowserUtil.wait(5);
    }
    async mensSignetRings() {
        await ElementUtil.click(this.sssignetrings, "click mens signet rings")
        await BrowserUtil.wait(5);
    }
    async MensBirthring() {
        await ElementUtil.click(this.MensBirthdayring, "click mens birth rings")
        await BrowserUtil.wait(5);
        await browser.switchWindow("https://www.diamondere.com/blog/how-to-choose-a-mens-birthday-ring-hes-proud-to-wear/")
    }
    
    async MensLuxGuide() {
        await ElementUtil.click(this.Menluxury, "click mens signet rings")
        await BrowserUtil.wait(5);
        await browser.switchWindow("https://www.diamondere.com/blog/new-to-fine-jewelry-the-mens-guide-to-luxury-wear/")
    }
    async shopRingsClick() {
        await ElementUtil.click(this.optnShopRings, "Move to shop rings section")
        await BrowserUtil.wait(5);
    }
    async dmdLogoClick() {
        await ElementUtil.click(this.mainLogo, "click diamondere logo")
        await BrowserUtil.wait(5);
    }
    async shopRingsSection() {
        await ElementUtil.click(this.optnShopRings, "click shop rings")
        await BrowserUtil.wait(5);
    }
    async shopBlackGoldMen() {
        await ElementUtil.scrollIntoView(this.optnBlackGoldMenRings, "scroll to BG men rings")
        await ElementUtil.click(this.optnBlackGoldMenRings, "click BG men rings")
        await BrowserUtil.wait(5);
        
    }
    async clickToiEtMoi() {
        await browser.back();
        // await ElementUtil.scrollIntoView(this.optnToiEtMoiRings, "Scroll to toi et moi rings")
        await ElementUtil.click(this.optnToiEtMoiRings, "click Toi etMoi rings")
        await BrowserUtil.wait(5);
        
    }
    async clickVintageRings() {
        // await ElementUtil.scrollIntoView(this.optnVintageRings, "Scroll to vintage rings")
        await ElementUtil.click(this.optnVintageRings, "click vintage rings")
        await BrowserUtil.wait(5);
    }
    async moveNatGemstone() {
        await ElementUtil.scrollIntoView(this.shopByNaturalGemstone, "scroll to natural gemstone")
        await BrowserUtil.wait(5);
    }
    async blackDiaRings() {
        await ElementUtil.scrollIntoView(this.shopByNaturalGemstone, "scroll to black diamond rings")
        await ElementUtil.waitForClickable(this.blackDiamondRings, 20, "wait for page load")
        await ElementUtil.click(this.blackDiamondRings, "click black diamond rings")
        await BrowserUtil.wait(10);
       
    }
    async rubyDiaRings() {
        await ElementUtil.scrollIntoView(this.shopByNaturalGemstone, "scroll to ruby rings")
        await ElementUtil.waitForClickable(this.rubyRings, 20, "wait for page load")
        await ElementUtil.click(this.rubyRings, "click black diamond rings")
        await BrowserUtil.wait(10);
    }
    async sappDiaRings() {
        await ElementUtil.scrollIntoView(this.shopByNaturalGemstone, "scroll to sapphire rings")
        await ElementUtil.waitForClickable(this.sapphireRings, 20, "wait for page load")
        await ElementUtil.click(this.sapphireRings, "click sapphire rings")
        await BrowserUtil.wait(10);
    }
    async emeraldDiaRings() {
        await ElementUtil.scrollIntoView(this.shopByNaturalGemstone, "scroll to emerald rings")
        await ElementUtil.waitForClickable(this.emeraldRings, 20, "wait for page load")
        await ElementUtil.click(this.emeraldRings, "click emerald rings")
        await BrowserUtil.wait(10);
    }
    async rightCaretIcon() {
        await ElementUtil.click(this.rightArrow, "click right arrow")
    }
    async amethystDiaRings() {
        await ElementUtil.scrollIntoView(this.shopByNaturalGemstone, "scroll to amethyst rings")
        await ElementUtil.waitForClickable(this.amethystRings, 20, "wait for page load")
        await ElementUtil.click(this.amethystRings, "click amethyst rings")
        await BrowserUtil.wait(10);
    }
    async pinkTourDiaRings() {
        await ElementUtil.scrollIntoView(this.shopByNaturalGemstone, "scroll to pink Tourmaline rings")
        await ElementUtil.waitForClickable(this.pinkTourmalineRings, 20, "wait for page load")
        await ElementUtil.click(this.pinkTourmalineRings, "click pink tourmaline rings")
        await BrowserUtil.wait(5);
    }
    async morganiteDiaRings() {
        await ElementUtil.scrollIntoView(this.shopByNaturalGemstone, "scroll to morganite rings")
        await ElementUtil.waitForClickable(this.morganiteRings, 20, "wait for page load")
        await ElementUtil.click(this.morganiteRings, "click morganite rings")
        await BrowserUtil.wait(10);
    }
    async peridotDiaRings() {
        await ElementUtil.scrollIntoView(this.shopByNaturalGemstone, "scroll to peridot rings")
        await ElementUtil.waitForClickable(this.peridotRings, 20, "wait for page load")
        await ElementUtil.click(this.peridotRings, "click peridot rings")
        await BrowserUtil.wait(10);
    }
    async aquamarineDiaRings() {
        await ElementUtil.scrollIntoView(this.shopByNaturalGemstone, "scroll to aquamarine rings")
        await ElementUtil.waitForClickable(this.aquamarineRings, 20, "wait for page load")
        await ElementUtil.click(this.aquamarineRings, "click aquamarine rings")
        await BrowserUtil.wait(10);
    }
    async sectionFeatCateg() {
        await ElementUtil.scrollIntoView(this.featuredCategories, "hover to featured categories")
        await BrowserUtil.wait(5);
    }
    async ringFeatured() {
        await ElementUtil.waitForClickable(this.featuredCategoriesRings, 20, "wait for page load")
        await ElementUtil.click(this.featuredCategoriesRings, "click featured rings")
        await BrowserUtil.wait(5);
    }
    async earringFeatured() {
        await ElementUtil.waitForClickable(this.featuredCategoriesEarrings, 20, "wait for page load")
        await ElementUtil.click(this.featuredCategoriesEarrings, "click featured earrings")
        await BrowserUtil.wait(5);
    }
    async necklacesFeatured() {
        await ElementUtil.waitForClickable(this.featuredCategoriesNecklaces, 20, "wait for page load")
        await ElementUtil.click(this.featuredCategoriesNecklaces, "click featured necklaces")
        await BrowserUtil.wait(5);
    }
    async braceletsFeatured(){
        await ElementUtil.waitForClickable(this.featuredCategoriesBracelets, 20, "wait for page load")
        await ElementUtil.click(this.featuredCategoriesBracelets, "click featured bracelets")
        await BrowserUtil.wait(5);
    }
    async mensRingFeatured() {
        await ElementUtil.waitForClickable(this.featuredCategoriesMenRings, 20, "wait for page load")
        await ElementUtil.click(this.featuredCategoriesMenRings, "click featured mens rings")
        await BrowserUtil.wait(5);
    }
    async eternitybandsFeatured() {
        await ElementUtil.waitForClickable(this.featuredCategoriesEternityBands, 20, "wait for page load")
        await ElementUtil.click(this.featuredCategoriesEternityBands, "click featured mens rings")
        await BrowserUtil.wait(5);
    }
    async tellHerSection() {
        await ElementUtil.scrollIntoView(this.tellHerItsForever, "move to tell her section")
        await BrowserUtil.wait(5);
    }
    async tellHerGia() {
        await ElementUtil.waitForClickable(this.giaNaturalDiamonds,60,"wait for pageload")
        await ElementUtil.click(this.giaNaturalDiamonds, "click gia Natural Diamonds")
        await BrowserUtil.wait(8);
    }
    async tellHerIgi() {
        await ElementUtil.waitForClickable(this.igiLabDiamonds,60,"wait for pageload")
        await ElementUtil.click(this.igiLabDiamonds, "click IGI lab Diamonds")
        await BrowserUtil.wait(8);
    }
    async tellHerBeautiful() {
        await ElementUtil.waitForClickable(this.beautifulHandcraftesRing, 20, "wait for page load")
        await ElementUtil.click(this.beautifulHandcraftesRing, "click beautiful Handcrafted Ring ")
        await BrowserUtil.wait(5);
    }

    //Birthstone collection///////////////
    async clickbirthstoneCollection() {
        await ElementUtil.waitForClickable(this.optnBirthStoneCollection, 60, "wait for page load")
        await ElementUtil.click(this.optnBirthStoneCollection, "Clicking Birthstone Collection");
        await BrowserUtil.wait(5);
    }

    async clickCheckYourGemstone() {
        await ElementUtil.scrollIntoView(this.headingBirthstoneGuide, "Scroll to top")
        await ElementUtil.click(this.relationshipGemstone, "Clicking link of checking relationship gemstone");
        await ElementUtil.waitForDisplayed(this.sectionRelationshipGemstone, 50, "wait for page load")
    }

    async clickYourBirthMonth() {
        //await ElementUtil.scrollIntoView(this.drpYourBirthMonth, "Scroll to dropdown")
        await ElementUtil.click(this.drpYourBirthMonth, "Clicking the Your Birth Month Dropdown")
        await ElementUtil.click(this.yourBirthMonth, "Clicking March")
    }

    async clickYourBirthDate() {
        await ElementUtil.click(this.drpYourBirthDate, "Clicking the Your Birth Date Dropdown")
        await ElementUtil.click(this.yourBirthDay, "Clicking 10")
    }

    async clickYourPartnerBirthMonth() {
        await ElementUtil.click(this.drpYourPartnerBirthMonth, "Clicking the Your Partner Birth Month Dropdown")
        await ElementUtil.click(this.yourPartnerBirthMonth, "Clicking December")
    }

    async clickYourPartnerBirthDate() {
        await ElementUtil.click(this.drpYourPartnerBirthDate, "Clicking the Your Partner Birth Date Dropdown")
        await ElementUtil.click(this.yourPartnerBirthday, "Clicking 23")
        await ElementUtil.waitForDisplayed(this.imgDiamond, 10, "wait for page load")
        await ElementUtil.click(this.yourZodiac, "Clicking Pisces")
    }

    async enterPartnersEmail() {
        await ElementUtil.sendText(this.partnersEmailID, data.HomePageData.PartnersEmailID,"Entering email ID");
    }

    async clickSendButton() {
        await ElementUtil.click(this.btnSendEmail, "Clicking send button")
    }

    async clickShopZodiacGemstoneRings() {
        await ElementUtil.click(this.shopZodiacDiamondRings, "Clicking Shop Zodiac Diamond Rings")
        await BrowserUtil.wait(5);
    }

    async clickShopZodiacGemstoneNecklaces() {
        await ElementUtil.click(this.shopzodiacDiamondNecklaces, "Clicking Shop Zodiac Diamond Necklaces")
        await BrowserUtil.wait(5);
    }

    async clickShopZodiacGemstoneEarrings() {
        await ElementUtil.click(this.shopZodiacDiamondEarrings, "Clicking Shop Zodiac Diamond Earrings")
        await BrowserUtil.wait(5);
    }

    async scrollToShopByShape() {
        await ElementUtil.scrollIntoView(this.selectshape, "Scroll to Shop by Shape section")
    }

    async selectRoundCut() {
        await ElementUtil.waitForClickable(this.roundCut, 20, "wait for page load")
        await ElementUtil.click(this.roundCut, "Click round cut")
        await BrowserUtil.wait(5);
    }

    async selectOvalCut() {
        await ElementUtil.waitForClickable(this.ovalCut, 20, "wait for page load")
        await ElementUtil.click(this.ovalCut, "Click oval cut")
        await BrowserUtil.wait(5);
    }

    async selectCushionCut() {
        await ElementUtil.waitForClickable(this.cushionCut, 20, "wait for page load")
        await ElementUtil.click(this.cushionCut, "Click cushion cut")
        await BrowserUtil.wait(5);
    }

    async selectPrincessCut() {
        await ElementUtil.waitForClickable(this.princessCut, 20, "wait for page load")
        await ElementUtil.click(this.princessCut, "Click princess cut")
        await BrowserUtil.wait(5);
    }

    async selectEmeraldCut() {
        await ElementUtil.waitForClickable(this.emeraldCut, 20, "wait for page load")
        await ElementUtil.click(this.emeraldCut, "Click emerald cut")
        await BrowserUtil.wait(5);
    }

    async selectHeartCut() {
        await ElementUtil.waitForClickable(this.heartCut, 20, "wait for page load")
        await ElementUtil.click(this.heartCut, "Click heart cut")
        await BrowserUtil.wait(5);
    }

    async selectPearCut() {
        await ElementUtil.waitForClickable(this.pearCut, 20, "wait for page load")
        await ElementUtil.click(this.pearCut, "Click pear cut")
        await BrowserUtil.wait(5);
    }

    async scrollToMensRing() {
        await ElementUtil.scrollIntoView(this.mensRingImage, "Scroll to Men's ring section")
    }

    async clickSeeMensRing() {
        await ElementUtil.click(this.seeMensRing, "Click see men's ring")
        await BrowserUtil.wait(5);
    }

    async scrollToSeeGiftsForHer() {
        await ElementUtil.scrollIntoView(this.giftsForHer, "Scroll to gifts for her section")
    }

    async clickSeeGiftsForHer() {
        await ElementUtil.scrollIntoView(this.giftsForHer, "Scroll to gifts for her section")
        await BrowserUtil.wait(5);
        await ElementUtil.click(this.seeGiftsForHer, "Click see gifts for her")
        await BrowserUtil.wait(10);
    }

    async scrollToDiscoverDiamondere() {
        await ElementUtil.scrollIntoView(this.discoverDiamondere, "scroll to discover diamondere")
    }

    async clickOurLegacy() {
        await ElementUtil.click(this.ourLegacy, "Click our legacy")
        await BrowserUtil.wait(5);
    }

    async scrollToLetushelpguideyou() {
        await ElementUtil.scrollIntoView(this.letUsHelp, "scroll to let us help")
    }

    async clickBlogArticles() {
        await ElementUtil.click(this.blogArticles, "Click blog articles")
        await BrowserUtil.wait(5);
        await browser.switchWindow('https://www.diamondere.com/blog/')
    }

    async clicklabVsNaturalDiamondGuide() {
        await ElementUtil.waitForDisplayed(this.labVsNaturalDiamondGuideText, 10, "Verifying the text")
        await ElementUtil.click(this.labVsNaturalDiamondGuideLink, "Click Learn More")
        await BrowserUtil.wait(5);
    }

    async clickToiEtMoiGuide() {
        await ElementUtil.waitForDisplayed(this.toiEtMoiRingsText, 10, "Verifying the text")
        await ElementUtil.click(this.toiEtMoiRingsLink, "Click Learn More")
        await BrowserUtil.wait(5);
    }

    async clickEngagementRingCostGuide() {
        await ElementUtil.waitForDisplayed(this.engagementRingText, 10, "Verifying the text")
        await ElementUtil.click(this.engagementRingLink, "Click Learn More")
        await BrowserUtil.wait(5);
    }

    async scrollToDiamondereDifference() {
        await ElementUtil.scrollIntoView(this.expTheDiamondereText, "scroll to Diamondere Difference section")
    }

    async clickWhyDiamondereLink() {
        await ElementUtil.waitForDisplayed(this.qualityGuarenteedText, 10, "Verifying the text")
        await ElementUtil.click(this.whyDiamondereLink, "Click Why Diamondere")
        await BrowserUtil.wait(5);
    }

    async clickFAQsLink() {
        await ElementUtil.waitForDisplayed(this.complementaryCareText, 10, "Verifying the text")
        await ElementUtil.click(this.seeOurFAQs, "Click See our FAQs")
        await BrowserUtil.wait(5);
    }

    async clickSustainabilityLink() {
        await ElementUtil.waitForDisplayed(this.sustainabilityText, 10, "Verifying the text")
        await ElementUtil.click(this.sustainabilityLink, "Click Sustainability")
        await BrowserUtil.wait(5);
    }

    async clickContactUsLink() {
        await ElementUtil.waitForDisplayed(this.customerCareFirstText, 10, "Verifying the text")
        await ElementUtil.click(this.contactUsLink, "Click Contact Us")
        await BrowserUtil.wait(5);
    }

    async scrollToFindStyle() {
        await ElementUtil.scrollIntoView(this.myDiamondereLoveStory, "Scroll to find style that inspires you section")
    }

    async clickRubyRingImage() {
        await ElementUtil.click(this.rubyRingImage, "Click ruby ring image")
        await BrowserUtil.wait(5);
        await browser.switchWindow('https://www.instagram.com/diamondere/')
    }

    async movetofooter() {
        await ElementUtil.scrollIntoView(this.sctnFooter, "Scroll to footer")
    }
    async selectourlegacy() {
        await ElementUtil.click(this.lnkOurLegacy, "click ourlegacy")
        await BrowserUtil.wait(5);
    }
    async selectwhydiamondere() {
        await ElementUtil.click(this.lnkWhyDiamondere, "click whydiamondere")
        await BrowserUtil.wait(5);
    }
    async selectsustainability() {
        await ElementUtil.click(this.lnkSustainability, "click sustainability")
        await BrowserUtil.wait(5);
    }
    async selectringsreview() {
        await ElementUtil.click(this.lnkRingReviews, "click ringsreview")
        await BrowserUtil.wait(8);
    }
    async selectengagementreview() {
        await ElementUtil.click(this.lnkEngagementReviews, "click engagementreview")
        await BrowserUtil.wait(5);
    }
    async selectmensringreview() {
        await ElementUtil.click(this.lnkMensRingReviews, "click mensringreview")
        await BrowserUtil.wait(5);
    }
    async selectdiamondguide() {
        await ElementUtil.click(this.lnkDiamondGuide, "click diamondguide")
        await BrowserUtil.wait(5);
    }
    async selectcolorgemguide() {
        await ElementUtil.click(this.lnkColoredGemsGuide, "click colorgemguide")
        await BrowserUtil.wait(5);
    }
    async selectbirthstoneguide() {
        await ElementUtil.click(this.lnkBirthstonesGuide, "click birthstonguide")
        await BrowserUtil.wait(5);
    }
    async selectmetalguide() {
        await ElementUtil.click(this.lnkMetalGuide, "click metalguide")
        await BrowserUtil.wait(5);
    }
    async selectsizeguide() {
        await ElementUtil.click(this.lnkSizeGuide, "click sizeguide")
        await BrowserUtil.wait(5);
    }
    async selectfreeshipping() {
        await ElementUtil.click(this.lnkFreeShipping, "click freeshipping")
        await BrowserUtil.wait(5);
    }
    async selectfreereturn() {
        await ElementUtil.click(this.lnkFree100DayReturns, "click freereturn")
        await BrowserUtil.wait(5);
    }
    async selectfreewarranty() {
        await ElementUtil.click(this.lnkFreeWarranty, "click freewarranty")
        await BrowserUtil.wait(5);
    }
    async selectprivacypolicy() {
        await ElementUtil.click(this.lnkPrivacyPolicy, "click privacypolicy")
        await BrowserUtil.wait(5);
    }
    async selecttermsandcondition() {
        await ElementUtil.click(this.lnkTermsAndConditions, "click termsandcondition")
        await BrowserUtil.wait(5);
    }

    async selectAccessibility() {
        await ElementUtil.click(this.lnkAccessibility, "Select Accessibility link")
        await BrowserUtil.wait(5);
    }

    async selectContactUs() {
        await ElementUtil.click(this.lnkContactUs, "Select Contact Us link")
        await BrowserUtil.wait(5);
    }

    async selectFAQs() {
        await ElementUtil.click(this.lnkFAQs, "Select FAQs link")
        await BrowserUtil.wait(5);
    }

    async selectFinancingoptions() {
        await ElementUtil.click(this.lnkFinancingOptions, "Select Financing options link")
        await BrowserUtil.wait(5);
    }

    async selectFreeresizing() {
        await ElementUtil.click(this.lnkFreeResizing, "Select Financing options link")
        await BrowserUtil.wait(5);
    }

    async selectCaringforjewelry() {
        await ElementUtil.click(this.lnkCaringForYourJewelry, "Select Caring for your jewelry")
        await BrowserUtil.wait(5);
        await browser.switchWindow('https://www.diamondere.com/blog/tricks-to-keep-your-fine-jewelry-shining-forever/')
    }

    async jointheDiamondere() {
        await ElementUtil.scrollIntoView(this.sctnJoinDiamondereCommunity, "Scroll to Join the Diamondere community")
        await BrowserUtil.wait(5);
    }

    async selectemailaddress() {
        await ElementUtil.click(this.boxemailaddress, "Select email address field");
        await BrowserUtil.wait(5);
        await browser.switchWindow('https://mailchi.mp/diamondere/subscriptions?newsLetterMail=')
    }

    async selectdiamondereblog() {
        await ElementUtil.scrollIntoView(this.lnkDiamondereBlog, "Scroll to Diamondere Blog link")
        await ElementUtil.click(this.lnkDiamondereBlog, "Select the Diamondere Blog link")
        await BrowserUtil.wait(5);
        await browser.switchWindow('https://www.diamondere.com/blog/')
    }

    async selectInstaicon() {
        await ElementUtil.scrollIntoView(this.lnkInstgram, "Scroll to Instagram link")
        await ElementUtil.click(this.lnkInstgram, "Select the Instagram link")
        await BrowserUtil.wait(5);
        await browser.switchWindow('https://www.instagram.com/diamondere/')
    }

    async selectfbicon() {
        await ElementUtil.scrollIntoView(this.lnkFacebook, "Scroll to faceboom link")
        await ElementUtil.click(this.lnkFacebook, "Select the facebook link")
        await BrowserUtil.wait(5);
        await browser.switchWindow('https://www.facebook.com/Diamondere/')
    }

    async selectPinteresticon() {
        await ElementUtil.scrollIntoView(this.lnkPinterest, "Scroll to pinterest link")
        await ElementUtil.click(this.lnkPinterest, "Select the Pinterest link")
        await BrowserUtil.wait(5);
        await browser.switchWindow('https://www.pinterest.com/Diamondere/')
        await browser.back();
    }
    async clickAccredited(){
        await ElementUtil.scrollIntoView(this.sctnFooter, "Scroll to payment option")
        await ElementUtil.click(this.lnkDiamondereBBB, "Select the accredited link")
        await BrowserUtil.wait(8);
        await browser.switchWindow("https://www.bbb.org/us/ca/redwood-city/profile/jewelry-stores/diamondere-inc-1116-873976")
       
    }
    async clickNortonDigicert(){
        await browser.switchWindow("https://staging.diamondere.com/")
        await ElementUtil.scrollIntoView(this.sctnFooter, "Scroll to payment option")
        await ElementUtil.click(this.lnkDigicert, "Select the norton link")
        await BrowserUtil.wait(5);
        await browser.switchWindow("https://seal.digicert.com/seals/popup/?tag=bbpkGMsC&referer=www.diamondere.com&lang=en")
       
    }

    async clickStripe(){
        await browser.switchWindow("https://staging.diamondere.com/")
        await ElementUtil.scrollIntoView(this.sctnFooter, "Scroll to payment option")
        await ElementUtil.click(this.lnkStripe, "Select the stripe link")
        await BrowserUtil.wait(5);
        await browser.switchWindow("https://stripe.com/en-in")
        
    }

    async clickPaypal(){
        await browser.switchWindow("https://staging.diamondere.com/")
        await ElementUtil.scrollIntoView(this.sctnFooter, "Scroll to payment option")
        await ElementUtil.click(this.lnkPayPal, "Select the paypal link")
        await BrowserUtil.wait(5);
        await browser.switchWindow("https://www.paypal.com/in/home")
      
    }
    async clickAmericanexp(){
        await browser.switchWindow("https://staging.diamondere.com/")
        await ElementUtil.scrollIntoView(this.sctnFooter, "Scroll to payment option")
        await ElementUtil.click(this.lnkAmericanExpress, "Select the American express link")
        await BrowserUtil.wait(5);
        await browser.switchWindow("https://www.americanexpress.com/en-in/")
        
    }
    async clickMastercard(){
        await browser.switchWindow("https://staging.diamondere.com/")
        await ElementUtil.scrollIntoView(this.sctnFooter, "Scroll to payment option")
        await ElementUtil.click(this.lnkMasterCard, "Select the master card link")
        await BrowserUtil.wait(5);
        await browser.switchWindow("https://www.mastercard.co.in/en-in.html")
       
    }
    async clickDinersclub(){
        await browser.switchWindow("https://staging.diamondere.com/")
        await ElementUtil.scrollIntoView(this.sctnFooter, "Scroll to payment option")
        await ElementUtil.click(this.lnkDinersClub, "Select the diners club link")
        await BrowserUtil.wait(5);
        await browser.switchWindow("https://www.dinersclub.com/")
       
    }
    async clickAffirm(){
        await browser.switchWindow("https://staging.diamondere.com/")
        await ElementUtil.scrollIntoView(this.sctnFooter, "Scroll to payment option")
        await ElementUtil.click(this.lnkAffirm, "Select the affirm link")
        await BrowserUtil.wait(5);
        await browser.switchWindow("https://www.affirm.com/")
       
    }

    async clickDisclaimer(){
        await ElementUtil.scrollIntoView(this.sctnCopyright, "Scroll to disclaimer")
        await ElementUtil.click(this.lnkDisclaimer, "Select the disclaimer link")
        await BrowserUtil.wait(5);
        await browser.switchWindow("https://staging.diamondere.com/information/disclaimer")
    }



}
module.exports = Homepage
