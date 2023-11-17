const ParentPageObject = require('./parentPageObject');

class StudentOfferPageObject extends ParentPageObject {
  async verifyStudentOfferPage() {
    const brandHeading = await $('div[data-testid=brand-name]');
    await expect(brandHeading).toBeDisplayed();
  }
}

module.exports = StudentOfferPageObject;
