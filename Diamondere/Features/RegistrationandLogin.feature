Feature: Testing the Registration and Login of Diamondere

    Background: Browsing staging environment
        Given I browse Diamondere website

    #1
    @smoketest
    Scenario: Checking the Presence of Login/Signup Icon in the homepage
        Given I click the Login and Signup icon in the Homepage
        Then I ensure clicking the Login and Signup icon opens the Login Register page
        And I ensure the Login and Register sections are displayed
    #2
    @smoketest
    Scenario: Checking the Presence of Login and Signup Icon in page 2
        Given I browse Solace ring in page 2
        Then I ensure the Login and Signup icon is present in page 2
    #3
    @smoketest
    Scenario: Checking the Presence of Login and Signup Icon in page 3
        Given I browse Solace ring in page 3
        Then I ensure the Login and Signup icon is present in page 3
    #4
    @smoketest
    Scenario: Checking the Presence of Login and Signup Icon in the shopping cart page
        Given I browse Solace ring the shopping cart page
        Then I ensure Login and Signup icon is present in the shopping cart page

    #5
    @validations
    Scenario: Validating the Register section
        Given I click the Login and Signup icon in the Homepage
        Then I ensure clicking the Login and Signup icon opens the Login Register page
        And I ensure the Register text, First Name, Last Name,Email and Password fields are displayed


    #6
    @validations
    Scenario: Entering the mandatory fields in the Register form
        Given I click the Login and Signup icon in the Homepage
        Then I ensure clicking the Login and Signup icon opens the Login Register page
        When I enter the first name, last name,Email and password in the respective fields in the register form
        And I ensure the Terms of use section is present
        When I click the Terms of use link
        Then I ensure clicking the terms of use link redirects to the expected page
        When I click the Terms and use checkbox
        And I click the Register button
        Then I ensure the welcome page is displayed

    #7
    @smoketest
    Scenario: validating the welcome screen after registration
        Given I browse welcome screen
        Then I ensure the welcome page is displayed with welcome components,categories and links,and footer section present
        When I click the FREE 100 DAY RETURNS link in the welcome page
        Then I ensure the link redirects to the return policy page
        When I click the complimentary global shipping link in the welcome page
        Then I ensure the link redirects to the shipping policy page
        When I click the free 100 day resizing link in the welcome page
        Then I ensure the link redirects to the free resizing page
        When I click the complimentary engraving link in the welcome page
        Then I ensure the link redirects to the engraving page
        When I click the Start creating your jewelery button
        Then I ensure clicking the Start creating your jewelery button redirects to the rings page

    #8
    @functional
    Scenario: validating the links present under rings category in the welcome page
        Given I browse welcome screen
        Then I ensure the Rings text ,Sapphire Rings,Ruby Rings and Emerald Rings links are present
        When I click the Emerald rings under rings category
        Then I ensure clicking the emerald rings move to the emerald rings page

    #9
    @functional
    Scenario: validating the links present under engagement category in the welcome page
        Given I browse welcome screen
        Then I ensure the engagement text,Solitaire Rings,Vintage Inspired and Platinum Rings links are present
        When I click the Solitaire Rings under rings category
        Then I ensure clicking the Solitaire Rings move to the Solitaire Rings page

    #10
    @functional
    Scenario: validating the links present under necklaces category in the welcome page
        Given I browse welcome screen
        Then I ensure the necklaces text, Heart, Unique and Sapphire pendants links are present
        When I click the Heart pendants under necklaces category
        Then I ensure clicking the Heart pendants move to the Heart pendants page

    #11
    @functional
    Scenario: validating the links present under earrings category in the welcome page
        Given I browse welcome screen
        Then I ensure the earrings text,Stud Earrings,Drop Earrings and Chandelier Earrings links are present
        When I click the Chandelier Earrings under rings category
        Then I ensure clicking the Chandelier Earrings move to the Chandelier Earrings page

    #12
    @functional
    Scenario: validating the links present under Mens category in the welcome page
        Given I browse welcome screen
        Then I ensure the Mens text, Men's Diamond Rings,Men's Wedding Rings and Cufflinks links are present
        When I click the  under Cufflinks Mens category
        Then I ensure clicking the Cufflinks move to the Cufflinks page

    # Negative scenarios
    #13
    @validations
    Scenario: Entering special characters, numbers in the first name field in Register form
        Given I click logout
        When I click the Login and Signup icon in the Homepage
        Then I ensure clicking the Login and Signup icon opens the Login Register page
        When I enter the special characters, numbers in the First name field in the register form
        Then I ensure the invalid error message for the first name field is displayed

    #14
    @validations
    Scenario: Entering the special characters, numbers in the last name field in the Register form
        Given I click the Login and Signup icon in the Homepage
        Then I ensure clicking the Login and Signup icon opens the Login Register page
        When I enter the  in the Last name field in the register form
        Then I ensure the invalid error message for the last name field is displayed

    #15
    @validations
    Scenario: Entering the special characters, numbers in the email field in the Register form
        Given I click the Login and Signup icon in the Homepage
        Then I ensure clicking the Login and Signup icon opens the Login Register page
        When I enter the Email in the email field in the register form
        Then I ensure the invalid error message for the email field is displayed
    #16
    @smoketest
    Scenario: Ensure Clicking the register button without entering fields
        Given I click the Login and Signup icon in the Homepage
        Then I ensure clicking the Login and Signup icon opens the Login Register page
        When I click the register button without entering fields
        Then I ensure the mandatory field validation for the fields are displayed


    #     /////login////
    #17
    @validations
    Scenario: Validating the login section
        Given I click the Login and Signup icon in the Homepage
        Then I ensure clicking the Login and Signup icon opens the Login Register page
        And I ensure the Login text,Email and Password fields are displayed at the top of the login section

    #18
    @smoketest
    Scenario: Validating the homepage after logging in
        Given I click the Login and Signup icon in the Homepage
        Then I ensure clicking the Login and Signup icon opens the Login Register page
        When I enter the Email and Password fields in the login form
        Then I click the login button
        And I ensure the login button returns to the Homepage of the diamondere
        When I hover on Login and Signup icon
        Then I ensure the track my order, order history and logout options are visible
        And I click logout

    #19
    @smoketest
    Scenario: Clicking the logout button after log in
        Given I click the Login and Signup icon in the Homepage
        Then I ensure clicking the Login and Signup icon opens the Login Register page
        When I enter the Email and Password fields in the login form
        Then I click the login button
        And I ensure the login button returns to the Homepage of the diamondere
        When I hover on Login and Signup icon
        Then I ensure the track my order, order history and logout options are visible
        When I click the Logout option
        Then I ensure the user stays in the Homepage of Diamondere


    #negative scenarios

    #20
    @validations
    Scenario: Entering the special characters, numbers in the email field in the login form
        Given I click the Login and Signup icon in the Homepage
        Then I ensure clicking the Login and Signup icon opens the Login Register page
        When I enter the special characters in the email field in the login form
        Then I ensure the mandatory field validation for the email field is displayed

    #21
    @smoketest
    Scenario: Entering the unregistered login credentials in the login form
        Given I click the Login and Signup icon in the Homepage
        Then I ensure clicking the Login and Signup icon opens the Login Register page
        When I enter the invalid email and password in the respective fields in the login form
        Then I click Login button using an unregistered login
        And I ensure the invalid login credentials error message is displayed

    #22
    @validations
    Scenario: Entering valid Email and invalid password in the forgot password Email field
        Given I click the Login and Signup icon in the Homepage
        Then I ensure clicking the Login and Signup icon opens the Login Register page
        When I enter the valid email and invalid password in the respective fields in the login form
        Then I click Login button using an invalid password
        And I ensure the invalid login credentials error message is displayed


    #forgot password

    #     #23
    @smoketest
    Scenario: Validating the Forgot password link in the login form
        Given I click the Login and Signup icon in the Homepage
        Then I ensure clicking the Login and Signup icon opens the Login Register page
        When I click the Forgot password link
        Then I ensure the Forgot password link redirects to the forgot password page

    #24
    @validations
    Scenario: Validating the Forgot password section
        Given I click the Login and Signup icon in the Homepage
        Then I ensure clicking the Login and Signup icon opens the Login Register page
        When I click the Forgot password link
        Then I ensure the Forgot password link redirects to the forgot password page
        And I ensure the forgot password text,email box are present

    #25
    @smoketest
    Scenario: Entering the submit button in the Forgot password form
        Given I click the Login and Signup icon in the Homepage
        Then I ensure clicking the Login and Signup icon opens the Login Register page
        When I click the Forgot password link
        Then I ensure the Forgot password link redirects to the forgot password page
        And I ensure the forgot password text,email box are present
        Then I enter the registered email in the Email address field
        When I click the submit button in the Forgot password form
        Then I ensure the success message is displayed in the screen



    #     # ///negative scenarios///

    ##26
    @validations
    Scenario: Entering special characters, numbers in the email field of the Forgot password form
        Given I click the Login and Signup icon in the Homepage
        Then I ensure clicking the Login and Signup icon opens the Login Register page
        When I click the Forgot password link
        Then I ensure the Forgot password link redirects to the forgot password page
        And I ensure the forgot password text,email box are present
        When I enter the special characters, numbers in the Email address field in the forgot password form
        Then I ensure the field validation message for the email address field is displayed

    #27
    @smoketest
    Scenario: Entering unregistered mail in the email field of the Forgot password form
        Given I click the Login and Signup icon in the Homepage
        Then I ensure clicking the Login and Signup icon opens the Login Register page
        When I click the Forgot password link
        Then I ensure the Forgot password link redirects to the forgot password page
        And I ensure the forgot password text,email box are present
        When I enter the unregistered email in the Email address field
        And I click submit button in the Forgot password form
        Then I ensure the error message for the invalid email address is displayed

    # #28
    #     /////Reset password////
    #     Scenario: Checking the fields in the reset password link
    #     Given I click the reset password link
    #     Then I ensure the reset password text,your new password and confirm password again fields are present
    #     When I enter the your new password and confirm password again
    #     And I click the Submit button in the reset password link
    #     Then I ensure clicking the submit button redirects to the login and register page

    # #29
    #     Scenario: Validating the fields in the expired reset password link
    #     Given I click the reset password link
    #     Then I ensure the reset password text,your new password and confirm password again fields are present
    #     When I enter the your new password and confirm password again
    #     And I click the Submit button in the reset password link
    #     Then I ensure the link expired message is displayed

    # #30
    #     Scenario: Validating the error message without entering your new password and confirm password again fields
    #     Given I click the reset password link
    #     Then I ensure the reset password text,your new password and confirm password again fields are present
    #     When I click the submit button in the reset password
    #     And I ensure the error message under the your new password and confirm password again fields are displayed

    # #31
    #  Scenario: Validating the error message by entering different password in your new password and confirm password again fields
    #     Given I click the reset password link
    #     Then I ensure the reset password text,your new password and confirm password again fields are present
    #   When I enter the different passwords in your new password and confirm password again fields
    #   Then I ensure the error message is displayed for different passwords in the password fields

    #32///guest user///
    @smoketest
    Scenario: checking the shopping cart quantity remains the same after logging in from guest to user
        Given I remove products if already added in cart
        When I click the rings menu
        Then I select the Diamond rings from the submenu
        And I select the Flori ring
        When I click the select ring-size dropdown
        Then I Click the ring size dropdown
        And I select the US3-UK& AU-F ring size
        And I click the Add to cart button
        And I click the checkout button
        When I click the login signup icon in the shopping cart page
        Then I ensure the login register page opens
        When I enter the Registered Email and password in the respective fields
        And I click the Login Button
        Then I ensure the shopping cart page is displayed with the order quantity mentioned in the bag icon
        When I click remove button for the login

