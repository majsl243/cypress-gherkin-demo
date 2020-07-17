Feature: Validate article
Background: 
  Given user is logged in
  And user opened New Article page
  And user publishes article

  Scenario: author is the same as the publisher
    Then author name should be same as username

  Scenario: publish date is today
    Then publishing date should be as date of publishing