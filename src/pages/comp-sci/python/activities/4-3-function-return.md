---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: Python Fundamentals 4.3 Function Return Statements
---

[← Back](/comp-sci/python/)

# Activity 4.3 Return Statements

## Introduction

One important component regarding functions is the ability to give back some information if necessary. Here are a few examples of functions we have used that **return** some value once the function is finished executing.

- `int()` returns an integer if a valid string argument is provided.
- `random.randint(n1, n2)` returns a number between n1 and n2.
- `list.count()` returns an integer for the number of elements in a list.

It's not always necessary to return information. For example, `print()` merely outputs information to the console. There's no need to return any value.

In programming, functions can use a keyword called `return`. We call statements involving the return keyword a **return statement**. Return statements immediately finish executing the function, and return some provided value.

### Example

```python
def add(num1, num2):
    return num1 + num2
```

In the example above, the add function _returns_ the sum of the num1 and num2 parameters. Just like any of the other functions we've used, we can assign the return value to a variable.

```python
sum = add(10, 15) # sum = 25
```

### Skills to Practice

- Defining functions with parameters
- Invoking user defined functions with arguments
- Returning values from a function

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Python_ for the language.
   2. Name the Repl "_4.3 Function Return Statements_".
2. Click Create repl.

### Code

```python
import random

# Function Definitions
# These will be used in the main program below.

def squareNumber(number):
  return number * number

def subtract(number1, number2):
  return number1 - number2

def monthsToYears(months):
  return round(months / 12, 1)

def yearsToMonths(years):
  return years * 12

# Roll a single die
def rollDie(number_of_sides):
  return random.randint(1, number_of_sides)

print("-- Random Utilities Calculator --")
choice = ""

while (choice != "6"):
  print("1) Square a number")
  print("2) Subtract two numbers")
  print("3) Convert months to years")
  print("4) Convert years to months")
  print("5) Roll dice")
  print("6) Exit")

  choice = input("-> ")

  if choice == "1":
    number = float(input("Enter a number: "))
    answer = squareNumber(number)
    print(f"{number} squared is {answer}\n")
  elif choice == "2":
    number = float(input("Enter a number: "))
    number2 = float(input("Enter a number: "))
    answer = subtract(number, number2)
    print(f"{number} minus {number2} equals {answer}\n")
  elif choice == "3":
    number = float(input("Enter a number: "))
    print(f"{number} months equals {monthsToYears(number)} years\n")
  elif choice == "4":
    number = float(input("Enter a number: "))
    print(f"{number} years equals {yearsToMonths(number)} months\n")
  elif choice == "5":
    die1 = rollDie(6)
    die2 = rollDie(6)
    print(f"You rolled a {die1} and a {die2} for a total of {die1 + die2}\n")
  elif choice == "6":
    print("Goodbye")
  else:
    print("Invalid option...")
```

### Debug

```
-- Random Utilities Calculator --
1) Square a number
2) Subtract two numbers
3) Convert months to years
4) Convert years to months
5) Roll dice
6) Exit
-> 1
Enter a number: 40
40 squared is 1600

1) Square a number
2) Subtract two numbers
3) Convert months to years
4) Convert years to months
5) Roll dice
6) Exit
-> 2
Enter a number: 100
Enter a number: 20.5
100 minus 20.5 equals 79.5

1) Square a number
2) Subtract two numbers
3) Convert months to years
4) Convert years to months
5) Roll dice
6) Exit
-> 3
Enter a number: 24
24 months equals 2 years

1) Square a number
2) Subtract two numbers
3) Convert months to years
4) Convert years to months
5) Roll dice
6) Exit
-> 4
Enter a number: 30
30 years equals 360 months

1) Square a number
2) Subtract two numbers
3) Convert months to years
4) Convert years to months
5) Roll dice
6) Exit
-> 5
You rolled a 4 and a 5 for a total of 9

1) Square a number
2) Subtract two numbers
3) Convert months to years
4) Convert years to months
5) Roll dice
6) Exit
-> 6
Goodbye
```

## Tips, Tricks, and Reflection

- It's not a big deal, but we are repeating the following statement frequently: `float(input("Enter a number: "))`. It may not be a bad idea to extract this code into a small function.
