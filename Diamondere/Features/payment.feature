Feature: PaymentOptions page of Diamondere

Background: Background name: Browsing checkout page 
    Given I browse Diamondere website
    When I remove products if already added in cart
    When I want to clear local storage
    

#1
@smoketest
Scenario: Validating the basic payment options
    Given I browse page 3 of earring Vogue
    And I click Add to cart for Vogue
    And I click Checkout button
    And I click Proceed to Payment in Shopping Cart Page
    And I enter First Name in Shipping address
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
    Then I ensure payment option text is displayed
    Then I ensure credit card field mm and yy, cvc and pay with your card button is displayed
    Then I ensure paypal, paypal credit, affirm and diamondere 3 installment month is displayed
    When I want to clear local storage

#2
@smoketest
Scenario:Validating the payment via Visa options 
    Given I browse page 3 of earring Vogue
    And I click Add to cart for Vogue
    And I click Checkout button
    And I click Proceed to Payment in Shopping Cart Page
    And I enter First Name in Shipping address
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
    Then I ensure credit card field mm and yy, cvc and pay with your card button is displayed
    When I enter working visa credit or debit card with mm and yy, cvc
    And I click pay with your card button
    Then I ensure order placed information like orderid will be displayed
    When I want to clear local storage

#3
@smoketest
Scenario:Validating the payment via Mastercard options
    Given I browse page 3 of earring Vogue
    And I click Add to cart for Vogue
    And I click Checkout button
    And I click Proceed to Payment in Shopping Cart Page
    And I enter First Name in Shipping address
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
    Then I ensure credit card field mm and yy, cvc and pay with your card button is displayed
    When I enter working mastercard credit or debit card with mm and yy, cvc
    And I click pay with your card button
    Then I ensure order placed information like orderid will be displayed
    When I want to clear local storage

#4
@smoketest
Scenario:Validating the payment via American express options
    Given I browse page 3 of earring Vogue
    And I click Add to cart for Vogue
    And I click Checkout button
    And I click Proceed to Payment in Shopping Cart Page
    And I enter First Name in Shipping address
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
    Then I ensure credit card field mm and yy, cvc and pay with your card button is displayed
    When I enter working amex credit or debit card with mm and yy, cvc
    And I click pay with your card button
    Then I ensure order placed information like orderid will be displayed
    When I want to clear local storage

#5
@smoketest
 Scenario:Validating the payment via Diners club options
    Given I browse page 3 of earring Vogue
    And I click Add to cart for Vogue
    And I click Checkout button
    And I click Proceed to Payment in Shopping Cart Page
    And I enter First Name in Shipping address
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
    Then I ensure credit card field mm and yy, cvc and pay with your card button is displayed
    When I enter working dinerclub credit or debit card with mm and yy, cvc
    And I click pay with your card button
    Then I ensure order placed information like orderid will be displayed
    When I want to clear local storage

#6
@smoketest
Scenario:Validating the payment by entering invalid card number
    Given I browse page 3 of earring Vogue
    And I click Add to cart for Vogue
    And I click Checkout button
    And I click Proceed to Payment in Shopping Cart Page
    And I enter First Name in Shipping address
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
    Then I ensure credit card field mm and yy, cvc and pay with your card button is displayed
    When I enter invalid card number
    And I click pay with your card button
    Then I ensure enter card details text will displayed
    When I want to clear local storage

#6
@smoketest
Scenario:Validating the payment by entering invalid month
    Given I browse page 3 of earring Vogue
    And I click Add to cart for Vogue
    And I click Checkout button
    And I click Proceed to Payment in Shopping Cart Page
    And I enter First Name in Shipping address
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
    Then I ensure credit card field mm and yy, cvc and pay with your card button is displayed
    When I enter invalid mm and yy
    And I click pay with your card button
    Then I ensure enter card details text will displayed
    When I want to clear local storage

#7
@smoketest
Scenario:Validating the payment by entering invalid cvv number
    Given I browse page 3 of earring Vogue
    And I click Add to cart for Vogue
    And I click Checkout button
    And I click Proceed to Payment in Shopping Cart Page
    And I enter First Name in Shipping address
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
    Then I ensure credit card field mm and yy, cvc and pay with your card button is displayed
    When I enter invalid cvv
    And I click pay with your card button
    Then I ensure enter card details text will displayed
    When I want to clear local storage

#8
@smoketest
Scenario:Validating the payment by placing an order with insufficient bank balance
    Given I browse page 3 of earring Vogue
    And I click Add to cart for Vogue
    And I click Checkout button
    And I click Proceed to Payment in Shopping Cart Page
    And I enter First Name in Shipping address
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
    Then I ensure credit card field mm and yy, cvc and pay with your card button is displayed
    When I enter insuffient balance credit or debit card with mm and yy, cvc
    And I click pay with your card button
    Then I ensure your card has insuffient funds popup is displayed
    When I click cross button in error popup
    Then I ensure popup is not displayed
    When I want to clear local storage

#9
@smoketest
Scenario:Validating the payment by generic decline
    Given I browse page 3 of earring Vogue
    And I click Add to cart for Vogue
    And I click Checkout button
    And I click Proceed to Payment in Shopping Cart Page
    And I enter First Name in Shipping address
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
    Then I ensure credit card field mm and yy, cvc and pay with your card button is displayed
    When I enter generic decline credit or debit card with mm and yy, cvc
    And I click pay with your card button
    Then I ensure your card was declined popup is displayed
    When I click cross button in error popup
    Then I ensure popup is not displayed
    When I want to clear local storage

#10
@smoketest
Scenario:Validating the payment when your card is lost
    Given I browse page 3 of earring Vogue
    And I click Add to cart for Vogue
    And I click Checkout button
    And I click Proceed to Payment in Shopping Cart Page
    And I enter First Name in Shipping address
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
    Then I ensure credit card field mm and yy, cvc and pay with your card button is displayed
    When I enter lost credit or debit card with mm and yy, cvc
    And I click pay with your card button
    Then I ensure your card was declined popup is displayed
    When I click cross button in error popup
    Then I ensure popup is not displayed
    When I want to clear local storage

# #11
@smoketest
 Scenario:Validating the payment by processing error
    Given I browse page 3 of earring Vogue
    And I click Add to cart for Vogue
    And I click Checkout button
    And I click Proceed to Payment in Shopping Cart Page
    And I enter First Name in Shipping address
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
    Then I ensure credit card field mm and yy, cvc and pay with your card button is displayed
    When I enter processing error credit or debit card with mm and yy, cvc
    And I click pay with your card button
    Then I ensure An error occurred while processing your card popup is displayed
    When I click cross button in error popup
    Then I ensure popup is not displayed
   When I want to clear local storage

# # PAYPAL - CANNOT BE AUTOMATED
# #12
# @smoketest
#  Scenario:Validating the payment by paypal
#     Given I browse page 3 of earring Vogue
#     And I click Add to cart for Vogue
#     And I click Checkout button
#     And I click Proceed to Payment in Shopping Cart Page
#     And I enter First Name in Shipping address
#     When I enter Last Name in Shipping address
#     And I enter Email in Shipping address
#     And I enter Phone in Shipping address
#     And I enter Address in Shipping address
#     And I enter Address line 2 in Shipping address
#     And I enter City in Shipping address
#     And I select US in the country dropdown
#     And I select California in the state dropdown
#     And I enter Zip code in Shipping address
#     And I click Continue To Payment button
#     Then I ensure credit card field mm and yy, cvc and pay with your card button is displayed
#     When I click paypal button
#     Then I ensure pay with paypal button is displayed
#     When I click pay with paypal button
#     #Then I ensure paypal page is directed in same page
#     When I click pay with credit or debit card
#     #Then I ensure pay with credit or debit card text displayed
#     When I accept cookies if alert displayed
#     When I enter usa mobile in mobile field
#     And I enter working visa credit or debit card with mm and yy, cvc in paypal
#     And I click tickbox like shipping same as billing address
#     And I click create paypal account radio button
#     And I click continue as guest in paypal
#     When I accept cookies if alert displayed
#     And I enter details in paypal checkout page and submit
#     Then I ensure order placed information like orderid will be displayed
#     When I want to clear local storage

# # PAYPAL - CANNOT BE AUTOMATED
# #13
# @smoketest
# Scenario:Validating the payment by paypal with insufficient balance
#     Given I browse page 3 of earring Vogue
#     And I click Add to cart for Vogue
#     And I click Checkout button
#     And I click Proceed to Payment in Shopping Cart Page
#     And I enter First Name in Shipping address
#     When I enter Last Name in Shipping address
#     And I enter Email in Shipping address
#     And I enter Phone in Shipping address
#     And I enter Address in Shipping address
#     And I enter Address line 2 in Shipping address
#     And I enter City in Shipping address
#     And I select US in the country dropdown
#     And I select California in the state dropdown
#     And I enter Zip code in Shipping address
#     And I click Continue To Payment button
#     Then I ensure credit card field mm and yy, cvc and pay with your card button is displayed
#     When I click paypal button
#     Then I ensure pay with paypal button is displayed
#     When I click pay with paypal button
#     #Then I ensure paypal page is directed in same page
#     When I click pay with credit or debit card
#     #Then I ensure pay with credit or debit card text displayed
#     When I enter usa mobile in mobile field
#     And I enter insuffient balance credit or debit card with mm and yy, cvc in paypal
#     And I click tickbox like shipping same as billing address
#     And I click create paypal account radio button
#     And I click continue as guest in paypal
#     Then I ensure error message is displayed in paypal
#     Then I ensure cancel and return merchant is displayed in paypal
#     When I want to clear local storage


# # PAYPAL - CANNOT BE AUTOMATED
# #14
# @smoketest
# Scenario:Validating the payment by paypal with hitback
#     Given I browse page 3 of earring Vogue
#     And I click Add to cart for Vogue
#     And I click Checkout button
#     And I click Proceed to Payment in Shopping Cart Page
#     And I enter First Name in Shipping address
#     When I enter Last Name in Shipping address
#     And I enter Email in Shipping address
#     And I enter Phone in Shipping address
#     And I enter Address in Shipping address
#     And I enter Address line 2 in Shipping address
#     And I enter City in Shipping address
#     And I select US in the country dropdown
#     And I select California in the state dropdown
#     And I enter Zip code in Shipping address
#     And I click Continue To Payment button
#     Then I ensure credit card field mm and yy, cvc and pay with your card button is displayed
#     When I click paypal button
#     Then I ensure pay with paypal button is displayed
#     When I click pay with paypal button
#     #Then I ensure paypal page is directed in same page
#     When I click pay with credit or debit card
#     #Then I ensure pay with credit or debit card text displayed
#     When I enter usa mobile in mobile field
#     Then I ensure cancel and return merchant is displayed in paypal
#     When I click cancel and return merchant link
#     Then I ensure go to payment link is displayed
#     When I want to clear local storage

# # PAYPAL - CANNOT BE AUTOMATED
# #14(1)
# @smoketest
# Scenario:Validating the payment by paypal with hitback and move to shopping cart page
#     Given I browse page 3 of earring Vogue
#     And I click Add to cart for Vogue
#     And I click Checkout button
#     And I click Proceed to Payment in Shopping Cart Page
#     And I enter First Name in Shipping address
#     When I enter Last Name in Shipping address
#     And I enter Email in Shipping address
#     And I enter Phone in Shipping address
#     And I enter Address in Shipping address
#     And I enter Address line 2 in Shipping address
#     And I enter City in Shipping address
#     And I select US in the country dropdown
#     And I select California in the state dropdown
#     And I enter Zip code in Shipping address
#     And I click Continue To Payment button
#     Then I ensure credit card field mm and yy, cvc and pay with your card button is displayed
#     When I click paypal button
#     Then I ensure pay with paypal button is displayed
#     When I click pay with paypal button
#     #Then I ensure paypal page is directed in same page
#     When I click pay with credit or debit card
#     #Then I ensure pay with credit or debit card text displayed
#     When I enter usa mobile in mobile field
#     Then I ensure cancel and return merchant is displayed in paypal
#     When I click cancel and return merchant link
#     Then I ensure go to payment link is displayed
#     When I click go to payment link
#     Then I ensure checkout page is redirected
#     When I want to clear local storage

# # PAYPAL - CANNOT BE AUTOMATED
# #15
# @smoketest
#  Scenario:Validating the payment by paypal credit 
#     Given I browse page 3 of earring Vogue
#     And I click Add to cart for Vogue
#     And I click Checkout button
#     And I click Proceed to Payment in Shopping Cart Page
#     And I enter First Name in Shipping address
#     When I enter Last Name in Shipping address
#     And I enter Email in Shipping address
#     And I enter Phone in Shipping address
#     And I enter Address in Shipping address
#     And I enter Address line 2 in Shipping address
#     And I enter City in Shipping address
#     And I select US in the country dropdown
#     And I select California in the state dropdown
#     And I enter Zip code in Shipping address
#     And I click Continue To Payment button
#     Then I ensure credit card field mm and yy, cvc and pay with your card button is displayed
#     When I click paypal credit button
#     Then I ensure pay with paypal credit button is displayed
#     When I click pay with paypal credit button
#     When I click pay with credit or debit card
#     #Then I ensure pay with credit or debit card text displayed
#     When I enter usa mobile in mobile field
#     And I enter working visa credit or debit card with mm and yy, cvc in paypal credit
#     And I click tickbox like shipping same as billing address
#     And I click create paypal account radio button
#     And I click continue as guest in paypal
#     And I enter details in paypal checkout page and submit
#     Then I ensure order placed information like orderid will be displayed
#     When I want to clear local storage

# # PAYPAL - CANNOT BE AUTOMATED
#  #16
# @smoketest
# Scenario:Validating the payment by paypal credit with invaild card details
#     Given I browse page 3 of earring Vogue
#     And I click Add to cart for Vogue
#     And I click Checkout button
#     And I click Proceed to Payment in Shopping Cart Page
#     And I enter First Name in Shipping address
#     When I enter Last Name in Shipping address
#     And I enter Email in Shipping address
#     And I enter Phone in Shipping address
#     And I enter Address in Shipping address
#     And I enter Address line 2 in Shipping address
#     And I enter City in Shipping address
#     And I select US in the country dropdown
#     And I select California in the state dropdown
#     And I enter Zip code in Shipping address
#     And I click Continue To Payment button
#     Then I ensure credit card field mm and yy, cvc and pay with your card button is displayed
#     When I click paypal credit button
#     Then I ensure pay with paypal credit button is displayed
#     When I click pay with paypal credit button
#     #Then I ensure paypal page is directed in same page
#     When I click pay with credit or debit card
#     #Then I ensure pay with credit or debit card text displayed
#     When I enter usa mobile in mobile field
#     And I enter insuffient balance credit or debit card with mm and yy, cvc in paypal credit
#     And I click tickbox like shipping same as billing address
#     And I click create paypal account radio button
#     And I click continue as guest in paypal
#     Then I ensure error message is displayed in paypal credit
#     Then I ensure cancel and return merchant is displayed in paypal credit
#     When I want to clear local storage

# # PAYPAL - CANNOT BE AUTOMATED
# # #17
# @smoketest
#  Scenario:Validating the payment by paypal credit hit back
#     Given I browse page 3 of earring Vogue
#     And I click Add to cart for Vogue
#     And I click Checkout button
#     And I click Proceed to Payment in Shopping Cart Page
#     And I enter First Name in Shipping address
#     When I enter Last Name in Shipping address
#     And I enter Email in Shipping address
#     And I enter Phone in Shipping address
#     And I enter Address in Shipping address
#     And I enter Address line 2 in Shipping address
#     And I enter City in Shipping address
#     And I select US in the country dropdown
#     And I select California in the state dropdown
#     And I enter Zip code in Shipping address
#     And I click Continue To Payment button
#     Then I ensure credit card field mm and yy, cvc and pay with your card button is displayed
#     When I click paypal credit button
#     Then I ensure pay with paypal credit button is displayed
#     When I click pay with paypal credit button
#     #Then I ensure paypal page is directed in same page
#     When I click pay with credit or debit card
#     When I click cancel and return merchant link
#     Then I ensure go to payment link is displayed
#     When I want to clear local storage

#18
@smoketest
 Scenario:Validating the  Affirm payment by positive scenario
    Given I browse page 3 of earring Vogue
    And I click Add to cart for Vogue
    And I click Checkout button
    And I click Proceed to Payment in Shopping Cart Page
    And I enter First Name in Shipping address
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
    #Then I ensure credit card field mm/yy, cvc and pay with your card button is displayed
    When I click affirm radiobutton
    Then I ensure pay with affirm button is displayed
    When I click pay with affirm button
    #Then I ensure affirm page is directed in same page
    When I enter usa mobile and continue in affirm page
    When I enter 4 digit pin 
    When I click 3 months options and click choose this plan button
    And I click disclaimer and confirm button
    Then I ensure order placed information like orderid will be displayed
    When I want to clear local storage

#19
@smoketest
Scenario:Validating the  Affirm payment by negative scenario
    Given I browse page 3 of earring Vogue
    And I click Add to cart for Vogue
    And I click Checkout button
    And I click Proceed to Payment in Shopping Cart Page
    And I enter First Name in Shipping address
    When I enter Last Name in Shipping address
    And I enter Email in Shipping address
    And I enter Indian Phone in Shipping address
    And I enter Address in Shipping address
    And I enter Address line 2 in Shipping address
    And I enter City in Shipping address
    And I select US in the country dropdown
    And I select California in the state dropdown
    And I enter Zip code in Shipping address
    And I click Continue To Payment button
    #Then I ensure credit card field mm/yy, cvc and pay with your card button is displayed
    When I click affirm radiobutton
    Then I ensure pay with affirm button is displayed
    When I click pay with affirm button
    #Then I ensure invalid mobile number text and return to merchant button is displayed
    When I click return to merchant
    Then I ensure go to payment link is displayed
    When I want to clear local storage

#20
@smoketest
Scenario:Validating the payment via Visa options in diamondere 3 month plan
    Given I browse page 3 of earring Vogue
    And I click Add to cart for Vogue
    And I click Checkout button
    And I click Proceed to Payment in Shopping Cart Page
    And I enter First Name in Shipping address
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
    Then I ensure credit card field mm and yy, cvc and pay with your card button is displayed
    When I click diamondere 3 month installment payment
    When I enter working visa credit or debit card with mm and yy, cvc in installment
    And I click pay 1st installment button
    Then I ensure order placed information like orderid will be displayed
    When I want to clear local storage

# #21
@smoketest
Scenario:Validating the payment via Mastercard options in diamondere 3 month plan
    Given I browse page 3 of earring Vogue
    And I click Add to cart for Vogue
    And I click Checkout button
    And I click Proceed to Payment in Shopping Cart Page
    And I enter First Name in Shipping address
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
    Then I ensure credit card field mm and yy, cvc and pay with your card button is displayed
    When I click diamondere 3 month installment payment
    When I enter working mastercard credit or debit card with mm and yy, cvc in installment
    And I click pay 1st installment button
    Then I ensure order placed information like orderid will be displayed
    When I want to clear local storage

#22
@smoketest
Scenario:Validating the payment via American Express options in diamondere 3 month plan
    Given I browse page 3 of earring Vogue
    And I click Add to cart for Vogue
    And I click Checkout button
    And I click Proceed to Payment in Shopping Cart Page
    And I enter First Name in Shipping address
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
    Then I ensure credit card field mm and yy, cvc and pay with your card button is displayed
    When I click diamondere 3 month installment payment
    When I enter working amex credit or debit card with mm and yy, cvc in installment
    And I click pay 1st installment button
    Then I ensure order placed information like orderid will be displayed
    When I want to clear local storage

# #23
@smoketest
Scenario:Validating the payment via Diners Club card options in diamondere 3 month plan
    Given I browse page 3 of earring Vogue
    And I click Add to cart for Vogue
    And I click Checkout button
    And I click Proceed to Payment in Shopping Cart Page
    And I enter First Name in Shipping address
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
    Then I ensure credit card field mm and yy, cvc and pay with your card button is displayed
    When I click diamondere 3 month installment payment
    When I enter working dinerclub credit or debit card with mm and yy, cvc in installment
    And I click pay 1st installment button
    Then I ensure order placed information like orderid will be displayed
    When I want to clear local storage

# #24
@smoketest
Scenario:Validating the payment with invalid card number in installment
    Given I browse page 3 of earring Vogue
    And I click Add to cart for Vogue
    And I click Checkout button
    And I click Proceed to Payment in Shopping Cart Page
    And I enter First Name in Shipping address
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
    Then I ensure credit card field mm and yy, cvc and pay with your card button is displayed
    When I click diamondere 3 month installment payment   
    When I enter invalid card number in installment
    And I click pay 1st installment button
    Then I ensure enter card details text will displayed
    When I want to clear local storage

# #25
@smoketest
Scenario:Validating the payment with invalid cvv in installment
    Given I browse page 3 of earring Vogue
    And I click Add to cart for Vogue
    And I click Checkout button
    And I click Proceed to Payment in Shopping Cart Page
    And I enter First Name in Shipping address
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
    Then I ensure credit card field mm and yy, cvc and pay with your card button is displayed
    When I click diamondere 3 month installment payment 
    When I enter invalid cvv in installment
    And I click pay 1st installment button
    Then I ensure enter card details text will displayed
    When I want to clear local storage
    

 #26
@smoketest
 Scenario:Validating the payment with invalid month and year in installment
    Given I browse page 3 of earring Vogue
    And I click Add to cart for Vogue
    And I click Checkout button
    And I click Proceed to Payment in Shopping Cart Page
    And I enter First Name in Shipping address
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
    Then I ensure credit card field mm and yy, cvc and pay with your card button is displayed
    When I click diamondere 3 month installment payment
    When I enter invalid mm and yy in installment
    And I click pay 1st installment button
    Then I ensure enter card details text will displayed
    When I want to clear local storage


 #27
@smoketest
Scenario: Validating the payment with wirepayment
    Given I browse Start with a Diamond page of Rings menu
    When I select Quick view dropdown
    And I select View Diamond button
    And I click Select Ring button
    And I select a product in page 2
    And I select credit or debit no saving
    And I select ring size 
    And I select setting add to cart button
    #When I click checkout button
    And I click Proceed to Payment in Shopping Cart Page
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
    Then I ensure payment option text is displayed
    #Then I ensure wirepayment option is selected default
    Then I ensure pay with wirepayment button is displayed
    When I click pay with wirepayment button
    #Then I ensure order placed information like orderid will be displayed
    When I want to clear local storage

