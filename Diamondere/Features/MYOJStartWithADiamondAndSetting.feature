
Feature: Testing Start with a Diamond and Start with a Setting features of Diamondere

    Background: Browsing staging environment of Diamondere
        Given I browse Diamondere website
        When I remove products if already added in cart
        When I want to clear local storage

#DIAMOND DETAILS PAGE
    #Scenario - 153
    @smoketest1
    Scenario: Ensure the view diamond button in the diamond details is clickable and redirects to next page
        Given I browse Loose Diamonds page
        When I select Quick view dropdown
        And I select View Diamond button
        Then I ensure the diamond details page is displayed

    #Scenario - 154
    @smoketest
    Scenario: Ensure the Diamond details page includes the icons for the selected diamond
        Given I browse Start with a Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Diamond button
        Then I ensure the icons are displayed in the diamond details page

    #Scenario - 155
    @smoketest @validations
    Scenario: Ensure the image and the diamond details are present in the Diamond details page
        Given I browse Start with a Lab Diamond page of Necklaces menu
        When I select Easy delivery option under Ways to Save More
        And I uncheck the IGI option
        And I select Quick view dropdown
        And I select View Lab Diamond button
        Then I ensure the image and the diamond details are present in the Diamond details page
        When I browse Start with a Lab Diamond page of Earrings menu
        And I uncheck the GIA option
        And I select Quick view dropdown for earrings
        And I select View Lab Diamond button
        Then I ensure the images and the diamond details are present for both diamonds in the Diamond details page

    #Scenario - 156
    @smoketest1
    Scenario: Check whether the Shape icon is selected as default
        Given I browse Loose Diamonds page
        When I select Quick view dropdown
        And I select View Diamond button
        Then I ensure the Shape icon is selected as default in the Diamond details page

    #Scenario - 157
    @smoketest @validations
    Scenario: Ensure the "Play video" button is clickable and a video popup plays in the screen
        Given I browse Loose Lab Diamonds page
        When I select Quick view dropdown
        And I select View Lab Diamond button
        And I click the Play Video icon
        Then I ensure the video popup plays in the screen

    # # CERTIFICATE ID IN URL - CANNOT BE AUTOMATED
    # #     Scenario - 158
    #@validations
    # #     Scenario: Ensure the "view GIA certificate" button is clickable and opens the new report page
    # #         Given I browse Start with a Lab Diamond page of Men's menu
    # #         When I uncheck the IGI option
    # #         And I select Quick view dropdown
    # #         And I select View Lab Diamond button
    # #         And I click the view GIA certificate button
    # #         Then I ensure the new GIA report page is displayed

    # # CERTIFICATE ID IN URL - CANNOT BE AUTOMATED
    # #     Scenario - 159
    #@validations
    # #     Scenario: Ensure the "view IGI certificate" button is clickable and opens the report popup
    # #         Given I browse Start with a Diamond page of Rings menu
    # #         When I uncheck the GIA option
    # #         And I select Quick view dropdown
    # #         And I select View Diamond button
    # #         And I click the view IGI certificate button
    # #         Then I ensure the IGI report popup is displayed

    #Scenario - 160
    @smoketest @validations
    Scenario: Ensure the "Top View" and "Side View" icons are clickable and shows the top and side view of the diamond
        Given I browse Start with a Lab Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Lab Diamond button
        And I select the Top View icon
        Then I ensure the Top View image of the diamond is displayed
        When I select the Side View icon
        Then I ensure the Side View image of the diamond is displayed

    #Scenario - 161
    @smoketest
    Scenario: Ensure "Your Diamond Details" section includes all the Diamond features along with the tooltip content
        Given I browse Start with a Diamond page of Necklaces menu
        When I select Quick view dropdown
        And I select View Diamond button
        And I hover over each feature name
        Then I ensure the Your Diamond Details section includes all the Diamond features along with the tooltip content

    #Scenario - 162
    @validations
    Scenario: Verifying the popups of the diamond features in the "Your Diamond Details" section
        Given I browse Start with a Lab Diamond page of Men's menu
        When I select Quick view dropdown
        And I select View Lab Diamond button
        And I hover over features with detailed popup and click View Details
        Then I ensure the respective diamond feature popup is displayed

    #Scenario - 163
    @smoketest1 @validations
    Scenario: Ensure "Your Diamond Details" section includes all the Diamond features for both Diamonds
        Given I browse Start with a Lab Diamond page of Earrings menu
        When I select Quick view dropdown for earrings
        And I select View Lab Diamond button
        And I scroll to Diamond Details section
        Then I ensure the Diamond details of first diamond is displayed under Diamond Details - 1
        When I select Diamond Details - 2
        Then I ensure the Diamond details of second diamond is displayed under Diamond Details - 2

    # # CERTIFICATE ID IN URL - CANNOT BE AUTOMATED
    # #     Scenario - 164
    #@validations
    # #      Ensure the "View GIA report" link present in the "Your Diamond Details" redirects to the GIA report page
    # #         Given I browse Loose Diamonds page
    # #         When I uncheck the IGI option
    # #         And I select Quick view dropdown
    # #         And I select View Diamond button
    # #         And I click View GIA report logo present in the Your Diamond Details section
    # #         Then I ensure the new GIA report page is displayed
    # #         When I click View GIA report link present in the Your Diamond Details section
    # #         Then I ensure the new GIA report page is displayed

    # # CERTIFICATE ID IN URL - CANNOT BE AUTOMATED
    # #     Scenario - 165
    #@validations
    # #     Scenario: Ensure the "View IGI report" link present in the "Your Diamond Details" opens the IGI report popup
    # #         Given I browse Loose Lab Diamonds page
    # #         When I uncheck the GIA option
    # #         And I select Quick view dropdown
    # #         And I select View Lab Diamond button
    # #         And I click View IGI report logo present in the Your Diamond Details section
    # #         Then I ensure the IGI report popup is displayed
    # #         When I click View IGI report link present in the Your Diamond Details section
    # #         Then I ensure the IGI report popup is displayed

    #Scenario - 166
    @smoketest
    Scenario: Validating the Carat section in Diamond details page
        Given I browse Start with a Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Diamond button
        Then I ensure the Carat section with the details of the chosen diamond is displayed

    #Scenario - 167
    @smoketest
    Scenario: Validating the Cut section in Diamond details page
        Given I browse Start with a Lab Diamond page of Necklaces menu
        When I select Quick view dropdown
        And I select View Lab Diamond button
        And I scroll to Cut section
        Then I ensure the Cut section with the details of the chosen diamond is displayed

    #Scenario - 168
    @smoketest
    Scenario: Validating the Color section in Diamond details page
        Given I browse Start with a Diamond page of Men's menu
        When I select Quick view dropdown
        And I select View Diamond button
        And I scroll to Color section
        Then I ensure the Color section with the details of the chosen diamond is displayed

    #Scenario - 169
    @smoketest
    Scenario: Validating the Clarity section in Diamond details page
        Given I browse Loose Lab Diamonds page
        When I select Quick view dropdown
        And I select View Lab Diamond button
        And I scroll to Clarity section
        Then I ensure the Clarity section with the details of the chosen diamond is displayed

    #Scenario - 170
    @smoketest1 @validations
    Scenario: Validating the breacrumb flow in the Diamond Details Page
        Given I browse Start with a Diamond page of Earrings menu
        When I select Quick view dropdown for earrings
        And I select View Diamond button
        Then I ensure the breadcrumb is present in the Diamond Details Page
        When I click View Details and Make Your Diamond Earring links in breadcrumb
        Then I ensure the Start with a Diamond page of Earrings menu is displayed

    #Scenario - 175
    @smoketest @validations
    Scenario: Ensure clicking "Select Category" button redirects to the page 2 of the category with compatible designs
        Given I browse Start with a Lab Diamond page of Earrings menu
        When I select Quick view dropdown for earrings
        And I select View Lab Diamond button
        And I click Select Earring button
        Then I ensure the page 2 of earrings for the custom stone is displayed
        When I browse Start with a Diamond page of Necklaces menu
        And I select Quick view dropdown
        And I select View Diamond button
        And I click Select Necklace button
        Then I ensure the page 2 of necklaces for the custom stone is displayed
        When I browse Start with a Lab Diamond page of Men's menu
        And I select Quick view dropdown
        And I select View Lab Diamond button
        And I click Select Men's Ring button
        Then I ensure the page 2 of men's rings for the custom stone is displayed
        When I browse Start with a Diamond page of Rings menu
        And I select Quick view dropdown
        And I select View Diamond button
        And I click Select Ring button
        Then I ensure the page 2 of rings for the custom stone is displayed


    # PAGE 2
    #Scenario - 176
    @smoketest1 @validations
    Scenario: Start with a Diamond - Validating the breadcrumb of page 2 of all menus
        Given I browse Start with a Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Diamond button
        And I click Select Ring button
        Then I verify the presence of breadcrumb and the number of available diamonds in page 2 rings
        When I click Make Your Diamond Engagement Ring and Engagement Ring links in breadcrumb
        Then I ensure the links redirects to respective Engagement Ring page
        When I browse Start with a Diamond page of Earrings menu
        And I select Quick view dropdown for earrings
        And I select View Diamond button
        And I click Select Earring button
        Then I verify the presence of breadcrumb and the number of available diamonds in page 2 earrings
        When I click Make Your Diamond Earring and Earrings links in breadcrumb
        Then I ensure the links redirects to respective Earrings page
        When I browse Start with a Diamond page of Necklaces menu
        And I select Quick view dropdown
        And I select View Diamond button
        And I click Select Necklace button
        Then I verify the presence of breadcrumb and the number of available diamonds in page 2 necklaces
        When I click Make Your Diamond Necklace and Necklaces links in breadcrumb
        Then I ensure the links redirects to respective Necklaces page
        When I browse Start with a Diamond page of Men's menu
        And I select Quick view dropdown
        And I select View Diamond button
        And I click Select Men's Ring button
        Then I verify the presence of breadcrumb and the number of available diamonds in page 2 men's rings
        When I click Make Your Diamond Men's Ring and Men's Rings links in breadcrumb
        Then I ensure the links redirects to respective Men's Rings page

    #Scenario - 177
    @smoketest @validations
    Scenario: Validating the breadcrumb of Start with a Lab Diamond page of all menus
        Given I browse Start with a Lab Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Lab Diamond button
        And I click Select Ring button
        Then I verify the presence of breadcrumb and the number of available lab diamonds in page 2 rings
        When I click Make Your Lab Diamond Engagement Ring and Engagement Ring links in breadcrumb
        Then I ensure the links redirects to respective Engagement Ring page
        When I browse Start with a Lab Diamond page of Earrings menu
        And I select Quick view dropdown for earrings
        And I select View Lab Diamond button
        And I click Select Earring button
        Then I verify the presence of breadcrumb and the number of available lab diamonds in page 2 earrings
        When I click Make Your Lab Diamond Earring and Earrings links in breadcrumb
        Then I ensure the links redirects to respective Earrings page
        When I browse Start with a Lab Diamond page of Necklaces menu
        And I select Quick view dropdown
        And I select View Lab Diamond button
        And I click Select Necklace button
        Then I verify the presence of breadcrumb and the number of available lab diamonds in page 2 necklaces
        When I click Make Your Lab Diamond Necklace and Necklaces links in breadcrumb
        Then I ensure the links redirects to respective Necklaces page
        When I browse Start with a Lab Diamond page of Men's menu
        And I select Quick view dropdown
        And I select View Lab Diamond button
        And I click Select Men's Ring button
        Then I verify the presence of breadcrumb and the number of available lab diamonds in page 2 men's rings
        When I click Make Your Lab Diamond Men's Ring and Men's Rings links in breadcrumb
        Then I ensure the links redirects to respective Men's Rings page

    #Scenario - 178
    @smoketest1 @validations
    Scenario: Ensure the "2. Settings" tab is enabled and pre-selected with Select link after selecting a diamond from the diamond listing page
        Given I browse Start with a Lab Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Lab Diamond button
        And I click Select Ring button
        Then I verify the Settings tab is enabled and pre-selected with Select link
        When I browse Start with a Diamond page of Earrings menu
        And I select Quick view dropdown for earrings
        And I select View Diamond button
        And I click Select Earring button
        Then I verify the Settings tab is enabled and pre-selected with Select link

    #Scenario - 179
    @smoketest @validations
    Scenario: Ensure the carat and price of the chosen diamond along with Change link is displayed in the "1. Diamond/Lab Diamond" tab
        Given I browse Start with a Diamond page of Necklaces menu
        When I select Quick view dropdown
        And I select View Diamond button
        And I click Select Necklace button
        Then I ensure the carat and price of the chosen diamond along with Change link is displayed in the Diamond tab
        When I browse Start with a Lab Diamond page of Earrings menu
        And I select Quick view dropdown for earrings
        And I select View Lab Diamond button
        And I click Select Earring button
        Then I ensure the carat and price of the chosen diamonds along with Change link are displayed in the Lab Diamond tab

    #Scenario - 180
    @smoketest @validations
    Scenario: Verify clicking "Change" link in "1. Diamond/Lab Diamond" tab redirects to the diamond listing page
        Given I browse Start with a Diamond page of Men's menu
        When I select Quick view dropdown
        And I select View Diamond button
        And I click Select Men's Ring button
        And I click Change link in Diamond tab
        Then I ensure it redirects to diamond listing page
        When I browse Start with a Lab Diamond page of Rings menu
        And I select Quick view dropdown
        And I select View Lab Diamond button
        And I click Select Ring button
        And I click Change link in Lab Diamond tab
        Then I ensure it redirects to lab diamond listing page

    #Scenario - 181
    @validations
    Scenario: Ensure the "Ways to save more" options are displayed in the page 2 with the compatible designs for the diamond chosen
        Given I browse Start with a Diamond page of Earrings menu
        When I select Easy delivery option under Ways to Save More
        And I select Quick view dropdown for earrings
        And I select View Diamond button
        And I click Select Earring button
        Then I ensure the Ways to save more options are displayed and the Easy delivery option is selected in the page 2
        When I browse Start with a Lab Diamond page of Necklaces menu
        And I select Wire payment option under Ways to Save More
        And I select Quick view dropdown
        And I select View Lab Diamond button
        And I click Select Necklace button
        Then I ensure the Ways to save more options are displayed and the Wire payment option is selected in the page 2

    #Scenario - 182
    @smoketest @validations
    Scenario: Validate the tags below the ways to save more section (Diamond / Lab Diamond / Engagement Rings)
        Given I browse Start with a Diamond page of Men's menu
        When I select Quick view dropdown
        And I select View Diamond button
        And I click Select Men's Ring button
        Then I validate the Diamond tag in page 2
        When I browse Start with a Lab Diamond page of Rings menu
        And I select Quick view dropdown
        And I select View Lab Diamond button
        And I click Select Ring button
        Then I validate the Lab Diamond and Engagement Rings tag in page 2
        When I browse Start with a Diamond page of Earrings menu
        And I select Quick view dropdown for earrings
        And I select View Diamond button
        And I click Select Earring button
        Then I validate the Diamond tag in page 2
        When I browse Start with a Diamond page of Necklaces menu
        And I select Quick view dropdown
        And I select View Diamond button
        And I click Select Necklace button
        Then I validate the Diamond tag in page 2

    #Scenario - 183
    @smoketest1 @validations
    Scenario: Ensure the style, metal and sort by filters are displayed in page 2 of rings, earrings and necklaces
        Given I browse Start with a Lab Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Lab Diamond button
        And I click Select Ring button
        Then I validate the style, metal and sort by filters in page 2 of rings
        When I browse Start with a Diamond page of Earrings menu
        And I select Quick view dropdown for earrings
        And I select View Diamond button
        And I click Select Earring button
        Then I validate the style, metal and sort by filters in page 2 of earrings
        When I browse Start with a Diamond page of Necklaces menu
        And I select Quick view dropdown
        And I select View Diamond button
        And I click Select Necklace button
        Then I validate the style, metal and sort by filters in page 2 of necklaces

    #Scenario - 184
    @validations
    Scenario: Ensure the style filter is not displayed in page 2 of men's rings
        Given I browse Start with a Lab Diamond page of Men's menu
        When I select Quick view dropdown
        And I select View Lab Diamond button
        And I click Select Men's Ring button
        Then I ensure the style filter is not displayed in page 2 of men's rings

    #Scenario - 185
    @smoketest1
    Scenario: Ensure the image, product name, price and short description of the product is displayed in page 2
        Given I browse Start with a Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Diamond button
        And I click Select Ring button
        Then I ensure the image, product name, price and short description of the product is displayed in page 2

    #Scenario - 186
    @validations @functional
    Scenario: Ensure the actual price is striked out and the discounted price for the product is displayed while choosing Easy delivery option
        Given I browse Start with a Lab Diamond page of Earrings menu
        When I select Quick view dropdown for earrings
        And I select View Lab Diamond button
        And I click Select Earring button
        #And I select Easy delivery option under Ways to Save More
        Then I ensure the actual price is striked out and the discounted price for the product is displayed

    #Scenario - 187
    @smoketest1 @validations
    Scenario: Ensure the stone (diamond/lab diamond) description is displayed in the page 2
    Given I browse Start with a Diamond page of Rings menu
    When I select Quick view dropdown
    And I select View Diamond button
    And I click Select Ring button
    Then I ensure the diamond inline description is displayed in the page 2
    When I browse Start with a Lab Diamond page of Earrings menu
    And I select Quick view dropdown for earrings
    And I select View Lab Diamond button
    And I click Select Earring button
    Then I ensure the lab diamond inline description is displayed in the page 2
    When I browse Start with a Diamond page of Necklaces menu
    And I select Quick view dropdown
    And I select View Diamond button
    And I click Select Necklace button
    Then I ensure the diamond inline description is displayed in the page 2
    When I browse Start with a Lab Diamond page of Men's menu
    And I select Quick view dropdown
    And I select View Lab Diamond button
    And I click Select Men's Ring button
    Then I ensure the lab diamond inline description is displayed in the page 2

    #Scenario - 188
    @smoketest1 @validations
    Scenario: Verify clicking the star rating in the SEO section in page 2 takes the user to the respective reviews page
        Given I browse Start with a Lab Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Lab Diamond button
        And I click Select Ring button
        And I click the star rating in the SEO section in page 2
        Then I ensure it redirects to custom rings reviews page
        When I browse Start with a Diamond page of Earrings menu
        And I select Quick view dropdown for earrings
        And I select View Diamond button
        And I click Select Earring button
        And I click the star rating in the SEO section in page 2
        Then I ensure it redirects to custom earrings reviews page
        When I browse Start with a Lab Diamond page of Necklaces menu
        And I select Quick view dropdown
        And I select View Lab Diamond button
        And I click Select Necklace button
        And I click the star rating in the SEO section in page 2
        Then I ensure it redirects to custom necklaces reviews page
        When I browse Start with a Diamond page of Men's menu
        And I select Quick view dropdown
        And I select View Diamond button
        And I click Select Men's Ring button
        Then I ensure the SEO section is present in page 2 of men's rings

    #PAGE 3
    #Scenario - 189
    @smoketest @validations
    Scenario: Verify selecting a product in page 2 takes the user to the page 3 with the tab and ways to save more section at the top of the page
        Given I browse Start with a Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Diamond button
        And I click Select Ring button
        And I select a product in page 2
        Then I ensure the page 3 with the tab and ways to save more section is displayed

    #Scenario - 190
    @smoketest @validations
    Scenario: Ensure the page 3 of the product with the custom diamond is displayed with the image, description and price
        Given I browse Start with a Lab Diamond page of Necklaces menu
        When I select Quick view dropdown
        And I select View Lab Diamond button
        And I click Select Necklace button
        And I select a product in page 2
        Then I ensure the page 3 of the product with the custom diamond is displayed with the image, description and price

    #Scenario - 191
    @smoketest1 @validations
    Scenario: Ensure the discounted price for the product is displayed while choosing Easy delivery option in page 3
        Given I browse Start with a Diamond page of Men's menu
        When I select Quick view dropdown
        And I select View Diamond button
        And I click Select Men's Ring button
        And I select a product in page 2
        And I select Easy delivery option under Ways to Save More
        Then I ensure the discounted price for the product is displayed in page 3

    #Scenario - 192
    @validations
    Scenario: Verify the product details section matches the details in product display with custom diamonds
        Given I browse Start with a Lab Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Lab Diamond button
        And I click Select Ring button
        And I select a product in page 2
        Then I ensure the product details section matches the details in product display with custom diamonds

    #Scenario - 193
    @smoketest1 @validations
    Scenario: Ensure the certificate link for the custom diamond is displayed as a image under the main product image
        Given I browse Start with a Lab Diamond page of Men's menu
        When I select Quick view dropdown
        And I select View Lab Diamond button
        And I click Select Men's Ring button
        And I select a product in page 2
        Then I ensure the certificate link for the custom diamond is displayed
        When I browse Start with a Diamond page of Earrings menu
        And I select Quick view dropdown for earrings
        And I select View Diamond button
        And I click Select Earring button
        And I select a product in page 2
        Then I ensure the certificate links for both custom diamonds are displayed

    #Scenario - 194
    @smoketest @validations
    Scenario: Validating the absence of request custom order and presence of add to cart buttons in page 3 of MYOJ
        Given I browse Start with a Lab Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Lab Diamond button
        And I click Select Ring button
        And I select a product in page 2
        Then I ensure the request custom order button is not displayed and the add to cart button is displayed
        When I browse Start with a Diamond page of Earrings menu
        And I select Quick view dropdown for earrings
        And I select View Diamond button
        And I click Select Earring button
        And I select a product in page 2
        Then I ensure the request custom order button is not displayed and the add to cart button is displayed

    #Scenario - 195
    @smoketest @validations
    Scenario: Validating the checkout button and order summary in page 3 of MYOJ
        Given I browse Start with a Lab Diamond page of Necklaces menu
        When I select Quick view dropdown
        And I select View Lab Diamond button
        And I click Select Necklace button
        And I select a product in page 2
        ##And I select Easy delivery option under Ways to Save More
        And I click Add to cart in page 3
        ## Then I validate the order summary and absence of continue shopping button
        ## When I click Checkout button
        Then I ensure the product added to cart and redirects to shopping cart
        When I browse Start with a Diamond page of Men's menu
        And I select Quick view dropdown
        And I select View Diamond button
        And I click Select Men's Ring button
        And I select a product in page 2
        And I select Easy delivery option under Ways to Save More
        And I select ring size
        And I click Add to cart in page 3
        ## Then I validate the order summary and absence of continue shopping button
        ## When I click Checkout button
        Then I ensure the product added to cart and redirects to shopping cart

    # START WITH A SETTING
    #Scenario - 225
    @smoketest @validations
    Scenario: Validating the banners of Start with a Setting page of all menus
        Given I hover over the Rings menu
        When I select Start with a Setting under Rings menu
        Then I ensure the Make Your Diamond Engagement Ring page is displayed for settings with the banner
        When I hover over the Engagement menu
        And I select Start with a Setting under Engagement menu
        Then I ensure the page is displayed for settings with the banner
        When I hover over the Earrings menu
        And I select Start with a Setting under Earrings menu
        Then I ensure the Make Your Diamond Earrings page is displayed for settings with the banner
        When I hover over the Necklaces menu
        And I select Start with a Setting under Necklaces menu
        Then I ensure the Make Your Diamond Necklaces page is displayed for settings with the banner
        When I hover over the Men's menu
        And I select Start with a Setting under Men's menu
        Then I ensure the Make Your Diamond Men's Rings page is displayed for settings with the banner

    #Scenario - 226
    @validations
    Scenario: Validating the heading tab, ways to save more section and breadcrumb in Settings page
        Given I browse Start with a Setting page of Rings menu
        Then I verify the Settings tab with icon is enabled and pre-selected and the diamond tab is disabled
        When I click Home and Engagement Ring links in breadcrumb with available number of diamonds
        Then I ensure the links redirects to respective Engagement Ring page
        When I browse back to Settings page
        Then I verify the Ways to Save More section along with the dropdown options for rings
        When I browse Start with a Setting page of Earrings menu
        Then I verify the Settings tab with icon is enabled and pre-selected and the diamond tab is disabled
        When I click Home and Earrings links in breadcrumb with available number of diamonds
        Then I ensure the links redirects to respective Earrings page
        When I browse back to Settings page
        Then I verify the Ways to Save More section along with the dropdown options
        When I browse Start with a Setting page of Necklaces menu
        Then I verify the Settings tab with icon is enabled and pre-selected and the diamond tab is disabled
        When I click Home and Necklaces links in breadcrumb with available number of diamonds
        Then I ensure the links redirects to respective Necklaces page
        When I browse back to Settings page
        Then I verify the Ways to Save More section along with the dropdown options
        When I browse Start with a Setting page of Men's menu
        Then I verify the Settings tab with icon is enabled and pre-selected and the diamond tab is disabled
        When I click Home and Men's Rings links in breadcrumb with available number of diamonds
        Then I ensure the links redirects to respective Men's Rings page
        When I browse back to Settings page
        Then I verify the Ways to Save More section along with the dropdown options for men's rings

    #FAILING IN AUTOMATION
    #Scenario - 227
    @validations
    Scenario: Ensure price of the product in setting page reduces by 1.5% when user selects Wire payment option
        Given I browse Start with a Setting page of Rings menu
        When I select Wire payment option under Ways to Save More
        When I scroll to product display
        Then I ensure the price of the product in setting page reduces by 1.5%
        Then I ensure the overall saving percentage is displayed

    #Scenario - 228
    @functional
    Scenario: Validating the sections in Start with a Setting page
        Given I browse Start with a Setting page of Earrings menu
        Then I ensure the presence of filters, product display, inline description and SEO section

    #FAILING IN AUTOMATION
    #Scenario - 229
    @validations
    Scenario: Ensure "Setting Price" is displayed in the product details
        Given I browse Start with a Setting page of Necklaces menu
        When I scroll to product display
        Then I ensure Setting Price is displayed in the product details

    #Scenario - 230
    @validations
    Scenario: Verify selecting a product in page 2 takes the user to the page 3
        Given I browse Start with a Setting page of Men's menu
        When I select a product in page 2
        Then I ensure it redirects to page 3 of the chosen setting

    #Scenario - 231
    @validations @functional
    Scenario: Ensure custom diamond is selected by default in stone options and Add Diamond to complete message is displayed
        Given I browse Start with a Setting page of Rings menu
        When I select a product in page 2
        Then I ensure the custom diamond is selected by default in stone options and Add Diamond to complete message is displayed

    #Scenario - 232
    @validations
    Scenario: Validating the page 3 of the setting chosen
        Given I browse Start with a Setting page of Earrings menu
        When I select a product in page 2
        Then I validate the presence of request custom order and Select Diamond buttons
        When I click Select Diamond button
        Then I ensure it redirects to diamond listing page with the applicable filters and updated Settings tab

    #Scenario - 233
    @smoketest1 @validations
    Scenario: Ensure the "Add Diamond & Checkout" button is clickable and redirects to the cart page
        Given I browse Start with a Setting page of Necklaces menu
        When I select a product in page 2
        And I click Select Diamond button
        Then I ensure the Diamond tab is enabled and pre-selected after selecting a product
        Then I validate the Settings tab with the product name, price and Change link
        And I select Quick view dropdown
        And I select View Diamond button
        Then I ensure the carat and price of the chosen diamond along with Change link is displayed in the Diamond tab
        When I click the Add Diamond and Checkout button in the diamond details page
        Then I ensure the product added to cart and redirects to shopping cart
