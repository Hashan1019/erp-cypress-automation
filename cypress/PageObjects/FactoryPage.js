import CommonSelectors from "../support/selectors/CommonSelectors";
import FactorySelectors from "../support/selectors/FactorySelectors";
import factoryData from "../fixtures/factoryData";
import CommonPO from "../PageObjects/CommonPO";


class FactoryPage {

  addFacGeneralDetails(opEntityType) {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
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
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
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
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
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
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
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

  verifyClickNavFMFactory() {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.clickLink("Factory Management")
      .clickLinkByXpath(FactorySelectors.btnFactoryXpath);
  }

  verifyAddFactory() {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.verifyTopics("Operation Entity")
      .clickOnButtonsByXpath(CommonSelectors.btnAddXpath)
    // const factoryPage = new FactoryPage();
    //factoryPage.verifyGroupDropdownSelect()

    const commonPO = new CommonPO();
    commonPO.verifyFltrGroupDropdownSelect(factoryData.groupName_99)

    //Add General Details
    cy.verifyTopics("Add General Details")
    this.addFacGeneralDetails(factoryData.opEntityType_2);

    //Add Contact Information
    cy.clickLink("Contact Information")
      .verifyTopics("Add Contact Information")
    this.addFacContactInfo();

    //Add Add Factory Accounts
    cy.clickLink("Operation Entity Accounts")
      .verifyTopics("Add Factory Accounts")
    this.addFacOpEntityAcc();

    //Add Add Product Details
    cy.clickLink("Product Details")
      .verifyTopics("Add Product Details")
    this.addFacProdDetails();

    //cy.clickOnButton('Save')
  }

}
export default FactoryPage;