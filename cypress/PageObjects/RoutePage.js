import RouteSelectors from "../support/selectors/RouteSelectors";
import CommonPO from "../PageObjects/CommonPO";
import routeData from "../fixtures/routeData";

class RoutePage {

    addRouteGeneralDetails() {
        const commonPO = new CommonPO()
        commonPO.verifyAddGroupDropdownSelect(routeData.groupName_1)
        commonPO.verifyAddFacDropdownSelect(routeData.facName_1)
        commonPO.verifyAddPordDropdownSelect(routeData.prodName_Tea)

        cy.enterTextByXpath(RouteSelectors.txtRouteCodeXpath, routeData.routeCode)
            .enterTextByXpath(RouteSelectors.txtRouteNameXpath, routeData.routeName)
            .enterTextByXpath(RouteSelectors.txtRouteLocXpath, routeData.routeLoc)
            .enterTextByXpath(RouteSelectors.txtMntlyTrgtCrpKGXpath, routeData.mntlyTrgtCrpKG)
            .enterTextByXpath(RouteSelectors.txtTrnsptRateXpath, routeData.trnsptRate)
            .enterTextByXpath(RouteSelectors.txtExpayRateXpath, routeData.expayRate)            
    }

}
export default RoutePage;