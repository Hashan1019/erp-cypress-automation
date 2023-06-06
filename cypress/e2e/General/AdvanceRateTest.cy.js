import SignInSelectors from "../../support/Selectors/SignInSelectors";
import AdvanceRateSelectors from "../../support/selectors/AdvanceRateSelectors";
import CommonPO from "../../PageObjects/CommonPO";


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

  it('AdvanceRatePageest', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })

    const commonPO = new CommonPO();
    //Dropdown filters
    commonPO.verifyGroupDropdownSelect()
    commonPO.verifyFactoryDropdownSelect()
    commonPO.verifyProductDropdownSelect()
    commonPO.verifyYearMonthSelect();

    //Add SuperLeaf, NormalLeaf min max values
    cy.enterNumericInputField('advanceRateData', AdvanceRateSelectors.textSuperLeafMinXpath, 'superLeafMin')
      .enterNumericInputField('advanceRateData', AdvanceRateSelectors.textSuperLeafMaxXpath, 'superLeafMax')
      .enterNumericInputField('advanceRateData', AdvanceRateSelectors.textNormalLeafMinXpath, 'normalLeafMin')
      .enterNumericInputField('advanceRateData', AdvanceRateSelectors.textNormalLeafMaxXpath, 'normalLeafMax')
      .wait(1000)
      .clickOnButton('Save');

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