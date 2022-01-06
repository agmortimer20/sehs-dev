---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: "JavaScript Fundamentals 3.2 Arrays and While Loops"
---

[← Back](/comp-sci/javascript/)

# Activity 3.2 Arrays and While Loops

## Introduction

We can use loops to iterate through elements of an array. The key is to access each item, one at a time. We do this by tracking what index we are currently at using a number variable. A common convention is to use a variable named _i_ to track the index.

**Example**

```js
var games = ["Skyrim", "Overwatch", "Fortnite"]
var number = 0

console.log(games[number]) // Same as games[0]

number++

console.log(games[number]) // Same as games[1]
```

### Array.length

It's helpful to know how many elements exist in an array, so we know how many times we need to iterate. Arrays have a property named `.length` that is a number value that represents how many elements are in the array.

```js
var toys = ["train", "car", "slingshot"]

console.log(toys.length) // Outputs 3
```

### Skills to Practice

- Creating arrays
- Setting values in an array
- Accessing values in an array using number variables

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Node.js_ for the language.
   2. Name the Repl "_3.2 Arrays and While Loops_".
2. Click Create repl.

### Code

```javascript
var readline = require("readline-sync")

console.log("--- Sodas App ---")

var sodas = []
var i = 0 // Use i to access the array indexes dynamically

// Let user add 5 sodas to the list
while (i < 5) {
  var soda = readline.question("Add a soda to your list: ")
  sodas[i] = soda

  i++
}

i = 0 // Reset i back to 0

// Show sodas in a list
console.log("\nHere are your sodas:")

// sodas.length returns the number of elements in the array
while (i < sodas.length) {
  console.log(`- ${sodas[i]}`)
  i++
}

// End sodas app
console.log("\n\n")

console.log("--- Todo App ---")

i = 0
var todoList = []
var addingTodos = true

while (addingTodos) {
  console.log("-Menu-")
  console.log("1) Add a todo item")
  console.log("2) Finish")

  var choice = readline.question("-> ")

  if (choice == "1" || choice == "add") {
    todoList[i] = readline.question("Enter todo item: ")
    i++
  } else if (choice == "2" || choice == "finish") {
    addingTodos = false
  } else {
    console.log("Invalid option...")
  }
}

i = 0

console.log("\nTodo list: ")

while (i < todoList.length) {
  console.log(`- ${todoList[i]}`)
  i++
}
```

### Debug

```
--- Sodas App ---
Add a soda to your list: pepsi
Add a soda to your list: coke
Add a soda to your list: mountain dew
Add a soda to your list: fanta
Add a soda to your list: dr pepper

Here are your sodas:
- pepsi
- coke
- mountain dew
- fanta
- dr pepper



--- Todo App ---
-Menu-
1) Add a todo item
2) Finish
-> 1
Enter todo item: finish homework
-Menu-
1) Add a todo item
2) Finish
-> 1
Enter todo item: clean house
-Menu-
1) Add a todo item
2) Finish
-> 1
Enter todo item: wash car
-Menu-
1) Add a todo item
2) Finish
-> 2

Todo list:
- finish homework
- clean house
- wash car
```

## Tips, Tricks, and Reflection

- When you finish, try refactoring, or improving the soda app so it's not hard-coded to five sodas. i.e. Let the user input as many sodas as they want, just like how to todo app lets the user type in as many todo items as they need.
- You need to remember to pay close attention not to iterate past the last element of your array. In JavaScript, you will merely get a value of `undefined`, but in other languages, such as Python, C#, or Java, accessing an index that doesn't exist will crash the program.
