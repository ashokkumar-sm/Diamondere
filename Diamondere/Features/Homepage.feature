Feature: Testing Homepage of Diamondere

    Background: Browsing staging environment
        Given I browse Diamondere website

    #1
    @validations
    Scenario: Checking the header link of the Diamondere homepage
        Given I move to the Free shipping,returns,resizing and certification section
        When I click the Free shipping Text Link in the Homepage Banner
        Then I ensure clicking the Free shipping Text Link redirects to the respective page

    #2
    @validations
    Scenario: Checking the returns link of the Diamondere homepage
        Given I click the Returns Text Link in the Homepage Banner
        Then I ensure clicking the Returns Text Link redirects to the respective page

    #3
    @validations
    Scenario: Checking the resizing link of the Diamondere homepage
        When I click the Resizing Text Link in the Homepage Banner
        Then I ensure clicking the Resizing Text Link redirects to the respective page

    #4
    @validations
    Scenario: Checking the Certification link of the Diamondere homepage
        Given I click the Certification Text Link in the Homepage Banner
        Then I ensure clicking the Certification Text Link redirects to the respective page

    #5
    @validations
    Scenario: Checking the Logo and Banner of the Diamondere Homepage
        Given I move to the Diamondere Logo is present
        Then I ensure customer care, location, search box,login and shopping cart icons are present

   #6
   @validations
    Scenario: Checking the customer care icon in the header of Diamondere
        Given I hover over the Customer care icon
        Then I ensure the write to us, request call back and toll free number are present in the dropdown

    #7
    @validations
    Scenario: Checking the login/signup icon in the header of Diamondere
        Given I move to the login and signup icon
        Then I hover over the login and signup icon
        And I ensure the track my order,order history and logout options are present in the dropdown

    #8
    @validations
    Scenario: Checking the Rings menu in the homepage
        Given I hover over the Rings menu
        Then I Ensure that Rings submenu dropdown is visible

    #9
    @validations
    Scenario: Checking the shop by diamond submenu under Rings Menu
        Given I hover over the Rings menu
        Then I Ensure that Rings submenu dropdown is visible
        And I ensure all the diamonds are present under shop by diamond submenu
        When I click the Black Diamond under the shop by diamond submenu
        Then I ensure the Black Diamond redirects to the Black Diamond rings page

    #10
    @smoketest
    Scenario: Checking the shop by precious Gemstone submenu under Rings Menu
        Given I hover over the Rings menu
        Then I Ensure that Rings submenu dropdown is visible
        And I ensure all the precious Gemstone are present under shop by precious Gemstone submenu
        When I click the Ruby under the shop by precious Gemstone submenu
        Then I ensure the Ruby redirects to the Ruby rings page

    #11
    @validations
    Scenario: Checking the shop by semiprecious Gemstone submenu under Rings Menu
        Given I hover over the Rings menu
        Then I Ensure that Rings submenu dropdown is visible
        And I ensure all the semiprecious Gemstone are present under shop by semiprecious Gemstone submenu
        When I click the Aquamarine under the shop by semiprecious Gemstone submenu
        Then I ensure the Aquamarine redirects to the Aquamarine rings page

    #12
    @validations
    Scenario: Checking the shop by Lab created Gems submenu under Rings Menu
        Given I hover over the Rings menu
        Then I Ensure that Rings submenu dropdown is visible
        And I ensure all the Lab created Gems are present under shop by Lab created Gems submenu
        When I click the Alexandrite under the shop by Lab created Gems submenu
        Then I ensure the Alexandrite redirects to the Alexandrite rings page

    #13
    @validations
    Scenario: Checking the shop by Metal submenu under Rings Menu
        Given I hover over the Rings menu
        Then I Ensure that Rings submenu dropdown is visible
        And I ensure all the metal rings are present under shop by Metal submenu
        When I click the Platinum under the shop by metal submenu
        Then I ensure the Platinum redirects to the Platinum rings page

    #14
    @validations
    Scenario: Checking the shop by Ring styles submenu under Rings Menu
        Given I hover over the Rings menu
        Then I Ensure that Rings submenu dropdown is visible
        And I ensure all the styles are present under shop by Ring styles Gems submenu
        When I click the Three stone rings under the Ring styles submenu
        Then I ensure the Three stone rings redirects to the Three stone rings page

    #15
    @validations
    Scenario: Checking the Style Guide To Ring Setting Options under Rings Menu
        Given I hover over the Rings menu
        Then I Ensure that Rings submenu dropdown is visible
        When I click the Read more link under Style Guide To Ring Setting Options
        Then I ensure the Read more link under Style Guide redirects to the respective page

    #16
    @validations
    Scenario: Checking the Black Gold Guide Options under Rings Menu
        Given I hover over the Rings menu
        Then I Ensure that Rings submenu dropdown is visible
        When I click the Read more link under Black Gold Guide Options
        Then I ensure the Read more link under Black Gold Guide redirects to the respective page

    #17
    @validations
    Scenario: Checking the Engagement menu in the homepage
        Given I hover over the Engagement menu
        Then I Ensure that Engagement submenu dropdown is visible

    #18
    @validations
    Scenario: Checking the shop by diamond submenu under Engagement menu in the homepage
        Given I hover over the Engagement menu
        Then I Ensure that Engagement submenu dropdown is visible
        And I ensure all the diamond are present under the shop by diamond submenu
        When I click the Lab Diamond under the shop by diamond submenu under Engagement menu
        Then I ensure the Lab Diamond redirects to the make your Lab Diamond engagement rings page

    #19
    @validations
    Scenario: Checking the shop by precious Gemstone submenu under Engagement menu in the homepage
        Given I hover over the Engagement menu
        Then I Ensure that Engagement submenu dropdown is visible
        And I ensure all the precious Gemstone are present under shop by precious Gemstone submenu under Engagement menu
        When I click the Sapphire under the shop by precious Gemstone submenu under Engagement menu
        Then I ensure the Sapphire redirects to the Sapphire engagement rings page

    #20
    @smoketest
    Scenario: Checking the shop by semiprecious Gemstone submenu under Engagement menu in the homepage
        Given I hover over the Engagement menu
        Then I Ensure that Engagement submenu dropdown is visible with all the semiprecious Gemstone are present under shop by semiprecious Gemstone submenu
        When I click the Amethyst under the shop by semiprecious Gemstone submenu
        Then I ensure the Amethyst redirects to the Amethyst engagement rings page

    #21
    @validations
    Scenario: Checking the shop by Lab created Gems submenu under Engagement menu in the homepage
        Given I hover over the Engagement menu
        Then I Ensure that Engagement submenu dropdown is visible with all the Lab created Gems are present under shop by Lab created Gems submenu
        When I click the Alexandrite under the shop by Lab created Gems submenu under Engagement menu
        Then I ensure the Alexandrite under Engagement menu redirects to the Alexandrite rings page

    #22
    @validations
    Scenario: Checking the shop by metal submenu under Engagement menu in the homepage
        Given I hover over the Engagement menu
        Then I Ensure that Engagement submenu dropdown is visible with all the metals are present under shop by metals submenu
        When I click the White Gold under the shop by metal submenu
        Then I ensure the White Gold redirects to the 14K white gold engagement rings page

    #23
    @validations
    Scenario: Checking the Engagement Ring styles under Engagement menu in the homepage
        Given I hover over the Engagement menu
        Then I Ensure that Engagement submenu dropdown is visible with all the Engagement Ring styles are present under Engagement Ring styles submenu
        When I click the Halo rings under the Engagement Ring styles submenu
        Then I ensure the Halo rings redirects to the Halo engagement rings page
    #24
    @validations
    Scenario: Checking the Engagement Ring Guide under Engagement menu in the homepage
        Given I hover over the Engagement menu
        Then I Ensure that Engagement submenu dropdown is visible
        When I click the Read more link under Engagement Ring Guide
        Then I ensure the Read more link under Engagement Ring Guide redirects to the respective page
    #25
    @validations
    Scenario: Checking the 3 Engagement Ring Myths Options under Engagement menu in the homepage
        Given I hover over the Engagement menu
        Then I Ensure that Engagement submenu dropdown is visible
        When I click the Read more link under 3 Engagement Ring Myths Options
        Then I ensure the Read more link under 3 Engagement Ring Myths redirects to the respective page

    #26
    @validations
    Scenario: Checking the Wedding menu in the homepage
        Given I hover over the Wedding menu
        Then I Ensure that Wedding submenu dropdown is visible

    #27
    @validations
    Scenario: Checking the shop by diamond submenu under Wedding menu in the homepage
        Given I hover over the Wedding menu
        Then I Ensure that Wedding submenu dropdown is visible with all the diamonds present under shop by diamond submenu
        When I click the Diamond under the shop by diamond submenu under Wedding menu
        Then I ensure the Diamond redirects to the make your Diamond wedding rings page
    #28
    @validations
    Scenario: Checking the shop by precious Gemstone submenu under Wedding menu in the homepage
        Given I hover over the Wedding menu
        Then I Ensure that Wedding submenu dropdown is visible with all the shop by precious Gemstone present
        When I click the Emerald  under the shop by precious Gemstone submenu
        Then I ensure the Emerald redirects to the Emerald wedding rings page
    #29
    @smoketest
    Scenario: Checking the shop by Metal submenu under Wedding menu in the homepage
        Given I hover over the Wedding menu
        Then I Ensure that Wedding submenu dropdown is visible with all the Metal present
        When I click the Yellow Gold under the shop by Metal submenu
        Then I ensure the Yellow Gold redirects to the wedding ring in 14K Yellow Gold page
    #30
    @validations
    Scenario: Checking the Woman's Wedding Band Styles submenu under Wedding menu in the homepage
        Given I hover over the Wedding menu
        Then I Ensure that Wedding submenu dropdown is visible with all the Woman's Wedding Band Styles present
        When I click the View All Link under the Woman's Wedding Band Styles submenu
        Then I ensure the View All link redirects to the Men's rings page
    #31
    @validations
    Scenario: Checking the Men's Wedding Band Styles submenu under Wedding menu in the homepage
        Given I hover over the Wedding menu
        Then I Ensure that Wedding submenu dropdown is visible with all Men's Wedding Band Styles present
        When I click the View All link under the Men's Wedding Band Styles submenu
        Then I ensure the View All link redirects to the Men's Wedding Band Styles page
    #32
    @validations
    Scenario: Checking the Couples Bands submenu under Wedding menu in the homepage
        Given I hover over the Wedding menu
        Then I Ensure that Wedding submenu dropdown is visible with all Couples Bands present
        When I click the Matching Band Sets under the Couples Bands submenu
        Then I ensure the Matching Band Sets redirects to the couple bands page
    #33
    @validations
    Scenario: Checking the Ultimate Wedding Rings Guide under Wedding menu in the homepage
        Given I hover over the Wedding menu
        Then I Ensure that Wedding submenu dropdown is visible
        When I click the Read more link under Ultimate Wedding Rings Guide
        Then I ensure the Read more link under Ultimate Wedding Rings Guide redirects to the respective page
    #34
    @validations
    Scenario: Checking the How To Choose Matching Wedding Bands options under Wedding menu in the homepage
        Given I hover over the Wedding menu
        Then I Ensure that Wedding submenu dropdown is visible
        When I click the Read more link under How To Choose Matching Wedding Bands options
        Then I ensure the Read more link under How To Choose Matching Wedding Bands redirects to the respective page

    #35
    @smoketest
    Scenario: Checking the shop by diamond under Bracelets menu in the homepage
        Given I hover over the Bracelets menu
        Then I Ensure that Bracelets submenu dropdown is visible with all diamonds present under shop by diamond
        When I click the Blue Diamond under the shop by diamond submenu
        Then I ensure the Blue Diamond redirects to the Blue Diamond Bracelets page
    #36
    @validations
    Scenario: Checking the shop by precious Gemstone under Bracelets menu in the homepage
        Given I hover over the Bracelets menu
        Then I Ensure that Bracelets submenu dropdown is visible with all precious Gemstone present
        When I click the Pink Sapphire under the shop by precious Gemstone submenu
        Then I ensure the Pink Sapphire redirects to the Pink Sapphire Bracelets page
    #37
    @validations
    Scenario: Checking the semiprecious Gemstone submenu under Bracelets menu in the homepage
        Given I hover over the Bracelets menu
        Then I Ensure that Bracelets submenu dropdown is visible with all semiprecious Gemstone present
        When I click the Garnet under the shop by semiprecious Gemstone submenu
        Then I ensure the Garnet redirects to the Garnet Bracelets page
    #38
    @validations
    Scenario: Checking the shop by lab created gems submenu under Bracelets menu in the homepage
        Given I hover over the Bracelets menu
        Then I Ensure that Bracelets submenu dropdown is visible with all lab created gems present
        When I click the Moissanite under the shop by lab created gems submenu
        Then I ensure the Moissanite link redirects to the Moissanite Bracelets page
    #39
    @validations
   Scenario: Checking the Bracelet Styles submenu Bracelets menu in the homepage
        Given I hover over the Bracelets menu
        Then I Ensure that Bracelets submenu dropdown is visible with all styles present
        When I click the Bangles under the Bracelet Styles submenu
        Then I ensure the Bangles link redirects to the Bangles page
        When I click the Apple watch bands under the Bracelet Styles submenu
        Then I ensure the Apple watch bands redirects to the Apple watch bands page
        When I hover over the Bracelets menu
        And I click the Charms under the Bracelet Styles submenu
        Then I ensure the Charms redirects to the charms page
        When I hover over the Bracelets menu
        And I click the View All link under the Bracelet Styles submenu
        Then I ensure the View All link redirects to the Bracelets page
    #40
    @validations
    Scenario: Checking the Light Up The Night With Brilliant Bracelets options under Bracelets menu in the homepage
        Given I hover over the Bracelets menu
        Then I Ensure that Bracelets submenu dropdown is visible
        When I click the Read more link under Light Up The Night With Brilliant Bracelets options
        Then I ensure the Read more link under Light Up The Night With Brilliant Bracelets redirects to the respective page
    #41
    @validations
    Scenario: Checking the Styles Of Men's Bracelets To Wear In 2023 options Bracelets menu in the homepage
        Given I hover over the Bracelets menu
        Then I Ensure that Bracelets submenu dropdown is visible
        When I click the Read more link under Styles Of Men's Bracelets To Wear In 2023 options
        Then I ensure the Read more link under Styles Of Men's Bracelets To Wear In 2023 redirects to the respective page

    #42
    @validations
    Scenario: Checking the Earrings menu in the homepage
        Given I hover over the Earrings menu
        Then I Ensure that Earrings submenu dropdown is visible

    #43
    @validations
    Scenario: Checking the shop by diamond submenu under Earrings menu in the homepage
        Given I hover over the Earrings menu
        Then I Ensure that Earrings submenu dropdown is visible with all diamonds present
        When I click the Brown Diamond under the shop by diamond submenu
        Then I ensure the Brown Diamond redirects to the Brown Diamond Earrings page
    #44
    @validations
    Scenario: Checking the shop by precious Gemstone submenu under Earrings menu in the homepage
        Given I hover over the Earrings menu
        Then I Ensure that Earrings submenu dropdown is visible with all precious Gemstone present
        When I click the Emerald  under the shop by precious Gemstone submenu under earrings menu
        Then I ensure the Emerald redirects to the Emerald Earrings page
    #45
    @validations
    Scenario: Checking the shop by semiprecious Gemstone submenu under Earrings menu in the homepage
        Given I hover over the Earrings menu
        Then I Ensure that Earrings submenu dropdown is visible with all semiprecious Gemstone present
        When I click the Iolite under the shop by semiprecious Gemstone submenu
        Then I ensure the Iolite redirects to the Iolite Earrings page
    #46
    @smoketest
    Scenario: Checking the lab created gems submenu under Earrings menu in the homepage
        Given I hover over the Earrings menu
        Then I Ensure that Earrings submenu dropdown is visible with all lab created gems present
        When I click the Moissanite under the lab created gems submenu
        Then I ensure the Moissanite redirects to the Moissanite Earrings page
    #47
    @validations
    Scenario: Checking the earring styles submenu under Earrings menu in the homepage
        Given I hover over the Earrings menu
        Then I Ensure that Earrings submenu dropdown is visible with all earring styles present
        When I click the Hoop earrings under the earring styles submenu
        Then I ensure the Hoop earrings redirects to the Hoop earrings page
    #48
    @validations
    Scenario: Checking the Top Diamond Stud Earrings under Earrings menu in the homepage
        Given I hover over the Earrings menu
        Then I Ensure that Earrings submenu dropdown is visible
        When I click the Read more link under the Top Diamond Stud Earrings
        Then I ensure the Read more link underTop Diamond Stud Earrings redirects to the respective page
    #49
    @validations
    Scenario: Checking the Earrings For Her options under Earrings menu in the homepage
        Given I hover over the Earrings menu
        Then I Ensure that Earrings submenu dropdown is visible
        When I click the Read more link under Earrings For Her options
        Then I ensure the Read more link under Earrings For Her redirects to the respective page

    #50
    @validations
    Scenario: Checking the Necklaces menu in the homepage
        Given I hover over the Necklaces menu
        Then I Ensure that Necklaces submenu dropdown is visible
    #51
    @validations
    Scenario: Checking the shop by diamond submenu under Necklaces menu in the homepage
        Given I hover over the Necklaces menu
        Then I Ensure that Necklaces submenu dropdown is visible with all shop by diamond present
        When I click the Diamond under the shop by diamond submenu
        Then I ensure the Diamond redirects to the Diamond Necklaces and Pendants page

    #52
    @validations
    Scenario: Checking the shop by precious Gemstone submenu under Necklaces menu in the homepage
        Given I hover over the Necklaces menu
        Then I Ensure that Necklaces submenu dropdown is visible with precious Gemstone present
        When I click the White Sapphire under the shop by precious Gemstone submenu
        Then I ensure the White Sapphire redirects to the White Sapphire Necklaces and Pendants page
    #53
    @validations
    Scenario: Checking the shop by semiprecious Gemstone submenu under Necklaces menu in the homepage
        Given I hover over the Necklaces menu
        Then I Ensure that Necklaces submenu dropdown is visible with semiprecious Gemstone present
        When I click the Citrine under the shop by semiprecious Gemstone submenu
        Then I ensure the Citrine redirects to the Citrine Necklaces and Pendants page
    #54
    @validations
    Scenario: Checking the shop by lab created gems submenu under Necklaces menu in the homepage
        Given I hover over the Necklaces menu
        Then I Ensure that Necklaces submenu dropdown is visible with lab created gems present
        When I click the Moissanite under the lab created gems submenu under Necklaces menu
        Then I ensure the Moissanite redirects to the Moissanite Necklaces and Pendants page
    #55
    @smoketest
    Scenario: Checking the shop by Necklaces styles submenu under Necklaces menu in the homepage
        Given I hover over the Necklaces menu
        Then I Ensure that Necklaces submenu dropdown is visible
        When I click the Cross necklaces under the Necklaces styles submenu
        Then I ensure the Cross necklaces redirects to the Cross necklaces and pendants page

    #56
    @validations
    Scenario: Checking the shop by Heart Necklace Guide options under Necklaces menu in the homepage
        Given I hover over the Necklaces menu
        Then I Ensure that Necklaces submenu dropdown is visible
        When I click the Read more link under the Heart Necklace Guide options
        Then I ensure the Read more link under Heart Necklace Guide redirects to the respective page

    #57
    @validations
    Scenario: Checking the Men's menu in the homepage
        Given I hover over the Men's menu
        Then I Ensure that Men's submenu dropdown is visible
    #58
    @validations
    Scenario: Checking the shop by diamond submenu under Men's menu in the homepage
        Given I hover over the Men's menu
        Then I Ensure that Men's submenu dropdown is visible
        When I click the Black Diamond under the shop by diamond submenu under Men's menu
        Then I ensure the Black Diamond redirects to the Men's Black Diamond Ring page
    #59
    @validations
    Scenario: Checking the shop by precious gemstone submenu under Men's menu in the homepage
        Given I hover over the Men's menu
        Then I Ensure that Men's submenu dropdown is visible with all precious gemstone present
        When I click the white Sapphire under the shop by precious Gemstone submenu
        Then I ensure the White Sapphire redirects to the Men's white sapphire rings page
    #60
    @validations
    Scenario: Checking the shop by semiprecious Gemstone submenu under Men's menu in the homepage
        Given I hover over the Men's menu
        Then I Ensure that Men's submenu dropdown is visible with all semiprecious gemstone present
        When I click the Black Onyx under the shop by semiprecious Gemstone submenu
        Then I ensure the Black Onyx redirects to the Men's Black Onyx rings page
    #61
    @validations
    Scenario: Checking the shop by lab created gems submenu under Men's menu in the homepage
        Given I hover over the Men's menu
        Then I Ensure that Men's submenu dropdown is visible with all lab created gems present
        When I click the Moissanite under the lab created gems submenu under mens menu
        Then I ensure the Moissanite redirects to the Men's Moissanite rings page
    #62
    @validations
    Scenario: Checking the shop by metals submenu under Men's menu in the homepage
        Given I hover over the Men's menu
        Then I Ensure that Men's submenu dropdown is visible with all metals present
        When I click the Rose Gold under the metals submenu
        Then I ensure the Rose Gold redirects to the 14K Men's Rose Gold rings page
    #63
    @validations
    Scenario: Checking the shop by styles submenu under Men's menu in the homepage
        Given I hover over the Men's menu
        Then I Ensure that Men's submenu dropdown is visible with all mens styles present
        When I click the Signet rings under the shop by styles submenu
        Then I ensure the Signet rings redirects to the Men's Signet rings page
    #64
    @validations
    Scenario: Checking the How To Choose A Mens Birthday Ring under Men's menu in the homepage
        Given I hover over the Men's menu
        Then I Ensure that Men's submenu dropdown is visible
        When I click the Read more link under the How To Choose A Mens Birthday Ring options
        Then I ensure the Read more link under How To Choose A Mens Birthday Ring redirects to the respective page
    #65
    @smoketest
    Scenario: Checking the Men's Luxury Guide options submenu under Men's menu in the homepage
        Given I hover over the Men's menu
        Then I Ensure that Men's submenu dropdown is visible
        When I click the Read more link under the Men's Luxury Guide options
        Then I ensure the Read more link under Men's Luxury Guide redirects to the respective page

    #66
    @validations
    Scenario: Checking the Shop Rings section in the homepage and ensuring the Diamondere logo is clickable or not
        Given I Click Shop Rings button in the homepage
        Then I ensure the Shop Rings button redirects to page 2 -rings
        When I click the Diamondere logo
        Then I ensure clicking the Diamondere logo redirects to the Homepage of Diamondere

    #67
    @validations
    Scenario: Checking the Rings collection in the homepage
        Given I click the shop now link under Black Gold Men's Rings
        Then I ensure the shop now link under Black Gold Men's Rings redirects to the Black Gold Men's Rings page
        When I click the shop now link under Toi et Moi Collection
        Then I ensure the shop now link under Toi et Moi Collection redirects to the Toi et Moi rings page
        When I click the shop now link under Vintage rings
        Then I ensure the shop now link under Vintage rings redirects to the Vintage rings page

    #68
    @validations
    Scenario: Checking the Birthstone Collections in the homepage
        Given I select the Shop Now link under Birthstone Collections
        Then I ensure the Birthstone Jewelry Guide text and the Birthstone text of months are present

    #69
    @validations
    Scenario: validating the Check Your Relationship gemstone link
        Given I select the Shop Now link under Birthstone Collections
        When I click the Check Your Relationship gemstone link
        Then I ensure it redirects to the expected page and the Discover your Relationship Gemstone section is present
    #70
    @smoketest
    Scenario:Entering the fields in Check Your Relationship gemstone
        Given I select the Shop Now link under Birthstone Collections
        When I click the Check Your Relationship gemstone link
        Then I ensure it redirects to the expected page and the Discover your Relationship Gemstone section is present
        And I select the Month from the Your birth month and day dropdown
        And I select the Day from the Your birth month and day dropdown
        And I select the Month from the Your Partner's birth month and day dropdown
        And I select the Day from the Your Partner's birth month and day dropdown
        Then I ensure the Zodiac images and Gemstone image and text are present

    #71
    @validations
    Scenario: Validating the Share Results section under Check Your Relationship gemstone
        Given I select the Shop Now link under Birthstone Collections
        When I click the Check Your Relationship gemstone link
        And I select the Month from the Your birth month and day dropdown
        And I select the Day from the Your birth month and day dropdown
        And I select the Month from the Your Partner's birth month and day dropdown
        And I select the Day from the Your Partner's birth month and day dropdown
        Then I ensure the Share Results section and Email to yourself or your partner section are present
        When I enter the respective mail in the Email to yourself or your partner
        And I click the send button in the Email field
        Then I ensure clicking the send button displays the success message

    #72
    @validations
    Scenario: Validating the Shared Jewel section under Check Your Relationship gemstone
        Given I select the Shop Now link under Birthstone Collections
        When I click the Check Your Relationship gemstone link
        And I select the Month from the Your birth month and day dropdown
        And I select the Day from the Your birth month and day dropdown
        And I select the Month from the Your Partner's birth month and day dropdown
        And I select the Day from the Your Partner's birth month and day dropdown
        Then I ensure the Shop Gemstone Rings,necklaces and earrings are present
        When I click the Shop Gemstone Rings
        Then I ensure clicking the Shop Gemstone Rings redirects to the respective page
        When I click the Shop Gemstone Necklaces
        Then I ensure clicking the Shop Gemstone Necklaces redirects to the respective page
        When I click the Shop Gemstone Earrings
        Then I ensure clicking the Shop Gemstone Earrings redirects to the respective page

    #73
    @validations
    Scenario: Checking the shop by natural gemstone collections
        Given I move to the shop by natural gemstone collections text is present
        When I click the shop now link under Black diamond rings
        Then I ensure the shop now link under Black diamond rings redirects to the Black diamond rings page

    #74
    @validations
    Scenario: Checking the Ruby rings under shop by natural gemstone collections
     Given I move to the shop by natural gemstone collections text is present
        When I click the shop now link under Ruby rings
        Then I ensure the shop now link under Ruby rings redirects to the Ruby rings page

    #75
    @validations
    Scenario: Checking the sapphire rings under shop by natural gemstone collections
     Given I move to the shop by natural gemstone collections text is present
        When I click the shop now link under Sapphire rings
        Then I ensure the shop now link under Sapphire rings redirects to the Sapphire rings page

    #76
    @validations
    Scenario: Checking the Emerald rings under shop by natural gemstone collections
     Given I move to the shop by natural gemstone collections text is present
        When I click the shop now link under Emerald rings
        Then I ensure the shop now link under Emerald rings redirects to the Emerald rings page

    #77
    @validations
    Scenario: Checking the Amethyst rings under shop by natural gemstone collections
     Given I move to the shop by natural gemstone collections text is present
        When I Click the right caret icon
        And I click the shop now link under Amethyst rings
        And I ensure the shop now link under Amethyst rings redirects to the Amethyst rings page

    #78
    @validations
    Scenario: Checking the  Pink Tourmaline rings under shop by natural gemstone collections
     Given I move to the shop by natural gemstone collections text is present
      When I Click the right caret icon two times
        And I click the shop now link under Pink Tourmaline rings
        Then I ensure the shop now link under Pink Tourmaline rings redirects to the Pink Tourmaline rings page

    #79
    @validations
    Scenario: Checking the Morganite rings under shop by natural gemstone collections
     Given I move to the shop by natural gemstone collections text is present
      When I Click the right caret icon three times
        And I click the shop now link under Morganite rings
        Then I ensure the shop now link under Morganite rings redirects to the Morganite rings page

    #80
    @validations
    Scenario: Checking the  Peridot rings under shop by natural gemstone collections
     Given I move to the shop by natural gemstone collections text is present
      When I Click the right caret icon five times
       And I click the shop now link under Peridot rings
        Then I ensure the shop now link under Peridot rings redirects to the Peridot rings page

    #81
    @validations
    Scenario: Checking the Alexandrite rings under shop by natural gemstone collections
     Given I move to the shop by natural gemstone collections text is present
      When I Click the right caret icon four times
       And I click the shop now link under Alexandrite rings
        Then I ensure the shop now link under Alexandrite rings redirects to the Alexandrite rings page

    #82
    @validations
    Scenario: Checking the Aquamarine rings under shop by natural gemstone collections
     Given I move to the shop by natural gemstone collections text is present
     When I Click the right caret icon six times
       And I click the shop now link under Aquamarine rings
        Then I ensure the shop now link under Aquamarine rings redirects to the Aquamarine rings page

    #83
    @validations
    Scenario: Checking the Rings link/image under Featured categories in the Diamondere homepage
        Given I move to the Featured categories
        When I Click the Rings link and image under Featured categories
        Then I ensure clicking the Rings link and image redirects to the Rings page

    #84
    @validations
    Scenario: Checking the Earrings link/image under Featured categories in the Diamondere homepage
        Given I Click the Earrings link and image under Featured categories
        Then I ensure clicking the Earrings link and image redirects to the Earrings page

    #85
    @validations
    Scenario: Checking the Bracelets link/image under Featured categories in the Diamondere homepage
        Given I Click the Bracelets link and image under Featured categories
        Then I ensure clicking the Bracelets link and image redirects to the Bracelets page

    #86
    @validations
    Scenario: Checking the Necklaces link/image under Featured categories in the Diamondere homepage
        Given I Click the Necklaces link and image under Featured categories
        Then I ensure clicking the Necklaces link and image redirects to the Necklaces page

    #87
    @validations
    Scenario: Checking the Men's rings link/image under Featured categories in the Diamondere homepage
        Given I Click the Men's rings link and image under Featured categories
        Then I ensure clicking the Men's link and image redirects to the Men's page

    #88
    @validations
    Scenario: Checking the Eternity bands link/image under Featured categories in the Diamondere homepage
        Given I Click the Eternity bands link and image under Featured categories
        Then I ensure clicking the Eternity bands link and image redirects to the Eternity bands page

    #89
    @validations
    Scenario: Checking the GIA Natural Diamonds link under Tell Her Its Forever section in the Diamondere homepage
        Given I move to the Tell Her Its Forever section and text
        When I click the GIA Natural Diamonds link
        Then I ensure clicking the GIA Natural Diamonds link redirects to the Make Your Diamond Engagement rings page

    #90
    @validations
    Scenario: Checking the IGI Lab Diamonds link under Tell Her Its Forever section in the Diamondere homepage
      Given I move to the Tell Her Its Forever section and text
        When I Click the IGI Lab Diamonds link
        Then I ensure clicking the IGI Lab Diamonds link redirects to the Make Your lab Diamond Engagement rings page

    #91
    @validations
    Scenario: Checking the Beautiful handcrafted link under Tell Her Its Forever section in the Diamondere homepage
        Given I Click the Beautiful handcrafted link
        Then I ensure clicking the Beautiful handcrafted link redirects to the Make Your Diamond Engagement rings page

    #92
    @validations
    Scenario: Checking the Diamond Shape section in the Diamondere homepage
        Given I move to the Diamond Shape section text
        When I Click the Round cut Diamond shape
        Then I ensure clicking the Round cut Diamond shape redirects to the Make Your Diamond Engagement rings page

    #93
    @validations
    Scenario: Checking the Oval cut under Diamond Shape section in the Diamondere homepage
        Given I Click the Oval cut Diamond shape
        Then I ensure clicking the Oval cut Diamond shape redirects to the Make Your Diamond Engagement rings page

    #94
    @validations
    Scenario: Checking the Cushion cut under Diamond Shape section in the Diamondere homepage
        Given I Click the Cushion cut Diamond shape
        Then I ensure clicking the Cushion cut Diamond shape redirects to the Make Your Diamond Engagement rings page

    #95
    @validations
    Scenario: Checking the Princess cut under Diamond Shape section in the Diamondere homepage
        Given I Click the Princess cut Diamond shape
        Then I ensure clicking the Princess cut Diamond shape redirects to the Make Your Diamond Engagement rings page

    #96
    @validations
    Scenario: Checking the Emerald cut under Diamond Shape section in the Diamondere homepage
        Given I Click the Emerald cut Diamond shape
        Then I ensure clicking the Emerald cut Diamond shape redirects to the Make Your Diamond Engagement rings page

    #97
    @validations
    Scenario: Checking the Heart cut under Diamond Shape section in the Diamondere homepage
        Given I Click the Heart cut Diamond shape
        Then I ensure clicking the Heart cut Diamond shape redirects to the Make Your Diamond Engagement rings page

    #98
    @validations
    Scenario: Checking the Pear cut under Diamond Shape section in the Diamondere homepage
        Given I Click the Pear cut Diamond shape
        Then I ensure clicking the Pear cut Diamond shape redirects to the Make Your Diamond Engagement rings page

    #99
    @validations
    Scenario: Checking the Men's Ring section in the Diamondere homepage
        Given I move to the Men's Ring section
        When I Click the See Men's Ring button in the Homepage
        Then I ensure the See Men's Ring button redirects to the Men's rings page

    #100
    @validations
    Scenario: Checking the Gifts for her section in the Diamondere homepage
        Given I move to the Gifts for her section
        When I Click the See Gifts for her button in the Homepage
        Then I ensure the See Gifts for her button redirects to the Ruby rings page

    #101
    @validations
    Scenario: Checking the Discover Diamondere section in the Diamondere homepage
        Given I move to the Discover Diamondere section
        When I Click the Our legacy button under the Discover Diamondere section
        Then I ensure the Our legacy button redirects to the respective page

    #102
    @validations
    Scenario: Checking the blog articles link under LET US HELP GUIDE YOU section in the Diamondere homepage
        Given I Click the blog articles link under the the Let us help guide you section
        Then I Ensure blog articles link is redirecting to the Diamondere blog page

    #103
    @validations
    Scenario: Checking the Lab Vs. Natural Diamond Guide under LET US HELP GUIDE YOU section in the Diamondere homepage
        Given I move to the Let us help guide you section
        When I Click the learn more link under Lab Vs. Natural Diamond Guide present in the Let us help guide you section
        Then I Ensure learn more link under Lab Vs. Natural Diamond Guide redirecting to the page - Diff between Lab and Natural diamonds

    #104
    @validations
    Scenario: Checking the Toi et Moi Ring under LET US HELP GUIDE YOU section in the Diamondere homepage
        Given I move to the Let us help guide you section
        When I Click the learn more link under the Toi et Moi Ring present in Let us help guide you section
        Then I Ensure learn more link under the Toi et Moi Ring is redirecting to the page contains detail of Toi et Moi Rings

    #105
    @validations
    Scenario: Checking the Engagement Ring Cost Guide under LET US HELP GUIDE YOU section in the Diamondere homepage
        Given I move to the Let us help guide you section
        When I Click the learn more link under the Engagement Ring Cost Guide present in Let us help guide you section
        Then I Ensure learn more link under Engagement Ring Cost Guide is redirecting to the page contains detail of Engagement ring

    #106
    @validations
    Scenario: Checking the Why Diamondere link under Experience The Diamondère Difference section in the Diamondere homepage
        Given I move to Experience the Diamondere Difference section
        When I click the Why Diamondere link
        Then I Ensure selecting Why Diamondere link must redirect to the expected page

    #107
    @validations
    Scenario: Checking the See our FAQs link under Experience The Diamondère Difference section in the Diamondere homepage
        Given I move to Experience the Diamondere Difference section
        When I click the See our FAQs link
        Then I Ensure selecting See our FAQs link must redirect to the FAQ page

    #108
    @validations
    Scenario: Checking the Sustainability link under Experience The Diamondère Difference section in the Diamondere homepage
        Given I move to Experience the Diamondere Difference section
        When I click the Sustainability link
        Then I Ensure selecting Sustainability link must redirect to the expected page

    #109
    @validations
    Scenario: Checking the  Contact Us link under Experience The Diamondère Difference section in the Diamondere homepage
        Given I move to Experience the Diamondere Difference section
        When I click the Contact Us link
        Then I Ensure selecting Contact us link must redirect to the expected page

    #110
    @validations
    Scenario: Checking the Find Style That Inspires You section in the Diamondere homepage
        Given I move to Find style that inspires you section
        Then I ensure the five images are present
        When I click an image under Find style that inspires you
        Then I ensure it redirects to the Diamondere Instagram page

    #111
    @validations
    Scenario: Checking the footer section in the Diamondere homepage
        Given I move to footer section
        Then I ensure the About us, Education, Policies, Customer care and Join the Diamondere Community sections are present

    #112
    @validations
    Scenario: Checking the Our Legacy under About us column in the footer section of Diamondere homepage
        Given I move to footer section
        When I click the text link Our Legacy
        Then I ensure clicking the text link Our Legacy redirects to the respective page

    #113
    @validations
    Scenario: Checking the Why Diamondere link under About us column in the footer section of Diamondere homepage
        Given I move to footer section
        When I click the Why Diamondere link in footer
        Then I Ensure selecting Why Diamondere link must redirect to the expected page

    #114
    @validations
    Scenario: Checking the Sustainability under About us column in the footer section of Diamondere homepage
        Given I move to footer section
        When I click the Sustainability link in footer
        Then I Ensure selecting Sustainability link must redirect to the expected page

    #115
    @validations
    Scenario: Checking the Ring Reviews under About us column in the footer section of Diamondere homepage
        Given I move to footer section
        When I click the Ring Reviews text link
        Then I Ensure selecting Ring Reviews link must redirect to the Reviews for Diamondere Rings page

    #116
    @validations
    Scenario: Checking the Engagement Reviews under About us column in the footer section of Diamondere homepage
        Given I move to footer section
        When I click the Engagement Reviews text link
        Then I Ensure selecting Engagement Reviews link must redirect to the Reviews for Diamondere Engagament Rings page

    #117
    @validations
    Scenario: Checking the Men's Ring Reviews under About us column in the footer section of Diamondere homepage
        Given I move to footer section
        When I click the Men's Ring Reviews text link
        Then I Ensure selecting Men's Ring Reviews link must redirect to the Reviews for Diamondere Men's Rings page

    #118
    @validations
    Scenario: Checking the Diamond Guide under Education column in the footer section of Diamondere homepage
        Given I move to footer section
        Then I ensure the Education text is present
        When I click the text link Diamond Guide
        Then I ensure clicking the text link Diamond Guide redirects to the respective page

    #119
    @validations
    Scenario: Checking the Colored Gems Guide under Education column in the footer section of Diamondere homepage
        Given I move to footer section
        When I click the text link Colored Gems Guide
        Then I ensure clicking the text link Colored Gems Guide redirects to the respective page

    #120
    @validations
    Scenario: Checking the Birthstones Guide under Education column in the footer section of Diamondere homepage
        Given I move to footer section
        When I click the text link Birthstones Guide
        Then I ensure clicking the text link Birthstones Guide redirects to the respective page

    #121
    @validations
    Scenario: Checking the Metal Guide under Education column in the footer section of Diamondere homepage
        Given I move to footer section
        When I click the text link Metal Guide
        Then I ensure clicking the text link Metal Guide redirects to the respective page

    #122
    @validations
    Scenario: Checking the Size Guide under Education column in the footer section of Diamondere homepage
        Given I move to footer section
        When I click the text link Size Guide
        Then I ensure clicking the text link size Guide redirects to the respective page

    #123
    @validations
    Scenario: Checking the Free Shipping under Policies column in the footer section of Diamondere homepage
        Given I move to footer section
        Then I ensure the Policies text is present
        When I click the text link Free Shipping
        Then I ensure clicking the text link Free Shipping redirects to the respective page

    #124
    @validations
    Scenario: Checking the Free 100 Day Returns under Policies column in the footer section of Diamondere homepage
        Given I move to footer section
        When I click the text link Free 100 Day Returns in footer
        Then I ensure clicking the text link Free 100 Day Returns redirects to the respective page

    #125
    @validations
    Scenario: Checking the Free Warranty under Policies column in the footer section of Diamondere homepage
        Given I move to footer section
        When I click the text link Free Warranty
        Then I ensure clicking the text link Free Warranty redirects to the respective page

    #126
    @validations
    Scenario: Checking the Privacy Policy under Policies column in the footer section of Diamondere homepage
        Given I move to footer section
        When I click the text link Privacy Policy
        Then I ensure clicking the text link Privacy Policy redirects to the respective page

    #127
    @validations
    Scenario: Checking the Terms & Conditions under Policies column in the footer section of Diamondere homepage
        Given I move to footer section
        When I click the text link Terms & Conditions
        Then I ensure clicking the text link Terms & Conditions redirects to the respective page

    #128
    @validations
    Scenario: Checking the Accessibility under Policies column in the footer section of Diamondere homepage
        Given I move to footer section
        When I click the text link Accessibility
        Then I ensure clicking the text link Accessibility redirects to the respective page

    #129
    @validations
    Scenario: Checking the Contact Us under CUSTOMER CARE column in the footer section of Diamondere homepage
        Given I move to footer section
        When I click the Contact Us link in footer
        Then I Ensure selecting Contact us link in footer must redirect to the expected page

    #130
    @validations
    Scenario: Checking the FAQs link under CUSTOMER CARE column in the footer section of Diamondere homepage
        Given I move to footer section
        Given I click the See our FAQs link in footer
        Then I Ensure selecting See our FAQs link in footer must redirect to the FAQ page

    #131
    @validations
    Scenario: Checking the Financing Options under CUSTOMER CARE column in the footer section of Diamondere homepage
        Given I move to footer section
        When I click the text link Financing Options
        Then I ensure clicking the text link Financing Options redirects to the respective page

    #132
    @validations
    Scenario: Checking the Free Re-Sizing under CUSTOMER CARE column in the footer section of Diamondere homepage
        Given I move to footer section
        When I click the text link Free Re-Sizing
        Then I ensure clicking the text link Free Re-Sizing redirects to the respective page

    #133
    @validations
    Scenario: Checking the Caring For Your Jewelry under CUSTOMER CARE column in the footer section of Diamondere homepage
        Given I move to footer section
        When I click the text link Caring For Your Jewelry
        Then I ensure clicking the text link Caring For Your Jewelry redirects to the respective page

    #134
    @smoketest
    Scenario: Checking the Email address TextBox under Join the Diamondere Community column in the footer section of Diamondere homepage
        Given I move to the Join the Diamondere Community section
        When I click the Email address TextBox
        Then I ensure clicking Email address TextBox redirects to the respective page

    #135
    @validations
    Scenario: Checking the Diamondere Blog under Email address TextBox under Join the Diamondere Community column in the footer section of Diamondere homepage
        Given I move to the Join the Diamondere Community section
        When I click the text link Diamondere Blog
        Then I ensure clicking the text link Diamondere Blog redirects to the respective page

    #136
    @validations
    Scenario: Checking the Instagram Icon under Join the Diamondere Community column in the footer section of Diamondere homepage
        Given I move to the Join the Diamondere Community section
        When I click the Instagram Icon
        Then I ensure clicking the Instagram Icon redirects to the respective page

    #137
    @validations
    Scenario: Checking the Facebook icon under Join the Diamondere Community column in the footer section of Diamondere homepage
        Given I move to the Join the Diamondere Community section
        Given I click the Facebook icon
        Then I ensure clicking the Facebook icon redirects to the respective page

    #138
    @validations
    Scenario: Checking the Pinterest icon under Join the Diamondere Community column in the footer section of Diamondere homepage
        Given I move to the Join the Diamondere Community section
        Given I click the Pinterest icon
        Then I ensure clicking the Pinterest icon redirects to the respective page

    #139
    @validations
    Scenario: Validating the payment options present in the footer
        Given I move to footer section
        Then I ensure all the payment options are present
        When I click the Accredited icon in the payment section
        Then I ensure clicking the Accredited icon redirects to the Accredited business page
        When I click the Norton icon in the payment section
        Then I ensure clicking the Norton icon redirects to the Norton page
        When I click the Stripe icon in the payment section
        Then I ensure clicking the Stripe icon redirects to the stripe page
        When I click the paypal icon in the payment section
        Then I ensure clicking the paypal icon redirects to the paypal page
        When I click the American express icon in the payment section
        Then I ensure clicking the American express icon redirects to the American express page
        When I click the Master card icon in the payment section
        Then I ensure clicking the Master card icon redirects to the Master card page
        When I click the Diners club icon in the payment section
        Then I ensure clicking the Diners club icon redirects to the Diners club page
        When I click the Affirm icon in the payment section
        Then I ensure clicking the Affirm icon redirects to the Affirm page
    #140
    @validations
    Scenario:Checking the Copyrights section in the footer
        Given I move to footer section
        Then I ensure the copyrights text is present
        When I select the Disclaimer link
        Then I ensure it redirects to the Disclaimer page of Diamondere
