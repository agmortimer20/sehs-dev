---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: Python Fundamentals 1.2 Math and Comments
---

[← Back](../)

# Activity 1.2 Math and Comments

## Introduction

Math is extremely important in computer science. Any useful program has to store and use numbers in some way. From video games, to online stores, to graphic design apps, math is necessary to creating the software we use every day. It is necessary to not only calculate math expressions, but also to display the results to the user.

`print()` doesn’t just output text messages, it is also capable of outputting the numbers and math expressions. In this activity, we will writing simple programs to demonstrate how math works in Python. There are multiple symbols used to write math expressions:

- \+ Addition
- \- Subtraction
- \* Multiplication (asterisk, Shift+8)
- / Division, quotient (forward slash)
- // Integer Division
- % Division, remainder (percent sign)

The two symbols for division may throw you off, because we don't have a math sign for remainder division in traditional arithmetic. We'll practice this symbol in depth, so you can see how useful it can be when creating certain programs.

We will also learn how to write comments in Python. Comments serve two purposes, to document, or take notes, in your code, and to disable parts of your program for testing. We will be writing simple programs for the time being, but they will eventually grow in size and complexity. It's important to document parts of your code for yourself and your team, so your code can be easily understood and maintainable. We will start with one type of comment, the single line comment: `# comment`.

### Skills to Practice

- Write math expressions
- Output numbers with `print()`
- Document code with single line comments
- Control math calculation with order of operations

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Python_ for the language.
   2. Name the Repl "_1.2 Math_".
2. Click Create repl.

### Code

```python
# These are comments. They help programmers take notes in their code.
# Comments are ignored by the compiler.

# Addition
print("I have two apples. I find another apple. How many apples do I have?")
print(2 + 1)
print()

print("Bank balance: $1000. Depositing $500.96. Your new balance is:")
print(1000 + 500.96)
print()

# Subtraction
print("I'm hungry and I want to eat an apple. How many apples will I have left?")
print(3 - 1)
print()

# Multiplication
print("I'm 30 years old. In months, that's: ") # Replace 30 with your age
print(30 * 12) # Replace 30 with your age
print()

# Division - Quotient and remainder

# Quotient
print("We have eight slices of pizza between the two of us.")
print("We each get this many slices: ")
print(8 / 2)
print()

print("I have to split this dollar between the six of us. We each get: ")
print(100 / 6) # Will this divide evenly?
print("Without fractional amounts, this is: ")
print(100//6)
print()

# Remainder using the modulus, or mod, operator
print("After splitting up the dollar, how many cents are left over?")
print(100 % 6)
print()

# Order of operations
print("4 * 10 + 12 equals:")
print(4 * 10 + 12)
print("4 * (10 + 12) equals:")
print(4 * (10 + 12))
```

### Debug

```
I have two apples. I find another apple. How many apples do I have?
3

Bank balance: $1000. Depositing $500.96. Your new balance is:
1500.96

I'm hungry and I want to eat an apple. How many apples will I have left?
2

I'm 30 years old. In months, that's:
360

We have eight slices of pizza between the two of us.
We each get this many slices:
4

I have to split this dollar between the six of us. We each get:
16.666666666666668
Without fractional amounts, this is:
16

After splitting up the dollar, how many cents are left over?
4

4 * 10 + 2 equals:
52
4 * (10 + 2) equals:
88
```

## Tips, Tricks, and Reflection

- Let's be honest, this program looks terrible. The math for each statement may correct, but it's hard to read. The division involving money returns a repeating decimal, every answer is on it's own line, and the monetary values don't have a dollar sign. These are called _formatting issues_, and we will learn how to make the output look better in future programs.
- When writing math expressions in code, you don't have to have a space in between the numbers and signs. It is valid to write **2+2**, but I recommend writing **2 + 2** with the spaces in between.
- Math signs `+ - * / %` are known as operators, and numbers used with operators are known as operands. When we write math statements they are called expressions.
