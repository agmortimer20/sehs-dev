---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: "JavaScript Fundamentals "
---

[← Back](../)

# Activity 1.3 String Formatting

## Introduction

In the previous activity, the math expressions were output seperately from the strings. Although this works, it doesn't look nice. In programming we format strings to construct complex text messages. In JavaScript, there are two popular ways to format strings: _string concatenation_ and _string templates_.

String concatenation involves using the plus sign (`+`) to _combine_ data. For example, I can combing `"My age in months is "` with the number `30 * 12` by using the plus sign.

```js
"My age in months is " + 30 * 12;
```

This does **not** perform addition. The plus sign combines the two pieces of data.

The newer way to format strings is to use a feature called _string templates_. With string templates, you use backticks ( \` \` ) instead of quotes to denote a string. You then use the `${}` symbol to insert expressions into the string.

```js
`My age in months is ${30 * 12}.`;
```

### Skills to Practice

- String concatenation and string templates

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Node.js_ for the language.
   2. Name the Repl "_1.3 StringFormatting_".
2. Click Create repl.

### Code

```javascript
// String contatenation - Use the *+* sign to append math expressions to strings
console.log("10 squared is " + 10 * 10); // Multiply 10 * ten, then append it to the string.
console.log();

// Performing addition and string contatenation together can cause problems.
// console.log("I'm 5 foot 10 inches. In inches, that's " + 5 * 12 + 10 + " inches.")

// You can use parentheses to ensure the addition is not mixed up with concatenation.
console.log("I'm 5 foot 10 inches. That's " + (5 * 12 + 10) + " inches.");
console.log();

// String templates - Use backticks ` with ${ } instead of quotes.
console.log(
  `If I take out a $1000 loan, and pay $25 each month, I will pay my loan off in ${
    1000 / 25
  } months.`
);
console.log();

console.log("A woodchuck can chuck 32 wood panels every minute.");
console.log(
  `Therefore, a woodchuck can chuck ${32 * 60} wood panels every hour.`
);
console.log();
```

### Debug

```
10 squared is 100

I'm 5 foot 10 inches. That's 70 inches.

If I take out a $1000 loan, and pay $25 each month, I will pay my loan off in 40 months.

A woodchuck can chuck 32 wood panels every minute.
Therefore, a woodchuck can chuck 1920 wood panels every hour.
```

## Tips, Tricks, and Reflection

- You are welcome to use either technique for string formatting, but this course will favor string templates.
