Feature: Example generic app

  Scenario Outline: As a user, I can log into the secure area

    Given I open the app
    When I wait for element "landing-countryButton"
    Then I click on element "landing-countryButton"
    And I wait a moment "10000"
