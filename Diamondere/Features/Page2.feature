Feature: User enters into page 2 

   Background: Browse Diamondere website
      Given I browse Diamondere website
      

# Scenario 1:
   @smoketest
   Scenario: Select Emerald from Rings category
      Given I select Rings category
      When I select Emerald from Shop By Gemstone
      Then Ensure Page2 is displayed with all the Emerald products 
      And Ensure the filter tabs are displayed for Emerald
      And Ensure the Banner and link changes with Emerald
      And Ensure the Inline description for Emerald is displayed 
      And Ensure the SEO section is updated as per Emerald
      And Ensure Danette product is displayed with product name, price and product description 
      When I select Danette product
      Then Ensure the user enters page 3 of Danette

#  Scenario 2:
   @smoketest
   Scenario: Check the view video link in Inline Description - Emerald from Rings category
      Given I select Rings category
      When I select Emerald from Shop By Gemstone
      Then Ensure Page2 is displayed with all the Emerald products 
      And Ensure the Inline description for Emerald is displayed 
      When I select View Emerald Video
      Then Ensure a popup video plays Emerald buying guide 

#  Scenario 3:
   @smoketest
   Scenario: Check the star link in SEO section - Emerald from Rings category
      Given I select Rings category
      When I select Emerald from Shop By Gemstone
      Then Ensure Page2 is displayed with all the Emerald products 
      And Ensure the SEO section is updated as per Emerald
      When I select rating star link in SEO section
      Then Ensure review for diamondere rings page is displayed
      When I click on Vintage rings link in SEO description
      Then Ensure page 2 of vintage emerald rings is displayed
      When I click on Claddagh rings link in SEO description
      Then Ensure page 2 of Claddagh emerald rings is displayed


# Scenario 4:
   @validations
   Scenario: Select solitaire rings from Engagement category
      Given I select Engagement category
      When I select Solitaire rings from Engagement Ring Styles
      Then Ensure Page2 is displayed with all the solitaire products 
      And Ensure the filter tabs are displayed for solitaire
      And Ensure the Banner and link changes with Solitaire
      And Ensure the Inline description for Solitaire is displayed 
      And Ensure the SEO section is updated as per Solitaire
      And Ensure Miya product is displayed with product name, price and product description 
      When I select Miya product
      Then Ensure the user enters page 3 of Miya


# Scenario 5:
   @validations
   Scenario: Select Eternity bands from Wedding category
      Given I select wedding category
      When I select Eternity bands under Womans wedding band styles
      Then Ensure Page2 is displayed with all the Eternity band products 
      And Ensure the filter tabs are displayed for Eternity
      And Ensure the Banner and link changes with Eternity bands
      And Ensure the SEO section is updated as per Eternity bands
      And Ensure Jean product is displayed with product name, price and product description 
      When I select Jean product
      Then Ensure the user enters page 3 of Jean


# Scenario 6:
   @validations
   Scenario: Select Tennis Bracelets from Bracelets category
      Given I select Bracelet category
      When I select Tennis Bracelets from Bracelet styles
      Then Ensure Page2 is displayed with all the Tennis products 
      And Ensure the filter tabs are displayed for Tennis Bracelet
      And Ensure the Banner and link changes with Tennis Bracelet
      And Ensure the Inline description for Tennis is displayed 
      And Ensure the SEO section is updated as per Tennis Bracelet
      And Ensure Zainab product is displayed with product name, price and product description 
      When I select Zainab product
      Then Ensure the user enters page 3 of Zainab

#  Scenario 7:
   @validations
   Scenario: Check the star link in SEO section - Tennis Bracelets from Bracelets category
      Given I select Bracelet category
      When I select Tennis Bracelets from Bracelet styles
      Then Ensure Page2 is displayed with all the Tennis products  
      And Ensure the SEO section is updated as per Tennis Bracelet
      When I select rating star link in SEO section for Tennis Bracelets
      Then Ensure review for diamondere bracelets page is displayed
      
# Scenario 8:
   @validations
   Scenario: Select Drop Earrings from Earrings category
      Given I select Earrings category
      When I select Drop Earrings from Earring styles
      Then Ensure Page2 is displayed with all the Drop Earrings 
      And Ensure the filter tabs are displayed for Drop Earrings 
      And Ensure the Banner and link changes with Drop Earrings 
      And Ensure the Inline description for Drop Earrings is displayed 
      And Ensure the SEO section is updated as per Drop Earrings 
      And Ensure Valonia product is displayed with product name, price and product description 
      When I select Valonia product
      Then Ensure the user enters page 3 of Valonia

#  Scenario 9:
   @validations
   Scenario: Check the star link in SEO section - Drop Earrings from Earrings category
      Given I select Earrings category
      When I select Drop Earrings from Earring styles
      Then Ensure Page2 is displayed with all the Drop Earrings   
      And Ensure the SEO section is updated as per Drop Earrings 
      When I select rating star link in SEO section for Drop earrings
      Then Ensure review for diamondere earrings page is displayed


# Scenario 10:
   @validations
   Scenario: Select Heart Necklaces from Necklace category
      Given I select Necklace category
      When I select Heart Necklaces from Necklace styles
      Then Ensure Page2 is displayed with all the Heart Necklaces 
      And Ensure the filter tabs are displayed for Heart Necklaces 
      And Ensure the Banner and link changes with Heart Necklaces
      And Ensure the Inline description for Heart Necklaces is displayed 
      And Ensure the SEO section is updated as per Heart Necklaces
      And Ensure Beleza product is displayed with product name, price and product description 
      When I select Beleza product
      Then Ensure the user enters page 3 of Beleza

#  Scenario 11:
   @validations
   Scenario: Check the star link in SEO section - Heart Necklaces from Necklace category
      Given I select Necklace category
      When I select Heart Necklaces from Necklace styles
      Then Ensure Page2 is displayed with all the Heart Necklaces   
      And Ensure the filter tabs are displayed for Heart Necklaces 
      And Ensure the Banner and link changes with Heart Necklaces
      And Ensure the Inline description for Heart Necklaces is displayed 
      And Ensure the SEO section is updated as per Heart Necklaces
      ## When I select rating star link in SEO section for Heart necklaces
      ## Then Ensure review for diamondere necklaces page is displayed

# Scenario 12:
   @validations
   Scenario: Select Mens earrings from Men's category
      Given I select Mens category
      When I select Mens earrings from Shop By Style
      Then Ensure Page2 is displayed with all the Mens earrings 
      And Ensure the filter tabs are displayed for Mens earrings 
      And Ensure the Banner and link changes with Mens earrings
      And Ensure the SEO section is updated as per Mens earrings
      And Ensure Samuel product is displayed with product name, price and product description 
      When I select Samuel product
      Then Ensure the user enters page 3 of Samuel

# Scenario 13:
   @smoketest
   Scenario: Selecting any style from style filter
      Given I select Rings category
      When I select View All from Rings
      Then Ensure Page2 is displayed with all the ring products
      When I select Style filter from filter tab
      Then Ensure the Style dropdown is displayed
      When I select Sidestone under Style fiter
      Then Ensure the Banner and link changes with Sidestone style filter
      And Ensure the Inline description for Sidestone style filter is displayed 
      And Ensure the SEO section is updated as per Sidestone style filter
      And Ensure Xylos product is displayed with product name, price and product description 
      When I select Xylos product
      Then Ensure the user enters page 3 of Xylos

# Scenario 14:
   @smoketest
   Scenario: Selecting any stone from stone filter
      Given I select Rings category
      When I select View All from Rings
      Then Ensure Page2 is displayed with all the ring products
      When I select Stone filter from filter tab
      Then Ensure the Stone dropdown is displayed
      When I select Pink Sapphire under Stone fiter
      And Ensure the Banner and link changes with Pink Sapphire stone filter
      And Ensure the Inline description for Pink Sapphire stone is displayed 
      And Ensure the SEO section is updated as per Pink Sapphire stone filter
      # And Ensure Eugene product is displayed with product name, price and product description 
      # When I select Eugene product
      # Then Ensure the user enters page 3 of Eugene

   
# Scenario 15:
   @smoketest
   Scenario: Selecting any shape from shape filter
      Given I select Rings category
      When I select View All from Rings
      Then Ensure Page2 is displayed with all the ring products
      When I select Shape filter from filter tab
      Then Ensure the Shape dropdown is displayed
      When I select Pear under Shape fiter
      Then Ensure the Banner and link changes with Pear Shape filter
      And Ensure the Inline description for Pear Shape filter is displayed 
      And Ensure the SEO section is updated as per Pear Shape filter
      And Ensure Dezi product is displayed with product name, price and product description
      When I select Dezi product
      Then Ensure the user enters page 3 of Dezi


# Scenario 16:
   @smoketest
   Scenario: Selecting any carat from carat filter
      Given I select Rings category
      When I select View All from Rings
      Then Ensure Page2 is displayed with all the ring products
      When I select carat range filter from filter tab
      Then Ensure the carat range dropdown is displayed
      When I select 1 to 2 carat under carat range fiter
      Then Ensure products are updated as per selected carat option

# Scenario 17:
   @smoketest
   Scenario: Selecting any metal from metal filter
      Given I select Rings category
      When I select View All from Rings
      Then Ensure Page2 is displayed with all the ring products
      When I select metal filter from filter tab
      Then Ensure the metal dropdown is displayed
      When I select 14kYG under metal fiter
      Then Ensure the Banner and link changes with 14kYG metal filter
      And Ensure the Inline description for Metal filter is displayed 
      And Ensure the SEO section is updated as per Metal filter
      And Ensure Solace product is displayed with product name, price and product description 
      When I select Solace product
      Then Ensure the user enters page 3 of Solace

# Scenario 18:
   @validations
   Scenario: Check the default option Most popular from Sort By filter
      Given I select Rings category
      When I select View All from Rings
      Then Ensure Page2 is displayed with all the ring products
      When I select Sort By filter from filter tab
      Then Ensure the Sortby dropdown is displayed
      And Ensure the Most popular is selected by default
      
# Scenario 19:
   @smoketest
   Scenario: Selecting New Arrival option from Sort By filter
      Given I select Rings category
      When I select View All from Rings
      Then Ensure Page2 is displayed with all the ring products
      When I select Sort By filter from filter tab
      Then Ensure the Sortby dropdown is displayed
      When I select New Arrival under Sortby fiter
      Then Ensure the New Arrival products are displayed from top to bottom 

# Scenario 20:
   @validations
   Scenario: Selecting Price low to high option from Sort By filter
      Given I select Rings category
      When I select View All from Rings
      Then Ensure Page2 is displayed with all the ring products
      When I select Sort By filter from filter tab
      Then Ensure the Sortby dropdown is displayed
      When I select Price low to high under Sortby fiter
      Then Ensure the products are displayed from lowest to highest price 

# Scenario 21:
   @validations
   Scenario: Selecting Price high to low option from Sort By filter
      Given I select Rings category
      When I select View All from Rings
      Then Ensure Page2 is displayed with all the ring products
      When I select Sort By filter from filter tab
      Then Ensure the Sortby dropdown is displayed
      When I select Price high to low under Sortby fiter
      Then Ensure the products are displayed from highest to lowest price 

# Scenario 22:
   @smoketest
   Scenario: Check the static features in page 2
      Given I select Rings category
      When I select View All from Rings
      Then Ensure Page2 is displayed with all the ring products
      And Ensure May we assist you button is displayed
      When I scrolldown to the SEO section
      Then ensure top button is displayed and the filter tab section and search box remain static and displayed at the top
      When I select Top button
      Then ensure the top of the page is displayed
      When I select May we assist you button
      Then Ensure the customer care form is displayed
      When I select close button in customer care form
      Then Ensure May we assist you button is displayed

# Scenario 23:
   @validations
   Scenario: Check the "Explore Diamond Guide" link in Banner
      Given I select Rings category
      Then Ensure the Rings dropdown is displayed
      When I select Diamond rings from Shop By Diamond
      Then Ensure Page2 is displayed with all the Diamond ring products 
      And Ensure the Banner and link is displayed with Explore Diamond guide link  
      When I select Explore Diamond guide link 
      Then Ensure it redirects to the Buying your first diamond blog page

# Scenario 24:
   @validations
   Scenario: Check the "Explore Gemstone Guide" link in Banner
      Given I select Rings category
      Then Ensure the Rings dropdown is displayed
      When I select Brown Diamond from Shop By Diamond
      Then Ensure Page2 is displayed with all the Brown Diamond ring products 
      And Ensure the Banner and link is displayed with Explore Gemstone guide link  
      When I select Explore Gemstone guide link 
      Then Ensure the Gemstone guide page is displayed in new link

# Scenario 25:
   @validations
   Scenario: Check the "Explore Emerald Guide" link in Banner
      Given I select Rings category
      Then Ensure the Rings dropdown is displayed
      When I select Emerald from Shop By Gemstone
      Then Ensure Page2 is displayed with all the Emerald products 
      And Ensure the Banner and link is displayed with Explore Emerald guide link  
      When I select Explore Emerald guide link 
      Then Ensure it redirects to the Emerald Guide Diamondere blog page

# Scenario 26:
   @validations
   Scenario: Check the "Explore Metal Guide" link in Banner
      Given I select Rings category
      Then Ensure the Rings dropdown is displayed
      When I select Yellow Gold from Shop By Metal
      Then Ensure Page2 is displayed with all the Yellow Gold ring products 
      And Ensure the Banner and link is displayed with Explore Metal guide link  
      When I select Explore Metal guide link 
      Then Ensure Metal guide page of Diamondere is displayed in new link


# Scenario 27:
   @validations
   Scenario: Check the "Explore Ruby Guide" link in Banner
      Given I select Bracelet category
      Then Ensure the Bracelets dropdown is displayed
      When I select Ruby from Shop By Gemstone
      Then Ensure Page2 is displayed with all the Ruby Bracelet products 
      And Ensure the Banner and link is displayed with Explore Ruby guide link  
      When I select Explore Ruby guide link 
      Then Ensure it redirects to the Explore Ruby Guide Diamondere blog page


# Scenario 28:
   @validations
   Scenario: Check the "Explore Jewelry Buying Guide" link in Banner
      Given I select Bracelet category
      Then Ensure the Bracelets dropdown is displayed
      When I select Tennis Bracelets from Bracelet styles
      Then Ensure Page2 is displayed with all the Tennis products
      And Ensure the Banner and link changes with Tennis Bracelet
      When I select Explore Jewelry Buying guide link 
      Then Ensure it redirects to the Jewelry Buying Guide Diamondere blog page

# Scenario 29:
   @validations
   Scenario: Check the "Read more" link and "Explore Sapphire Guide" link in Banner
      Given I select Earrings category
      Then Ensure the Earrings dropdown is displayed
      When I select Sapphire from Shop By Gemstone
      Then Ensure Page2 is displayed with all the Sapphire Earring products 
      And Ensure the Banner and link is displayed with Read more link and Explore Sapphire guide link  
      When I select Read more link
      Then Ensure it moves down to the SEO section
      When I select Explore Sapphire guide link 
      Then Ensure it redirects to the Sapphire Guide Diamondere blog page

# Scenario 30:
   @validations
   Scenario: Check the "Explore Gemstone Shape Preference" link in Banner
      Given I select Bracelet category
      When I select View All under Bracelets
      Then Ensure Page2 is displayed with all the Bracelets products 
      When I select Shape filter from filter tab
      And I select Marquise-cut option
      Then Ensure the Banner and link is displayed with Explore Gemstone Shape Preference link 
      When I select Explore Gemstone Shape Preference link 
      Then Ensure it redirects to the Gemstone shape Diamondere blog page
        
# Scenario 31:
   @smoketest
   Scenario: Check the flow and function of breadcrumb above banner
      Given I select Necklace category
      When I select Peridot from Shop By Gemstone
      Then Ensure Page2 is displayed with all the Peridot Necklaces 
      And Ensure Breadcrumb for Peridot Necklace products is displayed
      And Ensure Home link, necklaces link, Peridot text and number of designs are displayed
      When I select Home link in breadcrumb
      Then Ensure it redirects to the home page
      When I select Necklace category
      And I select Peridot from Shop By Gemstone
      Then Ensure Breadcrumb for Peridot Necklace products is displayed
      When I select Necklaces in breadcrumb
      Then Ensure it redirects to Page 2 - All necklaces 


# Scenario 32:
   @functional
   Scenario: Check the functionality of filter tag
      Given I select Bracelet category
      When I select Bangles from Bracelet styles
      Then Ensure Page2 is displayed with all the Love Bangles
      And Ensure Love Bangles filter tag is displayed below filter tab
      When I select Shape filter from filter tab
      Then Ensure the Shape dropdown is displayed
      When I select Heart shape
      Then Ensure the Banner and link is updated for Heart shaped Bangles
      And Ensure the Heart shape is added to the filter tag
      When I select remove icon near Heart shape in filter tag
      # Then Ensure Heart shape is removed from filter tag
      And Ensure the Banner is updated for only Love Bangles
      When I select remove icon near Love Bangles in filter tag
      Then Ensure the page 2 is updated with all the Bangles design
      And Ensure the Banner is updated accordingly for All Bangles
      When I select stone filter 
      And I select Emerald 
      Then Ensure the Banner is updated for Emerald Bangles
      And Ensure the Inline description for Emerald Bangles is displayed 
      And Ensure the SEO section is updated for Emerald Bangles
      When I select Shape filter from filter tab
      Then Ensure the Shape dropdown is displayed
      When I select Cushion-cut option
      Then Ensure the Banner is updated for Emerald and Cushion cut Bangles
      And Ensure the Inline description for Emerald Bangles is only displayed 
      And Ensure the SEO section is updated for Emerald and Cushion cut Bangles
      When I select remove icon near Emerald filter tag
      Then Ensure the Banner is updated for only Cushion cut Bangles
      And Ensure the Inline description for Cushion cut Bangles is only displayed 
      And Ensure the SEO section is updated for only Cushion cut Bangles

      
# Scenario 33:
   @smoketest
   Scenario: Check the Functionality of Search box feature - Product option
      Given I select search box in header
      When I enter rings in search box
      Then Ensure search dropdown is displayed
      When I select rings from dropdown
      Then Ensure all ring products are displayed
      And Ensure the Banner and link is displayed for ring products
      And Ensure breadcrumb flow is present
      And ensure the Product option is displayed
      And ensure the Product option is selected by default
      And ensure the content option is displayed 
      And Ensure the relevant filter tabs for rings are displayed
      And Ensure the relevant filter tags for rings are displayed 
      And Ensure Danette product in rings search is displayed with product name ,price and product description
      When I select Danette product in rings search
      Then Ensure it redirects to page 3 - Danette rings search


# Scenario 34:
   @smoketest
   Scenario: Check the Functionality of Search box feature - Content option
      Given I select search box in header
      When I enter rings in search box
      Then Ensure search dropdown is displayed
      When I select rings from dropdown
      Then Ensure all ring products are displayed
      And ensure the Product option is displayed 
      And ensure the content option is displayed
      When I select content option
      Then Ensure the Videos and Guides text heading is displayed
      And Ensure Rings Review section is displayed
      And Ensure Mens rings review section is displayed
      And Ensure Engagement review section is displayed
      And Ensure Bloglinks text heading and section are displayed
      When I select the Rings Review heading 
      Then Ensure review for rings page is displayed
      # When I select the Mens rings review heading
      # Then Ensure review for diamondere mens rings page is displayed
      # When I select the Engagement review heading
      # Then Ensure review for diamondere engagement rings page is displayed
      # When I select the section under Bloglinks      
      # Then Ensure it redirects to the respective blog page

# Scenario 35:
   @smoketest
   Scenario: Check the Functionality of Search box feature - Search box inside page and write to us link
      Given I select search box in header
      When I enter rings in search box
      Then Ensure search dropdown is displayed
      When I select rings from dropdown
      Then Ensure all ring products are displayed
      And Ensure a new search box field and search button is displayed
      And Ensure a message and Write to us link is displayed
      When I enter any name say miya in new search box inside
      Then Ensure a new search dropdown is displayed
      When I select Miya from new dropdown
      Then Ensure the product Miya is displayed overwriting the previous results
      And Ensure the banner name changes to Miya accordingly
      And Ensure the relevant filter tabs for miya rings are displayed
      When I select write to us link above new search box
      Then Ensure it redirects us to the contact form page in new tab


# Scenario 36:
   @functional
   Scenario: Check the Functionality of Search box feature - When no products are found 
      Given I select search box in header
      When I enter emerald in search box
      Then Ensure search dropdown is displayed
      When I select emerald from dropdown
      Then Ensure emerald products is displayed with product name , price and product description
      And Ensure the relevant filter tabs for Emerald is displayed
      When I select stone filter for Emerald search
      Then Ensure stone dropdown is displayed for Emerald search
      When I select Morganite from stone dropdown
      And I select shape filter for Emerald search
      Then Ensure shape dropdown is displayed for Emerald search
      When I select Marquise cut from shape dropdown
      When I select Above 3 carat 
      Then Ensure a message and Reach out to us link is displayed
      When I select Reach out to us link
      Then Ensure it redirects to the contact us form


# Scenario 37:
   @smoketest
   Scenario: Check the functionality of Filters for Catalogues
      Given I select Rings category
      When I select Promise rings catalogue from Ring styles
      Then Ensure Page2 is displayed with all the Promise rings catalogue products
      And Ensure Types filter tag is present
      When I select Types filter
      Then Ensure the Types dropdown is displayed
      When I select Couples band from Types filters
      Then Ensure the Couple band products are displayed in page 2
      And Ensure there is no change in banner and SEO section
     

# Scenario 38:
   @validations
   Scenario: When no products are present in page 2 if any sub category from any main category is selected
      Given I browse Hoop Earrings page
      Then Ensure Page2 is displayed with all the Hoop Earrings
      When I select Shape filter 
      Then Ensure the shape dropdown is displayed for Hoop earrings
      And I select Cushion-cut option
      Then Ensure a message and Reach out to us link is displayed
      When I select Reach out to us link
      Then Ensure it redirects to the contact us form


# Scenario 39:
   @functional
   Scenario: Checking the functionality of caret icon near style filter tab 
      Given I browse Hoop Earrings page
      When I hover on caret icon near Style filter tab
      Then Ensure the dropdown is displayed for Style filter
      When I scroll down to the footer section
      Then Ensure the style dropdown is closed
      When I click on caret icon near Style filter tab
      Then Ensure the dropdown is displayed for Style filter
      When I scroll down to the footer section
      Then Ensure the style dropdown is not closed and remains static
      When I click on caret icon near Style filter tab 
      Then Ensure the style dropdown is closed
      

# Scenario 40:
   @functional
   Scenario: Checking the functionality of caret icon near Stone filter tab 
      Given I browse Hoop Earrings page
      When I hover on caret icon near Stone filter tab
      Then Ensure the dropdown is displayed for Stone filter
      When I scroll down to the footer section
      Then Ensure the Stone dropdown is closed 
      When I click on caret icon near Stone filter tab
      Then Ensure the dropdown is displayed for Stone filter
      When I scroll down to the footer section
      Then Ensure the Stone dropdown is not closed and remains static
      When I click on caret icon near Stone filter tab
      Then Ensure the Stone dropdown is closed


# Scenario 41:
   @functional
   Scenario: Checking the functionality of caret icon near Shape filter tab 
      Given I browse Hoop Earrings page
      When I hover on caret icon near Shape filter tab
      Then Ensure the dropdown is displayed for Shape filter
      When I scroll down to the footer section
      Then Ensure the Shape dropdown is closed 
      When I click on caret icon near Shape filter tab
      Then Ensure the dropdown is displayed for Shape filter
      When I scroll down to the footer section
      Then Ensure the Shape dropdown is not closed and remains static
      When I click on caret icon near Shape filter tab
      Then Ensure the Shape dropdown is closed


# Scenario 42:
   @functional
   Scenario: Checking the functionality of caret icon near Carat Range filter tab 
      Given I browse Hoop Earrings page
      When I hover on caret icon near Carat range filter tab
      Then Ensure the dropdown is displayed for Carat Range filter
      When I scroll down to the footer section
      Then Ensure the Carat range dropdown is closed 
      When I click on caret icon near Carat range filter tab
      Then Ensure the dropdown is displayed for Carat Range filter
      When I scroll down to the footer section
      Then Ensure the Carat range dropdown is not closed and remains static
      When I click on caret icon near Carat range filter tab
      Then Ensure the Carat range dropdown is closed  

# Scenario 43:
   @functional
   Scenario: Checking the functionality of caret icon near Metal filter tab 
      Given I browse Hoop Earrings page
      When I hover on caret icon near Metal filter tab
      Then Ensure the dropdown is displayed for Metal filter
      When I scroll down to the footer section
      When I click on caret icon near Metal filter tab
      Then Ensure the dropdown is displayed for Metal filter
      When I scroll down to the footer section
      Then Ensure the Metal dropdown is not closed and remains static
      When I click on caret icon near Metal filter tab
      Then Ensure the Metal dropdown is closed








 