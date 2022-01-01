---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: Python Fundamentals 1.6 Prompting for Input
---

[← Back](../)

# Activity 1.6 Prompting for Input

## Introduction

In this introductory section, we have been writing output using `print()`. Now we will learn another function that complements `print()`, and that is the `input()` function. This function allows us to receive input from the user. I.e. The user can interact with the program via the console. Writing to and reading from the console is known as input and output, or I/O for short.

### Skills to Practice

- Prompt a user for input and saving it to a variable
- Using variables containing user input

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Python_ for the language.
   2. Name the Repl "_1.6 Input_".
2. Click Create repl.

### Code

```python
# Buddy the Elf Greeting Program
# The program will pause and wait for the user to type a response.
name = input("Hey! What's your name? My name's Buddy! ")
print(f"{name}, that's fun to say! {name}, {name}...")

answer = input("Does someone need a hug? ")
print(f"{answer}!? I just wanted a hug!")

favorite_color = input("Buddy the Elf, what's your favorite color? ")
print(f"That's a nice {favorite_color} outfit, very {favorite_color}-y.")
print()

# Secret Agent ID Program
print("----- SECRET AGENT CONSOLE -----")
print("IDENTITY NOT FOUND. CREATING NEW IDENTITY...")

first_name = input("Enter your first name: ")
code_name = input("Enter your code name: ")
agent_number = input("Enter your agent ID number: ")

# I don't type the question inside of input(), because I want to make a list of choices for this prompt
print("Choose your gadget:")
print("- ASMR Radio")
print("- Flashbang Energy Drink")
print("- Metamucil")
gadget = input("-> ") # Cool looking arrow prompt
print()

print("-- Constructing your agent identity --")
print(f"AGENT NAME: {first_name} - CODE NAME: {code_name}")
print(f"AGENT ID NUMBER: {agent_number}")
print(f"GADGET: {gadget}")
print("-- IDENTITY CONFIRMED EXITING... --")
```

### Debug

**Important!** Since you can now type into the console, it's not enough to just click run and look at the output, you need to interact with the program! To do this, click into the console, type your input, and press **enter**.

Your programs will no longer need look exactly like the sample output. Write whatever you want, you don't have to follow the sample exactly!

```
Hey! What's your name? My name's Buddy! Anthony
Anthony, that's fun to say! Anthony, Anthony...
Does someone need a hug? I hate you
I hate you!? I just wanted a hug!
Buddy the Elf, what's your favorite color? purple
That's a nice purple outfit, very purple-y.

----- SECRET AGENT CONSOLE -----
IDENTITY NOT FOUND. CREATING NEW IDENTITY...
Enter your first name: Anthony
Enter your code name: Habib
Enter your agent ID number: 233000
Choose your gadget:
- ASMR Radio
- Flashbang Energy Drink
- Metamucil
-> ASMR Radio

-- Constructing your agent identity --
AGENT NAME: Anthony - CODE NAME: Habib
AGENT ID NUMBER: 233000
GADGET: ASMR Radio
-- IDENTITY CONFIRMED EXITING... --
```

## Tips, Tricks, and Reflection

- You may have tried prompting the user for a number and performing math calculations with the input. However, that won't work right now. That's because `input()` always returns the user input as a _string_. We need to learn how to convert strings to number in order to use the values in math expressions. Check out the next activity to learn more!
