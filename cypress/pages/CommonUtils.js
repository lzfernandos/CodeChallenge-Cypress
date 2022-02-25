

class CommonUtils {

    go(page) {
        cy.visit(page)
    }
    
    validateSuccessMessage(expectedMessage) {
        cy.get('#flash[class="flash success"]').contains(expectedMessage).should('be.visible')
    }

    validateErrorMessage(expectedMessage) {
        cy.get('#flash[class="flash error"]').contains(expectedMessage).should('be.visible')
    }

}

export default new CommonUtils;