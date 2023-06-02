import AdvanceRateSelectors from "../support/selectors/AdvanceRateSelectors";

class AdvanceRatePage {
    verifyGroupDropdownRandomSelect() {
        cy.get(AdvanceRateSelectors.groupDropdown).click();
        const listItems = cy.xpath(AdvanceRateSelectors.dropdownListXpath);
        listItems.then(($items) => {
            const itemCount = $items.length;
            const randomIndex = Math.floor(Math.random() * itemCount);
            listItems.eq(randomIndex).click();
        });

    }

    verifyFactoryDropdownRandomSelect() {
        cy.get(AdvanceRateSelectors.factoryDropdown).click();
        const listItems = cy.xpath(AdvanceRateSelectors.dropdownListXpath);
        listItems.then(($items) => {
            const itemCount = $items.length;
            const randomIndex = Math.floor(Math.random() * itemCount);
            listItems.eq(randomIndex).click();
        });

    }

    verifyProductDropdownRandomSelect() {
        cy.get(AdvanceRateSelectors.productDropdown).click();
        const listItems = cy.xpath(AdvanceRateSelectors.dropdownListXpath);
        listItems.then(($items) => {
            const itemCount = $items.length;
            const randomIndex = Math.floor(Math.random() * itemCount);
            listItems.eq(randomIndex).click();
        });

    }

    verifyYearMonthRandomSelect() {
        cy.xpath(AdvanceRateSelectors.yearMonthPickerXpath).click();
        const listItems = cy.xpath(AdvanceRateSelectors.yearMonthPickerListXpath);
        listItems.then(($items) => {
            const itemCount = $items.length;
            const randomIndex = Math.floor(Math.random() * itemCount);
            listItems.eq(randomIndex).click();
        });

    }
}
export default AdvanceRatePage;