const {Given, When, Then } = require('@wdio/cucumber-framework');

Given ("As a user I open the home page", async () => {
    await browser.url ("https://www.newegg.com")
});

When ("I close the promo banner if it appears", async () => {
   browser.refresh();
});

When (`Entry the word "Windows" in the search bar`, async () => {
    const searchField = await $('div.header2021-search-box.auto-flex'); 
    await searchField.click();
    await searchField.setValue("Windows");
});
When ('Click the search', async () => {
    const searchButton = await $("div.header2021-search-button > button");
    await searchButton.click();
});

Then ('Check that at least one item appears' , async () => {

});

When ('Open "Today\'s Best Deals" tab', async () => {

});

When ('Click on the Internet shop logo (top right corner)' , async () => {

});

Then ('Check that the main page opened', async () => {

});
