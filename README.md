
# Candy Machine 

[Live Site](https://michelleamazinglin.github.io/Candy-Machine/)


[View Code via Codepen.io](https://codepen.io/ml4567/pen/poROxER?editors=1010)


## Group Members
* Michelle Lin
* Art Assets by Tianyi Tracy Zhang

## Overview

We want to create a candy machine, where users can draw candies from the machine. Every time they click on the machine, different candy will display. User can drop candies into the candy machine by writing a candy note and choose a candy wrap (background color) for other people to explore.
Users can also search all candies they've drop into the candy machine by providing the username, they can delete their own candy but not others.

<img width="1362" alt="Screen Shot 2021-05-13 at 1 51 12 PM" src="https://user-images.githubusercontent.com/68549082/118165447-4a9a0f00-b3f2-11eb-802b-dc599b372847.png">

## Technologies used
* firebase
* vue.js


## Functionality and MVP
1. Candy Machine
> * users click on candy machine to get a ramdom candy in candies poll.
> * candy should display as a modal, with a correct candy wrap (background color) users selected when they drop the candy.
  > <img width="739" alt="Screen Shot 2021-05-13 at 1 52 03 PM" src="https://user-images.githubusercontent.com/68549082/118165552-67364700-b3f2-11eb-8270-98ee148a8a4b.png">

2. Drop a Candy
> * a form to submit a candy to add to database
> * users can enter a username, a note for candy, and choose a candy wrap
> * inputs can not be empty
  > <img width="623" alt="Screen Shot 2021-05-13 at 1 52 46 PM" src="https://user-images.githubusercontent.com/68549082/118165631-80d78e80-b3f2-11eb-85b0-6b78ed7d876c.png">

3. Search
> * users should be able to see all candies they've drop into the candy machine by entering their username
> * users can delete their own candy wrap but can not delete others.
  > <img width="589" alt="Screen Shot 2021-05-13 at 1 53 09 PM" src="https://user-images.githubusercontent.com/68549082/118165660-8e8d1400-b3f2-11eb-811c-3fb884d3b67b.png">

  
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
