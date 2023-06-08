import AdvanceRateSelectors from "../support/selectors/AdvanceRateSelectors";
import CommonSelectors from "../support/selectors/CommonSelectors";
import advanceRateData from "../fixtures/advanceRateData";
import routeData from "../fixtures/routeData";


class CommonPO {

  verifyFltrGroupDropdownSelect(groupName) {
    cy.xpath(CommonSelectors.drpFltrGroupXpath)
      .click()
      .xpath(CommonSelectors.drpFltrGroupList)
      .contains(groupName)
      .click();
  }


  // Any Add section group, fac, prod drop down selection
     verifyAddGroupDropdownSelect(groupName) {
        cy.xpath(CommonSelectors.drpAddGroupXpath)
            .click()
            .get(CommonSelectors.dropdownMenuList)
            .contains(groupName)
            .click();
    }

    verifyAddFacDropdownSelect(facName) {
        cy.xpath(CommonSelectors.drpAddFacXpath)
            .click()
            .get(CommonSelectors.dropdownMenuList)
            .contains(facName)
            .click();
    }

    verifyAddPordDropdownSelect(prodName) {
        cy.xpath(CommonSelectors.drpAddProdXpath)
            .click()
            .get(CommonSelectors.dropdownMenuList)
            .contains(prodName)
            .click();
    }

    
  verifyYearMonthSelect() {
    cy.xpath(AdvanceRateSelectors.yearMonthPickerListXpath)
      .click()
      // .xpath(AdvanceRateSelectors.yearPickerListXpath)
      // .click()
      // .xpath(AdvanceRateSelectors.yearName2023Xpath)
      // .contains(advanceRateData.year2023)
      // .click()
      // .wait(3000)
      .xpath(AdvanceRateSelectors.monthNameJanXpath)
      .contains(advanceRateData.monthNameJan)
      .click();
  }

}
export default CommonPO;