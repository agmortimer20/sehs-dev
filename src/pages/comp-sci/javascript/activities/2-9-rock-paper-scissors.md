---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: "JavaScript Fundamentals 2.9 Rock, Paper, Scissors Game"
---

[← Back](/comp-sci/javascript/)

# Activity 2.9 Rock, Paper, Scissors Game

## Introduction

Rock, paper, scissors is a fun game to play between friends. Here is a basic rundown of the rules:

- Choose rock, paper, or scissors
- Paper covers rock
- Rock crushes scissors
- Scissors cuts paper

### Skills to Practice

- Writing while loops
- Nesting multiple levels of code blocks

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Node.js_ for the language.
   2. Name the Repl "_2.9 Rock, Paper, Scissors_".
2. Click Create repl.

### Code

```javascript
var readline = require("readline-sync")

var wins = 0
var losses = 0
var round = 1
var playing = true

console.log("---ROCK, PAPER, SCISSORS---")
console.log(" --2020 Terminal Edition--")

/* Steps to making the game

1. Set the header: round number, wins, losses
2. Prompt user for player hand
3. Generate a random computer hand
4. Check who won
    i. If same hand - tie
   ii. If player chooses rock
      a. Computer paper - lose
      b. Computer scissors - win
  iii. If player chooses paper
      a. Computer scissors - lose
      b. Computer rock - win
   iv. If player chooses scissors
      a. Computer rock - lose
      b. Computer paper - win
5. Prompt user to play again

*/

while (playing) {
  console.log(`ROUND ${round}!`)
  console.log(`W: ${wins} - L: ${losses}`)

  console.log("Rock, Paper, Scissors?")

  var playerHand = readline.question("-> ").toLowerCase()

  var randomNumber = Math.floor(Math.random() * 3) // 0-2

  if (randomNumber == 0) {
    var computerHand = "rock"
  } else if (randomNumber == 1) {
    var computerHand = "paper"
  } else if (randomNumber == 2) {
    var computerHand = "scissors"
  }

  console.log(`Computer chooses ${computerHand}!\n`)

  if (playerHand == computerHand) {
    console.log("Tie!")
  } else if (playerHand == "rock") {
    if (computerHand == "paper") {
      console.log("You lose! Paper covers rock!\n")
      losses++
    } else {
      console.log("You win! Rock crushes scissors!\n")
      wins++
    }
  } else if (playerHand == "paper") {
    if (computerHand == "scissors") {
      console.log("You lose! Scissors cuts paper!\n")
      losses++
    } else {
      console.log("You win! Paper covers rock!\n")
      wins++
    }
  } else if (playerHand == "scissors") {
    if (computerHand == "rock") {
      console.log("You lose! Rock crushes scissors!\n")
      losses++
    } else {
      console.log("You win! Scissors cuts paper!\n")
      wins++
    }
  } else {
    console.log("You typed something wrong, dummy...\n")
  }

  // If player says no, set playing to false.
  // This terminates the while loop.
  console.log("\nPlay again?")
  var choice = readline.question("-> ")

  if (choice == "no") {
    playing = false
  } else {
    round++
  }

  console.log()
}
```

### Debug

```
---ROCK, PAPER, SCISSORS---
 --2020 Terminal Edition--
ROUND 1!
W: 0 - L: 0
Rock, Paper, Scissors?
-> scissors
Computer chooses scissors!

Tie!

Play again?
-> yes
ROUND 2!
W: 0 - L: 0
Rock, Paper, Scissors?
-> paper
Computer chooses scissors!

You lose! Scissors cuts paper!

Play again?
-> no
```

## Tips, Tricks, and Reflection

- Try making a two player version of rock, paper, scissors. When player one's turn is done, you can call the function `console.clear()` to clear the screen, so player two can't cheat.
- If you want to ascend as a programmer, try upgrading the game to **Rock, paper, scissors, lizard, Spock**!
- You can also try rewrite the code to use compound boolean expressions instead of nested if statements when checking if the player won or lost.
- As the complexity of your applications increases, it's more important than ever to make out the requirements. The multi-line comment in the activity code is a basic, but useful guide to tracking what needs to be implemented in the program.
