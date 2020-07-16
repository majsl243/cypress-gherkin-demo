Feature: Publishing Articles
  Scenario: With valid data
    Given user is logged in
    And user publishes article
    Then user will be redirected to article view
