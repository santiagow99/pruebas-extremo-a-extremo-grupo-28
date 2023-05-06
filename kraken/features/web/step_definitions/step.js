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
    let element = await this.driver.$("#ember107");
    return await element.click();
});

When("I enter the tag name", async function () {
    let tagName = "Mi primer tag"
    let element = await this.driver.$('#tag-name');
    return await element.setValue(password);
});

When("I save the new tag", async function() {
    let element = await this.driver.$("#ember217");
    return await element.click();
});