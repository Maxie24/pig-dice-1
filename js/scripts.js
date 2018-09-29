//Business Logic

var Player = function(name, score, status){
  this.name = name;
  this.score = score;
  this.status = status;
}

Player.prototype.scorePlus = function(){
  this.score += roundTotal;
}

var playerOne = {};
var playerTwo = {};

//function that throws dice
var rolled = 0;
var roundTotal = 0;
var roll = function(){
  rolled = Math.floor(Math.random()*6) + 1;
  $("#new-dice").remove();
  $(".dice-img").append("<img id='new-dice' src='images/dice"+rolled+".png' alt='Dice "+rolled+"'>");
  if (rolled != 1){
    roundTotal += rolled
  } else {
    roundTotal = 0;
    turnPlayer();
  }
}

//function to change players turns
var turnPlayer = function(){
  if (playerOne.status == "enabled") {
    playerOne.status = "disabled";
    playerTwo.status = "enabled";
    $(".one-turn").hide();
    $(".two-turn").show();
  } else if (playerTwo.status == "enabled") {
    playerOne.status = "enabled";
    playerTwo.status = "disabled";
    $(".two-turn").hide();
    $(".one-turn").show();
  }
}

// function Winner
var winner = function(){
  if (playerOne.score >= 100){
    $(".dice-img").text("!!!" + playerOne.name + "  WINS !!!")
    $("#roll").prop("disabled", true);
    $("#hold").prop("disabled", true);
  } else if (playerTwo.score >= 100){
    $(".dice-img").text("!!!" + playerTwo.name + "  WINS !!!")
    $("#roll").prop("disabled", true);
    $("#hold").prop("disabled", true);
  }
}


//User Interface

$(document).ready(function(){
  $(".opponnents").submit(function(event){
    event.preventDefault();
    playerOneName = $("#player-one").val();
    playerTwoName = $("#player-two").val();
    playerTwo = new Player(playerTwoName, 0, "disabled");
    playerOne = new Player(playerOneName, 0, "enabled");

    $(".login").hide();
    $(".pig-game").show();
    $(".player-one-name").text(playerOne.name);
    $(".player-two-name").text(playerTwo.name);
    $(".two-turn").hide();
    $(".one-turn").show();

    $("#roll").click(function(){
      roll();
      $("#round-total").text(roundTotal);
    }) // end roll click

    $("#hold").click(function(){
      //must add commit remove img dice if click hold
      $("#new-dice").remove();
      if (playerOne.status == "enabled") {
        playerOne.scorePlus();
        $(".player-one-score").text(playerOne.score);
        winner();
        turnPlayer();
      } else if (playerTwo.status == "enabled"){
        playerTwo.scorePlus();
        $(".player-two-score").text(playerTwo.score);
        winner();
        turnPlayer();
      }
      roundTotal = 0;
    }) // end hold click
  }) // end submit start
}) // end ready

function reload() {
  location.reload();
}
