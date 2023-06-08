import SignInSelectors from "../../support/Selectors/SignInSelectors";
import RouteSelectors from "../../support/selectors/RouteSelectors";
import CommonSelectors from "../../support/selectors/CommonSelectors";
import RoutePage from "../../PageObjects/RoutePage";
import SignInPage from "../../PageObjects/SignInPage";

describe('ERP - RoutePageTestAutomation', () => {


    before(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.visit(Cypress.env('url'))

        const signInPage = new SignInPage()
        signInPage.verifyValidLogin();

        const routePage = new RoutePage()
        routePage.verifyClickNavFMRoute()
    });

    it('Verify Add Route', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        const routePage = new RoutePage()
        routePage.verifyAddRoute()


    })

    after(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        // cy.clickLink("Factory Management")
        //     .clickLinkByXpath(DivisionSelectors.btnNavDivisionXpath);

    })
})