---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: "JavaScript Fundamentals 4.3 Function Return Statements"
---

[← Back](/comp-sci/javascript/)

# Activity 4.3 Function Return Statements

## Introduction

One important component regarding functions is the ability to give back some information if necessary. Here are a few examples of functions we have used that **return** some value once the function is finished executing.

- `parseFloat()` returns an integer if a valid string argument is provided.
- `Math.random()` returns a number between 0 and ~0.9999.
- `array.includes()` returns a boolean value depending on if the argument provided exists in the array.

It's not always necessary to return information. For example, `console.log()` merely outputs information to the console. There's no need to return any value.

In programming, functions have a keyword called `return`. We call statements involving the return keyword a **return statement**. Return statements immediately finish executing the function, and return some provided value.

### Example

```js
function add(num1, num2) {
  return num1 + num2
}
```

In the example above, the add function _returns_ the sum of the num1 and num2 parameters. Just like any of the other functions we've used, we can assign the return value to a variable.

```js
var sum = add(10, 15) // sum = 25
```

### Skills to Practice

- Defining functions with parameters
- Invoking user defined functions with arguments
- Returning values from a function

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Node.js_ for the language.
   2. Name the Repl "_4.3 Function Return Statements_".
2. Click Create repl.

### Code

```javascript
var readline = require("readline-sync")

// Function Definitions
// These will be used in the main program below.

function squareNumber(number) {
  return number * number
}

function subtract(number1, number2) {
  return number1 - number2
}

function monthsToYears(months) {
  return Math.floor(months / 12)
}

function yearsToMonths(years) {
  return years * 12
}

// Roll a single die
function rollDie() {
  return Math.floor(Math.random() * 6 + 1) // 1-6
}

console.log("-- Random Utilities Calculator --")

var choice = ""
var number
var answer

while (choice != "6") {
  console.log("1) Square a number")
  console.log("2) Subtract two numbers")
  console.log("3) Convert months to years")
  console.log("4) Convert years to months")
  console.log("5) Roll dice")
  console.log("6) Exit")

  choice = readline.question("->")

  if (choice == "1") {
    number = parseFloat(readline.question("Enter a number: "))
    answer = squareNumber(number)

    console.log(`${number} squared is ${answer}\n`)
  } else if (choice == "2") {
    number = parseFloat(readline.question("Enter a number: "))
    var number2 = parseFloat(readline.question("Enter a number: "))
    answer = subtract(number, number2)

    console.log(`${number} minus ${number2} equals ${answer}\n`)
  } else if (choice == "3") {
    number = parseFloat(readline.question("Enter a number: "))
    console.log(`${number} months equals ${monthsToYears(number)} years\n`)
  } else if (choice == "4") {
    number = parseFloat(readline.question("Enter a number: "))
    console.log(`${number} years equals ${yearsToMonths(number)} months\n`)
  } else if (choice == "5") {
    var die1 = rollDie()
    var die2 = rollDie()

    console.log(
      `You rolled a ${die1} and a ${die2} for a total of ${die1 + die2}\n`
    )
  } else if (choice == "6") {
    console.log("Goodbye")
  } else {
    console.log("Invalid option...")
  }
}
```

### Debug

```
-- Random Utilities Calculator --
1) Square a number
2) Subtract two numbers
3) Convert months to years
4) Convert years to months
5) Roll dice
6) Exit
->1
Enter a number: 40
40 squared is 1600

1) Square a number
2) Subtract two numbers
3) Convert months to years
4) Convert years to months
5) Roll dice
6) Exit
->2
Enter a number: 100
Enter a number: 20.5
100 minus 20.5 equals 79.5

1) Square a number
2) Subtract two numbers
3) Convert months to years
4) Convert years to months
5) Roll dice
6) Exit
->3
Enter a number: 24
24 months equals 2 years

1) Square a number
2) Subtract two numbers
3) Convert months to years
4) Convert years to months
5) Roll dice
6) Exit
->4
Enter a number: 30
30 years equals 360 months

1) Square a number
2) Subtract two numbers
3) Convert months to years
4) Convert years to months
5) Roll dice
6) Exit
->5
You rolled a 4 and a 5 for a total of 9

1) Square a number
2) Subtract two numbers
3) Convert months to years
4) Convert years to months
5) Roll dice
6) Exit
->6
Goodbye
```

## Tips, Tricks, and Reflection

- It's not a big deal, but we are repeating the following statement frequently: `parseFloat(readline.question("Enter a number: "))`. It may not be a bad idea to extract this code into a small function.
