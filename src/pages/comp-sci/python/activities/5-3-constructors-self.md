---
container: "container"
layout: "../../../../layouts/PageLayout.astro"
title: Python Fundamentals 5.3 Constructors and the Self Keyword
---

[← Back](/comp-sci/python/)

# Activity 5.3 Constructors and the Self Keyword

## Introduction

When implementing your classes for a project, you will likely want specific ways you can quickly create objects from that class. So far, we've created objects with some default, blank data. There is a nice way to set up an object that gives us control of the process. These are called _constructors_, sometimes referred to as initializers. A constuctor is a special method defined in a class definition that is responsible for setting up, or _constructing_ an object. You've used constructor methods in previous demos, specifically when you created an object. In the previous program, the `Dog()` method constructed a dog object. It wasn't explicitly defined in the class definition, but a default one exists for any class that is defined. To implement your own constructor, create a method named `__init__()`, where init is short for initializer. Look at the example below:

```python
class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def drive(self):
        print("Driving to destination.")
        
```

The above Car class has a constructor defined that requires a make, model, and year arguments to be passed in. This method can be set up like any other function, such as specifying default argument values, variable length arguments, etc.

```python
class Cat:
    def __init__(self, name, breed="domestic shorthair"):
        self.name = name
        self.breed = breed
    
    def meow(self):
        print(f"{self.name}: Meow...")
```

In the Cat class, only a name is required. The constructor will set the cat's breed to domestic shorthair if a breed argument is not specified. Notice in both examples that I can directly specify the instance variables right in the constructor. I **don't** need to redundantly initialize any variables up above. That's where the `self` keyword comes in play.

You may remember `self` from the Dog class. `self` is a special keyword that references the current object in use. To clarify this, let's make some cat objects using the class above.

```python
cat1 = Cat("Lilly", "Siamese")
cat2 = Cat("Late")

cat1.meow()
```

If I call the meow method, how does Python know the value of `self.name`? Whenever a method is called, the current object in use will be referenced with `self`. So, since cat1, Lilly, is the given object, `self` is the cat Lilly. On a side note, you can call this parameter whatever you want, but the convention is call it 'self'.

### Skills to Practice

- Creating a class and instantiating objects
- Implementing a constructor
- Importing a class definition from an external file/module

## Activity Instructions

### Setup

**Warning**: You will be creating a second Python file for the first time. Read the instructions below carefully!

1. Create a new repl.
   1. Select _Python_ for the language.
   2. Name the Repl "_5.2 Constructors and Self_".
2. Click Create repl.
3. Create a new file called "_pokemon.py_".

![Repl Create New File](/assets/img/repl-add-file.png)

### Code

**pokemon.py**

```python
from random import randint
from math import floor

class Pokemon:
    # Required arguments: name, type
    # Optional arguments: hp, lvl, xp
	def __init__(self, name, type, hp = 20, lvl = 1, xp = 0):
		self.name = name
		self.type = type
		self.hp = hp
		self.lvl = lvl
		self.xp = xp
	
	# Damage = current level * 1.5 + random number; round down
	def attack(self):
		return floor(self.lvl * 1.5 + randint(2, 5))

	def rest(self):
		self.hp += randint(2, 4)
```

**main.py**

```python
from random import randint
from pokemon import Pokemon

pokemon1 = Pokemon("Squirtle", "water")
pokemon2 = Pokemon("Gengar", "ghost", 23, xp=50)
enemy_pokemon1 = Pokemon("Abra", "psychic", 12)
enemy_pokemon2 = Pokemon("Bulbasaur", "grass")

won_battle = False  # Switch to True if battle is won
choice = ""

# Player chooses Pokemon
while choice != "1" and choice != "2":
    print(choice)
    print("Choose your Pokemon!")
    print(f"1) {pokemon1.name}")
    print(f"2) {pokemon2.name}\n")
    choice = input("(1 or 2) -> ")

    if choice == "1":
        player_pokemon = pokemon1
    elif choice == "2":
        player_pokemon = pokemon2
    else:
        print("Invalid, try again.")
    
print(f"\nYou chose {player_pokemon.name}!")

# Enemy chooses Pokemon
random_choice = randint(1, 2)

if random_choice == 1:
    enemy_pokemon = enemy_pokemon1
else:
    enemy_pokemon = enemy_pokemon2

print(f"Sleepy Mortimer chooses {enemy_pokemon.name}!\n")

# Begin Match
print(f"----- Match: {player_pokemon.name} vs. {enemy_pokemon.name}! -----\n")

while player_pokemon.hp > 0 and enemy_pokemon.hp > 0:
    print("*************")
    print(f"{player_pokemon.name}: {player_pokemon.hp}hp")
    print(f"{enemy_pokemon.name}: {enemy_pokemon.hp}hp\n")
    print("1) Attack")
    print("2) Rest")
    print("*************")
    choice = input("-> ").lower()

    # Player Turn
    if choice == "1" or choice == "attack":
        damage = player_pokemon.attack()
        print(f"{player_pokemon.name} does {damage} damage!")

        enemy_pokemon.hp -= damage

        if enemy_pokemon.hp <= 0:
            print(f"{enemy_pokemon.name} fainted!")
            won_battle = True
    elif choice == "2" or choice == "rest":
        player_pokemon.rest()
        print(f"{player_pokemon.name} rested and now has {player_pokemon.hp}hp.")
    else:
        print(
            f"You gave {player_pokemon.name} an incorrect command. They hesitate and lose a turn!")

    # Enemy Turn - They can only attack if they haven't fainted
    if enemy_pokemon.hp > 0:
        random_choice = randint(1, 4)  # 75% chance attack, 25% chance rest

        if random_choice <= 3:
            damage = enemy_pokemon.attack()
            print(f"{enemy_pokemon.name} does {damage} damage!")

            player_pokemon.hp -= damage

            if player_pokemon.hp <= 0:
                print(f"{player_pokemon.name} fainted!")
        else:
            enemy_pokemon.rest()
            print(f"{enemy_pokemon.name} rested and now has {enemy_pokemon.hp}hp.")

# See who won the battle
if won_battle:
    gained_xp = randint(5, 10)
    player_pokemon.xp += gained_xp
    print(f"You win! {player_pokemon.name} gained {gained_xp}xp!")
else:
    print("You lose!")

```

### Debug

```
Choose your Pokemon!
1) Squirtle
2) Gengar

(1 or 2) -> 2

You chose Gengar!
Sleepy Mortimer chooses Bulbasaur!

----- Match: Gengar vs. Bulbasaur! -----

*************
Gengar: 23hp
Bulbasaur: 20hp

1) Attack
2) Rest
*************
-> 1
Gengar does 4 damage!
Bulbasaur does 5 damage!
*************
Gengar: 18hp
Bulbasaur: 16hp

1) Attack
2) Rest
*************
-> 1
Gengar does 4 damage!
Bulbasaur does 5 damage!
*************
Gengar: 13hp
Bulbasaur: 12hp

1) Attack
2) Rest
*************
-> 2
Gengar rested and now has 15hp.
Bulbasaur does 3 damage!
*************
Gengar: 12hp
Bulbasaur: 12hp

1) Attack
2) Rest
*************
-> 1
Gengar does 4 damage!
Bulbasaur rested and now has 12hp.
*************
Gengar: 12hp
Bulbasaur: 12hp

1) Attack
2) Rest
*************
-> 1
Gengar does 6 damage!
Bulbasaur does 5 damage!
*************
Gengar: 7hp
Bulbasaur: 6hp

1) Attack
2) Rest
*************
-> 1
Gengar does 5 damage!
Bulbasaur rested and now has 4hp.
*************
Gengar: 7hp
Bulbasaur: 4hp

1) Attack
2) Rest
*************
-> 1
Gengar does 5 damage!
Bulbasaur fainted!
You win! Squirtle gained 10xp!
```

## Tips, Tricks, and Reflection

- Try going back to a previous mini-game you made, and reimplement the game using object-oriented syntax. I think you'll find that the extra upfront work is worth the effort.
