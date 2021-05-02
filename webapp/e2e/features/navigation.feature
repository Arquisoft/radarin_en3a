Feature: Navigating the app as an already registered user

Scenario: The user logs in Radarin and navigate to friends view
  Given An already registered user in the profile page 
  When I try to go to different links of the app
  Then I should enter in radarin friends view

# Scenario: The user logs in Radarin and navigate to map view
#   Given An already registered user in the profile page 
#   When I try to go to different links of the app
#   Then I should enter in radarin map view

# Scenario: The user logs in Radarin and navigate to locations view
#   Given An already registered user in the profile page 
#   When I try to go to different links of the app
#   Then I should enter in radarin locations view