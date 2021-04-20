# Final Project - Candy Machine 

[Live Site](https://codepen.io/ml4567/pen/poROxER?editors=1010)


[View Code via Codepen.io](https://codepen.io/ml4567/pen/poROxER?editors=1010)


## Group Members
* Michelle Lin (ml4567)
* Tianyi Tracy Zhang
* Wenjie Xu

## Overview

We want to create a candy machine, where users can draw candies from the machine. Every time they click on the machine, different candy will display. User can drop candies into the candy machine by writing a candy note and choose a candy wrap (background color) for other people to explore.
Users can also search all candies they've drop into the candy machine by providing the username, they can delete their own candy but not others.

## Technologies used
* firebase
* vue.js
* codepen.io

## Functionality and MVP
1. Candy Machine
> * users click on candy machine to get a ramdom candy in candies poll.
> * candy should display as a modal, with a correct candy wrap (background color) users selected when they drop the candy.
2. Drop a Candy
> * a form to submit a candy to add to database
> * users can enter a username, a note for candy, and choose a candy wrap
> * inputs can not be empty
3. Search
> * users should be able to see all candies they've drop into the candy machine by entering their username
> * users can delete their own candy wrap but can not delete others.
4. Production README
> * description of the app



## Prototype

![](https://i.imgur.com/SBPATUz.png)

## Schema

* username: string
* id : string
* wrap: integer
* body: string

## sample state

[
{"username": "Michelle", id: "1habhw123", wrap: 1, body: "Hi, this is a note for you"},
{"username": "Michelle", id: "3haqww283", wrap: 4, body: "Have a good night"},
{"username": "Tracy", id: "3abqw713", wrap: 2, body: "Hi, Michelle"}
]
