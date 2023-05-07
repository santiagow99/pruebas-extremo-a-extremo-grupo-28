describe("Eliminar post", () => {

  beforeEach(()=>{
    cy.visit("http://localhost:2368/ghost/#/signin");
    cy.wait(5000);
  });
  it("E3. Eliminar un post que fue creado como draft", () => {   
    let nombrePost = "new post draft" 
    // Autenticación en ghost
    cy.url().should("eq", "http://localhost:2368/ghost/#/signin");
    cy.get("#ember8").type(Cypress.env("USERNAME"));
    cy.wait(1000);
    cy.get("#ember10").type(Cypress.env("PASSWORD"));
    cy.wait(1000);
    cy.get("#ember12").click();
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:2368/ghost/#/site");
    // Entrar al módulo de post
    cy.visit("http://localhost:2368/ghost/#/posts");
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:2368/ghost/#/posts");
    // Crear un nuevo post
    cy.visit("http://localhost:2368/ghost/#/editor/post");
    cy.get(".gh-editor-title").type(nombrePost).click();
    cy.wait(1000);
    cy.get(".post-settings").click();
    cy.wait(8000);
    // Ver el listado de lost posts
    cy.visit("http://localhost:2368/ghost/#/posts");
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:2368/ghost/#/posts");
    // Seleccionar el post creado
    cy.wait(2000);
    cy.contains(nombrePost).click()
    cy.wait(2000)
    // Abrir las opciones del post
    cy.get(".post-settings").click();
    cy.wait(1000);
    // Eliminar el post
    cy.get(".settings-menu-delete-button").scrollIntoView();
    cy.wait(1000);
    cy.get(".settings-menu-delete-button").click();
    cy.wait(2000);
    cy.get(".gh-btn-red").click();
    cy.wait(2000);    
    // Cerrar sesión
    cy.get(".gh-user-avatar").scrollIntoView();
    cy.wait(1000);
    cy.get(".gh-user-avatar").click();
    cy.wait(1000);
    cy.get(".user-menu-signout").click();
    cy.wait(2000);
  });

  it("E4. Eliminar el primer post de la lista de posts", () => {    
    // Autenticación en ghost
    cy.url().should("eq", "http://localhost:2368/ghost/#/signin");
    cy.get("#ember8").type(Cypress.env("USERNAME"));
    cy.wait(1000);
    cy.get("#ember10").type(Cypress.env("PASSWORD"));
    cy.wait(1000);
    cy.get("#ember12").click();
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:2368/ghost/#/site");
    // Entrar al módulo de post
    cy.visit("http://localhost:2368/ghost/#/posts");
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:2368/ghost/#/posts");
    // Seleccionar el primer post de la lista
    // cy.get(".gh-posts-list-item").click();
    cy.contains("By Ghost in Getting Started").click()
    cy.wait(2000);
    // Abrir las opciones del post
    cy.get(".post-settings").click();
    cy.wait(1000);
    // Eliminar el post
    cy.get(".settings-menu-delete-button").scrollIntoView();
    cy.wait(1000);
    cy.get(".settings-menu-delete-button").click();
    cy.wait(2000);
    cy.get(".gh-btn-red").click();
    cy.wait(2000);    
    // Cerrar sesión
    cy.get(".gh-user-avatar").scrollIntoView();
    cy.wait(1000);
    cy.get(".gh-user-avatar").click();
    cy.wait(1000);
    cy.get(".user-menu-signout").click();
    cy.wait(2000);
  });

})