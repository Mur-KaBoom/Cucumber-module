@smoke
Feature: Home Page

    Verification of title and social media links

    Scenario: Page Title
        Given I open stupid McDonalds web page
        Then Page title should be "McDonald's: Burgers, Fries & More. Quality Ingredients."

    # @socialMedia
    # Scenario Outline: User is able to open social media sites via footer icons
    #     Given I open stupid McDonalds web page
    #     When I scroll to "Social Media Links"
    #     And I click "#<num> of Social Media Links"
    #     And I wait until "Confirm  Redirection Popup" is displayed
    #     And I click "Confirm Button"
    #     And I switch to the next tab
    #     Then Page url should be "<pageUrl>"

    #     Examples:
    #         | num | pageUrl                                                  |
    #         | 1   | https://www.facebook.com/McDonalds/                      |
    #         | 2   | https://twitter.com/mcdonalds                            |
    #         | 3   | https://www.youtube.com/channel/UCRI5ZedBs0_BYY4PlxD6m7w |
    #         | 4   | https://www.instagram.com/mcdonalds/                     |
    #         | 5   | https://mcdonalds.tumblr.com/                            |
    #         | 6   | https://open.spotify.com/user/mcdonalds                  |
