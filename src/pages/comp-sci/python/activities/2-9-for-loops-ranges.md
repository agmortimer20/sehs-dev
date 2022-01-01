---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: Python Fundamentals 2.9 For Loops and Ranges
---

[← Back](/comp-sci/python/)

# Activity 2.9 For Loops and Ranges

## Introduction

INSERT INTRO...

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Python_ for the language.
   2. Name the Repl "_2.9 For Loops and Ranges_".
2. Click Create repl.

### Code

```python
import random

print("Counting from 0 to 4")

for number in range(5):
    print(number)

print("\n")

print("Your turn, choose a number to count to:")
top_number = int(input("-> "))

for n in range(1, top_number + 1):
    print(n)

print("\n")

print("Let's count multiples.")
start = int(input("Starting number: "))
end = int(input("Ending number: "))
multiple = int(input("Multiple: "))

for n in range(start, end + 1, multiple):
    print(n)

input("\nPress enter to continue")

print("--- Math Game ---")

wins = 0
losses = 0
# Add 1 to number of rounds for the range function
number_of_rounds = int(input("How many rounds would you like to play? ")) + 1

for n in range(1, number_of_rounds):
    print(f"Round {n}!")
    print(f"Wins: {wins} - Losses {losses}")

    # Generate random operands between 1 and 100
    operand1 = random.randint(1, 100)
    operand2 = random.randint(1, 100)

    # Generate random math operator
    random_operator = random.randint(1, 3)

    if random_operator == 1:
        sign = "+"
        answer = operand1 + operand2
    elif random_operator == 2:
        sign = "-"
        answer = operand1 - operand2
    else:
        sign = "*"
        answer = operand1 * operand2

    guess = int(input(f"{operand1} {sign} {operand2} = "))

    if guess == answer:
        print("Correct!")
        wins += 1
    else:
        print(f"Wrong! The correct answer is {answer}")
        losses += 1

print(f"Final score: Wins: {wins} - Losses: {losses}")
```

### Debug

```
Counting from 0 to 4
0
1
2
3
4


Your turn, choose a number to count to:
-> 10
1
2
3
4
5
6
7
8
9
10


Let's count multiples.
Starting number: 0
Ending number: 10
Multiple: 2
0
2
4
6
8
10

Press enter to continue
--- Math Game ---
How many rounds would you like to play? 3
Round 1!
Wins: 0 - Losses 0
45 - 86 = -41
Correct!
Round 2!
Wins: 1 - Losses 0
7 + 16 = 23
Correct!
Round 3!
Wins: 2 - Losses 0
87 + 99 = 5
Wrong! The correct answer is 186
Final score: Wins: 2 - Losses: 1
```

## Tips, Tricks, and Reflection

INSERT TIP...
