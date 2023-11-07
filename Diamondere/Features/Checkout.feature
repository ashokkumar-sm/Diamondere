
Feature: Testing the checkout page of Diamondere

    Background: Browsing checkout page
        Given I browse Diamondere website
        When I logout if already logged in
        When I remove products if already added in cart
        When I want to clear local storage
        And I browse page 3 of earring Vogue
        And I click Add to cart for Vogue
        And I click Checkout button
        And I click Proceed to Payment in Shopping Cart Page
    
    #Scenario - 1 
    @validations
    Scenario: Verifying that the checkout page is displayed after clicking Proceed To Payment in shopping cart page
        Given I click Diamondere checkout logo
        Then I ensure it stays in the checkout page with other menus and various sections

    #Scenario - 2
    @validations
    Scenario: Validating the Shipping address section
        Given I move to Shipping Address section
        Then I ensure the fields to fill in the shipping address are displayed 

    #Scenario - 3
    @validations
    Scenario: Shipping - Ensure that the First Name field has no character validation but has a char limit 
        Given I verify the char limit and enter restricted characters in First Name field
        Then I ensure that the character validation message is not displayed

    #Scenario - 4
    @validations
    Scenario: Shipping - Ensure that the Last Name field has no character validation but has a char limit 
        Given I verify the char limit and enter restricted characters in Last Name field
        Then I ensure that the character validation message is not displayed 

    #Scenario - 5
    @validations
    Scenario: Shipping - Validating the format validation of Email field 
        Given I enter invalid email in the Email field
        Then I ensure the error format message is displayed

    #Scenario - 6
    @validations
    Scenario: Shipping - Validating the char limit and character validation of Phone field
        Given I verify the char limit and enter restricted characters in Phone field
        Then I ensure the character validation message for Phone field is displayed

    #Scenario - 7
    @validations
    Scenario: Shipping - Ensure that the Address field has no character validation but has a char limit 
        Given I verify the char limit and enter restricted characters in Address field
        Then I ensure that the character validation message is not displayed 

    #Scenario - 8
    @validations
    Scenario: Shipping - Ensure that the Address line 2 field has no character validation but has a char limit 
        Given I verify the char limit and enter restricted characters in Address line 2 field
        Then I ensure that the character validation message is not displayed 

    #Scenario - 9
    @validations
    Scenario: Shipping - Ensure that the City field has no character validation but has a char limit 
        Given I verify the char limit and enter restricted characters in City field
        Then I ensure that the character validation message is not displayed 

    #NEED TO ADD ALL OPTIONS
    #Scenario - 10
    @validations
    Scenario: Shipping - Validating the country field dropdown with all values
        Given I select the Country field dropdown
        Then I validate all the options under Country dropdown

    #NEED TO ADD ALL OPTIONS FOR US & CANADA
    #Scenario - 11
    @validations
    Scenario: Shipping - Ensure the State field functions as a dropdown for US and Canada
        Given I select US in the country dropdown
        Then I ensure the State field functions as a dropdown with the values of US states
        When I select Canada in the country dropdown
        Then I ensure the State field functions as a dropdown with the values of Canada states

    #Scenario - 12
    @validations
    Scenario: Shipping - Ensure that the State field has no character validation but has a char limit 
        Given I select India in the country dropdown
        When I verify the char limit and enter restricted characters in State field
        Then I ensure that the character validation message is not displayed 

    #Scenario - 13
    @validations
    Scenario: Shipping - Ensure that the Zip field has no character validation but has a char limit 
        Given I verify the char limit and enter restricted characters in Zip field
        Then I ensure that the character validation message is not displayed 

    #Scenario - 14
    @validations
    Scenario: Shipping - Validating the mandatory fields
        Given I select Continue To Payment button
        Then I ensure the mandatory field messages and popup are displayed 

    #Scenario - 15
    @smoketest
    Scenario: Shipping - Ensure the confirmed address is displayed after entering valid details
        Given I enter First Name in Shipping address
        When I enter Last Name in Shipping address
        And I enter Email in Shipping address
        And I enter Phone in Shipping address
        And I enter Address in Shipping address
        And I enter Address line 2 in Shipping address
        And I enter City in Shipping address
        And I select US in the country dropdown
        And I select California in the state dropdown
        And I enter Zip code in Shipping address
        And I click Continue To Payment button
        Then I ensure the checked Shipping & Billing heading is displayed with all the entered details
        When I want to clear local storage

    #Scenario - 16
    @smoketest
    Scenario: Shipping - Ensure the confirmed address is displayed after skipping address line 2
        Given I enter First Name in Shipping address
        When I enter Last Name in Shipping address
        And I enter Email in Shipping address
        And I enter Phone in Shipping address
        And I enter Address in Shipping address
        And I enter City in Shipping address
        And I select US in the country dropdown
        And I select California in the state dropdown
        And I enter Zip code in Shipping address
        And I click Continue To Payment button
        Then I ensure the checked Shipping & Billing heading is displayed with all the entered details
        When I want to clear local storage

    #Scenario - 17
    @smoketest
    Scenario: Shipping - Ensure the state field is mandatory only for US and not for other countries
        Given I enter First Name in Shipping address
        When I enter Last Name in Shipping address
        And I enter Email in Shipping address
        And I enter Phone in Shipping address
        And I enter Address in Shipping address
        And I enter Address line 2 in Shipping address
        And I enter City in Shipping address
        And I select US in the country dropdown
        And I enter Zip code in Shipping address
        And I select Continue To Payment button
        Then I ensure the error mandatory message and popup for State field is displayed
        When I select India in the country dropdown
        And I click Continue To Payment button
        Then I ensure the checked Shipping & Billing heading is displayed with all the entered details
        When I want to clear local storage

    #Scenario - 18
    @smoketest
    Scenario: Validating the shipping and billing sections with the same entered details
        Given I enter First Name in Shipping address
        When I enter Last Name in Shipping address
        And I enter Email in Shipping address
        And I enter Phone in Shipping address
        And I enter Address in Shipping address
        And I enter Address line 2 in Shipping address
        And I enter City in Shipping address
        And I select US in the country dropdown
        And I select California in the state dropdown
        And I enter Zip code in Shipping address
        And I click Continue To Payment button
        Then I ensure the details of Shipping & Billing sections are same
        When I want to clear local storage

    #Scenario - 19
    @smoketest
    Scenario: Validating the edited details under shipping and billing sections
        Given I enter First Name in Shipping address
        When I enter Last Name in Shipping address
        And I enter Email in Shipping address
        And I enter Phone in Shipping address
        And I enter Address in Shipping address
        And I enter Address line 2 in Shipping address
        And I enter City in Shipping address
        And I select US in the country dropdown
        And I select California in the state dropdown
        And I enter Zip code in Shipping address
        And I click Continue To Payment button
        And I click Edit under Shipping & Billing section
        And I change the First Name to Diamondere
        And I click Continue To Payment button
        Then I verify the edited name is displayed under Shipping & Billing section
        When I want to clear local storage

    #Scenario - 20
    @validations
    Scenario: Validating the Billing address section
        Given I disable the Same as shipping address toggle button
        Then I ensure the fields to fill in the billing address are displayed 

    #Scenario - 21
    @validations
    Scenario: Billing - Ensure that the First Name field has no character validation but has a char limit 
        Given I disable the Same as shipping address toggle button
        When I verify the char limit and enter restricted characters in First Name field of Billing section
        Then I ensure that the character validation message is not displayed

    #Scenario - 22
    @validations
    Scenario: Billing - Ensure that the Last Name field has no character validation but has a char limit 
        Given I disable the Same as shipping address toggle button
        When I verify the char limit and enter restricted characters in Last Name field of Billing section
        Then I ensure that the character validation message is not displayed 

    #Scenario - 23
    @validations
    Scenario: Billing - Validating the format validation of Email field 
        Given I disable the Same as shipping address toggle button
        When I enter invalid email in the Email field of Billing section
        Then I ensure the error format message is displayed

    #Scenario - 24
    @validations
    Scenario: Billing - Validating the char limit and character validation of Phone field
        Given I disable the Same as shipping address toggle button
        When I verify the char limit and enter restricted characters in Phone field of Billing section
        Then I ensure the character validation message for Phone field is displayed

    #Scenario - 25
    @validations
    Scenario: Billing - Ensure that the Address field has no character validation but has a char limit 
        Given I disable the Same as shipping address toggle button
        When I verify the char limit and enter restricted characters in Address field of Billing section
        Then I ensure that the character validation message is not displayed 

    #Scenario - 26
    @validations
    Scenario: Billing - Ensure that the Address line 2 field has no character validation but has a char limit 
        Given I disable the Same as shipping address toggle button
        When I verify the char limit and enter restricted characters in Address line 2 field of Billing section
        Then I ensure that the character validation message is not displayed 

    #Scenario - 27
    @validations
    Scenario: Billing - Ensure that the City field has no character validation but has a char limit 
        Given I disable the Same as shipping address toggle button
        When I verify the char limit and enter restricted characters in City field of Billing section
        Then I ensure that the character validation message is not displayed 

    #NEED TO ADD ALL OPTIONS
    #Scenario - 28
    @validations
    Scenario: Billing - Validating the country field dropdown with all values
        Given I disable the Same as shipping address toggle button
        When I select the Country field dropdown of Billing section
        Then I validate all the options under Country dropdown of Billing section

    #NEED TO ADD ALL OPTIONS FOR US & CANADA
    #Scenario - 29
    @validations
    Scenario: Billing - Ensure the State field functions as a dropdown for US and Canada
        Given I disable the Same as shipping address toggle button
        When I select US in the country dropdown of Billing section
        Then I ensure the State field functions as a dropdown with the values of US states of Billing section
        When I select Canada in the country dropdown of Billing section
        Then I ensure the State field functions as a dropdown with the values of Canada states of Billing section

    #Scenario - 30
    @validations
    Scenario: Billing - Ensure that the State field has no character validation but has a char limit 
        Given I disable the Same as shipping address toggle button
        When I select India in the country dropdown of Billing section
        When I verify the char limit and enter restricted characters in State field of Billing section
        Then I ensure that the character validation message is not displayed 

    #Scenario - 31
    @validations
    Scenario: Billing - Ensure that the Zip field has no character validation but has a char limit 
        Given I disable the Same as shipping address toggle button
        When I verify the char limit and enter restricted characters in Zip field of Billing section
        Then I ensure that the character validation message is not displayed 

    #Scenario - 32
    @validations
    Scenario: Billing - Validating the mandatory fields
        When I want to clear local storage
        Given I disable the Same as shipping address toggle button
        When I enter valid address details in Shipping & Billing section
        When I select Continue To Payment button
        Then I ensure the mandatory field messages and popup are displayed 
        When I want to clear local storage

    #Scenario - 33
    @smoketest
    Scenario: Billing - Ensure the confirmed address is displayed after entering valid details
        Given I disable the Same as shipping address toggle button
        When I enter valid address details in Shipping & Billing section
        When I enter First Name in Billing address
        When I enter Last Name in Billing address
        And I enter Email in Billing address
        And I enter Phone in Billing address
        And I enter Address in Billing address
        And I enter Address line 2 in Billing address
        And I enter City in Billing address
        And I select US in the country dropdown of Billing section
        And I select California in the state dropdown of Billing section
        And I enter Zip code in Billing address
        And I click Continue To Payment button
        Then I ensure the checked Shipping & Billing heading is displayed with all the entered details
        When I want to clear local storage

    #Scenario - 34
    @smoketest
    Scenario: Billing - Ensure the confirmed address is displayed after skipping address line 2
        Given I disable the Same as shipping address toggle button
        When I enter valid address details in Shipping & Billing section
        When I enter First Name in Billing address
        When I enter Last Name in Billing address
        And I enter Email in Billing address
        And I enter Phone in Billing address
        And I enter Address in Billing address
        And I enter City in Billing address
        And I select US in the country dropdown of Billing section
        And I select California in the state dropdown of Billing section
        And I enter Zip code in Billing address
        And I click Continue To Payment button
        Then I ensure the checked Shipping & Billing heading is displayed with all the entered details
        When I want to clear local storage

    #Scenario - 35
    @smoketest
    Scenario: Billing - Ensure the state field is mandatory only for US and not for other countries
        Given I disable the Same as shipping address toggle button
        When I enter valid address details in Shipping & Billing section
        When I enter First Name in Billing address
        When I enter Last Name in Billing address
        And I enter Email in Billing address
        And I enter Phone in Billing address
        And I enter Address in Billing address
        And I enter City in Billing address
        And I select US in the country dropdown of Billing section
        And I enter Zip code in Billing address
        And I select Continue To Payment button
        Then I ensure the error mandatory message and popup for State field is displayed
        When I select India in the country dropdown of Billing section
        And I click Continue To Payment button
        Then I ensure the checked Shipping & Billing heading is displayed with all the entered details
        When I want to clear local storage

    #Scenario - 36
    @smoketest
    Scenario: Validating the shipping and billing sections with the different entered details
        Given I disable the Same as shipping address toggle button
        When I enter valid address details in Shipping & Billing section
        When I enter First Name in Billing address
        When I enter Last Name in Billing address
        And I enter Email in Billing address
        And I enter Phone in Billing address
        And I enter Address in Billing address
        And I enter Address line 2 in Billing address
        And I enter City in Billing address
        And I select Canada in the country dropdown of Billing section
        And I select Ontario in the state dropdown of Billing section
        And I enter Zip code in Billing address
        And I click Continue To Payment button
        Then I ensure the details of Shipping & Billing sections are different
        When I want to clear local storage

    #Scenario - 37
    @smoketest
    Scenario: Editing the email ID - Validating the edited details under shipping and billing sections
        Given I disable the Same as shipping address toggle button
        When I enter valid address details in Shipping & Billing section
        When I enter First Name in Billing address
        When I enter Last Name in Billing address
        And I enter Email in Billing address
        And I enter Phone in Billing address
        And I enter Address in Billing address
        And I enter Address line 2 in Billing address
        And I enter City in Billing address
        And I select US in the country dropdown of Billing section
        And I select California in the state dropdown of Billing section
        And I enter Zip code in Billing address
        And I click Continue To Payment button
        And I click Edit under Shipping & Billing section
        And I edit the entered email in Billing section
        And I click Continue To Payment button
        Then I verify the edited email is displayed under Shipping & Billing section
        When I want to clear local storage

    #Scenario - 42
    @validations
    Scenario: Validating the Extend link present under product details in checkout page
        Given I move to Product Details section
        When I click Extend link
        Then I ensure it redirects to the page of Extend

    #Scenario - 44
    @smoketest
    Scenario: Validating the price details section in checkout page
        Given I move to Product Details section
        Then I verify the price details of the added product in cart

    
    #Scenario - 46
    @smoketest
    Scenario: Verifying the sales tax amount generated based on the state chosen in the US
        Given I enter valid address details in Shipping & Billing section
        Then I verify that the sales tax amount is generated for California and I validate the disclaimer message
        When I select South Dakota in the state dropdown
        Then I verify that the sales tax amount is zero

    #Scenario - 47
    @smoketest
    Scenario: Verifying the prepaid tax amount row along with the disclaimers after choosing Australia in the country dropdown
        Given I select Australia in the country dropdown
        Then I verify the prepaid tax amount along with the disclaimer messages

    #Scenario - 48
    @smoketest
    Scenario: Verifying that the sales tax amount is generated based on the country chosen
        Given I select India in the country dropdown
        Then I verify that the sales tax amount is zero

    #Scenario - 49
    @validations
    Scenario: Validating the Safe & Secure checkout link
        Given I scroll to price details section 
        Then I verify the presence of safe and secure checkout link and text
        When I select the safe and secure link
        Then I ensure it redirects to the Digicert secure page

    #Scenario - 50
    @validations
    Scenario: Validating the footer and the disclaimer link
        Given I scroll to price details section 
        Then I verify the presence of footer and disclaimer link
        When I select the Disclaimer link
        Then I ensure it redirects to the Disclaimer page of Diamondere
    
    #Scenario - 51
    @smoketest
    Scenario: Verify the payment section is displayed after entering valid address details
        Given I enter valid address details in Shipping & Billing section
        When I click Continue To Payment button
        Then I ensure the payment options are displayed

    #Scenario - 53
    @smoketest
    Scenario: Ensure the shipping address and billing address fields are blank for guest users
        Given I move to Shipping Address section
        Then I ensure the name and email fields are blank for guest users