var diceRoll = Math.floor( Math.random() * 6 ) +1;
var diceRoll2 = Math.floor( Math.random() * 6 ) +1;

if(diceRoll>diceRoll2){
    document.getElementById("Results").innerHTML = `Hai Vinto Con  : ${diceRoll} il computer aveva ${diceRoll2}`;
}
else if(diceRoll===diceRoll2){
    document.getElementById("Results").innerHTML = `Hai Pareggiato Con   : ${diceRoll} il computer aveva ${diceRoll2}`;
}
else{
    document.getElementById("Results").innerHTML = `Hai Perso Con   : ${diceRoll} il computer aveva ${diceRoll2}`;
}
