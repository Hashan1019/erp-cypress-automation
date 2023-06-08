import CommonSelectors from "../support/selectors/CommonSelectors";
import RoleSelectors from "../support/selectors/RoleSelectors";
import CommonPO from "../PageObjects/CommonPO";
import roleData from "../fixtures/roleData";

class RolePage {

    verifyAddRoleLevelDropdownSelect(roleType) {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.xpath(CommonSelectors.drpAddRoleLevelXpath)
            .click()
            .get(CommonSelectors.dropdownMenuList)
            .contains(roleType)
            .click();
    }

    addRoleGeneralDetails() {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        const commonPO = new CommonPO()
        commonPO.verifyAddGroupDropdownSelect(roleData.groupName_1)
        commonPO.verifyAddFacDropdownSelect(roleData.facName_1);
        this.verifyAddRoleLevelDropdownSelect(roleData.roleLevel_1);
        cy.enterTextByXpath(RoleSelectors.txtRoleNameXpath, roleData.roleName_1)
    }

    verifyClickNavUMRole() {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.clickLink("User Management")
            .clickLinkByXpath(RoleSelectors.btnNavRoleXpath);

    }

    verifyAddRole() {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.clickOnButtonsByXpath(CommonSelectors.btnAddXpath)
            .verifyTopics("Add Role")
        this.addRoleGeneralDetails()
        // cy.clickOnButton('Save')
    }

}
export default RolePage;