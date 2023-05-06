Feature: Editar pagina

@user @web
Scenario: Editar el nombre del tag creado
  Given I navigate to page "http://localhost:2368/ghost/#/pages"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
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
  And I save the new tag
 