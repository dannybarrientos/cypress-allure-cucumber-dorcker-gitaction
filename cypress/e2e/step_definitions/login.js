import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {loginPage} from '@pages/LoginPage';
import {dashboardPage} from '@pages/FinancialPage';

Given("A web browser is at the  ACME login page", () => {
  cy.visit("https://demo.applitools.com/hackathonV2.html");
});

When("A user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
  loginPage.typeUsername(username);
  loginPage.typePassword(password);
  loginPage.clickLogin();
});

Then("the url will contains the hackaton path", () => {
  cy.url().should("contain", "/hackathonAppV2.html");
});

Then("the user into the financial overview page", () => {

  dashboardPage.orderTransactionsByAmount();
  dashboardPage.checkIfTransactionsAreOrdered();
  dashboardPage.compareExpenses();
  dashboardPage.showDataForNextYear();

});

When("the user views the total balance", () => {
  cy.contains('Total Balance')
});

Then("the total balance should be {string}", (balanceNumber) => {
  cy.get('.balance-value > :nth-child(1)').should('contain.text',balanceNumber);

});

When("the user views the available credit", () => {
  cy.contains('Credit Available')
});

Then("the available credit should be {string}", (balanceNumber) => {
  cy.contains('Total Balance')
  cy.get('#creditAvailable > .balance-value').should('contain.text',balanceNumber);

});

When("the user views the transactions", () => {
  cy.contains('Recent Transactions');
});

Then("all positive transaction amounts should be displayed in green", () => {
  cy.contains('Total Balance')
  cy.get('#transactionsTable tbody tr').each(($row) => {
    cy.wrap($row).find('td:nth-child(5) span').invoke('text').then((text) => {
        const amount = parseFloat(text.replace(/[^0-9.-]+/g, ''));
        if (amount > 0) {
            cy.wrap($row).find('td:nth-child(5) span').should('have.class', 'text-success');  // Clase de texto verde
        }
    });
});


});
Then("all negative transaction amounts should be displayed in red", () => {
  cy.contains('Total Balance')
  cy.get('#transactionsTable tbody tr').each(($row) => {
    cy.wrap($row).find('td:nth-child(5) span').invoke('text').then((text) => {
        const amount = parseFloat(text.replace(/[^0-9.-]+/g, ''));
        if (amount < 0) {
            cy.wrap($row).find('td:nth-child(5) span').should('have.class', 'text-danger');  // Clase de texto rojo
        }
    });
});

});
Then("the transactions table should display exactly {string} rows in the body", (transactionsNumber) => {
  cy.get('#transactionsTable tbody tr').should('have.length', transactionsNumber);

});
