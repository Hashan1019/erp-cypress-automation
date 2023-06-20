import GroupPage from "../../PageObjects/GroupPage";
import FactoryPage from "../../PageObjects/FactoryPage";
import RolePage from "../../PageObjects/RolePage";
import UserPage from "../../PageObjects/UserPage";
import SignInPage from "../../PageObjects/SignInPage";

describe('ERP - Group-Factory-Role-User Test Automation', () => {

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

    it('Should verify Group Factory Role User creation', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        //Add group
        const groupPage = new GroupPage()
        groupPage.verifyAddGroup()

        //Add factory
        const factoryPage = new FactoryPage()
        factoryPage.verifyClickNavFMFactory()
        factoryPage.verifyAddFactory()

        //Add role
        const rolePage = new RolePage()
        rolePage.verifyClickNavUMRole()
        rolePage.verifyAddRole()

        //Add user
        const userPage = new UserPage()
        userPage.verifyClickNavUMUser()
        userPage.verifyAddUser()
    })

    after(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        // cy.clickLink("Factory Management")
        //     .clickLinkByXpath(DivisionSelectors.btnNavDivisionXpath);

    })
})