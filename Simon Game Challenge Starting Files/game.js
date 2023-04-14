// Description: This file contains the game logic for the Simon Game
var buttonColours = ["red", "blue", "green", "yellow"];

//Create a new empty array called gamePattern
var gamePattern = [];

var userClickedPattern = [];

$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    
});

//nextSequence() is called when the user presses a key, or when the game starts 
function nextSequence() {

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}