/*
    This contains structures of all the data needed to run the game
*/

var SECONDS_PER_FRAME = 50; // Controls the speed of screen update
var SPEED = 1;
var BULLET_SPEED = 2;




function controlConstructor() {
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.shoot = false;
}
// constructor for the control object


function bullet(identification, positionTop, positionLeft, up, right, down, left) {
    this.id = identification;
    this.top = (parseInt(positionTop) + 1) + "%";
    this.left = (parseInt(positionLeft) + 0.5) + "%";
    this.direction = {
        up: up,
        right: right,
        down: down,
        left: left
    };
}
// constructor for bullets




var playerOne = {}
// Reference to the player ONE object

var playerTwo = {}
// Reference to the player TWO object

var bullets = [];

/*
Initialization of the game loop thread
*/

function init() {

    playerOne.element = document.getElementById('playerOne');
    playerTwo.element = document.getElementById('playerTwo');
    // create element objects for each player

    playerOne.control = new controlConstructor;
    playerTwo.control = new controlConstructor;
    // create control objects for each player


    playerOne.weapon = 0;
    playerTwo.weapon = 0;
    // weapon wait time

    playerOne.element.style.top = "30%";
    playerOne.element.style.left = "30%";
    playerOne.element.style.backgroundColor = "black";
    // initialize player ONE

    playerTwo.element.style.top = "70%";
    playerTwo.element.style.left = "70%";
    playerTwo.element.style.backgroundColor = "white";
    // initialize player TWO


    GAMELOOP = setInterval(gameLoop, SECONDS_PER_FRAME);
    console.log('Game has begun');
}



function endGame(player) {
    alert('Player ' + player + ' lost');
    clearInterval(GAMELOOP);
}