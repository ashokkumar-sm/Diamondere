Feature: Testing Page 3 features of Diamondere - 1

    Background: Browsing staging environment
         Given I browse Diamondere website
    
    #1
    @smoketest
    Scenario: Checking Homepage is opened when clicking Home Breadcrumb part of the Diamondere page-3
        Given I browse ring product details page
        Then I ensure breadcrumb for the product is present
        When I click Home in breadcrumb
        Then I ensure clicking home in breadcrumb redirects to home page
    #2
    @smoketest
    Scenario: Checking Category is opened when clicking category Breadcrumb part of the Diamondere page-3
        Given I browse ring product details page
        Then I ensure breadcrumb for the product is present
        When I click category in breadcrumb
        Then I ensure clicking category in breadcrumb redirects to category page
    #3
    @smoketest
    Scenario: Checking Gemstone is opened when clicking gemstone Breadcrumb part of the Diamondere page-3
        Given I browse ring product details page
        Then I ensure breadcrumb for the product is present
        When I click gemstone in breadcrumb
        Then I ensure clicking gemstone in breadcrumb redirects to gemstone page
    #4
    @validations
    Scenario: Checking product name, details of the product
        Given I browse ring product details page
        Then I ensure product name, rating, price are displayed
        And I ensure product details and total weight are displayed
    #5
    @validations
    Scenario: Checking image of the product are displayed
        Given I browse ring product details page
        Then I ensure main image, sub image are displayed
        And I ensure video is displayed if video is available
        When I click video
        Then I ensure basic product video pop is displayed
        When I click cross button
        Then I ensure video pop is closed
    #6
    @smoketest1
    Scenario: Checking Email page is displayed
        Given I browse ring product details page
        Then I ensure Email image is displayed
        When I click Email image
        Then I ensure page redirects to email
    #7
    @smoketest
    Scenario: Checking Pinterest page is displayed
        Given I browse ring product details page
        Then I ensure pinterest image is displayed
        When I click pinterest image
        Then I ensure page redirects to pintrest
    #7(1)
    @smoketest
    Scenario: Checking Facebook page is displayed
        Given I browse ring product details page
        Then I ensure facebook image is displayed
        When I click facebook image
        Then I ensure page redirects to facebook

    #8
    @validations
    Scenario: Checking add to cart and request custom order showing for the product
        Given I browse ring product details page
        Then I ensure add to cart and request custom order buttons are displayed
        And I ensure delivery details are displayed
   
    #10
    @smoketest
    Scenario: Checking centre stone area is displayed for possible products-
        Given I browse ring product details page
        Then I ensure centre stone area is displayed
        And I ensure centre stone name is displayed
        And I ensure centre stone details are displayed
        And I ensure change centre stone dropdown is displayed
        When I click change centre stone dropdown
        Then I ensure different centre stones are displayed
        And I ensure selected centre stone properties are displayed
        And I ensure quality of the stone area is displayed
        And I ensure size of the stone area is displayed
        And I ensure selected carat size of the stone text is displayed
        Then I ensure centre stone video is displayed
        When I click selected centre stone video
        Then I ensure selected centre stone video popup is displayed
        When I click cross button
        Then I ensure video pop is closed
    #11
    @smoketest1
    Scenario: Checking accent stones area is displayed for possible products
        Given I browse ring product details page
        Then I ensure accent stones area is displayed
        And I ensure accent stones name is displayed
        And I ensure accent stones details are displayed
        And I ensure change accent stones dropdown is displayed
        When I click change accent stones dropdown
        Then I ensure different accent stones are displayed
        And I ensure selected accent stones properties are displayed
        And I ensure selected carat size of the accent stones text is displayed
        And I ensure selected accent stones video is displayed
        When I click selected accent stones video
        Then I ensure selected accent stones video popup is displayed
        When I click cross button
        Then I ensure video pop is closed
    #12
    @smoketest
    Scenario: Checking accent stone-1 area is displayed for possible products
        Given I browse dannete ring product details page
        Then I ensure accent stone-1 area is displayed
        And I ensure accent stones-1 name is displayed
        And I ensure accent stone-1 details are displayed
        And I ensure change accent stone-1 dropdown is displayed
        When I click change accent stone-1 dropdown
        Then I ensure different stone-1 are displayed
        And I ensure selected accent stone-1 properties are displayed
        And I ensure quality of the accent stone1 area is displayed
        And I ensure selected carat size of the accent stone-1 text is displayed
        And I ensure selected accent stone-1 video is displayed
        When I click selected accent stone-1 video
        Then I ensure selected accent stone-1 video popup is displayed
        When I click cross button
        Then I ensure video pop is closed
    #13
    @smoketest
    Scenario: Checking accent stone-2 area is displayed for possible products
        Given I browse dannete ring product details page
        Then I ensure accent stone-2 area is displayed
        And I ensure accent stone-2 name is displayed
        And I ensure accent stone-2 details are displayed
        And I ensure change accent stone-2 dropdown is displayed
        When I click change accent stone-2 dropdown
        Then I ensure different accent stone-2 are displayed
        And I ensure selected accent stone-2 properties are displayed
        And I ensure selected carat size of the accent stone-2 text is displayed
        And I ensure selected accent stone-2 video is displayed
        When I click selected accent stone-2 video
        Then I ensure selected accent stone-2 video popup is displayed
        When I click cross button
        Then I ensure video pop is closed
    #12(default metal)
    @validations
    Scenario: Checking metal area is displayed
        Given I browse ring product details page
        Then I ensure metal section is displayed
        And I ensure metal name is displayed
        And I ensure metal details are displayed
        And I ensure change metal dropdown is displayed
        When I click change metal dropdown
        Then I ensure platinum, 18k, 14k, 10k, silver metal type are displayed
        And I ensure selected metal properties are displayed
    #13 (Ring-Size)
    @validations
    Scenario: Checking Ring size area is displayed
        Given I browse ring product details page
        Then I ensure ring size area is displayed
        And I ensure free resizing text is displayed
        And I ensure select dropdown is displayed
        When I click select dropdown
        Then I ensure ring-size choose options dropdown is displayed
        And I ensure ring-size guide are displayed
    #14
    @validations
    Scenario: Checking Free engraving area is displayed
        Given I browse ring product details page
        Then I ensure free engraving area is displayed
        When I click engrave dropdown
        Then I ensure special message field is displayed
        And I ensure maximum text limit displayed
        Then I ensure special icons are displayed

    #15
    @validations
    Scenario: Checking Matching Bands area is displayed
        Given I browse ring product details page
        Then I ensure the View matching bands link is displayed
	    When I click the View matching bands
	    Then I ensure the View matching bands moves to the matching bands section

    #16
    @validations
    Scenario: Checking product details of product is displayed
        Given I browse ring product details page
        When I move to product details
        Then I ensure product name is displayed
        Then I ensure default product details is displayed

    #17
    @validations
    Scenario: Checking default centre stone of product details is displayed
        Given I browse ring product details page
        When I move to product details
        Then I ensure centre stone column is displayed
        Then I ensure default type,quality,size,weight in centre stone is displayed
    #18
    @validations
    Scenario: Checking default accent stones of product details is displayed
        Given I browse ring product details page
        When I move to product details
        Then I ensure accent stones column is displayed
        Then I ensure default type, quality, weight in accent stones is displayed
    #18(1)
    @validations
    Scenario: Checking default accent stone 1 of product details is displayed
        Given I browse dannete ring product details page
        When I move to product details
        Then I ensure accent stone 1 column is displayed
        Then I ensure default type, quality, weight in accent stone 1 is displayed   
    #19
    @validations
    Scenario: Checking default accent stone 2 of product details is displayed
        Given I browse dannete ring product details page
        When I move to product details
        Then I ensure accent stone 2 column is displayed
        Then I ensure default type, quality, weight in accent stone 2 is displayed
    #20(dannete ring setting)
    @validations
    Scenario: Checking default setting of product details is displayed
        Given I browse dannete ring product details page
        When I move to product details
        Then I ensure setting column is displayed
        Then I ensure default metal, ring thickness in setting is displayed
    #20(xyols ring setting)
    @validations
    Scenario: Checking default setting of xylos product details is displayed
        Given I browse ring product details page
        When I move to product details
        Then I ensure setting column is displayed
        Then I ensure default metal in setting is displayed and ring thickness is not displayed
    #21
    @validations
    Scenario: Checking default ring size of product details is displayed
        Given I browse ring product details page
        When I move to product details
        Then I ensure ring size column is displayed
        And I ensure not selected text in ring size column is displayed
    #22
    @validations
    Scenario: Checking default free engraving of product details is displayed
        Given I browse ring product details page
        When I move to product details
        Then I ensure free engraving column is displayed
        And I ensure special message text in default free engraving column is displayed
    #23  
    @smoketest
    Scenario: Checking changed centre stone of product details is displayed
        Given I browse ring product details page
        When I move to product details
        Then I ensure centre stone column is displayed
        And I ensure default type,quality,size,weight in centre stone is displayed
        When I move to centre stone
        When I click change centre stone dropdown
        And I select emerald diamond, heirloom quality and 0.75 size of the diamond
        And I move to product details
        Then I ensure changed type,quality,size,weight in centre stone product display is displayed
    #24 
    @smoketest1
    Scenario: Checking changed accent stones of product details is displayed
        Given I browse ring product details page
        When I move to product details
        Then I ensure centrestone accent stones column is displayed
        And I ensure default type, quality, weight in accent stones is displayed
        When I move to centre stone
        #When I move to accent stones in product area
        When I click change accent stones dropdown
        And I select emerald dimaond, heirloom quality in accent stones of product
        And I move to product details
        Then I ensure changed type,quality,weight in accent stones column is displayed
    #25(1)
    @smoketest
    Scenario: Checking changed accent stone 1 of product details is displayed
        Given I browse dannete ring product details page
        When I move to product details
        Then I ensure accent stone 1 column is displayed
        And I ensure default type, quality, weight in accent stone 1 is displayed
        When I move to Diamonderelogo
        #When I move to accent stone 1
        When I click change accent stone 1 dropdown
        And I select emerald stone and heirloom quality in accent stone 1 of product
        And I move to product details
        Then I ensure changed type,quality,weight in accent stone 1 column is displayed
    #25
    @smoketest
    Scenario: Checking changed accent stone 2 of product details is displayed
        Given I browse dannete ring product details page
        When I move to product details
        Then I ensure accent stone 2 column is displayed
        And I ensure default type, quality, weight in accent stone 2 is displayed
        When I move to Diamonderelogo
        #When I move to accent stone 2
        When I click change accent stone-2 dropdown
        And I select white sapphire stone in accent stone 2 of product
        And I move to product details
        Then I ensure changed type,quality,weight in accent stone 2 column is displayed
    #26
    @smoketest
    Scenario: Checking changed metal of product details is displayed
        Given I browse ring product details page
        When I move to product details
        Then I ensure setting column is displayed
        And I ensure default metal in setting is displayed and ring thickness is not displayed
        When I move to centre stone
        #When I move to metal section
        When I click change metal dropdown
        And I select 18k white gold in metaltype of product
        And I move to product details
        Then I ensure changed metal name in metal column is displayed
    #27 (ring size)
    @smoketest1
    Scenario: Checking ring size of product details is displayed
        Given I browse ring product details page
        Then I ensure ring size area is displayed
        #When I move to ring size
        When I click select dropdown
        And I select for ring size dropdown
        Then I ensure ring-size choose options dropdown is displayed
        When I click choose ring size dropdown field
        And I select 7UK size dropdown
        And I move to product details
        Then I ensure ring size column is displayed
        And I ensure changed ring size in ring size column is displayed
    #28 (Common Engraving)
    @smoketest
    Scenario: Checking free engraving of product details is displayed
        Given I browse ring product details page
        #When I move to free engraving
        When I move to product details
        Then I ensure free engrave column is displayed
        When I move to accent stones in product area
        When I click engrave dropdown
        And I enter text in engrave field
        When I move to product details
        And I ensure changed free engrave text in free engrave column is displayed
    #29 (His-Ring-Size)
    @validations
    Scenario: Checking His Ring size area is displayed
        Given I browse couple band product details page
        Then I ensure his ring size and band width text is displayed
        And I ensure free resizing text is displayed
        And I ensure select his ringsize dropdown is displayed
        When I click select his ringsize dropdown
        And I ensure ring-size guide are displayed
        Then I ensure his ring size dropdown
        And I ensure band width text is displayed
        And I ensure band width dropdown are displayed
        And I ensure 6mm default is selected in bandwidth
    #30 (His-Ring-Size)
    @smoketest
    Scenario: Checking additional price text is displayed when changing his bandwith
        Given I browse couple band product details page
        When I move to Diamonderelogo
        Then I ensure his ring size and band width text is displayed
        And I ensure free resizing text is displayed
        #And ensure select his ringsize dropdown is displayed
        When I click select his ringsize dropdown
        Then I ensure band width text is displayed
        And I ensure band width dropdown are displayed
        When I click band width dropdown
        And I select 7mm band width
        Then I ensure price change text for changing bandwidth is displayed
    #31 (His-Ring-Size)
    @smoketest
    Scenario: Checking additional price text is displayed when changing his ringsize and bandwith
        Given I browse couple band product details page
        When I move to Diamonderelogo
        Then I ensure his ring size and band width text is displayed
        And I ensure free resizing text is displayed
        And I ensure select his ringsize dropdown is displayed
        When I click select his ringsize dropdown
        When I click choose mens ring size dropdown field
        And I select 11 UK size in him size
        And I ensure band width dropdown are displayed
        When I click band width dropdown
        And I select 7mm band width
        Then I ensure price change text for changing ringsize and bandwidth is displayed
     #32 (Her-Ring-Size)
     @smoketest
    Scenario: Checking additional price text is displayed when changing her ringsize
        Given I browse couple band product details page
        Then I ensure her ring size text is displayed
        And I ensure free resizing text is displayed
        When I click select dropdown
        #Then I ensure ring-size dropdown is displayed
        Then I ensure ring-size choose options dropdown is displayed
        And I ensure ring-size guide are displayed
        And I click choose ring size dropdown field
        And I select 11 UK size
        Then I ensure price change text for changing her ringsize is displayed
    #33
    @validations
    Scenario: checking default selected metal image is displayed
        Given I browse ring product details page
        Then I ensure default selected metal type image is displayed metal section
    #34
    @smoketest
    Scenario: checking free engraving field accept alphabet, number and special character
        Given I browse ring product details page
        Then I ensure free engraving area is displayed
        When I click engrave dropdown
        Then I ensure special message field is displayed
        When I enter number, alphabet and special character in special message field
        #Then I ensure number, alphabet and special character can be entered
    #35
    @smoketest1
    Scenario: checking error message will displayed when not selecting ring size
        Given I browse ring product details page
        When I click add to cart button
        Then I ensure error message will display for select ring size

    #36
    @validations
    Scenario: Checking that when clicking matching bands links moved to matching band section
        Given I browse ring product details page
        When I click the View matching bands
        Then I ensure it moved to matching band section
    
    #37 
    @validations
    Scenario: Checking the product in matching band section
        Given I browse ring product details page
        When I click the View matching bands
        Then I ensure it moved to matching band section
        Then I ensure matching band product image is displayed
        And I ensure matching band product name and price and view details link is displayed

    #38
    @validations
    Scenario: Checking the full details of the matching bands product in matching band section is displayed
        Given I browse ring product details page
        When I click the View matching bands
        Then I ensure it moved to matching band section
        When I click matching band product view details link 
        Then I ensure matching band product full details popup is displayed

    #39
    @smoketest
    Scenario: Checking the full details of the matching bands product in matching band section
        Given I browse ring product details page
        When I click the View matching bands
        Then I ensure it moved to matching band section
        When I click matching band product view details link 
        Then I ensure matching band product full details popup is displayed
        And I ensure matching band product image,name, price, product description in full details popup is displayed
        And I ensure matching band product ring size is displayed
        When I click ring size of matching band product in full details popup
        Then I ensure sizes are shown for matching band product
        And I ensure free engraving field and max character limit is displayed 
        And I ensure free engraving icons are displayed
        And I ensure Add ring and band button is displayed

    #40
    @validations
    Scenario: Checking Recently viewed area is displayed    
        Given I browse ring product details page
        When I move to recently viewed area
        Then I ensure recently viewed area is present
        And I ensure products are displayed in recently viewed area
    
    #41
    @validations
    Scenario: Checking Product name and price in Recently viewed area is displayed    
        Given I browse ring product details page
        When I move to recently viewed area
        Then I ensure recently viewed area is present
        And I ensure product name and price is displayed

    #42
    @smoketest
    Scenario: Checking page-3 redirected when selecting product in Recently viewed area is displayed 
        Given I browse dannete ring product details page
        Given I browse ring product details page
        When I move to recently viewed area
        Then I ensure recently viewed area is present
        When I click product from recently viewed area
        Then I ensure clicking product from recently viewed redirects to page-3

    #43
    @validations
    Scenario: Checking Free shipping is displayed  
        Given I browse ring product details page
        When I move to free shipping and global return area
        Then I ensure free global shipping area is displayed
        Then I ensure the delivery date present in the free global shipping is exact as the date mentioned below add to cart
    #44
    @validations
    Scenario: Checking Free return area is displayed  
        Given I browse ring product details page
        When I move to free shipping and global return area
        Then I ensure free 100 days return area is displayed
        When I click return policy link
        Then I ensure link redirects to return policy page
    #45(extend link missing)
    @functional
    Scenario: Checking Warranty area is displayed  
        Given I browse ring product details page
        When I move to free shipping and global return area
        Then I ensure free warranty and protection plan area is displayed
        When I click warranty link
        Then I ensure link redirects to warranty page
    #46
    @smoketest
    Scenario: Checking changed ringsize in product details section is displayed
        Given I browse ring product details page
        When I move to product details
        Then I ensure setting column is displayed
        Then I ensure default metal in setting is displayed
    #51
    @validations
    Scenario: Checking default quality of stone is displayed
        Given I browse ring product details page
        Then I ensure centre stone area is displayed
        When I click change centre stone dropdown
        And I ensure quality of the stone area is displayed
        Then I ensure quality of stone is default selected
    #52
    @validations
    Scenario: Checking default size of stone is displayed
        Given I browse ring product details page
        Then I ensure centre stone area is displayed
        When I click change centre stone dropdown
        And I ensure size of the stone area is displayed
        And I ensure size of stone is default selected

    #53(Bracelet length)
    @validations
    Scenario: Checking Bracelet length area is displayed
        Given I browse bracelet product details page
        Then I ensure Bracelet length area is displayed
        When I click bracelet length dropdown
        Then I ensure bracelet length text and dropdown are displayed
        And I ensure bracelet size guide is displayed
        When I click box bracelet length dropdown 
        Then I ensure bracelet length options are displayed
    #54(Bracelet length)
    @smoketest
    Scenario: Checking price change text will display when changing Bracelet lengths
        Given I browse bracelet product details page
        Then I ensure Bracelet length area is displayed
        When I click bracelet length dropdown
        Then I ensure bracelet length text and dropdown are displayed
        And I ensure bracelet size guide is displayed
        When I click box bracelet length dropdown
        And I select 6mm bracelet length
        Then I ensure price change text is displayed
    #55(Necklace chain)
    @validations
    Scenario: Checking default necklace chain details
        Given I browse necklace product details page
        When I move to Diamonderelogo
        Then I ensure necklace chain area is displayed
        Then I ensure default box chain text is displayed
        When I click customize chain length
        Then I ensure different metals in necklace area is displayed
        And I ensure box button selected and cable button are displayed
        And I ensure 16 inch chain button are displayed
        And I ensure chain price and chain image are displayed

    #56(Necklace chain)
    @smoketest1
    Scenario: Checking changed necklace chain details
        Given I browse necklace product details page
        Then I ensure necklace chain area is displayed
        Then I ensure default box chain text is displayed
        When I click customize chain length
        Then I ensure different metals in necklace area is displayed
        When I select yellow gold metal
        Then I ensure default box chain text is displayed
        And I ensure yellow box button selected and cable button are displayed
        And I ensure 18 and 16 inch chain button are displayed
