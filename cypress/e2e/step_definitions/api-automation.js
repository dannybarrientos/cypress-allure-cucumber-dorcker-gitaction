import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const apiUrl = "https://reqres.in/api";
let userId;
// Background Step: Set the base URL
Given('I have the base URL {string}', (baseUrl) => {
    cy.wrap(baseUrl).as('baseUrl');
});

// Scenario: Create a new user
Given('I send a POST request to {string} with the following data:', (endpoint, dataTable) => {
    const data = dataTable.rowsHash(); // Convert Gherkin table to object
    cy.request({
        method: 'POST',
        url: `${apiUrl}${endpoint}`,
        body: data,
    }).then((response) => {
        cy.wrap(response).as('response');
        userId = response.body.id;
        cy.log(`User ID set: ${response.body.id}`);
    });
});

Then('the response code should be {int}', (statusCode) => {
    cy.get('@response').its('status').should('eq', statusCode);
});

Then('the response should contain the following data:', (dataTable) => {
    const expectedData = dataTable.rowsHash();
    cy.get('@response').its('body').should((body) => {
        expect(body.name).to.eq(expectedData.name);
        expect(body.job).to.eq(expectedData.job);
    });
});

Then('the response should contain an error message', () => {
    cy.get('@response').its('body').should('have.property', 'error');
});

Then('I save the user ID for future use', () => {
    cy.wrap(userId).as('userId'); // Save userId for use in future scenarios
    cy.log(`User ID saved: ${userId}`);
});


// Scenario: Get user details by ID
When('I send a GET request to {string}', (endpoint) => {
    cy.log(`User ID in GET request: ${apiUrl}${endpoint.replace('{id}', userId)}`);
        cy.log(`User ID in GET request: ${userId}`);
        cy.request({
            method: 'GET',
            url: `${apiUrl}${endpoint.replace('{id}', userId)}`,
        }).then((response) => {
            cy.wrap(response).as('response');
        });

});

Then('the response should contain the user data:', (dataTable) => {
    const expectedData = dataTable.rowsHash();
    cy.get('@response').its('body').should((body) => {
        expect(body.data.name).to.eq(expectedData.name);
        expect(body.data.job).to.eq(expectedData.job);
    });
});

// Scenario: Update existing user
When('I send a PUT request to {string} with the following data:', (endpoint, dataTable) => {
    const data = dataTable.rowsHash();
    cy.get('@userId').then((id) => {
        cy.request({
            method: 'PUT',
            url: `${apiUrl}${endpoint.replace('{id}', id)}`,
            body: data,
        }).then((response) => {
            cy.wrap(response).as('response');
        });
    });
});

// Scenario: Delete an existing user
When('I send a DELETE request to {string}', (endpoint) => {
    cy.get('@userId').then((id) => {
        cy.request({
            method: 'DELETE',
            url: `${apiUrl}${endpoint.replace('{id}', id)}`,
            failOnStatusCode: false,
        }).then((response) => {
            cy.wrap(response).as('response');
        });
    });
});

// Scenario: Verify deleted user no longer exists
Given('I have a deleted user ID', () => {
    cy.get('@userId').then((userId) => {
        cy.log(`Deleted User ID: ${userId}`);
    });
});
