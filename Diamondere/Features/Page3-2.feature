Feature: Testing Page 3 features of Diamondere - 2

    Background: Browsing staging environment
         Given I browse Diamondere website 
 
#47(Customdiamond)
    @validations
    Scenario: Checking that when clicking custom diamond in centre stone redirects to custom diamond page 
        Given I browse ring product details page
        When I click change centre stone dropdown
        And I click custom diamond
        Then I ensure custom diamond page is redirected

    #48(Customlabdiamond)
    @validations
    Scenario: Checking that when clicking custom lab diamond in centre stone redirects to custom diamond page 
        Given I browse ring product details page
        When I click change centre stone dropdown
        And I click custom lab diamond
        Then I ensure custom lab diamond page is redirected

    #73(Customdiamond)
    @smoketest
    Scenario: Checking delivery date changed when change to custom diamond in product details page
        Given I browse ring product details page
        When I click change centre stone dropdown
        And I click custom lab diamond 
        Then I ensure custom lab diamond page is redirected
        #Then I ensure delivery date changed for shipping
        And I ensure delivery details are displayed


    #49(Rainbowsapphire)
    @smoketest
    Scenario: Checking accent stone 2 section is disabled for rainbow sapphire
        Given I browse rainbow sapphire product details page
        Then I ensure accent stone-1 area is displayed
        And I ensure rainbow sapphire change stone dropdown is displayed
        Then I ensure accent stone-2 area is displayed
        And I ensure rainbow sapphire change stone dropdown is disabled

    #50(Men'sring breadcrumb)   
    @smoketest 
    Scenario: Checking Men'sCategory is opened when clicking category Breadcrumb part of the Diamondere page-3
        Given I browse Men's ring product details page
        Then I ensure breadcrumb for the product is present
        When I click Men'scategory in breadcrumb
        Then I ensure clicking Men's category in breadcrumb redirects to men's category page

    #57 (Men's ringsize and width)
    @validations
    Scenario: Checking Men's Ring size and Width area is displayed
        Given I browse Men's ring product details page
        And I move to Diamonderelogo
        Then I ensure ring size and width text is displayed
        And I ensure free resizing text is displayed
        And I ensure select dropdown is displayed
        When I click select dropdown
        Then I ensure ring-size text is displayed
        And I ensure ring-size guide are displayed
        And I ensure band width text is displayed
        And I ensure band width dropdown are displayed
        And I ensure 55mm default is selected in bandwidth

    #58(Couple band)
    @validations
    Scenario: Checking Free engraving for her area is displayed
        Given I browse couple band product details page
        And I move to Diamonderelogo
        Then I ensure free engraving for her area is displayed
        When I click engrave dropdown
        Then I ensure special message field is displayed
        And I ensure maximum text limit displayed
        Then I ensure special icons are displayed

    #59(Couple band)
    @validations
    Scenario: Checking Free engraving for him area is displayed
        Given I browse couple band product details page
        Then I ensure free engraving for him area is displayed
        When I click engrave dropdown
        Then I ensure special message field is displayed
        And I ensure maximum text limit displayed
        Then I ensure special icons are displayed

    #60(Earring)
    @validations
    Scenario: Checking Earring Back area is displayed
        Given I browse earring product details page
        Then I ensure earring back area is displayed
        And I ensure earring back text and default back is displayed
        And I ensure customize earring back dropdown is displayed
        When I click customize earring back dropdown
        Then I ensure push back and screw back is displayed

    
    
    #64(updatedprice-ring)
    @smoketest
    Scenario: Checking ring product price is changed when changing ring size is displayed
        Given I browse ring product details page
        Then I ensure centre stone area is displayed
        And I ensure accent stones area is displayed
        Then I ensure ring size area is displayed
        And I ensure free resizing text is displayed
        And I ensure select dropdown is displayed
        When I click select dropdown
        And I ensure ring-size guide are displayed
        Then I ensure ring-size choose options dropdown is displayed
        And I click choose ring size dropdown field
        And I select 11us size
        Then I ensure ring product price is changed

    #65(updatedprice-coupleband-her)
    @smoketest
    Scenario: Checking couple product price is changed when changing her ring size is displayed
        Given I browse couple band product details page
        Then I ensure couple centre stone area is displayed
        Then I ensure her ring size area is displayed
        And I ensure free resizing text is displayed
        And I ensure select dropdown is displayed
        When I click select dropdown
        And I ensure ring-size guide are displayed
        Then I ensure ring-size choose options dropdown is displayed
        When I click choose ring size dropdown field
        And I select 11us size
        Then I ensure coupleband product price is changed

    #66(updatedprice-coupleband-his)
    @smoketest
    Scenario: Checking couple product price is changed when changing his ring size is displayed
        Given I browse couple band product details page
        Then I ensure couple centre stone area is displayed
        Then I ensure his ring size area is displayed
        And I ensure free resizing text is displayed
        And I ensure select dropdown is displayed
        When I click select his ringsize dropdown
        And I ensure ring-size guide are displayed
        Then I ensure his ring-size choose options dropdown is displayed
        When I click choose mens ring size dropdown field
        And I select 11us his size
        Then I ensure coupleband product price is changed

    #67(GIA Certifiacte-Quality)
    @smoketest
    Scenario: GIA Certificate will not display when Natural AAA is selected
        Given I browse ring product details page
        Then I ensure centre stone area is displayed
        When I click change centre stone dropdown
        And I ensure quality of the stone area is displayed
        When I select Natural AAA button in centre stone
        Then I ensure size of stone is default selected
        Then I ensure select Certifiacte for stone area is not displayed
    
    #68(GIA Certifiacte-Default)
    @smoketest
    Scenario: Certificate will display when Natural Heirloom and 1.02 Size is selected
        Given I browse ring product details page
        Then I ensure centre stone area is displayed
        When I click change centre stone dropdown
        And I click heirloom quality and 10 cts size of centre stone
        Then I ensure select Certifiacte for stone are is displayed
        Then I ensure Free DGLA Certifiacte is selected automatically and delivery date is displayed
        And I ensure GIA Certificate is not selected price mentioned and delivery date is displayed
    
    #75(Earring-page)
    @validations
    Scenario: Checking Earring Page is displayed
        Given I browse earring product details page
        Then I ensure couple centre stone area is displayed
        And I ensure Earring centre stone name is displayed
        And I ensure Earring centre stone details are displayed
        #And I ensure Earring change centre stone dropdown is displayed
        When I click change Earring centre stone dropdown
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
        Then I ensure earring back area is displayed
        And I ensure earring back text and default back is displayed
        And I ensure customize earring back dropdown is displayed
        When I click customize earring back dropdown
        Then I ensure push back and screw back is displayed
        Then I ensure add to cart and request custom order buttons are displayed
        And I ensure delivery details are displayed

    #79(Change back price dont change-Earring)
    @smoketest
    Scenario: Checking Price doesnt change when changing earring back in earring Page is displayed
        Given I browse earring product details page
        Then I ensure couple centre stone area is displayed
        And I ensure Earring centre stone name is displayed
        And I ensure Earring centre stone details are displayed
        When I click customize earring back dropdown
        Then I ensure push back and screw back is displayed
        When I click screw back
        Then I ensure push back and screw back price is same 

    #76(metalandgemstoneBangle-page)
    @smoketest
    Scenario: Checking metal and gemstone Bangle Page is displayed
        Given I browse metal and gemstone bangle product details page
        And I move to Diamonderelogo
        Then I ensure accent stones area is displayed
        And I ensure accent stones name is displayed
        And I ensure accent stones details are displayed
        And I ensure change accent stones dropdown is displayed
        When I click change accent stones dropdown
        #Then I ensure different stones are displayed
        And I ensure selected applewatch accent stones properties are displayed
        And I ensure selected applewatch carat size of the accent stones text is displayed
        And I ensure selected accent stone-1 video is displayed
        When I click selected accent stone-1 video
        Then I ensure selected centre stone video popup is displayed
        When I click cross button
        Then I ensure video pop is closed 
        And I ensure metal section is displayed
        And I ensure metal name is displayed
        And I ensure metal details are displayed
        And I ensure change metal dropdown is displayed
        When I click change metal dropdown
        Then I ensure platinum, 18k, 14k, 10k, silver metal type are displayed
        And I ensure selected metal properties are displayed
        Then I ensure add to cart and request custom order buttons are displayed
        And I ensure delivery details are displayed

    #76(metalBangle-page)
    @validations
    Scenario: Checking metal Bangle  Page is displayed
        Given I browse Bangle product details page
        Then I ensure bangle accent stone-1 area is not displayed
        And I ensure metal section is displayed
        And I ensure metal name is displayed
        And I ensure metal details are displayed
        And I ensure change metal dropdown is displayed
        When I click change metal dropdown
        Then I ensure Bangle 18k, 14k type are displayed
        And I ensure selected metal properties are displayed
        Then I ensure add to cart and request custom order buttons are displayed
        And I ensure delivery details are displayed

    #77(metalandgemstoneApplewatchband-page)
    @smoketest
    Scenario: Checking metal and gemstone Applewatch band Page is displayed
        Given I browse applewatchband metal and gemstone product details page
        Then I ensure accent stones area is displayed
        And I ensure accent stones name is displayed
        And I ensure accent stones details are displayed
        And I ensure change accent stones dropdown is displayed
       When I click change accent stones dropdown
        #Then I ensure different accent stones are displayed
        And I ensure selected applewatch accent stones properties are displayed
        And I ensure selected applewatch carat size of the accent stones text is displayed
        And I ensure selected accent stone-1 video is displayed
        When I click selected accent stone-1 video 
        Then I ensure selected centre stone video popup is displayed
        When I click cross button
        Then I ensure video pop is closed
        And I ensure metal section is displayed
        And I ensure metal name is displayed
        And I ensure metal details are displayed
        And I ensure change metal dropdown is displayed
        When I click change metal dropdown
        Then I ensure platinum, 18k, 14k, 10k, silver metal type are displayed
        And I ensure selected metal properties are displayed
        Then I ensure add to cart and request custom order buttons are displayed
        And I ensure delivery details are displayed

     #77(metalApplewatchband-page)
     @validations
      Scenario: Checking metal Applewatch band Page is displayed
        Given I browse applewatchband metal product details page
        And I ensure metal section is displayed
        And I ensure metal name is displayed
        And I ensure metal details are displayed
        And I ensure change metal dropdown is displayed
        When I click change metal dropdown
        Then I ensure Bangle 18k, 14k type are displayed
        And I ensure selected metal properties are displayed
        Then I ensure add to cart and request custom order buttons are displayed
        And I ensure delivery details are displayed


    #78(metalandgemstonecharms-page)
    @smoketest
    Scenario: Checking metal and gemstone charms Page is displayed
        Given I browse metal and gemstone charms product details page
        Then I ensure charms accent stones area is displayed
        #And I ensure charms accent stones name is displayed
        And I ensure charms accent stones details are displayed
        And I ensure change charm accent stones dropdown is displayed
        When I click charms change accent stones dropdown
        #Then I ensure different stones are displayed
        And I ensure selected applewatch accent stones properties are displayed
        #And I ensure selected accent stones properties are displayed
        And I ensure selected applewatch carat size of the accent stones text is displayed
        And I ensure selected accent stone-1 video is displayed
        When I click selected accent stone-1 video 
        Then I ensure selected accent stone-1 video popup is displayed
        When I click cross button
        Then I ensure video pop is closed
        And I ensure metal section is displayed
        And I ensure metal name is displayed
        And I ensure metal details are displayed
        And I ensure change metal dropdown is displayed
        When I click change metal dropdown
        Then I ensure platinum, 18k, 14k, 10k, silver metal type are displayed
        And I ensure selected metal properties are displayed
        Then I ensure add to cart and request custom order buttons are displayed
        And I ensure delivery details are displayed

    #78(metalcharms-page)
    @validations
    Scenario: Checking metal charms Page is displayed
        Given I browse metal charms product details page
        And I ensure metal section is displayed
        And I ensure metal name is displayed
        And I ensure metal details are displayed
        And I ensure change metal dropdown is displayed
        When I click change metal dropdown
        Then I ensure platinum, 18k, 14k, 10k, silver metal type are displayed
        And I ensure selected metal properties are displayed
        Then I ensure add to cart and request custom order buttons are displayed
        And I ensure delivery details are displayed

    #80(Mens-Earring(quality))
    @validations
     Scenario: Checking men's earring Page quality is displayed
        Given I browse metal and gemstone men's earring product details page
        Then I ensure  Men's Earring centre stone area is displayed
        And I ensure Men's Earring centre stone name is displayed
        And I ensure Men's Earring centre stone details are displayed
        And I ensure change Mens Earring centre stone dropdown is displayed
        #And I ensure change centre stone dropdown is displayed
        When I click change Mens Earring centre stone dropdown
        #Then I ensure different stones are displayed
        And I ensure selected centre stone properties are displayed
        And I ensure quality of the stone area is not displayed
        And I ensure size of the stone area is displayed
        And I ensure selected carat size of the stone text is displayed
        Then I ensure centre stone video is displayed
        When I click selected centre stone video
        Then I ensure selected centre stone video popup is displayed
        When I click cross button
        Then I ensure video pop is closed
        And I ensure metal section is displayed
        And I ensure metal name is displayed
        And I ensure metal details are displayed
        And I ensure change metal dropdown is displayed
        When I click change metal dropdown
        Then I ensure platinum, 18k, 14k, 10k, silver metal type are displayed
        #When I move to Diamonderelogo
        And I ensure selected metal properties are displayed
        Then I ensure earring back area is displayed
        And I ensure earring back text and default back is displayed
        And I ensure customize earring back dropdown is displayed
        When I click customize earring back dropdown
        Then I ensure push back and screw back is displayed
        Then I ensure add to cart and request custom order buttons are displayed
        And I ensure delivery details are displayed
    
    #80(Mens-Earring(size))
    @smoketest
     Scenario: Checking men's earring Page size is displayed
        Given I browse metal and gemstone men's earring product details page
        Then I ensure  Men's Earring centre stone area is displayed
        And I ensure Men's Earring centre stone name is displayed
        And I ensure Men's Earring centre stone details are displayed
        And I ensure change Mens Earring centre stone dropdown is displayed
        #And I ensure change centre stone dropdown is displayed
        When I click change Mens Earring centre stone dropdown
        #When I click change centre stone dropdown
        #Then I ensure different stones are displayed
        And I ensure selected centre stone properties are displayed
        And I ensure quality of the stone area is not displayed
        And I ensure size of the stone area is displayed
        And I ensure selected carat size of the stone text is displayed
        Then I ensure select Certifiacte for stone are is displayed
        Then I ensure Free DGLA Certifiacte is selected automatically and delivery date is displayed
        And I ensure GIA Certificate is not selected price mentioned and delivery date is displayed
        Then I ensure add to cart and request custom order buttons are displayed
        And I ensure delivery details are displayed

     #81(Necklace-page)
     @smoketest
     Scenario: Checking necklace Page is displayed
        Given I browse necklace product details page 
        Then I ensure necklace accent stone1 area is displayed
        And I ensure necklace accent stone1 name is displayed
        And I ensure necklace accent stone1 details are displayed
        #And I ensure change accent stones dropdown is displayed
        When I click change necklace accent stone-1 dropdown
        And I ensure selected applewatch accent stones properties are displayed
        And I ensure selected applewatch carat size of the accent stones text is displayed
        And I ensure selected accent stone-1 video is displayed
        When I click selected accent stone-1 video 
        Then I ensure selected accent stone-1 video popup is displayed
        When I click cross button
        Then I ensure video pop is closed
        #When I click change accent stones dropdown
        Then I ensure necklace accent stone2 area is displayed
        And I ensure necklace accent stone2 name is displayed
        And I ensure necklace accent stone2 details are displayed
        When I click change necklace accent stone-2 dropdown
        And I ensure selected necklace accent stone 2 properties are displayed
        And I ensure selected carat size of the accent stone-2 text is displayed
        And I ensure metal section is displayed
        And I ensure metal name is displayed
        And I ensure metal details are displayed
        And I ensure change metal dropdown is displayed
        When I click change metal dropdown
        Then I ensure platinum, 18k, 14k, 10k, silver metal type are displayed
        And I ensure selected metal properties are displayed
        And I move to metal section
        Then I ensure necklace chain area is displayed
        Then I ensure default box chain text is displayed
        When I click customize chain length
        Then I ensure different metals in necklace area is displayed
        Then I ensure default box chain text is displayed
        Then I ensure add to cart and request custom order buttons are displayed
        And I ensure delivery details are displayed

    #83(pricechange-size, quality of ring page)
    @smoketest
    Scenario: Checking price change is happens when changing size and quality of product
        Given I browse ring product details page
        When I click change centre stone dropdown
        And I select heirloom quality and 1.02 size of the diamond
        And I ensure price changed after changing size and quality

    #84(pricechange when changing metal type)
    @smoketest
    Scenario: Checking price change is happens when changing metal of product
        Given I browse ring product details page
        And I ensure change metal dropdown is displayed
        When I click change metal dropdown
        And I select 18k white gold in metaltype of product
        And I ensure price changed after changing metal

    #85(pricedoesnt change when changing metal color)
    @smoketest
    Scenario: Checking price change is happens when changing metal color of product
        Given I browse ring product details page
        And I ensure change metal dropdown is displayed
        When I click change metal dropdown
        And I select 14k yellow gold in metaltype of product
        And I ensure price not changed after changing metal color


    #86(price change when changing bandwith width)
    @smoketest
    Scenario: Checking price change is happens when changing bandwidth width-above
       Given I browse couple band product details page
       When I move to Diamonderelogo
       Then I ensure his ring size and band width text is displayed
       When I click select his ringsize dropdown
       When I click band width dropdown
       And I select 7mm band width
       And I ensure price changed after changing mens bandwidth

    #87(price change when changing bracelet width-below than negative)
    @smoketest
    Scenario: Checking price change text will display when changing Bracelet lengths below
        Given I browse bracelet product details page
        Then I ensure Bracelet length area is displayed
        When I click bracelet length dropdown
        Then I ensure bracelet length text and dropdown are displayed
        And I ensure bracelet size guide is displayed
        When I click box bracelet length dropdown
        And I select 6mm bracelet length
        Then I ensure price change text is displayed
        And I ensure price changed after changing bracelet length

    #88(price change when changing bracelet width-above)
    @smoketest
    Scenario: Checking price change text will display when changing Bracelet lengths above
        Given I browse bracelet product details page
        Then I ensure Bracelet length area is displayed
        When I click bracelet length dropdown
        Then I ensure bracelet length text and dropdown are displayed
        And I ensure bracelet size guide is displayed
        When I click box bracelet length dropdown
        And I select 7.5mm bracelet length
        Then I ensure price change text is displayed for max length
        And I ensure price changed after changing bracelet length

    #89(price change when changing necklace chain-above)
    @smoketest
    Scenario: Checking changed necklace chain details above
        Given I browse necklace product details page
        And I move to metal section
        Then I ensure necklace chain area is displayed
        Then I ensure default box chain text is displayed
        When I click customize chain length
        Then I ensure different metals in necklace area is displayed
        When I select yellow gold metal
        Then I ensure default box chain text is displayed
        And I ensure yellow box button selected and cable button are displayed
        And I ensure 18 and 16 inch chain button are displayed
        When I click 18 inch chain button
        And I ensure price changed after changing chain

    #90(price change when changing necklace chain-below than negative)
    @smoketest
    Scenario: Checking changed necklace chain details below
        Given I browse necklace product details page
        Then I ensure necklace chain area is displayed
        Then I ensure default box chain text is displayed
        When I click customize chain length
        Then I ensure different metals in necklace area is displayed
        When I select yellow gold metal
        And I ensure price changed after changing chain

    
    #91 
    @smoketest
    Scenario: Verifying the stone selection option for Agacia band in Page 3
        Given I browse page 3 of Claudine
        When I select ring size
        And I click the View matching bands
        And I click matching band product view details link
        Then I ensure matching band product full details popup is displayed
        And I ensure matching band product image,name, price, product description in full details popup is displayed
        And I ensure matching band product ring size is displayed
        Then I verify the Precious stone selection options and Quality selection options in the popup
        When I select Ruby under Precious stone 
        And I select Quality as Heirloom
        And I ensure free engraving field and max character limit is displayed 
        And I ensure free engraving icons are displayed
        And I ensure Add ring and band button is displayed
        And I click Add ring and band button
        When I click checkout button
        Then I ensure the product added to cart and redirects to shopping cart 

    #92
    @smoketest
    Scenario: Verifying that the ring size is automatically populated when selecting the matching band size
        Given I browse page 3 of Claudine
        When I click the View matching bands
        And I click matching band product view details link
        Then I ensure matching band product full details popup is displayed
        And I ensure matching band product ring size is displayed
        And I select the matching band ring size
        Then I ensure that the ring size is automatically prepopulated

  
    #93
    @smoketest
    Scenario: Validating the absence of Box design for Silver Metal Chain
        Given I browse necklace product details page
        And I move to metal section
        Then I ensure necklace chain area is displayed
        When I click customize chain length
        And I ensure cable button selected and box button are displayed
        When I click Box button 
        Then I ensure that the box design is not available for Sterling silver

    #94(Visibility of dimension column under the Product details of bracelets )
    @validations
    Scenario: Checking the Dimension coloum of bracelets under the Product details
        Given I browse bracelet product details page
        Then I ensure the Product details section is displayed
        Then I ensure the Dimensions column under Product details
        And I ensure the Width text under Dimensions column
        And I ensure the Height text under Dimensions column
        Then I ensure the Length text under Dimensions column

    #95(Visibility of dimension column under the Product details of necklace)
    @validations
    Scenario: Checking the Dimension coloum of necklace under the Product details
        Given I browse necklace product details page
        Then I ensure the Product details section is displayed
        Then I ensure the Dimensions column under Product details
        And I ensure the Width text under Dimensions column
        And I ensure the Height text under Dimensions column

