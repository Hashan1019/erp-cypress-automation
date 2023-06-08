import FactoryPage from "../../PageObjects/FactoryPage";
import SignInPage from "../../PageObjects/SignInPage";

describe('ERP - FactoryPageTestAutomation', () => {


  before(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.visit(Cypress.env('url'))

    const signInPage = new SignInPage()
    signInPage.verifyValidLogin();

    const factoryPage = new FactoryPage()
    factoryPage.verifyClickNavFMFactory()
  });

  it('Verify Add Factory', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })

    const factoryPage = new FactoryPage()
    factoryPage.verifyAddFactory()

  })

  after(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })

    
  })
})