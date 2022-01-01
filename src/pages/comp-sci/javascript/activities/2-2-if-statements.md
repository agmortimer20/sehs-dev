---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: "JavaScript Fundamentals 2.2 If Statements"
---

[← Back](/comp-sci/javascript/)

# Activity 2.2 If Statements

## Introduction

Programming languages have a series of constructs that allow a programmer to control what portions of their program execute, and if necessary, how many times to repeat that code. The first type of control structure to learn is the **if statement**.

An if statement will execute a section of code, known as a **code block**, if a boolean expression, known as a **condition** has a _true_ result.

```js
var number = 100;

if (number == 100) {
  console.log("Code inside a code block.");
  console.log("More code inside a code block...");
}
```

If the condition is _true_, the code block, which is surrounded by the curly braces, will execute. If the condition is _false_, the code block is skipped over, and does not execute.

### Example Animation

<video src="/assets/video/javascript/if-statement-animation.mp4" width="640" controls></video>

### Skills to Practice

- Constructing if statements
  - Create a condition
  - Create a code block

### Activity Instructions

## Setup

1. Create a new repl.
   1. Select _Node.js_ for the language.
   2. Name the Repl "_2.2 If Statements_".
2. Click Create repl.

### Code

```javascript
var readline = require("readline-sync");

// Age Checker Program
var age = parseInt(readline.question("Enter your age: "));

if (age < 0) {
  console.log("You're still a baby, get back in there!");
}

if (age >= 13) {
  console.log("You're old enough to join Cobra Kai.\n");
}

if (age >= 16) {
  console.log("You're old enough to get your license!\n");
}

if (age >= 18) {
  console.log("You're old enough to live on your own.");
  console.log("So... Get out of your parents' basement!\n");
}

if (age >= 35) {
  console.log("You're old enough to run for president.");
  var name = readline.question("Enter your full name: ");
  var year = readline.question("What year will you run? ");
  var nickname = readline.question("What's your nickname (adjective): ");

  console.log(`\n${nickname} ${name} for president! Coming ${year}`);
}
```

### Debug

```
Enter your age: 30
You're old enough to join Cobra Kai.

You're old enough to get your license!

You're old enough to live on your own.
So... Get out of your parents' basement!

You're old enough to run for president.
Enter your full name: Anthony Mortimer
What year will you run? 2020
What's your nickname (adjective): Sleepy

Sleepy Anthony Mortimer for president! Coming 2020
```

## Tips, Tricks, and Reflection

- There's an age range that's missing. If you type in 0 - 12, nothing happens. Add an if statement to fix this issue.
- Indentation of code inside a block shows what code belongs to what section. Be consistent with your indentations, your code will be much more readable and maintainable.
