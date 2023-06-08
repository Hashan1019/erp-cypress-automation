
import SignInPage from "../../PageObjects/SignInPage";

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

        const signInPage = new SignInPage()
        signInPage.verifyInvalidLogin();
        cy.reload();
        signInPage.verifyValidLogin();


    })

    after(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        // cy.clickLink("General");
        // cy.clickLink("Advance Rate");

    })


})