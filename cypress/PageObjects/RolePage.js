import CommonSelectors from "../support/selectors/CommonSelectors";
import RoleSelectors from "../support/selectors/RoleSelectors";
import CommonPO from "../PageObjects/CommonPO";
import roleData from "../fixtures/roleData";

class RolePage {

    verifyAddRoleLevelDropdownSelect(roleType) {
        cy.xpath(CommonSelectors.drpAddRoleLevelXpath)
            .click()
            .get(CommonSelectors.dropdownMenuList)
            .contains(roleType)
            .click();
    }

    addRoleGeneralDetails() {
        const commonPO = new CommonPO()
        commonPO.verifyAddGroupDropdownSelect(roleData.groupName_1)
        commonPO.verifyAddFacDropdownSelect(roleData.facName_1);
        this.verifyAddRoleLevelDropdownSelect(roleData.roleLevel_1);
        cy.enterTextByXpath(RoleSelectors.txtRoleNameXpath, roleData.roleName_1)         
    }

}
export default RolePage;