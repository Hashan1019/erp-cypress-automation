import SignInPage from "../../PageObjects/SignInPage";
import SignInSelectors from "../../support/Selectors/SignInSelectors";
//import selectors from "../../support/selectors";



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

        //Invalid login
        cy.login('invalidLogin');
        cy.clickOnButton('Sign in now');
        cy.verifyTextErrorMessage('.MuiAlert-message', 'Invalid username or password');
        cy.reload()

        //Valid login
        cy.login('validLogin');
        cy.clickOnButton('Sign in now');

        //Verify HomePage
        cy.verifyImage(SignInSelectors.imageAgrixLogoClassName, SignInSelectors.imageAgrixLogoSrc);
        cy.verifyNavigationBar('.MuiToolbar-root');

    })

})