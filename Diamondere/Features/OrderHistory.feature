Feature: Testing Order History page of Diamondere

    Background: Browsing staging environment
        Given I browse Diamondere website
    #1
    @validations
    Scenario: Validating the order history option and the order history page
        Given I click the Login and Signup icon in the Homepage
        Then I ensure clicking the Login and Signup icon opens the Login Register page
        When I enter the Email and Password fields in the login form
        Then I click the login button
        And I ensure the login button returns to the Homepage of the diamondere
        When I hover on Login and Signup icon
        And I click the Order history option from the dropdown
        Then I ensure clicking the Order history option redirects to the order history page
        And I ensure the order history text and the order details card for each order is present
        And I click logout
       
    #2
    @smoketest
    Scenario:Validating the order details page and Clicking the View details link in the order details card
        Given I click the Login and Signup icon in the Homepage
        When I enter the Email and Password fields in the login form
        Then I click the login button
        When I hover on Login and Signup icon
        And I click the Order history option from the dropdown
        Then I ensure clicking the Order history option redirects to the order history page
        And I ensure the order details,View detail link, shipping and billing address are present in the order details card
        When I click the View Details link in the order details card
        Then I ensure clicking the View Details link in the order details card redirects to the order details page

    #3
    @validations
    Scenario: Checking the components in the order details page
        Given I browse the first Order Details page
        Then I ensure the Order Details,Order ID,Order Status and order date are present

    #4
    @smoketest
    Scenario: Checking the order summary section in the first order details page
        Given I browse the first Order Details page
        Then I ensure the order summary text is present in the Order summary section
        Then I ensure the ordered products image,description and price is present
        And I ensure the bracelet length text is present
        Then I ensure the subtotal,sales tax,shipping and total text along with the price are present
        And I ensure the payment type and payment method text are present
    #5
    @validations
    Scenario:  Checking the order summary section in the second order details page
        Given I browse the second Order Details page
        Then I ensure the chain size text is present
        And I ensure the payment type and payment method text are present in the second order details page
    #6
    @validations
    Scenario:  Checking the order summary section in the third order details page
        Given I browse the third Order Details page
        Then I ensure the engraving text and extend plan are present
        When I move to the Rayce ring 
        Then I ensure the His and Her ring text are present
        And I ensure the protection plan,payment type and payment method text are present in the third order details page
    #7
    @validations
    Scenario: Checking address section in the first order details page
        Given I browse the first Order Details page
        When I move to the address section in the order details page
        Then shipping and billing information text,shipping and billing address are present




