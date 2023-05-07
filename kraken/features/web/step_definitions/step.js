const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#ember8');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#ember10');
    return await element.setValue(password);
});

When('I click next', async function() {
    let element = await this.driver.$('#ember12');
    return await element.click();
})

When('I got to new page form', async function() {
    let element = await this.driver.$('.gh-nav-new-post');
    return await element.click();
})

When('I edit the page content', async function() {
    let title = "new page";
    let elementTitle = await this.driver.$('.gh-editor-title');
    await elementTitle.setValue(title);
    let content = "new page description"
    let elementContent = await this.driver.$(".koenig-editor__editor");
    return await elementContent.setValue(content);
})

When('I publish the page', async function () {
    let publishDropdown = await this.driver.$(".ember-basic-dropdown-trigger");
    await publishDropdown.click();
    let publishButton = await this.driver.$(".gh-publishmenu-button");
    await publishButton.click();
})

When('I return to page list', async function () {
    return await browser.back();
});

// Editar Tag

When("I click on tags module", async function() {
  let element = await this.driver.$("#ember38");
  return await element.click();
});

When("I click on new tag", async function() {
  let element = await this.driver.$(".gh-btn-green");
  return await element.click();
});

When("I enter the tag name", async function () {
  let element = await this.driver.$("#tag-name");
  return await element.setValue("1 tag");
});

Then("I save the tag", async function () {
  let element = await this.driver.$(".gh-btn-icon");
  return await element.click();
});

When("I click on the created tag", async function() {
  let element = await this.driver.$(".gh-tags-list-item");
  return await element.click();
});

When("I edit the tag name", async function () {
  let number = Math.floor(Math.random() * 100).toString();
  let element = await this.driver.$("#tag-name");
  return await element.setValue("tag editado " + number);
});

When("I edit the tag slug", async function () {
  let number = Math.floor(Math.random() * 100).toString();
  let element = await this.driver.$("#tag-slug");
  return await element.setValue("tag-" + number + "-editado");
});

When("I edit the tag description", async function () {
  let element = await this.driver.$("#tag-description");
  return await element.setValue("Se agrega descripción");
});

When("I edit the tag color", async function () {
  let element = await this.driver.$('input[name="accent-color"]');
  return await element.setValue("4FB5ED");
});

When("I open my user info", async function() {
  let element = await this.driver.$(".gh-user-avatar");
  return await element.click();
});

When("I close my session", async function() {
  let element = await this.driver.$(".user-menu-signout");
  return await element.click();
});

// Eliminar Post

When("I click on posts module", async function() {
  let element = await this.driver.$("#ember28");
  return await element.click();
});

When("I click the first post on the list", async function() {
  let element = await this.driver.$(".gh-posts-list-item");
  return await element.click();
});

When("I click the post settings", async function() {
  let element = await this.driver.$(".post-settings");
  return await element.click();
});

Then("I click the delete button", async function() {
  let element = await this.driver.$(".settings-menu-delete-button");
  element.scrollIntoView(false);
  return await element.click();
});

Then("I confirm the delete", async function() {
  let element = await this.driver.$(".gh-btn-red");
  return await element.click();
});