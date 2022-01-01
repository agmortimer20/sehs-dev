---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: Python Fundamentals 2.2 If Statements
---

[← Back](../)

# Activity 2.2 If Statements

## Introduction

Programming languages have a series of constructs that allow a programmer to control what portions of their program execute, and if necessary, how many times to repeat that code. The first type of control structure to learn is the **if statement**.

An if statement will execute a section of code, known as a **code block**, if a boolean expression, known as a **condition** has a _true_ result.

```python
number = 100

if number == 100:
    print("Code inside a code block.")
    print("More code inside a code block...")
```

If the condition is _true_, the code block, which is the code indented under the if statement, will execute. If the condition is _false_, the code block is skipped over, and does not execute.

### Skills to Practice

- Constructing if statements
  - Create a condition
  - Create a code block

### Activity Instructions

## Setup

1. Create a new repl.
   1. Select _Python_ for the language.
   2. Name the Repl "_2.2 If Statements_".
2. Click Create repl.

### Code

```python
# Age Checker Program
age = int(input("Enter your age: "))

if age < 0:
    print("You're still a baby, get back in there!")

if age >= 13:
    print("You're old enough to join Cobra Kai.\n")

if age >= 16:
    print("You're old enough to get your license!\n")

if age >= 18:
    print("You're old enough to live on your own.")
    print("So... Get out of your parents' basement!\n")

if age >= 35:
    print("You're old enough to run for president.")
    name = input("Enter your full name: ")
    year = input("What year will you run? ")
    nickname = input("What's your nickname (adjective): ")

    print(f"\n{nickname} {name} for president! Coming {year}")
```

### Debug

```
Enter your age: 35
You're old enough to join Cobra Kai.

You're old enough to get your license!

You're old enough to live on your own.
So... Get out of your parents' basement!

You're old enough to run for president.
Enter your full name: Anthony Mortimer
What year will you run? 2020
What's your nickname (adjective): Sleepy

Sleepy Anthony Mortimer for president! Coming 2020
```

## Tips, Tricks, and Reflection

- There's an age range that's missing. If you type in 0 - 12, nothing happens. Add an if statement to fix this issue.
- Indentation of code inside a block shows what code belongs to what section. Be consistent with your indentations, your code will be much more readable and maintainable.
