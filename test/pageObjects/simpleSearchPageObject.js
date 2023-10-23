const ParentPageObject = require('./parentPageObject')

class SimpleSearchPageObject extends ParentPageObject {

  async clickSearchBar() {
    const searchBar = await browser.$('aria/Search Icon')
    await searchBar.click()

    const closeSearchButton = browser.$('button[data-testid=search-close-button]')
    await expect(closeSearchButton).toBeDisplayed()
  }

  async enterSearchTerm(searchTerm) {
    const searchBox = await browser.$('input[data-testid=search-input]')
    await searchBox.setValue(searchTerm)

    const clearSearchButton = browser.$('//button/p[contains(text(),\'Clear\')]')
    await expect(clearSearchButton).toBeDisplayed()
  }

  async verifySuccessfulSearchResults() {
    // After a successful search the existing 'Promoted Offers' and 'Recommended For You' elements are replaced without title.
    const searchResults = await $('div[data-testid=search_results_row]')
    const searchResultsTitle = await searchResults.$('span[data-testid=search-result-title]')
    await this.isElementEqualToExpected(searchResultsTitle, '')
  }

  async selectFromSearchResultsList(listIndex) {
    const resultList = await $('div[data-testid=search_results_row]')
    const resultToSelect = await resultList.$(`div div div div:nth-child(${listIndex})`)
    await resultToSelect.click()
  }
}

module.exports = SimpleSearchPageObject
