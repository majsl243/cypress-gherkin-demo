Feature: Publishing Articles
Background: 
  Given user is logged in
  And user opened New Article page
  
  @happyScenario
  Scenario: With valid data without tags
    When user publishes article
    Then user will be redirected to article view

  @happyScenario
  Scenario: With valid data with custom tags
    Given custom tags are
      |tagName|
      |lorem|
      |ipsum|
      |latin|
    When user publishes article "With Tags"
    Then user will be redirected to article view

  @negativeScenario
  Scenario: With no data
    But didn't fill any field
    Then data validation errors appears

  @happyScenario
  Scenario: With links
    And published article with links in the body
    Then links should be working
