Feature: API Automation Testing for Users

Background:
  Given I have the base URL "https://reqres.in/api"

Scenario: Create a new user
  Given I send a POST request to "/users" with the following data:
    | name        | Test User           |
    | job         | Automation Engineer |
  Then the response code should be 201
  And the response should contain the following data:
    | name        | Test User           |
    | job         | Automation Engineer |
  And I save the user ID for future use

Scenario: Get user details by ID
  When I send a GET request to "/users/{id}"
  Then the response code should be 200
  And the response should contain the user data:
    | name        | Test User           |
    | job         | Automation Engineer |

Scenario: Update existing user
  Given I have a user ID
  When I send a PUT request to "/users" with the following data:
    | name        | Updated User        |
    | job         | Senior Engineer     |
  Then the response code should be 200
  And the response should contain the updated user data:
    | name        | Updated User        |
    | job         | Senior Engineer     |

Scenario: Delete an existing user
  Given I have a user ID
  When I send a DELETE request to "/users/{id}"
  Then the response code should be 204

Scenario: Verify deleted user no longer exists
  Given I have a deleted user ID
  When I send a GET request to "/users/{id}"
  Then the response code should be 404

Scenario: Create user with invalid data
  Given I send a POST request to "/users" with the following data:
    | name        |                      |
    | job         |                      |
  Then the response code should be 201