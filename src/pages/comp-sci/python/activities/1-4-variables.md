---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: Python Fundamentals 1.4 Variables
---

[← Back](../)

# Activity 1.4 Variables

## Introduction

_Variables_ allow us to save data during our program execution. For example, in an RPG video game, your character has attributes such as health, magic, stamina, etc. These are values that need to be tracked throughout the game. Variables allow us to store this data and use it throughout the program.

### Skills to Practice

- Declaring and assigning values to variables
- Use variables in formatted strings

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Python_ for the language.
   2. Name the Repl "_1.4 Variables_".
2. Click Create repl.

### Code

```python
# String variables
name = "Anthony" # Replace the name with your name
food = "Steak" # Replace the food with your favorite food
item = "peppers"

print(f"Hello, my name is {name}")
print(f"{name} likes the stinkiest of {food}.")
print(f"{name} likes {food} so much, he/she eats it out of the garbage!")
print()

print(f"Peter Piper picked a peck of pickled {item}")
print(f"A peck of pickled {item} Peter Piper picked")
print()

# Numbers
age = 30 # Replace the number with your age

print(f"You will reach age 100 in {100 - age} years!")
print()

balance = 35.25
withdraw_amount = 0 # Enter a number
new_balance = balance - withdraw_amount

print(f"You have a balance of {balance} in your bank account.")
# Literal dollar sign in front of template expression
print(f"If you withdraw {withdraw_amount}, you will have {new_balance}.")
print()

health = 100
damage = 55.95

print(f"You've taken {damage} damage. You have {health - damage} health left.")
```

### Debug

"""
Hello, my name is Anthony
Anthony likes the stinkiest of Steak.
Anthony likes Steak so much, he/she eats it out of the garbage!

Peter Piper picked a peck of pickled peppers
A peck of pickled peppers Peter Piper picked

You will reach age 100 in 70 years!

You have a balance of 35.25 in your bank account.
If you withdraw $0, you will have $35.25.

You've taken 55.95 damage. You have 44.05 health left.
"""

## Tips, Tricks, and Reflection

- Variable names must begin with a letter or underscore.
- Variables **cannot** contain spaces in their name!
- Notice how I use underscores when making variables that have multiple words in the name. This is known as snake case, and it's the convention for writing variable names with multiple words. I recommend this style of variable naming when you want to use multiple words for the variable name.
