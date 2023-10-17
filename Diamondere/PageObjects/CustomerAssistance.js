const ElementUtil = require('../../CommonUtils/ElementUtil');
const BrowserUtil = require('../../CommonUtils/BrowserUtil');
const data = require('../TestData/CustomerAssistance.json');
const context = require('../../CommonUtils/ScenarioContext');
const dmd = require('../Configs/dmd_' + global.testEnv + '.js');
// const imageJpg = require('../TestData/Images/11.jpg');
// const imagePng = require('../TestData/Images/amina_wg_pt_0.png')

class CustomerAssistance {
    get headerDiamondere() {
        return $('//div[@id="diamondere-menu"]')
    }

    get sctnFooter() {
        return $('//div[@class="has-text-centered"]');
    }

    // Request Call Back
    get ccrequestcallback() {
        return $('//a[@title="Request Call Back"]')
    }

    get imgBanner() {
        return $('//div[@class="contact-banner m-b-10"]')
    }

    get headingReqCallBack() {
        return $('//h1[@class="p-b-5 has-text-weight-semibold bottom-border is-uppercase corner-gaps"]')
    }

    get sctnReqCallBackForm() {
        return $('//div[@class="columns is-gapless p-5-touch corner-gaps m-l-10 m-r-10"]')
    }

    get txtBoxName() {
        return $('//input[@id="contact_us_name"]')
    }

    get txtBoxPhone() {
        return $('//input[@id="contact_us_phone"]')
    }

    get txtBoxEmail() {
        return $('//input[@id="contact_us_email"]')
    }

    get msgNameMandatory() {
        return $('//p[text()=" Please enter your name "]')
    }

    get msgInvalidName() {
        return $('//p[text()=" Please do not input any characters other than letters and space "]')
    }

    get msgPhoneMandatory() {
        return $('//p[text()=" Please enter your Phone Number "]')
    }

    get msgInvalidPhone() {
        return $('//p[text()=" Valid values for Phone Number are +(0-9) and space "]')
    }

    get btnReqCallBack() {
        return $('//button[contains(text(),"REQUEST CALL BACK")]')
    }

    get sctnTollFreeNumber() {
        return $('//p[contains(text(),"US Toll Free")]')
    }

    get lnkTollFreeNumber() {
        return $('//b[contains(text(),"1-844-400-0065")]')
    }

    get sctnDiamondereEmailDetails() {
        return $('//span[contains(text(),"you can email us")]')
    }

    get lnkDiamondereEmailID() {
        return $('//b[text()="contactus@diamondere.com"]')
    }

    // Checkout - Request Call Back
    get btnAddToCartNormal() {
        return $('//div[@class="is-flex is-justified-end"]//button[text()="ADD TO CART"]')
    }

    get btnProceedToPayment() {
        return $('//div[@class="is-size-4 has-text-weight-semibold"]//button[contains(text(),"PROCEED TO PAYMENT")]')
    }

    get lnkReqCallBack() {
        return $('//div[@title="Toll Free Contact"]')
    }

    get frameReqCallBack() {
        return $('//iframe[@src="information/toll-free-contact?dynamic=true"]')
    }

    get popupContactForm() {
        return $('//div[@class="card-content has-text-centered p-t-40 p-l-5-mob p-r-5-mob"]')
    }

    get popupContactFormXbtn() {
        return $('//span[@class="material-icons is-pulled-right is-clickable icon-box m-t-10 m-b-5 m-r-25 m-r-5-mob"]')
    }

    get imgLogoInPopup() {
        return $('//img[@alt="logo"]')
    }

    get popupSuccess() {
        return $('//p[text()="Success"]')
    }

    get popupSuccessText() {
        return $('//p[text()="Your request has been registered. Thank you for visiting us."]')
    }

    // Email Us & Contact Us
    get ccWriteToUs() {
        return $('//p[text()="WRITE TO US"]')
    }

    get lnkContactUsFooter() {
        return $('//div[@class="footer-col2 p-t-15-tab is-hidden-mobile"]//span[text()="Contact us"]')
    }

    get headingContactUs() {
        return $('//h1[@class="is-size-3 header-contact-us has-text-centered p-b-30 prata-font-style p-l-55-mob p-r-55-mob"]')
    }

    get sctnInstructionsContactUs() {
        return $('//div[@class="column is-6 is-12-mobile contact-us-bgr has-text-centered-mobile"]')
    }

    get txtHappyToAssistYou() {
        return $('//p[contains(text(),"happy to assist")]')
    }

    get sctnEmailUs() {
        return $('//p[text()="Email Us"]/parent::div')
    }

    //Email ID link xpath -> Use lnkDiamondereEmailID() in Request Call Back

    get lnkEmailUsNow() {
        return $('//p[contains(text(),"Email us now")]')
    }

    get sctnCallUs() {
        return $('//p[text()="Call Us"]/parent::div')
    }

    get lnkCallUsNumber() {
        return $('//u[contains(text(),"1-844-400-0065")]')
    }

    get lnkOrRequestACallBack() {
        return $('//p[contains(text(),"Or request a call back")]')
    }

    get sctnStartADesign() {
        return $('//p[text()="Start A Design"]/parent::div')
    }

    get lnkLearnMoreStartADesign() {
        return $('//p[@class="link-info sub-title contact-address has-text-weight-semibold" and contains(text(),"Learn More")]')
    }

    get sctnCorporateAddress() {
        return $('//p[text()="Corporate Address"]/parent::div')
    }

    get sctnFormContactUs() {
        return $('//div[@class="p-l-50 p-r-50 p-b-30 p-l-25-mob p-r-25-mob p-t-50"]')
    }

    //Name textbox -> Use txtBoxName(), msgNameMandatory(), msgInvalidName() in Request Call Back

    //Email textbox -> Use txtBoxEmail() in Request Call Back

    get msgEmailMandatory() {
        return $('//p[text()=" Please enter your Email Address "]')
    }

    get msgInvalidEmail() {
        return $('//p[contains(text(),"Email Address format is invalid")]')
    }

    //Phone textbox -> Use txtBoxPhone(), msgPhoneMandatory(), msgInvalidPhone() in Request Call Back

    get txtBoxMessage() {
        return $('//textarea[@id="request_query"]')
    }

    get textCharLimitMessageInvisible() {
        return $('//small[text()=" 0 / 400 "]')
    }

    get msgInvalidMessage() {
        return $('//p[text()=" Please do not input any characters other than letters, numbers, special characters and space "]')
    }

    get btnUploadImage() {
        return $('//span[text()=" Upload Image (Optional) "]')
    }

    get inputFile() {
        return $('//input[@type="file"]')
    }

    get txtFileFormat() {
        return $('//p[contains(text(),"Only JPG/PDF")]')
    }

    get popupErrorWrongFileUpload() {
        return $('//p[contains(text(),"Please try again in the format prescribed")]')
    }

    get btnSubmitContactForm() {
        return $('//button[contains(text(),"Submit Contact Form")]')
    }

    get sctnGetToKnowUs() {
        return $('//div[@class="bgr-light-grey p-t-45 p-b-50"]')
    }

    get sctnFAQs() {
        return $('//section[@class="m-b-20 m-t-50"]')
    }

    get headingFAQs() {
        return $('//h2[contains(text(),"Questions")]')
    }

    get btnPlusFAQ1() {
        return $('//p[text()="What quality are your gemstones?"]/parent::div/span//img[@alt="plus"]')
    }

    get txtAnsFAQ1() {
        return $('//p[text()="What quality are your gemstones?"]/parent::div/following-sibling::div/div[@class="faq-ans"]')
    }

    get lnkReadMoreFAQ1() {
        return $('//p[text()="What quality are your gemstones?"]/parent::div/following-sibling::div/div//p[@class="link-info link-underlined call-to-action"]')
    }

    get sctnWhyChooseDiamondere() {
        return $('//div[@class="bgr-beige has-text-centered p-t-50 p-b-50 m-t-50"]')
    }

    get headingWhyChooseDiamondere() {
        return $('//h2[text()="Why Choose Diamondère For Your Fine Jewelry?"]')
    }

    get sctnLegacyOfExcellence() {
        return $('//a[@title="LEGACY OF EXCELLENCE"]/parent::div')
    }

    get lnkLearnMoreLegacyOfExcellence() {
        return $('//a[@title="LEGACY OF EXCELLENCE"]//p[@class="font-fine-jewelry has-text-weight-semibold"]')
    }

    get sctnCustomMade() {
        return $('//a[@title="CUSTOM-MADE"]/parent::div')
    }

    get lnkLearnMoreCustomMade() {
        return $('//a[@title="CUSTOM-MADE"]//p[@class="font-fine-jewelry has-text-weight-semibold"]')
    }

    get sctnFairPrices() {
        return $('//a[@title="FAIR PRICES"]/parent::div')
    }

    get lnkLearnMoreFairPrices() {
        return $('//a[@title="FAIR PRICES"]//p[@class="font-fine-jewelry has-text-weight-semibold"]')
    }

    get sctnResizing() {
        return $('//a[@title="RESIZING"]/parent::div')
    }

    get lnkLearnMoreResizing() {
        return $('//a[@title="RESIZING"]//p[@class="font-fine-jewelry has-text-weight-semibold"]')
    }

    get sctnInspiredOnInstagram() {
        return $('//div[@class="m-t-40 m-b-50 has-text-centered"]')
    }

    get headingInspiredOnInstagram() {
        return $('//h2[text()="Come Be Inspired On Instagram"]')
    }

    get sctnInstagramImageLinks() {
        return $('//div[@class="columns is-multiline m-l-0 m-r-0 p-l-100 p-r-100 p-t-40 p-l-40-touch p-r-40-touch"]')
    }

    get lnkImageInstagram() {
        return $('(//img[@alt="instagram images"])[1]')
    }

    // Checkout - Email Us
    get frameContactUs() {
        return $('//iframe[@src="/information/contact-us?dynamic=true"]')
    }

    get lnkCheckoutEmailUs() {
        return $('//div[@class="is-flex is-justified-end is-size-7"]//div[@title="Contact Form"]')
    }

    //Contact Us popup -> Use popupContactForm(), popupContactFormXBtn(), imgLogoInPopup() in Request Call Back


    // Join Diamondere Community
    get headingJoinDCommunity() {
        return $('//div[@class="news-link-header has-text-weight-semibold p-b-0-touch m-t-12-desk"]')
    }

    get txtJoinDCommunity() {
        return $('//div[@class="newsletter-text p-r-30-desk p-t-10-touch p-b-18-touch p-b-15 p-l-5-mob has-text-left has-text-centered-tablet-only"]')
    }

    get txtBoxEmailJoinDCommunity() {
        return $('//input[@id="news-letter_email"]')
    }

    get btnSubmitJoinDCommunity() {
        return $('//button[@name="btn-newsletter"]')
    }

    get imgDiamondereLogo() {
        return $('//img[@src="https://mcusercontent.com/33f305ad42674be0c5153a222/images/7688ff8f-8755-4956-de62-62dd18e6fc98.png"]')
    }

    get imgJoinDCommunityBanner() {
        return $('//img[@src="https://mcusercontent.com/33f305ad42674be0c5153a222/images/22e6e8e2-c6cd-6f40-0d03-1c325ac77e9f.jpg"]')
    }

    get headingLetsStayConnected() {
        return $('//h1[text()="Let\'s Stay Connected"]')
    }

    get txtJoinOurEmailList() {
        return $('//p[contains(text(),"Join our email list")]')
    }

    get sctnJoinDCommnityForm() {
        return $('//div[@class="mcnSignUpBlockContentContainer"]')
    }

    get lblEmailAddress() {
        return $('//label[@for="mc-EMAIL"]')
    }

    get txtBoxEmailAddress() {
        return $('//input[@name="EMAIL"]')
    }

    get lblFirstName() {
        return $('//label[@for="mc-FNAME"]')
    }

    get txtBoxFirstName() {
        return $('//input[@name="FNAME"]')
    }

    get lblBirthday() {
        return $('//label[@for="mc-BDAY-month"]')
    }

    get txtBoxBirthMonth() {
        return $('//input[@id="mc-BDAY-month"]')
    }

    get txtBoxBirthDate() {
        return $('//input[@id="mc-BDAY-day"]')
    }

    get btnSignMeUp() {
        return $('//input[@value="Sign Me Up!"]')
    }

    get msgEmailAddressRequired() {
        return $('//div[@id="uniqName_8_0"]//div[text()="This field is required."]')
    }

    get msgInvalidEmailAddress() {
        return $('//div[text()="Please enter a valid email address."]')
    }

    get msgErrorEmailAddress() {
        return $ ('//div[contains(text(),"has too many recent signup requests")]')
    }

    get msgFirstNameRequired() {
        return $('//div[@id="uniqName_8_1"]//div[text()="This field is required."]')
    }

    get msgInvalidBirthday() {
        return $('//div[text()="Please enter a valid birthday."]')
    }

    get msgSuccessSubmit() {
        return $('//span[text()="Success—you\'ve been added to the list! You\'ll be hearing from us soon."]')
    }


    // May We Assist You?
    get btnMayWeAssistYou() {
        return $('//div[@class="chat-circle is-hidden-mobile"]')
    }

    get popupMayWeAssistYou() {
        return $('//div[@id="chatform"]')
    }

    get popupMayWeAssistYouCloseBtn() {
        return $('//div[@aria-label="close button"]')
    }

    get popupImgDiamondereLogo() {
        return $('//img[@alt="Diamondere"]')
    }

    get headingCustomerCare() {
        return $('//p[@class="m-t-25"]')
    }

    get txtMayWeAssistYou() {
        return $('//p[@class="m-t-15 is-size-7 letter-space-0"]')
    }

    get txtBoxAssistName() {
        return $('//input[@id="assist_name"]')
    }

    get txtBoxAssistEmail() {
        return $('//label[@for="assist_email"]')
    }

    get txtBoxAssistQuery() {
        return $('//label[@for="assist_query"]')
    }

    get msgAssistNameMandatory() {
        return $('//label[@for="assist_name"]/parent::div//p[text()=" All fields are mandatory "]')
    }

    //Name textbox -> Use msgInvalidName() in Request Call Back

    //Email textbox -> Use msgInvalidEmail() in Request Call Back

    get msgAssistEmailMandatory() {
        return $('//label[@for="assist_email"]/parent::div//p[text()=" All fields are mandatory "]')
    }

    get msgAssistQueryMandatory() {
        return $('//label[@for="assist_query"]/parent::div//p[text()=" All fields are mandatory "]')
    }

    get btnAssistSubmit() {
        return $('//button[text()="SUBMIT"]')
    }

    get btnAssistCancel() {
        return $('//button[contains(text(),"CANCEL")]')
    }

    get popupAssistSuccess() {
        return $('//p[contains(text(),"Diamondere consultant will email")]')
    }

    // Success popup - Use popupXBtn() in Email Us & Contact Us


    // Share Product
    get sctnSocialShares() {
        return $('//div[@class="is-inline-block wd-100 m-t-20 is-hidden-touch"]')
    }

    get lnkEmailThisDesign() {
        return $('//div[@class="images-social-group"]//span[@title="Email this design"]')
    }

    get lnkPinThisDesign() {
        return $('//div[@class="images-social-group"]//a[@title="Pin it"]')
    }

    get lnkFBShareThisDesign() {
        return $('//div[@class="images-social-group"]//a[@title="Share on Facebook"]')
    }

    get sctnShareProductForm() {
        return $('//div[@class="has-text-centered m-b-20"]')
    }

    get imgProductToBeShared() {
        return $('//img[@itemprop="image"]')
    }

    get imgMiyaShareProduct() {
        return $('//img[@src="https://images.diamondere.com/new_images/products/miya/miya_wg_em_0.jpg"]')
    }

    get txtTellAFriend() {
        return $('//p[text()="TELL A FRIEND ABOUT"]')
    }

    get txtProductToBeSharedName() {
        return $('//p[@class="has-text-primary has-text-semibold is-size-5 m-b-10"]')
    }

    get txtBoxYourName() {
        return $('//input[@name="tellAfriends"]')
    }

    get txtBoxYourEmail() {
        return $('//input[@name="tellAfriendEmail"]')
    }

    get txtBoxYourFriendName() {
        return $('//input[@name="tellAyourFriends"]')
    }

    get txtBoxYourFriendEmail() {
        return $('//input[@name="tellAfriendFriendEmail"]')
    }

    // Your Name textbox -> Use msgNameMandatory() and msgInvalidName() in Request Custom Order

    // Your Email textbox -> Use msgEmailMandatory() and msgInvalidEmail() in Email Us & Contact Us

    get msgFriendNameMandatory() {
        return $('//p[text()=" Please enter your friend\'s name "]')
    }

    // Your Friend's Name textbox -> Use msgInvalidName() in Request Custom Order

    get msgFriendEmailMandatory() {
        return $('//p[text()=" Please enter your friend\'s Email Address "]')
    }

    // Your Friend's Email textbox -> Use msgInvalidEmail() in Email Us & Contact Us

    get btnSendToAFriend() {
        return $('//button[contains(text(),"SEND TO A FRIEND")]')
    }

    get popupShareSuccess() {
        return $('//p[contains(text(),"sent an email to your friend")]')
    }

    // Success popup - Use popupXBtn() in Email Us & Contact Us


    //Read Review
    get txtReadReview() {
        return $('//span[@class="read-reviews-text"]')
    }

    get linkAccredited() {
        return $('//a[@title="Diamondere-inc In CA"]')
    }

    get bannerReadReviews() {
        return $('//div[@class="has-text-centered m-t-10"]//p[contains(text(),"READ REVIEWS FOR")]')
    }

    get bnnrStarRating() {
        return $('//div[@class="subtitle is-size-6 is-uppercase"]//span[@class="vue-star-rating vue-star-rating-inline"]')
    }

    get bnrRCandWAR() {
        return $('//div[@id="reviewSection"]')
    }

    get txtRecentlyPurchased() {
        return $('//p[contains(text(),"RECENTLY PURCHASED THE")]')
    }

    get btnWriteAReview() {
        return $('//button[@class="button is-pulled-right-tablet m-t-5 is-inline-block-tablet"]')
    }

    get popupWrtARev() {
        return $('//div[@class="card-content"]')
    }

    get imgRevProd() {
        return $('//img[@itemprop="image"]')
    }


    //review popup////
    get txtWriteARev() {
        return $('//p[@id="reviewForm" and contains(text(),"Write a Review For")]')
    }
    get txtUrRating() {
        return $('//p[@class="has-text-weight-semibold" and contains(text(),"Your rating")]')
    }
    get starRating() {
        return $('//div[@class="m-b-15"]//span[4]//*[name()="svg"]')///four rating//
    }
    get sctnRevForm() {
        return $('//form[@data-vv-scope="writeReviewValidation"]')
    }
    get nameRevForm() {
        return $('//input[@data-vv-name="writeReviewName"]')
    }
    get emailRevForm() {
        return $('//input[@data-vv-name="writeReviewEmail"]')
    }
    get locationRevForm() {
        return $('//label[@for="review_location"]')
    }
    get titleRevForm() {
        return $('//label[@for="review_title"]')
    }
    get urRevCommnts() {
        return $('//textarea[@id="review_comments"]')
    }
    get msgMndtryRating() {
        return $('//p[@class="is-size-7 has-text-danger" and contains(text(),"Please enter your rating")]')
    }
    get msgMndtryName() {
        return $('//p[contains(text(),"Please enter your name")]')
    }
    get msgMndtryEmail() {
        return $('//p[contains(text(),"Please enter your Email Address")]')
    }
    get msgMndtryLocatn() {
        return $('//p[contains(text(),"Please enter your location")]')
    }
    get msgMndtryRevTitle() {
        return $('//p[contains(text(),"Please enter the subject")]')
    }
    get msgMndtryRevCmnts() {
        return $('//p[contains(text(),"Please enter comments")]')
    }
    get msgInvalidname() {
        return $('//p[contains(text(),"Please do not input any characters other than lett")]')
    }
    get msgInvalidEmailRev() {
        return $('//p[contains(text(),"The Email Address format is invalid (A valid email")]')
    }
    get msgInvalidLoctn() {
        return $('//div[@class="column p-b-0-touch m-b-10-touch"]//p[@class="help is-danger"][contains(text(),"Please do not input any characters other than lett")]')
    }
    get msgInvalidRevtitle() {
        return $('//div[@class="field-container m-b-14 m-b-10-touch"]//p[@class="help is-danger"][contains(text(),"Please do not input any characters other than lett")]')
    }
    get msgInvalidRevCmnts() {
        return $('//div[@class="field-container m-b-25"]//p[@class="help is-danger"][contains(text(),"Please do not input any characters other than lett")]')
    }
    get btnSbmtRev() {
        return $('//button[@type="submit"]')
    }
    get btnCloseWAR() {
        return $('//span[@class="material-icons md-17"][contains(text(),"")]')
    }
    get msgSuccessSubmtRev() {
        return $('//header[@class="message-header"]//p[contains(text(),"Success")]')
    }
    get msgSucc() {
        return $('//p[contains(text(),"Your review comment has been saved.")]')
    }
    get btnCloseSucc() {
        return $('//button[@aria-label="Close"]')
    }

    ///Review screening///
    get txtRevBy() {
        return $('//p[@class="subtitle is-size-6 has-text-primary" and contains(text(),"REVIEWED BY")]')
    }
    get columnReadRev() {
        return $('//div[@class="columns ratings p-b-10"][1]//div[@class="columns ratings p-b-10"]//span[@class="vue-star-rating"]')
    }
    get txtReadRevAll() {
        return $('//p[@class="title is-size-4 is-uppercase" and contains(text(),"ALL")]')
    }
    get txtRevByAll() {
        return $('//p[@class="subtitle is-size-7 has-text-primary" and contains(text(),"REVIEWED")]')
    }
    get columnRevByAll() {
        return $('//div[@class="columns ratings"][1]//div[@class="column p-t-0 is-3"]//span[@class="vue-star-rating"]')
    }
    get btnViewAll() {
        return $('//a[@class="button is-uppercase overflow-text-dots" and contains(text(),"View all")]')
    }


    //METHODS
    selectRequestCallBack() {
        ElementUtil.click(this.ccrequestcallback, "Select Request Call Back")
        BrowserUtil.wait(5)
    }

    enterNameRCB() {
        ElementUtil.sendText(this.txtBoxName, data.RequestCallBack.Name, "Entering name")
    }

    enterPhoneRCB() {
        ElementUtil.sendText(this.txtBoxPhone, data.RequestCallBack.Phone, "Entering phone")
    }

    enterEmailRCB() {
        ElementUtil.sendText(this.txtBoxEmail, data.RequestCallBack.Email, "Entering email")
    }

    selectBtnRCB() {
        ElementUtil.click(this.btnReqCallBack, "Click button")
    }

    enterInvalidNameRCB() {
        ElementUtil.sendText(this.txtBoxName, data.RequestCallBack.InvalidName1, "Entering invalid name 1")
        ElementUtil.isVisible(this.msgInvalidName, "Check invalid name message")
        ElementUtil.click(this.txtBoxName, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxName, data.RequestCallBack.InvalidName2, "Entering invalid name 2")
        ElementUtil.isVisible(this.msgInvalidName, "Check invalid name message")
        ElementUtil.click(this.txtBoxName, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxName, data.RequestCallBack.InvalidName3, "Entering invalid name 3")
        ElementUtil.isVisible(this.msgInvalidName, "Check invalid name message")
        ElementUtil.click(this.txtBoxName, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxName, data.RequestCallBack.InvalidName4, "Entering invalid name 4")
        
    }

    enterInvalidPhoneRCB() {
        ElementUtil.sendText(this.txtBoxPhone, data.RequestCallBack.InvalidPhone, "Entering invalid phone")
    }

    enterCCPhoneRCB() {
        ElementUtil.sendText(this.txtBoxPhone, data.RequestCallBack.CCPhone, "Entering phone number with country code")
    }

    enterInvalidEmailRCB() {
        ElementUtil.sendText(this.txtBoxEmail, data.RequestCallBack.InvalidEmail1, "Entering invalid email 1")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.click(this.txtBoxEmail, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxEmail, data.RequestCallBack.InvalidEmail2, "Entering invalid email 2")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.click(this.txtBoxEmail, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxEmail, data.RequestCallBack.InvalidEmail3, "Entering invalid email 3")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.click(this.txtBoxEmail, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxEmail, data.RequestCallBack.InvalidEmail4, "Entering invalid email 4")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.click(this.txtBoxEmail, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxEmail, data.RequestCallBack.InvalidEmail5, "Entering invalid email 5")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.click(this.txtBoxEmail, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxEmail, data.RequestCallBack.InvalidEmail6, "Entering invalid email 6")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.click(this.txtBoxEmail, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxEmail, data.RequestCallBack.InvalidEmail7, "Entering invalid email 7")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.click(this.txtBoxEmail, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxEmail, data.RequestCallBack.InvalidEmail8, "Entering invalid email 8")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.click(this.txtBoxEmail, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxEmail, data.RequestCallBack.InvalidEmail9, "Entering invalid email 9")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.click(this.txtBoxEmail, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxEmail, data.RequestCallBack.InvalidEmail10, "Entering invalid email 10")
    }

    clickAddToCartMiya() {
        BrowserUtil.wait(2)
        ElementUtil.waitForClickable(this.btnAddToCartNormal, 50, "wait for page load")
        ElementUtil.click(this.btnAddToCartNormal, "Click Add to cart")
    }

    clickProceedToPayment() {
        BrowserUtil.wait(8)
        ElementUtil.waitForClickable(this.btnProceedToPayment, 120, "wait for page load")
        ElementUtil.click(this.btnProceedToPayment, "Click proceed to payment")
        BrowserUtil.wait(5)
    }

    selectReqCallBackLink() {
        ElementUtil.click(this.lnkReqCallBack, "Click request call back link in checkout page")
        ElementUtil.isVisible(this.popupContactForm, "Check the popup")
        ElementUtil.isVisible(this.popupContactFormXbtn, "Check the popup X button")
    }

    clickReqCallBackLink() {
        ElementUtil.click(this.lnkReqCallBack, "Click request call back link in checkout page")
        BrowserUtil.switchToFrame(this.frameReqCallBack, "switch to frame")
    }

    closeReqCallBackPopup() {
        ElementUtil.click(this.popupContactFormXbtn, "Click X button")
    }

    enterExceedCharLimitNameRCB() {
        ElementUtil.sendText(this.txtBoxName, data.RequestCallBack.ExceedCharLimitName, "Entering name exceeding char limit")
    }

    enterExceedCharLimitPhoneRCB() {
        ElementUtil.sendText(this.txtBoxPhone, data.RequestCallBack.ExceedCharLimitPhone, "Entering phone exceeding char limit")
    }

    enterExceedCharLimitEmailRCB() {
        ElementUtil.sendText(this.txtBoxEmail, data.RequestCallBack.ExceedCharLimitEmail, "Entering email exceeding char limit")
    }

    selectWriteToUs() {
        ElementUtil.click(this.ccWriteToUs, "Select Write To Us")
        BrowserUtil.wait(3)
    }

    selectContactUs() {
        browser.back()
        BrowserUtil.wait(5)
        ElementUtil.scrollIntoView(this.sctnFooter, "Scroll to footer")
        ElementUtil.click(this.lnkContactUsFooter, "Click Contact Us")
        BrowserUtil.wait(5)
    }

    enterMessage() {
        ElementUtil.sendText(this.txtBoxMessage, data.ContactUs.Message, "Entering message")
    }

    uploadImage() {
        ElementUtil.uploadFile(this.inputFile, this.btnUploadImage,dmd.config.imageJpg, "Uploading image")
    }

    clickSubmitContactForm() {
        ElementUtil.click(this.btnSubmitContactForm, "Click submit")
    }

    enterRestrictedChar() {
        ElementUtil.sendText(this.txtBoxMessage, data.ContactUs.RestrictedCharMessage, "Entering restricted characters")
    }

    clickEmailUsNowLink() {
        ElementUtil.click(this.lnkEmailUsNow, "Click Email Us Now")
    }

    clickOrRequestACallBack() {
        ElementUtil.click(this.lnkOrRequestACallBack, "Click or request a call back")
    }

    clickLearnMoreStartADesignLink() {
        ElementUtil.scrollIntoView(this.lnkEmailUsNow, "Scroll to Learn More link")
        ElementUtil.click(this.lnkLearnMoreStartADesign, "Click Learn More")
    }

    expandFAQ1() {
        ElementUtil.scrollIntoView(this.sctnGetToKnowUs, "Scroll to FAQ section")
        ElementUtil.isVisible(this.sctnFAQs, "Check FAQ section")
        ElementUtil.isVisible(this.headingFAQs, "Check FAQ heading")
        ElementUtil.click(this.btnPlusFAQ1, "Expand FAQ 1")
    }

    clickLearnMoreLegacyOfExcellence() {
        ElementUtil.scrollIntoView(this.headingWhyChooseDiamondere, "Scroll to Why Choose Diamondere section")
        ElementUtil.click(this.lnkLearnMoreLegacyOfExcellence, "Click learn more")
        BrowserUtil.wait(5)
    }

    clickLearnMoreCustomMade() {
        browser.back()
        ElementUtil.click(this.lnkLearnMoreCustomMade, "Click learn more")
        BrowserUtil.wait(5)
    }

    clickLearnMoreFairPrices() {
        browser.back()
        ElementUtil.click(this.lnkLearnMoreFairPrices, "Click learn more")
        BrowserUtil.wait(5)
    }

    clickLearnMoreResizing() {
        browser.back()
        ElementUtil.click(this.lnkLearnMoreResizing, "Click learn more")
        BrowserUtil.wait(5)
    }

    clickImageInstagram() {
        ElementUtil.scrollIntoView(this.headingWhyChooseDiamondere, "Scroll to Why Choose Diamondere section")
        ElementUtil.click(this.lnkImageInstagram, "Click image")
        browser.switchWindow(dmd.config.instagramUrl)
    }

    selectEmailUsNowLinkCheckout() {
        ElementUtil.click(this.lnkCheckoutEmailUs, "Click Email Us Now")
        ElementUtil.isVisible(this.popupContactForm, "Check the popup")
        ElementUtil.isVisible(this.popupContactFormXbtn, "Check the popup X button")
    }

    clickEmailUsNowLinkCheckout() {
        ElementUtil.click(this.lnkCheckoutEmailUs, "Click Email Us Now")
        BrowserUtil.switchToFrame(this.frameContactUs, "switch to frame")
    }

    uploadInvalidImageFormat() {
        ElementUtil.uploadFile(this.inputFile, this.btnUploadImage, dmd.config.imagePng, "Uploading invalid image format")
    }

    scrollToFooter() {
        ElementUtil.scrollIntoView(this.sctnFooter, "Scroll to footer")
    }

    clickEmailJoinDmdCommunity() {
        ElementUtil.click(this.txtBoxEmailJoinDCommunity, "Click Email field")
        browser.switchWindow(dmd.config.joinDiamondereCommunityUrl)
    }

    enterEmailJoinDmd() {
        let randomInt = Math.floor(Math.random() * 99999)
        let email = 'litefuryautomation' + randomInt + '@litefury.com'
        ElementUtil.sendText(this.txtBoxEmailAddress, email, "Entering the email");
    }

    enteralreadyRegEmail() {
        ElementUtil.sendText(this.txtBoxEmailAddress, data.JoinDiamondereCommunity.AlreadyRegEmail, "Enter already registered email")
    }

    enterFirstNameJoinDmd() {
        ElementUtil.sendText(this.txtBoxFirstName, data.JoinDiamondereCommunity.FirstName, "Enter first name")
    }

    enterBirthMonthJoinDmd() {
        ElementUtil.sendText(this.txtBoxBirthMonth, data.JoinDiamondereCommunity.BirthMonth, "Enter birth month")
    }

    enterBirthDateJoinDmd() {
        ElementUtil.sendText(this.txtBoxBirthDate, data.JoinDiamondereCommunity.BirthDate, "Enter birth date")
    }

    clickSignMeUp() {
        ElementUtil.click(this.btnSignMeUp, "Click sign me up")
    }

    enterInvalidEmailJoinDmd() {
        ElementUtil.sendText(this.txtBoxEmailAddress, data.RequestCallBack.InvalidEmail1, "Entering invalid email 1")
        ElementUtil.isVisible(this.msgInvalidEmailAddress, "Check invalid email message")
        ElementUtil.click(this.txtBoxEmailAddress, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxEmailAddress, data.RequestCallBack.InvalidEmail2, "Entering invalid email 2")
        ElementUtil.isVisible(this.msgInvalidEmailAddress, "Check invalid email message")
        ElementUtil.click(this.txtBoxEmailAddress, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxEmailAddress, data.RequestCallBack.InvalidEmail3, "Entering invalid email 3")
        ElementUtil.isVisible(this.msgInvalidEmailAddress, "Check invalid email message")
        ElementUtil.click(this.txtBoxEmailAddress, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxEmailAddress, data.RequestCallBack.InvalidEmail4, "Entering invalid email 4")
        ElementUtil.isVisible(this.msgInvalidEmailAddress, "Check invalid email message")
        ElementUtil.click(this.txtBoxEmailAddress, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxEmailAddress, data.RequestCallBack.InvalidEmail5, "Entering invalid email 5")
        ElementUtil.isVisible(this.msgInvalidEmailAddress, "Check invalid email message")
        ElementUtil.click(this.txtBoxEmailAddress, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxEmailAddress, data.RequestCallBack.InvalidEmail6, "Entering invalid email 6")
        ElementUtil.isVisible(this.msgInvalidEmailAddress, "Check invalid email message")
        ElementUtil.click(this.txtBoxEmailAddress, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxEmailAddress, data.RequestCallBack.InvalidEmail7, "Entering invalid email 7")
        ElementUtil.isVisible(this.msgInvalidEmailAddress, "Check invalid email message")
        ElementUtil.click(this.txtBoxEmailAddress, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxEmailAddress, data.RequestCallBack.InvalidEmail8, "Entering invalid email 8")
        ElementUtil.isVisible(this.msgInvalidEmailAddress, "Check invalid email message")
        ElementUtil.click(this.txtBoxEmailAddress, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxEmailAddress, data.RequestCallBack.InvalidEmail9, "Entering invalid email 9")
        ElementUtil.isVisible(this.msgInvalidEmailAddress, "Check invalid email message")
        ElementUtil.click(this.txtBoxEmailAddress, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxEmailAddress, data.RequestCallBack.InvalidEmail10, "Entering invalid email 10")
    }

    enterInvalidNameJoinDmd() {
        ElementUtil.sendText(this.txtBoxFirstName, data.RequestCallBack.InvalidName1, "Entering invalid name 1")
        ElementUtil.isVisible(this.msgInvalidName, "Check invalid name message")
        ElementUtil.click(this.txtBoxFirstName, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxFirstName, data.RequestCallBack.InvalidName2, "Entering invalid name 2")
        ElementUtil.isVisible(this.msgInvalidName, "Check invalid name message")
        ElementUtil.click(this.txtBoxFirstName, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxFirstName, data.RequestCallBack.InvalidName3, "Entering invalid name 3")
        ElementUtil.isVisible(this.msgInvalidName, "Check invalid name message")
        ElementUtil.click(this.txtBoxFirstName, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxFirstName, data.RequestCallBack.InvalidName4, "Entering invalid name 4")
    }

    enterInvalidBirthDayJoinDmd() {
        ElementUtil.sendText(this.txtBoxBirthMonth, data.JoinDiamondereCommunity.CharValidationBirthday1, "Entering invalid birth month 1")
        ElementUtil.isVisible(this.msgInvalidBirthday, "Check invalid birthday message")
        ElementUtil.click(this.txtBoxBirthMonth, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxBirthMonth, data.JoinDiamondereCommunity.CharValidationBirthday2, "Entering invalid birth month 2")
        ElementUtil.isVisible(this.msgInvalidBirthday, "Check invalid birthday message")
        ElementUtil.click(this.txtBoxBirthMonth, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxBirthMonth, data.JoinDiamondereCommunity.CharValidationBirthday3, "Entering invalid birth month 3")
        ElementUtil.isVisible(this.msgInvalidBirthday, "Check invalid birthday message")
        ElementUtil.click(this.txtBoxBirthMonth, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxBirthMonth, data.JoinDiamondereCommunity.CharValidationBirthday4, "Entering invalid birth month 4")
        ElementUtil.isVisible(this.msgInvalidBirthday, "Check invalid birthday message")
        ElementUtil.click(this.txtBoxBirthMonth, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxBirthDate, data.JoinDiamondereCommunity.CharValidationBirthday1, "Entering invalid birth date 1")
        ElementUtil.isVisible(this.msgInvalidBirthday, "Check invalid birthday message")
        ElementUtil.click(this.txtBoxBirthMonth, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxBirthDate, data.JoinDiamondereCommunity.CharValidationBirthday2, "Entering invalid birth date 2")
        ElementUtil.isVisible(this.msgInvalidBirthday, "Check invalid birthday message")
        ElementUtil.click(this.txtBoxBirthMonth, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxBirthDate, data.JoinDiamondereCommunity.CharValidationBirthday3, "Entering invalid birth date 3")
        ElementUtil.isVisible(this.msgInvalidBirthday, "Check invalid birthday message")
        ElementUtil.click(this.txtBoxBirthMonth, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxBirthDate, data.JoinDiamondereCommunity.CharValidationBirthday4, "Entering invalid birth date 4")
    }

    enterInvalidBirthMonth() {
        ElementUtil.sendText(this.txtBoxBirthMonth, data.JoinDiamondereCommunity.InvalidBirthMonth, "Entering invalid birth month")
    }

    enterInvalidBirthDate() {
        ElementUtil.sendText(this.txtBoxBirthDate, data.JoinDiamondereCommunity.InvalidBirthDate, "Entering invalid birth date")
    }

    clickEmailIconPage3() {
        ElementUtil.click(this.lnkEmailThisDesign, "Click email icon")
    }

    enterYourEmail() {
        ElementUtil.sendText(this.txtBoxYourEmail, data.RequestCallBack.Email, "Entering email")
    }

    enterYourFriendName() {
        ElementUtil.sendText(this.txtBoxYourFriendName, data.ShareProduct.FriendName, "Entering friend's name")
    }

    enterYourFriendEmail() {
        ElementUtil.sendText(this.txtBoxYourFriendEmail, data.ShareProduct.FriendEmail, "Entering friend's email")
    }

    clickSendToAFriend() {
        ElementUtil.click(this.btnSendToAFriend, "Click send to a friend")
    }

    enterInvalidYourName() {
        ElementUtil.sendText(this.txtBoxYourName, data.RequestCallBack.InvalidName1, "Entering invalid name 1")
        ElementUtil.isVisible(this.msgInvalidName, "Check invalid name message")
        ElementUtil.click(this.txtBoxYourName, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxYourName, data.RequestCallBack.InvalidName2, "Entering invalid name 2")
        ElementUtil.isVisible(this.msgInvalidName, "Check invalid name message")
        ElementUtil.click(this.txtBoxYourName, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxYourName, data.RequestCallBack.InvalidName3, "Entering invalid name 3")
        ElementUtil.isVisible(this.msgInvalidName, "Check invalid name message")
        ElementUtil.click(this.txtBoxYourName, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxYourName, data.RequestCallBack.InvalidName4, "Entering invalid name 4")
    }

    enterYourName() {
        ElementUtil.sendText(this.txtBoxYourName, data.RequestCallBack.Name, "Entering name")
    }

    enterInvalidYourFriendName() {
        ElementUtil.sendText(this.txtBoxYourFriendName, data.RequestCallBack.InvalidName1, "Entering invalid name 1")
        ElementUtil.isVisible(this.msgInvalidName, "Check invalid name message")
        ElementUtil.click(this.txtBoxYourFriendName, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxYourFriendName, data.RequestCallBack.InvalidName2, "Entering invalid name 2")
        ElementUtil.isVisible(this.msgInvalidName, "Check invalid name message")
        ElementUtil.click(this.txtBoxYourFriendName, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxYourFriendName, data.RequestCallBack.InvalidName3, "Entering invalid name 3")
        ElementUtil.isVisible(this.msgInvalidName, "Check invalid name message")
        ElementUtil.click(this.txtBoxYourFriendName, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxYourFriendName, data.RequestCallBack.InvalidName4, "Entering invalid name 4")
    }

    enterInvalidYourEmail() {
        ElementUtil.sendText(this.txtBoxYourEmail, data.RequestCallBack.InvalidEmail1, "Entering invalid email 1")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.click(this.txtBoxYourEmail, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxYourEmail, data.RequestCallBack.InvalidEmail2, "Entering invalid email 2")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.click(this.txtBoxYourEmail, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxYourEmail, data.RequestCallBack.InvalidEmail3, "Entering invalid email 3")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.click(this.txtBoxYourEmail, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxYourEmail, data.RequestCallBack.InvalidEmail4, "Entering invalid email 4")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.click(this.txtBoxYourEmail, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxYourEmail, data.RequestCallBack.InvalidEmail5, "Entering invalid email 5")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.click(this.txtBoxYourEmail, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxYourEmail, data.RequestCallBack.InvalidEmail6, "Entering invalid email 6")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.click(this.txtBoxYourEmail, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxYourEmail, data.RequestCallBack.InvalidEmail7, "Entering invalid email 7")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.click(this.txtBoxYourEmail, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxYourEmail, data.RequestCallBack.InvalidEmail8, "Entering invalid email 8")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.click(this.txtBoxYourEmail, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxYourEmail, data.RequestCallBack.InvalidEmail9, "Entering invalid email 9")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.click(this.txtBoxYourEmail, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxYourEmail, data.RequestCallBack.InvalidEmail10, "Entering invalid email 10")
    }

    enterInvalidYourFriendEmail() {
        ElementUtil.sendText(this.txtBoxYourFriendEmail, data.RequestCallBack.InvalidEmail1, "Entering invalid email 1")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.click(this.txtBoxYourFriendEmail, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxYourFriendEmail, data.RequestCallBack.InvalidEmail2, "Entering invalid email 2")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.click(this.txtBoxYourFriendEmail, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxYourFriendEmail, data.RequestCallBack.InvalidEmail3, "Entering invalid email 3")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.click(this.txtBoxYourFriendEmail, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxYourFriendEmail, data.RequestCallBack.InvalidEmail4, "Entering invalid email 4")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.click(this.txtBoxYourFriendEmail, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxYourFriendEmail, data.RequestCallBack.InvalidEmail5, "Entering invalid email 5")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.click(this.txtBoxYourFriendEmail, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxYourFriendEmail, data.RequestCallBack.InvalidEmail6, "Entering invalid email 6")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.click(this.txtBoxYourFriendEmail, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxYourFriendEmail, data.RequestCallBack.InvalidEmail7, "Entering invalid email 7")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.click(this.txtBoxYourFriendEmail, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxYourFriendEmail, data.RequestCallBack.InvalidEmail8, "Entering invalid email 8")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.click(this.txtBoxYourFriendEmail, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxYourFriendEmail, data.RequestCallBack.InvalidEmail9, "Entering invalid email 9")
        ElementUtil.isVisible(this.msgInvalidEmail, "Check invalid email message")
        ElementUtil.click(this.txtBoxYourFriendEmail, "Click text box")
        browser.keys(['Control', 'a']);
        browser.keys('Backspace');
        ElementUtil.sendText(this.txtBoxYourFriendEmail, data.RequestCallBack.InvalidEmail10, "Entering invalid email 10")
    }

    enterSameEmail() {
        ElementUtil.sendText(this.txtBoxYourFriendEmail, data.RequestCallBack.Email, "Entering friend's email as same as your email")
    }

    enterExceedCharLimitYourName() {
        ElementUtil.sendText(this.txtBoxYourName, data.RequestCallBack.ExceedCharLimitName, "Entering name exceeding char limit")
    }

    enterExceedCharLimitYourFriendName() {
        ElementUtil.sendText(this.txtBoxYourFriendName, data.RequestCallBack.ExceedCharLimitName, "Entering friend's name exceeding char limit")
    }
}
module.exports = CustomerAssistance
