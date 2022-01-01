---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: Python Fundamentals 2.1 Logic Crash Course
---

[← Back](/comp-sci/python/)

# Activity 2.1 Logic Crash Course

## Introduction

Computers aren't limited to performing arithmetic calculations. We are able to program computers to make decisions using logical expressions. When a computer can make decisions, it's able to determine different outcomes in a program. Here are a few example scenarios:

- If you sign in to an application, the app will determine if you signed in with a valid account or not.
- When viewing mature games on Steam, the app needs to verify if you are old enough to view the game or not.
- If you're playing a video game, the game needs to know when you've won or lost.

These examples all use instances of decision making. Think of it like a computer being able to answer _yes_ or _no_, _correct_ or _incorrect_, or more specifically, _True_ or _False_. Programming languages have a data type called a **boolean** that represents the values **True** and **False**. The study of computing logical expressions is known as boolean logic. Logical expressions in programming result in either a True or False answer. Let's revisit the examples above:

- If I sign into Instagram with a my username but an invalid password, will I see my feed? **True** or **False**?
- If I type in my birthday, _May 24, 1990_ when viewing a mature game on Steam, will I be able to see it? **True** or **False**?
- If I'm playing Skyrim, and my health goes below 0, do I lose? **True** or **False**?

Just as math has math operators (`+ - * /`), boolean logic has logic operators: equal to `==`, not equal to `!=`, greater than (`>`), less than (`<`), greater than or equal to (`>=`), less than or equal to (`<=`), and not (`!`). Logic expressions can be constructed using different data types combined with these operators. The result will be either _True_ or _False_. Here's an example:

```python
1000 == 1000
```

Is 1000 equal to 1000? It is, so the result is the value _True_. You can see a number of different examples in the tables below. These are known as truth tables.

| **Equal To (`==`)** | **Result** |
| :------------------ | ---------: |
| `100 == 100`        |       True |
| `100 == 99`         |      False |
| `"abc" == "abc"`    |       True |
| `"ABC" == "abc" `   |      False |
| `True == True`      |       True |
| `True == False`     |      False |

| **Not Equal To (`!=`)** | **Result** |
| :---------------------- | ---------: |
| `100 != 100`            |      False |
| `100 != 99`             |       True |
| `"abc" != "abc"`        |      False |
| `"ABC" != "abc" `       |       True |
| `True != True`          |      False |
| `True != False`         |       True |

| **Greater than/Less than (`>`,`<`)** | **Result** |
| :----------------------------------- | ---------: |
| `100 > 100`                          |      False |
| `100 > 99`                           |       True |
| `0 < 100`                            |       True |
| `0 < -1`                             |      False |

| **Greater than or equal to/Less than or equal (`>=`,`<=`)** | **Result** |
| :---------------------------------------------------------- | ---------: |
| `100 >= 100`                                                |       True |
| `100 <= 99`                                                 |      False |

| **Not (`not`)**   | **Result** |
| :---------------- | ---------: |
| `not True`        |      False |
| `not False`       |       True |
| `not (100 > 100)` |       True |

### Skills to Practice

- Constructing boolean expressions using the following operators:
  - equal to (`==`) and not equal to (`!=`)
  - greater than (`>`) and less than (`<`)
  - greater than or equal to (`>=`) and less than or equal to (`<=`)
  - not (`!`)

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Python_ for the language.
   2. Name the Repl "_2.1 Logic_".
2. Click Create repl.

### Code

```python
name = "Mr. Mortimer"
age = 30
bank_account = 150
is_a_teacher = True
is_a_millionaire = False

print(f"Is my name Mr. Mortimer? {name == 'Mr. Mortimer'}")
print(f"Is my name Mr. Mertens? {name == 'Mr. Mertens'}")
print(f"My name is not Mr. Merriman: {name != 'Mr. Merriman'}")

print(f"Am I old enough to drive? {age >= 16}")
print(f"Do I have enough to buy a Dodge Challenger? {bank_account > 31000}")

print(f"{name} is a teacher: {is_a_teacher == True}")
print(f"{name} is a millionaire: {is_a_millionaire}")
print(f"So, {name} isn't a millionaire? {not is_a_millionaire}")
```

### Debug

```
Is my name Mr. Mortimer? True
Is my name Mr. Mertens? False
My name is not Mr. Merriman: True
Am I old enough to drive? True
Do I have enough to buy a Dodge Challenger? False
Mr. Mortimer is a teacher: True
Mr. Mortimer is a millionaire: False
So, Mr. Mortimer isn't a millionaire? True
```

## Tips, Tricks, and Reflection

- This demo is not of much use yet. Over the next few activities, you will see just how powerful logical expressions can be in decision making.
- You can quickly test out a boolean expression using the REPL console.
