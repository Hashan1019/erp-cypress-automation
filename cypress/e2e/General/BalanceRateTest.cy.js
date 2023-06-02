import SignInSelectors from "../../support/Selectors/SignInSelectors";
import AdvanceRateSelectors from "../../support/selectors/AdvanceRateSelectors";
import GeneralPO from "../../PageObjects/GeneralPO";


describe('ERP - BalanceRatePageTestAutomation', () => {

    before(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.visit(Cypress.env('url'));
        cy.intercept('GET', '/webConfiguration.json', { apidomain: 'url' });

        cy.login('validLogin');
        cy.clickOnButton('Sign in now');
        cy.verifyImage(SignInSelectors.imageAgrixLogoClassName, SignInSelectors.imageAgrixLogoSrc);
        cy.clickLink("General");
        cy.clickLink("Balance Rate");

    })

    it('BalanceRatePageTest', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        
        const generalPO = new GeneralPO();
        //Dropdown filters
        generalPO.verifyGroupDropdownRandomSelect();
        generalPO.verifyFactoryDropdownRandomSelect();
        generalPO.verifyProductDropdownRandomSelect();
        generalPO.verifyYearMonthRandomSelect();
    })

})