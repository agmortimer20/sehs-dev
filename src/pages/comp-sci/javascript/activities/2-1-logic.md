---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: "JavaScript Fundamentals 2.1 Logic Crash Course"
---

[← Back](../)

# Activity 2.1 Logic Crash Course

## Introduction

Computers aren't limited to performing math calculations. We are able to program computers to make decisions using logical expressions. When a computer can make decisions, it's able to determine different outcomes in a program. Here are a few example scenarios:

- If you sign in to an application, the app will determine if you signed in with a valid account or not.
- When viewing mature games on Steam, the app needs to verify if you are old enough to view the game or not.
- If you're playing a video game, the game needs to know when you've won or lost.

These examples all use instances of decision making. Think of it like a computer being able to answer _yes_ or _no_, _correct_ or _incorrect_, or more specifically, _true_ or _false_. Programming languages have a data type called a **boolean** that represents the values **true** and **false**. The study of computing logical expressions is known as boolean logic. Logical expressions in programming result in either a true or false answer. Let's revisit the examples above:

- If I sign into Instagram with a my username but an invalid password, will I see my feed? **True** or **false**?
- If I type in my birthday, _May 24, 1990_ when viewing a mature game on Steam, will I be able to see it? **True** or **false**?
- If I'm playing Skyrim, and my health goes below 0, do I lose? **True** or **false**?

Just as math has math operators (`+ - * /`), boolean logic has logic operators: equal to `==`, not equal to `!=`, greater than (`>`), less than (`<`), greater than or equal to (`>=`), less than or equal to (`<=`), and not (`!`). Logic expressions can be constructed using different data types combined with these operators. The result will be either _true_ or _false_. Here's an example:

```js
1000 == 1000;
```

Is 1000 equal to 1000? It is, so the result is the value _true_. You can see a number of different examples in the tables below. These are known as truth tables.

| **Equal To (`==`)** | **Result** |
| :------------------ | ---------: |
| `100 == 100`        |       true |
| `100 == 99`         |      false |
| `"abc" == "abc"`    |       true |
| `"ABC" == "abc" `   |      false |
| `true == true`      |       true |
| `true == false`     |      false |

| **Not Equal To (`!=`)** | **Result** |
| :---------------------- | ---------: |
| `100 != 100`            |      false |
| `100 != 99`             |       true |
| `"abc" != "abc"`        |      false |
| `"ABC" != "abc" `       |       true |
| `true != true`          |      false |
| `true != false`         |       true |

| **Greater than/Less than (`>`,`<`)** | **Result** |
| :----------------------------------- | ---------: |
| `100 > 100`                          |      false |
| `100 > 99`                           |       true |
| `0 < 100`                            |       true |
| `0 < -1`                             |      false |

| **Greater than or equal to/Less than or equal (`>=`,`<=`)** | **Result** |
| :---------------------------------------------------------- | ---------: |
| `100 >= 100`                                                |       true |
| `100 <= 99`                                                 |      false |

| **Not (`!`)**  | **Result** |
| :------------- | ---------: |
| `!true`        |      false |
| `!false`       |       true |
| `!(100 > 100)` |       true |

### Skills to Practice

- Constructing boolean expressions using the following operators:
  - equal to (`==`) and not equal to (`!=`)
  - greater than (`>`) and less than (`<`)
  - greater than or equal to (`>=`) and less than or equal to (`<=`)
  - not (`!`)

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Node.js_ for the language.
   2. Name the Repl "_2.1 Logic_".
2. Click Create repl.

### Code

```javascript
var name = "Mr. Mortimer";
var age = 30;
var bankAccount = 150;
var isATeacher = true;
var isAMillionaire = false;

console.log(`Is my name Mr. Mortimer? ${name == "Mr. Mortimer"}`);
console.log(`Is my name Mr. Mertens? ${name == "Mr. Mertens"}`);
console.log(`My name is not Mr. Merriman: ${name != "Mr. Merriman"}`);

console.log(`Am I old enough to drive? ${age >= 16}`);
console.log(
  `Do I have enough to buy a Dodge Challenger? ${bankAccount > 31000}`
);

console.log(`${name} is a teacher: ${isATeacher == true}`);
console.log(`${name} is a millionaire: ${isAMillionaire}`);
console.log(`So, ${name} isn't a millionaire? ${!isAMillionaire}`);
```

### Debug

```
Is my name Mr. Mortimer? true
Is my name Mr. Mertens? false
My name is not Mr. Merriman: true
Am I old enough to drive? true
Do I have enough to buy a Dodge Challenger? false
Mr. Mortimer is a teacher: true
Mr. Mortimer is a millionaire: false
So, Mr. Mortimer isn't a millionaire? true
```

## Tips, Tricks, and Reflection

- This demo is not of much use yet. Over the next few activities, you will see just how powerful logical expressions can be in decision making.
- You can quickly test out a boolean expression using
