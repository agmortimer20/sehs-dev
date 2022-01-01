---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: "JavaScript Fundamentals 3.1 Arrays"
---

[← Back](/comp-sci/javascript/)

# Activity 3.1 Arrays

## Introduction

Many programs need to store multiple values of a common category. For example, an eCommerce site stores multiple items you want to purchase in a shopping basket. Your social media feeds contain many posts. In an RPG game the player may have multiple items in their inventory.

Something that can store many items in a collection are called **data structures**. The most basic data structure is known as an array.

- Arrays can store multiple values in a single structure.
- Items in an array are referred to as \*_elements_.
- Elements of an array are retrieved by referencing their position, or their order in the array.

**Array Sample**

![Array Sample](/assets/img/javascript/array-sample.png)

### Skills to Practice

- Creating arrays
- Setting values in an array
- Getting values from an array

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Node.js_ for the language.
   2. Name the Repl "_3.1 Arrays_".
2. Click Create repl.

### Code

```javascript
var readline = require("readline-sync");

// Create an array with values, and use them in a simple program.
var names = ["Anthony", "Ashton", "Allan", "Alejandro", "Alex"]; // Create an array of names

console.log(`${names[0]} is a giant dummy. How did he become a teacher?`);
console.log(`This other guy, ${names[1]}, smells like potato skins.`);
console.log(`${names[2]} is alright...`);
console.log(`I have literally no idea who ${names[3]} is...`);
console.log(`${names[4]} is probably the worst dude out there!\n`);

// Create a blank array and assign it some grades.
var grades = []; // Create an empty array

grades[0] = 96;
grades[1] = 85;
grades[2] = 90;
grades[3] = 81;
grades[4] = 89;

// Calculate final grade
var totalPoints = grades[0] + grades[1] + grades[2] + grades[3] + grades[4];
var finalGrade = totalPoints / 5;

console.log(`Grade 1: ${grades[0]} / 100`);
console.log(`Grade 2: ${grades[1]} / 100`);
console.log(`Grade 3: ${grades[2]} / 100`);
console.log(`Grade 4: ${grades[3]} / 100`);
console.log(`Grade 5: ${grades[4]} / 100`);
console.log(`Your final grades is ${finalGrade}% \n`);

// Create arrays with different data types
var wallet1 = ["Michael", 100];
var wallet2 = ["Johnny", 100000];
var wallet3 = ["Adam", -100];

console.log(`${wallet1[0]} has $${wallet1[1]}`);
console.log(`${wallet2[0]} has $${wallet2[1]}`);
console.log(`${wallet3[0]} has $${wallet3[1]}`);
```

### Debug

```
Anthony is a giant dummy. How did he become a teacher?
This other guy, Ashton, smells like potato skins.
Allan is alright...
I have literally no idea who Alejandro is...
Alex is probably the worst dude out there!

Grade 1: 96 / 100
Grade 2: 85 / 100
Grade 3: 90 / 100
Grade 4: 81 / 100
Grade 5: 89 / 100
Your final grades is 88.2%

Michael has $100
Johnny has $100000
Adam has $-100
```

## Tips, Tricks, and Reflection

- Technically, JavaScript arrays are actually a data structure known as a list. Traditionally, arrays are of a fixed size, meaning you have to set a limit on the number of elements it can store. It's not a big deal though, just know the difference if you decide to explore other programming languages.
