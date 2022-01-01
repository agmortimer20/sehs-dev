---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: Python Fundamentals 1.5 Manipulating Variables
---

[← Back](/comp-sci/python/)

# Activity 1.5 Manipulating Variables

## Introduction

This activity will take you a little bit deeper into how variables can be used. While the programs below are merely simulations, they will demonstrate how variables can have their values changed. Here are a few things you need to understand:

- The equal sign is called the assignment operator in programming. It is used to save, or assign a value to a variable.
- We can overwrite a variable’s _existing_ value using the assignment operator.

### Skills to Practice

- Manipulate variable values

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Python_ for the language.
   2. Name the Repl "_1.5 Manipulating Variables_".
2. Click Create repl.

### Code

```python
# Video game demo
print("--- Battle Simulator ---")
player_health = 100
enemy_health = 100
enemy_attack_damage = 20
potions = 3

print(f"Health: {player_health}")
print(f"Enemy health: {enemy_health}")
print()

print("Round 1")
print("Player attacks.")
# Subtract 15 from enemy_health. Save new enemy_health value.
enemy_health = enemy_health - 15
print(f"You did 15 damage! Enemy health: {enemy_health}")
# Subtract enemy_attack_damage from player health. Save new player_health value.
player_health = player_health - enemy_attack_damage
print(f"Enemy did {enemy_attack_damage} damage! Player health: {player_health}")
print()

print("Using potion...")
player_health = player_health + 10
potions = potions - 1
print(f"Player health: {player_health}. Potions left: {potions}")

print("Buying one potion...")
potions = potions + 1
print(f"Potions left: {potions}")
print("Using the potion!!!")
potions = potions - 1


print("\n\n") # What does this do??? Google search "\n python"


# Bank account demo
print("--- Banking Simulator ---")
account_name = "Checking Account"
account_balance = 100.50

print(f"{account_name} balance: {account_balance}")
print(f"Depositing $99.01 to {account_name}")
account_balance = account_balance + 99.01
print(f"{account_name} balance: {account_balance}")
```

### Debug

"""
--- Battle Simulator ---
Health: 100
Enemy health: 100

Round 1
Player attacks.
You did 15 damage! Enemy health: 85
Enemy did 20 damage! Player health: 80

Using potion...
Player health: 90. Potions left: 2
Buying one potion...
Potions left: 3
Using the potion!!!

--- Banking Simulator ---
Checking Account balance: $100.5
Depositing $99.01 to Checking Account
Checking Account balance: $199.51
"""

## Tips, Tricks, and Reflection

- Remember that variables need to be spelled exactly the same every time.
- Make sure to use the right data type for your variables. When performing math, use numbers, not strings.
