Feature: Logic Challenges

Scenario Outline: Verify if a number is prime
  Given a number <number>
  When I check if the number is prime
  Then the result should be number "<result>"

  Examples:
    | number | result  |
    | 3      | true    |
    | 4      | false   |
    | 2      | true    |
    | 13     | true    |
    | 9      | false   |

  Scenario: Sort words in alphabetical order
    Given a string "dog cat house"
    When I sort the words in the string
    Then the result should be alphabetical "cat dog house"


  Scenario Outline: Verify if a string is a palindrome
    Given a string validate "<input>"
    When I check if the string is a palindrome
    Then the result should be ispalindrome "<result>"

    Examples:
      | input          | result |
      | radar          | true   |
      | level          | true   |
      | hello          | false  |

    Scenario: Generate the first 5 Fibonacci numbers
      Given a number Fibonacci numbers 5
      When I generate the Fibonacci sequence
      Then the result should be Fibonacci "[0, 1, 1, 2, 3]"

    Scenario: Find a pair that sums to a target
      Given a list of numbers "[1, 2, 3, 4, 5]" and a target sum 9
      When I find two numbers that sum to the target
      Then the result should be "[4,5]"
