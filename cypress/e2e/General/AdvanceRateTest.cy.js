import SignInSelectors from "../../support/Selectors/SignInSelectors";
import AdvanceRateSelectors from "../../support/selectors/AdvanceRateSelectors";
import CommonPO from "../../PageObjects/CommonPO";
import AdvanceRatePage from "../../PageObjects/AdvanceRatePage";


describe('ERP - AdvanceRatePageTestAutomation', () => {


  before(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.visit(Cypress.env('url'))
      .login('validLogin')
      .clickOnButton('Sign in now')
      .verifyImage(SignInSelectors.imageAgrixLogoClassName, SignInSelectors.imageAgrixLogoSrc)
      .clickLink("General")
      .clickLink("Advance Rate");
  });

  it('AdvanceRatePageTest', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })

    const advanceRatePage = new AdvanceRatePage()
    advanceRatePage.addAdvanceRate();
    

    //Success message popup



    //INSERT POSITIVE VALUES = 0 --- Error message popup
    // cy.clickOnButton('Save');
    //cy.verifyMessage(AdvanceRateSelectors.labelErrorMessageXpath, "Insert positive values");

  })

  after(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })

    // cy.clickLink("Balance Rate");

  })
})