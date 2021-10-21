const { When, Then, setDefaultTimeout } = require('cucumber');
const { expect } = require('chai');
setDefaultTimeout(60000);

When(/^I open stupid McDonalds web page$/, function () {
    return browser.get('https://www.mcdonalds.com/us/en-us.html');
});

Then(/^Page title should be "([^"]*)"$/, function (pageTitle) {
    expect(await browser.getTitle()).to.be.equal(pageTitle);
});

// When (/^I scroll to "([^"]*)"$/, function (elementToScrollTo) {

// });

// When (/^I click "([^"]*)"$/, function (elementToClick) {

// });

// When (/^I wait until "([^"]*)" is displayed$/, function (elementToBeDusplayed) {

// });

// When (/^And I switch to the next tab$/, function () {

// });

        