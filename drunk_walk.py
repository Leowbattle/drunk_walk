# Original Python version using Turtle

from turtle import Turtle
from random import randint

t = Turtle()
t.speed(100)
t.pensize(2)

angle = 72
distance = 12

while True:
    r = randint(0, 1)
    if r == 0:
        t.left(angle)
    else:
        t.right(angle)
    t.forward(distance)
