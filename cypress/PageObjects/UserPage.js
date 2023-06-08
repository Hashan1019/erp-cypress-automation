import CommonSelectors from "../support/selectors/CommonSelectors";
import UserSelectors from "../support/selectors/UserSelectors";
import CommonPO from "../PageObjects/CommonPO";
import userData from "../fixtures/userData";

class UserPage {

    verifyAddRoleNameDropdownSelect(roleName) {
        cy.xpath(CommonSelectors.drpAddRoleTypeXpath)
            .click()
            .get(CommonSelectors.dropdownMenuList)
            .contains(roleName)
            .click();
    }

    addUserGeneralDetails() {
        const commonPO = new CommonPO()
        commonPO.verifyAddGroupDropdownSelect(userData.groupName_1)
        commonPO.verifyAddFacDropdownSelect(userData.facName_1);
        cy.enterTextByXpath(UserSelectors.txtFastNameXpath, userData.fastName)
            .enterTextByXpath(UserSelectors.txtLastNameXpath, userData.lastName)
        this.verifyAddRoleNameDropdownSelect(userData.roleName_1);
        cy.enterTextByXpath(UserSelectors.txtUserNameXpath, userData.userName)
            .enterTextByXpath(UserSelectors.txtPasswordXpath, userData.password)
    }

    verifyClickNavUMUser() {
        cy.clickLink("User Management")
            .clickLinkByXpath(UserSelectors.btnNavUserXpath);
    }

    verifyAddUser() {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.clickOnButtonsByXpath(CommonSelectors.btnAddXpath)
            .verifyTopics("Add User")
        this.addUserGeneralDetails()
        //cy.clickOnButton('Save')
    }

}
export default UserPage;