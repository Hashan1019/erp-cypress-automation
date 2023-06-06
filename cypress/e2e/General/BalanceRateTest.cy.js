import SignInSelectors from "../../support/Selectors/SignInSelectors";
import AdvanceRateSelectors from "../../support/selectors/AdvanceRateSelectors";
import GeneralPO from "../../PageObjects/GeneralPO";


describe('ERP - BalanceRatePageTestAutomation', () => {


    before(() => {
        cy.visit(Cypress.env('url'));
        cy.login('validLogin')
        .clickOnButton('Sign in now')
        .verifyImage(SignInSelectors.imageAgrixLogoClassName, SignInSelectors.imageAgrixLogoSrc)
        .clickLink("General")
        .clickLink("Balance Rate");
      });
    
    
     
    
    
    
      it('BalanceRatePage', () => {
       
    
      })
    
      after(() => {
        cy.on('uncaught:exception', (err, runnable) => {
          return false
        })
    
       // cy.clickLink("Balance Rate");
    
      })

})