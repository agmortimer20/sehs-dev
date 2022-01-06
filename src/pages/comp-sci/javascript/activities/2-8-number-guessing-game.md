---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: "JavaScript Fundamentals 2.8 Number Guessing Game"
---

[← Back](/comp-sci/javascript/)

# Activity 2.8 Number Guessing Game

## Introduction

All sorts of simple, but fun programs can be created with a few simple loops and if statements. For example, this simple little guessing game can be created with a basic while loop.

### Skills to Practice

- Writing while loops

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Node.js_ for the language.
   2. Name the Repl "_2.8 Number Guessing Game_".
2. Click Create repl.

### Code

```javascript
var readline = require("readline-sync")

var secretNumber = Math.floor(Math.random() * 10 + 1)
var tries = 0 // Track number of tries
var guess // Declared variables without a value are undefined

while (guess != secretNumber) {
  guess = parseInt(readline.question("Guess the number (1-10): "))
  tries++

  if (guess == secretNumber) {
    console.log(`Correct! It took you ${tries} tries!`)
  } else if (guess > secretNumber) {
    console.log("Wrong! Too high.")
  } else {
    console.log("Wrong! Too low.")
  }
}
```

### Debug

```
Guess the number (1-10): 1
Wrong! Too low.
Guess the number (1-10): 9
Wrong! Too high.
Guess the number (1-10): 6
Wrong! Too high.
Guess the number (1-10): 5
Correct! It took you 4 tries!
```

## Tips, Tricks, and Reflection

- Try adding a feature before the game starts to set the difficulty.
  - Easy: 1-10
  - Medium: 1-25
  - Hard: 1-50
  - Insane: 1-100
