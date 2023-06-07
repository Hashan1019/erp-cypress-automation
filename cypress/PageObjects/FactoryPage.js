import AdvanceRateSelectors from "../support/selectors/AdvanceRateSelectors";
import FactorySelectors from "../support/selectors/FactorySelectors";
import factoryData from "../fixtures/factoryData";


class FactoryPage {

  addFacGeneralDetails(opEntityType) {
    cy.get(FactorySelectors.drpOpEntityType)
      .click()
      .xpath(FactorySelectors.drpOpEntityTypeListXpath)
      .contains(opEntityType)
      .click();


    cy.enterTextByXpath(FactorySelectors.txtOpEntityCode, factoryData.opEntityCode_03)
      .enterTextByXpath(FactorySelectors.txtOpEntityName, factoryData.opEntityName_03)
      .enterTextByXpath(FactorySelectors.txtBrNum, factoryData.brNum_03)
      .enterTextByXpath(FactorySelectors.txtTaxNum, factoryData.taxNum_03)
      .enterTextByXpath(FactorySelectors.txtOpEntMngrName, factoryData.opEntMngrName_03)
    //.clickOnButton('Add')
  }

  addFacContactInfo() {
    //Contact Details
    cy.enterTextByXpath(FactorySelectors.txtOfficePhone, factoryData.officePhone)
      .enterTextByXpath(FactorySelectors.txtOfficialEmail, factoryData.officialEmail)
      .enterTextByXpath(FactorySelectors.txtFaxNum, factoryData.faxNum)
      .enterTextByXpath(FactorySelectors.txtBillingEmail, factoryData.billingEmail)
    //Address Details
    cy.enterTextByXpath(FactorySelectors.txtCity, factoryData.city)
      .enterTextByXpath(FactorySelectors.txtAddress1, factoryData.address1)
      .enterTextByXpath(FactorySelectors.txtAddress2, factoryData.address2)
      .enterTextByXpath(FactorySelectors.txtAddress3, factoryData.address3)
      .enterTextByXpath(FactorySelectors.txtZipCode, factoryData.zipCode)
    //.clickOnButton('Add')
  }

  addFacOpEntityAcc() {
    cy.get(FactorySelectors.drpComBankType)
      .click()
      .xpath(FactorySelectors.drpOpComBankTypeListXpath)
      .contains(factoryData.bankCommercial)
      .click();
    cy.get(FactorySelectors.drpKndyBranchType)
      .click()
      .xpath(FactorySelectors.drpKndyOpBrnchTypeListXpath)
      .contains(factoryData.branchKandyCommercial)
      .click()

    cy.enterTextByXpath(FactorySelectors.txtAccountNo, factoryData.accountNo)
      .enterTextByXpath(FactorySelectors.txtAccountName, factoryData.accountName)
    //.clickOnButton('Add')
  }

  addFacProdDetails() {
    cy.xpath(FactorySelectors.drpProdTypeXpath)
      .click()
      .xpath(FactorySelectors.drpProdTypeListXpath)
      .contains(factoryData.prodTypeOnion)
      .click();

    cy.xpath(FactorySelectors.drpCollectionTypeXpath)
      .click()
      .xpath(FactorySelectors.drpCollectionTypeListXpath)
      .contains(factoryData.collectionType)
      .click()
    //.clickOnButton('Add')
  }


}
export default FactoryPage;