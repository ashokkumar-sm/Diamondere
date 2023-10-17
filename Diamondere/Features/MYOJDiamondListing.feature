
Feature: Testing MYOJ Diamond Listing Page of Diamondere

    Background: Browsing staging environment of Diamondere
        Given I browse Diamondere website
        When I remove products if already added in cart
        When I want to clear local storage

    # START WITH A DIAMOND & LAB DIAMOND
    #Scenario - 1
    @validations
    Scenario: Verifying the banner of Start with a Diamond page of Rings menu
        Given I hover over the Rings menu
        When I select Start with a Diamond under Rings menu
        Then I ensure the Make Your Diamond Engagement Ring page is displayed with the banner

    # #Scenario - 2
    @validations
    Scenario: Verifying the banner of Start with a Diamond page of Engagement menu
        Given I hover over the Engagement menu
        When I select Start with a Diamond under Engagement menu
        Then I ensure the Make Your Diamond Engagement Ring page is displayed with the engagement banner

    #Scenario - 3
    @validations
    Scenario: Verifying the banner of Start with a Diamond page of Earrings menu
        Given I hover over the Earrings menu
        When I select Start with a Diamond under Earrings menu
        Then I ensure the Make Your Diamond Earrings page is displayed with the banner

    #Scenario - 4
    @validations
    Scenario: Verifying the banner of Start with a Lab Diamond page of Necklaces menu
        Given I hover over the Necklaces menu
        When I select Start with a Lab Diamond under Necklaces menu
        Then I ensure the Make Your Lab Diamond Necklaces page is displayed with the banner

    #Scenario - 5
    @validations
    Scenario: Verifying the banner of Start with a Lab Diamond page of Men's menu
        Given I hover over the Men's menu
        When I select Start with a Lab Diamond under Men's menu
        Then I ensure the Make Your Lab Diamond Men's Rings page is displayed with the banner

    #Scenario - 6
    @smoketest
    Scenario: Validating the breadcrumb of Start with a Diamond page of all menus
        Given I browse Start with a Diamond page of Rings menu
        Then I verify the presence of breadcrumb for rings and the number of available diamonds
        When I click Home and Loose Diamonds links in breadcrumb
        Then I ensure the links redirects to respective Home and Loose Diamonds page
        When I browse Start with a Diamond page of Earrings menu
        Then I verify the presence of breadcrumb for earrings and the number of available diamonds
        When I click Home and Loose Diamonds links in breadcrumb
        Then I ensure the links redirects to respective Home and Loose Diamonds page
        When I browse Start with a Diamond page of Necklaces menu
        Then I verify the presence of breadcrumb for necklaces and the number of available diamonds
        When I click Home and Loose Diamonds links in breadcrumb
        Then I ensure the links redirects to respective Home and Loose Diamonds page
        When I browse Start with a Diamond page of Men's menu
        Then I verify the presence of breadcrumb for men's rings and the number of available diamonds
        When I click Home and Loose Diamonds links in breadcrumb
        Then I ensure the links redirects to respective Home and Loose Diamonds page

    #Scenario - 7
    @smoketest
    Scenario: Validating the breadcrumb of Start with a Lab Diamond page of all menus
        Given I browse Start with a Lab Diamond page of Rings menu
        Then I verify the presence of breadcrumb for rings and the number of available lab diamonds
        When I click Home and Loose Lab Diamonds links in breadcrumb
        Then I ensure the links redirects to respective Home and Loose Lab Diamonds page
        When I browse Start with a Lab Diamond page of Earrings menu
        Then I verify the presence of breadcrumb for earrings and the number of available lab diamonds
        When I click Home and Loose Lab Diamonds links in breadcrumb
        Then I ensure the links redirects to respective Home and Loose Lab Diamonds page
        When I browse Start with a Lab Diamond page of Necklaces menu
        Then I verify the presence of breadcrumb for necklaces and the number of available lab diamonds
        When I click Home and Loose Lab Diamonds links in breadcrumb
        Then I ensure the links redirects to respective Home and Loose Lab Diamonds page
        When I browse Start with a Lab Diamond page of Men's menu
        Then I verify the presence of breadcrumb for men's rings and the number of available lab diamonds
        When I click Home and Loose Lab Diamonds links in breadcrumb
        Then I ensure the links redirects to respective Home and Loose Lab Diamonds page

    #Scenario - 8
    @smoketest @validations
    Scenario: Start with a Diamond - Validating the heading tab with icons of all menus
        Given I browse Start with a Diamond page of Rings menu
        Then I verify the Diamond and Settings tab with diamond and ring icons
        When I browse Start with a Diamond page of Earrings menu
        Then I verify the Diamond and Settings tab with diamond and earring icons
        When I browse Start with a Diamond page of Necklaces menu
        Then I verify the Diamond and Settings tab with diamond and necklace icons
        When I browse Start with a Diamond page of Men's menu
        Then I verify the Diamond and Settings tab with diamond and men's ring icons

    #Scenario - 9
    @smoketest @validations
    Scenario: Start with a Lab Diamond - Validating the heading tab with icons of all menus
        Given I browse Start with a Lab Diamond page of Rings menu
        Then I verify the Lab Diamond and Settings tab with diamond and ring icons
        When I browse Start with a Lab Diamond page of Earrings menu
        Then I verify the Lab Diamond and Settings tab with diamond and earring icons
        When I browse Start with a Lab Diamond page of Necklaces menu
        Then I verify the Lab Diamond and Settings tab with diamond and necklace icons
        When I browse Start with a Lab Diamond page of Men's menu
        Then I verify the Lab Diamond and Settings tab with diamond and men's ring icons

    #Scenario - 10
    @validations
    Scenario: Start with a Diamond - Validating the "Ways to Save More" section of Rings and Men's menus
        Given I browse Start with a Diamond page of Rings menu
        Then I verify the Ways to Save More section along with the dropdown options for rings
        When I browse Start with a Diamond page of Men's menu
        Then I verify the Ways to Save More section along with the dropdown options for men's rings

    #Scenario - 11
    @validations
    Scenario: Start with a Lab Diamond - Validating the "Ways to Save More" section of Earrings and Necklaces menus
        Given I browse Start with a Lab Diamond page of Earrings menu
        Then I verify the Ways to Save More section along with the dropdown options
        When I browse Start with a Lab Diamond page of Necklaces menu
        Then I verify the Ways to Save More section along with the dropdown options

    #Scenario - 12
    @validations
    Scenario: Start with a Diamond - Rings - Ensure hovering over "Ways to Save More" displays the popup with possible ways to save
        Given I browse Start with a Diamond page of Rings menu
        When I hover over Ways to Save More text
        Then I verify the popup with possible ways to save for rings are displayed

    #Scenario - 13
    @validations
    Scenario: Start with a Lab Diamond - Earring & Necklaces - Ensure hovering over "Ways to Save More" displays the popup with possible ways to save
        Given I browse Start with a Lab Diamond page of Earrings menu
        When I hover over Ways to Save More text
        Then I verify the popup with possible ways to save are displayed
        When I browse Start with a Lab Diamond page of Necklaces menu
        When I hover over Ways to Save More text
        Then I verify the popup with possible ways to save are displayed

    #Scenario - 14
    @validations
    Scenario: Start with a Diamond - Men's Rings - Ensure hovering over "Ways to Save More" displays the popup with possible ways to save
        Given I browse Start with a Diamond page of Men's menu
        When I hover over Ways to Save More text
        Then I verify the popup with possible ways to save for men's rings are displayed

    #Scenario - 15
    @validations
    Scenario: Ensure Bands selection options are not displayed in the start with a diamond pages of earrings and necklaces
        Given I browse Start with a Diamond page of Earrings menu
        Then I verify the Bands selection options are not displayed in the Ways to Save More section
        When I browse Start with a Diamond page of Necklaces menu
        Then I verify the Bands selection options are not displayed in the Ways to Save More section

    #Scenario - 16
    @validations
    Scenario: Ensure Bands selection options are displayed based on the category chosen
        Given I browse Start with a Lab Diamond page of Rings menu
        When I hover over Bands selection dropdown
        Then I ensure the options are displayed for custom rings
        When I browse Start with a Lab Diamond page of Men's menu
        And I hover over Bands selection dropdown
        Then I ensure the options are displayed for custom men's rings

    #Scenario - 17
    @smoketest @validations
    Scenario: Validating whether the Ways to Save More dropdowns are pre-selected with No Saving options or not
        Given I browse Start with a Diamond page of Rings menu
        Then I ensure the Ways to Save More dropdowns are pre-selected with No Saving options
        When I browse Start with a Diamond page of Earrings menu
        Then I ensure the two Ways to Save More dropdowns are pre-selected with No Saving options
        When I browse Start with a Lab Diamond page of Necklaces menu
        Then I ensure the two Ways to Save More dropdowns are pre-selected with No Saving options
        When I browse Start with a Lab Diamond page of Men's menu
        Then I ensure the Ways to Save More dropdowns are pre-selected with No Saving options

    #Scenario - 18
    @validations
    Scenario: Ensure "Saving" column is displayed in the diamond listing only when the "Easy" delivery option is selected
        Given I browse Start with a Lab Diamond page of Rings menu
        Then I verify the Saving column is not displayed when Standard delivery option is selected
        When I select Easy delivery option under Ways to Save More
        Then I ensure the Saving column is displayed in the diamond listing

    #Scenario - 19
    @validations
    Scenario: Ensure selecting "Both Bands" option in Bands selection filter displays the respective tabs along with the icons
        Given I browse Start with a Diamond page of Rings menu
        When I select Both Bands option under Ways to Save More
        Then I ensure the men's and women's band tabs along with the icons are displayed

    #Scenario - 20
    @validations
    Scenario: Ensure selecting "Men's Band" or "Women's Band" option in Bands selection filter displays the respective tabs along with the icons
        Given I browse Start with a Lab Diamond page of Rings menu
        When I select Men's Band option under Ways to Save More
        Then I ensure the men's band tab along with the icon is displayed
        When I select Women's Band option under Ways to Save More of same page
        Then I ensure the women's band tab along with the icon is displayed

    #Scenario - 21
    @validations
    Scenario: Ensure the Currently saving percentage is displayed near Ways to Save More
        Given I browse Start with a Diamond page of Rings menu
        When I select multiple savings option under Ways to Save More
        Then I ensure the overall saving percentage is displayed

    #Scenario - 22
    @validations
    Scenario: Ensure the Currently saving text is not displayed near Ways to Save More when no saving option is selected
        Given I browse Start with a Diamond page of Men's menu
        Then I ensure the overall saving percentage is not displayed

    #Scenario - 23
    @validations
    Scenario: Ensure the MYOJ page updates when navigating from one category to other category
        Given I browse Start with a Lab Diamond page of Earrings menu
        When I hover over the Necklaces menu
        And I select Start with a Lab Diamond under Necklaces menu
        Then I ensure the MYOJ page updates from Earrings to Necklaces

    #Scenario - 24
    @validations
    Scenario: Ensure the option chosen in the Ways to Save More section is not changed while choosing another shape filter
        Given I browse Start with a Diamond page of Rings menu
        When I select Both Bands option under Ways to Save More
        And I select Oval shape filter
        Then I ensure the option chosen in the Ways to Save More section is not changed

    #Scenario - 25
    @validations
    Scenario: Validating the presence of diamond filters along with the options on the Start with a Diamond and Lab Diamond pages
        Given I browse Start with a Diamond page of Earrings menu
        Then I ensure the few filters are present in the page
        When I browse Start with a Lab Diamond page of Men's menu
        Then I ensure the few filters are present in the page

    #Scenario - 26
    @validations
    Scenario: Ensure hovering over the diamond filter names displays a preview text description
        Given I browse Start with a Diamond page of Rings menu
        When I select More Filters button
        And I hover over each filter name
        Then I ensure the preview text description is displayed

    #Scenario - 27
    @smoketest
    Scenario: Clarity filter - Validate clicking "View Details" link in the preview displays a popup with the detailed description
        Given I browse Start with a Lab Diamond page of Necklaces menu
        When I hover over Clarity filter
        And I click View Details link in the preview of Clarity filter
        Then I ensure the Clarity popup with detailed description is displayed
        When I click the X button in the filter description popup
        Then I ensure the filter description popup is closed

    #Scenario - 28
    @validations
    Scenario: Color filter - Validate clicking "View Details" link in the preview displays a popup with the detailed description
        Given I browse Start with a Lab Diamond page of Men's menu
        When I hover over Color filter
        And I click View Details link in the preview of Color filter
        Then I ensure the Color popup with detailed description is displayed
        When I click the X button in the filter description popup
        Then I ensure the filter description popup is closed

    #Scenario - 29
    @smoketest
    Scenario: Symmetry filter - Validate clicking "View Details" link in the preview displays a popup with the detailed description
        Given I browse Start with a Diamond page of Earrings menu
        When I select More Filters button
        And I hover over Symmetry filter
        And I click View Details link in the preview of Symmetry filter
        Then I ensure the Symmetry popup with detailed description is displayed
        When I click the X button in the filter description popup
        Then I ensure the filter description popup is closed

    #Scenario - 30
    @validations@smoketest
    Scenario: Cut filter - Validate clicking "View Details" link in the preview displays a popup with the detailed description
        Given I browse Start with a Diamond page of Men's menu
        When I select More Filters button
        And I hover over Cut filter
        And I click View Details link in the preview of Cut filter
        Then I ensure the Cut popup with detailed description is displayed
        When I click the X button in the filter description popup
        Then I ensure the filter description popup is closed

    #Scenario - 31
    @validations
    Scenario: Ensure the additional diamond filters are displayed when More Filters button is selected
        Given I browse Start with a Lab Diamond page of Rings menu
        When I select More Filters button
        Then I ensure the filters are present in the page

    #Scenario - 32
    @validations @functional
    Scenario: Ensure the applied filters are removed when Reset Filters button is selected
        Given I browse Start with a Diamond page of Earrings menu
        When I select Oval shape filter
        And I select G color filter
        Then I ensure the listing display only the Oval shaped G to M colored diamonds
        When I select Reset Filters button
        Then I ensure the diamond listing updates to the default

    #Scenario - 33
    @validations @functional
    Scenario: Ensure the diamond list and the number of available diamonds gets updated upon choosing filters
        Given I browse Start with a Diamond page of Earrings menu
        When I get the number of available diamonds
        And I select Oval shape filter
        And I select G color filter
        Then I ensure the diamond list and the number of available diamonds gets updated

    #Scenario - 34
    @smoketest @validations
    Scenario: Validating the Gems filter in Start with a Diamond and Lab Diamond pages
        Given I browse Start with a Lab Diamond page of Earrings menu
        Then I validate the presence of Gems filter with the icons, options and pre-selected lab diamond option
        When I select Diamond gems filter
        Then I ensure the Make Your Diamond Earrings page is displayed with the banner
        When I browse Start with a Diamond page of Necklaces menu
        Then I validate the presence of Gems filter with the icons, options and pre-selected diamond option
        When I select Lab Diamond gems filter
        Then I ensure the Make Your Lab Diamond Necklaces page is displayed with the banner

    #Scenario - 35
    @smoketest @validations
    Scenario: Validating the Shapes filter in Start with a Diamond and Lab Diamond pages
        Given I browse Start with a Diamond page of Rings menu
        Then I validate the presence of Shapes filter with the pre-selected option
        When I select Oval shape filter
        Then I ensure the listing display only the Oval shaped diamonds for rings
        When I browse Start with a Lab Diamond page of Men's menu
        Then I validate the presence of Shapes filter with the pre-selected option
        When I select Oval shape filter
        Then I ensure the listing display only the Oval shaped diamonds for men's rings

    #Scenario - 36
    @smoketest @validations
    Scenario: Validate the shapes filter options are displayed as configured for different categories
        Given I browse Start with a Diamond page of Rings menu
        Then I validate the Shapes filter with the options for Rings
        Given I browse Start with a Lab Diamond page of Earrings menu
        Then I validate the Shapes filter with the options for Earrings
        Given I browse Start with a Diamond page of Necklaces menu
        Then I validate the Shapes filter with the options for Necklaces
        Given I browse Start with a Lab Diamond page of Men's menu
        Then I validate the Shapes filter with the options for Men's rings

    #Scenario - 37
    @validations
    Scenario: Rings - Ensure the Length and Breadth ranges displays the pre-fixed range according to the shape selected
        Given I browse Start with a Lab Diamond page of Rings menu
        When I select the shapes available for Rings
        Then I ensure the Length and Breadth ranges displays the pre-fixed range according to the shape selected for ring

    #Scenario - 38
    @validations
    Scenario: Earrings - Ensure the Length and Breadth ranges displays the pre-fixed range according to the shape selected
        Given I browse Start with a Diamond page of Earrings menu
        When I select the shapes available for Earrings
        Then I ensure the Length and Breadth ranges displays the pre-fixed range according to the shape selected for earring

    #Scenario - 39
    @validations
    Scenario: Necklaces - Ensure the Length and Breadth ranges displays the pre-fixed range according to the shape selected
        Given I browse Start with a Lab Diamond page of Necklaces menu
        When I select the shapes available for Necklaces
        Then I ensure the Length and Breadth ranges displays the pre-fixed range according to the shape selected for necklace

    # #Scenario - 40
    @validations
    Scenario: Men's Rings - Ensure the Length and Breadth ranges displays the pre-fixed range according to the shape selected
        Given I browse Start with a Diamond page of Men's menu
        When I select the shapes available for Men's rings
        Then I ensure the Length and Breadth ranges displays the pre-fixed range according to the shape selected for men's ring

    #Scenario - 41
    @validations
    Scenario: Validate the price range filter with slider, slider thumbs, textboxes along with "$" symbol
        Given I browse Start with a Diamond page of Rings menu
        Then I Validate the price range filter with slider, slider thumbs, textboxes along with dollar symbol

    # #DRAGANDDROP - CANNOT BE AUTOMATED
    #     #Scenario - 42
    #@validations
    #     #Scenario: Ensure the price range slider is draggable
    #     #    Given I browse Start with a Diamond page of Earrings menu
    #     #    When I drag the min and max Price filter sliders
    #     #    Then I ensure the diamond listing updates according to the dragged price range

    #Scenario - 43
    @validations
    Scenario: Ensure the slider thumbs automatically points to the entered price range in the textbox
        Given I browse Start with a Lab Diamond page of Necklaces menu
        When I enter the min and max price range
        Then I ensure the slider thumbs automatically points to the entered price range in the textbox

    # #DRAGANDDROP - CANNOT BE AUTOMATED
    #     #Scenario - 44
    #@validations
    #     #Scenario: Ensure dragging the slider thumbs automatically displays the pointed price range in textboxes
    #         #Given I browse Start with a Lab Diamond page of Men's menu
    #         #When I drag the min and max Price filter sliders
    #         #Then I ensure the pointed price range is displayed in textboxes

    #Scenario - 45
    @validations
    Scenario: Ensure the min and max price range filter displays the pre-fixed range as configured ($50 to $99999)
        Given I browse Loose Diamonds page
        Then I ensure the min and max price range filter displays the pre-fixed range

    #Scenario - 46
    @validations
    Scenario: Validate the diamond listing updates upon entering a valid price range
        Given I browse Loose Lab Diamonds page
        When I enter the min and max price range
        Then I ensure the diamond listing updates according to the entered price range

    #Scenario - 47
    @validations @functional
    Scenario: Ensure the validation message is displayed while entering min price lesser than $50
        Given I browse Start with a Diamond page of Rings menu
        When I enter min price lesser than 50
        Then I ensure the invalid min price message is displayed

    #Scenario - 48
    @validations @functional
    Scenario: Ensure the error validation message is displayed while entering max price greater than $99999
        Given I browse Start with a Diamond page of Earrings menu
        When I enter max price greater than 99999
        Then I ensure the invalid max price message is displayed

    #Scenario - 49
    @validations
    Scenario: Ensure input validation is implemented to prevent the entry of alphabets and special characters in the price range textboxes
        Given I browse Start with a Lab Diamond page of Rings menu
        When I enter alphabets and special characters in the price range textboxes
        Then I ensure the input validation is implemented for price range textboxes

    #Scenario - 50
    @validations @functional
    Scenario: Ensure the error validation message is displayed when a decimal value is entered in Price filter
        Given I browse Start with a Lab Diamond page of Necklaces menu
        When I enter decimal values in min and max price range textboxes
        Then I ensure the invalid decimal price message is displayed

    #Scenario - 51 - When I enter the min and max price range -> Include the msg should be visible for other box
    @smoketest @functional
    Scenario: Ensure the error validation message is automatically disappeared when the entered value is adjusted to a valid price range
        Given I browse Start with a Lab Diamond page of Men's menu
        When I enter invalid min and max price range
        Then I ensure the invalid price range message is displayed
        When I enter the min and max price range
        Then I ensure the invalid price message is automatically disappeared

    #Scenario - 52
    @validations
    Scenario: Validating the functionality of increment/decrement buttons in the price range textboxes
        Given I browse Loose Diamonds page
        When I select the increment button in the min price textbox
        And I select the decrement button in the max price textbox
        Then I ensure the diamond listing updates to the entered min and max price value

    #Scenario - 53
    @validations
    Scenario: Validate the carat range filter with slider, slider thumbs and textboxes
        Given I browse Start with a Diamond page of Rings menu
        Then I Validate the carat range filter with slider, slider thumbs and textboxes

    # #DRAGANDDROP - CANNOT BE AUTOMATED
    #     #Scenario - 54
    #@validations
    #     #Scenario: Ensure the carat range slider is draggable
    #         #Given I browse Start with a Diamond page of Earrings menu
    #         #When I drag the min and max Carat filter sliders
    #         #Then I ensure the diamond listing updates according to the dragged carat range

    #Scenario - 55
    @validations
    Scenario: Ensure the slider thumbs automatically points to the entered carat range in the textbox
        Given I browse Start with a Lab Diamond page of Necklaces menu
        When I enter the min and max carat range
        Then I ensure the slider thumbs automatically points to the entered carat range in the textbox

    # #DRAGANDDROP - CANNOT BE AUTOMATED
    #     #Scenario - 56
    #@validations
    #     #Scenario: Ensure dragging the slider thumbs automatically displays the pointed carat range in textboxes
    #         #Given I browse Start with a Lab Diamond page of Men's menu
    #         #When I drag the min and max Carat filter sliders
    #         #Then I ensure the pointed carat range is displayed in textboxes

    #Scenario - 57
    @validations
    Scenario: Ensure the min and max carat range filter displays the pre-fixed range as configured (0.2 to 30)
        Given I browse Loose Diamonds page
        Then I ensure the min and max carat range filter displays the pre-fixed range

    #Scenario - 58
    @functional
    Scenario: Validate the diamond listing updates upon entering a valid carat range
        Given I browse Loose Lab Diamonds page
        When I enter the min and max carat range
        Then I ensure the diamond listing updates according to the entered carat range

    #Scenario - 59
    @functional 
    Scenario: Ensure the validation message is displayed while entering min carat lesser than 0.2
        Given I browse Start with a Diamond page of Rings menu
        When I enter min carat lesser than 0.2
        Then I ensure the invalid min carat message is displayed

    #Scenario - 60
    @functional
    Scenario: Ensure the error validation message is displayed while entering max carat greater than 30
        Given I browse Start with a Diamond page of Earrings menu
        When I enter max carat greater than 30
        Then I ensure the invalid max carat message is displayed

    #Scenario - 61
    @validations
    Scenario: Ensure input validation is implemented to prevent the entry of alphabets and special characters in the carat range textboxes
        Given I browse Start with a Lab Diamond page of Rings menu
        When I enter alphabets and special characters in the carat range textboxes
        Then I ensure the input validation is implemented for carat range textboxes

    #Scenario - 62
    @validations
    Scenario: Ensure the diamond listing updates when decimal values with two decimal places are entered in carat range textboxes
        Given I browse Start with a Lab Diamond page of Earrings menu
        When I enter decimal values with two decimal places in carat range textboxes
        Then I ensure the diamond listing updates according to the entered decimal carat range

    #Scenario - 63
    @functional
    Scenario: Ensure the error validation message is displayed when decimal values with more than two decimal places is entered in Carat filter
        Given I browse Start with a Lab Diamond page of Necklaces menu
        When I enter decimal values with more than two decimal places in carat range textboxes
        Then I ensure the invalid decimal carat message is displayed

    #Scenario - 64 - When I enter the min and max carat range -> Include the msg should be visible for other box
    @smoketest @functional
    Scenario: Ensure the error validation message is automatically disappeared when the entered value is adjusted to a valid carat range
        Given I browse Start with a Lab Diamond page of Men's menu
        When I enter invalid min and max carat range
        Then I ensure the invalid carat range message is displayed
        When I enter the min and max carat range
        Then I ensure the invalid carat message is automatically disappeared

    #Scenario - 65
    @validations
    Scenario: Validating the functionality of increment/decrement buttons in the carat range textboxes
        Given I browse Loose Diamonds page
        When I select the increment button in the min carat textbox
        And I select the decrement button in the max carat textbox
        Then I ensure the diamond listing updates to the entered min and max carat value

    # #DRAGANDDROP - CANNOT BE AUTOMATED
    #     #Scenario - 66
    #@validations
    #     #Scenario: Slider filters: Ensure the specific option at the left end of the slider is selected and display results accordingly when the slider is dragged to the left end
    #         #Given I browse Start with a Diamond page of Rings menu
    #         #When I drag the sliders to the left end
    #         #Then I ensure the specific option at the left end of the slider is selected and display results accordingly

    # #DRAGANDDROP - CANNOT BE AUTOMATED
    #     #Scenario - 67
    #@validations
    #     #Scenario: Slider filters: Ensure the specific option at the right end of the slider is selected and display results accordingly when the slider is dragged to the right end
    #         #Given I browse Start with a Diamond page of Men's menu
    #         #When I drag the sliders to the right end
    #         #Then I ensure the specific option at the right end of the slider is selected and display results accordingly

    #Scenario - 68
    @validations
    Scenario: Validate the clarity filter is displayed as a slider with the options as scale markings
        Given I browse Start with a Diamond page of Rings menu
        When I scroll to clarity and color filter
        Then I ensure the clarity filter is displayed with slider, slider thumbs and scale markings

    #Scenario - 69
    @validations
    Scenario: Ensure the clarity slider is draggable
        Given I browse Start with a Lab Diamond page of Earrings menu
        When I drag the min and max Clarity filter sliders
        Then I ensure the diamond listing updates according to the dragged clarity range

    #Scenario - 70
    @validations
    Scenario: Validate the color filter is displayed as a slider with the options as scale markings
        Given I browse Start with a Diamond page of Necklaces menu
        When I scroll to clarity and color filter
        Then I ensure the color filter is displayed with slider, slider thumbs and scale markings

    #Scenario - 71
    @validations
    Scenario: Ensure the color slider is draggable
        Given I browse Start with a Lab Diamond page of Men's menu
        When I drag the min and max Color filter sliders
        Then I ensure the diamond listing updates according to the dragged color range

    #Scenario - 72
    @validations
    Scenario: Validate the symmetry filter is displayed as a slider with the options as scale markings
        Given I browse Loose Diamonds page
        Then I ensure the symmetry filter is displayed with slider, slider thumbs and scale markings

    #Scenario - 73
    @validations
    Scenario: Ensure the symmetry slider is draggable
        Given I browse Loose Lab Diamonds page
        When I drag the min and max Symmetry filter sliders
        Then I ensure the diamond listing updates according to the dragged symmetry range

    #Scenario - 74
    @validations
    Scenario: Validate the fluorescence filter is displayed as a slider with the options as scale markings
        Given I browse Start with a Lab Diamond page of Rings menu
        Then I ensure the fluorescence filter is displayed with slider, slider thumbs and scale markings

    #Scenario - 75
    @validations
    Scenario: Ensure the fluorescence slider is draggable
        Given I browse Start with a Diamond page of Earrings menu
        When I drag the min and max Fluorescence filter sliders
        Then I ensure the diamond listing updates according to the dragged fluorescence range

    #Scenario - 76
    @validations
    Scenario: Validate the length range filter with slider, slider thumbs and textboxes
        Given I browse Start with a Diamond page of Rings menu
        Then I Validate the length range filter with slider, slider thumbs and textboxes

    # #DRAGANDDROP - CANNOT BE AUTOMATED
    #     #Scenario - 77
    #@validations
    #     #Scenario: Ensure the length range slider is draggable
    #         #Given I browse Start with a Diamond page of Earrings menu
    #         #When I drag the min and max Length filter sliders
    #         #Then I ensure the diamond listing updates according to the dragged length range

    #Scenario - 78
    @validations
    Scenario: Ensure the slider thumbs automatically points to the entered length range in the textbox
        Given I browse Start with a Lab Diamond page of Earrings menu
        When I enter the min and max length range
        Then I ensure the slider thumbs automatically points to the entered length range in the textbox

    # #DRAGANDDROP - CANNOT BE AUTOMATED
    #     #Scenario - 79
    #@validations
    #     # Scenario: Ensure dragging the slider thumbs automatically displays the pointed length range in textboxes
    #     #     Given I browse Start with a Diamond page of Earrings menu
    #     #     When I drag the min and max Length filter sliders
    #     #     Then I ensure the pointed length range is displayed in textboxes

    #Scenario - 80
    @validations
    Scenario: Validate the diamond listing updates upon entering a valid length range
        Given I browse Start with a Lab Diamond page of Earrings menu
        When I enter the min and max length range
        Then I ensure the diamond listing updates according to the entered length range

    #Scenario - 81
    @validations @functional
    Scenario: Rings - Ensure the validation message is displayed while entering min length lesser than 3 for Round shape
        Given I browse Start with a Diamond page of Rings menu
        When I enter min length lesser than 3
        Then I ensure the invalid min length message is displayed

    #Scenario - 82
    @functional
    Scenario: Rings - Ensure the error validation message is displayed while entering max length greater than 12 for Round shape
        Given I browse Start with a Lab Diamond page of Rings menu
        When I enter max length greater than 12
        Then I ensure the invalid max length message is displayed

    #Scenario - 83
    @validations
    Scenario: Ensure input validation is implemented to prevent the entry of alphabets and special characters in the length range textboxes
        Given I browse Start with a Diamond page of Earrings menu
        When I enter alphabets and special characters in the length range textboxes
        Then I ensure the input validation is implemented for length range textboxes

    #Scenario - 84
    @validations
    Scenario: Ensure the diamond listing updates when decimal values with two decimal places are entered in length range textboxes
        Given I browse Start with a Lab Diamond page of Earrings menu
        When I enter decimal values with two decimal places in length range textboxes
        Then I ensure the diamond listing updates according to the entered decimal length range

    #Scenario - 85
    @functional
    Scenario: Ensure the error validation message is displayed when decimal values with more than two decimal places is entered in Length filter
        Given I browse Start with a Diamond page of Earrings menu
        When I enter decimal values with more than two decimal places in length range textboxes
        Then I ensure the invalid decimal length message is displayed

    #Scenario - 86 - When I enter the min and max length range -> Include the msg should be visible for other box
    @functional
    Scenario: Ensure the error validation message is automatically disappeared when the entered value is adjusted to a valid length range
        Given I browse Start with a Lab Diamond page of Rings menu
        When I enter invalid min and max length range
        Then I ensure the invalid length range message is displayed
        When I re-enter the min and max length range
        Then I ensure the invalid length message is automatically disappeared

    #Scenario - 87
    @smoketest
    Scenario: Validating the functionality of increment/decrement buttons in the length range textboxes
        Given I browse Start with a Diamond page of Earrings menu
        When I select the increment button in the min length textbox
        And I select the decrement button in the max length textbox
        Then I ensure the diamond listing updates to the entered min and max length value

    #Scenario - 88
    @validations
    Scenario: Validate the breadth range filter with slider, slider thumbs and textboxes
        Given I browse Start with a Diamond page of Rings menu
        Then I Validate the breadth range filter with slider, slider thumbs and textboxes

    # #DRAGANDDROP - CANNOT BE AUTOMATED
    #     #Scenario - 89
    #@validations
    #     #Scenario: Ensure the breadth range slider is draggable
    #         #Given I browse Start with a Diamond page of Necklaces menu
    #         #When I drag the min and max Breadth filter sliders
    #         #Then I ensure the diamond listing updates according to the dragged breadth range

    #Scenario - 90
    @validations
    Scenario: Ensure the slider thumbs automatically points to the entered breadth range in the textbox
        Given I browse Start with a Lab Diamond page of Necklaces menu
        When I enter the min and max breadth range
        Then I ensure the slider thumbs automatically points to the entered breadth range in the textbox

    # #DRAGANDDROP - CANNOT BE AUTOMATED
    #     #Scenario - 91
    #@validations
    #     #Scenario: Ensure dragging the slider thumbs automatically displays the pointed breadth range in textboxes
    #         #Given I browse Start with a Lab Diamond page of Necklaces menu
    #         #When I drag the min and max Breadth filter sliders
    #         #Then I ensure the pointed breadth range is displayed in textboxes

    #Scenario - 92
    @validations
    Scenario: Validate the diamond listing updates upon entering a valid breadth range
        Given I browse Start with a Lab Diamond page of Necklaces menu
        When I enter the min and max breadth range
        Then I ensure the diamond listing updates according to the entered breadth range

    #Scenario - 93
    @validations @functional
    Scenario: Men's Rings - Ensure the validation message is displayed while entering min breadth than 5 for Round shape
        Given I browse Start with a Diamond page of Men's menu
        When I enter min breadth lesser than 5
        Then I ensure the invalid min breadth message is displayed

    #Scenario - 94
    @validations @functional
    Scenario: Men's Rings - Ensure the error validation message is displayed while entering max breadth greater than 8 for Round shape
        Given I browse Start with a Lab Diamond page of Men's menu
        When I enter max breadth greater than 8
        Then I ensure the invalid max breadth message is displayed

    #Scenario - 95
    @validations
    Scenario: Ensure input validation is implemented to prevent the entry of alphabets and special characters in the breadth range textboxes
        Given I browse Start with a Lab Diamond page of Necklaces menu
        When I enter alphabets and special characters in the breadth range textboxes
        Then I ensure the input validation is implemented for breadth range textboxes

    #Scenario - 96
    @validations
    Scenario: Ensure the diamond listing updates when decimal values with two decimal places are entered in breadth range textboxes
        Given I browse Start with a Diamond page of Necklaces menu
        When I enter decimal values with two decimal places in breadth range textboxes
        Then I ensure the diamond listing updates according to the entered decimal breadth range

    #Scenario - 97
    @validations @functional
    Scenario: Ensure the error validation message is displayed when decimal values with more than two decimal places is entered in Breadth filter
        Given I browse Start with a Lab Diamond page of Necklaces menu
        When I enter decimal values with more than two decimal places in breadth range textboxes
        Then I ensure the invalid decimal breadth message is displayed

    #Scenario - 98 - When I enter the min and max breadth range -> Include the msg should be visible for other box
    @validations @functional
    Scenario: Ensure the error validation message is automatically disappeared when the entered value is adjusted to a valid breadth range
        Given I browse Start with a Diamond page of Men's menu
        When I enter invalid min and max breadth range
        Then I ensure the invalid breadth range message is displayed
        When I re-enter the min and max breadth range
        Then I ensure the invalid breadth message is automatically disappeared

    #Scenario - 99
    @validations
    Scenario: Validating the functionality of increment/decrement buttons in the breadth range textboxes
        Given I browse Start with a Lab Diamond page of Necklaces menu
        When I select the increment button in the min breadth textbox
        And I select the decrement button in the max breadth textbox
        Then I ensure the diamond listing updates to the entered min and max breadth value

    #Scenario - 100
    @validations
    Scenario: Validate the table% range filter with slider, slider thumbs and textboxes
        Given I browse Start with a Diamond page of Rings menu
        Then I Validate the table% range filter with slider, slider thumbs and textboxes

    #DRAGANDDROP - CANNOT BE AUTOMATED
        #Scenario - 101
    #@validations
        #Scenario: Ensure the table% range slider is draggable
            #Given I browse Start with a Diamond page of Earrings menu
            #When I drag the min and max Table% filter sliders
            #Then I ensure the diamond listing updates according to the dragged table% range

    #Scenario - 102
    @validations
    Scenario: Ensure the slider thumbs automatically points to the entered table% range in the textbox
        Given I browse Start with a Lab Diamond page of Necklaces menu
        When I enter the min and max table% range
        Then I ensure the slider thumbs automatically points to the entered table% range in the textbox

    #DRAGANDDROP - CANNOT BE AUTOMATED
    #Scenario - 103
    #@validations
    #Scenario: Ensure dragging the slider thumbs automatically displays the pointed table% range in textboxes
    #Given I browse Start with a Lab Diamond page of Men's menu
    #When I drag the min and max Table% filter sliders
    #Then I ensure the pointed table% range is displayed in textboxes

    #Scenario - 104
    @validations
    Scenario: Ensure the min and max table% range filter displays the pre-fixed range as configured (1 to 100)
        Given I browse Loose Diamonds page
        Then I ensure the min and max table% range filter displays the pre-fixed range

    #Scenario - 105
    @validations
    Scenario: Validate the diamond listing updates upon entering a valid table% range
        Given I browse Loose Lab Diamonds page
        When I enter the min and max table% range
        Then I ensure the diamond listing updates according to the entered table% range

    #Scenario - 106
    @validations @functional
    Scenario: Ensure the validation message is displayed while entering min table% lesser than 1
        Given I browse Start with a Diamond page of Rings menu
        When I enter min table% lesser than 1
        Then I ensure the invalid min table% message is displayed

    #Scenario - 107
    @validations @functional
    Scenario: Ensure the error validation message is displayed while entering max table% greater than 100
        Given I browse Start with a Diamond page of Earrings menu
        When I enter max table% greater than 100
        Then I ensure the invalid max table% message is displayed

    #Scenario - 108
    @validations
    Scenario: Ensure input validation is implemented to prevent the entry of alphabets and special characters in the table% range textboxes
        Given I browse Start with a Lab Diamond page of Rings menu
        When I enter alphabets and special characters in the table% range textboxes
        Then I ensure the input validation is implemented for table% range textboxes

    #Scenario - 109
    @validations @functional
    Scenario: Ensure the error validation message is displayed when a decimal value is entered in Table% filter
        Given I browse Start with a Lab Diamond page of Necklaces menu
        When I enter decimal values in min and max table% range textboxes
        Then I ensure the invalid table% decimal message is displayed

    #Scenario - 110 - When I enter the min and max table% range -> Include the msg should be visible for other box
    @validations @smoketest
    Scenario: Ensure the error validation message is automatically disappeared when the entered value is adjusted to a valid table% range
        Given I browse Start with a Diamond page of Men's menu
        When I enter invalid min and max table% range
        Then I ensure the invalid table% range message is displayed
        When I re-enter the min and max table% range
        Then I ensure the invalid table% message is automatically disappeared

    #Scenario - 111
    @validations 
    Scenario: Validating the functionality of increment/decrement buttons in the table% range textboxes
        Given I browse Loose Diamonds page
        When I select the increment button in the min table% textbox
        And I select the decrement button in the max table% textbox
        Then I ensure the diamond listing updates to the entered min and max table% value

    #Scenario - 112
    @validations
    Scenario: Validate the depth% range filter with slider, slider thumbs and textboxes
        Given I browse Start with a Diamond page of Rings menu
        Then I Validate the depth% range filter with slider, slider thumbs and textboxes

    # #DRAGANDDROP - CANNOT BE AUTOMATED
    #     #Scenario - 113
    #@validations
    #     #Scenario: Ensure the depth% range slider is draggable
    #         #Given I browse Start with a Diamond page of Earrings menu
    #         #When I drag the min and max Depth% filter sliders
    #         #Then I ensure the diamond listing updates according to the dragged depth% range

    #Scenario - 114
    @validations
    Scenario: Ensure the slider thumbs automatically points to the entered depth% range in the textbox
        Given I browse Start with a Lab Diamond page of Necklaces menu
        When I enter the min and max depth% range
        Then I ensure the slider thumbs automatically points to the entered depth% range in the textbox

    # #DRAGANDDROP - CANNOT BE AUTOMATED
    #     #Scenario - 115
    #@validations
    #     #Scenario: Ensure dragging the slider thumbs automatically displays the pointed depth% range in textboxes
    #         #Given I browse Start with a Lab Diamond page of Men's menu
    #         #When I drag the min and max Depth% filter sliders
    #         #Then I ensure the pointed depth% range is displayed in textboxes

    #Scenario - 116
    @validations
    Scenario: Ensure the min and max depth% range filter displays the pre-fixed range as configured (1 to 100)
        Given I browse Loose Diamonds page
        Then I ensure the min and max depth% range filter displays the pre-fixed range

    #Scenario - 117
    @validations
    Scenario: Validate the diamond listing updates upon entering a valid depth% range
        Given I browse Loose Lab Diamonds page
        When I enter the min and max depth% range
        Then I ensure the diamond listing updates according to the entered depth% range

    #Scenario - 118
    @validations @functional
    Scenario: Ensure the validation message is displayed while entering min depth% lesser than 1
        Given I browse Start with a Diamond page of Rings menu
        When I enter min depth% lesser than 1
        Then I ensure the invalid min depth% message is displayed

    #Scenario - 119
    @validations @functional
    Scenario: Ensure the error validation message is displayed while entering max depth% greater than 100
        Given I browse Start with a Diamond page of Earrings menu
        When I enter max depth% greater than 100
        Then I ensure the invalid max depth% message is displayed

    #Scenario - 120
    @validations 
    Scenario: Ensure input validation is implemented to prevent the entry of alphabets and special characters in the depth% range textboxes
        Given I browse Start with a Lab Diamond page of Rings menu
        When I enter alphabets and special characters in the depth% range textboxes
        Then I ensure the input validation is implemented for depth% range textboxes

    #Scenario - 121
    @validations @functional
    Scenario: Ensure the error validation message is displayed when a decimal value is entered in Depth% filter
        Given I browse Start with a Lab Diamond page of Necklaces menu
        When I enter decimal values in min and max depth% range textboxes
        Then I ensure the invalid decimal depth% message is displayed

    #Scenario - 122 - When I enter the min and max depth% range -> Include the msg should be visible for other box
    @validations @smoketest
    Scenario: Ensure the error validation message is automatically disappeared when the entered value is adjusted to a valid depth% range
        Given I browse Start with a Diamond page of Men's menu
        When I enter invalid min and max depth% range
        Then I ensure the invalid depth% range message is displayed
        When I re-enter the min and max depth% range
        Then I ensure the invalid depth% message is automatically disappeared

    #Scenario - 123
    @validations
    Scenario: Validating the functionality of increment/decrement buttons in the depth% range textboxes
        Given I browse Loose Diamonds page
        When I select the increment button in the min depth% textbox
        And I select the decrement button in the max depth% textbox
        Then I ensure the diamond listing updates to the entered min and max depth% value

    #Scenario - 124
    @validations
    Scenario: Validate the cut filter is displayed as a slider with the options as scale markings
        Given I browse Start with a Diamond page of Earrings menu
        Then I ensure the cut filter is displayed with slider, slider thumbs and scale markings

    #Scenario - 125
    @validations
    Scenario: Ensure the cut slider is draggable
        Given I browse Start with a Lab Diamond page of Men's menu
        When I drag the min and max Cut filter sliders
        Then I ensure the diamond listing updates according to the dragged cut range

    #Scenario - 126 (square, triangle, rose cut, radiant, pear, oval, marquise, hexagonal, heart, emerald, baguette & asscher)
    @validations
    Scenario: Ensure the cut filter is disabled and cut column is not displayed in diamond listing when certai shapes are selected
        Given I browse Loose Diamonds page
        When I choose the list of shape filters
        Then I ensure the cut filter is disabled and cut column is not displayed in diamond listing table

    #Scenario - 127
    @validations
    Scenario: Validate the polish filter is displayed as a slider with the options as scale markings
        Given I browse Start with a Diamond page of Necklaces menu
        Then I ensure the polish filter is displayed with slider, slider thumbs and scale markings

    #Scenario - 128
    @validations
    Scenario: Ensure the polish slider is draggable
        Given I browse Start with a Lab Diamond page of Rings menu
        When I drag the min and max Polish filter sliders
        Then I ensure the diamond listing updates according to the dragged polish range

    #Scenario - 129
    @validations
    Scenario: Certificate filter - Validating the IGI and GIA checkboxes
        Given I browse Start with a Diamond page of Earrings menu
        Then I ensure the Certificate filter is displayed with IGI and GIA checkboxes

    #Scenario - 130
    @validations
    Scenario: Verify the results are updated and displays only IGI certified diamonds when GIA is unchecked
        Given I browse Start with a Lab Diamond page of Necklaces menu
        When I uncheck the GIA option
        Then I ensure only the IGI diamonds are displayed in the table

    #Scenario - 131
    @validations
    Scenario: Verify the results are updated and displays only GIA certified diamonds when IGI is unchecked
        Given I browse Start with a Diamond page of Men's menu
        When I uncheck the IGI option
        Then I ensure only the GIA diamonds are displayed in the table

    #Scenario - 132
    @validations
    Scenario: Ensure the IGI and GIA certificate checkboxes got selected automatically when trying to uncheck both
        Given I browse Loose Lab Diamonds page
        When I uncheck the GIA option
        And I uncheck the IGI certificate option
        Then I ensure both options got selected automatically

    #Scenario - 133
    @validations
    Scenario: Verify the applied filters are retained after refreshing the tab
        Given I browse Loose Lab Diamonds page
        When I apply multiple diamond filters
        And I refresh the page
        Then I ensure the applied filters are retained

    #Scenario - 134
    @validations @smoketest
    Scenario: Verify that when multiple filters are applied, navigating back and forward within the tab retains the applied filters
        Given I browse Loose Lab Diamonds page
        When I apply multiple diamond filters
        And I select Quick view dropdown
        And I select View Lab Diamond button
        And I navigate back to the Loose Lab Diamonds page
        Then I ensure the applied filters are retained

    #Scenario - 135
    @validations
    Scenario: Ensure the Nothing here message is displayed in the table section when the applied filters have no results
        Given I browse Start with a Diamond page of Men's menu
        When I enter the min and max carat range as 30
        Then I ensure the Nothing here message is displayed in the table section

    #Scenario - 136
    @functional @smoketest
    Scenario: Ensure the filters are not retained when switching from the Start with a Diamond page of one category to other category
        Given I browse Start with a Lab Diamond page of Earrings menu
        When I apply multiple diamond filters
        And I hover over the Necklaces menu
        And I select Start with a Lab Diamond under Necklaces menu
        Then I ensure the applied filters are not retained

    #Filters - newly added scenarios
    #Scenario - 261
    @smoketest @validations
    Scenario: Loose Diamonds - Ensure the Length and Breadth ranges displays the pre-fixed range as 0 and 20 for all shapes
        Given I browse Loose Diamonds page
        When I select the available shapes of loose diamonds
        Then I ensure the Length and Breadth ranges displays the pre-fixed range as 0 and 20 for all shapes

    #Scenario - 262
    @smoketest @validations
    Scenario: Ensure entering same value in both filter range textboxes displays the results accordingly
        Given I browse Loose Lab Diamonds page
        When I enter same price in price range textboxes
        Then I ensure the results are updated according to the price entered

    #Scenario - 263
    @smoketest @validations
    Scenario: Validating the flow of entering a min value in max textbox and vice versa
        Given I browse Loose Lab Diamonds page
        When I enter min caratage in max textbox and max caratage in min textbox
        Then I ensure the values are automatically changed to the respective min and max textboxes and the results are updated automatically


    # VDB
    #Scenario - 137
    @validations
    Scenario: Ensure the All diamonds, Recently viewed and Compare tabs are present at the table header
        Given I browse Start with a Diamond page of Rings menu
        Then I ensure the All diamonds, Recently viewed and Compare tabs are present at the table header

    #Scenario - 138
    @validations @smoketest
    Scenario: Ensure the recently viewed tab shows the number of recently viewed diamonds
        Given I browse Loose Lab Diamonds page
        When I select Quick view dropdown
        And I select View Lab Diamond button
        And I navigate back to the Loose Lab Diamonds page
        Then I verify that the recently viewed tab shows the number as 1
        When I select Recently Viewed tab
        Then I ensure the recently viewed diamond details are displayed in the tab

    #Scenario - 139
    @validations @functional
    Scenario: Ensure the Nothing here message is displayed in the recently viewed tab when no diamonds have been viewed
        Given I browse Start with a Diamond page of Men's menu
        When I select Recently Viewed tab
        Then I ensure the Nothing here message is displayed in the table section

    #Scenario - 140
    @validations @smoketest
    Scenario: Ensure the Sort by filter is disabled in the recently viewed tab
        Given I browse Loose Lab Diamonds page
        When I select Quick view dropdown
        And I select View Lab Diamond button
        And I navigate back to the Loose Lab Diamonds page
        When I select Recently Viewed tab
        Then I ensure the Sort by filter is disabled

    #Scenario - 141
    @validations
    Scenario: Ensure the compare tab shows the number of diamonds selected for comparison
        Given I browse Start with a Diamond page of Necklaces menu
        When I select five diamonds for comparison
        Then I ensure that the compare tab shows the number as 5

    #Scenario - 142
    @validations
    Scenario: Ensure the diamond details of the selected diamonds are displayed in the compare tab
        Given I browse Start with a Diamond page of Men's menu
        When I select five diamonds for comparison
        And I select Compare tab
        And I click right and left arrow buttons
        Then I ensure that the diamond details of the selected diamonds are displayed

    #Scenario - 143
    @validations
    Scenario: Ensure both the diamond details are displayed in the compare tab for earrings
        Given I browse Start with a Lab Diamond page of Earrings menu
        When I select two diamonds for comparison
        And I select Compare tab
        Then I ensure both the diamond details are displayed in the compare tab

    #Scenario - 144
    @validations
    Scenario: Ensure clicking the remove button in the compare table removes the diamond
        Given I browse Loose Lab Diamonds page
        When I select five diamonds for comparison
        And I select Compare tab
        And I remove the first diamond column
        Then I ensure the first diamond is removed from the compare table

    #Scenario - 145
    @validations
    Scenario: Ensure the Sort by filter, List view and Gallery view are disabled in the compare tab
        Given I browse Start with a Diamond page of Men's menu
        When I select Compare tab
        Then I ensure the Sort by filter, List view and Gallery view are disabled

    #Scenario - 146
    @validations
    Scenario: Verifying the diamond details section in the compare table
        Given I browse Start with a Lab Diamond page of Earrings menu
        When I select two diamonds for comparison
        And I select Compare tab
        Then I verify the diamond details section in the compare table

    #Scenario - 147
    @validations
    Scenario: Ensure the VIEW link present in the view stone section in the compare table redirects to the Diamond details page
        Given I browse Start with a Diamond page of Necklaces menu
        When I select five diamonds for comparison
        And I select Compare tab
        And I select View button of the first compared diamond
        Then I ensure the diamond details page of necklaces is displayed

    #Scenario - 148
    @validations @functional
    Scenario: Ensure the Nothing here message is displayed in the compare tab when no diamonds have been selected for comparison
        Given I browse Loose Diamonds page
        When I select Compare tab
        Then I ensure the Nothing here message is displayed in the table section

    #Scenario - 149
    @smoketest
    Scenario: Ensure the sortby dropdown shows the dropdown menu while hovering over it
        Given I browse Loose Lab Diamonds page
        When I hover over the Sort by filter
        Then I ensure the sortby dropdown shows the dropdown menu with options

    #Scenario - 150
    @smoketest
    Scenario: Verify the functionality of sortby filters present in the dropdown
        Given I browse Start with a Diamond page of Men's menu
        When I hover over the Sort by filter
        And I select the filters in the dropdown
        Then I ensure the table sorts according to the filter chosen

    #Scenario - 151
    @smoketest @validations
    Scenario: Ensure the gallery view button shows the list of diamonds in grid view format
        Given I browse Start with a Lab Diamond page of Necklaces menu
        When I select gallery view button
        Then I ensure the list of diamonds are displayed in grid view format
        When I browse Start with a Diamond page of Earrings menu
        And I select Easy delivery option under Ways to Save More
        And I select gallery view button
        Then I ensure the list of both diamonds are displayed in grid view format

    #Scenario - 152
    @smoketest @validations
    Scenario: Ensure the Quick view dropdown is clickable and shows the Diamond details
        Given I browse Start with a Diamond page of Earrings menu
        When I scroll to the diamond listing table
        And I select Quick view dropdown for earrings
        Then I ensure the diamond details and the expanded area are displayed
        When I select X button in the Quick view section
        Then I ensure the expanded area is closed

    #Scenario - 171
    @smoketest
    Scenario: Ensure the total number of pages in the table is represented at the bottom of the table
        Given I browse Start with a Lab Diamond page of Rings menu
        Then I ensure the total number of pages in the table is represented at the bottom of the table

    #Scenario - 172
    @smoketest
    Scenario: Ensure clicking the page number moves to the respective page in the table
        Given I browse Start with a Diamond page of Earrings menu
        When I click Page 3
        Then I ensure the page 3 of the table is displayed

    #Scenario - 173
    @smoketest
    Scenario: Check whether the user can able to enter the page number in the textbox
        Given I browse Start with a Lab Diamond page of Men's menu
        When I enter 3 in the pagination textbox
        Then I ensure the page 3 of the table is displayed

    #Scenario - 174
    @smoketest
    Scenario: Verifying the functionality of left and right caret icons near the pagination textbox
        Given I browse Loose Diamonds page
        When I click Page 2
        And I click right caret icon
        Then I ensure the page 3 of the table is displayed
        When I click left caret icon
        Then I ensure the page 2 of the table is displayed

    #Scenario - 213
    @smoketest @validations
    Scenario: Validating the links present in Diamond listing page
        Given I browse Start with a Diamond page of Rings menu
        When I click Free 100 Day Returns link
        Then I ensure the Returns Text Link redirects to the respective page
        When I browse back and select Free Global Shipping link
        Then I ensure the Free shipping Text Link redirects to the respective page
        When I browse back and select Lab Certification link
        Then I ensure Lab Certification Link redirects to the respective page
        When I browse back and select Free Resizing & Warranty link
        Then I ensure the Resizing Text Link redirects to the respective page

# # #On Hold
# # #Scenario - 271
# # #Scenario: Validating the sold out message for diamonds in the VDB table

# # #On Hold
# # #Scenario - 272
# # #Scenario: Verify clicking the View button in the Compare table shows the sold out message for out of stock diamonds

# # #On Hold
# # #Scenario - 273
# # #Scenario: Verify clicking the View button in the Gallery View shows the sold out message for out of stock diamonds