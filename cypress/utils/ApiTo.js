

urlBase = "https://reqres.in/api";
       function checkApiAvailability() {
        cy.request('GET', `${urlBase}/users?page=1`).its('status').should('eq', 200);
        }

        function requestUsersPage(page) {
          return cy.request('GET', `${urlBase}/users?page=${page}`).as('getUsers');
        }

        function requestUserById(userId) {
          return cy.request('GET', `${urlBase}/users/${userId}`).as('getUser');
        }

        function createUser(name, job) {
          return cy.request('POST', `${urlBase}/users`, {
            name: name,
            job: job
          }).as('createUser');
        }

        function updateUser(userId, name, job) {
          return cy.request('PUT', `${urlBase}/users/${userId}`, {
            name: name,
            job: job
          }).as('updateUser');
        }

        function deleteUser(userId) {
          return cy.request('DELETE', `${urlBase}/users/${userId}`).as('deleteUser');
        }

        function registerUser(email, password) {
          return cy.request('POST', `${urlBase}/register`, {
            email: email,
            password: password
          }).as('registerUser');
        }

        function loginUser(email, password) {
          const requestBody = {
            email: email
          };
          if (password) {
            requestBody.password = password;
          }
          return cy.request({
            method: 'POST',
            url: `${urlBase}/login`,
            body: requestBody,
            failOnStatusCode: false // This prevents Cypress from failing the test on non-2xx status codes
          }).as('loginUser');
        }

        function verifyStatusCode(alias, expectedStatusCode) {
          cy.get(alias).its('status').should('eq', expectedStatusCode);
        }


export {  checkApiAvailability, requestUsersPage, requestUserById, createUser ,updateUser, deleteUser, registerUser, loginUser, verifyStatusCode };