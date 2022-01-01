---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: Python Fundamentals 3.1 Lists
---

[← Back](../)

# Activity 3.1 Lists

## Introduction

Many programs need to store multiple values of a common category. For example, an eCommerce site stores multiple items you want to purchase in a shopping basket. Your social media feeds contain many posts. In an RPG game the player may have multiple items in their inventory.

Something that can store many items in a collection are called **data structures**. One of the fundamental data structures is the list.

- Lists can store multiple values in a single structure.
- Items in a list are referred to as _elements_.
- Elements of a list are retrieved by referencing their position, or their order in the list.

### Skills to Practice

- Creating lists
- Setting values in a list
- Getting values from a list

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Python_ for the language.
   2. Name the Repl "_3.1 Lists_".
2. Click Create repl.

### Code

```python
grades = [90, 88, 95, 60, 85] # Initialize a list with pre-existing values
points_earned = grades[0] + grades[1] + grades[2] + grades[3] + grades[4]
# Multiply by 100 to get grade percentage as a whole number
grade_percentage = round(points_earned / 500 * 100, 1)

if grade_percentage > 90:
    letter_grade = "A"
elif grade_percentage > 80:
    letter_grade = "B"
elif grade_percentage > 70:
    letter_grade = "C"
elif grade_percentage > 60:
    letter_grade = "D"
else:
    letter_grade = "F"

print(f"Grades: {grades[0]}, {grades[1]}, {grades[2]}, {grades[3]}, {grades[4]}")
print(f"Final grade: {grade_percentage}%. Letter grade: {letter_grade}")
print("\n")


# Mix data types within an array
wallet1 = ["Johnny", 1000]
wallet2 = ["Francis", 2.55]
wallet3 = ["Adam", -10]

print(f"{wallet1[0]}'s bank balance: ${wallet1[1]}")
print(f"{wallet2[0]}'s bank balance: ${wallet2[1]}")
print(f"{wallet3[0]}'s bank balance: ${wallet3[1]}")
print("\n")


# Initialize an empty list that will be populated
# Use the append function to add friends to the list
friends = []
friends.append("Mr. Mortimer")
friends.append(input("Who is your second best friend? "))
friends.append(input("Who is your third best friend? "))

print("Best friends ranked:")
print(f"#1 🏆 {friends[0]}")
print(f"#2 {friends[1]}")
print(f"#3 {friends[2]}")
```

### Debug

```
Grades: 90, 88, 95, 60, 85
Final grade: 83.6%. Letter grade: B


Johnny's bank balance: $1000
Francis's bank balance: $2.55
Adam's bank balance: $-10


Who is your second best friend? Bub
Who is your third best friend? Edward Kramer V
Best friends ranked:
#1 🏆 Mr. Mortimer
#2 Bub
#3 Edward Kramer V
```

## Tips, Tricks, and Reflection

- In some languages such as JavaScript or Ruby, lists are referred to as arrays. Even though they do the same thing as lists in Python, technically they are lists. Arrays are a data structure that has a _fixed size_, while lists will fit as many or as little elements as necessary.
