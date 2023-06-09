import SignInPage from "../../PageObjects/SignInPage";
import UserPage from "../../PageObjects/UserPage";

describe('ERP - UserPageTestAutomation', () => {

    before(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.visit(Cypress.env('url'))
        const signInPage = new SignInPage()
        signInPage.verifyValidLogin();

        const userPage = new UserPage()
        userPage.verifyClickNavUMUser()

    });

    it('Verify Add User - Admin', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        const userPage = new UserPage()
        userPage.verifyAddUser()

    })

    after(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        // cy.clickLink("Factory Management")
        //     .clickLinkByXpath(DivisionSelectors.btnNavDivisionXpath);

    })
})