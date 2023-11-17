
Feature: Testing the Customer Assistance Features of Diamondere Website

    Background: Browsing staging environment
        Given I browse Diamondere website
        When I logout if already logged in

#REQUEST CALL BACK
    #Scenario - 1
    @functional
    Scenario: Ensure the user can access the customer care dropdown in all pages of Diamondere
        Given I hover over the Customer care icon
        Then I ensure the write to us, request call back and toll free number are present in the dropdown
        When I select Request Call Back option
        Then I ensure it redirects to the Request Call Back page
        When I browse Solace ring in page 2
        And I hover over the Customer care icon
        Then I ensure the write to us, request call back and toll free number are present in the dropdown
        When I select Request Call Back option
        Then I ensure it redirects to the Request Call Back page
        When I browse Solace ring in page 3
        And I hover over the Customer care icon
        Then I ensure the write to us, request call back and toll free number are present in the dropdown
        When I select Request Call Back option
        Then I ensure it redirects to the Request Call Back page
        When I browse Solace ring the shopping cart page
        And I hover over the Customer care icon
        Then I ensure the write to us, request call back and toll free number are present in the dropdown
        When I select Request Call Back option
        Then I ensure it redirects to the Request Call Back page

    #Scenario - 2
    @validations
    Scenario: Verifying the presence of header, may we assist you and footer sections in Request Call Back page
        Given I browse Request Call Back page
        Then I verify the presence of header, may we assist you and footer sections

    #Scenario - 3
    @validations
    Scenario: Validating the banner and heading in Request Call Back page
        Given I browse Request Call Back page
        Then I verify the presence of banner and Request Call Back heading

    #Scenario - 4
    @validations
    Scenario: Verifying the "Toll Free Number" and "Email ID" present in Request Call Back page
        Given I browse Request Call Back page
        Then I verify the presence of Toll Free Number and Email ID

    #Scenario - 5
    @validations
    Scenario: Validating the presence of Name, Phone number, Email fields and Request Call Back button in Request Call Back page
        Given I browse Request Call Back page
        Then I validate the presence of Name, Phone number, Email fields and Request Call Back button 

    #Scenario - 6
    @validations
    Scenario: Ensure the name and email are pre-populated for logged in users in Request Call Back page
        Given I click the Login and Signup icon in the Homepage
        When I enter the Email and Password fields in the login form
        And I click the login button
        And I hover over the Customer care icon
        And I select Request Call Back option
        Then I ensure the name and email are pre-populated in the page

    #Scenario - 7
    @validations
    Scenario: Ensure all the fields are empty for guest users in Request Call Back page
        Given I hover over the Customer care icon
        When I select Request Call Back option
        Then I ensure the name and email fields are blank in the page

    #Scenario - 8
    @smoketest
    Scenario: Ensure user can able to submit the Request Call Back form after entering valid details
        Given I browse Request Call Back page
        When I enter name in the form
        And I enter phone in the form
        And I enter email in the form
        And I click Request Call Back button
        Then I ensure the request has been registered success popup is displayed 

    #Scenario - 9
    @validations
    Scenario: Validating that the name field is marked mandatory in Request Call Back page
        Given I browse Request Call Back page
        When I enter phone in the form
        And I enter email in the form
        And I click Request Call Back button
        Then I ensure the mandatory message is displayed under Name field

    #Scenario - 10
    @validations
    Scenario: Verifying the character validation of name field in Request Call Back page
        Given I browse Request Call Back page
        When I enter special characters and numbers in the name field
        Then I ensure the character validation message for the name field is displayed

    #Scenario - 11
    @validations
    Scenario: Validating that the phone field is marked mandatory in Request Call Back page
        Given I browse Request Call Back page
        When I enter name in the form
        And I enter email in the form
        And I click Request Call Back button
        Then I ensure the mandatory message is displayed under Phone field

    #Scenario - 12
    @validations
    Scenario: Verifying the character validation of phone field in Request Call Back page
        Given I browse Request Call Back page
        When I enter restricted special characters and alphabets in the phone field
        Then I ensure the character validation message for the phone field is displayed

    #Scenario - 13
    @functional
    Scenario: Ensure that country code can be mentionable in the "Phone" field in Request Call Back page
        Given I browse Request Call Back page
        When I enter name in the form
        And I enter phone number with country code in the form
        And I enter email in the form
        And I click Request Call Back button
        Then I ensure the request has been registered success popup is displayed

    #Scenario - 14
    @validations
    Scenario: Validating that the email field is not marked mandatory in Request Call Back page
        Given I browse Request Call Back page
        When I enter name in the form
        And I enter phone in the form
        And I click Request Call Back button
        Then I ensure the request has been registered success popup is displayed

    #No such validation present
    #Scenario - 15
    #Scenario: Verifying the format validation of email field in Request Call Back page
        #Given I browse Request Call Back page
        #When I enter invalid email address in the form
        #Then I ensure the format validation message for the email field is displayed

    #Scenario - 16
    @smoketest
    Scenario: Ensure clicking the request call back link in checkout page opens a popup
        Given I browse page 3 of ring Miya
        When I select ring size
        And I click Add to cart in page 3 of Miya
        And I click Checkout button
        And I click Proceed to Payment in Shopping Cart Page
        And I click the request call back link
        And I click the X button in the popup
        Then I ensure the popup is closed 
        When I click the request call back link in checkout page
        Then I ensure it opens the request call back page in a popup

    #Scenario - 17
    @smoketest1
    Scenario: Ensure the user can submit the request call back form by accessing the popup in checkout page
        Given I browse page 3 of ring Miya
        When I select ring size
        And I click Add to cart in page 3 of Miya
        And I click Checkout button
        And I click Proceed to Payment in Shopping Cart Page
        And I click the request call back link in checkout page
        And I enter name in the form
        And I enter phone in the form
        And I enter email in the form
        And I click Request Call Back button
        Then I ensure the request has been registered success popup is displayed

    #Scenario - 18
    @validations
    Scenario: Verifying the character limit of Name field in Request Call Back form
        Given I browse Request Call Back page
        When I enter name with more than 40 characters in the form
        Then I ensure the name field accepts only 40 characters in the form

    #Scenario - 19
    @validations
    Scenario: Verifying the character limit of Phone field in Request Call Back form
        Given I browse Request Call Back page
        When I enter phone number with more than 15 characters in the form
        Then I ensure the phone field accepts only 15 characters in the form

    #No such validation present
    #Scenario - 20
    #Scenario: Verifying the character limit of Email field in Request Call Back form
        #Given I browse Request Call Back page
        #When I enter email with more than 40 characters in Request Call Back form
        #Then I ensure the email field accepts only 40 characters in Request Call Back form


#CONTACT US
    #Scenario - 1
    @functional
    Scenario: Ensure the Contact Us and Write To Us links redirects to Contact Us page 
        Given I hover over the Customer care icon
        When I select Write To Us option
        Then I ensure it redirects to the Contact Us page
        When I browse back and click Contact Us link in the footer
        Then I ensure it redirects to the Contact Us page  

    #Scenario - 2
    @validations
    Scenario: Validating the fields present in the Contact Us page
        Given I browse Contact Us page
        Then I validate the presence of various fields in the Contact Us page

    #Scenario - 3
    @validations
    Scenario: Verifying the presence of header, may we assist you and footer sections in Contact Us page
        Given I browse Contact Us page
        Then I verify the presence of header, may we assist you and footer sections

    #Scenario - 4
    @validations
    Scenario: Validating that the name field is marked mandatory in Contact Us page
        Given I browse Contact Us page
        When I enter email in the form
        And I enter phone in the form
        And I enter message in Contact Us form
        #And I upload image in Contact Us form
        And I click Submit Contact Form button
        Then I ensure the mandatory message is displayed under Name field

    #Scenario - 5
    @validations
    Scenario: Verifying the character validation of name field in Contact Us page
        Given I browse Contact Us page
        When I enter special characters and numbers in the name field in Contact Us page
        Then I ensure the character validation message for the name field is displayed

    #Scenario - 6
    @validations
    Scenario: Validating that the email field is marked mandatory in Contact Us page
        Given I browse Contact Us page
        When I enter name in the form
        And I enter phone in the form
        And I enter message in Contact Us form
        #And I upload image in Contact Us form
        And I click Submit Contact Form button
        Then I ensure the mandatory message is displayed under Email field

    #Scenario - 7
    @validations
    Scenario: Verifying the format validation of email field in Contact Us page
        Given I browse Contact Us page
        When I enter invalid email address in the form
        Then I ensure the format validation message for the email field is displayed

    #Scenario - 8
    @validations
    Scenario: Validating that the phone field is marked mandatory in Contact Us page
        Given I browse Contact Us page
        When I enter name in the form
        And I enter email in the form
        And I enter message in Contact Us form
        #And I upload image in Contact Us form
        And I click Submit Contact Form button
        Then I ensure the mandatory message is displayed under Phone field

    #Scenario - 9
    @validations
    Scenario: Verifying the character validation of phone field in Contact Us page
        Given I browse Contact Us page
        When I enter restricted special characters and alphabets in the phone field
        Then I ensure the character validation message for the phone field is displayed

    #Scenario - 10
    @functional
    Scenario: Ensure that country code can be mentionable in the "Phone" field in Contact Us page
        Given I browse Contact Us page
        When I enter name in the form
        And I enter email in the form
        And I enter phone number with country code in the form
        And I enter message in Contact Us form
        #And I upload image in Contact Us form
        And I click Submit Contact Form button
        Then I ensure the request has been registered success popup is displayed

    #Scenario - 11
    @smoketest
    Scenario: Ensure the user can submit the contact form by skipping the message field
        Given I browse Contact Us page
        When I enter name in the form
        And I enter email in the form
        And I enter phone in the form
        #And I upload image in Contact Us form
        And I click Submit Contact Form button
        Then I ensure the request has been registered success popup is displayed

    #Scenario - 12
    @functional
    Scenario: Ensure the message field has regex validation
        Given I browse Contact Us page
        When I enter name in the form
        And I enter email in the form
        And I enter phone in the form
        And I enter restricted characters in message field
        #And I upload image in Contact Us form
        And I click Submit Contact Form button
        Then I ensure the regex validation message for the message field is displayed in Contact Us form

    #Scenario - 13
    @smoketest
    Scenario: Ensure the user can submit the contact form by skipping the upload image field
        Given I browse Contact Us page
        When I enter name in the form
        And I enter email in the form
        And I enter phone in the form
        And I enter message in Contact Us form
        And I click Submit Contact Form button
        Then I ensure the request has been registered success popup is displayed

    #Scenario - 14
    @smoketest1
    Scenario: Ensure that can be able to submit Contact Us form upon entering valid details
        Given I browse Contact Us page
        When I enter name in the form
        And I enter email in the form
        And I enter phone in the form
        And I enter message in Contact Us form
        And I upload image in Contact Us form
        And I click Submit Contact Form button
        Then I ensure the request has been registered success popup is displayed

    #Scenario - 15
    @validations
    Scenario: Validating the description box in the Contact Us page
        Given I browse Contact Us page
        Then I validate the details in the description box of Contact Us page

    #Scenario - 17
    @validations
    Scenario: Verifying the "Contact Number" and "Email ID" present in Contact Us page
        Given I browse Contact Us page
        Then I verify the presence of Contact Number and Email ID

    #Scenario - 18
    @functional
    Scenario: Ensure on selecting "Email us now" link, it redirects to the request call back form
        Given I browse Contact Us page
        When I click Email Us Now link in the description box
        Then I ensure it redirects to the Request Call Back page

    #Scenario - 19
    @functional
    Scenario: Ensure on selecting "Or request a call back" link, it redirects to the request call back form
        Given I browse Contact Us page
        When I click Or request a call back link in the description box
        Then I ensure it redirects to the Request Call Back page

    #Scenario - 20
    @functional
    Scenario: Ensure on selecting "Learn More" link, it redirects to the request custom order form
        Given I browse Contact Us page
        When I click Learn More link in the description box
        Then I ensure it redirects to the Request Custom Order page

    #Scenario - 21
    @validations
    Scenario: Validating the Get to Know Us section in Contact Us page
        Given I browse Contact Us page
        Then I verify the presence of Get to Know Us section 

    #Scenario - 22
    @validations
    Scenario: Validating the FAQ section in Contact Us page
        Given I browse Contact Us page
        When I select the FAQ 1
        Then I ensure the answer is displayed in the expansion area with a Read More link

    #Scenario - 23
    @validations
    Scenario: Validating the Why Choose Diamondere section in Contact Us page
        Given I browse Contact Us page
        Then I validate the Why Choose Diamondere section
        When I click Learn More under Legacy of Excellence
        Then I ensure the Our legacy button redirects to the respective page
        When I click Learn More under Custom-Made
        Then I Ensure selecting Why Diamondere link must redirect to the expected page
        When I click Learn More under Fair Prices
        Then I Ensure selecting See our FAQs link must redirect to the FAQ page
        When I click Learn More under Resizing
        Then I ensure clicking the Resizing Text Link redirects to the Resizing page

    #Scenario - 24
    @validations
    Scenario: Validating the Come be inspired section in Contact Us page
        Given I browse Contact Us page
        Then I validate the Come be inspired section
        When I click an image under Come be inspired section
        Then I ensure it redirects to the Diamondere Instagram page

    #Scenario - 25
    @smoketest
    Scenario: Ensure clicking the Email Us Now link in checkout page opens a popup
        Given I browse page 3 of ring Miya
        When I select ring size
        And I click Add to cart in page 3 of Miya
        And I click Checkout button
        And I click Proceed to Payment in Shopping Cart Page
        And I click the Email Us Now link
        And I click the X button in the popup
        Then I ensure the popup is closed
        When I click the Email Us Now link in checkout page
        Then I ensure it opens the contact us page in a popup
         
    #Scenario - 26
    @smoketest
    Scenario: Ensure the user can submit the Contact Us form by accessing the popup in checkout page
        Given I browse page 3 of ring Miya
        When I select ring size
        And I click Add to cart in page 3 of Miya
        And I click Checkout button
        And I click Proceed to Payment in Shopping Cart Page
        And I click the Email Us Now link in checkout page
        And I enter name in the form
        And I enter email in the form
        And I enter phone in the form
        And I enter message in Contact Us form
        And I upload image in Contact Us form
        And I click Submit Contact Form button
        Then I ensure the request has been registered success popup is displayed

    #Scenario - 27
    @smoketest1
    Scenario: Ensure an error message is displayed and when user tries to uploads invalid format of image in Contact Us page
        Given I browse Contact Us page
        When I enter name in the form
        And I enter email in the form
        And I enter phone in the form
        And I enter message in Contact Us form
        And I upload image of invalid format in Contact Us form
        And I click Submit Contact Form button
        Then I ensure the invalid format of image error message is displayed

    #Scenario - 28
    @validations
    Scenario: Verifying the character limit of Name field in Contact Us form
        Given I browse Contact Us page
        When I enter name with more than 40 characters in the form
        Then I ensure the name field accepts only 40 characters in the form

    #Scenario - 29
    @validations
    Scenario: Verifying the character limit of Phone field in Contact Us form
        Given I browse Contact Us page
        When I enter phone number with more than 15 characters in the form
        Then I ensure the phone field accepts only 15 characters in the form

    #Scenario - 30
    @validations
    Scenario: Verifying the character limit of Message field in Contact Us form
        Given I browse Contact Us page
        Then I ensure the message field has a character limit of 400 characters in Contact Us form


#JOIN DIAMONDERE COMMUNITY
    #Scenario - 1
    @functional
    Scenario: Ensure the Join Diamondere Community form opens in a new tab upon selecting the email field in the footer
        Given I scroll to footer section
        Then I verify the Join Diamondere Community section
        When I click Email field under Join Diamondere Community section
        Then I ensure it redirects to a new mailchimp page with all the fields

    #Scenario - 2
    @smoketest1
    Scenario: Ensure that can be able to submit Join Diamondere Community form upon entering valid details
        Given I browse Join Diamondere Community page
        When I enter email in Join Diamondere Community form
        And I enter first name in Join Diamondere Community form
        And I enter birth month in Join Diamondere Community form
        And I enter birth date in Join Diamondere Community form
        And I click Sign Me Up button
        Then I ensure the success message is displayed in Join Diamondere Community form

    #Scenario - 3
    @validations
    Scenario: Verifying the format validation of email field in Join Diamondere Community form
        Given I browse Join Diamondere Community page
        When I enter invalid email address in Join Diamondere Community form
        And I enter first name in Join Diamondere Community form
        And I click Sign Me Up button
        Then I ensure the format validation message for the email field is displayed in Join Diamondere Community form

    # #On Hold - Error not fixed
    # @smoketest
    # #Scenario - 4
    # Scenario: Verifying the character validation of name field in Join Diamondere Community form
    #     Given I browse Join Diamondere Community page
    #     When I enter special characters and numbers in the first name field in Join Diamondere Community form
    #     Then I ensure the character validation message for the first name field is displayed in Join Diamondere Community form

    #Scenario - 5
    @validations
    Scenario: Verifying the character validation of birth month and date fields in Join Diamondere Community form
        Given I browse Join Diamondere Community page
        When I enter email in Join Diamondere Community form
        And I enter first name in Join Diamondere Community form
        And I enter special characters and alphabets in the birth month and date fields in Join Diamondere Community form
        And I click Sign Me Up button
        Then I ensure the character validation message for the birthday fields is displayed in Join Diamondere Community form

    #Scenario - 6
    @smoketest1
    Scenario: Ensure the user cannot submit the Join Diamondere Community form by skipping the email field
        Given I browse Join Diamondere Community page
        When I enter first name in Join Diamondere Community form
        And I enter birth month in Join Diamondere Community form
        And I enter birth date in Join Diamondere Community form
        And I click Sign Me Up button
        Then I ensure the mandatory message is displayed under email field in Join Diamondere Community form

    #Scenario - 7
    @functional
    Scenario: Ensure the user cannot submit the Join Diamondere Community form by skipping the first name field
        Given I browse Join Diamondere Community page
        When I enter email in Join Diamondere Community form
        And I enter birth month in Join Diamondere Community form
        And I enter birth date in Join Diamondere Community form
        And I click Sign Me Up button
        Then I ensure the mandatory message is displayed under first name field in Join Diamondere Community form

    #Scenario - 8
    @functional
    Scenario: Ensure the user can submit the Join Diamondere Community form by skipping the birth month and birth date fields
        Given I browse Join Diamondere Community page
        When I enter email in Join Diamondere Community form
        And I enter first name in Join Diamondere Community form
        And I click Sign Me Up button
        Then I ensure the success message is displayed in Join Diamondere Community form

    #Scenario - 9
    @smoketest
    Scenario: Ensure typing a number in the "MM" (Month) area of "Birthday" field is limited to only 12
        Given I browse Join Diamondere Community page
        When I enter email in Join Diamondere Community form
        And I enter first name in Join Diamondere Community form
        And I enter number greater than 12 in month field
        And I click Sign Me Up button
        Then I ensure the character validation message for the birthday fields is displayed in Join Diamondere Community form

    #Scenario - 10
    @smoketest1
    Scenario: Ensure typing a number in the "DD" (Date) area of "Birthday" field is limited to only "31" 
        Given I browse Join Diamondere Community page
        When I enter email in Join Diamondere Community form
        And I enter first name in Join Diamondere Community form
        And I enter number greater than 31 in date field
        And I click Sign Me Up button
        Then I ensure the character validation message for the birthday fields is displayed in Join Diamondere Community form

    # #On Hold - Error not fixed
    # @smoketest
    # #Scenario - 11
    # Scenario: Ensure the user can use an email only once to sign up in the Join Diamondere Community form
    #     Given I browse Join Diamondere Community page
    #     When I enter already registered email in Join Diamondere Community form
    #     And I enter first name in Join Diamondere Community form
    #     And I enter birth month in Join Diamondere Community form
    #     And I enter birth date in Join Diamondere Community form
    #     And I click Sign Me Up button
    #     Then I ensure the already registered error message is displayed


#SHARE PRODUCT VIA EMAIL
    #Scenario - 1
    @functional
    Scenario: Ensure clicking the email icon in page 3 redirects to Share Product page with all the sections
        Given I browse page 3 of ring Miya
        Then I verify the social share plugins in page 3
        When I click Email icon in page 3
        Then I ensure page redirects to Share Product page with all the sections 

    #Scenario - 2
    @validations
    Scenario: Verifying the presence of header, may we assist you and footer sections in Share Product page
        Given I browse page 3 of ring Miya
        When I click Email icon in page 3
        Then I verify the presence of header, may we assist you and footer sections

    #Scenario - 3
    @smoketest
    Scenario: Make sure the image and product name in Share Product page is as same as the product in page 3
        Given I browse page 3 of ring Miya
        Then I ensure the image details in page 3 are present
        And I click Email icon in page 3
        Then I verify the ring image present in the Share Product page is as same as the image in page 3

    #Scenario - 4
    @validations
    Scenario: Validating the fields and button in Share Product page
        Given I browse page 3 of ring Miya
        When I click Email icon in page 3
        Then I validate the presence of fields and button in Share Product page

    #Scenario - 5
    @validations
    Scenario: Ensure the name and email are pre-populated for logged in users in Share Product page
        Given I click the Login and Signup icon in the Homepage
        When I enter the Email and Password fields in the login form
        And I click the login button
        And I browse page 3 of ring Miya
        And I click Email icon in page 3
        Then I ensure the name and email are pre-populated in Share Product page

    #Scenario - 6
    @validations
    Scenario: Ensure the name and email fields are empty for guest users in Share Product page
        Given I browse page 3 of ring Miya
        When I click Email icon in page 3
        Then I ensure the name and email fields are blank in Share Product page

    #Scenario - 7
    @smoketest
    Scenario: Ensure the user cannot submit the Share Product form by skipping the your name field
        Given I browse page 3 of ring Miya
        When I click Email icon in page 3
        And I enter email in your email field of Share Product form
        And I enter name in your friend's name field of Share Product form
        And I enter email in your friend's email field of Share Product form
        And I click Send to a friend button
        Then I ensure the mandatory message is displayed under Name field

    #Scenario - 8
    @validations
    Scenario: Verifying the character validation of your name field in Share Product form
        Given I browse page 3 of ring Miya
        When I click Email icon in page 3
        And I enter special characters, numbers and spaces without alphabets in the your name field in Share Product form
        Then I ensure the character validation message for the name field is displayed

    #Scenario - 9
    @smoketest1
    Scenario: Ensure that can be able to submit Share Product form upon entering valid details
        Given I browse page 3 of ring Miya
        When I click Email icon in page 3
        And I enter name in your name field of Share Product form
        And I enter email in your email field of Share Product form
        And I enter name in your friend's name field of Share Product form
        And I enter email in your friend's email field of Share Product form
        And I click Send to a friend button
        Then I ensure the success message is displayed in Share Product form

    #Scenario - 10
    @smoketest
    Scenario: Ensure the user cannot submit the Share Product form by skipping the your friend's name field
        Given I browse page 3 of ring Miya
        When I click Email icon in page 3
        And I enter name in your name field of Share Product form
        And I enter email in your email field of Share Product form
        And I enter email in your friend's email field of Share Product form
        And I click Send to a friend button
        Then I ensure the mandatory message is displayed under your friend's name field in Share Product form

    #Scenario - 11
    @validations
    Scenario: Verifying the character validation of your friend's name field in Share Product form
        Given I browse page 3 of ring Miya
        When I click Email icon in page 3
        And I enter special characters, numbers and spaces without alphabets in the your friend's name field in Share Product form
        Then I ensure the mandatory message is displayed under your friend's name field in Share Product form

    #Scenario - 12
    @smoketest
    Scenario: Ensure the user cannot submit the Share Product form by skipping the your email field
        Given I browse page 3 of ring Miya
        When I click Email icon in page 3
        And I enter name in your name field of Share Product form
        And I enter name in your friend's name field of Share Product form
        And I enter email in your friend's email field of Share Product form
        And I click Send to a friend button
        Then I ensure the mandatory message is displayed under Email field

    #Scenario - 13
    @validations
    Scenario: Verifying the character validation of your email field in Share Product form
        Given I browse page 3 of ring Miya
        When I click Email icon in page 3
        And I enter invalid email address in Share Product form
        Then I ensure the format validation message for the email field is displayed

    #Scenario - 14
    @smoketest1
    Scenario: Ensure the user cannot submit the Share Product form by skipping the your friend's email field
        Given I browse page 3 of ring Miya
        When I click Email icon in page 3
        And I enter name in your name field of Share Product form
        And I enter email in your email field of Share Product form
        And I enter name in your friend's name field of Share Product form
        And I click Send to a friend button
        Then I ensure the mandatory message is displayed under your friend's email field in Share Product form

    #Scenario - 15
    @validations
    Scenario: Verifying the character validation of your friend's email field in Share Product form
        Given I browse page 3 of ring Miya
        When I click Email icon in page 3
        And I enter invalid email address in your friend's email field of Share Product form
        Then I ensure the format validation message for the email field is displayed

    #Scenario - 16
    @functional
    Scenario: Ensure the same email can be entered in both your email and your friend's email textboxes
        Given I browse page 3 of ring Miya
        When I click Email icon in page 3
        And I enter name in your name field of Share Product form
        And I enter email in your email field of Share Product form
        And I enter name in your friend's name field of Share Product form
        And I enter same email in your friend's email field of Share Product form
        And I click Send to a friend button
        Then I ensure the success message is displayed in Share Product form

    #Scenario - 17
    @validations
    Scenario: Verifying the character limit of Your Name field in Share Product form
        Given I browse page 3 of ring Miya
        When I click Email icon in page 3
        And I enter name with more than 40 characters in your name field of Share Product form
        Then I ensure the your name field accepts only 40 characters in Share Product form

    #Scenario - 18
    @validations
    Scenario: Verifying the character limit of Your Friend's Name field in Share Product form
         Given I browse page 3 of ring Miya
        When I click Email icon in page 3
        And I enter name with more than 40 characters in your friend's name field of Share Product form
        Then I ensure the your friend's name field accepts only 40 characters in Share Product form
