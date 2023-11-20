
Feature: Testing Ways to save more flows (Start with a diamond & setting) and loose diamond features of Diamondere

    Background: Browsing staging environment of Diamondere
        Given I browse Diamondere website
        When I remove products if already added in cart
        When I want to clear local storage

    #WAYS TO SAVE MORE - SELECTING BAND OPTIONS
    #Scenario - 196
    @smoketest @validations
    Scenario: Ensure "Select Women's Band" button is displayed if women's band option is selected under ways to save more
        Given I browse Start with a Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Diamond button
        And I click Select Ring button
        And I select a product in page 2
        And I select Women's Band option under Ways to Save More
        Then I ensure Select Women's Band button is displayed in page 3

    #Scenario - 197
    @smoketest @validations
    Scenario: Ensure selecting "Select Women's band" button redirects to the page 2 of matching women's bands and breadcrumb updates accordingly
        Given I browse Start with a Lab Diamond page of Men's menu
        When I select Quick view dropdown
        And I select View Lab Diamond button
        And I click Select Men's Ring button
        And I select a product in page 2
        And I select Women's Band option under Ways to Save More
        And I select ring size
        And I click Select Women's Band button
        Then I ensure it redirects to page 2 of matching women's bands and breadcrumb updates accordingly

    #Scenario - 198
    @smoketest @validations
    Scenario: Ensure the "3. Women's Band" tab is enabled and pre-selected after selecting a ring
        Given I browse Start with a Lab Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Lab Diamond button
        And I click Select Ring button
        And I select a product in page 2
        And I select Women's Band option under Ways to Save More
        Then I ensure the Women's Band tab is displayed with icon and disabled
        And I select ring size
        And I click Select Women's Band button
        Then I ensure the Women's Band tab is enabled and pre-selected after selecting a ring

    #Scenario - 199
    @smoketest @validations
    Scenario: Ensure the "1. Diamond/Lab Diamond" tab is not disabled in the page 2 of matching bands
        Given I browse Start with a Diamond page of Men's menu
        When I select Quick view dropdown
        And I select View Diamond button
        And I click Select Men's Ring button
        And I select a product in page 2
        And I select Women's Band option under Ways to Save More
        And I select ring size
        And I click Select Women's Band button
        Then I ensure the carat and price of the chosen diamond along with Change link is displayed in the Diamond tab

    #Scenario - 200
    @smoketest @validations
    Scenario: Validating the "2. Settings" tab in the page 2 of matching bands
        Given I browse Start with a Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Diamond button
        And I click Select Ring button
        And I select a product in page 2
        And I select Women's Band option under Ways to Save More
        And I select ring size
        And I click Select Women's Band button
        Then I validate the Settings tab with the product name, price and Change link
        When I click Change link in Settings tab
        Then I ensure it redirects to the page 3 of the setting chosen

    #Scenario - 201
    @smoketest @validations
    Scenario: Validating the page 2 of matching women's bands
    Given I browse Start with a Lab Diamond page of Men's menu
    When I select Quick view dropdown
    And I select View Lab Diamond button
    And I click Select Men's Ring button
    And I select a product in page 2
    And I select Women's Band option under Ways to Save More
    And I select Easy delivery option under Ways to Save More
    And I select ring size
    And I click Select Women's Band button
    Then I ensure the presence of ways to save more section, filters, product display, inline description and SEO section

    #Scenario - 202
    @smoketest @validations
    Scenario: Validate the metal tag displayed in the page 2 of matching women's bands
        Given I browse Start with a Lab Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Lab Diamond button
        And I click Select Ring button
        And I select a product in page 2
        And I select Women's Band option under Ways to Save More
        And I select ring size
        And I click Select Women's Band button
        Then I ensure the 14K White gold metal tag is displayed by default
        When I go back to the page 3 of the chosen ring and choose 10K Black gold metal
        And I click Select Women's Band button
        And I scroll down the page 2
        Then I ensure the 10K Black gold metal tag is displayed in the page 2 of matching women's bands

    #Scenario - 203
    @smoketest @validations
    Scenario: Verify selecting a women's band in page 2 takes the user to the page 3 with the tab and ways to save more section at the top of the page
        Given I browse Start with a Lab Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Lab Diamond button
        And I click Select Ring button
        And I select a product in page 2
        And I select Women's Band option under Ways to Save More
        And I select ring size
        And I click Select Women's Band button
        And I select a product in page 2
        Then I ensure the page 3 of women's band with the tab and ways to save more section is displayed

    #Scenario - 204
    @smoketest @validations
    Scenario: Validating the page 3 of matching women's bands
        Given I browse Start with a Diamond page of Men's menu
        When I select Quick view dropdown
        And I select View Diamond button
        And I click Select Men's Ring button
        And I select a product in page 2
        And I select Women's Band option under Ways to Save More
        And I select ring size
        And I click Select Women's Band button
        And I select a product in page 2
        Then I verify the matching womens band text in short description and product details section
        When I select Easy delivery option under Ways to Save More
        Then I ensure the request custom order button is not displayed and the add to cart button is displayed
        When I select ring size
        And I click Add to cart in page 3
        ## Then I validate the order summary and absence of continue shopping button
        ## When I click Checkout button
        Then I ensure the product added to cart and redirects to shopping cart

    #Scenario - 205
    @smoketest @validations
    Scenario: Validating the flow of selecting Both Bands option under Ways to Save More
        Given I browse Start with a Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Diamond button
        And I click Select Ring button
        And I select a product in page 2
        And I select Both Bands option under Ways to Save More
        And I select ring size
        And I click Select Women's Band button
        And I select a product in page 2
        Then I verify the matching womens band text in short description and product details section
        And I click Select Men's Band button
        And I select a product in page 2
        Then I verify the mens ring text in short description and product details section
        Then I ensure the request custom order button is not displayed and the add to cart button is displayed

    #Scenario - 206
    @smoketest @validations
    Scenario: Ensure altering a property by clicking "Change" in the 3. Women's band tab should update the current chosen women's band
        Given I browse Start with a Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Diamond button
        And I click Select Ring button
        And I select a product in page 2
        And I select Both Bands option under Ways to Save More
        And I select ring size
        And I click Select Women's Band button
        And I select a product in page 2
        And I click Select Men's Band button
        And I select Change link in the Women's Band tab
        And I change the metal type of women's band to 10K White gold metal
        And I click Select Men's Band button
        And I click cart icon
        Then I ensure the updated women's band is added to cart

    #Scenario - 207
    @smoketest @validations
    Scenario: Ensure "Select Men's Band" button is displayed if men's band option is selected under ways to save more
        Given I browse Start with a Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Diamond button
        And I click Select Ring button
        And I select a product in page 2
        And I select Men's Band option under Ways to Save More
        Then I ensure Select Men's Band button is displayed in page 3

    #Scenario - 208
    @smoketest @validations
    Scenario: Ensure selecting "Select Men's band" button redirects to the page 2 of matching men's bands and breadcrumb updates accordingly
        Given I browse Start with a Lab Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Lab Diamond button
        And I click Select Ring button
        And I select a product in page 2
        And I select Men's Band option under Ways to Save More
        And I select ring size
        And I click Select Men's Band button
        Then I ensure it redirects to page 2 of matching men's bands and breadcrumb updates accordingly

    #Scenario - 209
    @smoketest @validations
    Scenario: Ensure the "3. Men's Band" tab is enabled and pre-selected after selecting a ring
        Given I browse Start with a Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Diamond button
        And I click Select Ring button
        And I select a product in page 2
        And I select Men's Band option under Ways to Save More
        Then I ensure the Men's Band tab is displayed with icon and disabled
        And I select ring size
        And I click Select Men's Band button
        Then I ensure the Men's Band tab is enabled and pre-selected after selecting a ring

    #Scenario - 210
    @smoketest @validations
    Scenario: Ensure the "1. Diamond/Lab Diamond" tab is not disabled in the page 2 of matching men's bands
        Given I browse Start with a Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Diamond button
        And I click Select Ring button
        And I select a product in page 2
        And I select Men's Band option under Ways to Save More
        And I select ring size
        And I click Select Men's Band button
        Then I ensure the carat and price of the chosen diamond along with Change link is displayed in the Diamond tab

    #Scenario - 211
    @smoketest @validations
    Scenario: Validating the "2. Settings" tab in the page 2 of matching men's bands
        Given I browse Start with a Lab Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Lab Diamond button
        And I click Select Ring button
        And I select a product in page 2
        And I select Men's Band option under Ways to Save More
        And I select ring size
        And I click Select Men's Band button
        Then I validate the Settings tab with the product name, price and Change link
        When I click Change link in Settings tab
        Then I ensure it redirects from men's bands to the page 3 of the setting chosen

    #Scenario - 212
    @smoketest @validations
    Scenario: Validating the page 2 of matching men's bands
    Given I browse Start with a Lab Diamond page of Rings menu
    When I select Quick view dropdown
    And I select View Lab Diamond button
    And I click Select Ring button
    And I select a product in page 2
    And I select Easy delivery option under Ways to Save More
    And I select Men's Band option under Ways to Save More
    And I select ring size
    And I click Select Men's Band button
    Then I ensure the presence of ways to save more section, multiple filters, product display, inline description and SEO section
    And I click the star rating in the SEO section in page 2
    Then I ensure it redirects to men's rings reviews page

    #Scenario - 214
    @smoketest @validations
    Scenario: Ensure choosing any other stone and re-choosing the VVS diamond should display the VVS diamond designs
        Given I browse Start with a Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Diamond button
        And I click Select Ring button
        And I select a product in page 2
        And I select Men's Band option under Ways to Save More
        And I select ring size
        And I click Select Men's Band button
        Then I ensure the VVS Diamond tag is displayed
        When I select Black Diamond under stone filter
        Then I ensure Black Diamond men's rings are displayed
        When I select VVS Diamond again under stone filter
        Then I ensure the VVS Diamond tag is displayed

    #Scenario - 215
    @smoketest @validations
    Scenario: Verify selecting a men's band in page 2 takes the user to the page 3 with the tab and ways to save more section at the top of the page
        Given I browse Start with a Lab Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Lab Diamond button
        And I click Select Ring button
        And I select a product in page 2
        And I select Men's Band option under Ways to Save More
        And I select ring size
        And I click Select Men's Band button
        And I select a product in page 2
        Then I ensure the page 3 of Men's band with the tab and ways to save more section is displayed

    #Scenario - 216
    @smoketest @validations
    Scenario: Validating the page 3 of matching men's bands
        Given I browse Start with a Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Diamond button
        And I click Select Ring button
        And I select a product in page 2
        And I select Men's Band option under Ways to Save More
        And I select ring size
        And I click Select Men's Band button
        And I select a product in page 2
        Then I verify the mens ring text in short description and product details section
        When I select Easy delivery option under Ways to Save More
        Then I ensure the request custom order button is not displayed and the add to cart button is displayed
        And I select ring size
        When I click Add to cart in page 3
        ## Then I validate the order summary and absence of continue shopping button
        ## When I click Checkout button
        Then I ensure the product added to cart and redirects to shopping cart

    #Scenario - 217
    @smoketest
    Scenario: Ensure "Add Another Men's Ring" button is displayed if additional men's ring option is selected under ways to save more
        Given I browse Start with a Diamond page of Men's menu
        When I select Quick view dropdown
        And I select View Diamond button
        And I click Select Men's Ring button
        And I select a product in page 2
        And I select Additional Men's Ring option under Ways to Save More
        Then I ensure Add Another Men's Ring button is displayed in page 3

    #Scenario - 218
    @smoketest @validations
    Scenario: Validating the functionality of Add Another Men's Ring button
        Given I browse Start with a Lab Diamond page of Men's menu
        When I select Quick view dropdown
        And I select View Lab Diamond button
        And I click Select Men's Ring button
        And I select a product in page 2
        And I select ring size
        And I select Additional Men's Ring option under Ways to Save More
        And I select Easy delivery option under Ways to Save More
        And I click Add Another Men's Ring button
        ## Then I validate the order summary and absence of continue shopping button
        ## When I click Checkout button
        Then I ensure it redirects to Make Your Diamond Men's Rings page

    #Scenario - 219
    @smoketest @validations
    Scenario: Validating the page 2 of additional men's ring
    Given I browse Start with a Diamond page of Men's menu
    When I select Quick view dropdown
    And I select View Diamond button
    And I click Select Men's Ring button
    And I select a product in page 2
    And I select ring size
    And I select Additional Men's Ring option under Ways to Save More
    And I click Add Another Men's Ring button
    ## And I click Checkout button
    Then I ensure the presence of ways to save more section, heading tab, filters, product display with Setting Price text, inline description and SEO section
    And I click the star rating in the SEO section in page 2
    Then I ensure it redirects to men's rings reviews page

    #Scenario - 220
    @smoketest @validations
    Scenario: Verify selecting an additional ring in page 2 takes the user to the page 3 with the tab and ways to save more section at the top of the page
    Given I browse Start with a Lab Diamond page of Men's menu
    When I select Quick view dropdown
    And I select View Lab Diamond button
    And I click Select Men's Ring button
    And I select a product in page 2
    And I select ring size
    And I select Additional Men's Ring option under Ways to Save More
    And I click Add Another Men's Ring button
    ## And I click Checkout button
    And I select a product in page 2
    Then I ensure the page 3 of additional men's ring with the tab and ways to save more section is displayed

    #Scenario - 221
    @smoketest @functional
    Scenario: Ensure custom diamond is selected by default in stone options and Add Diamond to complete message is displayed
        Given I browse Start with a Diamond page of Men's menu
        When I select Quick view dropdown
        And I select View Diamond button
        And I click Select Men's Ring button
        And I select a product in page 2
        And I select ring size
        And I select Additional Men's Ring option under Ways to Save More
        And I click Add Another Men's Ring button
        ## And I click Checkout button
        And I select a product in page 2
        Then I ensure the custom diamond is selected by default in stone options and Add Diamond to complete message is displayed

    #Scenario - 222
    @smoketest @validations
    Scenario: Validating the Select Diamond button in page 3 of additional men's ring
        Given I browse Start with a Lab Diamond page of Men's menu
        When I select Quick view dropdown
        And I select View Lab Diamond button
        And I click Select Men's Ring button
        And I select a product in page 2
        And I select ring size
        And I select Additional Men's Ring option under Ways to Save More
        And I click Add Another Men's Ring button
        ##And I click Checkout button
        And I select a product in page 2
        Then I validate the presence of request custom order and Select Diamond buttons
        When I select ring size
        And I click Select Diamond button
        Then I ensure it redirects to diamond listing page with the applicable filters and updated Settings tab

    #Scenario - 223
    @smoketest @validations
    Scenario: Validating the heading tab after clicking Select Diamond button
        Given I browse Start with a Diamond page of Men's menu
        When I select Quick view dropdown
        And I select View Diamond button
        And I click Select Men's Ring button
        And I select a product in page 2
        And I select ring size
        And I select Additional Men's Ring option under Ways to Save More
        And I click Add Another Men's Ring button
        ##And I click Checkout button
        And I select a product in page 2
        And I select ring size
        And I click Select Diamond button
        Then I ensure the Diamond tab is enabled and pre-selected after selecting a product
        When I click Change link in Settings tab
        Then I ensure it redirects to the page 3 of the setting

    #Scenario - 224
    @smoketest @validations
    Scenario: Validating the "Add Diamond and Checkout" button in the diamond details page
        Given I browse Start with a Diamond page of Men's menu
        When I select Quick view dropdown
        And I select View Diamond button
        And I click Select Men's Ring button
        And I select a product in page 2
        And I select ring size
        And I select Additional Men's Ring option under Ways to Save More
        And I click Add Another Men's Ring button
        ##And I click Checkout button
        And I select a product in page 2
        And I select ring size
        And I click Select Diamond button
        And I select Quick view dropdown
        And I select View Diamond button
        Then I ensure the details of the chosen diamond along with Change link is displayed in the Diamond tab
        When I click the Add Diamond and Checkout button in the diamond details page
        Then I ensure the product added to cart and redirects to shopping cart

    #Scenario - 234
    @smoketest @validations
    Scenario: Validating the flow after selecting Men's band option from band options in Settings page
        Given I browse Start with a Setting page of Rings menu
        When I select a product in page 2
        And I select ring size
        And I click Select Diamond button
        And I select Quick view dropdown
        And I select View Diamond button
        And I select Men's Band option under Ways to Save More
        Then I ensure the men's band tab along with the icon is displayed
        When I click Select Men's Band button in Diamond Details Page
        Then I ensure it redirects to page 2 of men's bands with the heading tab and ways to save more sections

    #Scenario - 235
    @smoketest @validations
    Scenario: Validating the VVS Diamond Men's rings page
        Given I browse Start with a Setting page of Rings menu
        When I select a product in page 2
        And I select ring size
        And I click Select Diamond button
        And I select Quick view dropdown
        And I select View Diamond button
        And I select Men's Band option under Ways to Save More
        And I click Select Men's Band button in Diamond Details Page
        Then I ensure the VVS Diamond tag is displayed
        Then I ensure the presence of multiple filters, product display, inline description and SEO section
        When I click the star rating in the SEO section in page 2
        Then I ensure it redirects to men's rings reviews page

    #Scenario - 236
    @smoketest @validations
    Scenario: Validating page 3 of men's bands in Settings page
        Given I browse Start with a Setting page of Rings menu
        When I select a product in page 2
        And I select ring size
        And I click Select Diamond button
        And I select Quick view dropdown
        And I select View Diamond button
        And I select Men's Band option under Ways to Save More
        And I click Select Men's Band button in Diamond Details Page
        And I select a product in page 2
        Then I verify the mens ring text in short description and product details section
        When I select Easy delivery option under Ways to Save More
        Then I ensure the request custom order button is not displayed and the add to cart button is displayed
        When I select ring size
        And I click Add to cart in page 3
        ### Then I validate the order summary and absence of continue shopping button
        ### When I click Checkout button
        Then I ensure the product added to cart and redirects to shopping cart

    #Scenario - 237
    @smoketest @validations
    Scenario: Ensure page 3 is displayed with "Update men's band" button when coming back from shopping cart
        Given I browse Start with a Setting page of Rings menu
        When I select a product in page 2
        And I select ring size
        And I click Select Diamond button
        And I select Quick view dropdown
        And I select View Diamond button
        And I select Men's Band option under Ways to Save More
        And I click Select Men's Band button in Diamond Details Page
        And I select a product in page 2
        And I select ring size
        And I click Add to cart in page 3
        ##And I click Checkout button
        When I go back to the page 3 of the chosen ring and choose 10K White gold metal
        Then I ensure the Update Men's Band button is displayed
        When I click Update Men's Band button
        Then I ensure the updated men's band product is added to cart and redirects to shopping cart

    #Scenario - 238
    @smoketest @validations
    Scenario: Validating the flow after selecting Women's band option from band options in Settings page
        Given I browse Start with a Setting page of Men's menu
        When I select a product in page 2
        And I select ring size
        And I click Select Diamond button
        And I select Quick view dropdown
        And I select View Diamond button
        And I select Women's Band option under Ways to Save More
        Then I ensure the women's band tab along with the icon is displayed
        When I click Select Women's Band button in Diamond Details Page
        Then I ensure it redirects to page 2 of women's bands with the heading tab and ways to save more sections

    #Scenario - 239
    @smoketest @validations
    Scenario: Validating the 14K White Gold Women's rings page
        Given I browse Start with a Setting page of Men's menu
        When I select a product in page 2
        And I select ring size
        And I click Select Diamond button
        And I select Quick view dropdown
        And I select View Diamond button
        And I select Women's Band option under Ways to Save More
        And I click Select Women's Band button in Diamond Details Page
        Then I ensure the 14K White gold metal tag is displayed by default
        Then I verify the presence of filters, product display, inline description and SEO section

    #Scenario - 240
    @smoketest
    Scenario: Validating page 3 of men's bands in Settings page
        Given I browse Start with a Setting page of Rings menu
        When I select a product in page 2
        And I select ring size
        And I click Select Diamond button
        And I select Quick view dropdown
        And I select View Diamond button
        And I select Women's Band option under Ways to Save More
        And I click Select Women's Band button in Diamond Details Page
        And I select a product in page 2
        #When I select Easy delivery option under Ways to Save More
        Then I ensure the request custom order button is not displayed and the add to cart button is displayed
        When I click Add to cart in page 3
        ##Then I validate the order summary and absence of continue shopping button
        ##When I click Checkout button
        Then I ensure the product added to cart and redirects to shopping cart

    #Scenario - 241
    @smoketest
    Scenario: Ensure page 3 is displayed with "Update women's band" button when coming back from shopping cart
        Given I browse Start with a Setting page of Rings menu
        When I select a product in page 2
        And I select ring size
        And I click Select Diamond button
        And I select Quick view dropdown
        And I select View Diamond button
        And I select Women's Band option under Ways to Save More
        And I click Select Women's Band button in Diamond Details Page
        And I select a product in page 2
        And I click Add to cart in page 3
        ##And I click Checkout button
        When I go back to the page 3 of the chosen ring and choose 10K White gold metal
        Then I ensure the Update Women's Band button is displayed
        When I click Update Women's Band button
        Then I ensure the updated women's band product is added to cart and redirects to shopping cart

    #Scenario - 242
    @smoketest
    Scenario: Validating the flow of selecting Both Bands option under Ways to Save More in Settings page
        Given I browse Start with a Setting page of Rings menu
        When I select a product in page 2
        And I select ring size
        And I click Select Diamond button
        And I select Quick view dropdown
        And I select View Diamond button
        And I select Both Bands option under Ways to Save More
        And I click Select Women's Band button in Diamond Details Page
        And I select a product in page 2
        And I click Select Men's Band button in Diamond Details Page
        And I select a product in page 2
        Then I verify the mens ring text in short description and product details section
        Then I ensure the request custom order button is not displayed and the add to cart button is displayed

    #DEFECT ID 24
    #Scenario - 260
    @smoketest @validations
    Scenario: Both Bands scenario - Ensure choosing another diamond by clicking "Change" in 1. Diamond tab redirects to Diamond details page and shows the button "Select Men's Band"
        Given I browse Start with a Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Diamond button
        And I click Select Ring button
        And I select a product in page 2
        And I select Both Bands option under Ways to Save More
        And I select ring size
        And I click Select Women's Band button
        And I select a product in page 2
        And I click Select Men's Band button
        And I click Change link in the Diamond tab from the page 3 of Women's Band
        And I select Quick view dropdown of second row
        And I select View Diamond button
        Then I ensure Select Men's Band button is displayed in the Diamond Details Page
        When I click Select Men's Band button in Diamond Details Page
        Then I ensure it redirects to page 2 of men's bands along with the heading tab and ways to save more sections
