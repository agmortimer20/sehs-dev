---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: "JavaScript Fundamentals 5.1 JavaScript Objects"
---

[← Back](/comp-sci/javascript/)

# Activity 5.1 JavaScript Objects

## Introduction

Welcome to the world of object-oriented programming, or OOP for short. Object-oriented programming allows us to model our programs around the categories of things we work with in our programs. This style of programming allows us to begin designing our programs in an organized way. The first question you may have is “Where do I begin?”. Just like other programs, you start with your data. What data do you need to work with? Think in plain English for a moment. Using object-oriented design, we can begin to create our own data types that resemble the things in our application.

- For an online store, I have products, orders, customers, etc.
- For an RPG game, I have players, enemies, items, weapons, etc.
- For a banking application, I have accounts, transactions, etc.

Note: JavaScript is known as an object-oriented programming language. That means every piece of data we work with is an object. We will dive deeper into what this means, but keep this in mind.

Object-oriented syntax and models vary across programming languages. JavaScript has a very flexible way of working with objects. We will begin this section by working with **object literals**. We can create a single object, one at a time. An individual object is known as an **instance**.

**Example**

You are not expected to understand this syntax immediately. We will learn it little by little.

```js
var myPokemon = {
  name: "Pickachu",
  type: "electric",
  attack: function () {
    console.log("Thundershock!");
  },
};

var enemyPokemon = {
  name: "Gengar",
  type: "ghost",
  attack: function () {
    console.log("Curse!");
  },
};
```

### Properties

The first component of an object we will work with is known as a **property**. A property is a value that is associated with an object. A single object may have many properties.

**Example**

```js
var dog = {
  breed: "Pit bull",
  age: 10,
  gender: "female",
};
```

The properties of an object can be accessed using _dot notation_ ( . ). To access the `breed` property of the dog variable, type `dog.breed`.

```js
console.log(`My dog is a ${dog.breed}`);
```

### Skills to Practice

- Creating objects using object-literal syntax
- Accessing properties of an object

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Node.js_ for the language.
   2. Name the Repl "_5.1 Objects_".
2. Click Create repl.

### Code

```javascript
/* Card Game Demo
  Object: Card
  Properties: Suit and Value
*/

// Function used to get a random card or die value
function randomValue(max) {
  return Math.floor(Math.random() * max + 1);
}

var card1 = { suit: "Spades", value: 10 };
var card2 = { suit: "Hearts", value: 5 };
var playerTotal = card1.value + card2.value;

// Properties can be broken down over multiple lines
var dealerCard1 = {
  suit: "Clubs",
  value: randomValue(10),
};

var dealerCard2 = {
  suit: "Diamonds",
  value: randomValue(10),
};

var dealerTotal = dealerCard1.value + dealerCard2.value;

console.log("- Card Game Demo -\n");
console.log("Your cards are:");
console.log(`The ${card1.value} of ${card1.suit}`);
console.log(`The ${card2.value} of ${card2.suit}\n`);
console.log("The dealer draws:");
console.log(`The ${dealerCard1.value} of ${dealerCard1.suit}`);
console.log(`The ${dealerCard2.value} of ${dealerCard2.suit}\n`);

if (playerTotal > dealerTotal) {
  console.log("You win!");
} 
else if (playerTotal == dealerTotal) {
  console.log("Tie!");
} 
else {
  console.log("You lose!");
}
```

### Debug

```
- Card Game Demo -

Your cards are:
The 10 of Spades
The 5 of Hearts

The dealer draws:
The 3 of Clubs
The 10 of Diamonds

You win!
```

## Tips, Tricks, and Reflection

- Try refactoring the player cards to use the `randomCardValue()` function.
