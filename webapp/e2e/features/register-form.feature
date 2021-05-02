Feature: Registering a new user

Scenario: The user create a non existing Solid POD
 Given An unregistered user without a POD
 When I click on the Solid Community at the Sign up link
 Then I should be able to create a solid POD

Scenario: The user create an already existing solid POD
 Given An unregistered user without a POD
 When I click on the Solid Community at the Sign up link
 Then I should be told that the user already exists

Scenario: The user create a non existing Inrupt POD
 Given An unregistered user without a POD
 When I click on the Solid Community at the Sign up link
 Then I should be able to create an inrupt POD