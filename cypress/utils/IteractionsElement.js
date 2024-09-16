Cypress.Commands.add('elementIsVisible', (element) => {
    cy.get(element).should('be.visible');
});
Cypress.Commands.add('clickElement', (element) => {
    cy.get(element).click();
});