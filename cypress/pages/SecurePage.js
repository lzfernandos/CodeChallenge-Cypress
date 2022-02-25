

class SecurePage {

    logout() {
        cy.get('div[class=example] a').click()
    }

}

export default new SecurePage;