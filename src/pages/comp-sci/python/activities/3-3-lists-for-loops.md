---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: Python Fundamentals 3.3 Lists and For Loops
---

[← Back](../)

# Activity 3.3 For Loops

## Introduction

Although while loops are capable of iterating through lists, there are other JavaScript constructs that make the process easier. For example, there is a specific kind of loop called a **for loop** whose purpose is to iterate, or loop, through elements in a collection.

```python
for variable in list:
    print(variable)
```

**Example**

```python
fruits = ['apples', 'bananas', 'cherries', 'dates']

# for each fruit in the fruits list...
for fruit in fruits:
    print(fruit)
```

```shell
apples
bananas
cherries
dates
```

The for loop operates as such:

1. The variable in the header is declared. It will be assigned to each element, one at a time for each iteration.
2. The list to be iterated through is written after the `in` keyword.
3. On the first iteration, the declared variable is assigned the first element of the list. The variable can be used anywhere inside the code block.
4. At the end of the loop, the list is checked to see if there is another element in the list. If there is another element, the variable is assigned the next element, and the code block repeats.
5. The loop continues until there are no more elements in the list to iterate through.

### Skills to Practice

- Iterating through lists using for loops
- Refactoring a previous application

## Activity Instructions

### Setup
1. Create a new repl.
    1. Select *Python* for the language.
    2. Name the Repl "*3.3 For Loops*".
2. Click Create repl.

### Code

```python
# Sodas App Version 2 - Uses a for loop to iterate through list
print("--- Sodas App v2 ---")

sodas = []
adding_sodas = True

while adding_sodas:
    soda = input("Add a soda to your list: ")
    sodas.append(soda)
    choice = input("Add another soda? (yes/no) ")
    
    if choice == "no":
      adding_sodas = False

print("\nHere are your sodas:")

for soda in sodas:
  print(f"- {soda}")


# End sodas app
print("\n")


# Shopping cart app
print("--- Shopping Cart ---")

shopping_cart = []
choice = ""

while choice != "3" and choice != "exit":
  print("-Menu-")
  print("1) Add item to shopping cart")
  print("2) Show shopping cart")
  print("3) Exit")

  choice = input("-> ")

  if choice == "1":
    shopping_cart.append(input("Add an item to buy: "))

  elif choice == "2":
    print("\nShopping cart:")

    for item in shopping_cart:
      print(f"- {item}")

    print() # Add space after cart contents
  elif choice == "3" or choice == "exit":
    print("Exiting...")
  else:
    print("Invalid option, try again...")
```

### Debug

```
--- Sodas App v2 ---
Add a soda to your list: pepsi
Add another soda? (yes/no) yes
Add a soda to your list: coke
Add another soda? (yes/no) yes
Add a soda to your list: Crangis McSodaPop
Add another soda? (yes/no) no

Here are your sodas:
- pepsi
- coke
- Crangis McSodaPop



--- Shopping Cart ---
-Menu-
1) Add item to shopping cart
2) Show shopping cart
3) Exit
-> 1
Add an item to buy: milk
-Menu-
1) Add item to shopping cart
2) Show shopping cart
3) Exit
-> 1
Add an item to buy: soda
-Menu-
1) Add item to shopping cart
2) Show shopping cart
3) Exit
-> 1
Add an item to buy: butter
-Menu-
1) Add item to shopping cart
2) Show shopping cart
3) Exit
-> 2

Shopping cart:
- milk
- soda
- butter

-Menu-
1) Add item to shopping cart
2) Show shopping cart
3) Exit
-> 3
```

## Tips, Tricks, and Reflection

- Remember that while loops can do anything another loop can do, it's the most flexible of all the loops. But using a loop with a specific purpose can make coding some process easier.