# Beginner Bootcamp Homework

Hello beginner bootcampers. Here is your first formal homework  assignment!

## What are we building?

We are building (the start) of a game

Minimal game:

- You play as a hero and you have some "stats" like health and inventory
- By clicking different pictures the stats of the hero get changed

Additional features:

- A player can choose their own name
- We want to display the stats to the player so she knows what happened
- When some stats change we want to show the updated stats
- Make it possible to fight enemies

## Section 1. Creating the hero object

**Press the 'Run the tests' button to run the automated tests** 
Follow the instructions in section to create the hero object.

## Section 2. Implementing the basic game logic and UI

**Press the 'Run the tests' button to run the automated tests**
Follow the instructions to implment `resting`, `picking up items` and `equipping a weapon` game logic. These are all functions that will manipulate your hero object. Each of these function will need some user interface.

**note:** You could implement this game logic in *many* other ways. But in order for the tests to guide you the instructions are very specific.

## Section 3. CSS

- Link an external stylesheet and make all the pictures the same size.

## Section 4 - Show me what you got

- Allow people to change the name of their hero, you can use window.prompt or use an input element. Be careful using a form because using a form might refresh the page.

- Write `displayStats` function that writes your hero's name, health, weapontype, weapon damage to the page. Call it at the end of your script

- Call `displayStats` when some data of the hero has changed to update the page.

- Implement fighting an enemy. (how you do it is up to you!)

- When an enemy or weapon gets clicked it gets deleted from the page
