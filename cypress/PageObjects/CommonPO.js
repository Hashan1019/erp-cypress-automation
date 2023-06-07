import AdvanceRateSelectors from "../support/selectors/AdvanceRateSelectors";
import CommonSelectors from "../support/selectors/CommonSelectors";
import advanceRateData from "../fixtures/advanceRateData";
import routeData from "../fixtures/routeData";

class CommonPO {

  verifyGroupDropdownSelect() {
    cy.get(AdvanceRateSelectors.groupDropdown)
      .click()
      .get(CommonSelectors.dropdownMenuList)
      .contains(advanceRateData.groupNameAgrithmics1)
      .click();
  }

  verifyFactoryDropdownSelect() {
    cy.get(AdvanceRateSelectors.factoryDropdown)
      .click()
      .get(CommonSelectors.dropdownMenuList)
      .contains(advanceRateData.factoryNameAgrithmics1_1)
      .click();
  }

  verifyProductDropdownSelect() {
    cy.get(AdvanceRateSelectors.productDropdown)
      .click()
      .get(CommonSelectors.dropdownMenuList)
      .contains(advanceRateData.productName1)
      .click();
  }

  verifyYearSelect() {
    cy.xpath(AdvanceRateSelectors.yearName2023Xpath)
      .click()
      .xpath(AdvanceRateSelectors.yearName2023Xpath)
      .contains(advanceRateData.year2020)
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

  // Any Add section group, fac, prod drop down selection
     verifyAddGroupDropdownSelect() {
        cy.xpath(CommonSelectors.drpAddGroupXpath)
            .click()
            .get(CommonSelectors.dropdownMenuList)
            .contains(routeData.groupName_1)
            .click();
    }

    verifyAddFacDropdownSelect() {
        cy.xpath(CommonSelectors.drpAddFacXpath)
            .click()
            .get(CommonSelectors.dropdownMenuList)
            .contains(routeData.facName_1)
            .click();
    }

    verifyAddPordDropdownSelect() {
        cy.xpath(CommonSelectors.drpAddProdXpath)
            .click()
            .get(CommonSelectors.dropdownMenuList)
            .contains(routeData.prodName_Tea)
            .click();
    }
}
export default CommonPO;