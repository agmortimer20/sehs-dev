---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: Python Fundamentals 2.8 Rock, Paper, Scissors Game
---

[← Back](/comp-sci/python/)

# Activity 2.8 Rock, Paper, Scissors Game

## Introduction

Rock, paper, scissors is a fun game to play between friends. Here is a basic rundown of the rules:

- Choose rock, paper, or scissors
- Paper covers rock
- Rock crushes scissors
- Scissors cuts paper

### Skills to Practice

- Writing while loops
- Nesting multiple levels of code blocks

## Activity Instructions

### Setup

1. Create a new repl.
   1. Select _Python_ for the language.
   2. Name the Repl "_2.8 Rock, Paper, Scissors_".
2. Click Create repl.

### Code

```python
import random

wins = 0
losses = 0
current_round = 1
playing = True

print("---ROCK, PAPER, SCISSORS---")
print(" --2020 Terminal Edition--")

"""
This is a multi-line string.
It's not technically a comment, but can be used as such.

1. Set the header: round number, wins, losses
2. Prompt user for player hand
3. Generate a random computer hand
4. Check who won
    i. If same hand - tie
   ii. If player chooses rock
      a. Computer paper - lose
      b. Computer scissors - win
  iii. If player chooses paper
      a. Computer scissors - lose
      b. Computer rock - win
   iv. If player chooses scissors
      a. Computer rock - lose
      b. Computer paper - win
5. Prompt user to play again
"""

while playing:
  print(f"ROUND {current_round}!")
  print(f"W: {wins} - L: {losses}")
  print("Rock, Paper, Scissors?")

  player_hand = input("-> ").lower()
  random_number = random.randint(0, 2)

  if random_number == 0:
    computer_hand = "rock"
  elif random_number == 1:
    computer_hand = "paper"
  elif random_number == 2:
    computer_hand = "scissors"


  print(f"Computer chooses {computer_hand}!\n")

  if player_hand == computer_hand:
    print("Tie!")
  elif player_hand == "rock":
    if computer_hand == "paper":
      print("You lose! Paper covers rock!\n")
      losses += 1
    else:
      print("You win! Rock crushes scissors!\n")
      wins += 1
  elif player_hand == "paper":
    if computer_hand == "scissors":
      print("You lose! Scissors cuts paper!\n")
      losses += 1
    else:
      print("You win! Paper covers rock!\n")
      wins += 1
  elif player_hand == "scissors":
    if computer_hand == "rock":
      print("You lose! Rock crushes scissors!\n")
      losses += 1
    else:
      print("You win! Scissors cuts paper!\n")
      wins += 1
  else:
    print("You typed something wrong, dummy...\n")


  # If player says no, set playing to false.
  # This terminates the while loop.
  print("\nPlay again?")
  choice = input("-> ")

  if choice == "no":
    playing = False
  else:
    current_round += 1

  print()
```

### Debug

```
---ROCK, PAPER, SCISSORS---
 --2020 Terminal Edition--
ROUND 1!
W: 0 - L: 0
Rock, Paper, Scissors?
-> scissors
Computer chooses scissors!

Tie!

Play again?
-> yes
ROUND 2!
W: 0 - L: 0
Rock, Paper, Scissors?
-> paper
Computer chooses scissors!

You lose! Scissors cuts paper!

Play again?
-> no
```

## Tips, Tricks, and Reflection

- You can also try rewrite the code to use compound boolean expressions instead of nested if statements when checking if the player won or lost.
- Try making a two player version of rock, paper, scissors. When player one's turn is done, you can call the function `os.system("clear")` to clear the screen, so player two can't cheat. The system function exists in the os module, which is used to execute terminal commands.

```python
import os

os.system("clear")
```

- If you want to ascend as a programmer, try upgrading the game to **Rock, paper, scissors, lizard, Spock**!
- As the complexity of your applications increases, it's more important than ever to make out the requirements. The multi-line comment in the activity code is a basic, but useful guide to tracking what needs to be implemented in the program.
