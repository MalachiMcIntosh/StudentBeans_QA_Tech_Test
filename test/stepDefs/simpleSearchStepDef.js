const { Given, When, Then} = require('@cucumber/cucumber');
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject');
const HomePageObject = require('../pageObjects/homePageObject');
const StudentOfferPageObject = require('../pageObjects/studentOfferPageObject');

const simpleSearchPageObject = new SimpleSearchPageObject();
const studentOfferPageObject = new StudentOfferPageObject();
const homePageObject = new HomePageObject();

Given('I am on the studentbeans homepage', async () => {
  await homePageObject.goToHomePage();
  await homePageObject.verifyHomePage();
  await homePageObject.acceptAllCookies();
});

When('I open the search bar', async () => {
  await simpleSearchPageObject.clickSearchBar();
});

When('I enter "Samsung"', async () => {
  await simpleSearchPageObject.enterSearchTerm('Samsung');
  await simpleSearchPageObject.verifySuccessfulSearchResults();
});

Then('I should select the 4th "Samsung" search listing', async () => {
  await simpleSearchPageObject.selectFromSearchResultsList(4);
  await studentOfferPageObject.verifyStudentOfferPage();
});
