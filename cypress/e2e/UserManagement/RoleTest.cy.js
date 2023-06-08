import SignInSelectors from "../../support/Selectors/SignInSelectors";
import RoleSelectors from "../../support/selectors/RoleSelectors";
import CommonSelectors from "../../support/selectors/CommonSelectors";
import RolePage from "../../PageObjects/RolePage";

describe('ERP - RolePageTestAutomation', () => {

    before(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.visit(Cypress.env('url'))
            .login('validLogin')
            .clickOnButton('Sign in now')
            .verifyImage(SignInSelectors.imageAgrixLogoClassName, SignInSelectors.imageAgrixLogoSrc)
            .clickLink("User Management")
            .clickLinkByXpath(RoleSelectors.btnNavRoleXpath);
    });

    it('Verify Add Role - Level 1', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.clickOnButtonsByXpath(CommonSelectors.btnAddXpath)
            .verifyTopics("Add Role")
        const rolePage = new RolePage()
        rolePage.addRoleGeneralDetails()
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