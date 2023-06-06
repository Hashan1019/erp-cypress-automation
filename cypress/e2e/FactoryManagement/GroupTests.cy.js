import SignInSelectors from "../../support/Selectors/SignInSelectors";
import GroupSelectors from "../../support/selectors/GroupSelectors";
import GroupPage from "../../PageObjects/GroupPage";
import groupData from "../../fixtures/groupData";


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

  it('GroupPageTest', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })

      .verifyTopics("Group")
      .clickOnButtonsByXpath(GroupSelectors.buttonAddGroupXpath)

      .verifyTopics("Add Group")
      .enterTextByXpath(GroupSelectors.textGroupCode, groupData.groupCode)
      .enterTextByXpath(GroupSelectors.textGroupName, groupData.groupName)
      .clickOnButton('Save');

  })

  after(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })

    // cy.clickLink("Balance Rate");

  })
})