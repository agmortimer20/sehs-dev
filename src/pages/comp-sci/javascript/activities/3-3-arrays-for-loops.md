---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: "JavaScript Fundamentals 3.3 Arrays and For Loops"
---

[← Back](../)

# Activity 3.3 Arrays and For Loops

## Introduction

You may have had a difficult time thinking where else for loops are useful. While loops are so flexible that you probably reach for them whenever you need to perform iteration. However, for loops work very well with arrays. Remember, to set up traversing through an array with a while loop, you needed three things:

- A variable to track the index, such as `i`.
- A condition that starts at 0 and ends at the last index.
- A statement to increment the variable for every element, such as `i++`.

The for loop has all of these items built right into it's header, and the work very well with arrays. Here's an example:

```js
var fruits = ["apples", "bananas", "cherries", "dates"];

for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

See how concise that is? For loops can be used not only to traverse an array, but also for setting up an array with a fixed number of elements, as you will see in the activity.

### Skills to Practice

- Creating arrays
- Setting values in an array using a for loop
- Accessing elements of an array using a for loop

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Node.js_ for the language.
   2. Name the Repl "_3.3 Arrays and For Loops_".
2. Click Create repl.

### Code

```javascript
var readline = require("readline-sync");

// Sample statistics program - Generates 100 sample elements
// Calculates the sum, and finds the smallest and largest elements
var sampleStatistics = [];

console.log("Generating statistics...");

for (var i = 0; i < 100; i++) {
  sampleStatistics[i] = Math.floor(Math.random() * 100);
  // console.log(sampleStatistics[i]) // Uncomment to see each number
}

// Get total
var total = 0;

for (var i = 0; i < sampleStatistics.length; i++) {
  total += sampleStatistics[i];
}

// Get smallest and largest numbers
var smallest = sampleStatistics[0];
var largest = sampleStatistics[0];

for (var i = 1; i < sampleStatistics.length; i++) {
  if (sampleStatistics[i] < smallest) {
    smallest = sampleStatistics[i];
  }

  if (sampleStatistics[i] > largest) {
    largest = sampleStatistics[i];
  }
}

console.log("Stats: ");
console.log(`Total sum: ${total}`);
console.log(`Smallest number: ${smallest}`);
console.log(`Largest number: ${largest}`);
```

### Debug

```
Generating statistics...
Stats:
Total sum: 4871
Smallest number: 2
Largest number: 99
```

## Tips, Tricks, and Reflection

- For array traversal, for loops are a great option over while loops, because they're organized very well for arrays.
