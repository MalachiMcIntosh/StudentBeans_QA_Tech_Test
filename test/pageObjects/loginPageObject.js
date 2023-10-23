const ParentPageObject = require('./parentPageObject')

const Key = {
  "Backspace": '\uE003',
  "Tab": '\uE004'
}

class LoginPageObject extends ParentPageObject {
  async clickNavBarLogin() {
    const login = await browser.$('a=Login')
    await login.click()
  }

  async enterEmailAddress(emailAddress) {
    const emailAddressInput = await this.getEmailInput()
    await emailAddressInput.setValue(emailAddress)
    await browser.keys(Key.Tab)
  }

  async getEmailInput() {
    const emailAddressInput = await browser.$('input[id=email]')
    return emailAddressInput
  }

  async clearEmailAddress() {
    const emailAddressInput = await this.getEmailInput()
    await emailAddressInput.click()
    const emailAddressValue = await emailAddressInput.getValue();
    const backSpaces = new Array(emailAddressValue.length).fill(Key.Backspace);
    await browser.keys(backSpaces)
    await expect(emailAddressInput).toHaveValue(null)
  }

  async enterPassword(password) {
    const passwordInput = await $('input[id=password]')
    await passwordInput.setValue(password)
    await browser.keys(Key.Tab)
  }

  async completeRecaptcha() {
    await browser.switchToFrame(await $('iframe[title="reCAPTCHA"]'))
    const captchaCheckBox = browser.$(".recaptcha-checkbox-border")
    await captchaCheckBox.click()
    await browser.switchToFrame(null)
  }

  async getLoginButton() {
    const loginButton = await browser.$('//form/div[4]/button')
    return loginButton
  }

  async clickLoginButton() {
    const loginButton = await this.getLoginButton()
    await loginButton.click()
  }

  async verifyLoginButtonClickable() {
    const loginButton = await this.getLoginButton()
    await expect(loginButton).toBeClickable()
  }

  async verifyIncorrectPasswordErrorMessage() {
    const errorMessage = await browser.$('p*=The password you entered is incorrect.')
    await expect(errorMessage).toBeDisplayed()
  }

  async verifyIncorrectEmailErrorMessage() {
    const errorMessage = await browser.$('p*=The email is invalid.')
    await expect(errorMessage).toBeDisplayed()
  }

  async verifyLoginPage() {
    const loginWelcome = await browser.$('p=Log in to your Student Beans account')
    await expect(loginWelcome).toBeDisplayed()
  }
}

module.exports = LoginPageObject


