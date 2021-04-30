Feature: Change the language of the application

Scenario: The user wants the application in Spanish
  Given An already registered user with a pod in radarin
  When I click in the "Spanish" button in Languages
  Then I should see my profile page in Spanish