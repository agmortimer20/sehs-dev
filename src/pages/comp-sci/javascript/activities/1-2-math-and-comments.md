---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: "JavaScript Fundamentals 1.2 Math and Comments"
---

[← Back](/comp-sci/javascript/)

# Activity 1.2 Math and Comments

## Introduction

Math is extremely important in computer science. Any useful program has to store and use numbers in some way. From video games, to online stores, to graphic design apps, math is necessary to creating the software we use every day. It is necessary to not only calculate math expressions, but also to display the results to the user.

`console.log()` doesn’t just output text messages, it is also capable of outputting the numbers and math expressions. In this activity, we will writing simple programs to demonstrate how math works in JavaScript. There are multiple symbols used to write math expressions:

- \+ Addition
- \- Subtraction
- \* Multiplication (asterisk, Shift+8)
- / Division, quotient (forward slash)
- % Division, remainder (percent sign)

The two symbols for division may throw you off, because we don't have a math sign for remainder division in traditional arithmetic. We'll practice this symbol in depth, so you can see how useful it can be when creating certain programs.

We will also learn how to write comments in JavaScript. Comments serve two purposes, to document, or take notes, in your code, and to disable parts of your program for testing. We will be writing simple programs for the time being, but they will eventually grow in size and complexity. It's important to document parts of your code for yourself and your team, so your code can be easily understood and maintainable. We will start with one type of comment, the single line comment: `// comment`.

<iframe width="560" height="315" src="https://www.youtube.com/embed/f5MQpM4IUzk" frameborder="0" allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture" allowfullscreen></iframe>

### Skills to Practice

- Write math expressions
- Output numbers with `console.log()`
- Document code with single line comments
- Control math calculation with order of operations

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Node.js_ for the language.
   2. Name the Repl "_1.2 Math_".
2. Click Create repl.

### Code

```javascript
// These are comments. They help programmers take notes in their code.
// Comments are ignored by the compiler.

// Addition
console.log(
  "I have two apples. I find another apple. How many apples do I have?"
)
console.log(2 + 1)
console.log()

console.log("Bank balance: $1000. Depositing $500.96. Your new balance is:")
console.log(1000 + 500.96)
console.log()

// Subtraction
console.log(
  "I'm hungry and I want to eat an apple. How many apples will I have left?"
)
console.log(3 - 1)
console.log()

// Multiplication
console.log("I'm 30 years old. In months, that's: ") // Replace 30 with your age
console.log(30 * 12) // Replace 30 with your age
console.log()

// Division - Quotient and remainder

// Quotient
console.log("We have eight slices of pizza between the two of us.")
console.log("We each get this many slices: ")
console.log(8 / 2)
console.log()

console.log("I have to split this dollar between the six of us. We each get: ")
console.log(100 / 6) // Will this divide evenly?
console.log()

// Remainder using the modulus, or mod, operator
console.log("After splitting up the dollar, how many cents are left over?")
console.log(100 % 6)
console.log()

// Order of operations
console.log("4 * 10 + 12 equals:")
console.log(4 * 10 + 12)
console.log("4 * (10 + 12) equals:")
console.log(4 * (10 + 12))
```

### Debug

```
I have two apples. I find another apple. How many apples do I have?
3

Bank balance: $1000. Depositing $500.96. Your new balance is:
1500.96

I'm hungry and I want to eat an apple. How many apples will I have left?
2

I'm 30 years old. In months, that's:
360

We have eight slices of pizza between the two of us.
We each get this many slices:
4

I have to split this dollar between the six of us. We each get:
16.666666666666668

After splitting up the dollar, how many cents are left over?
4

4 * 10 + 2 equals:
52
4 * (10 + 2) equals:
88
```

## Tips, Tricks, and Reflection

- Let's be honest, this program looks terrible. The math for each statement may correct, but it's hard to read. The division involving money returns a repeating decimal, every answer is on it's own line, and the monetary values don't have a dollar sign. These are called _formatting issues_, and we will learn how to make the output look better in future programs.
- When writing math expressions in code, you don't have to have a space in between the numbers and signs. It is valid to write **2+2**, but I recommend writing **2 + 2** with the spaces in between.
- Math signs `+ - * / %` are known as operators, and numbers used with operators are known as operands. When we write math statements they are called expressions.
