---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: Python Fundamentals 2.6 While Loops
---

[← Back](../)

# Activity 2.6 While Loops

## Introduction

It is not uncommon for a program to run a set of instructions repeatedly. Programming languages all provide some construct for repeatedly executing a set of statements. These are known as **loops**.

There are a few different ways to repeat code. For Python developers, the first construct to learn is known as the while loop.

**While loops** look similar to if statements in that they have a keyword, a condition, and an associated code block. However, a while loop while repeatedly execute as long as the specified condition is true. That means somewhere in the loop, there needs to be a statement that will change the condition to evaluate to false.

### Example

```python
number = 10

# Keep executing loop while number is greater than 0
while number > 0:
    print(f"Number is {number}")
    number = number - 1
```

### Infinite Loops

The first major mistake when writing loops is creating a loop then never terminates. Loops that never stop executing are called **infinite loops**. Remember this, you always want to terminate a loop or else your program will crash.

**Example**

```python
number = 10

# Number variable is never reduced, therefore it is always greater than 0
while number > 0:
    print(f"Number is ${number}")
```

### Skills to Practice

- Writing while loops

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Python_ for the language.
   2. Name the Repl "_2.6 While Loops_".
2. Click Create repl.

### Code

```python
import random

# 99 Bottles Song
print("Time to sing a song...\n")

soda = input("Enter your favorite soda: ")
num_bottles = 99

while num_bottles > 0:
  print(f"{num_bottles} bottles of {soda} on the wall,")
  print(f"{num_bottles} bottles of {soda}!")
  print("You take one down, pass it around,")
  num_bottles = num_bottles - 1 # Subtract one from bottles variables
  print(f"{num_bottles} bottles of {soda} on the wall!\n")

  # input() # Uncomment to pause after every iteration.

print("\n")


# Fast Food Menu
ordering_food = True

print("-- Cranjis McBasketball Order To Go --")

# Same as ordering_food == True
while ordering_food:
  print("-Entrees-")
  print("1) Cranjis McNuggets")
  print("2) JaCrispy Chicken sandwich")
  print("3) Burger with McBasketball sauce")
  print("4) Exit/Complete Order")

  choice = input("Enter an option: ")

  if choice == "1":
    print("Placing order for one Cranjis McNugget\n")
  elif choice == "2":
    print("Placing order for one JaCrispy Chicken sandwich\n")
  elif choice == "3":
    print("Placing order for one Burger with McBasketball sauce\n")
  elif choice == "4":
    time = random.randint(5, 59)
    print(f"Your order has been placed! It will be ready in {time} minutes.")
    ordering_food = False
  else:
    print("Invalid option. Please try again...\n")
```

### Debug

```
Time to sing a song...

Enter your favorite soda: Coke
99 bottles of Coke on the wall,
99 bottles of Coke!
You take one down, pass it around,
98 bottles of Coke on the wall!

98 bottles of Coke on the wall,
98 bottles of Coke!
You take one down, pass it around,
97 bottles of Coke on the wall!

...

1 bottles of Coke on the wall,
1 bottles of Coke!
You take one down, pass it around,
0 bottles of Coke on the wall!



-- Cranjis McBasketball Order To Go --
-Entrees-
1) Cranjis McNuggets
2) JaCrispy Chicken sandwich
3) Burger with McBasketball sauce
4) Exit/Complete Order
Enter an option: 1
Placing order for one Cranjis McNugget

-Entrees-
1) Cranjis McNuggets
2) JaCrispy Chicken sandwich
3) Burger with McBasketball sauce
4) Exit/Complete Order
Enter an option: 3
Placing order for one Burger with McBasketball sauce

-Entrees-
1) Cranjis McNuggets
2) JaCrispy Chicken sandwich
3) Burger with McBasketball sauce
4) Exit/Complete Order
Enter an option: 4
Your order has been placed! It will be ready in 49 minutes.
```

## Tips, Tricks, and Reflection

- Did you mess up a line of code and accidentally create an infinite loop? If so, how did you fix it? If not, try purposely breaking your code to create an infinite loop.
