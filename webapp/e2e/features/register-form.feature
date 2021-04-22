Feature: Registering a new user

Scenario: The user is not registered in SOLID
  Given An unregistered user without a POD
  When I click on the button of Solid Community 
  Then I should be redirected to https://solidcommunity.net/register

Scenario: The user create a non existing Solid POD
  Given An unregistered user without a POD
  When I fill the data in the form and press submit
  Then I should be redirected to your Solid POD