
class SignInPage {
    
    verifyORGHRMLogo() {
        cy.get('.orangehrm-login-branding > img')
        .should('have.attr', 'src', '/web/images/ohrm_branding.png?1672659722816')
        .should('have.attr', 'alt', 'company-branding')
        .should('be.visible')

    }

    
    verifyParticipantsKaylee() {
        cy.get('#av-masonry-1-item-1540')
            .should('have.attr', 'href', 'https://scaraway.com/portfolio-item/kaylee-2/')
            .find('h3')
            .should('have.text', 'Kaylee');

    }



}

export default SignInPage;