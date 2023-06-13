import AdvanceRateSelectors from "../support/selectors/AdvanceRateSelectors";
import CommonPO from "../PageObjects/CommonPO";
import advanceRateData from "../fixtures/advanceRateData";

class AdvanceRatePage {

    addAdvanceRate() {
        const commonPO = new CommonPO();
        commonPO.verifyAddGroupDropdownSelect(advanceRateData.groupName_1)
        commonPO.verifyAddFacDropdownSelect(advanceRateData.factoryNameAgrithmics1_1)
        commonPO.verifyAddPordDropdownSelect(advanceRateData.productName1)
        commonPO.verifyYearMonthSelect();

        cy.enterNumericInputField('advanceRateData', AdvanceRateSelectors.textSuperLeafMinXpath, 'superLeafMin')
            .enterNumericInputField('advanceRateData', AdvanceRateSelectors.textSuperLeafMaxXpath, 'superLeafMax')
            .enterNumericInputField('advanceRateData', AdvanceRateSelectors.textNormalLeafMinXpath, 'normalLeafMin')
            .enterNumericInputField('advanceRateData', AdvanceRateSelectors.textNormalLeafMaxXpath, 'normalLeafMax')
            .wait(1000)
        //cy.clickOnButton('Save');
    }
}
export default AdvanceRatePage;