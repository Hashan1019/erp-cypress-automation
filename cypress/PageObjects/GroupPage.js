import GroupSelectors from "../support/selectors/GroupSelectors";
import groupData from "../fixtures/groupData.json";

class GroupPage {
    addGroupDetails() {
        cy.enterTextByXpath(GroupSelectors.textGroupCodeXpath, groupData.groupCode_E98)
            .enterTextByXpath(GroupSelectors.textGroupNameXpath, groupData.groupName_E98)
    }

}

export default GroupPage;