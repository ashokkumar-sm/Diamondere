Feature: Testing the checkout page of Loggedin user in Diamondere

    Background: Browsing checkout page
        Given I browse Diamondere website
        When I logout if already logged in
        When I remove products if already added in cart
        When I want to clear local storage
        When I click the Login and Signup icon in the Homepage
        And I login to verify the checkout page
        And I click cart icon

     #Scenario - 38
    @smoketest
    Scenario: Validate the Ring details with pre-selected protection plan
        Given I click Proceed to Payment in Shopping Cart Page
        Then I validate the ring details with pre-selected protection plan
        And I browse back and click logout

    #Scenario - 39
    @smoketest
    Scenario: Validate the Necklace and Chain details with protection plan options
        Given I click Proceed to Payment in Shopping Cart Page
        Then I validate the necklace and chain details with protection plan options
        And I browse back and click logout

    #Scenario - 40
    @smoketest
    Scenario: Validate the Bracelet details with protection plan options
        Given I click Proceed to Payment in Shopping Cart Page
        Then I validate the bracelet details with protection plan options
        And I browse back and click logout

    #Scenario - 41
    @validations
    Scenario: Validate the Earring details with pre-selected protection plan
        Given I click Proceed to Payment in Shopping Cart Page
        Then I validate the earring details with pre-selected protection plan
        And I browse back and click logout

    #Scenario - 43
    @smoketest
    Scenario: Ensure that the protection plan options are available only for US and not for other countries
        Given I click Proceed to Payment in Shopping Cart Page
        And I select US in the country dropdown
        Then I ensure the protection plan options are available for the product
        When I select India in the country dropdown
        Then I ensure the protection plan options are disabled and I validate the error message
        And I browse back and click logout

    #Scenario - 45
    @validations
    Scenario: Ensure that the expected delivery date and the disclaimer for the chosen custom diamond is displayed
        Given I click cart icon
        And I click Proceed to Payment in Shopping Cart Page
        And I scroll to price details section 
        Then I ensure the expected delivery date and the disclaimer message is displayed
        And I browse back and click logout

    #Scenario - 52
    @smoketest
    Scenario: Ensure user can remove the chosen protection plan and choose any other plan in checkout page
        Given I click Proceed to Payment in Shopping Cart Page
        And I select US in the country dropdown
        And I remove the chosen 3 year plan in Earring
        And I select Lifetime protection plan
        Then I ensure the lifetime protection plan has been added for the earring
        And I select 3 year protection plan again
        And I browse back and click logout

    #Scenario - 54
    @smoketest
    Scenario: Verifying that the name and email are pre populated for loggedin users
        Given I click Proceed to Payment in Shopping Cart Page
        Then I verify the name and email are pre populated in the shipping address section
        And I browse back and click logout