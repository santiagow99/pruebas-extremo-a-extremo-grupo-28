Feature: Editar tag

@user1 @web
Scenario: Editar el nombre del tag creado
  Given I navigate to page "http://localhost:2368/ghost/#/pages"
  And I wait for 5 seconds
  And I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 2 seconds
  And I click on tags module
  And I wait for 2 seconds
  And I click on new tag
  And I wait for 2 seconds
  And I enter the tag name
  And I save the tag
  And I wait for 2 seconds
  And I click on tags module
  And I wait for 2 seconds
  And I click on the created tag
  And I wait for 2 seconds
  And I edit the tag name
  And I wait for 1 seconds
  And I save the tag
  And I wait for 2 seconds
  And I click on new tag
  And I wait for 2 seconds
  And I open my user info
  And I wait for 1 seconds
  And I close my session
  And I wait for 2 seconds

@user2 @web
Scenario: Editar el slug del tag creado
  Given I navigate to page "http://localhost:2368/ghost/#/pages"
  And I wait for 5 seconds
  And I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 2 seconds
  And I click on tags module
  And I wait for 2 seconds
  And I click on new tag
  And I wait for 2 seconds
  And I enter the tag name
  And I save the tag
  And I wait for 2 seconds
  And I click on tags module
  And I wait for 2 seconds
  And I click on the created tag
  And I wait for 2 seconds
  And I edit the tag slug
  And I wait for 1 seconds
  And I save the tag
  And I wait for 2 seconds
  And I open my user info
  And I wait for 1 seconds
  And I close my session
  And I wait for 2 seconds

@user3 @web
Scenario: Editar la descripcion del tag creado
  Given I navigate to page "http://localhost:2368/ghost/#/pages"
  And I wait for 5 seconds
  And I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 2 seconds
  And I click on tags module
  And I wait for 2 seconds
  And I click on new tag
  And I wait for 2 seconds
  And I enter the tag name
  And I save the tag
  And I wait for 2 seconds
  And I click on tags module
  And I wait for 2 seconds
  And I click on the created tag
  And I wait for 2 seconds
  And I edit the tag description
  And I wait for 1 seconds
  And I save the tag
  And I wait for 2 seconds
  And I open my user info
  And I wait for 1 seconds
  And I close my session
  And I wait for 2 seconds

@user4 @web
Scenario: Editar color del tag creado
  Given I navigate to page "http://localhost:2368/ghost/#/pages"
  And I wait for 5 seconds
  And I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 2 seconds
  And I click on tags module
  And I wait for 2 seconds
  And I click on new tag
  And I wait for 2 seconds
  And I enter the tag name
  And I save the tag
  And I wait for 2 seconds
  And I click on tags module
  And I wait for 2 seconds
  And I click on the created tag
  And I wait for 2 seconds
  And I edit the tag color
  And I wait for 1 seconds
  And I save the tag
  And I wait for 2 seconds
  And I open my user info
  And I wait for 1 seconds
  And I close my session
  And I wait for 2 seconds