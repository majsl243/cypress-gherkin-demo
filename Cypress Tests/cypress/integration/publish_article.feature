Feature: Publishing Articles
  Scenario: With valid data
    Given user is logged in
    And user opened New Article page
    When user publishes article
    Then user will be redirected to article view

  Scenario: With no data
    Given user is logged in
    And user opened New Article page
    And published article with no data
    Then data validation errors appears

  Scenario: With links
    Given user is logged in
    And user opened New Article page
    And published article with links in the body
    Then links should be working
