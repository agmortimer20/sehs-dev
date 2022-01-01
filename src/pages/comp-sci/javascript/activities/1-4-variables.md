---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: "JavaScript Fundamentals 1.4 Variables"
---

[← Back](../)

# Activity 1.4 Variables

## Introduction

_Variables_ allow us to save data during our program execution. For example, in an RPG video game, your character has attributes such as health, magic, stamina, etc. These are values that need to be tracked throughout the game. Variables allow us to store this data and use it throughout the program.

### Skills to Practice

- Declaring and assigning values to variables
- Use variables in formatted strings

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Node.js_ for the language.
   2. Name the Repl "_1.4 Variables_".
2. Click Create repl.

### Code

```javascript
// String variables
var name = "Anthony"; // Replace the name with your name
var food = "Steak"; // Replace the food with your favorite food
var item = "peppers";

console.log(`Hello, my name is ${name}`);
console.log(`${name} likes the stinkiest of ${food}.`);
console.log(
  `${name} likes ${food} so much, he/she eats it out of the garbage!`
);
console.log();

console.log(`Peter Piper picked a peck of pickled ${item}`);
console.log(`A peck of pickled ${item} Peter Piper picked`);
console.log();

// Numbers
var age = 30; // Replace the number with your age

console.log(`You will reach age 100 in ${100 - age} years!`);
console.log();

var balance = 35.25;
var withdrawAmount = 0; // Enter a number
var newBalance = balance - withdrawAmount;

console.log(`You have a balance of ${balance} in your bank account.`);
// Literal dollar sign in front of template expression
console.log(
  `If you withdraw $${withdrawAmount}, you will have $${newBalance}.`
);
console.log();

var health = 100;
var damage = 55.95;

console.log(
  `You've took ${damage} damage. You have ${health - damage} health left.`
);
```

### Debug

```
Hello, my name is Anthony
Anthony likes the stinkiest of Steak.
Anthony likes Steak so much, he/she eats it out of the garbage!

Peter Piper picked a peck of pickled peppers
A peck of pickled peppers Peter Piper picked

You will reach age 100 in 70 years!

You have a balance of 35.25 in your bank account.
If you withdraw $0, you will have $35.25.

You've took 55.95 damage. You have 44.05 health left.
```

## Tips, Tricks, and Reflection

- Variable names must begin with a letter, underscore, or a dollar sign. They cannot contain spaces!
- Notice how I capitalize variables with multiple words in the name. This is known as camel case, and it's the convention for writing variable names with multiple words. You capitalize every word **after** the first word in the name. Ex. multipleWordThing
