import AdvanceRateSelectors from "../support/selectors/AdvanceRateSelectors";
import CommonPO from "../PageObjects/CommonPO";
class AdvanceRatePage {

    addAdvanceRate() {
        const commonPO = new CommonPO();
        commonPO.verifyAddGroupDropdownSelect()
        commonPO.verifyAddFacDropdownSelect()
        commonPO.verifyAddPordDropdownSelect()
        commonPO.verifyYearMonthSelect();

        cy.enterNumericInputField('advanceRateData', AdvanceRateSelectors.textSuperLeafMinXpath, 'superLeafMin')
            .enterNumericInputField('advanceRateData', AdvanceRateSelectors.textSuperLeafMaxXpath, 'superLeafMax')
            .enterNumericInputField('advanceRateData', AdvanceRateSelectors.textNormalLeafMinXpath, 'normalLeafMin')
            .enterNumericInputField('advanceRateData', AdvanceRateSelectors.textNormalLeafMaxXpath, 'normalLeafMax')
            .wait(1000)
    }
}
export default AdvanceRatePage;