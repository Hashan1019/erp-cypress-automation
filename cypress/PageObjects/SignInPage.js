
class SignInPage {
    
    verifyAgrixLogo() {
        cy.get('.MuiAvatar-img')
        .should('have.attr', 'src', 'http://20.198.233.3:5090/static/images/products/AgriGEN.png')
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