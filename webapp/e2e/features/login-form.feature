Feature: Login as an already registered user

Scenario: The user is already registered with a pod and logs in Radarin
  Given An already registered user with a pod in radarin
  When I fill in the user name field and press the login button
  Then I should enter in my radarin profile