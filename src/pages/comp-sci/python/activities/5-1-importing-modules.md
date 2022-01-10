---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: Python Fundamentals 5.1 Importing Modules
---

[← Back](/comp-sci/python/)

# Activity 5.1 Importing Modules

## Introduction

As your programs grow in size, it's a good idea to seperate certain pieces of functionality into their own files. For small programs, it's okay to keep everything in one file. But think of it like any other collection of files on our computer: we seperate large libraries of photos into folders, we seperate schoolwork by courses, etc. As a Python project grows, we typically seperate code into their own files.

When we seperate code into different files, we refer to each file as a _module_. We can create our own modules, and we can even import modules that we haven't written ourselves. As a matter of fact, we've done this already. Take a look at the example below:

```python
import math
import random

print(math.sqrt(4))
print(random.randint(1, 10))
```

Using modules, we can organize things like functions, variables, and other constructs into different files which we can then import as we need them. For example, in order to use the functions above to perform certain math operations or generate random numbers, we imported the _math_ module and the _random_ module in our program. These modules come with a Python installation. They are a part of what is known as the **Python Standard Library**. There are a number of modules available for performing various tasks, such as working with dates, files, databases, etc. We learn how to work with a few of these modules later on. **Note**: You'll often see the term _library_ when programming. A library is just some code that someone wrote that you can use in your own programs.

It's also common to import libraries that don't come with Python. For example, the website [Github](https://github.com) is a popular website for hosting programming projects. A number of awesome Python libraries exist that help you do awesome things. For example, [Pygame](https://pygame.org) is a library for creating 2D video games. We use Pygame by importing the modules that come with it.

There are a few ways to import a module apart from the simple `import` statement we've used before.

1. `import module_name`

```python
import math

x = math.sqrt(4)
```

2. `from module_name import function, variable`
```python
from math import sqrt, pi, floor

x = sqrt(4)
circumference = 2 * pi * 10
y = floor(5.0692)
```

3. `from module_name import everything`
```python
from math import *

x = 5
y = sqrt(x)
z = ceil(y)
```

You should recognize the first example. When a module is imported using `import module_name`, we can access it's code by prefixing each function, variable, etc. with the module name followed by the period and then the name. However, this syntax can be tedious. If we just want to import specific things from a module, we can use the `from module import something` syntax. Notice in the example, since we explicitly imported the functions and the pi variable, we don't need to specify the module they come from. Instead of `math.pi`, we can just say `pi`. The third example is sort of a combination of the previous two examples. The * is a wildcard, which is synonymous with the word _everything_. So you can the statement like this, "from the math module, import everything". Using this syntax, we have access to everything in the math module, but we can also omit the `math.`. Keep in mind though that this can cause naming conflicts if we import another module with similar names.

There is much to modules in Python, but this is plenty to get you going as you start your programming journey.

### Skills to Practice

- Importing modules using various import statements

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Python_ for the language.
   2. Name the Repl "_5.1 Importing Modules_".
2. Click Create repl.
   **Repl add file button**

### Code

```python
# Simple import statement
# Module for working with dates and times. Learn about this in later courses.
import datetime

# Import everything from the math module
from math import *

# Only import the randint function from the random module
from random import randint


def get_circle_area(radius):
    return sqrt(pi * radius)

def get_circumference(radius):
    return 2 * pi * radius

# Test out circle functions
radius1 = randint(1, 10)
radius2 = randint(1, 10)
radius3 = randint(1, 10)
area1 = get_circle_area(radius1)
area2 = get_circle_area(radius2)
area3 = get_circle_area(radius3)
circ1 = get_circumference(radius1)
circ2 = get_circumference(radius2)
circ3 = get_circumference(radius3)

print("Function Stuff")
print("--------------")
print(f"Radius {radius1} - Area: {round(area1, 2)}, Circ: {round(circ1, 2)}")
print(f"Radius {radius2} - Area: {round(area2, 2)}, Circ: {round(circ2, 2)}")
print(f"Radius {radius3} - Area: {round(area3, 2)}, Circ: {round(circ3, 2)}")

print("\nDate and Time Stuff")
print("------------")
print(f"Current Date: {datetime.datetime.now().date()}")
print(f"Current Time: {datetime.datetime.now().time()}")
```

### Debug

```
Function Stuff
--------------
Radius 4 - Area: 3.54, Circ: 25.13
Radius 7 - Area: 4.69, Circ: 43.98
Radius 5 - Area: 3.96, Circ: 31.42

Date and Time Stuff
------------
Current Date: 2022-01-09
Current Time: 14:58:28.108568
```

## Tips, Tricks, and Reflection

- If you would like to check out the complete list of available modules in the Python standard library, you can find them [here](https://docs.python.org/3/library/index.html). You will learn about some of the more popular modules in later content.