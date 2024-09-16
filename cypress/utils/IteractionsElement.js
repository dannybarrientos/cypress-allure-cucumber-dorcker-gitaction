/*Cypress.Commands.add('elementIsVisible', (element) => {
    cy.get(element).should('be.visible');
});
Cypress.Commands.add('clickElement', (element) => {
    cy.get(element).click();
});
*/
function elementIsVisible(locator) {
    cy.get(locator).should("be.visible");
}

function clickElement(locator) {
    cy.get(locator).click();
}

module.exports = {
    clickElement,
    elementIsVisible
};