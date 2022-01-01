---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: Python Fundamentals 3.4 List Functions
---

[← Back](/comp-sci/python/)

# Activity 3.4 List Functions

### Introduction

Python provides a number of different useful functions for working with lists. We will learn a small subset of functions, but be sure to check out the documentation at the end of this activity for a full list of included functions.

### Examples

#### `.append(new_element)`

Appends, or adds, an element at the end of a list.

```python
chips = ["jalapeno", "sour cream", "barbeque", "cheddar", "cool ranch"]
chips.append("salt & vinegar")
chips.append("nacho cheese")
print(chips)
```

```shell
["jalapeno", "sour cream", "barbeque", "cheddar", "cool ranch", "salt & vinegar", "nacho cheese"]
```

#### `.count(value)`

Returns the number of times the value was found in the list.

```python
chips = ["jalapeno", "sour cream", "barbeque", "cheddar", "cool ranch"]
print(chips.count('cheddar'))
print(chips.count('hawaiian bbq'))
```

```shell
1
0
```

#### `.remove(element)`

Attempts to remove an element matching the value of the argument. If the element is not found, a ValueError will result. _Hint_: Before attempting to remove an element, consider first checking if it exists using the _count_ function.

```python
animals = ["mongoose", "camel", "wolf", "sheep"]
animals.remove("camel")
print(animals)
```

```shell
["mongoose", "wolf", "sheep"]
```

#### `.clear()`

Removes all elements from the list.

```python
animals = ["mongoose", "camel", "wolf", "sheep"]
print(animals)
animals.clear()
print(animals)
```

```shell
["mongoose", "camel", "wolf", "sheep"]
[]
```

### Skills to Practice

- Adding elements to a list using the `.append()` function.
- Finding how many elements exist in a list using the `.count()` function.
- Removing an element from a list using the `.remove()` function.
- Removing all elements from a list using the `.clear()` function.

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Python_ for the language.
   2. Name the Repl "_3.4 List Functions_".
2. Click Create repl.

### Code

```python
cart = []
store_items = ["potion", "sword", "axe", "scimitar"]
shopping = True

while shopping:
    print("-- ⚗️🧪Store Menu🗡️🪓 --")
    print("1) Add item to cart")
    print("2) List cart contents")
    print("3) Remove an item from cart")
    print("4) Remove all items from cart")
    print("5) Exit")
    choice = input("-> ")

    if choice == "1":
        print("Available items:")

        for item in store_items:
            print(f"- {item}")

        choice = input("Choose item: ")

        if store_items.count(choice) > 0:
            print(f"Adding {choice} to cart\n")
            cart.append(choice)
        else:
            print("Invalid item...\n")
    elif choice == "2":
        print("Cart contents:")

        for item in cart:
            print(f"- {item}")

        print()
    elif choice == "3":
        choice = input("Choose item to remove: ")

        if cart.count(choice) > 0:
            cart.remove(choice)
            print(f"{choice} removed\n")
        else:
            print("Invalid item...\n")
    elif choice == "4":
        print("Clearing cart contents\n")
        cart.clear()
    elif choice == "5":
        print("Thank you for shopping with us.")
        shopping = False
    else:
        print("Invalid option. Try again.\n")
```

### Debug

```
-- ⚗️🧪Store Menu🗡️🪓 --
1) Add item to cart
2) List cart contents
3) Remove an item from cart
4) Remove all items from cart
5) Exit
-> 1
Available items:
- potion
- sword
- axe
- scimitar
Choose item: axe
Adding axe to cart

-- ⚗️🧪Store Menu🗡️🪓 --
1) Add item to cart
2) List cart contents
3) Remove an item from cart
4) Remove all items from cart
5) Exit
-> 1
Available items:
- potion
- sword
- axe
- scimitar
Choose item: potion
Adding potion to cart

-- ⚗️🧪Store Menu🗡️🪓 --
1) Add item to cart
2) List cart contents
3) Remove an item from cart
4) Remove all items from cart
5) Exit
-> 2
Cart contents:
- axe
- potion

-- ⚗️🧪Store Menu🗡️🪓 --
1) Add item to cart
2) List cart contents
3) Remove an item from cart
4) Remove all items from cart
5) Exit
-> 4
Clearing cart contents

-- ⚗️🧪Store Menu🗡️🪓 --
1) Add item to cart
2) List cart contents
3) Remove an item from cart
4) Remove all items from cart
5) Exit
-> 2
Cart contents:
```

## Tips, Tricks, and Reflection

- Note that the Python documentation refers to these functions as _methods_. Methods are functions that belong to a given data type. For now, don't worry about these semantics, we will cover these topics soon.
- Check out the documentation on the available functions [here](https://docs.python.org/3/tutorial/datastructures.html).
