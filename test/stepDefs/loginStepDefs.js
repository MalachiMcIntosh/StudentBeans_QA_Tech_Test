const { Given, When, Then} = require('@cucumber/cucumber')
const LoginPageObject = require('../pageObjects/loginPageObject')

const loginPageObject = new LoginPageObject()

When('I click Login', async () => {
  await loginPageObject.clickNavBarLogin()
  await loginPageObject.verifyLoginPage()
})

When('I Input an invalid email', async () => {
  await loginPageObject.enterEmailAddress('not an email address')
})

Then('I should see an incorrect email error message', async () => {
  await loginPageObject.verifyIncorrectEmailErrorMessage()
})

When('I input a correct email and incorrect password', async () => {
  await loginPageObject.clearEmailAddress()
  await loginPageObject.enterEmailAddress('test@test.com')
  await loginPageObject.enterPassword('testingStuff') 
  await loginPageObject.completeRecaptcha()
  await loginPageObject.verifyLoginButtonClickable()
  await loginPageObject.clickLoginButton()
})

Then('I should see an incorrect password error message', async () => {
  await loginPageObject.verifyIncorrectPasswordErrorMessage()
})

