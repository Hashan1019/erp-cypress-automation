import SignInSelectors from "../../support/Selectors/SignInSelectors";
import FactorySelectors from "../../support/selectors/FactorySelectors";
import FactoryPage from "../../PageObjects/FactoryPage";
import CommonPO from "../../PageObjects/CommonPO";
import factoryData from "../../fixtures/factoryData";
import CommonSelectors from "../../support/selectors/CommonSelectors";

describe('ERP - FactoryPageTestAutomation', () => {


  before(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.visit(Cypress.env('url'))
      .login('validLogin')
      .clickOnButton('Sign in now')
      .verifyImage(SignInSelectors.imageAgrixLogoClassName, SignInSelectors.imageAgrixLogoSrc)
      .clickLink("Factory Management")
      .clickLinkByXpath(FactorySelectors.btnFactoryXpath);
  });

  it('Verify Add Factory', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })

    cy.verifyTopics("Operation Entity")
      .clickOnButtonsByXpath(CommonSelectors.btnAddXpath)
    // const factoryPage = new FactoryPage();
    //factoryPage.verifyGroupDropdownSelect()

    const commonPO = new CommonPO();
    commonPO.verifyFltrGroupDropdownSelect(factoryData.groupName_99)
    
    const factoryPage = new FactoryPage();
    //Add General Details
    cy.verifyTopics("Add General Details")
    factoryPage.addFacGeneralDetails(factoryData.opEntityType_2);

    //Add Contact Information
    cy.clickLink("Contact Information")
      .verifyTopics("Add Contact Information")
    factoryPage.addFacContactInfo();

    //Add Add Factory Accounts
    cy.clickLink("Operation Entity Accounts")
      .verifyTopics("Add Factory Accounts")
    factoryPage.addFacOpEntityAcc();

    //Add Add Product Details
    cy.clickLink("Product Details")
      .verifyTopics("Add Product Details")
    factoryPage.addFacProdDetails();

    //cy.clickOnButton('Save')

  })

  after(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })

    // cy.clickLink("Balance Rate");

  })
})