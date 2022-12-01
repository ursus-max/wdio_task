Feature: Bootcamp E2E

Background: 
    Given As a user I open the home page
    And I close the promo banner if it appears

Scenario: Search bar
    When Entry the word Windows in the search bar
    And Click the search
    Then Check that at least one item appears

Scenario: Internet shop logo button
   When Open "Today's Best Deals" tab
    And Click on the Internet shop logo
    Then Check that the main page opened    