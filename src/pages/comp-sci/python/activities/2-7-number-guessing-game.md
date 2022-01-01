---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: Python Fundamentals 2.7 Number Guessing Game
---

[← Back](../)

# Activity 2.7 Number Guessing Game

## Introduction

All sorts of simple, but fun programs can be created with a few simple loops and if statements. For example, this simple little guessing game can be created with a basic while loop.

### Skills to Practice

- Writing while loops

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Python_ for the language.
   2. Name the Repl "_2.7 Number Guessing Game_".
2. Click Create repl.

### Code

```python
import random

secret_number = random.randint(1, 10)
tries = 0 # Track number of tries
# Set guess to a number that is not in the range of
# secret_number, so it can be used in condition below.
guess = -1

while guess != secret_number:
  guess = int(input("Guess the number (1-10): "))
  tries += 1 # Same as tries = tries + 1

  if guess == secret_number:
    print(f"Correct! It took you {tries} tries!")
  elif guess > secret_number:
    print("Wrong! Too high.")
  else:
    print("Wrong! Too low.")
```

### Debug

```
Guess the number (1-10): 1
Wrong! Too low.
Guess the number (1-10): 9
Wrong! Too high.
Guess the number (1-10): 6
Wrong! Too high.
Guess the number (1-10): 5
Correct! It took you 4 tries!
```

## Tips, Tricks, and Reflection

- Try adding a feature before the game starts to set the difficulty.
  - Easy: 1-10
  - Medium: 1-25
  - Hard: 1-50
  - Insane: 1-100
