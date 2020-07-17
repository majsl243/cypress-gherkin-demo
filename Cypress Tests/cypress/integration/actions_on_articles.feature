 Feature: Actions on Articles
  Scenario: Edit with valid data
    Given user is logged in
    And user opened New Article page
    And user publishes article
    When user wants to edit article
    And publishes changes on article details
    Then article details should be updated

  Scenario: Delete article
    Given user is logged in
    And went to My Articles section
    And opened an article
    When user click delete button
    Then article should not be found in My Articles section