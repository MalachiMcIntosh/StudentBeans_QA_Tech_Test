const { Given, When, Then} = require('@cucumber/cucumber')
const TrendingNowPageObject = require('../pageObjects/trendingNowPageObject')
const StudentOfferPageObject = require('../pageObjects/studentOfferPageObject')

const trendingNowPageObject = new TrendingNowPageObject()
const studentOfferPageObject = new StudentOfferPageObject()

When('I click the Trending Now nav bar option', async () => {
  await trendingNowPageObject.clickTrendingNow()
  await trendingNowPageObject.verifyTrendingNowPage()
})

Then('I should select the 6th discount in the Trending Now offers list', async () => {
  await trendingNowPageObject.selectFromTrendingOffers(6)
  await studentOfferPageObject.verifyStudentOfferPage()
})

