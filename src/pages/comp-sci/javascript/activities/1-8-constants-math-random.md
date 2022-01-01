---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: "JavaScript Fundamentals 1.8 Constants, Math Functions and Random Numbers"
---

[← Back](/comp-sci/javascript/)

# Activity 1.8 Constants, Math Functions, and Random Numbers

## Introduction

Constants are similar to variables in that you can store values with them. However, once the constant is created, it cannot be changed. There are instances where a value is not meant to be ever changed, such as PI, which never changes. If you try to change the value stored in a constant, the program will crash. You may ask "Why not just create a variable and never change it"? It's important to try writing programs in such a way that you mitigate the potential for issues. Constants are a feature that ensure a value is not accidentally changed.

With reference to PI, JavaScript provides built-in math constants along with other useful math functions. We have access to these constructs through something called the _Math object_. For example, there are built-in functions for calculting exponents and square roots, rounding numbers, generating random numbers, etc.

### Skills to Practice

- Create constants
- Use built-in math functions to perform calculations
- Truncate decimal

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Node.js_ for the language.
   2. Name the Repl "_1.8 Constants and Math Functions_".
2. Click Create repl.
3. Follow these instructions to import a Node.js Package in Repl.it:
   1. Click the packages tab on the left menu in your Repl workspace.
   2. Enter _readline-sync_ in the search box.
   3. Select the first result.
   4. Click the green add package button to install the package.

![Install readline-sync package](/assets/img/javascript/js-install-npm-package-repl.gif)

### Code

```javascript
var readline = require("readline-sync");

// Constants
console.log("--- Cash Register Sales Tax Calculator ---");

const SALES_TAX = 0.08;
// Uncomment the line below and try running the program.
// SALES_TAX = 0.09
var subtotal = 10;
var tax = subtotal * SALES_TAX;

console.log(`Subtotal: $${subtotal}, Total: $${subtotal + tax}\n`);

console.log("--- Circumference Calculator ---");
var radius = parseFloat(readline.question("Enter radius: "));
var circumference = 2 * Math.PI * radius; // Built-in constant - Math.PI

console.log(`Radius: ${radius}, Circumference: ${circumference}`);
console.log(`Truncate circumference: ${circumference.toFixed(2)}\n`);

console.log("--- Math Function Demos ---");

console.log("- Math.pow(base, exponent) - Calculate exponents");
console.log(`7 cubed = ${Math.pow(7, 3)}\n`);

console.log("- Math.sqrt(number) - Calculate square roots");
console.log(`Square root of 4 = ${Math.sqrt(4)}\n`);

console.log("- Math.round(number), Math.floor(number), Math.ceil(number)");
console.log("- Round decimal, always round down, always round up");
console.log("Number: 3.534");
console.log(
  `Round: ${Math.round(3.534)}, Floor: ${Math.floor(3.534)}, Ceil: ${Math.ceil(
    3.534
  )}\n`
);

console.log(
  "- Math.random() - Generate a random number between 0-1 (exclusive)"
);
var randomNumber = Math.floor(Math.random() * 100); // Generate a random number from 0-99
console.log(`Randomly generated number: ${randomNumber}\n`);
```

### Debug

```
--- Cash Register Sales Tax Calculator ---
Subtotal: $10, Total: $18

--- Circumference Calculator ---
Enter radius: 12
Radius: 12, Circumference: 75.39822368615503
Truncate circumference: 75.40

--- Math Function Demos ---
- Math.pow(base, exponent) - Calculate exponents
7 cubed = 343

- Math.sqrt(number) - Calculate square roots
Square root of 4 = 2

- Math.round(number), Math.floor(number), Math.ceil(number)
- Round decimal, always round down, always round up
Number: 3.534
Round: 4, Floor: 3, Ceil: 4

- Math.random() - Generate a random number between 0-1 (exclusive)
Randomly generated number: 74
```

## Tips, Tricks, and Reflection

- Explore some more math functions [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math).
