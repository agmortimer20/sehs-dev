---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: "JavaScript Fundamentals 2.5 Nested If Statements"
---

[← Back](../)

# Activity 2.5 Nested If Statements

## Introduction

There are many instances where you need to further make decisions after executing an if statement. We can put an if statement inside of another if statement. This is called _nesting_.

```js
var someCondition = true;
var someOtherCondition = true;

if (someCondition) {
  if (someOtherCondition) {
    // code
  } else {
    //code
  }
}
```

It's so important to keep your code nicely formatted. Here is a review of the tips from before:

- Always line up your curly braces for your code blocks. Most code editors show a line from the closing brace to the top of the if statement to show where a block starts and ends.
- Always indent one tab (2-4 spaces) for every code block. If you have a nested if statement, then the code in the nested code block should indented again.
- If else if, and else statements that belong together should not have space inbetween them. Butt them right up against eachother.
- Space your code based on sections. If you have seperate if statements, space them out with a blank line.

This program is called a choose your own adventure game. It's going to be the biggest program you make so far. Take your time, and test your code frequently. Don't try to write the whole program and then test it at the end, or else it could spell disaster when you try to debug. Write one section at a time, and then test it.

### Skills to Practice

- Nesting if statements
- Testing nested branching statements

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Node.js_ for the language.
   2. Name the Repl "_2.5 Nested if statements_".
2. Click Create repl.

## Code

```javascript
var readline = require("readline-sync");

// Trigger an ending by setting on of the ending variables to true
var wolfpackEnding = false;
var dragonEnding = false;
var gold = 0;
var hohos = 0;

console.log("Your car crahes into a tree during a thunderstorm in the woods.");
console.log(
  "As the storm intensifies, you run into a nearby cave to seek shelter."
);
console.log("Upon entering the cave, you see two diverging paths...\n");

// Append .toLowerCase() to any string, string variable, or function that returns a string.
// By making the value lowercase, it ensure the if statment executes whether they type "Left" or "left".
var choice = readline
  .question("Which path do you take? (left or right) -> ")
  .toLowerCase();

// Left -> Wolfpack
// Right -> Dragon
if (choice == "left") {
  console.log("You decide to take the left path.");
  console.log("You stumble into a pack of wolves lying together.");
  console.log("The pack leader slowly approaches...\n");

  choice = readline
    .question("Do you pet the pack leader? (yes or no) -> ")
    .toLowerCase();

  if (choice == "yes" || choice == "y") {
    console.log("The pack leader respects and accepts you.");
    console.log("You are given a gold satchel by the pack leader.");
    console.log(
      "You also cuddle with the wolf pack until the storm subsides...\n"
    );

    gold = 5;
    wolfpackEnding = true;
  } else {
    console.log("The pack leader senses your fear.");
    console.log("The entire pack crowds around you and devours you...\n");
  }
} // End left path
else if (choice == "right") {
  console.log("You decide to take the right path.");
  console.log(
    "While walking the path, you find a box of Ho Hos, a delicious treat...\n"
  );

  choice = readline
    .question("Do you eat them or save them for later? (eat, take) -> ")
    .toLowerCase();

  if (choice == "eat") {
    console.log(
      "It's going to be a long night, so you decide to eat them for sustenance."
    );
  } else if (choice == "take") {
    console.log(
      "You never know when you'll need some Ho Hos, so you take them with you."
    );
    hohos++; // Add one to hohos variable. Same as hohos = hohos + 1
  } else {
    console.log("You decide to leave the Ho Hos alone.");
  }

  console.log(
    "\nLater down the trail, you stumble upon an overweight talking dragon named Mortimer the Pudgy."
  );
  console.log("The dragon speaks: 'You bring me treats??'");

  choice = readline.question(
    "Do you give Mortimer the pudgy your Ho Hos? (yes, no) -> "
  );

  // Use ( ) for order of operations
  if ((choice == "yes" || choice == "y") && hohos > 0) {
    console.log("Me love Ho Hos!!! Here take gold!");
    console.log("The dragon grants you the gold he was guarding.\n");

    var goldAmount = parseInt(
      readline.question("How much gold do you take? -> ")
    );

    if (goldAmount > 0 && goldAmount <= 100) {
      console.log("Mortimer the Pudgy grants you his gold...\n");
      gold = goldAmount;
    } else if (goldAmount > 100) {
      console.log("'Greedy! No gold for you!'\n");
    } else {
      // Negative amount
      console.log("Mortimer the pudgy respects your piety.");
      console.log("You are granted all of the gold!\n");
      gold = 100000;
    }

    dragonEnding = true;
  } else if ((choice == "yes" || choice == "y") && hohos == 0) {
    console.log("'Fool!!!'");
    console.log("The dragon is angry that you would try to deceive him.");
    console.log(
      "He smells that you have no Ho Hos, and devours you instead..."
    );
  } else if (choice == "no" || choice == "n") {
    console.log("'Fool!!!'");
    console.log("The dragon devours you whole.");
    console.log(
      "He desired a delicious Hostess treat, settling for you instead...\n"
    );
  } else {
    console.log("Your inability to answer his question upsets him.");
    console.log("The dragon smashes you with his tail...\n");
  }
} // End right path
else {
  console.log(
    "You decide not to enter. You receive a thundershock and lie in the storm...\n"
  );
}

// Ending
console.log("ENDING:\n");
if (wolfpackEnding) {
  // Same as wolfpackEnding == true
  console.log("By cuddling with the wolfpack, you weather out the storm.");
  console.log(
    "Upon leaving the cave, they follow you, seeing you as the new pack leader."
  );
  console.log("You survived!!!");
} else if (dragonEnding) {
  // Same as dragonEnding == true
  console.log(
    "By tempting Mortimer the Pudgy with a delicious Hostess snack cake, you avoid his wrath."
  );
  console.log(
    "He flies you back home after the storm, but not after raiding the nearest Hostess factory."
  );
  console.log("You survived!!!");
} else {
  console.log("Game over!!!");
}

if (gold > 0) {
  console.log(
    `\nYou not only survived, but you found ${gold} gold! Good work!`
  );
}
```

### Debug

```
Your car crahes into a tree during a thunderstorm in the woods.
As the storm intensifies, you run into a nearby cave to seek shelter.
Upon entering the cave, you see to diverging paths...

Which path do you take? (left or right) -> right
You decide to take the right path.
While walking the path, you find a box of Ho Hos, a delicious treat...

Do you eat them or save them for later? (eat, take) -> take
You never know when you'll need some ho hos, so you take them with you.

Later down the trail, you stumble upon an overweight talking dragon named Mortimer the Pudgy.
The dragon speaks: 'You bring me treats??'
Do you give Mortimer the pudgy your Ho Hos? (yes, no) -> yes
Me love Ho Hos!!! Here take gold!
The dragon grants you the gold he was guarding.

How much gold do you take? -> 100
Mortimer the Pudgy grants you his gold...

ENDING:

By tempting Mortimer the Pudgy with a delicious Hostess snack cake, you avoid his wrath.
He flies you back home after the storm, but not after raiding the nearest Hostess factory.
You survived!!!

You not only survived, but you found 100 gold! Good work!
```

## Tips, Tricks, and Reflection

- I cannot stress the importance of testing your application regularly. When you start nesting if statements, your app will potentially have many different paths of execution. It's important to make sure everything runs as you develop your application.
