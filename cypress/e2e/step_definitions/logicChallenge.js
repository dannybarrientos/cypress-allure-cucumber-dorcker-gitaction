import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {isPalindrome, fibonacci,findPair,isPrime} from 'cypress/utils/FuncionalOperations.js';

// Definición de pasos para verificar si un número es primo
Given("a number {int}", (number) => {
    cy.wrap(number).as("number");
});

When("I check if the number is prime", () => {
    cy.get("@number").then((number) => {
        const result = isPrime(number);
        cy.wrap(result).as("result");
        cy.log('Result number is prime: '+result);
    });
});

Then("the result should be number {string}", (expectedResult) => {
   // Convertir el resultado esperado a booleano
   const expectedBoolean = expectedResult === "true";
   cy.get('@result').should('eq', expectedBoolean);
});

// Definición de pasos para ordenar palabras en orden alfabético
Given("a string {string}", (inputString) => {
    cy.wrap(inputString).as("inputString");
});

When("I sort the words in the string", () => {
    cy.get("@inputString").then((str) => {
        const sortedWords = str.split(" ").sort((a, b) => a.localeCompare(b)).join(" ");
        cy.wrap(sortedWords).as("sortedWords");
        cy.log('Result sorted words: '+sortedWords);
    });
});

Then("the result should be alphabetical {string}", (expectedResult) => {
    cy.get("@sortedWords").should("eq", expectedResult);
    cy.log('Result expected: '+expectedResult);
});


// Definición de pasos para verificar si una cadena es un palíndromo
Given("a string validate {string}", (inputString) => {
    cy.wrap(inputString).as("inputString");
});

When("I check if the string is a palindrome", () => {
    cy.get("@inputString").then((str) => {
        const result = isPalindrome(str);
        cy.wrap(result).as("result");
        cy.log('Result is palindrome: '+result);
    });
});

Then("the result should be ispalindrome {string}", (expectedResult) => {
    cy.get("@result").should("eq", expectedResult === "true");
    cy.log('Result expected: '+expectedResult);
});


// Definición de pasos para generar la secuencia de Fibonacci
Given("a number Fibonacci numbers {int}", (number) => {
    cy.wrap(number).as("number");
});

When("I generate the Fibonacci sequence", () => {
    cy.get("@number").then((number) => {
        const sequence = fibonacci(number);
        cy.wrap(sequence).as("result");
        cy.log('Result Fibonacci sequence: '+sequence);
    });
});

Then("the result should be Fibonacci {string}", (expectedResult) => {
    const parsedResult = JSON.parse(expectedResult);
    cy.get("@result").should("deep.equal", parsedResult);
    cy.log('Result expected: '+parsedResult);
});

// Definición de pasos para encontrar dos números que sumen un objetivo
Given("a list of numbers {string} and a target sum {int}", (numbers, targetSum) => {
    const numArray = JSON.parse(numbers);
    cy.wrap(numArray).as("numbers");
    cy.wrap(targetSum).as("targetSum");
});

When("I find two numbers that sum to the target", () => {
    cy.get("@numbers").then((numbers) => {
        cy.get("@targetSum").then((targetSum) => {
            const pair = findPair(numbers, targetSum);
            cy.wrap(pair).as("result");
            cy.log('Result pair: '+pair);
        });
    });
});

Then("the result should be {string}", (expectedResult) => {
    const parsedResult = JSON.parse(expectedResult);
    cy.get("@result").should("deep.equal", parsedResult);
});