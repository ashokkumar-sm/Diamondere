Feature: User selects Track my order and get the order details and its delivery details

   Background: Browse Diamondere website
      Given I browse Diamondere website
      When I logout if already logged in
      When I want to clear local storage
      When I click the Login and Signup icon in the Homepage
      Then I ensure clicking the Login and Signup icon opens the Login Register page
      And I ensure the Login text,Email and Password fields are displayed at the top of the login section
      When I enter the Email and Password fields in the login form
      Then I click the login button
      And I ensure the login button returns to the Homepage of the diamondere
      When I hover on Login and Signup icon
      Then I ensure the track my order, order history and logout options are visible

# Scenario 1:
@validations
   Scenario: Ensure the fields present in Track my order page
        Given I select track my order under dropdown
        Then Ensure the Track my order page is displayed
        And Ensure the Track my order heading, Order number field, last name field and search button is displayed
        When I hover on Login and Signup icon
        When I click the Logout option

# Scenario 2:
@smoketest
  Scenario: Ensure the Order Id field is mandatory in Track my order page
        Given I select track my order under dropdown
        Then Ensure the Track my order page is displayed
        When I enter last name in the respective field
        And I select search button 
        Then Ensure an error message is displayed under Order Id field in TOM
        When I hover on Login and Signup icon
        When I click the Logout option

# Scenario 3:
@smoketest
  Scenario: Ensure the Last name field is mandatory in Track my order page
        Given I select track my order under dropdown
        Then Ensure the Track my order page is displayed
        When I enter Order Id in the respective field
        And I select search button 
        Then Ensure an error message is displayed under Last name field in TOM
        When I hover on Login and Signup icon
        When I click the Logout option

# Scenario 4:
@smoketest
   Scenario: Enter the order Id and last name and check for the order history details (Here shipping and billing address are same)
        Given I select track my order under dropdown
        Then Ensure the Track my order page is displayed
        When I enter Order Id in the respective field
        And I enter last name in the respective field
        And I select search button 
        Then Ensure the order Id, status, date and estimated delivery are displayed
        Then Ensure the order summary and order details are displayed
        And Ensure the amount segregation section is displayed
        And Ensure the Shipping and billing address section is displayed
        When I hover on Login and Signup icon
        When I click the Logout option
        
# Scenario 5:
@smoketest
   Scenario: Enter the incorrect order Id and correct last name and viceversa and check the results in TOM page - negative scenario
        Given I select track my order under dropdown
        Then Ensure the Track my order page is displayed
        When I enter incorrect order Id and correct last name in their respective fields
        And I select search button 
        Then Ensure an error message is displayed with no results found
        When I select close button in error popup in TOM
        Then Ensure an error message popup is closed in TOM
        When I enter correct order Id and incorrect last name in their respective fields
        And I select search button 
        Then Ensure an error message is displayed with no results found
        When I select close button in error popup in TOM
        Then Ensure an error message popup is closed in TOM
        When I hover on Login and Signup icon
        When I click the Logout option