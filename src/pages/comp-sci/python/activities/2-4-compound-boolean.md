---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: Python Fundamentals 2.4 Compount Boolean Expressions
---

[← Back](../)

# Activity 2.4 Compound Boolean Expressions

## Introduction

The Boolean expressions we learned in the beginning of this section work for many scenarios, but sometimes we need more specific conditions. There are two Boolean operators that are commonly used to create more specific expressions.

- **And operator** `and` - _Both_ sides of the expression must be true for the result to be true.
- **Or operator** `or` - _At least one_ side of the expression must be true for the result to be true.

Think of the `and` operator as the stric operator between the two, and the `or` operator as the more relaxed operator.

Here's an example of when you may want to use a compound expression: "Check if a number is between 0 _and_ 100.

```python
number >= 0 and number <= 100
```

The expression read like this: "number is greater than or equal to 0 and number is less than or equal to 100.

### Truth Tables

| **And (and)**                           | **Result** |
| :-------------------------------------- | ---------: |
| `100 == 100 and "anthony" == "anthony"` |       True |
| `100 == 99 and "anthony" == "anthony"`  |      False |
| `"abc" == "abc" and "ABC" == "abc"`     |      False |
| `10 > 100 and 90 < 10`                  |      False |

| **Or (or)**                            | **Result** |
| :------------------------------------- | ---------: |
| `100 == 100 or "anthony" == "anthony"` |       True |
| `100 == 99 or "anthony" == "anthony"`  |       True |
| `"abc" == "abc" or "ABC" == "abc"`     |       True |
| `10 > 100 or 90 < 10`                  |      False |

### Skills to Practice

- Creating compound boolean expressions
  - And operator `and`
  - Or operator `or`

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Python_ for the language.
   2. Name the Repl "_2.4 Compound Boolean Expressions_".
2. Click Create repl.

### Code

```python
import random

# One Round Battle Demo
player_health = 10
enemy_health = 10
escaped = False # If you decide to run, this will be set to true

print("--Menu--")
print("1) attack")
print("2) run")

choice = input("-> ") # Arrow next to prompt, nothing special

# Player can select number or word in menu
if choice == "1" or choice == "attack":
    # Random attack damage from 1 - 10
    player_attack = random.randint(1, 10)
    enemy_attack = random.randint(1, 10)

    enemy_health = enemy_health - player_attack
    player_health = player_health - enemy_attack

    print(f"You did {player_attack} damage!")
    print(f"Enemy has {enemy_health} health left.\n")
    print(f"Enemy did {enemy_attack} damage!")
    print(f"You have {player_health} health left.\n")
elif choice == "2" or choice == "run":
    print("You escape like a big baby...")
    escaped = True
else:
    print("Invalid option. Exiting battle...")

# escaped is the same as escaped == True
if escaped:
    print("Bye bye! Back home to Mommy!")
elif player_health > enemy_health:
    print("You are beating the enemy!")
elif enemy_health > player_health:
    print("Be careful, the enemy is beating you!")
else: # Fought the enemy, but health is the same value
    print("Battle is tied!")


print("\n\n")


# Lottery Lite
# This game is difficult to win. To test out the conditions, consider temporarily lowering the range.
lottery_number = random.randint(0, 99) # 0 - 99

# Extract digits using division and modulus
lottery_digit_one = lottery_number // 10 # Get tens place
lottery_digit_two = lottery_number % 10 # Get ones place

entry = int(input("Enter your lottery number (0 - 99): "))
entry_digit_one = entry // 10
entry_digit_two = entry % 10


print(f"And the lottery number is....\n{lottery_number}!")

# Exact match -> $10,000
# Digits match -> $3,000
if entry == lottery_number:
    print("Exact match! You win the grand prize of $10,000!")
elif lottery_digit_one == entry_digit_two and lottery_digit_two == entry_digit_one:
    print("Your digits match! You win $3,000!")
else:
    print("No match. Better luck next time!")
```

### Debug

```
--Menu--
1) attack
2) run
-> 1
You did 4 damage!
Enemy has 6 health left.

Enemy did 2 damage!
You have 8 health left.

You are beating the enemy!


Enter your lottery number (0 - 99): 90
And the lottery number is....
24!
No match. Better luck next time!
```

## Tips, Tricks, and Reflection

- When using the same variable on both sides of an expression, it may be tempting to write your condition like this: `choice == 0 or 1`. This syntax is incorrect, you must be explicit when writing your expressions: `choice == 0 or choice == 1`.
