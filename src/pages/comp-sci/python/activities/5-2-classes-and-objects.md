---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: Python Fundamentals 5.2 Classes and Objects
---

[← Back](/comp-sci/python/)

# Activity 5.2 Classes and Objects

## Introduction

Welcome to the world of object-oriented programming, or OOP for short. Object-oriented programming allows us to model our programs around the categories of things we work with in our programs. This style of programming allows us to begin designing our programs in an organized way. Just like any other projects you've worked on, you start with your data. What data do you need to work with? Think in plain English for a moment. Using object-oriented design, we can to create our own _data types_ that resemble the things in our application. Keep this in mind however, you don't _need_ object-oriented programming, it's just a style of programming. But it helps you organize your programs in a useful way. Almost all of the most popular programming languages, including Python, are designed as object-oriented languages.

Whenever we begin designing our applications, we begin with a class. A class is a template, or a blueprint, of a thing in our application. A class describes three things: the identity, attributes, and behaviors of something. For example, say we are building an application about dogs. A dog is the thing I need to describe. It has the following attributes: name, breed, age, weight, and so on. What behaviors does a dog exhibit? A dog, barks, sleeps, chases, bites, eats, poops, etc.

Using a class, I can begin to design my dog application by defining a dog. I’m actually creating a new data type called _Dog_. I can then create variables of this new type. This may seem confusing at first. You may be wondering why we are putting in extra effort rather than just throwing some basic variables into our main method. Trust me, this will get more and more useful as we go along.

#### Fundamentals Terms

**Class** - A class is a Python construct that describes one data type in your program.

**Object** - An object is an instance, or an occurrence, of the class that you described. I.e. When you actually create a variable of the given class type.

**Instance variable** - A variable declared within a class.

**Method** - A function defined within a class.

### Skills to Practice

- Creating a class and instantiating objects
- Importing a class definition from an external file/module

## Activity Instructions

### Setup

**Warning**: You will be creating a second Python file for the first time. Read the instructions below carefully!

1. Create a new repl.
   1. Select _Python_ for the language.
   2. Name the Repl "_5.2 Classes and Objects_".
2. Click Create repl.
3. Create a new file called "_dog.py_".

![Repl Create New File](/assets/img/repl-add-file.png)

### Code

**dog.py**

```python
class Dog:
    name = ""
    breed = ""

    # self is a special parameter defined in a method.
    # Use self to access the instance variables and methods
    # defined in the class.
    def bark(self):
        print(f"{self.name}: Woof woof!")

    def sleep(self):
        print("Zzzzz...")
```

**main.py**

```python
from dog import Dog # import dog class from dog.py

my_dog = Dog()
my_dog.name = "Fido"
my_dog.breed = "Pit bull"

print(f"My dog, {my_dog.name}, is a {my_dog.breed}")
# You don't need to pass an argument for self, Python
# will automatically assign the current object to self.
my_dog.bark()
my_dog.sleep()
print()

other_dog = Dog()
other_dog.name = input("What is your dog's name? ")
other_dog.breed = input("What breed is it? ")

print(f"So, you have a {other_dog.breed} named {my_dog.name}.")
other_dog.bark()
other_dog.sleep()
```

### Debug

```
My dog, Fido, is a Pit bull
Fido: Woof woof!
Zzzzz...

What is your dog's name? Spot
What breed is it? Dachshund
So, you have a Dachshund named Fido.
Spot: Woof woof!
Zzzzz...
```

## Tips, Tricks, and Reflection

- From now on, pay attention to which code goes to the corresponding file. Everything may not be just be dumped into a single Python file anymore.
