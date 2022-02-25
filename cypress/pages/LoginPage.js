

class LoginPage {

    fillForm(user) {
        cy.get('input#username').type(user.username)
        cy.get('input#password').type(user.password)
    }

    login() {
        cy.get('form#login button').click()
    }

}

export default new LoginPage;