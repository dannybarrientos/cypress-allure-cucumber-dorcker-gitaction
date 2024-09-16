Feature: Automatización Front-end

    Feature Login page will work depending on the user credentials.

    Background:
        Given A web browser is at the  ACME login page
        When A user enters the username "testuser", the password "testpassword", and clicks on the login button
    @succes
    Scenario: Success Login
        Then the url will contains the hackaton path
        Then the user into the financial overview page

    @totalBalance
    Scenario: Verify the total balance is 350
        When the user views the total balance
        Then the total balance should be "$350"

    @creditAvailable
    Scenario: Verify the available credit is 17,800
        When the user views the available credit
        Then the available credit should be "$17,800"

    @positiveValuesInGreen
    Scenario: Verify positive values are displayed in green
        When the user views the transactions
        Then all positive transaction amounts should be displayed in green

    @negativeValuesInRed
    Scenario: Verify negative values are displayed in red
        When the user views the transactions
        Then all negative transaction amounts should be displayed in red
    @numberOfTransactions
    Scenario: Verify that there are exactly 6 transactions in the expense table
        When the user views the transactions
        Then the transactions table should display exactly "6" rows in the body