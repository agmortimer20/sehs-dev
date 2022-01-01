---
container: "container"
layout: "../../../layouts/PageLayout.astro"
title: Code Challenge 13 - ATM
---

[← Back](/comp-sci/code-challenges/)

# Code Challenge 13 - ATM

## Introduction

An ATM is a machine that allows banking customers to easily access their bank accounts. It performs three basic tasks:

- Inquiry - See your account balance
- Deposit - Put money in your account
- Withdraw - Take money out of your account

### Skills to Practice

- Repeat statements using loops
- Make decisions with if statements
- Nest if statements
- Validate user input

## Challenge Tasks

Create a banking ATM program that has the following features:

1. Shows a main menu with the following options:
   - Inquire balance
   - Deposit
   - Withdraw
   - Exit
2. The user should be able to inquire their balance, make a deposit, or make a withdrawal.
   - After the user performs a task, ask if they want to perform another transaction. If they say no, exit the program.
3. Validate the user's input:
   - If the user tries to deposit an amount less than $1, inform them that their deposit must be at least $1.
   - If the user tries to withdraw more money than is in their account, inform them that they have an insufficient balance.
   - If the user selects an invalid menu option, ask them to try again.
4. Set up your balance variable ahead of time. Use the following variable:

```js
var balance = 500;
```

### Sample Output

![Sample Output](/assets/img/code-challenges/challenge-13-atm.gif)
