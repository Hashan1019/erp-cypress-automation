import SignInSelectors from "../../support/Selectors/SignInSelectors";
import UserSelectors from "../../support/selectors/UserSelectors";
import CommonSelectors from "../../support/selectors/CommonSelectors";
import UserPage from "../../PageObjects/UserPage";

describe('ERP - UserPageTestAutomation', () => {

    before(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.visit(Cypress.env('url'))
            .login('validLogin')
            .clickOnButton('Sign in now')
            .verifyImage(SignInSelectors.imageAgrixLogoClassName, SignInSelectors.imageAgrixLogoSrc)
            .clickLink("User Management")
            .clickLinkByXpath(UserSelectors.btnNavUserXpath);
    });

    it('Verify Add User - Admin', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.clickOnButtonsByXpath(CommonSelectors.btnAddXpath)
            .verifyTopics("Add User")
        const userPage = new UserPage()
        userPage.addUserGeneralDetails()
        //cy.clickOnButton('Save')

    })

    after(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        // cy.clickLink("Factory Management")
        //     .clickLinkByXpath(DivisionSelectors.btnNavDivisionXpath);

    })
})