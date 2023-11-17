Feature: Check the Functionality of May We Assist You button in homepage 

   Background: Browse Diamondere website
      Given I browse Diamondere website
      Then Ensure May we Assist you button is present 

# Scenario 1:
   @validations
   Scenario: User selects May we Assist you button      
      Given I select May we Assist you button 
      Then Ensure a customer care popup is displayed   

# Scenario 2:
   @validations
   Scenario: User selects remove icon and closed Customer care popup      
      Given I select May we Assist you button 
      Then Ensure a customer care popup is displayed 
      And Ensure remove icon is present 
      When I select remove icon in the popup
      Then Ensure the customer care popup is closed

# Scenario 3:
   @validations
   Scenario: Ensure the fields, texts and buttons present in Customer care popup      
      Given I select May we Assist you button 
      Then Ensure a customer care popup is displayed  
      And Ensure the Diamondere logo is displayed
      And Ensure the Customer care text heading is displayed
      And Ensure the text below Customer care heading is displayed
      And Ensure the Name field is displayed in may we assist you popup
      And Ensure the EmailAddress field is displayed in may we assist you popup
      And Ensure Detail your query field is displayed in may we assist you popup
      And Ensure Submit button is displayed
      And Ensure cancel button is displayed

# Scenario 4:
   @functional
   Scenario: Checking the functionality of Cancel button present in Customer care popup      
      Given I select May we Assist you button 
      Then Ensure a customer care popup is displayed  
      When I select cancel button
      Then Ensure the customer care popup is closed

# Scenario 5:
   @validations
   Scenario: Ensure the Name field is mandatory      
      Given I select May we Assist you button 
      Then Ensure a customer care popup is displayed  
      When I enter any email in EmailAddress field in may we assist you popup
      And I enter any query in Detail your query field in may we assist you popup
      And I select submit button in may we assist you popup
      Then Ensure an error message is displayed under Name field and form submission is unsuccessful

# Scenario 6:
   @validations
   Scenario: Ensure the Email Address field is mandatory      
      Given I select May we Assist you button 
      Then Ensure a customer care popup is displayed  
      When I enter any name in Name field in may we assist you popup
      And I enter any query in Detail your query field in may we assist you popup
      And I select submit button in may we assist you popup
      Then Ensure an error message is displayed under EmailAddress field and form submission is unsuccessful

# Scenario 7:
   @validations
   Scenario: Ensure the Detail your query field is mandatory      
      Given I select May we Assist you button 
      Then Ensure a customer care popup is displayed  
      When I enter any name in Name field in may we assist you popup
      When I enter any email in EmailAddress field in may we assist you popup
      And I select submit button in may we assist you popup
      Then Ensure an error message is displayed under Detail your query field and form submission is unsuccessful

# Scenario 8:
   @validations
   Scenario: Ensure the validation of Name field     
      Given I select May we Assist you button 
      Then Ensure a customer care popup is displayed  
      When I enter any characters other than letters and space in Name field in may we assist you popup 
      Then Ensure a validation message is displayed under Name field in may we assist you popup

# Scenario 9:
   @validations
   Scenario: Ensure the validation of Email Address field     
      Given I select May we Assist you button 
      Then Ensure a customer care popup is displayed  
      When I enter any emailid with space and avoid at sign in EmailAddress field in may we assist you popup 
      Then Ensure a validation message is displayed under EmailAddress field in may we assist you popup 

# Scenario 10:
   @validations
   Scenario: Ensure the validation of Detail your query field      
      Given I select May we Assist you button 
      Then Ensure a customer care popup is displayed  
      When I enter any invalid character like double quotation or square bracket in Detail your query field in may we assist you popup 
      Then Ensure a validation message is displayed under Detail your query field in may we assist you popup 

# Scenario 11:
   @smoketest1
   Scenario: Ensure the Detail your query field accepts design link   
      Given I select May we Assist you button 
      Then Ensure a customer care popup is displayed  
      When I enter any name in Name field in may we assist you popup
      And I enter any email in EmailAddress field in may we assist you popup
      And I enter any design link Detail your query field in may we assist you popup 
      And I select submit button in may we assist you popup
      Then Ensure a success message is displayed and form submission is successful in may we assist you popup 
              
# Scenario 12:
   @validations 
   Scenario: Ensure the maximum character limit of Name field      
      Given I select May we Assist you button 
      Then Ensure a customer care popup is displayed  
      When I enter any name more than 40 characters in Name field in may we assist you popup 
      Then Ensure the Name field accepts only 40 characters in may we assist you popup 

# Scenario 13:
   @validations
   Scenario: Ensure the maximum character limit of Detail your query field      
      Given I select May we Assist you button 
      Then Ensure a customer care popup is displayed  
      When I enter any query more than 200 characters in Detail your query field in may we assist you popup 
      Then Ensure the Detail your query field accepts only 200 characters in may we assist you popup 

# Scenario 14:
   @smoketest
   Scenario: Ensure the form submission is successful after sending the valid input to the fields
      Given I select May we Assist you button 
      Then Ensure a customer care popup is displayed  
      When I enter any name in Name field in may we assist you popup
      And I enter any email in EmailAddress field in may we assist you popup
      And I enter any query in Detail your query field in may we assist you popup
      And I select submit button in may we assist you popup
      Then Ensure a success message is displayed and form submission is successful in may we assist you popup 
     

#Scenario 15:
@validations
   Scenario: Verifying the close button in May we Assist You popup
      Given I select May we Assist you button 
      Then Ensure a customer care popup is displayed  
      When I select close button in success popup in may we assist you
      Then Ensure the success popup is closed in may we asssit you












            


      

      
