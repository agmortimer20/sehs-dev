---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: "JavaScript Fundamentals 1.6 Prompting for Input"
---

[← Back](/comp-sci/javascript/)

# Activity 1.6 Prompting for Input

## Introduction

In this introductory section, we have been writing output using `console.log()`. Now we will learn another function that complements `console.log()`, and that is `readline.question()`. This function allows us to receive input from the user. I.e. The user can interact with the program via the console. Writing to and reading from the console is known as input and output, or I/O for short.

Here's the issue, Node.js does not provide the package for `readline.question()` by default, it needs to be imported. That's because Node.js was created for realtime web applications, not simple console apps. We will learn about package management much more later on, but for now, follow the new setup instructions below to get the _readline-sync_ package, which allows use to use the `readline.question()` function.

### Skills to Practice

- Install and import a Node.js package
- Prompt a user for input and saving it to a variable

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Node.js_ for the language.
   2. Name the Repl "_1.6 Input_".
2. Click Create repl.
3. Follow these instructions to import a Node.js Package in Repl.it:
   1. Click the packages tab on the left menu in your Repl workspace.
   2. Enter _readline-sync_ in the search box.
   3. Select the first result. This is the package description at the time of this writing:
      > Synchronous Readline for interactively running to have a conversation with the user via a console(TTY).
   4. Click the green add package button to install the package.

![Install readline-sync package](/assets/img/javascript/js-install-npm-package-repl.gif)

### Code

```javascript
// Node.js style import. This does NOT work in browser based JavaScript.
var readline = require("readline-sync");

// Buddy the Elf Greeting Program
// The program will pause and wait for the user to type a response.
var name = readline.question("Hey! What's your name? My name's Buddy! ");
console.log(`${name}, that's fun to say! ${name}, ${name}...`);

var answer = readline.question("Does someone need a hug? ");
console.log(`${answer}!? I just wanted a hug!`);

var favoriteColor = readline.question(
  "Buddy the Elf, what's your favorite color? "
);
console.log(
  `That's a nice ${favoriteColor} outfit, very ${favoriteColor}-y.\n`
);

// Secret Agent ID Program
console.log("----- SECRET AGENT CONSOLE -----");
console.log("IDENTITY NOT FOUND. CREATING NEW IDENTITY...");

var firstName = readline.question("Enter your first name: ");
var codeName = readline.question("Enter your code name: ");
var agentNumber = readline.question("Enter your agent ID number: ");

// I don't type the question inside of readline.question(), because I want to make a list of choices for this prompt
console.log("Choose your gadget:");
console.log("- ASMR Radio");
console.log("- Flashbang Energy Drink");
console.log("- Metamucil");
var gadget = readline.question("-> "); // Cool looking arrow prompt

console.log("\n-- Constructing your agent identity --");
console.log(`AGENT NAME: ${firstName} - CODE NAME: ${codeName}`);
console.log(`AGENT ID NUMBER: ${agentNumber}`);
console.log(`GADGET: ${gadget}`);
console.log("-- IDENTITY CONFIRMED EXITING... --");
```

### Debug

**Important!** Since you can now type into the console, it's not enough to just click run and look at the output, you need to interact with the program! To do this, click into the console, type your input, and press **enter**.

Your programs will no longer need look exactly like the sample output. Write whatever you want, you don't have to follow the sample exactly!

```
Hey! What's your name? My name's Buddy! Anthony
Anthony, that's fun to say! Anthony, Anthony...
Does someone need a hug? I hate you
I hate you!? I just wanted a hug!
Buddy the Elf, what's your favorite color? purple
That's a nice purple outfit, very purple-y.

----- SECRET AGENT CONSOLE -----
IDENTITY NOT FOUND. CREATING NEW IDENTITY...
Enter your first name: Anthony
Enter your code name: Habib
Enter your agent ID number: 233000
Choose your gadget:
- ASMR Radio
- Flashbang Energy Drink
- Metamucil
-> ASMR Radio

-- Constructing your agent identity --
AGENT NAME: Anthony - CODE NAME: Habib
AGENT ID NUMBER: 233000
GADGET: ASMR Radio
-- IDENTITY CONFIRMED EXITING... --
```

## Tips, Tricks, and Reflection

- You may have tried prompting the user for a number and performing math calculations with the input. However, that won't work right now. That's because `readline.question` always returns the user input as a _string_. We need to learn how to convert strings to number in order to use the values in math expressions. Check out the next activity to learn more!
