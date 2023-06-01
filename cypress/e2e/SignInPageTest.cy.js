import SignInPage from "../PageObjects/SignInPage";

describe('ERP - SignInPageTestAutomation', () => {

    before(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.visit(Cypress.env('url'));


    })

    it('SignInPageTest', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })


        const signin = new SignInPage();
        cy.verifyTopics('Sign in');

        //invalid login
        cy.login('invalidLogin');
        cy.clickOnButton('Sign in now');
        cy.verifyTextErrorMessage('.MuiAlert-message', 'Invalid username or password');
        cy.reload()

        //valid login
        cy.login('validLogin');
        cy.clickOnButton('Sign in now');

    })

})