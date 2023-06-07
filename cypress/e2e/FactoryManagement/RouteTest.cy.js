import SignInSelectors from "../../support/Selectors/SignInSelectors";
import RouteSelectors from "../../support/selectors/RouteSelectors";
import RoutePage from "../../PageObjects/RoutePage";

describe('ERP - RoutePageTestAutomation', () => {


    before(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.visit(Cypress.env('url'))
            .login('validLogin')
            .clickOnButton('Sign in now')
            .verifyImage(SignInSelectors.imageAgrixLogoClassName, SignInSelectors.imageAgrixLogoSrc)
            .clickLink("Factory Management")
            .clickLinkByXpath(RouteSelectors.btnNavRouteXpath);
    });

    it('Verify Add Route', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.clickOnButtonsByXpath(RouteSelectors.btnAddRouteXpath)
            .verifyTopics("Add Route")
        const routePage = new RoutePage()
        routePage.addRouteGeneralDetails()
        //cy.clickOnButton('Save')

    })

    after(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        // cy.clickLink("Balance Rate");

    })
})