import SignInSelectors from "../../support/Selectors/SignInSelectors";
import GroupSelectors from "../../support/selectors/GroupSelectors";
import FactorySelectors from "../../support/selectors/FactorySelectors";
import GroupPage from "../../PageObjects/GroupPage";


describe('ERP - GroupPageTestAutomation', () => {


  before(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.visit(Cypress.env('url'))
      .login('validLogin')
      .clickOnButton('Sign in now')
      .verifyImage(SignInSelectors.imageAgrixLogoClassName, SignInSelectors.imageAgrixLogoSrc)
      .clickLink("Factory Management")
      .clickLink("Group");
  });

  it('Verify Add Group', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })

      .verifyTopics("Group")
      .clickOnButtonsByXpath(GroupSelectors.buttonAddGroupXpath)

      .verifyTopics("Add Group")
    const groupPage = new GroupPage()
    groupPage.addGroupDetails();
    // cy.clickOnButton('Save');

  })

  after(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })

    cy.clickLink("Factory Management")
      .clickLinkByXpath(FactorySelectors.btnFactoryXpath);

  })
})