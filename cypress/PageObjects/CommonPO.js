import AdvanceRateSelectors from "../support/selectors/AdvanceRateSelectors";
import advanceRateData from "../fixtures/advanceRateData";

class CommonPO {

  verifyGroupDropdownSelect() {
    cy.get(AdvanceRateSelectors.groupDropdown)
      .click()
      .get(AdvanceRateSelectors.dropdownMenuList)
      .contains(advanceRateData.groupNameAgrithmics1)
      .click();
  }

  verifyFactoryDropdownSelect() {
    cy.get(AdvanceRateSelectors.factoryDropdown)
      .click()
      .get(AdvanceRateSelectors.dropdownMenuList)
      .contains(advanceRateData.factoryNameAgrithmics1_1)
      .click();
  }

  verifyProductDropdownSelect() {
    cy.get(AdvanceRateSelectors.productDropdown)
      .click()
      .get(AdvanceRateSelectors.dropdownMenuList)
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
}
export default CommonPO;