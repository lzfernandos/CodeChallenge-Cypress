import loginPage from '../pages/LoginPage'
import securePage from '../pages/SecurePage'

import commonUtils from '../pages/CommonUtils'
import loginFactory from '../factories/LoginFactory'

describe('login page', () => {

    beforeEach(() => {
        commonUtils.go('/login')
    })

    it('EndToEnd Login Test', () => {

        var user = loginFactory.user()

        loginPage.fillForm(user)
        loginPage.login()
        commonUtils.validateSuccessMessage('You logged into a secure area!')
        securePage.logout()
        commonUtils.validateSuccessMessage('You logged out of the secure area!')
    })

    it('Username invalid', () => {

        var user = loginFactory.user()
        user.username = ' '

        loginPage.fillForm(user)
        loginPage.login()
        commonUtils.validateErrorMessage('Your username is invalid!')
    })

    it('Password invalid', () => {

        var user = loginFactory.user()
        user.password = ' '

        loginPage.fillForm(user)
        loginPage.login()
        commonUtils.validateErrorMessage('Your password is invalid!')
    })

    it('Must be logged', () => {

        commonUtils.go('/secure')
        commonUtils.validateErrorMessage('You must login to view the secure area!')
    })
})