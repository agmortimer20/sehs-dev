---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: Python Fundamentals 4.1 Functions
---

[← Back](/comp-sci/python/)

# Activity 4.1 Function Basics

### Introduction

Functions are an incredibly important construct in programming. They allow us developers to create a reusable set of procedures. You've used functions since day 1 with `print()`. Someone had to write that function in order for you to use it. Programmers create functions that contain code that can be reused throughout an application. If we have some code that needs to be copy and pasted throughout an application, that's a good use case to implement a function that allows us to reuse that code.

There are two concepts to understand when working with functions: creating functions with a _function definition_ and using, or _invoking_, functions.

```python
# Function definition
def myFunction():
    print("What is this?")
    print("That's cheese...")

# Function invocation
myFunction()
myFunction()
```

A function definition contains a set of statements that define what will happen when the function is invoked. This is known as a function body. One important thing to note: **The function body does not execute unless the function is invoked.**

### Skills to Practice

- Defining simple functions
- Invoking user defined functions

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Python_ for the language.
   2. Name the Repl "_4.1 Function Basics_".
2. Click Create repl.

### Code

```python
# Function definitions
# The code in these functions do not execute until the function is invoked.

def greet():
    print("Hey buddy!")
    mood = input("How's it goin', eh? ")

    if mood == "good":
        print("Glad to hear it!")
    elif mood == "bad":
        print("Sorry to hear that :(")
    else:
        print("Well then...")

def dontInvokeThisFunction():
    print("What is your problem???")
    print("Why would you invoke a function named 'dontInvokeThisFunction'???")

def bottlesOfMilkSong():
    bottles = 99

    while bottles > 0:
        print(f"{bottles} bottles of milk on the wall,")
        print(f"{bottles} bottles of milk!")
        print("You take one down, pass it around,")
        bottles -= 1
        print(f"{bottles} bottles of milk on the wall!\n")

def songThatNeverEnds():
    answer = ""

    while answer != "no":
        print("\nIt's the song that never ends, it goes on and on my friends!")
        print("Some people started singing it not knowing what it was,")
        print("but they'll continue singing it, that's just because...\n")

        answer = input("Continue? ")


# Main Menu
choice = ""

# Invoke/Call the greet() function
greet()

while choice != "5":
    print("\n-Menu-")
    print("1) Greet again")
    print("2) Invoke the forbidden function...")
    print("3) Sing 99 Bottles of Milk")
    print("4) Sing the never ending song")
    print("5) Exit\n")

    choice = input("-> ")

    if choice == "1":
        greet()
    elif choice == "2":
        dontInvokeThisFunction()
    elif choice == "3":
        bottlesOfMilkSong()
    elif choice == "4":
        songThatNeverEnds()
    elif choice == "5":
        print("Goodbye.")
    else:
        print("Invalid option.")
```

### Debug

```
Hey buddy!
How's it goin', eh? good
Glad to hear it!

-Menu-
1) Greet again
2) Invoke the forbidden function...
3) Sing 99 Bottles of Milk
4) Sing the never ending song
5) Exit

-> 2
What is your problem???
Why would you invoke a function named 'dontInvokeThisFunction'???

-Menu-
1) Greet again
2) Invoke the forbidden function...
3) Sing 99 Bottles of Milk
4) Sing the never ending song
5) Exit

-> 4

It's the song that never ends, it goes on and on my friends!
Some people started singing it not knowing what it was,
but they'll continue singing it, that' just because...

Continue? no

-Menu-
1) Greet again
2) Invoke the forbidden function...
3) Sing 99 Bottles of Milk
4) Sing the never ending song
5) Exit

-> 1
Hey buddy!
How's it goin', eh? bad
Sorry to hear that :(

-Menu-
1) Greet again
2) Invoke the forbidden function...
3) Sing 99 Bottles of Milk
4) Sing the never ending song
5) Exit

-> 5
```

## Tips, Tricks, and Reflection

- Try looking back at some of your previous programs, and see if there were any snippets of code that you copy and pasted for reuse. That is a great instance of where you can move that code into a function, and reduce redundant code in your application.
- Function definitions are also known as **function declarations**.
- Invoking a function is also referred to as **calling** a function.
