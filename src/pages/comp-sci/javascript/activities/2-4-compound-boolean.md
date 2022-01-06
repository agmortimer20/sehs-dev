---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: "JavaScript Fundamentals 2.4 Compound Boolean Expressions"
---

[← Back](/comp-sci/javascript/)

# Activity 2.4 Compound Boolean Expressions

## Introduction

The Boolean expressions we learned in the beginning of this section work for many scenarios, but sometimes we need more specific conditions. There are two Boolean operators that are commonly used to create more specific expressions.

- **And operator** `&&` - _Both_ sides of the expression must be true for the result to be true.
- **Or operator** `||` - _At least one_ side of the expression must be true for the result to be true.

Think of the _and_ `&&` operator as the stric operator between the two, and the _or_ `||` operator as the more relaxed operator.

Here's an example of when you may want to use a compound expression: "Check if a number is between 0 _and_ 100.

```js
number >= 0 && number <= 100
```

The expression read like this: "number is greater than or equal to 0 and number is less than or equal to 100.

### Truth Tables

| **And (&&)**                           | **Result** |
| :------------------------------------- | ---------: |
| `100 == 100 && "anthony" == "anthony"` |       true |
| `100 == 99 && "anthony" == "anthony"`  |      false |
| `"abc" == "abc" && "ABC" == "abc"`     |      false |
| `10 > 100 && 90 < 10`                  |      false |

| **Or (\|\|)**                            | **Result** |
| :--------------------------------------- | ---------: |
| `100 == 100 \|\| "anthony" == "anthony"` |       true |
| `100 == 99 \|\| "anthony" == "anthony"`  |       true |
| `"abc" == "abc" \|\| "ABC" == "abc"`     |       true |
| `10 > 100 \|\| 90 < 10`                  |      false |

### Skills to Practice

- Creating compound boolean expressions
  - And operator `&&`
  - Or operator `||`

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Node.js_ for the language.
   2. Name the Repl "_2.4 Compound Boolean Expressions_".
2. Click Create repl.

### Code

```javascript
var readline = require("readline-sync")

// One Round Battle Demo
var playerHealth = 10
var enemyHealth = 10
var escaped = false // If you decide to run, this will be set to true

console.log("--Menu--")
console.log("1) attack")
console.log("2) run")

var choice = readline.question("-> ") // Arrow next to prompt, nothing special

// Player can select number or word in menu
if (choice == "1" || choice == "attack") {
  // Random attack damage from 0 - 9
  var playerAttack = Math.floor(Math.random() * 10)
  var enemyAttack = Math.floor(Math.random() * 10)

  enemyHealth = enemyHealth - playerAttack
  playerHealth = playerHealth - enemyAttack

  console.log(`You did ${playerAttack} damage!`)
  console.log(`Enemy has ${enemyHealth} health left.\n`)
  console.log(`Enemy did ${enemyAttack} damage!`)
  console.log(`You have ${playerHealth} health left.\n`)
} else if (choice == "2" || choice == "run") {
  console.log(`You escape like a big baby...`)
  escaped = true
} else {
  console.log(`Invalid option. Exiting battle...`)
}

// escaped is the same as escaped == true
if (escaped) {
  console.log("Bye bye! Back home to Mommy!")
} else if (playerHealth > enemyHealth) {
  console.log("You are beating the enemy!")
} else if (enemyHealth > playerHealth) {
  console.log("Be careful, the enemy is beating you!")
} else {
  // Fought the enemy, but health is the same value
  console.log("Battle is tied!")
}

console.log("\n\n")

// Lottery Lite
// This game is difficult to win. To test out the conditions, consider temporarily lowering the range.
var lotteryNumber = Math.floor(Math.random() * 100) // 0 - 99

// Extract digits using division and modulus
var lotteryDigit1 = Math.floor(lotteryNumber / 10) // Get tens place
var lotteryDigit2 = lotteryNumber % 10 // Get ones place

var entry = parseInt(readline.question("Enter your lottery number (0 - 99): "))
var entryDigit1 = Math.floor(entry / 10)
var entryDigit2 = entry % 10

console.log(`And the lottery number is....\n${lotteryNumber}!`)

// Exact match -> $10,000
// Digits match -> $3,000
if (entry == lotteryNumber) {
  console.log("Exact match! You win the grand prize of $10,000!")
} else if (lotteryDigit1 == entryDigit2 && lotteryDigit2 == entryDigit1) {
  console.log("Your digits match! You win $3,000!")
} else {
  console.log("No match. Better luck next time!")
}
```

### Debug

```
--Menu--
1) attack
2) run
-> 1
You did 4 damage!
Enemy has 6 health left.

Enemy did 2 damage!
You have 8 health left.

You are beating the enemy!


Enter your lottery number (0 - 99): 90
And the lottery number is....
24!
No match. Better luck next time!
```

## Tips, Tricks, and Reflection

- When using the same variable on both sides of an expression, it may be tempting to write your condition like this: `choice == 0 || 1`. This syntax is incorrect, you must be explicit when writing your expressions: `choice == 0 || choice == 1`.
