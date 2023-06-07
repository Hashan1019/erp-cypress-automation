import GroupSelectors from "../support/selectors/GroupSelectors";
import groupData from "../fixtures/groupData";

class GroupPage {
    addGroupDetails(groupCode, groupName) {
        cy.enterTextByXpath(GroupSelectors.textGroupCodeXpath, groupCode)
            .enterTextByXpath(GroupSelectors.textGroupNameXpath, groupName)
    }

}

export default GroupPage;