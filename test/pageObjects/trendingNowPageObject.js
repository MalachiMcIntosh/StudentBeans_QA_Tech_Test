const ParentPageObject = require('./parentPageObject');

class TrendingNowPageObject extends ParentPageObject {
  async clickTrendingNow() {
    const trendingNow = await browser.$('a=Trending Now');
    await trendingNow.click();
  }

  async selectFromTrendingOffers(listIndex) {
    const resultGrid = await $('div[data-testid=grids-container]');
    const resultToSelect = await resultGrid.$(`div div section div div:nth-child(${listIndex}) article a`);
    await resultToSelect.click();
  }
  
  async verifyTrendingNowPage() {
    const trendingNowHeading = await browser.$('h1=The latest and best student discounts');
    await expect(trendingNowHeading).toBeDisplayed();
  }
}

module.exports = TrendingNowPageObject;
