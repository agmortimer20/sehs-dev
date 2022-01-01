---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: Python Fundamentals 1.8 Constants, Math Functions, and Random Numbers
---

[← Back](/comp-sci/python/)

# Activity 1.8 Constants, Math Functions, and Random Numbers

## Introduction

Constants are similar to variables in that you can store values with them. However, once the constant is created, the value it references **cannot** change. There are instances where a value is not meant to be ever changed, such as PI, which never changes. If you try to change the value stored in a constant, the program will crash. You may ask "Why not just create a variable and never change it"? It's important to try writing programs in such a way that you mitigate the potential for issues. Constants are a feature that ensure a value is not accidentally changed.

Speaking of PI, Python provides a number of built-in math constants and functions that we can use in our programs. We can calculate, exponents, square roots, round numbers, and many other things. In order to use these features, we need to learn how to write an `import` statement. We will learn about imports and modules later on, but for now, just know that we need to import the code for doing math into our program. The import statement will retrieve the code containing these constants and functions, and will make them available for us to use in our applications.

```python
import math
```

Another interesting thing we do in programming is generate random numbers. This allows us to make dynamic games, autogenerate data, etc. The features for generating random numbers also need to be imported. It's as simple as the statement above, `import random`.

You will notice that in order to use any constans or functions defined in these modules will use a slightly different syntax. For example, to use the constant `pi`, the syntax is `math.pi`. This syntax has is related to how we use imported code. Know that anything we use from the math module must be prefixed with `math.`. You will learn all specifics later on, but again, just try to memorize this syntax for now.

### Skills to Practice

- Create constants
- Use built-in math functions to perform calculations

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Python_ for the language.
   2. Name the Repl "_1.8 Constants and Math Functions_".
2. Click Create repl.

### Code

```python
# Import the math and random modules
import math
import random

print("--- Cash Register Sales Tax Calculator ---")

SALES_TAX = 0.08 # Constant
# Uncomment the line below and try running the program.
# SALES_TAX = 0.09
subtotal = 10
tax = subtotal * SALES_TAX

print(f"Subtotal: ${subtotal}, Total: ${subtotal + tax}\n")


print("--- Circumference Calculator ---")
radius = float(input("Enter radius: "))
circumference = 2 * math.pi * radius # pi is a constant defined in the math module

print(f"Radius: {radius}, Circumference: {circumference}")
print(f"Rounded circumference: {round(circumference, 2)}\n") # round() is available without an import statement


print("--- Math Functions ---")

number = float(input("Input a number to get n cubed: "))
print(f"{number} cubed = {math.pow(number, 3)}\n")

number = float(input("Input a number to get the square root of n: "))
print(f"Square root of {number} = {math.sqrt(number)}\n")

number = float(input("Input a decimal number to see different ways to round: "))
print(f"Round: {round(number)}, Floor: {math.floor(number)}, Ceil: {math.ceil(number)}\n")

print("- random.randint(low_number, high_number)")
print(f"Randomly generated number (1 to 10): {random.randint(1, 10)}\n")
print(f"Randomly generated number (1 to 10): {random.randint(1, 10)}\n")
print(f"Randomly generated number (1 to 10): {random.randint(1, 10)}\n")
```

### Debug

```
--- Cash Register Sales Tax Calculator ---
Subtotal: $10, Total: $18.0

--- Circumference Calculator ---
Enter radius: 15
Radius: 15.0, Circumference: 94.24777960769379
Rounded circumference: 94.25

--- Math Functions ---
Input a number to get n cubed: 7
7.0 cubed = 343.0

Input a number to get the square root of n: 81
Square root of 81.0 = 9.0

Input a decimal number to see different ways to round: 3.543
Round: 4, Floor: 3, Ceil: 4

- random.randint(low_number, high_number)
Randomly generated number (1 to 10): 6

Randomly generated number (1 to 10): 8

Randomly generated number (1 to 10): 9
```

## Tips, Tricks, and Reflection

- Explore some more math functions [here](https://docs.python.org/3/library/math.html).
