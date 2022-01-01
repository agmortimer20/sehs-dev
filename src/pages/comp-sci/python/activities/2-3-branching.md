---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: Python Fundamentals 2.3 Branching Statements
---

[← Back](/comp-sci/python/)

# Activity 2.3 Branching Statements

## Introduction

The last activity introduced us to the idea of controlling the flow of an application with _if statements_. The age checker app checked each if statement's condition resulted in true. There are many instances where you only want one selection to execute. i.e. One or the other.

We can _branch_ if statements with to other kinds of statements, `elif` (which means else if) and `else`.

- `elif` must follow and if statement, and will only check it's condition if the preceding if statement condition resulted in `false`. You can chain as many else if statements as you want, but they _must_ come after the initial if statement.
- `else` must be at the end of an if or else if statement. It does not require a condition, and will execute if any preceding if or else if statement coniditions result in `false`.

_Example:_

```python
age = int(input("Enter your age: "))

if age >= 16:
    print("You are old enough to drive!")
elif age == 15:
    print("You can't drive on your own yet, but you are eligible for a learners permit.")
else:
    print("I'm sorry, but you are not old enough to drive")
```

### Skills to Practice

- Branching if statements with _elif_ and _else_
- Making a main menu

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Python_ for the language.
   2. Name the Repl "_2.3 Branching_".
2. Click Create repl.

### Code

```python
# Chinese Zodiac Calendar
print("--- CHINESE ZODIAC CALENDAR ---")
birth_year = int(input("Enter your birth year: "))
zodiac_number = birth_year % 12

print(f"\nBirth year: {birth_year} - You are the year of the...")

if zodiac_number == 0:
    print("monkey")
elif zodiac_number == 1:
    print("rooster")
elif zodiac_number == 2:
    print("dog")
elif zodiac_number == 3:
    print("pig")
elif zodiac_number == 4:
    print("rat")
elif zodiac_number == 5:
    print("ox")
elif zodiac_number == 6:
    print("tiger")
elif zodiac_number == 7:
    print("rabbit")
elif zodiac_number == 8:
    print("dragon")
elif zodiac_number == 9:
    print("snake")
elif zodiac_number == 10:
    print("horse")
elif zodiac_number == 11:
    print("sheep")


# Simple ATM Demo
print("\n--- ATM Demo ---\n")
balance = float(input("Set your initial balance: $"))

print("Crangis McBasketball ATM")
print("------------------------")
print("Select an option: ")
print("1) View Balance")
print("2) Deposit")
print("3) Withdraw")

# We're not doing math with the number, so it's okay to leave it as a string.
option = input("Enter your option (1,2,3): ")

if option == "1":
    print(f"Your balance is ${balance}.")
elif option == "2":
    deposit = input("How much would you like to deposit? $")
    deposit = float(deposit)
    balance = balance + deposit
    print(f"Thank you for your deposit of ${deposit}.")
    print(f"Your balance is now ${balance}.")
elif option == "3":
    withdraw = input("How much would you like to withdraw? $")
    withdraw = float(withdraw)
    balance = balance - withdraw
    print(f"Thank you for your withdraw of ${withdraw}.")
    print(f"Your balance is now ${balance}.")
else:
    print("Invalid option. Exiting...")
```

### Debug

```
--- CHINESE ZODIAC CALENDAR ---
Enter your birth year: 1990

Birth year: 1990 - You are the year of the...
horse

--- ATM Demo ---

Set your initial balance: $1200
Crangis McBasketball ATM
------------------------
Select an option:
1) View Balance
2) Deposit
3) Withdraw
Enter your option (1,2,3): 2
How much would you like to deposit? $75.95
Thank you for your deposit of $75.95.
Your balance is now $1275.95.
```

## Tips, Tricks, and Reflection

- Notice how many code blocks are used to create even a simple application. Make sure code inside a code block is indented one tab.
- Each demo application in this activity only has one `elif` statement. Remember, you can have as many `elif` statements as you need.
