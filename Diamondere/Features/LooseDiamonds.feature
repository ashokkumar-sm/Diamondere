Feature: Testing Loose Diamond/Loose Lab Diamond pages of Diamondere

    Background: Browsing staging environment of Diamondere
        Given I browse Diamondere website
        When I remove products if already added in cart
        When I want to clear local storage

# LOOSE DIAMONDS / LOOSE LAB DIAMONDS
    #Scenario - 243
    @smoketest @validations
    Scenario: Validate the loose diamonds page gets refreshed and displays the results when clicking Loose Diamonds/Lab Diamonds in the breadcrumb
        Given I browse Start with a Diamond page of Rings menu
        When I select Loose Diamonds in the breadcrumb
        Then I ensure the Loose Diamonds page is displayed with the filters and the diamond listing table
        When I browse Start with a Lab Diamond page of Men's menu
        And I select Loose Lab Diamonds in the breadcrumb
        Then I ensure the Loose Lab Diamonds page is displayed with the filters and the diamond listing table

    #Scenario - 244
    @smoketest1 @validations
    Scenario: Ensure the number of diamonds listed for the search is displayed near the breadcrumb
        Given I browse Start with a Diamond page of Earrings menu
        When I select Loose Diamonds in the breadcrumb
        Then I ensure the number of diamonds listed for the search is displayed near the breadcrumb
        When I browse Start with a Lab Diamond page of Necklaces menu
        And I select Loose Lab Diamonds in the breadcrumb
        Then I ensure the number of diamonds listed for the search is displayed near the breadcrumb

    #Scenario - 245
    @smoketest @validations
    Scenario: Ensure the "Ways to Save More" text is not present with the filters in Loose Diamonds/Loose Lab Diamonds page
        Given I browse Start with a Lab Diamond page of Rings menu
        When I select Loose Lab Diamonds in the breadcrumb
        Then I ensure the Ways to Save More text is not present with the filters
        When I browse Start with a Diamond page of Men's menu
        And I select Loose Diamonds in the breadcrumb
        Then I ensure the Ways to Save More text is not present with the filters

    #Scenario - 246
    @smoketest1 @validations
    Scenario: Validating the filters in the Loose Diamonds/Loose Lab Diamonds page
        Given I browse Start with a Lab Diamond page of Earrings menu
        When I select Loose Lab Diamonds in the breadcrumb
        And I select More Filters button
        And I hover over each filter name in Loose Diamonds page
        Then I ensure the preview text description is displayed
        When I browse Start with a Diamond page of Necklaces menu
        And I select Loose Diamonds in the breadcrumb
        And I select More Filters button
        And I hover over each filter name in Loose Diamonds page
        Then I ensure the preview text description is displayed

    #Scenario - 247
    @smoketest @validations
    Scenario: Validating the shape filter options in the Loose Diamonds/Loose Lab Diamonds page
        Given I browse Start with a Diamond page of Rings menu
        When I select Loose Diamonds in the breadcrumb
        Then I ensure the shape filter options are displayed
        When I browse Start with a Lab Diamond page of Men's menu
        And I select Loose Lab Diamonds in the breadcrumb
        Then I ensure the shape filter options are displayed

    #Scenario - 248
    @smoketest1 @validations
    Scenario: Ensure the Add to Cart, Select with Ring and Select with Necklace buttons are displayed in the Diamond details page
        Given I browse Start with a Diamond page of Earrings menu
        When I select Loose Diamonds in the breadcrumb
        And I select Quick view dropdown
        And I click View Diamond button in the table 
        Then I ensure the Add to Cart, Select with Ring and Select with Necklace buttons are displayed in the Diamond details page
        When I browse Start with a Lab Diamond page of Necklaces menu
        And I select Loose Lab Diamonds in the breadcrumb
        And I select Quick view dropdown
        And I select View Lab Diamond button
        Then I ensure the Add to Cart, Select with Ring and Select with Necklace buttons are displayed in the Diamond details page

    #Scenario - 249
    @smoketest @validations
    Scenario: Validating the functionalities of Add to Cart, Select with Ring and Select with Necklace buttons
        Given I browse Start with a Diamond page of Rings menu
        When I select Loose Diamonds in the breadcrumb
        And I select Quick view dropdown
        And I select View Diamond button
        And I select Add to Cart button in the Diamond Details Page
        Then I ensure the order summary popup is displayed
        When I browse Start with a Lab Diamond page of Men's menu
        And I select Loose Lab Diamonds in the breadcrumb
        And I select Quick view dropdown
        And I select View Lab Diamond button
        And I select Select with Ring button in the Diamond Details Page
        Then I ensure the Start with a Setting page of Rings is displayed
        When I browse Start with a Diamond page of Necklaces menu
        And I select Loose Diamonds in the breadcrumb
        And I select Quick view dropdown
        And I select View Diamond button
        And I select Select with Necklace button in the Diamond Details Page
        Then I ensure the Start with a Setting page of Necklaces is displayed
