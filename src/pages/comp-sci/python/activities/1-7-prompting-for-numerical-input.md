---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: Python Fundamentals 1.7 Prompting for Numerical Input
---

[← Back](/comp-sci/python/)

# Activity 1.7 Prompting for Numerical Input

## Introduction

In the last activity, we learned how to prompt a user for input, and save their response to a variable. There is an issue that may arise with using `input()`, this function always returns a **string**. Math cannot be performed with strings. Therefore, we need to be able to convert strings containing numbers into the number data type.

There are two functions for converting a string into a number:

- `int()` - Convert a string into an integer
- `float()` - Convert a string into a decimal number

### Function Examples

```python
int("32") # "32" converts to 32
float("100.4") # "100.4" converts to 100.4
int("32.5") # "32.5" converts to 32. The decimal gets truncated.
```

### Skills to Practice

- Prompt a user for input and saving it to a variable
- Convert input from a string to a number
  - Convert a string into an integer using `int()`
  - Convert a string into a floating point number (decimal) using `float()`

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Python_ for the language.
   2. Name the Repl "_1.7 Numerical Input_".
2. Click Create repl.

### Code

```python
# Age to months calculator
print("--- Age to Months Calculator ---")
# Steps involved in the statements below:
# 1) User types age
# 2) Convert string input to integer
# 3) Save number to age
age = input("Enter your age: ")
age = int(age)

print(f"You are {age} years old. That's {age * 12} months old, you old fart!\n")

# Square area calculator
print("--- Square Area Calculator ---")
# Shorter, concise way to get input, convert to number, and save to variable
length = float(input("Enter the length of the square: "))
unit = input("Enter the unit of measurement (in, ft, m): ")
area = length * length

print(f"The area of the square is {area}{unit} squared")
```

### Debug

```
--- Age to Months Calculator ---
Enter your age: 30
You are 30 years old. That's 360 months old, you old fart!

--- Square Area Calculator ---
Enter the length of the square: 25.5
Enter the unit of measurement (in, ft, m): ft
The area of the square is 650.25ft squared
```

## Tips, Tricks, and Reflection

- If getting input, converting it to a number, and saving it to a variable is confusing, then write the code the long way. Sometimes it can be confusing, and it's perfectly fine to write the code over a few lines.

Example:

```python
age = input("Enter your age")
age = int(age)
```
