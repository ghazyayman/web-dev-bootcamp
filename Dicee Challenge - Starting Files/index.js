function rollDice(di){
    var randomDice = Math.floor(6*Math.random())+1;  
    di.src = "dice/" + randomDice + ".jpg";
}

function rollDices() {
    rollDice(dice1);
    rollDice(dice2);
    rollDice(dice3);    
}

