Feature: Registering a new user

Scenario: The user is not registered in SOLID
  Given An unregistered user without a POD
  When I click on the Sign up link
  Then I should be redirected to http://localhost:3000/#/register

#Scenario: The user create a non existing Solid POD
#  Given An unregistered user without a POD
#  When I click on the 
#  Then I should be redirected to your Solid POD