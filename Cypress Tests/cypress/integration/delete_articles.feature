Feature: Actions on Articles
Background: 
  Given user is logged in

  Scenario: Delete article
    Given user opened New Article page
    And user publishes article "Article to delete"
    When user click delete button
    Then article "Article to delete" should not be found in My Articles section