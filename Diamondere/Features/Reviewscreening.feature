Feature: Check the Reviews Screening and Display for any product in page 3

    Background: Browse Diamondere website
      Given I browse Diamondere website
      When I logout if already logged in

#Scenario 1:
@validations
 Scenario: User ensures the review section in page 3    
      Given I enter into page 3 of any product
      When I scrolldown to the read reviews section at the bottom
      Then Ensure the Accredited Business icon is displayed

# Scenario 2:
@validations
   Scenario: Check the functionality of Accredited Business and A+ icon
      Given I enter into page 3 of any product
      When I scrolldown to the free global shipping section at the bottom
      And I select Accredited and Aplus icon
      Then Ensure it redirects to the Business bureau Diamondere certification

# Scenario 3:
@smoketest
   Scenario: Check the reviews screening section - for a product has more than 6 reviews
      Given I enter into page 3 of any product has more than 6 reviews
      When I scrolldown to the read reviews section at the bottom
      Then Ensure the Read Reviews text, product text and star rating along with the rating number for the product is displayed
      And Ensure the Recently purchased text is present
      And Ensure the number of reviews given by the customers is displayed 
      And Ensure the star rating given by the customers is present in the review column
      And Ensure all the customer details and their review details are present in the review column
      And Ensure the View All Ring Reviews button is present
      When I select View All Ring Reviews button
      Then Ensure it redirects to the Diamondere rings review page
      And Ensure the heading Reviews for Diamondere rings is present
      And Ensure total star rating and text is displayed
      And Ensure the product image, rating, customer name, location, date, review title and review comments are displayed for the customer

# Scenario 4:
@smoketest1
   Scenario: Check the reviews screening section - for a product has less than 6 reviews
      Given I enter into page 3 of any product has less than 6 reviews
      When I scrolldown to the read reviews section at the bottom
      Then Ensure the Read Reviews text, product text and star rating along with the rating number for the product is displayed
      And Ensure the Recently purchased text is present
      And Ensure the number of reviews given by the customers is displayed 
      And Ensure the star rating given by the customers is present in the review column
      And Ensure all the customer details and their review details are present in the review column
      And Ensure Read reviews text for All Rings and star rating and the rating number and the total user reviews text are displayed  
      And Ensure all the details given by customers for all rings is present in the review column
      And Ensure the View All Ring Reviews button is present
      When I select View All Ring Reviews button
      Then Ensure it redirects to the Diamondere rings review page
      And Ensure the heading Reviews for Diamondere rings is present
      And Ensure total star rating and text is displayed
      And Ensure the product image, rating, customer name, location, date, review title and review comments are displayed for the customer

# Scenario 5:
@smoketest
   Scenario: Check the reviews screening section - for a product has no reviews
      Given I enter into page 3 of any product has no reviews
      When I scrolldown to the read reviews section at the bottom
      Then Ensure the Recently purchased text is present
      And Ensure Read reviews text for All Rings and star rating and the rating number and the total user reviews text are displayed  
      And Ensure all the details given by customers for all rings is present in the review column       
      And Ensure the View All Ring Reviews button is present
      When I select View All Ring Reviews button
      Then Ensure it redirects to the Diamondere rings review page
      And Ensure the heading Reviews for Diamondere rings is present
      And Ensure total star rating and text is displayed
      And Ensure the product image, rating, customer name, location, date, review title and review comments are displayed for the customer
