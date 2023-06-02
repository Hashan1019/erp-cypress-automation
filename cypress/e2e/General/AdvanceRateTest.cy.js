import SignInSelectors from "../../support/Selectors/SignInSelectors";
import AdvanceRateSelectors from "../../support/selectors/AdvanceRateSelectors";
import AdvanceRatePage from "../../PageObjects/AdvanceRatePage";


describe('ERP - AdvanceRatePageTestAutomation', () => {

    before(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.visit(Cypress.env('url'));
        cy.intercept('GET', '/webConfiguration.json', { apidomain: 'url' });

        cy.login('validLogin');
        cy.clickOnButton('Sign in now');
        cy.verifyImage(SignInSelectors.imageAgrixLogoClassName, SignInSelectors.imageAgrixLogoSrc);

    })

    it('AdvanceRatePageTest', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.clickLink("General");
        cy.clickLink("Advance Rate");
        const adavnceRatePage = new AdvanceRatePage();
        adavnceRatePage.verifyGroupDropdownRandomSelect();
        adavnceRatePage.verifyFactoryDropdownRandomSelect();
        adavnceRatePage.verifyProductDropdownRandomSelect();
        adavnceRatePage.verifyYearMonthRandomSelect();
    })

})