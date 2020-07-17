Feature: Actions on Articles
Background: 
  Given user is logged in
  
  Scenario: Edit with valid data
    Given user opened New Article page
    And user publishes article
    When user wants to edit article
    And publishes changes on article details
    Then article details should be updated

  Scenario: Delete article
    Given went to My Articles section
    And opened an article
    When user click delete button
    Then article should not be found in My Articles section