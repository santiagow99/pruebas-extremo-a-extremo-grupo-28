describe("Editar page", () => {

    beforeEach(()=>{
      cy.visit("http://localhost:2368/ghost/#/signin");
      cy.wait(5000);
    });
  
    it("E1. Editar el titulo de la página creada", () => {
      let nombrePagina = "new page title";
      
      // Autenticación en ghost
      cy.url().should("eq", "http://localhost:2368/ghost/#/signin");
      cy.get("#ember8").type(Cypress.env("USERNAME"));
      cy.wait(1000);
      cy.get("#ember10").type(Cypress.env("PASSWORD"));
      cy.wait(1000);
      cy.get("#ember12").click();
      cy.wait(2000);
      cy.url().should("eq", "http://localhost:2368/ghost/#/site");
      // Entrar al módulo de paginas
      cy.visit("http://localhost:2368/ghost/#/pages");
      cy.wait(2000);
      cy.url().should("eq", "http://localhost:2368/ghost/#/pages");
      // Crear nueva pagina
      cy.visit("http://localhost:2368/ghost/#/editor/page");
      cy.wait(2000);
      cy.url().should("eq", "http://localhost:2368/ghost/#/editor/page");
      cy.get(".gh-editor-title").type(nombrePagina).click();
      cy.wait(1000);
      cy.get(".gh-koenig-editor-pane").click()
      cy.wait(1000);
      cy.get('.gh-publishmenu').click();
      cy.wait(2000);
      cy.get(".gh-publishmenu-button").click();
      cy.wait(2000);
      // Ver el listado de las páginas
      cy.visit("http://localhost:2368/ghost/#/pages");
      cy.wait(2000);
      cy.url().should("eq", "http://localhost:2368/ghost/#/pages");
      // Seleccionar la página creada
      cy.wait(2000);
      cy.contains(nombrePagina).click()
      cy.wait(2000)
      // // Editar el nombre de la página creada
      cy.get(".gh-editor-title").type("new title v2");
      cy.wait(1000);
      cy.get(".gh-koenig-editor-pane").click()
      cy.wait(1000);
      cy.get('.gh-publishmenu').click();
      cy.wait(2000);
      cy.get(".gh-publishmenu-button").click();
      cy.wait(2000);
      // Verificar el listado de páginas
      cy.visit("http://localhost:2368/ghost/#/pages");
      cy.wait(2000);
      cy.url().should("eq", "http://localhost:2368/ghost/#/pages");
      // Cerrar sesión
      cy.get(".gh-user-avatar").scrollIntoView();
      cy.wait(1000);
      cy.get(".gh-user-avatar").click();
      cy.wait(1000);
      cy.get(".user-menu-signout").click();
      cy.wait(2000);
    });

    it("E2. Editar la descripción de una página creada", () => {
      let nombrePagina = "new page description";
      // Autenticación en ghost
      cy.url().should("eq", "http://localhost:2368/ghost/#/signin");
      cy.get("#ember8").type(Cypress.env("USERNAME"));
      cy.wait(1000);
      cy.get("#ember10").type(Cypress.env("PASSWORD"));
      cy.wait(1000);
      cy.get("#ember12").click();
      cy.wait(2000);
      cy.url().should("eq", "http://localhost:2368/ghost/#/site");
      // Entrar al módulo de paginas
      cy.visit("http://localhost:2368/ghost/#/pages");
      cy.wait(2000);
      cy.url().should("eq", "http://localhost:2368/ghost/#/pages");
      // Crear nueva pagina
      cy.visit("http://localhost:2368/ghost/#/editor/page");
      cy.wait(2000);
      cy.url().should("eq", "http://localhost:2368/ghost/#/editor/page");
      cy.get(".gh-editor-title").type(nombrePagina).click();
      cy.wait(1000)
      cy.get(".koenig-editor__editor").type(nombrePagina).click();
      cy.wait(1000);
      cy.get(".gh-koenig-editor-pane").click()
      cy.wait(1000);
      cy.get('.gh-publishmenu').click();
      cy.wait(2000);
      cy.get(".gh-publishmenu-button").click();
      cy.wait(2000);
      // Ver el listado de las páginas
      cy.visit("http://localhost:2368/ghost/#/pages");
      cy.wait(2000);
      cy.url().should("eq", "http://localhost:2368/ghost/#/pages");
      // Seleccionar la página creada
      cy.wait(2000);
      cy.contains(nombrePagina).click()
      cy.wait(2000)
      // // Editar la descripción de la página creada
      cy.get(".koenig-editor__editor").type("new description v2");
      cy.wait(1000);
      cy.get(".gh-koenig-editor-pane").click()
      cy.wait(1000);
      cy.get('.gh-publishmenu').click();
      cy.wait(2000);
      cy.get(".gh-publishmenu-button").click();
      cy.wait(2000);
      // Verificar el listado de páginas
      cy.visit("http://localhost:2368/ghost/#/pages");
      cy.wait(2000);
      cy.url().should("eq", "http://localhost:2368/ghost/#/pages");
      // Cerrar sesión
      cy.get(".gh-user-avatar").scrollIntoView();
      cy.wait(1000);
      cy.get(".gh-user-avatar").click();
      cy.wait(1000);
      cy.get(".user-menu-signout").click();
      cy.wait(2000);
    });

    it("E3. Editar la url de una pagina creada", () => {
      let nombrePagina = "new page url";
      // Autenticación en ghost
      cy.url().should("eq", "http://localhost:2368/ghost/#/signin");
      cy.get("#ember8").type(Cypress.env("USERNAME"));
      cy.wait(1000);
      cy.get("#ember10").type(Cypress.env("PASSWORD"));
      cy.wait(1000);
      cy.get("#ember12").click();
      cy.wait(2000);
      cy.url().should("eq", "http://localhost:2368/ghost/#/site");
      // Entrar al módulo de paginas
      cy.visit("http://localhost:2368/ghost/#/pages");
      cy.wait(2000);
      cy.url().should("eq", "http://localhost:2368/ghost/#/pages");
      // Crear nueva pagina
      cy.visit("http://localhost:2368/ghost/#/editor/page");
      cy.wait(2000);
      cy.url().should("eq", "http://localhost:2368/ghost/#/editor/page");
      cy.get(".gh-editor-title").type(nombrePagina).click();
      cy.wait(1000)
      cy.get(".koenig-editor__editor").type(nombrePagina).click();
      cy.wait(1000);
      cy.get(".gh-koenig-editor-pane").click()
      cy.wait(1000);
      cy.get('.gh-publishmenu').click();
      cy.wait(2000);
      cy.get(".gh-publishmenu-button").click();
      cy.wait(2000);
      // Ver el listado de las páginas
      cy.visit("http://localhost:2368/ghost/#/pages");
      cy.wait(2000);
      cy.url().should("eq", "http://localhost:2368/ghost/#/pages");
      // Seleccionar la página creada
      cy.wait(2000);
      cy.contains(nombrePagina).click()
      cy.wait(2000)
      // // Editar el url de la página creada
      cy.get(".post-setting-slug").type("new page url - v2").click();
      cy.wait(1000);
      cy.get(".settings-menu-header>button").click();
      cy.wait(2000)
      cy.visit("http://localhost:2368/ghost/#/pages");
      cy.wait(2000);
      cy.url().should("eq", "http://localhost:2368/ghost/#/pages");
      // Cerrar sesión
      cy.get(".gh-user-avatar").scrollIntoView();
      cy.wait(1000);
      cy.get(".gh-user-avatar").click();
      cy.wait(1000);
      cy.get(".user-menu-signout").click();
      cy.wait(2000);
    });

    it("E4. Editar una pagina creada para hacerla de tipo featured", () => {
      let nombrePagina = "new page featured";
      // Autenticación en ghost
      cy.url().should("eq", "http://localhost:2368/ghost/#/signin");
      cy.get("#ember8").type(Cypress.env("USERNAME"));
      cy.wait(1000);
      cy.get("#ember10").type(Cypress.env("PASSWORD"));
      cy.wait(1000);
      cy.get("#ember12").click();
      cy.wait(2000);
      cy.url().should("eq", "http://localhost:2368/ghost/#/site");
      // Entrar al módulo de paginas
      cy.visit("http://localhost:2368/ghost/#/pages");
      cy.wait(2000);
      cy.url().should("eq", "http://localhost:2368/ghost/#/pages");
      // Crear nueva pagina
      cy.visit("http://localhost:2368/ghost/#/editor/page");
      cy.wait(2000);
      cy.url().should("eq", "http://localhost:2368/ghost/#/editor/page");
      cy.get(".gh-editor-title").type(nombrePagina).click();
      cy.wait(1000)
      cy.get(".koenig-editor__editor").type(nombrePagina).click();
      cy.wait(1000);
      cy.get(".gh-koenig-editor-pane").click()
      cy.wait(1000);
      cy.get('.gh-publishmenu').click();
      cy.wait(2000);
      cy.get(".gh-publishmenu-button").click();
      cy.wait(2000);
      // Ver el listado de las páginas
      cy.visit("http://localhost:2368/ghost/#/pages");
      cy.wait(2000);
      cy.url().should("eq", "http://localhost:2368/ghost/#/pages");
      // Seleccionar la página creada
      cy.wait(2000);
      cy.contains(nombrePagina).click()
      cy.wait(2000)
      // Activar la opción de featured page
      cy.get(".checkbox").click()
      cy.wait(5000)
      cy.get(".settings-menu-header>button").click();
      cy.wait(2000)
      cy.visit("http://localhost:2368/ghost/#/pages");
      cy.wait(2000);
      cy.url().should("eq", "http://localhost:2368/ghost/#/pages");
      // Cerrar sesión
      cy.get(".gh-user-avatar").scrollIntoView();
      cy.wait(1000);
      cy.get(".gh-user-avatar").click();
      cy.wait(1000);
      cy.get(".user-menu-signout").click();
      cy.wait(2000);
    });
})

