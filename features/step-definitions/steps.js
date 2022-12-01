const {Given, When, Then } = require('@wdio/cucumber-framework');
const URL = "https://www.newegg.com/"
Given ("As a user I open the home page", async () => {
    await browser.url (URL)
});

Given ("I close the promo banner if it appears", async () => {

   //browser.refresh();
   //Balck friday is over banner no longer appears
});

When ('Entry the word Windows in the search bar', async () => {
    const searchField = await $('input[type=search]'); 
    await searchField.click();
    await searchField.setValue("Windows");
});
When ('Click the search', async () => {
    const searchButton = await $("div.header2021-search-button > button");
    await searchButton.click();
});

Then ('Check that at least one item appears' , async () => {
    const listOfItems = await $(` div.item-cells-wrap.border-cells.items-grid-view.four-cells.expulsion-one-cell`);
    await expect(listOfItems).not.toHaveProperty('childElementCount', 0);
});

When ('Open "Today\'s Best Deals" tab', async () => {
    const bestDeals = await $('#trendingBanner_720202');
    await bestDeals.click();
});

When ('Click on the Internet shop logo' , async () => {
    const logo = await $('div.header2021-logo > a');
    await logo.click();
});

Then ('Check that the main page opened', async () => {
    await expect(browser).toHaveUrl(URL);
});
