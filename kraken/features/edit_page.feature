Feature: Editar pagina

@user1 @web
Scenario: Editar el titulo de una página creada
  Given I navigate to page "http://localhost:2368/ghost/#/pages"
  And I wait for 5 seconds
  And I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 2 seconds
  And I got to new page form
  And I wait for 2 seconds
  And I edit the page content "new page title"
  And I wait for 2 seconds
  And I publish the page
  And I wait for 5 seconds
  And I navigate to page "http://localhost:2368/ghost/#/pages"
  And I wait for 2 seconds
  And I check the page with title "new page title"
  And I wait for 2 seconds
  When I go to page "new page title"
  And I wait for 2 seconds
  And I edit the title
  And I publish the page
  And I navigate to page "http://localhost:2368/ghost/#/pages"
  And I wait for 2 seconds
  Then I check the page with title "new page title v2"

@user2 @web
Scenario: Editar la descripción de una página creada
  Given I navigate to page "http://localhost:2368/ghost/#/pages"
  And I wait for 5 seconds
  And I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 2 seconds
  And I got to new page form
  And I wait for 2 seconds
  And I edit the page content "new page description"
  And I wait for 2 seconds
  And I publish the page
  And I wait for 5 seconds
  And I navigate to page "http://localhost:2368/ghost/#/pages"
  And I wait for 2 seconds
  And I check the page with title "new page description"
  And I wait for 2 seconds
  When I go to page "new page description"
  And I wait for 2 seconds
  And I edit the description
  And I publish the page
  And I navigate to page "http://localhost:2368/ghost/#/pages"
  And I wait for 2 seconds
  Then I check the page with title "new page description"

@user3 @web
Scenario: Editar el url de una pagina creada
  Given I navigate to page "http://localhost:2368/ghost/#/pages"
  And I wait for 5 seconds
  And I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 2 seconds
  And I got to new page form
  And I wait for 2 seconds
  And I edit the page content "new page url"
  And I wait for 2 seconds
  And I publish the page
  And I wait for 5 seconds
  And I navigate to page "http://localhost:2368/ghost/#/pages"
  And I wait for 2 seconds
  And I check the page with title "new page url"
  And I wait for 2 seconds
  When I go to page "new page url"
  And I wait for 2 seconds
  And I click the settings page
  And I wait for 2 seconds
  And I edit the page url
  And I wait for 5 seconds
  And I click the settings page
  And I wait for 5 seconds
  And I publish the page
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/pages"
  And I wait for 2 seconds
  Then I check the page with title "new page url"

@user4 @web
Scenario: Editar el url de una pagina creada
  Given I navigate to page "http://localhost:2368/ghost/#/pages"
  And I wait for 5 seconds
  And I enter email "<USERNAME>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 2 seconds
  And I got to new page form
  And I wait for 2 seconds
  And I edit the page content "new page featured"
  And I wait for 2 seconds
  And I publish the page
  And I wait for 5 seconds
  And I navigate to page "http://localhost:2368/ghost/#/pages"
  And I wait for 2 seconds
  And I check the page with title "new page featured"
  And I wait for 2 seconds
  When I go to page "new page featured"
  And I wait for 2 seconds
  And I click the settings page
  And I wait for 2 seconds
  And I make the page featured
  And I wait for 5 seconds
  And I click the settings page
  And I wait for 5 seconds
  And I publish the page
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/pages"
  And I wait for 2 seconds
  Then I check the page with title "new page featured"