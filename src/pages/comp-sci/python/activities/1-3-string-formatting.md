---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: Python Fundamentals 1.3 String Formatting
---

[← Back](/comp-sci/python/)

# Activity 1.3 String Formatting

## Introduction

In the previous activity, the math expressions were output seperately from the strings. Although this works, it doesn't look nice. In programming we format strings to construct complex text messages. In Python, there are two popular ways to format strings: _passing multiple arguments_\* and _string interpolation_.

Passing multiple argument simply means you separate the different data in the print function with commas.

```python
print("My age in months is ", 30 * 12)
```

\* If we're arguing semantics, this is _technically_ output formatting, not string formatting, but it has the desired effect.

A newer way to format strings is to use a feature called _string interpolation_. With string interpolation, you prefix a string with the character _f_. You then use the `{}` symbol to insert code expressions anywhere you want execute code in the string.

```python
f"My age in months is {30 * 12}."
```

### Skills to Practice

- Passing multiple arguments to the `print()` function
- String interpolation

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Python_ for the language.
   2. Name the Repl "_1.3 String Formatting_".
2. Click Create repl.

### Code

```python
# Passing multiple arguments - Use the *,* character to seperate data that you want to put together.
print("10 squared is ", 10 * 10)
print()

# You can use parentheses to ensure the addition is not mixed up with concatenation.
print("I'm 5 foot 10 inches. That's ", 5 * 12 + 10, " inches.")
print()


# String inpterpolation - Prefix the string with an f and insert code within { }.
print(f"If I take out a $1000 loan, and pay $25 each month, I will pay my loan off in {1000 / 25} months.")
print()

print("A woodchuck can chuck 32 wood panels every minute.")
print(f"Therefore, a woodchuck can chuck {32 * 60} wood panels every hour.")
print()
```

### Debug

```
10 squared is 100

I'm 5 foot 10 inches. That's 70 inches.

If I take out a $1000 loan, and pay $25 each month, I will pay my loan off in 40.0 months.

A woodchuck can chuck 32 wood panels every minute.
Therefore, a woodchuck can chuck 1920 wood panels every hour.
```

## Tips, Tricks, and Reflection

- You are welcome to use either technique for string formatting, but this course will favor string interpolation.
