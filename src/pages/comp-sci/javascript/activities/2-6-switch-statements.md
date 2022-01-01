---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: "JavaScript Fundamentals 2.6 Switch Statements"
---

[← Back](../)

# Activity 2.6 Switch Statements

## Introduction

If there is an instance where you need to see if a simple expressions matches one of many different values. For example, see how the program below uses if statements to match the value of a variable.

```js
var number = 1000;

if (number == 0) {
  // statements...
} else if (number == 10) {
  // statements...
} else if (number == 100) {
  // statements...
} else if (number == 1000) {
  // statements...
} else if (number == 10000) {
  // statements...
} else {
  // statments...
}
```

When you have a redundant set of `if`, `else if` statements checking a simple expression, such as the example above, this code can appear tedious. Although the algorithm works as intended, there is an alternative construct available, known as a switch statement.

**Switch statements** evaluates an expression and matches it to a given _case_, known as a case clause. A cases references a value, and an associate set of statements. If the case matches the expression, the code executes. A switch statement can be thought of as a way to redundantly check an expression for a matching value, without needing a bunch of `if`, `else if` statements.

**Example**

```js
var number = 1000;

switch (number) {
  case 0:
    console.log("Number is 0");
    break;
  case 10:
    console.log("Number is 10");
    break;
  case 100:
    console.log("Number is 100");
    break;
  case 1000:
    console.log("Number is 1000");
    break;
  case 10000:
    console.log("Number is 10000");
    break;
  default:
    console.log("Unknown...");
}
```

The `case` clause can be thought of as a series of `if`, `else if` statements, and the `default` clause can be thought of as an else statement.

The `break` keyword is used to end the switch statement. Without it, the switch statement continues trying to match different case clauses.

### Skills to Practice

- Writing switch statements

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Node.js_ for the language.
   2. Name the Repl "_2.6 Switch Statements_".
2. Click Create repl.

### Code

```javascript
var readline = require("readline-sync");

console.log("---Chinese Zodiac---");

var birthYear = parseInt(readline.question("Enter your birth year: "));
var animal;

switch (birthYear % 12) {
  case 0:
    animal = "monkey";
    break;
  case 1:
    animal = "rooster";
    break;
  case 2:
    animal = "dog";
    break;
  case 3:
    animal = "pig";
    break;
  case 4:
    animal = "rat";
    break;
  case 5:
    animal = "ox";
    break;
  case 6:
    animal = "tiger";
    break;
  case 7:
    animal = "rabbit";
    break;
  case 8:
    animal = "dragon";
    break;
  case 9:
    animal = "snake";
    break;
  case 10:
    animal = "horse";
    break;
  case 11:
    animal = "sheep";
}

console.log(`You were born in ${birthYear}, the year of the ${animal}!`);
```

### Debug

```
---Chinese Zodiac---
Enter your birth year: 1990
You were born in 1990, the year of the horse!
```

## Tips, Tricks, and Reflection

- What would the equivalent program look like if it were written with `if`, `else if` statements?
