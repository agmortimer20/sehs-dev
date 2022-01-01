---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: "JavaScript Fundamentals 3.5 Useful Array Functions"
---

[← Back](/comp-sci/javascript/)

# Activity 3.5 Useful Array Functions

### Introduction

JavaScript provides a number of different useful functions for working with arrays. We will learn a small subset of functions, but be sure to check out the [Mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods) for a full list of built-in functions.

### Examples

#### `.includes(element)`

Returns **true** if the element exists in the array. Otherwise, returns **false**.

```js
var chips = ["jalapeno", "sour cream", "barbeque", "cheddar", "cool ranch"];
console.log(chips.includes("cheddar"));
console.log(chips.includes("hawaiian bbq"));
```

```shell
true
false
```

#### `.indexOf(element)`

Returns the **index** of the element if it exists in an array. Returns **-1** if the element is not found.

```js
var chips = ["jalapeno", "sour cream", "barbeque", "cheddar", "cool ranch"];
console.log(chips.indexOf("cheddar"));
console.log(chips.indexOf("hawaiian bbq"));
```

```shell
3
-1
```

#### `.push(newelement)`

Appends, or adds, an element at the end of an array.

```js
var chips = ["jalapeno", "sour cream", "barbeque", "cheddar", "cool ranch"];
chips.push("salt & vinegar");
chips.push("nacho cheese");
console.log(chips);
```

```shell
['jalapeno', 'sour cream', 'barbeque', 'cheddar', 'cool ranch', 'salt & vinegar', 'nacho cheese']
```

#### `.splice(index, howManyElements)`

Removes and returns one or more elements from an array. Specify the index to start at and how many elements to slice. Note, we will typically use `.splice()` to remove just one element from an array.

```js
var animals = ["mongoose", "camel", "wolf", "sheep"];
var myAnimal = animals.splice(1, 1); // Starting at index 1, remove 1 element
console.log(myAnimal);
console.log(animals);
```

```shell
['camel']
['mongoose', 'wolf', 'sheep']
```

### Skills to Practice

- Finding elements using the `.indexOf()` function.
- Adding elements to an array using the `.push()` function.
- Removing elements from an array using the `.splice()` function.

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Node.js_ for the language.
   2. Name the Repl "_3.5 Useful Array Functions_".
2. Click Create repl.

### Code

```javascript
var readline = require("readline-sync");

var inventory = [];
var itemChoice = "";

inventory.push("potion");
inventory.push("potion");
inventory.push("key");
inventory.push("sword");

while (itemChoice != "exit") {
  console.log("Items:");

  for (var item of inventory) {
    console.log(`- ${item}`);
  }

  console.log("\nWhat item would you like to use? (type exit to finish)");
  itemChoice = readline.question("-> ");

  if (itemChoice == "exit") {
    console.log("Goodbye...");
  } else if (!inventory.includes(itemChoice)) {
    console.log("Item not found...\n");
  } else {
    console.log(`Using ${itemChoice}\n`);
    var itemIndex = inventory.indexOf(itemChoice);
    inventory.splice(itemIndex, 1);
  }
}
```

### Debug

```
What item would you like to use? (type exit to finish)
-> potion
Using potion

Items:
- potion
- key
- sword

What item would you like to use? (type exit to finish)
-> axe
Item not found...

Items:
- potion
- key
- sword

What item would you like to use? (type exit to finish)
-> sword
Using sword

Items:
- potion
- key

What item would you like to use? (type exit to finish)
-> exit
Goodbye...
```

## Tips, Tricks, and Reflection

- One of the most popular JavaScript libraries, [lodash](https://lodash.com/), has a large number of functions for working with arrays. Check it out, and see if you find any useful functions you may want to try using.
