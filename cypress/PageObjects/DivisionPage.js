import DivisionSelectors from "../support/selectors/DivisionSelectors";
import CommonPO from "../PageObjects/CommonPO";
import divisionData from "../fixtures/divisionData";

class DivisionPage {

    addDivisionGeneralDetails() {
        const commonPO = new CommonPO()
        commonPO.verifyAddGroupDropdownSelect(divisionData.groupName_1)
        commonPO.verifyAddEstatedDropdownSelect(divisionData.estateName_1)
        commonPO.verifyAddPordDropdownSelect(divisionData.prodName_Tea)

        cy.enterTextByXpath(DivisionSelectors.txtDvsnCodeXpath, divisionData.dvsnCode)
            .enterTextByXpath(DivisionSelectors.txtDvsnNameXpath, divisionData.dvsnName)
            .enterTextByXpath(DivisionSelectors.txtDvsnLocXpath, divisionData.dvsnLoc)
            .enterTextByXpath(DivisionSelectors.txtTrnsptRateXpath, divisionData.trnsptRate)
            .enterTextByXpath(DivisionSelectors.txtTrgtCrpKGXpath, divisionData.trgtCropKG)

            .enterTextByXpath(DivisionSelectors.txtFldCodeXpath, divisionData.fldCode)
            .enterTextByXpath(DivisionSelectors.txtFldNameXpath, divisionData.fldName)
            .enterTextByXpath(DivisionSelectors.txtFldLocXpath, divisionData.fldLoc)
            .enterTextByXpath(DivisionSelectors.txtAreaXpath, divisionData.area)
            .enterTextByXpath(DivisionSelectors.txtTrNumXpath, divisionData.trNum)
            //.enterTextByXpath(DivisionSelectors.txtMntlyTrgtCrpKGXpath, divisionData.mntlyTrgtCrpKG) -- not added 
            //.clickOnButton('Add')

          
    }

}
export default DivisionPage;