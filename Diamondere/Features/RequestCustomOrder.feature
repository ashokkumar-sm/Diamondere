
Feature: Testing Request Custom Order feature of Diamondere

    Background: Browsing staging environment of Diamondere
        Given I browse Diamondere website
        When I remove products if already added in cart
        When I want to clear local storage  
  
  # REQUEST CUSTOM ORDER
    #Scenario - 250
    @smoketest @validations
    Scenario: Verifying the Request Custom Order button in page 3 of normal product and page 3 of MYOJ product
        Given I browse page 3 of ring Miya
        When I click Request Custom Order button in page 3
        Then I ensure it redirects to Request custom order page
        When I browse page 3 of ring Miya with custom diamond
        And I click Request Custom Order button
        Then I ensure it redirects to Request custom order page

    #Scenario - 251
    @smoketest @validations
    Scenario: Verifying the Request Custom Order link under product display in page 3 of normal product and page 3 of MYOJ product
        Given I browse page 3 of ring Miya
        When I click Request Custom Order link
        Then I ensure it redirects to Request custom order page
        When I browse page 3 of ring Miya with custom diamond
        And I click Request Custom Order link
        Then I ensure it redirects to Request custom order page

    #Scenario - 252
    @validations
    Scenario: Validating the various sections present in the Request Custom Order page
        Given I browse page 3 of ring Miya with custom diamond
        When I click Request Custom Order link
        Then I validate the presence of heading, banner, text, image, product name, and the customization process banner

    #Scenario - 253
    @smoketest @validations
    Scenario: Ensure image of the product in Request Custom Order and image of the product in Page 3 is showing correctly
        Given I browse page 3 of ring Miya
        Then I ensure the image details in page 3 are present
        And I click Request Custom Order link
        Then I verify the ring image present in the request custom order page is as same as the image in page 3

    #Scenario - 254
    @smoketest @functional
    Scenario: Validating the Name field in the request custom order form
        Given I browse page 3 of ring Miya with custom diamond
        When I click Request Custom Order link
        Then I ensure the Name field is displayed in the request custom order form
        When I click Submit Customization Request button
        # When I enter name in the request custom order form
        # And I clear the entered data in name field
        Then I ensure the Name field is marked mandatory
        When I enter special characters and numbers in the name field of request custom order
        Then I ensure the error validation message for the name field is displayed

    #Scenario - 255
    @smoketest @functional
    Scenario: Validating the Email field in the request custom order form
        Given I browse page 3 of ring Miya
        When I click Request Custom Order button in page 3
        Then I ensure the Email field is displayed in the request custom order form
        When I click Submit Customization Request button
        # When I enter email in the request custom order form
        # And I clear the entered data in email field
        Then I ensure the Email field is marked mandatory
        When I enter special characters and spaces in the email field
        Then I ensure the error validation message for the email field is displayed

    #Scenario - 256
    @smoketest @functional
    Scenario: Validating the Phone field in the request custom order form
        Given I browse page 3 of ring Miya with custom diamond
        When I click Request Custom Order link
        Then I ensure the Phone field is displayed in the request custom order form
        When I click Submit Customization Request button
        # When I enter phone number in the request custom order form
        # And I clear the entered data in phone number field
        Then I ensure the Phone field is marked mandatory
        When I enter restricted characters in the Phone field
        Then I ensure the error validation message for the phone field is displayed

    #Scenario - 257
    @smoketest @validations
    Scenario: Validating the Customization Request field in the request custom order form
        Given I browse page 3 of ring Miya
        When I click Request Custom Order button in page 3
        Then I ensure the Customization Request field is displayed in the request custom order form
        When I click Submit Customization Request button
        # When I enter Customization Request in the request custom order form
        # And I clear the entered data in Customization Request number field
        Then I ensure the Customization Request field is marked mandatory

    #Scenario - 258
    @validations
    Scenario: Validating the Upload Image field in the request custom order form
        Given I browse page 3 of ring Miya with custom diamond
        When I click Request Custom Order link
        Then I ensure the upload image button with the accepted format is displayed

    #Scenario - 259
    @smoketest @validations
    Scenario: Validating the response submitted in the request custom order form after skipping the photo uploading option
        Given I browse page 3 of ring Miya
        When I click Request Custom Order link
        And I enter name in the request custom order form
        And I enter email in the request custom order form
        And I enter phone number in the request custom order form
        And I enter Customization Request in the request custom order form
        And I click Submit Customization Request button
        Then I ensure the success popup for the submitted customization request is displayed

    #Scenario - 264
    @smoketest @validations
    Scenario: Validating the response submitted in the request custom order form after uploading the image
        Given I browse page 3 of ring Miya
        When I click Request Custom Order link
        And I enter name in the request custom order form
        And I enter email in the request custom order form
        And I enter phone number in the request custom order form
        And I enter Customization Request in the request custom order form
        And I upload image in request custom order form
        And I click Submit Customization Request button
        Then I ensure the success popup for the submitted customization request is displayed

    #Scenario - 265
    @smoketest @validations
    Scenario: Validating the error response in the request custom order form after uploading the invalid format
        Given I browse page 3 of ring Miya
        When I click Request Custom Order link
        And I upload invalid image in request custom order form
        Then I ensure the error popup for wrong upload is displayed
