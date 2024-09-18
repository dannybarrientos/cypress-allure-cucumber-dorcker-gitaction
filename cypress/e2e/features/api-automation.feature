Feature: API Automation Testing for Users

Scenario: Get list of users
  Given the API is available
  When I request the first page of users
  Then I should receive a 200 status code for users
  And the response should contain a list of users

Scenario: Get single user details
  Given the API is available
  When I request user with ID 2
  Then I should receive a 200 status code for user
  And the response should contain the user's details

Scenario: Create a new user
  Given the API is available
  When I submit a request to create a new user with name "John Doe" and job "Software Developer"
  Then I should receive a 201 status code
  And the response should contain the user's ID

Scenario: Update an existing user
  Given the API is available
  When I submit a request to update user with ID 2 with name "Jane Doe" and job "Software Engineer"
  Then I should receive a 200 status code for user update
  And the response should contain the updated user's details

Scenario: Delete an existing user
  Given the API is available
  When I submit a request to delete user with ID 2
  Then I should receive a 204 status code for user deletion

Scenario: Register a new user
  Given the API is available
  When I submit a request to register a new user with email "eve.holt@reqres.in" and password "pistol"
  Then I should receive a 200 status code for user registration
  And the response should contain the user ID and token

Scenario: Login a user
  Given the API is available
  When I submit a request to login a user with email "eve.holt@reqres.in" and password "cityslicka"
  Then I should receive a 200 status code for user login
  And the response should contain the user token

Scenario: Login unsuccessful
  Given the API is available
  When I submit a request to login a user with email "eve.holt@reqres.in" and no password
  Then I should receive a 400 status code for user login
  And the response should contain an error message