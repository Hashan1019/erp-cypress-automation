import SignInSelectors from "../../support/Selectors/SignInSelectors";
import RoleSelectors from "../../support/selectors/RoleSelectors";
import CommonSelectors from "../../support/selectors/CommonSelectors";
import RolePage from "../../PageObjects/RolePage";
import SignInPage from "../../PageObjects/SignInPage";

describe('ERP - RolePageTestAutomation', () => {

    before(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.visit(Cypress.env('url'))
        const signInPage = new SignInPage()
        signInPage.verifyValidLogin();
    
        const rolePage = new RolePage()
        rolePage.verifyClickNavUMRole()
    });

    it('Verify Add Role - Level 1', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        const rolePage = new RolePage()
        rolePage.verifyAddRole()

    })

    after(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        // cy.clickLink("Factory Management")
        //     .clickLinkByXpath(DivisionSelectors.btnNavDivisionXpath);

    })
})