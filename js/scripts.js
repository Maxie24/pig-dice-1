//Business Logic

var Player = function(name, score){
  this.name = name;
  this.score = score;
}
var rolled = 0;
var roundTotal = 0;
var roll = function(){
  rolled = Math.floor(Math.random()*6) + 1;
  if (rolled != 1)
  roundTotal += rolled
}

//User Interface

$(document).ready(function(){
  $(".opponnents").submit(function(event){
    event.preventDefault();
    playerOneName = $("#player-one").val();
    playerTwoName = $("#player-two").val();
    var playerOne = new Player(playerOneName, 0);
    var playerTwo = new Player(playerTwoName, 0);

    $(".login").hide();
    $(".pig-game").show();
    $(".player-one-name").text(playerOne.name);
    $(".player-two-name").text(playerTwo.name);

    $("#roll").click(function(){
      roll();
      console.log(rolled);
      console.log(roundTotal);
    })
  })
})
