import { clickElement, elementIsVisible} from"../utils/IteractionsElement";
class FinancialPage {



    elements = {
        dashboardTitle: 'h1',
        amountTableHeader: "#amount",
        amountTableRowValue: "td.text-right",
        firstRowAmount: "tbody > :nth-child(1) > .text-right",
        compareExpensesLink: "#showExpensesChart",
        comparisonChart: '#canvas',
        dataForNextYearLink:'#addDataset',
        firstSaleAd: "#flashSale",
        secondSaleAd: "#flashSale2",

        };

getDashboardTitle() {
    return cy.get('h1');
}

checkAdsAreDisplayed() {
elementIsVisible( this.elements.firstSaleAd);
elementIsVisible( this.elements.secondSaleAd);
}

orderTransactionsByAmount() {
    clickElement( this.elements.amountTableHeader);
}

checkIfTransactionsAreOrdered() {
    let currentAmountValue = cy.get( this.elements.firstRowAmount);
    cy.get(this.elements.amountTableRowValue)
    .then(tdAmount => {
        if(tdAmount >= currentAmountValue) {
            currentAmountValue = tdAmount;
        } else {
            throw new Error("Transaction entries are not ordered ascending");
        }
    });
}

checkChartIsDisplayed() {
    cy.get(this.elements.comparisonChart).should("be.visible");
}

compareExpenses() {
    clickElement( this.elements.compareExpensesLink);
}

showDataForNextYear(){
    clickElement( this.elements.dataForNextYearLink);
}

}

export const dashboardPage = new FinancialPage();