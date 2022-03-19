---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: "JavaScript Fundamentals 3.4 For Of Loops"
---

[← Back](/comp-sci/javascript/)

# Activity 3.4 For Of Loops

## Introduction

Although while loops are capable of iterating through arrays, there are other JavaScript constructs that make the process easier. For example, there is a specific kind of loop called a **for of loop** whose purpose is to iterate, or loop, through elements of an array.

```js
for (var variable of array) {
  //code
}
```

**Example**

```js
var fruits = ["apples", "bananas", "cherries", "dates"]

// for each fruit in the fruits array...
for (var fruit of fruits) {
  console.log(fruit)
}
```

```shell
apples
bananas
cherries
dates
```

The for loop operates as such:

1. The variable in the header is declared. It will be assigned to each element, one at a time for each iteration.
2. The array to be iterated through is written after the `of` keyword.
3. On the first iteration, the declared variable is assigned the first element of the array. The variable can be used anywhere inside the code block.
4. At the end of the loop, the array is checked to see if there is another element in the list. If there is another element, the variable is assigned the next element, and the code block repeats.
5. The loop continues until there are no more elements in the array to iterate through.

### Example Animation

<video src="/assets/video/javascript/for-of-loop-animation.mp4" width="640" controls></video>

### Skills to Practice

- Iterating through arrays using for of loops
- Refactoring a previous application

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Node.js_ for the language.
   2. Name the Repl "_3.4 For Of Loops_".
2. Click Create repl.

### Code

```javascript
var readline = require("readline-sync")

// Sodas App Version 2 - Uses a for of loop to iterate through array
console.log("--- Sodas App v2 ---")

var sodas = []
var addingSodas = true
var i = 0

while (addingSodas) {
  var soda = readline.question("Add a soda to your list: ")
  sodas[i] = soda
  i++

  var choice = readline.question("Add another soda? (yes/no) ")

  if (choice == "no") {
    addingSodas = false
  }
}

console.log("\nHere are your sodas:")

for (var soda of sodas) {
  console.log(`- ${soda}`)
}

// End sodas app
console.log("\n\n")

// Shopping cart app
console.log("--- Shopping Cart ---")

var shoppingCart = []
var addingItems = true
var i = 0

while (addingItems) {
  console.log("-Menu-")
  console.log("1) Add item to shopping cart")
  console.log("2) Show shopping cart")
  console.log("3) Exit")

  var choice = readline.question("-> ")

  if (choice == "1") {
    shoppingCart[i] = readline.question("Add an item to buy: ")
    i++ // Go to the next index
  } 
  else if (choice == "2") {
    console.log("\nShopping cart:")

    for (var item of shoppingCart) {
      console.log(`- ${item}`)
    }

    console.log() // Add space after cart contents
  } 
  else if (choice == "3") {
    addingItems = false
  } 
  else {
    console.log("Invalid option, try again...")
  }
}
```

### Debug

```
--- Sodas App v2 ---
Add a soda to your list: pepsi
Add another soda? (yes/no) yes
Add a soda to your list: coke
Add another soda? (yes/no) yes
Add a soda to your list: Crangis McSodaPop
Add another soda? (yes/no) no

Here are your sodas:
- pepsi
- coke
- Crangis McSodaPop



--- Shopping Cart ---
-Menu-
1) Add item to shopping cart
2) Show shopping cart
3) Exit
-> 1
Add an item to buy: milk
-Menu-
1) Add item to shopping cart
2) Show shopping cart
3) Exit
-> 1
Add an item to buy: soda
-Menu-
1) Add item to shopping cart
2) Show shopping cart
3) Exit
-> 1
Add an item to buy: butter
-Menu-
1) Add item to shopping cart
2) Show shopping cart
3) Exit
-> 2

Shopping cart:
- milk
- soda
- butter

-Menu-
1) Add item to shopping cart
2) Show shopping cart
3) Exit
-> 3
```

## Tips, Tricks, and Reflection

- Remember that while loops can do anything another loop can do, it's the most flexible of all the loops. But using a loop with a specific purpose can make coding some process easier.
