---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: "JavaScript Fundamentals 1.1 Hello World"
---

[← Back](/comp-sci/javascript/)

# Activity 1.1 Hello World!

## Introduction

Every programming course begins with a simple program known as _Hello World_. The programming construct you will learn in this lesson is known as **output**. Output is information that is given to the user. In order to output information to the use, we need to use something called `console.log()`.

`console.log()` is known as a _function_. Functions perform some action in programming. In this case, `console.log()` outputs a message to the user via the console. The console is a simple terminal for running text based computer applications. Most of the introductory applications in these programming activities will be console based.

<iframe width="560" height="315" src="https://www.youtube.com/embed/4MnsiJ94yec" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Skills to Practice

- Writing and executing code
- Output messages with the `console.log()` function
- Debugging potential errors in your code.

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Node.js_ for the language.
   2. Name the Repl "_1.1 Output_" (No double quotes).
2. Click Create repl.

### Code

Your new workspace will contain an empty file named _index.js_. Starting on line 1, write the following code below. No copy and pasting! You will never learn how to make programs if you don’t write your own code.

```javascript
console.log("Hello, world!");
console.log("This class is taught by Mr. Mortimer.");
console.log("People say I look like Ethan from h3h3.");
console.log(
  "Please visit my blog: https://www.what-oh-heck-no-hold-up-huh-oh-okay.com"
);
console.log();

console.log("What is the answer to life, the universe, and everything?");
console.log("42. The answer is 42.");
console.log();

console.log("Sally sells seashells by the seashore.");
console.log("Sally is doing five to ten for tax evasion.");
console.log();

console.log("Papa bless,");
console.log("INSERT YOUR NAME");
```

### Debug

To execute your new program, click the run button at the top of your workspace. If everything was written correctly, you will see the various message output to the console. If not, you need to try and see where you made a mistake in your code. The process of testing your program is called _debugging_.

Compare your console output with the example below to see if they match.

```
Hello, world!
This class is taught by Mr. Mortimer.
People say I look like Ethan from h3h3.
Please visit my blog: https://www.what-oh-heck-no-hold-up-huh-oh-okay.com

What is the answer to life, the universe, and everything?
42. The answer is 42.

Sally sells seashells by the seashore.
Sally is doing five to ten for tax evasion.

Papa bless,
Mr. Mortimer
```

## Tips, Tricks, and Reflection

- What happens when you write console.log without a message in the parenthesis?
- When you see JavaScript code elsewhere, you may notice each statement ends with a semicolon, like this `console.log();`. Many languages use this convention, but it is optional in JavaScript. For this course, we will omit the use of semicolons, but just be aware of them if you see them.
