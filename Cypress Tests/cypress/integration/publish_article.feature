Feature: Publishing Articles
Background: 
  Given user is logged in
  And user opened New Article page
  
  @happyScenario
  Scenario: With valid data
    When user publishes article
    Then user will be redirected to article view

 @negativeScenario
  Scenario: With no data
    But didn't fill any field
    Then data validation errors appears

  Scenario: With links
    And published article with links in the body
    Then links should be working
