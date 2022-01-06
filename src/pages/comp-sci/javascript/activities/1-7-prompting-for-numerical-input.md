---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: "JavaScript Fundamentals 1.7 Prompting for Numerical Input"
---

[← Back](/comp-sci/javascript/)

# Activity 1.7 Prompting for Numerical Input

## Introduction

In the last activity, we learned how to prompt a user for input, and save their response to a variable. There is an issue that may arise with using `readline.question()`, this function always returns a **string**. Math cannot be performed with strings. Therefore, we need to be able to convert strings containing numbers into the number data type.

There are two functions for converting a string into a number:

- `parseInt()` - Convert a string into an integer
- `parseFloat()` - Convert a string into a decimal number

### Function Examples

```js
parseInt("32") // "32" converts to 32
parseFloat("100.4") // "100.4" converts to 100.4
parseFloat("32.5") // "32.5" converts to 32. The decimal gets truncated.
```

### Skills to Practice

- Prompt a user for input and saving it to a variable
- Convert input from a string to a number
  - Convert a string into an integer using `parseInt()`
  - Convert a string into a decimal using `parseFloat()`

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Node.js_ for the language.
   2. Name the Repl "_1.7 Numerical Input_".
2. Click Create repl.
3. Follow these instructions to import a Node.js Package in Repl.it:
   1. Click the packages tab on the left menu in your Repl workspace.
   2. Enter _readline-sync_ in the search box.
   3. Select the first result.
   4. Click the green add package button to install the package.

![Install readline-sync package](/assets/img/javascript/js-install-npm-package-repl.gif)

### Code

```javascript
var readline = require("readline-sync")

// Age to months calculator
console.log("--- Age to Months Calculator ---")
// Steps involved in the statements below:
// 1) User types age
// 2) Convert string input to integer
// 3) Save number to age
var age = readline.question("Enter your age: ")
age = parseInt(age)

console.log(
  `You are ${age} years old. That's ${age * 12} months old, you old fart!\n`
)

// Square area calculator
console.log("--- Square Area Calculator ---")
// Shorter, concise way to get input, convert to number, and save to variable
var length = parseFloat(readline.question("Enter the length of the square: "))
var unit = readline.question("Enter the unit of measurement (in, ft, m): ")
var area = length * length

console.log(`The area of the square is ${area}${unit} squared`)
```

### Debug

```
--- Age to Months Calculator ---
Enter your age: 30
You are 30 years old. That's 360 months old, you old fart!

--- Square Area Calculator ---
Enter the length of the square: 25.5
Enter the unit of measurement (in, ft, m): ft
The area of the square is 650.25ft squared
```

## Tips, Tricks, and Reflection

- If getting input, converting it to a number, and saving it to a variable is confusing, then write the code the long way. Sometimes it can be confusing, and it's perfectly fine to write the code over a few lines.

Example:

```js
var age = readline.question("Enter your age")
age = parseInt(age)
```
