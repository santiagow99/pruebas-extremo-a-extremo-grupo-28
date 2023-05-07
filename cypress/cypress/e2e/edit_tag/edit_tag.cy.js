describe("Editar tag", () => {

  beforeEach(()=>{
    cy.visit("http://localhost:2368/ghost/#/signin");
    cy.wait(5000);
  });

  it("E1. Editar el nombre del tag creado", () => {
    let number = Math.floor(Math.random() * 100).toString();
    let nombreTag = "Mi tag número " + number;
    let slugTag = "mi-tag-numero-" + number;
    
    // Autenticación en ghost
    cy.url().should("eq", "http://localhost:2368/ghost/#/signin");
    cy.get("#ember8").type(Cypress.env("USERNAME"));
    cy.wait(1000);
    cy.get("#ember10").type(Cypress.env("PASSWORD"));
    cy.wait(1000);
    cy.get("#ember12").click();
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:2368/ghost/#/site");
    // Entrar al módulo de tags
    cy.visit("http://localhost:2368/ghost/#/tags");
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:2368/ghost/#/tags");
    // Crear nuevo tag
    cy.visit("http://localhost:2368/ghost/#/tags/new");
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:2368/ghost/#/tags/new");
    cy.get("#tag-name").type(nombreTag);
    cy.wait(1000);
    cy.get(".gh-btn-icon").click();
    cy.wait(2000);
    // Ver el listado de los tags
    cy.visit("http://localhost:2368/ghost/#/tags");
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:2368/ghost/#/tags");
    // Seleccionar el tag creado
    cy.visit("http://localhost:2368/ghost/#/tags/"+slugTag);
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:2368/ghost/#/tags/"+slugTag);
    // Editar el nombre del tag creado
    cy.get("#tag-name").type(" editado");
    cy.wait(1000);
    cy.get(".gh-btn-blue").click();
    cy.wait(2000);
    // Verificar el listado de tags
    cy.visit("http://localhost:2368/ghost/#/tags");
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:2368/ghost/#/tags");
    // Cerrar sesión
    cy.get(".gh-user-avatar").scrollIntoView();
    cy.wait(1000);
    cy.get(".gh-user-avatar").click();
    cy.wait(1000);
    cy.get(".user-menu-signout").click();
    cy.wait(2000);
  });

  it("E2. Editar el slug del tag creado", () => {
    let number = Math.floor(Math.random() * 100).toString();
    let nombreTag = "Mi tag número " + number;
    let slugTag = "mi-tag-numero-" + number;
    
    // Autenticación en ghost
    cy.url().should("eq", "http://localhost:2368/ghost/#/signin");
    cy.get("#ember8").type(Cypress.env("USERNAME"));
    cy.wait(1000);
    cy.get("#ember10").type(Cypress.env("PASSWORD"));
    cy.wait(1000);
    cy.get("#ember12").click();
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:2368/ghost/#/site");
    // Entrar al módulo de tags
    cy.visit("http://localhost:2368/ghost/#/tags");
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:2368/ghost/#/tags");
    // Crear nuevo tag
    cy.visit("http://localhost:2368/ghost/#/tags/new");
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:2368/ghost/#/tags/new");
    cy.get("#tag-name").type(nombreTag);
    cy.wait(1000);
    cy.get(".gh-btn-icon").click();
    cy.wait(2000);
    // Ver el listado de los tags
    cy.visit("http://localhost:2368/ghost/#/tags");
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:2368/ghost/#/tags");
    // Seleccionar el tag creado
    cy.visit("http://localhost:2368/ghost/#/tags/"+slugTag);
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:2368/ghost/#/tags/"+slugTag);
    // Editar el slug del tag creado
    cy.get("#tag-slug").type("-editado-" + number);
    cy.wait(1000);
    cy.get(".gh-btn-blue").click();
    cy.wait(2000);
    // Verificar el listado de tags
    cy.visit("http://localhost:2368/ghost/#/tags");
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:2368/ghost/#/tags");
    // Cerrar sesión
    cy.get(".gh-user-avatar").scrollIntoView();
    cy.wait(1000);
    cy.get(".gh-user-avatar").click();
    cy.wait(1000);
    cy.get(".user-menu-signout").click();
    cy.wait(2000);
  });

  it("E3. Editar la descripción del tag creado", () => {
    let number = Math.floor(Math.random() * 100).toString();
    let nombreTag = "Mi tag número " + number;
    let slugTag = "mi-tag-numero-" + number;
    let descripcion = "Esta es la descripción de mi tag " + nombreTag;
    
    // Autenticación en ghost
    cy.url().should("eq", "http://localhost:2368/ghost/#/signin");
    cy.get("#ember8").type(Cypress.env("USERNAME"));
    cy.wait(1000);
    cy.get("#ember10").type(Cypress.env("PASSWORD"));
    cy.wait(1000);
    cy.get("#ember12").click();
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:2368/ghost/#/site");
    // Entrar al módulo de tags
    cy.visit("http://localhost:2368/ghost/#/tags");
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:2368/ghost/#/tags");
    // Crear nuevo tag
    cy.visit("http://localhost:2368/ghost/#/tags/new");
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:2368/ghost/#/tags/new");
    cy.get("#tag-name").type(nombreTag);
    cy.wait(1000);
    cy.get(".gh-btn-icon").click();
    cy.wait(2000);
    // Ver el listado de los tags
    cy.visit("http://localhost:2368/ghost/#/tags");
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:2368/ghost/#/tags");
    // Seleccionar el tag creado
    cy.visit("http://localhost:2368/ghost/#/tags/"+slugTag);
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:2368/ghost/#/tags/"+slugTag);
    // Editar la descripción del tag creado
    cy.get("#tag-description").type(descripcion);
    cy.wait(1000);
    cy.get(".gh-btn-blue").click();
    cy.wait(2000);
    // Verificar el listado de tags
    cy.visit("http://localhost:2368/ghost/#/tags");
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:2368/ghost/#/tags");
    // Cerrar sesión
    cy.get(".gh-user-avatar").scrollIntoView();
    cy.wait(1000);
    cy.get(".gh-user-avatar").click();
    cy.wait(1000);
    cy.get(".user-menu-signout").click();
    cy.wait(2000);
  });

  it("E4. Editar el color del tag creado", () => {
    let number = Math.floor(Math.random() * 100).toString();
    let nombreTag = "Mi tag número " + number;
    let slugTag = "mi-tag-numero-" + number;
    
    // Autenticación en ghost
    cy.url().should("eq", "http://localhost:2368/ghost/#/signin");
    cy.get("#ember8").type(Cypress.env("USERNAME"));
    cy.wait(1000);
    cy.get("#ember10").type(Cypress.env("PASSWORD"));
    cy.wait(1000);
    cy.get("#ember12").click();
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:2368/ghost/#/site");
    // Entrar al módulo de tags
    cy.visit("http://localhost:2368/ghost/#/tags");
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:2368/ghost/#/tags");
    // Crear nuevo tag
    cy.visit("http://localhost:2368/ghost/#/tags/new");
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:2368/ghost/#/tags/new");
    cy.get("#tag-name").type(nombreTag);
    cy.wait(1000);
    cy.get(".gh-btn-icon").click();
    cy.wait(2000);
    // Ver el listado de los tags
    cy.visit("http://localhost:2368/ghost/#/tags");
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:2368/ghost/#/tags");
    // Seleccionar el tag creado
    cy.visit("http://localhost:2368/ghost/#/tags/"+slugTag);
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:2368/ghost/#/tags/"+slugTag);
    // Editar el color del tag creado
    cy.get('input[name="accent-color"]').type("4FB5ED");
    cy.wait(1000);
    cy.get(".gh-btn-blue").click();
    cy.wait(2000);
    // Verificar el listado de tags
    cy.visit("http://localhost:2368/ghost/#/tags");
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:2368/ghost/#/tags");
    // Cerrar sesión
    cy.get(".gh-user-avatar").scrollIntoView();
    cy.wait(1000);
    cy.get(".gh-user-avatar").click();
    cy.wait(1000);
    cy.get(".user-menu-signout").click();
    cy.wait(2000);
  });

})