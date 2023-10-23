Feature: Login

Scenario: As a user I want incorrect studentbeans.com login details to display the appropriate error messages
  Given I am on the studentbeans homepage
  When I click Login
  And I Input an invalid email
  Then I should see an incorrect email error message
  When I input a correct email and incorrect password
  Then I should see an incorrect password error message

