import SignInSelectors from "../../support/Selectors/SignInSelectors";
import DivisionSelectors from "../../support/selectors/DivisionSelectors";
import DivisionPage from "../../PageObjects/DivisionPage";
import CommonSelectors from "../../support/selectors/CommonSelectors";

describe('ERP - DivisionPageTestAutomation', () => {


    before(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.visit(Cypress.env('url'))
            .login('validLogin')
            .clickOnButton('Sign in now')
            .verifyImage(SignInSelectors.imageAgrixLogoClassName, SignInSelectors.imageAgrixLogoSrc)
            .clickLink("Factory Management")
            .clickLinkByXpath(DivisionSelectors.btnNavDivisionXpath);
    });

    it('Verify Add Division', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.clickOnButtonsByXpath(CommonSelectors.btnAddXpath)
            .verifyTopics("Add Division")
        const divisionPage = new DivisionPage()
        divisionPage.addDivisionGeneralDetails()
        //cy.clickOnButton('Save')

    })

    after(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        // cy.clickLink("Balance Rate");

    })
})