Feature: User enters into page 3 and scrolls down to Read reviews section and writes his own review 

   Background: Browse Diamondere website
      Given I browse Diamondere website
      When I enter into page 3 of any product
      And I scrolldown to the read reviews section at the bottom
      Then Ensure the Recently purchased text is present
      And Ensure Write a review button is displayed
                  

# Scenario 1:
   @validations
   Scenario: User selects Write a review button      
      Given I select Write a review button 
      Then Ensure Write a review popup is displayed 

# Scenario 2:
@validations
   Scenario: Verify the Product image and text below image is present at the top of the review form    
      Given I select Write a review button 
      Then Ensure Write a review popup is displayed
      And Ensure Product image and write a review for the product text heading is displayed 
 
# Scenario 3:
@validations
   Scenario: Verify the Your star text and rating stars above write a review form   
      Given I select Write a review button 
      Then Ensure Write a review popup is displayed
      And Ensure Your star text and rating stars are displayed 


# Scenario 4:
@smoketest
   Scenario: User gives star rating on clicking the rating stars 
      Given I select Write a review button 
      Then Ensure Write a review popup is displayed
      And Ensure Your star text and rating stars are displayed
      When I click any star 
      Then Ensure the stars are highlighted upto the selected star 

# Scenario 5:
@validations
   Scenario: Ensure the fields present in the write a review popup 
      Given I select Write a review button 
      Then Ensure Write a review popup is displayed
      And Ensure the Name field is displayed
      And Ensure the EmailId field is displayed
      And Ensure the Location field is displayed
      And Ensure the Review title field is displayed
      And Ensure the Your Review comments field is displayed
      And Ensure the Submit your review button is displayed

# Scenario 6:
@functional
   Scenario: Ensure the name field is mandatory 
      Given I select Write a review button 
      Then Ensure Write a review popup is displayed
      And Ensure Your star text and rating stars are displayed
      When I click any star 
      When I enter any emailId in EmailId field
      And I enter any Location in Location field
      And I enter any review title in Review title field
      And I enter any review comments in Your Review comments field
      And I select Submit your review button 
      Then Ensure an error message is displayed under name field and form submission is unsuccessful

# Scenario 7:
@functional
   Scenario: Ensure the Star Rating field is mandatory 
      Given I select Write a review button 
      Then Ensure Write a review popup is displayed
      When I enter any name in Name field
      When I enter any emailId in EmailId field
      And I enter any Location in Location field
      And I enter any review title in Review title field
      And I enter any review comments in Your Review comments field
      And I select Submit your review button 
      Then Ensure an error message is displayed under Star rating field and form submission is unsuccessful

# Scenario 8:
@functional
   Scenario: Ensure the emailId field is mandatory 
      Given I select Write a review button 
      Then Ensure Write a review popup is displayed
      And Ensure Your star text and rating stars are displayed
      When I click any star 
      When I enter any name in Name field
      And I enter any Location in Location field
      And I enter any review title in Review title field
      And I enter any review comments in Your Review comments field
      And I select Submit your review button 
      Then Ensure an error message is displayed under EmailId field and form submission is unsuccessful

# Scenario 9:
@functional
   Scenario: Ensure the Location field is mandatory 
      Given I select Write a review button 
      Then Ensure Write a review popup is displayed
      And Ensure Your star text and rating stars are displayed
      When I click any star 
      When I enter any name in Name field
      And I enter any emailId in EmailId field
      And I enter any review title in Review title field
      And I enter any review comments in Your Review comments field
      And I select Submit your review button 
      Then Ensure an error message is displayed under Location field and form submission is unsuccessful

# Scenario 10:
@functional
   Scenario: Ensure the Review Title field is mandatory 
      Given I select Write a review button 
      Then Ensure Write a review popup is displayed
      And Ensure Your star text and rating stars are displayed
      When I click any star 
      When I enter any name in Name field
      And I enter any emailId in EmailId field
      And I enter any Location in Location field
      And I enter any review comments in Your Review comments field
      And I select Submit your review button 
      Then Ensure an error message is displayed under Review Title field and form submission is unsuccessful

# Scenario 11:
@functional
   Scenario: Ensure the Your Review comments field is mandatory 
      Given I select Write a review button 
      Then Ensure Write a review popup is displayed
      And Ensure Your star text and rating stars are displayed
      When I click any star 
      When I enter any name in Name field
      And I enter any emailId in EmailId field
      And I enter any Location in Location field
      And I enter any review title in Review title field
      And I select Submit your review button 
      Then Ensure an error message is displayed under Your Review comments field and form submission is unsuccessful

# Scenario 12:
@validations
   Scenario: Ensure the name field has validation
      Given I select Write a review button 
      Then Ensure Write a review popup is displayed
      When I enter any characters other than letters and space in Name field
      Then Ensure a validation message is displayed under name field 

# Scenario 13:
@validations
   Scenario: Ensure the email field has validation
      Given I select Write a review button 
      Then Ensure Write a review popup is displayed
      When I enter any emailid with space and avoid at sign in EmailId field
      Then Ensure a validation message is displayed under EmailId field 

# Scenario 14:
@validations
   Scenario: Ensure the Location field has validation
      Given I select Write a review button 
      Then Ensure Write a review popup is displayed
      When I enter any apostrophe or hashtag or dollar or percent or asterisk or any invalid characters in Location field
      Then Ensure a validation message is displayed under Location field

# Scenario 15:
@validations
   Scenario: Ensure the Review Title field has validation
      Given I select Write a review button 
      Then Ensure Write a review popup is displayed
      When I enter any characters other than letters, numbers and space in Review title field
      Then Ensure a validation message is displayed under Review Title field

# Scenario 16:
@validations
   Scenario: Ensure the Your Review Comments field has validation
      Given I select Write a review button 
      Then Ensure Write a review popup is displayed
      When I enter any characters other than letters, numbers and space in Your Review Comments field
      Then Ensure a validation message is displayed under Your Review Comments field

# Scenario 17:
@functional
   Scenario: Ensure the maximum character limit in name field 
      Given I select Write a review button 
      Then Ensure Write a review popup is displayed
      When I enter any name more than 40 characters in Name field
      Then Ensure the name field accepts only 40 characters

# Scenario 18:
@functional
   Scenario: Ensure the maximum character limit in EmailId field
      Given I select Write a review button 
      Then Ensure Write a review popup is displayed
      When I enter any emailId more than 40 characters in EmailId field
      Then Ensure the emailId field accepts only 40 characters

# Scenario 19:
@functional
   Scenario: Ensure the maximum character limit in Location field
      Given I select Write a review button 
      Then Ensure Write a review popup is displayed
      When I enter any location text more than 40 characters in location field
      Then Ensure the location field accepts only 40 characters

# Scenario 20:
@functional
   Scenario: Ensure the maximum character limit in Review title field
      Given I select Write a review button 
      Then Ensure Write a review popup is displayed
      When I enter any text more than 40 characters in Review title field
      Then Ensure the Review title field accepts only 40 characters

# Scenario 21:
@functional
   Scenario: Ensure the maximum character limit in Your Review Comments field
      Given I select Write a review button 
      Then Ensure Write a review popup is displayed
      When I enter any text more than 200 characters in Your Review Comments field
      Then Ensure the Your Review Comments field accepts only 200 characters

# Scenario 22:
@validations
   Scenario: Ensure the Write a review popup closing  
      Given I select Write a review button 
      Then Ensure Write a review popup is displayed
      When select the remove button or icon at the top right of the popup
      Then Ensure the Write a review popup is closed

# Scenario 23:
@smoketest
   Scenario: Ensure the form submission is successful
      Given I select Write a review button 
      Then Ensure Write a review popup is displayed
      And Ensure Your star text and rating stars are displayed
      When I click any star
      When I enter any name in Name field
      And I enter any emailId in EmailId field
      And I enter any Location in Location field
      And I enter any review title in Review title field
      And I enter any review comments in Your Review comments field
      And I select Submit your review button 
      Then Ensure a success message is displayed and the form submission is successful
      When I select close button in success popup
      Then Ensure the success popup is closed
      



      

      



