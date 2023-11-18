Feature: Testing Shoppingcartpage of Diamondere

    Background: Browsing staging environment
        Given I browse Diamondere website
        When I remove products if already added in cart

    #1(Aftercheckout)
    @validations
    Scenario: Checking continue shipping and check out button in checkout popup is displayed
        Given I browse ring product details page
        Then I ensure centre stone area is displayed
        And I ensure accent stones area is displayed
        Then I ensure ring size area is displayed
        And I ensure free resizing text is displayed
        And I ensure select dropdown is displayed
        And I ensure ring-size guide are displayed
        When I click select dropdown
        When I click choose ring size dropdown field
        And I select 8us size
        And I select Add to cart button
        Then I ensure added product popup is displayed
        And I ensure continue shopping and checkout button is displayed

    #2(Aftercheckout)
    @smoketest
    Scenario: Checking productimage, product description, ring size in checkout popup is displayed
        Given I browse ring product details page
        Then I ensure centre stone area is displayed
        And I ensure accent stones area is displayed
        Then I ensure ring size area is displayed
        And I ensure free resizing text is displayed
        And I ensure select dropdown is displayed
        When I click select dropdown
        And I ensure ring-size guide are displayed
        When I click choose ring size dropdown field
        And I select 8us size
        And I select Add to cart button
        Then I ensure added product popup is displayed
        And I ensure productimage, product name,price,description and ring size is displayed

    #3(Aftercheckout-checkout)
    @smoketest1
    Scenario: Checking shopping cart page is redirected when clicking checkout button in checkout popup is displayed
        Given I browse ring product details page
        Then I ensure centre stone area is displayed
        And I ensure accent stones area is displayed
        Then I ensure ring size area is displayed
        And I ensure free resizing text is displayed
        And I ensure select dropdown is displayed
        When I click select dropdown
        And I ensure ring-size guide are displayed
        When I click choose ring size dropdown field
        And I select 8us size
        And I select Add to cart button
        Then I ensure added product popup is displayed
        When I click checkout button
        Then I ensure shoppingcart page is redirected

    #4(Aftercheckout-continue shopping)
    @smoketest
    Scenario: Checking the flow after choosing ch=ontinue shopping button
        Given I browse ring product details page
        Then I ensure centre stone area is displayed
        And I ensure accent stones area is displayed
        Then I ensure ring size area is displayed
        And I ensure free resizing text is displayed
        And I ensure select dropdown is displayed
        When I click select dropdown
        And I ensure ring-size guide are displayed
        When I click choose ring size dropdown field
        And I select 8us size
        And I select Add to cart button
        Then I ensure added product popup is displayed
        When I click continue shopping button
        Then I ensure still exist in same page is displayed

    #5(Aftercheckout-matching band)(page-3)
    @functional
    Scenario: Checking productimage, product description, ring size is displayed
        Given I browse ring product details page
        Then I ensure centre stone area is displayed
        And I ensure accent stones area is displayed
        Then I ensure ring size area is displayed
        And I ensure free resizing text is displayed
        And I ensure select dropdown is displayed
        When I click select dropdown
        And I ensure ring-size guide are displayed
        When I click choose ring size dropdown field
        And I select 8us size
        Then I ensure the View matching bands link is displayed
        When I click the View matching bands
        Then I ensure the View matching bands moves to the matching bands section
        Then I ensure it moved to matching band section
        Then I ensure matching band product image is displayed
        When I click matching band product view details link
        Then I ensure matching band product full details popup is displayed
        And I ensure matching band product image,name, price, product description in full details popup is displayed
        And I ensure matching band product ring size is displayed
        When I click ring size of matching band product in full details popup
        And I select Add ring and band button
        Then I ensure added product popup is displayed
        And I ensure ring productimage, product name,price,description and ring size is displayed
        When I move to complements texts
        And I ensure band productimage, product name,price,description and ring size is displayed


    #Shopping cart
    #1(Aftercheckout-continue shopping)
    @smoketest1
    Scenario: Checking product details page move to shopping cart page when hitting checkout
        Given I browse ring product details page
        Then I ensure centre stone area is displayed
        And I ensure accent stones area is displayed
        Then I ensure ring size area is displayed
        And I ensure free resizing text is displayed
        And I ensure select dropdown is displayed
        When I click select dropdown
        And I ensure ring-size guide are displayed
        When I click choose ring size dropdown field
        And I select 8us size
        And I select Add to cart button
        Then I ensure added product popup is displayed
        And I ensure continue shopping and checkout button is displayed
        When I click checkout button
        Then I ensure moved to shopping cart page

    #2
    @validations
    Scenario: Checking shopping cart text and proceed to payment button
        Given I browse ring product details page
        Then I ensure centre stone area is displayed
        And I ensure accent stones area is displayed
        Then I ensure ring size area is displayed
        And I ensure free resizing text is displayed
        And I ensure select dropdown is displayed
        When I click select dropdown
        And I ensure ring-size guide are displayed
        When I click choose ring size dropdown field
        And I select 8us size
        And I select Add to cart button
        Then I ensure added product popup is displayed
        And I ensure continue shopping and checkout button is displayed
        When I click checkout button
        Then I ensure moved to shopping cart page
        Then I ensure your shopping cart text is displayed
        Then I ensure proceed to payment button near shopping cart text is displayed

    #3
    @smoketest
    Scenario: Checking xylos product details are displayed in shoppingcart page
        Given I browse ring product details page
        Then I ensure centre stone area is displayed
        And I ensure accent stones area is displayed
        Then I ensure ring size area is displayed
        And I ensure free resizing text is displayed
        And I ensure select dropdown is displayed
        When I click select dropdown
        And I ensure ring-size guide are displayed
        When I click the Ring Size Dropdown
        And I select 8us size
        And I select Add to cart button
        Then I ensure added product popup is displayed
        And I ensure continue shopping and checkout button is displayed
        When I click checkout button
        Then I ensure moved to shopping cart page
        Then I ensure product area in shoppingcart is displayed
        Then I ensure xylos product image, name and description in shoppingcart is displayed
        Then I ensure selected xylos ringsize text and ringsize is displayed
        Then I ensure selected xylos centre stone text and centre stone is displayed
        Then I ensure product price is displayed
        Then I ensure 100 days return and resizing text is displayed
        Then I ensure 365 warranty text is displayed
        Then I ensure the View matching bands link is displayed
        Then I ensure add protection text is displayed
        Then I ensure 3,5,lifetime buttons are displayed


    #5
    @smoketest1
    Scenario: Checking matching product is shown when clicking matching band link in shoppingcart page
        Given I browse ring product details page
        Then I ensure centre stone area is displayed
        And I ensure accent stones area is displayed
        Then I ensure ring size area is displayed
        And I ensure free resizing text is displayed
        And I ensure select dropdown is displayed
        When I click select dropdown
        And I ensure ring-size guide are displayed
        When I click choose ring size dropdown field
        And I select 8us size
        And I select Add to cart button
        Then I ensure added product popup is displayed
        And I ensure continue shopping and checkout button is displayed
        When I click checkout button
        Then I ensure moved to shopping cart page
        Then I ensure product area in shoppingcart is displayed
        Then I ensure xylos product image, name and description in shoppingcart is displayed
        Then I ensure product price is displayed
        Then I ensure the View matching bands link is displayed
        When I click the View matching bands
        Then I ensure the View matching bands moves to the matching bands section in shoppingcart

    #6
    @smoketest
    Scenario: Checking ring product remove from shopping cart page
        Given I browse ring product details page
        Then I ensure centre stone area is displayed
        And I ensure accent stones area is displayed
        Then I ensure ring size area is displayed
        And I ensure free resizing text is displayed
        And I ensure select dropdown is displayed
        When I click select dropdown
        And I ensure ring-size guide are displayed
        When I click choose ring size dropdown field
        And I select 8us size
        And I select Add to cart button
        Then I ensure added product popup is displayed
        And I ensure continue shopping and checkout button is displayed
        When I click checkout button
        Then I ensure moved to shopping cart page
        Then I ensure product area in shoppingcart is displayed
        Then I ensure xylos product image, name and description in shoppingcart is displayed
        When I click remove button
        Then I ensure xylos product is removed from shopping cart page


    #7
    @smoketest1
    Scenario: Checking matchingband product details are displayed under matchingband section in shopping page
        Given I browse ring product details page
        Then I ensure centre stone area is displayed
        And I ensure accent stones area is displayed
        Then I ensure ring size area is displayed
        And I ensure free resizing text is displayed
        And I ensure select dropdown is displayed
        When I click select dropdown
        And I ensure ring-size guide are displayed
        When I click choose ring size dropdown field
        And I select 8us size
        And I select Add to cart button
        Then I ensure added product popup is displayed
        And I ensure continue shopping and checkout button is displayed
        When I click checkout button
        Then I ensure moved to shopping cart page
        Then I ensure product area in shoppingcart is displayed
        Then I ensure xylos product image, name and description in shoppingcart is displayed
        When I click the View matching bands
        Then I ensure the View matching bands moves to the matching bands section in shoppingcart
        Then I ensure Matching band product details is displayed in Matching band section

    #8
    @smoketest
    Scenario: Checking matching band product added in shopping cart page when adding matching band product
        Given I browse ring product details page
        Then I ensure ring size area is displayed
        And I ensure free resizing text is displayed
        When I click select dropdown
        And I ensure ring-size guide are displayed
        When I click choose ring size dropdown field
        And I select 8us size
        And I select Add to cart button
        Then I ensure added product popup is displayed
        And I ensure continue shopping and checkout button is displayed
        When I click checkout button
        Then I ensure moved to shopping cart page
        Then I ensure product area in shoppingcart is displayed
        Then I ensure xylos product image, name and description in shoppingcart is displayed
        When I click the View matching bands
        Then I ensure the View matching bands moves to the matching bands section in shoppingcart
        Then I ensure Matching band product details is displayed in Matching band section
        When I click matching band product view details link in shopping cart
        And I ensure matching band product image,name, price, product description in full details popup is displayed in shopping cart
        And I ensure ring size field of matching band product is displayed in shopping cart
        And I ensure free engraving field and max character limit is displayed in shopping cart
        And I ensure free engraving icons are displayed in shopping cart
        And I ensure Add to cart button is displayed in shopping cart


    #9 (matching band)
    @smoketest1
    Scenario: Checking ring size and special message can be selected in matching band section in shoppingcart page
        Given I browse ring product details page
        Then I ensure ring size area is displayed
        And I ensure free resizing text is displayed
        When I click select dropdown
        And I ensure ring-size guide are displayed
        When I click choose ring size dropdown field
        And I select 8us size
        And I select Add to cart button
        Then I ensure added product popup is displayed
        And I ensure continue shopping and checkout button is displayed
        When I click checkout button
        Then I ensure moved to shopping cart page
        Then I ensure product area in shoppingcart is displayed
        Then I ensure xylos product image, name and description in shoppingcart is displayed
        When I click the View matching bands
        Then I ensure the View matching bands moves to the matching bands section in shoppingcart
        Then I ensure Matching band product details is displayed in Matching band section
        When I click matching band product view details link in shopping cart
        And I ensure matching band product image,name, price, product description in full details popup is displayed in shopping cart
        And I ensure ring size field of matching band product is displayed in shopping cart
        When I select ring size and select 8UK option of matching band popup
        When I enter special message in special message field

    #9 (matching band)
    @smoketest
    Scenario: Checking matching product added in shoppingcart page matching band section in shoppingcart page
        Given I browse ring product details page
        Then I ensure ring size area is displayed
        And I ensure free resizing text is displayed
        When I click select dropdown
        And I ensure ring-size guide are displayed
        When I click choose ring size dropdown field
        And I select 8us size
        And I select Add to cart button
        Then I ensure added product popup is displayed
        And I ensure continue shopping and checkout button is displayed
        When I click checkout button
        Then I ensure moved to shopping cart page
        Then I ensure product area in shoppingcart is displayed
        Then I ensure xylos product image, name and description in shoppingcart is displayed
        When I click the View matching bands
        Then I ensure the View matching bands moves to the matching bands section in shoppingcart
        Then I ensure Matching band product details is displayed in Matching band section
        When I click matching band product view details link in shopping cart
        And I ensure matching band product image,name, price, product description in full details popup is displayed in shopping cart
        And I ensure ring size field of matching band product is displayed in shopping cart
        When I select ring size and select 8UK option of matching band popup
        #When I enter special message in special message field
        When I select add to cart button
        When I move to matchingband link
        Then I ensure matching product added in shopping cart page
        Then I ensure add protection text is displayed in setting
        Then I ensure 3,5,lifetime buttons are displayed in setting



    #10(Earring)
    @smoketest
    Scenario: Checking jolie product details are displayed in shoppingcart page
        Given I browse earring product details page
        Then I ensure add to cart and request custom order buttons are displayed
        And I ensure delivery details are displayed
        And I select Add to cart button
        Then I ensure added product popup is displayed
        And I ensure continue shopping and checkout button is displayed
        When I click checkout button
        Then I ensure moved to shopping cart page
        Then I ensure product area in shoppingcart is displayed
        Then I ensure jolie product image, name and description in shoppingcart is displayed
        Then I ensure selected jolie earringback text and back is displayed
        Then I ensure selected jolie centre stone text and centre stone is displayed
        Then I ensure jolie product price is displayed
        Then I ensure 100 days return text is displayed
        Then I ensure 365 warranty text is displayed
        Then I ensure add protection text is displayed
        Then I ensure 3,5,lifetime buttons are displayed


    #11(Bracelet)
    @smoketest
    Scenario: Checking Zainab product details are displayed in shoppingcart page
        Given I browse bracelet product details page
        When I click bracelet length dropdown
        When I click box bracelet length dropdown
        And I select 6mm bracelet length
        Then I ensure add to cart and request custom order buttons are displayed
        And I ensure delivery details are displayed
        And I select Add to cart button
        Then I ensure added product popup is displayed
        And I ensure continue shopping and checkout button is displayed
        When I click checkout button
        Then I ensure moved to shopping cart page
        Then I ensure product area in shoppingcart is displayed
        Then I ensure zainab product image, name and description in shoppingcart is displayed
        Then I ensure selected zainab bracelet length text and length is displayed
        Then I ensure zainab product price is displayed
        Then I ensure 100 days return text is displayed
        Then I ensure 365 warranty text is displayed
        Then I ensure add protection text is displayed
        Then I ensure 3,5,lifetime buttons are displayed


    #12(Necklace)

    #13(Couple band)
    @smoketest
    Scenario: Checking Season product details are displayed in shoppingcart page
        Given I browse couple band product details page
        And I ensure select his ringsize dropdown is displayed
        When I click select his ringsize dropdown
        When I click choose mens ring size dropdown field
        And I select 11 UK size in him size
        And I ensure band width dropdown are displayed
        When I click band width dropdown
        And I select 7mm band width
        When I click select dropdown
        Then I ensure ring-size choose options dropdown is displayed
        And I ensure ring-size guide are displayed
        And I click choose ring size dropdown field
        And I select 11 UK size
        And I select Add to cart button
        Then I ensure added product popup is displayed
        And I ensure continue shopping and checkout button is displayed
        When I click checkout button
        Then I ensure moved to shopping cart page
        Then I ensure season product image, name and description in shoppingcart is displayed
        Then I ensure selected season his and her ringsize text and ringsize is displayed
        Then I ensure selected season his bandwidth text and bandwidth is displayed
        #Then I ensure selected season his and her engraving text and engraving is displayed
        Then I ensure season product price is displayed
        Then I ensure 100 days return text is displayed
        Then I ensure 365 warranty text is displayed


    #14(Setting)(changes)
    @smoketest1
    Scenario: Checking setting product in shopping cart page
        Given I browse Start with a Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Diamond button
        And I click Select Ring button
        And I select a product in page 2
        And I select ring size
        And I select setting add to cart button
        ## Then I ensure added product popup is displayed
        ## And I ensure ring productimage, product name,price,description and ring size is displayed
        ## And I ensure checkout button is displayed
        ## When I click checkout button
        Then I ensure shoppingcart page is redirected
        Then I ensure product area in shoppingcart is displayed
        Then I ensure nilah product image,name and description in shoppingcart is displayed
        Then I ensure nilah product price is displayed
        Then I ensure selected nilah ringsize text and ringsize is displayed
        Then I ensure custom diamond summary - carat, cut, clarity,color text is displayed
        Then I ensure nilah diamond links and diamond details is displayed
    #Then I ensure show discount details link is displayed
    #When I click show discount details link
    #Then I ensure show discount popup is displayed

    #15(Womens band)
    @smoketest
    Scenario: Checking Womens band product in shopping cart page 
        Given I browse Start with a Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Diamond button
        And I click Select Ring button
        And I select a product in page 2
        And I select Women's Band option under Ways to Save More
        And I select ring size
        And I click Select Women's Band button
        And I select a product in page 2
        And I select setting add to cart button
        ## Then I ensure added product popup is displayed
        ## And I ensure checkout button is displayed
        ## When I click checkout button
        Then I ensure jazmin product image, name and description in shoppingcart is displayed
        Then I ensure jazmin product price is displayed
        Then I ensure selected jazmin ring size text and ringsize is displayed
        Then I ensure 100 days return text is displayed
        Then I ensure show details link is displayed
        When I click show discount details link
        Then I ensure show discount popup is displayed
        #Then I ensure Add mensband link is displayed
        When I click Add mensband link
        Then I ensure mensband  page is redirected
   

    #16(Mens Band)
    @smoketest
    Scenario: Checking mens band product in shopping cart page
        Given I browse Start with a Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Diamond button
        And I click Select Ring button
        And I select a product in page 2
        When I select Men's Band option under Ways to Save More
        And I select ring size
        And I click Select Men's Band button
        And I select a product in page 2
        When I click select him ringsize dropdown
        And I select 11 UK size
        And I select setting add to cart button
        ## Then I ensure added product popup is displayed
        ## When I click checkout button
        Then I ensure colt product image, name and description in shoppingcart is displayed
        Then I ensure colt product price is displayed
        Then I ensure selected colt ring size text and ringsize is displayed
        Then I ensure 100 days return text is displayed
        Then I ensure 100 days return text is displayed
        Then I ensure add protection text is displayed
        Then I ensure 3,5,lifetime buttons are displayed
        Then I ensure show discount details link is displayed
        When I click show discount details link
        Then I ensure show discount popup is displayed
    
    #16(1)
    @smoketest1
    Scenario: Checking the loose diamonds checkout in cart page
        Given I browse Start with a Diamond page of Rings menu
        When I select Loose Diamonds in the breadcrumb
        And I select Quick view dropdown
        And I select View Diamond button
        And I select Add to Cart button in the Diamond Details Page
        Then I ensure the order summary popup is displayed
        Then I click checkout button
        And I ensure Custom diamond summary is displayed
        And I ensure price of the diamond is display
        And I ensure Shape of the diamond is display
        Then I click on view diamond details
        And I ensure popUp of the your diamond details page is display
        And I ensure Shape of the diamond is display
        Then I ensure price of the diamond popUp is display

    #17(Ring-Delivery Options-Free shipping-default)
    @validations
    Scenario: Checking Free shipping delievery option is selected default
        Given I browse ring product details page
        Then I ensure centre stone area is displayed
        And I ensure accent stones area is displayed
        Then I ensure ring size area is displayed
        And I ensure free resizing text is displayed
        And I ensure select dropdown is displayed
        When I click select dropdown
        And I ensure ring-size guide are displayed
        When I click choose ring size dropdown field
        And I select 8us size
        And I select Add to cart button
        Then I ensure added product popup is displayed
        And I ensure continue shopping and checkout button is displayed
        When I click checkout button
        Then I ensure moved to shopping cart page
        Then I ensure product area in shoppingcart is displayed
        Then I ensure xylos product image, name and description in shoppingcart is displayed
        #Then I ensure choose delivery options text is displayed
        Then I ensure free shipping text and date is displayed
        Then I ensure free shipping radiobutton is selected default


    #18(Ring-Delivery Options-Express Delivery-default)
    @validations
    Scenario: Checking Express delievery option is not selected default
        Given I browse ring product details page
        Then I ensure centre stone area is displayed
        And I ensure accent stones area is displayed
        Then I ensure ring size area is displayed
        And I ensure free resizing text is displayed
        And I ensure select dropdown is displayed
        When I click select dropdown
        And I ensure ring-size guide are displayed
        When I click choose ring size dropdown field
        And I select 8us size
        And I select Add to cart button
        Then I ensure added product popup is displayed
        And I ensure continue shopping and checkout button is displayed
        When I click checkout button
        Then I ensure moved to shopping cart page
        Then I ensure product area in shoppingcart is displayed
        Then I ensure xylos product image, name and description in shoppingcart is displayed
        #Then I ensure choose delivery options text is displayed
        Then I ensure express delivery text and date is displayed
        Then I ensure express delivery radiobutton is not selected default
        Then I ensure Shipping price text is displayed in total area
        Then I ensure Shipping price value is displayed in total area


    #19(Ring-Delivery Options-Express Delivery)
    @smoketest1
    Scenario: Checking Express delievery option is selected and check express order area
        Given I browse ring product details page
        Then I ensure centre stone area is displayed
        And I ensure accent stones area is displayed
        Then I ensure ring size area is displayed
        And I ensure free resizing text is displayed
        And I ensure select dropdown is displayed
        When I click select dropdown
        And I ensure ring-size guide are displayed
        When I click choose ring size dropdown field
        And I select 8us size
        And I select Add to cart button
        Then I ensure added product popup is displayed
        And I ensure continue shopping and checkout button is displayed
        When I click checkout button
        Then I ensure moved to shopping cart page
        Then I ensure product area in shoppingcart is displayed
        Then I ensure xylos product image, name and description in shoppingcart is displayed
        Then I ensure product price is displayed
        #Then I ensure choose delivery options text is displayed
        Then I ensure express delivery text and date is displayed
        Then I ensure express delivery radiobutton is not selected default
        When I click express delivery radiobutton
        Then I ensure express delivery area in shoppingcart is displayed
        Then I ensure Shipping price text is displayed in total area
        Then I ensure FEDEX Shipping price value is displayed in total area

    #20(Ring-Delivery Options-Express Delivery)
    @smoketest
    Scenario: Checking Free delivery automatically selected after removing express order
        Given I browse ring product details page
        Then I ensure centre stone area is displayed
        And I ensure accent stones area is displayed
        Then I ensure ring size area is displayed
        And I ensure free resizing text is displayed
        And I ensure select dropdown is displayed
        When I click select dropdown
        And I ensure ring-size guide are displayed
        When I click choose ring size dropdown field
        And I select 8us size
        And I select Add to cart button
        Then I ensure added product popup is displayed
        And I ensure continue shopping and checkout button is displayed
        When I click checkout button
        Then I ensure moved to shopping cart page
        Then I ensure product area in shoppingcart is displayed
        Then I ensure xylos product image, name and description in shoppingcart is displayed
        Then I ensure product price is displayed
        Then I ensure express delivery text and date is displayed
        Then I ensure express delivery radiobutton is not selected default
        When I click express delivery radiobutton
        Then I ensure express delivery area in shoppingcart is displayed
        When I click remove button of express delivery
        Then I ensure express delivery area is not displayed
        Then I ensure Shipping price text is displayed in total area
        Then I ensure Shipping price value is displayed in total area

    #21(Custom Setting-Delivery Options)
    @validations
    Scenario: Checking Easy delivery option is available in delivery options and not selected
        Given I browse Start with a Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Diamond button
        And I click Select Ring button
        And I select a product in page 2
        And I select ring size
        And I select setting add to cart button
        ## Then I ensure added product popup is displayed
        ## And I ensure ring productimage, product name,price,description and ring size is displayed
        ## And I ensure checkout button is displayed
        ## When I click checkout button
        Then I ensure shoppingcart page is redirected
        Then I ensure product area in shoppingcart is displayed
        Then I ensure nilah product image,name and description in shoppingcart is displayed
        Then I ensure nilah product price is displayed
        Then I ensure free shipping text and date is displayed
        Then I ensure express delivery text and date is displayed
        Then I ensure easy delivery text and date is displayed
        Then I ensure easy delivery radiobutton is not selected default
        Then I ensure extra information text is displayed




    #22(Custom Setting-Delivery Options)
    @smoketest
    Scenario: Checking easy delivery option is selected in seting product
        Given I browse Start with a Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Diamond button
        And I click Select Ring button
        And I select a product in page 2
        And I select ring size
        And I select setting add to cart button
        ## Then I ensure added product popup is displayed
        ## And I ensure ring productimage, product name,price,description and ring size is displayed
        ## And I ensure checkout button is displayed
        ## When I click checkout button
        Then I ensure shoppingcart page is redirected
        Then I ensure product area in shoppingcart is displayed
        Then I ensure nilah product image,name and description in shoppingcart is displayed
        Then I ensure nilah product price is displayed
        Then I ensure easy delivery text and date is displayed
        Then I ensure easy delivery radiobutton is not selected default
        When I click easy delivery radiobutton
        Then I ensure setting product price is reduced
        Then I ensure show details link is displayed
        When I click show discount details link
        Then I ensure show discount popup is displayed

    #23(Ring Product pricing area-Free shipping)
    @smoketest
    Scenario: Ring product pricing area subtotal,free shipping, total
        Given I browse ring product details page
        Then I ensure centre stone area is displayed
        And I ensure accent stones area is displayed
        Then I ensure ring size area is displayed
        And I ensure free resizing text is displayed
        And I ensure select dropdown is displayed
        When I click select dropdown
        And I ensure ring-size guide are displayed
        When I click choose ring size dropdown field
        And I select 8us size
        And I select Add to cart button
        Then I ensure added product popup is displayed
        And I ensure continue shopping and checkout button is displayed
        When I click checkout button
        Then I ensure moved to shopping cart page
        Then I ensure product area in shoppingcart is displayed
        Then I ensure xylos product image, name and description in shoppingcart is displayed
        Then I ensure subtotal text and ring price is displayed
        Then I ensure shipping text and ring free shipping price is displayed
        Then I ensure total text and ring total price is displayed
        Then I ensure proceed to payment button below total price


    #24(Ring Product pricing area-Express shipping)
    @smoketest
    Scenario: Ring product pricing area subtotal,express shipping, total
        Given I browse ring product details page
        Then I ensure centre stone area is displayed
        And I ensure accent stones area is displayed
        Then I ensure ring size area is displayed
        And I ensure free resizing text is displayed
        And I ensure select dropdown is displayed
        When I click select dropdown
        And I ensure ring-size guide are displayed
        When I click choose ring size dropdown field
        And I select 8us size
        And I select Add to cart button
        Then I ensure added product popup is displayed
        And I ensure continue shopping and checkout button is displayed
        When I click checkout button
        Then I ensure moved to shopping cart page
        Then I ensure product area in shoppingcart is displayed
        Then I ensure xylos product image, name and description in shoppingcart is displayed
        When I click express delivery radiobutton
        Then I ensure subtotal text and ring price is displayed
        Then I ensure shipping text and ring fedex shipping price is displayed
        Then I ensure total text and ring total price is displayed


    #25(Setting Product pricing area-Easy shipping)
    @smoketest1
    Scenario: setting product pricing area subtotal,free shipping, total
        Given I browse Start with a Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Diamond button
        And I click Select Ring button
        And I select a product in page 2
        And I select ring size
        And I select setting add to cart button
        ## Then I ensure added product popup is displayed
        ## And I ensure ring productimage, product name,price,description and ring size is displayed
        ## And I ensure checkout button is displayed
        ## When I click checkout button
        Then I ensure shoppingcart page is redirected
        Then I ensure product area in shoppingcart is displayed
        Then I ensure nilah product image,name and description in shoppingcart is displayed
        Then I ensure nilah product price is displayed
        Then I ensure easy delivery text and date is displayed
        Then I ensure easy delivery radiobutton is not selected default
        When I click easy delivery radiobutton
        Then I ensure subtotal text and ring price is displayed
        Then I ensure shipping text and ring free shipping price is displayed
        Then I ensure total text and ring total price is displayed


    #26
    @smoketest
    Scenario: Checking protection plan text and protection plan price displayed when select additonal warranty
        Given I browse ring product details page
        Then I ensure centre stone area is displayed
        And I ensure accent stones area is displayed
        Then I ensure ring size area is displayed
        And I ensure free resizing text is displayed
        And I ensure select dropdown is displayed
        When I click select dropdown
        And I ensure ring-size guide are displayed
        When I click choose ring size dropdown field
        And I select 8us size
        And I select Add to cart button
        Then I ensure added product popup is displayed
        And I ensure continue shopping and checkout button is displayed
        When I click checkout button
        Then I ensure moved to shopping cart page
        Then I ensure product area in shoppingcart is displayed
        Then I ensure xylos product image, name and description in shoppingcart is displayed
        Then I ensure add protection text is displayed
        Then I ensure 3,5,lifetime buttons are displayed
        When I click 5 year button
        Then I ensure protection plan text and price is displayed in calculation area


    #27
    @smoketest
    Scenario: Checking additional instruction field is dispayed
        Given I browse ring product details page
        Then I ensure centre stone area is displayed
        And I ensure accent stones area is displayed
        Then I ensure ring size area is displayed
        And I ensure free resizing text is displayed
        And I ensure select dropdown is displayed
        When I click select dropdown
        And I ensure ring-size guide are displayed
        When I click choose ring size dropdown field
        And I select 8us size
        And I select Add to cart button
        Then I ensure added product popup is displayed
        And I ensure continue shopping and checkout button is displayed
        When I click checkout button
        Then I ensure moved to shopping cart page
        Then I ensure product area in shoppingcart is displayed
        Then I ensure xylos product image, name and description in shoppingcart is displayed
        Then I ensure additional instruction for us text is displayed
        When I enter text in additional instruction field
        Then I ensure text is added in additional instruction is displayed

    #28(Need Assistance)
    @functional
    Scenario: Checking emailus page is redirected clicking emailus link
        Given I browse ring product details page
        Then I ensure centre stone area is displayed
        And I ensure accent stones area is displayed
        Then I ensure ring size area is displayed
        And I ensure free resizing text is displayed
        And I ensure select dropdown is displayed
        When I click select dropdown
        And I ensure ring-size guide are displayed
        When I click choose ring size dropdown field
        And I select 8us size
        And I select Add to cart button
        Then I ensure added product popup is displayed
        And I ensure continue shopping and checkout button is displayed
        When I click checkout button
        Then I ensure moved to shopping cart page
        Then I ensure product area in shoppingcart is displayed
        When I move to matchingband link
        Then I ensure need assistance text is displayed
        Then I ensure emailus link is displayed
        When I click emailus link
        Then I ensure emailus page is redirected

    #29(Need Assistance)
    @functional
    Scenario: Checking resquest call back page is redirected clicking request call back link
        Given I browse ring product details page
        Then I ensure centre stone area is displayed
        And I ensure accent stones area is displayed
        Then I ensure ring size area is displayed
        And I ensure free resizing text is displayed
        And I ensure select dropdown is displayed
        When I click select dropdown
        And I ensure ring-size guide are displayed
        When I click choose ring size dropdown field
        And I select 8us size
        And I select Add to cart button
        Then I ensure added product popup is displayed
        And I ensure continue shopping and checkout button is displayed
        When I click checkout button
        Then I ensure moved to shopping cart page
        Then I ensure product area in shoppingcart is displayed
        When I move to matchingband link
        Then I ensure need assistance text is displayed
        Then I ensure request call back link is displayed
        When I click request call back link
        Then I ensure request call back is redirected

    #30(Accept payment-paypal)
    @functional
    Scenario: Checking paypal popup is displayed when clicking paypal image
        Given I browse shopping cart page
        Then I ensure payment options area is displayed
        Then I ensure paypal image is displayed
        #When I click paypal image
        #Then I ensure paypal popup is displayed
        #When I click cross button in popup
        #Then I ensure popup is closed

    #31(Accept payment-paypalcredit)
    @functional
    Scenario: Checking paypalcredit popup is displayed when clicking paypalcredit image
        Given I browse shopping cart page
        Then I ensure payment options area is displayed
        Then I ensure paypalcredit image is displayed
        When I click paypalcredit image
        Then I ensure paypalcredit popup is displayed
        When I click cross button in popup
        Then I ensure popup is closed

    #32(Accept payment-affirm)
    @functional
    Scenario: Checking affirm popup is displayed when clicking affirm image
        Given I browse shopping cart page
        Then I ensure payment options area is displayed
        Then I ensure affirm image is displayed
        When I click affirm image
        Then I ensure affirm popup is displayed
        When I click cross button in popup
        Then I ensure popup is closed

    #33(Accept payment-affirm)
    @functional
    Scenario: Checking affirm page is redirected clicking affirm image
        Given I browse shopping cart page
        Then I ensure payment options area is displayed
        Then I ensure affirm image is displayed
        When I click affirm image
        Then I ensure affirm popup is displayed
        When I click jewelery financing page link is displayed
        Then I ensure affirm page is redirected

    #34(Accept payment-diamondere payment)
    @functional
    Scenario: Checking calender popup should be displayed when clicking calender icon
        Given I browse shopping cart page
        Then I ensure payment options area is displayed
        Then I ensure calender image is displayed
        When I click calender image
        Then I ensure calender popup is displayed
        When I click cross button in popup
        Then I ensure popup is closed


    #35(Accreditation-Accreditation busniess)
    @functional
    Scenario: Checking Accreditation busniess page is redirected clicking accreditation image
        Given I browse shopping cart page
        Then I ensure accreditation area is displayed
        Then I ensure accreditation busniess image is displayed
        When I click accreditation busniess image
        Then I ensure accreditation busniess is redirected

    #36(Accreditation-Norton)
    @functional
    Scenario: Checking norton page is redirected clicking norton image
        Given I browse shopping cart page
        Then I ensure accreditation area is displayed
        Then I ensure norton image is displayed
        When I click norton image
        Then I ensure norton is redirected

    #37(No products text)
    @validations
    Scenario: Checking no product text is displayed when directly hitting shoppingcart
        Given I browse shopping cart page
        Then I ensure no product text is displayed

    #38
    @smoketest
    Scenario: Validating the View Matching Bands link for Claudine and Agacia band combination
        Given I browse page 3 of Claudine
        When I select ring size
        And I click add to cart button
        When I click checkout button
        When I click the View matching bands
        And I click the View Details link of Agacia
        Then I ensure matching band product full details popup is displayed
        And I ensure matching band product image,name, price, product description in full details popup is displayed
        And I ensure matching band product ring size is displayed
        Then I verify the Precious stone selection options and Quality selection options in the popup
        When I select Ruby under Precious stone 
        And I select Quality as Heirloom
        And I select Add to cart button in the popup
        Then I ensure Agacia is added to cart

    # #39(Both bands)(negative)
    @smoketest1
    Scenario: Checking error popup will display when selecting both bands
        Given I browse Start with a Diamond page of Rings menu
        When I select Quick view dropdown
        And I select View Diamond button
        And I click Select Ring button
        And I select a product in page 2
        And I select Both Bands option under Ways to Save More
        And I select ring size
        And I click Select Women's Band button
        And I select a product in page 2
        And I click Select Men's Band button
        And I select a product in page 2
        And I click cart icon
        And I click Proceed to payment
        Then I ensure error message will popup
