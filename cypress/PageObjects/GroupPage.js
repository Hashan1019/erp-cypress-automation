import GroupSelectors from "../support/selectors/GroupSelectors";
import groupData from "../fixtures/groupData";

class GroupPage {
    verifyEnterGroupDetails(groupCode, groupName) {
        cy.enterTextByXpath(GroupSelectors.textGroupCodeXpath, groupCode)
            .enterTextByXpath(GroupSelectors.textGroupNameXpath, groupName)
    }

    verifyAddGroup() {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
            .verifyTopics("Group")
            .clickOnButtonsByXpath(GroupSelectors.buttonAddGroupXpath)

            .verifyTopics("Add Group")
        this.verifyEnterGroupDetails(groupData.groupCode_E98, groupData.groupName_E98);
        // cy.clickOnButton('Save');
    }

    verifyClickNavFMGroup() {
        cy.clickLink("Factory Management")
            .clickLink("Group");
    }

}

export default GroupPage;