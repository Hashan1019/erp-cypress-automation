import GroupPage from "../../PageObjects/GroupPage";
import SignInPage from "../../PageObjects/SignInPage";


describe('ERP - GroupPageTestAutomation', () => {


  before(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })

    cy.visit(Cypress.env('url'))

    const signInPage = new SignInPage()
    signInPage.verifyValidLogin();

    const groupPage = new GroupPage()
    groupPage.verifyClickNavFMGroup()

  });

  it('Verify Add Group', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    const groupPage = new GroupPage()
    groupPage.verifyAddGroup();

  })

  after(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    

  })
})