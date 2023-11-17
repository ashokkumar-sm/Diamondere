Feature: Testing the APIs and checkout page of Diamondere

    @smoketest
    Scenario: Checking the Registration API
    Given I call the registration API endpoint
    Then I verify the response of the registration API

    @smoketest
    Scenario: Checking the Login API
    Given I call the login API endpoint
    Then I verify the response of the login API
    And I get the AuthToken for the loggedin user

    @smoketest
    Scenario: Checking the Add to cart API for multiple products
    Given I call the Add to Cart API endpoint
    Then I verify the response of the Add to Cart API 

    #Scenario - 38
    @smoketest
    Scenario: Validate the Ring details with pre-selected protection plan
        Given I browse Diamondere website
        When I logout if already logged in
        When I remove products if already added in cart
        When I want to clear local storage
        When I click the Login and Signup icon in the Homepage
        And I login to verify the checkout page
        And I click cart icon
        When I click Proceed to Payment in Shopping Cart Page
        Then I validate the ring details with pre-selected protection plan
        And I browse back and click logout

    #Scenario - 39
    @smoketest1
    Scenario: Validate the Necklace and Chain details with protection plan options
        Given I browse Diamondere
        When I logout if already logged in
        When I remove products if already added in cart
        When I want to clear local storage
        When I click the Login and Signup icon in the Homepage
        And I login to verify the checkout page
        And I click cart icon
        When I click Proceed to Payment in Shopping Cart Page
        Then I validate the necklace and chain details with protection plan options
        And I browse back and click logout

    #Scenario - 40
    @smoketest1
    Scenario: Validate the Bracelet details with protection plan options
        Given I browse Diamondere
        When I logout if already logged in
        When I remove products if already added in cart
        When I want to clear local storage
        When I click the Login and Signup icon in the Homepage
        And I login to verify the checkout page
        And I click cart icon
        When I click Proceed to Payment in Shopping Cart Page
        Then I validate the bracelet details with protection plan options
        And I browse back and click logout

    #Scenario - 41
    @validations
    Scenario: Validate the Earring details with pre-selected protection plan
        Given I browse Diamondere
        When I logout if already logged in
        When I remove products if already added in cart
        When I want to clear local storage
        When I click the Login and Signup icon in the Homepage
        And I login to verify the checkout page
        And I click cart icon
        When I click Proceed to Payment in Shopping Cart Page
        Then I validate the earring details with pre-selected protection plan
        And I browse back and click logout

    #Scenario - 43
    @smoketest1
    Scenario: Ensure that the protection plan options are available only for US and not for other countries
        Given I browse Diamondere
        When I logout if already logged in
        When I remove products if already added in cart
        When I want to clear local storage
        When I click the Login and Signup icon in the Homepage
        And I login to verify the checkout page
        And I click cart icon
        When I click Proceed to Payment in Shopping Cart Page
        And I select US in the country dropdown
        Then I ensure the protection plan options are available for the product
        When I select India in the country dropdown
        Then I ensure the protection plan options are disabled and I validate the error message
        And I browse back and click logout

    #Scenario - 45
    @validations
    Scenario: Ensure that the expected delivery date and the disclaimer for the chosen custom diamond is displayed
        Given I browse Diamondere
        When I logout if already logged in
        When I remove products if already added in cart
        When I want to clear local storage
        When I click the Login and Signup icon in the Homepage
        And I login to verify the checkout page
        And I click cart icon
        And I click Proceed to Payment in Shopping Cart Page
        And I scroll to price details section 
        Then I ensure the expected delivery date and the disclaimer message is displayed
        And I browse back and click logout

    #Scenario - 52
    @smoketest
    Scenario: Ensure user can remove the chosen protection plan and choose any other plan in checkout page
        Given I browse Diamondere
        When I logout if already logged in
        When I remove products if already added in cart
        When I want to clear local storage
        When I click the Login and Signup icon in the Homepage
        And I login to verify the checkout page
        And I click cart icon
        When I click Proceed to Payment in Shopping Cart Page
        And I select US in the country dropdown
        And I remove the chosen 3 year plan in Earring
        And I select Lifetime protection plan
        Then I ensure the lifetime protection plan has been added for the earring
        And I select 3 year protection plan again
        And I browse back and click logout

    #Scenario - 54
    @smoketest1
    Scenario: Verifying that the name and email are pre populated for loggedin users
        Given I browse Diamondere
        When I logout if already logged in
        When I remove products if already added in cart
        When I want to clear local storage
        When I click the Login and Signup icon in the Homepage
        And I login to verify the checkout page
        And I click cart icon
        When I click Proceed to Payment in Shopping Cart Page
        Then I verify the name and email are pre populated in the shipping address section
        And I browse back and click logout
