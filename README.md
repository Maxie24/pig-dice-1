# THE PIG DICE GAME

#### The Pig Dice WebApp Game, 28/09/18

#### By **nignanthomas**        
                                                 _                               
               o                                | |                              
        _  _       __,  _  _    __,   _  _  _|_ | |     __   _  _  _    __,   ,  
       / |/ |  |  /  | / |/ |  /  |  / |/ |  |  |/ \   /  \_/ |/ |/ |  /  |  / \_
         |  |_/|_/\_/|/  |  |_/\_/|_/  |  |_/|_/|   |_/\__/   |  |  |_/\_/|_/ \/
                    /|                                                           
                    \|                                                           

## Description
Players throw a dice and scores as many points as the total shown on the dice providing the dice doesn’t roll a 1. The player may continue rolling and accumulating points (but risk rolling a 1) or end his turn. If the player rolls a 1 his turn is over, he loses all points he accumulated that turn, and he passes the die to the next player. Play passes from player to player until a winner is determined. The first player to accumulate 100 or more points wins the game.


## Technologies Used
- HTML
- CSS
- Bootstrap
- JavaScript
- jQuery
- Git

## Live Demo
https://nignanthomas.github.io/pig-dice/

## Installation Requirements
Clone to your computer using Terminal </br>
`$ git clone https://github.com/nignanthomas/pig-dice/`

## BDD Specifications
| Behavior                          |  Input Example |  Output  Example|
|----------                         |:-------------: |------:          |
| Player 1 and Player 2 input names, and click start |  Player 1: Newton / Player 2: Peter / Click START    | Then starts the game |
|  Player 1 clicks Roll |  Click roll    |  Number is generated, Dice is displayed  |
|If Player rolls any number other than 1, roll is added to round total   | Roll = 5     |  Round Total =5    |
|If Player1 rolls 1, no score is added and round for Player 2  |  Roll = 1    |  Round Total = 0, Score = 0,  Player2 plays    |
|If Player1 clicks Hold, round total is added to his score and it's Player2 Turn | Click Hold     |  Round Total = 5, Score = 5, Player2 plays    |
| When a player's total score is 100 or more, game is over and winner alert shows  |  Player 1 score = 105	    |  Newton WINS (SweetAlert)    |


## Support and contact details
[Thomas NIGNAN](https://github.com/nignanthomas/)

### License
This project is under MIT License.
Copyright (c) 2018 nignanthomas
