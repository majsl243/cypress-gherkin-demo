Feature: Actions on Articles
Background: 
  Given user is logged in
  
  @happyScenario
  Scenario: Edit with valid data
    Given user opened New Article page
    And user publishes article
    When user wants to edit article
    And publishes changes on article details
    Then article details should be updated
